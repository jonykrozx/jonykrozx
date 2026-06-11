import { useCallback, useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'

function polygonCollapsed(cx, cy, vertexCount) {
  const pairs = Array.from({ length: vertexCount }, () => `${cx}px ${cy}px`).join(', ')
  return `polygon(${pairs})`
}

function getClipPaths(variant, cx, cy, maxRadius, vw, vh) {
  switch (variant) {
    case 'circle':
      return [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxRadius}px at ${cx}px ${cy}px)`]
    case 'square': {
      const halfSide = Math.max(Math.max(cx, vw - cx), Math.max(cy, vh - cy)) * 1.05
      const end = [`${cx - halfSide}px ${cy - halfSide}px`, `${cx + halfSide}px ${cy - halfSide}px`, `${cx + halfSide}px ${cy + halfSide}px`, `${cx - halfSide}px ${cy + halfSide}px`].join(', ')
      return [polygonCollapsed(cx, cy, 4), `polygon(${end})`]
    }
    case 'diamond': {
      const R = maxRadius * Math.SQRT2
      const end = [`${cx}px ${cy - R}px`, `${cx + R}px ${cy}px`, `${cx}px ${cy + R}px`, `${cx - R}px ${cy}px`].join(', ')
      return [polygonCollapsed(cx, cy, 4), `polygon(${end})`]
    }
    default:
      return [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxRadius}px at ${cx}px ${cy}px)`]
  }
}

export function AnimatedThemeToggler({ className = '', duration = 400, variant = 'circle', fromCenter = false, ...props }) {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'))
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggle = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const vw = window.visualViewport?.width ?? window.innerWidth
    const vh = window.visualViewport?.height ?? window.innerHeight
    let x, y
    if (fromCenter) {
      x = vw / 2; y = vh / 2
    } else {
      const r = button.getBoundingClientRect()
      x = r.left + r.width / 2; y = r.top + r.height / 2
    }
    const maxRadius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y))

    const applyTheme = () => {
      const next = !isDark
      setIsDark(next)
      document.documentElement.classList.toggle('dark')
      localStorage.setItem('theme', next ? 'dark' : 'light')
    }

    if (typeof document.startViewTransition !== 'function') {
      applyTheme(); return
    }

    const root = document.documentElement
    root.dataset.magicuiThemeVt = 'active'
    root.style.setProperty('--magicui-theme-toggle-vt-duration', `${duration}ms`)
    const cleanup = () => {
      delete root.dataset.magicuiThemeVt
      root.style.removeProperty('--magicui-theme-toggle-vt-duration')
    }

    const transition = document.startViewTransition(() => { flushSync(applyTheme) })
    if (typeof transition?.finished?.finally === 'function') {
      let done = false
      const finish = () => {
        if (done) return
        done = true
        cleanup()
      }
      transition.finished.finally(finish)
      // Safety net: some embedded/automated browsers never resolve
      // `transition.finished`, leaving the old/new page snapshots
      // stuck on top of each other. Force cleanup after the animation
      // should have completed.
      setTimeout(finish, duration + 150)
    } else {
      cleanup()
    }

    const ready = transition?.ready
    if (ready && typeof ready.then === 'function') {
      const clipPath = getClipPaths(variant, x, y, maxRadius, vw, vh)
      ready.then(() => {
        document.documentElement.animate(
          { clipPath },
          { duration, easing: 'ease-in-out', fill: 'forwards', pseudoElement: '::view-transition-new(root)' }
        )
      })
    }
  }, [variant, fromCenter, duration, isDark])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggle}
      className={className}
      {...props}
    >
      {isDark ? <Sun className="w-3.5 h-3.5 text-[#2B2B2B]" /> : <Moon className="w-3.5 h-3.5 text-[#2B2B2B]/60" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
