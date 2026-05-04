import { motion } from 'framer-motion'

const animations = {
  fadeIn: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
    show: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
}

function splitBy(text, by) {
  if (by === 'line') return text.split('\n').filter(l => l.trim() !== '')
  if (by === 'word') return text.split(/\s+/)
  return text.split('').map(c => c === ' ' ? ' ' : c)
}

export function TextAnimate({
  children,
  animation = 'fadeIn',
  by = 'line',
  as: Tag = 'p',
  duration = 0.4,
  delay = 0,
  staggerDelay = 0.08,
  className = '',
  style,
}) {
  const variant = animations[animation] ?? animations.fadeIn
  const units = splitBy(typeof children === 'string' ? children : '', by)
  const isInline = by === 'word' || by === 'character'

  return (
    <Tag className={className} style={style}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          variants={variant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration, delay: delay + i * staggerDelay, ease: 'easeOut' }}
          style={{ display: by === 'line' ? 'block' : 'inline-block', whiteSpace: unit === ' ' ? 'pre' : 'normal' }}
        >
          {by === 'word' && i < units.length - 1 ? unit + ' ' : unit}
        </motion.span>
      ))}
    </Tag>
  )
}
