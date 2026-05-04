import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG = `
precision mediump float;
uniform float u_time;
uniform vec2 u_res;
uniform float u_hue;
uniform float u_speed;
uniform float u_warp;
uniform float u_noise;
uniform float u_scan;
uniform float u_scanfreq;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

vec3 hueShift(vec3 c, float h) {
  float s = sin(h), co = cos(h);
  return c * mat3(
    0.299+0.701*co+0.168*s, 0.587-0.587*co+0.330*s, 0.114-0.114*co-0.497*s,
    0.299-0.299*co-0.328*s, 0.587+0.413*co+0.035*s, 0.114-0.114*co+0.292*s,
    0.299-0.300*co+1.250*s, 0.587-0.588*co-1.050*s, 0.114+0.886*co-0.203*s
  );
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float t = u_time * u_speed;

  vec2 wuv = uv;
  if (u_warp > 0.0) {
    float wx = fbm(uv * 2.0 + vec2(t * 0.1, 0.0));
    float wy = fbm(uv * 2.0 + vec2(0.0, t * 0.1));
    wuv += (vec2(wx, wy) - 0.5) * u_warp * 0.3;
  }

  vec2 q = vec2(fbm(wuv + t * 0.08), fbm(wuv + vec2(1.0)));
  vec2 r = vec2(
    fbm(wuv + 1.0 * q + vec2(1.7, 9.2) + t * 0.12),
    fbm(wuv + 1.0 * q + vec2(8.3, 2.8) + t * 0.10)
  );
  float f = fbm(wuv + r);

  vec3 col = mix(vec3(0.04, 0.03, 0.03), vec3(0.35, 0.12, 0.06), clamp(f * f * 4.0, 0.0, 1.0));
  col = mix(col, vec3(0.08, 0.05, 0.04), clamp(length(q), 0.0, 1.0));
  col = mix(col, vec3(0.20, 0.07, 0.04), f);

  if (u_noise > 0.0) {
    float n = hash(uv * u_res + fract(t * 37.0)) - 0.5;
    col += n * u_noise * 0.12;
  }

  if (u_scan > 0.0 && u_scanfreq > 0.0) {
    float line = sin(uv.y * u_scanfreq * 3.14159);
    col *= 1.0 - u_scan * 0.15 * (0.5 + 0.5 * line);
  }

  if (u_hue != 0.0) col = hueShift(col, u_hue);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

function compileShader(gl, type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

export function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
  className = '',
  style,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const prog = gl.createProgram()
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uHue = gl.getUniformLocation(prog, 'u_hue')
    const uSpeed = gl.getUniformLocation(prog, 'u_speed')
    const uWarp = gl.getUniformLocation(prog, 'u_warp')
    const uNoise = gl.getUniformLocation(prog, 'u_noise')
    const uScan = gl.getUniformLocation(prog, 'u_scan')
    const uScanfreq = gl.getUniformLocation(prog, 'u_scanfreq')

    let animId
    let start = null

    const resize = () => {
      canvas.width = canvas.offsetWidth * resolutionScale
      canvas.height = canvas.offsetHeight * resolutionScale
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const render = (ts) => {
      if (!start) start = ts
      const t = (ts - start) / 1000
      gl.uniform1f(uTime, t)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uHue, hueShift)
      gl.uniform1f(uSpeed, speed)
      gl.uniform1f(uWarp, warpAmount)
      gl.uniform1f(uNoise, noiseIntensity)
      gl.uniform1f(uScan, scanlineIntensity)
      gl.uniform1f(uScanfreq, scanlineFrequency)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block', ...style }}
    />
  )
}
