'use client'

import { useState } from 'react'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function PortfolioItem({ href, image, alt, title, description, bordered, extras }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-[calc(50%-10px)] mb-5">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={`${BASE}${image}`}
          alt={alt}
          className={`w-full h-auto${bordered ? ' border border-[#3e3e40]' : ''}`}
        />
      </a>
      <button
        onClick={() => setOpen(!open)}
        className="relative w-[30px] h-[30px] my-2 cursor-pointer bg-transparent border-none outline-none"
        aria-label="Toggle description"
      >
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[14px] h-[2px] bg-primary transition-transform duration-300"
          style={{ transform: open ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) rotate(90deg)' }}
        />
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[14px] h-[2px] bg-primary transition-transform duration-300"
          style={{ transform: open ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%) rotate(0deg)' }}
        />
      </button>
      {open && (
        <div>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent no-underline">
            <h3 className="text-3xl font-semibold">{title}</h3>
          </a>
          <p className="py-4">{description}</p>
          {extras}
        </div>
      )}
    </div>
  )
}
