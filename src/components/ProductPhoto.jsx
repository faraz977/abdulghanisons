import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function shouldContain(src) {
  return src.endsWith('.png') || src.includes('/categories/') || src.includes('/grades/')
}

function ImageLightbox({ src, alt, onClose }) {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const drag = useRef(null)

  function zoomBy(delta) {
    setScale((current) => {
      const next = Math.min(4, Math.max(1, Math.round((current + delta) * 100) / 100))
      if (next === 1) setOffset({ x: 0, y: 0 })
      return next
    })
  }

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === '+' || event.key === '=') zoomBy(0.25)
      if (event.key === '-') zoomBy(-0.25)
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  function onPointerDown(event) {
    if (scale <= 1) return
    event.currentTarget.setPointerCapture(event.pointerId)
    drag.current = {
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    }
  }

  function onPointerMove(event) {
    if (!drag.current) return
    setOffset({
      x: event.clientX - drag.current.x,
      y: event.clientY - drag.current.y,
    })
  }

  function onPointerUp() {
    drag.current = null
  }

  return (
    <div
      className="fixed inset-0 flex flex-col bg-[#0b2c4d]/95"
      style={{ zIndex: 9999 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Zoomed view of ${alt}`}
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-paper" onClick={(event) => event.stopPropagation()}>
        <p className="truncate text-sm font-medium">{alt}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded bg-paper/10 px-3 py-1.5 text-lg leading-none hover:bg-paper/20"
            onClick={() => zoomBy(-0.25)}
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="w-12 text-center text-xs tabular-nums">{Math.round(scale * 100)}%</span>
          <button
            type="button"
            className="rounded bg-paper/10 px-3 py-1.5 text-lg leading-none hover:bg-paper/20"
            onClick={() => zoomBy(0.25)}
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className="rounded bg-paper/10 px-3 py-1.5 text-xs uppercase tracking-wide hover:bg-paper/20"
            onClick={() => {
              setScale(1)
              setOffset({ x: 0, y: 0 })
            }}
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded bg-blue px-3 py-1.5 text-xs uppercase tracking-wide hover:bg-blue-deep"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <div
        className="relative min-h-0 flex-1 overflow-hidden"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => {
          event.preventDefault()
          zoomBy(event.deltaY < 0 ? 0.15 : -0.15)
        }}
      >
        <img
          src={src}
          alt={alt}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={() => zoomBy(scale < 2 ? 1 : -scale + 1)}
          style={{
            transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${scale})`,
            cursor: scale > 1 ? 'grab' : 'zoom-in',
          }}
          className="absolute left-1/2 top-1/2 max-h-[88%] max-w-[92%] object-contain select-none"
          draggable={false}
        />
      </div>
      <p className="px-4 py-3 text-center text-xs text-paper/70">
        Scroll or use + / − to zoom. Drag to pan. Esc or Close to exit.
      </p>
    </div>
  )
}

export default function ProductPhoto({ src, alt, height = 'h-52', zoomable = false }) {
  const [open, setOpen] = useState(false)
  const contain = shouldContain(src)

  const frame = (
    <div className="rounded-lg bg-paper p-2 shadow-[0_10px_28px_rgba(11,44,77,0.1)] ring-1 ring-navy/10">
      <div
        className={`relative ${height} overflow-hidden rounded-md bg-[#f7fbfe] ring-2 ring-blue/80 ${
          contain ? 'flex items-center justify-center p-4' : ''
        }`}
      >
        <img
          src={src}
          alt={alt}
          className={contain ? 'max-h-full max-w-full object-contain' : 'h-full w-full object-cover'}
        />
        {zoomable && (
          <span className="pointer-events-none absolute bottom-3 right-3 rounded bg-navy/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-paper">
            Click to zoom
          </span>
        )}
      </div>
    </div>
  )

  if (!zoomable) return frame

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
        aria-label={`Zoom ${alt}`}
      >
        {frame}
      </button>
      {open &&
        createPortal(<ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />, document.body)}
    </>
  )
}
