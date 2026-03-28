'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!?'

export default function ScrambleText({ text, className }) {
  const [displayed, setDisplayed] = useState(text)
  const [fired, setFired] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          setFired(true)
          let iteration = 0
          const maxIterations = text.length * 3

          const interval = setInterval(() => {
            setDisplayed(
              text
                .split('')
                .map((char, i) => {
                  if (char === ' ') return ' '
                  if (i < Math.floor(iteration / 3)) return char
                  return CHARS[Math.floor(Math.random() * CHARS.length)]
                })
                .join('')
            )
            iteration++
            if (iteration >= maxIterations) {
              clearInterval(interval)
              setDisplayed(text)
            }
          }, 30)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [fired, text])

  return (
    <h2 ref={ref} className={className}>
      {displayed}
    </h2>
  )
}
