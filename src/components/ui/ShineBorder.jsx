export function ShineBorder({ shineColor, borderWidth = 1.5, duration = 8 }) {
  const colors = Array.isArray(shineColor) ? shineColor.join(', ') : (shineColor || '#ffffff')

  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] will-change-[background-position]"
      style={{
        padding: `${borderWidth}px`,
        backgroundImage: `radial-gradient(transparent, transparent, ${colors}, transparent, transparent)`,
        backgroundSize: '300% 300%',
        backgroundPosition: '0% 0%',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        animation: `shine-border-move ${duration}s linear infinite`,
      }}
    />
  )
}
