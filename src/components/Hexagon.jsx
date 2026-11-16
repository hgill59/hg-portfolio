import { useState } from 'react'

// A hexagon-cropped portrait with an orange outline that draws itself on load.
export function HexPortrait({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative aspect-[100/115.47] ${className}`}>
      <svg
        viewBox="0 0 100 115.47"
        className="absolute inset-0 h-full w-full translate-x-[6%] translate-y-[4%] overflow-visible"
        aria-hidden="true"
      >
        <polygon
          points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87"
          fill="none"
          stroke="#F4B63A"
          strokeWidth="3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength="1"
          className="hex-draw"
        />
      </svg>
      <div className="absolute inset-0 bg-night [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div role="img" aria-label={alt} className="flex h-full w-full items-center justify-center">
            <img src="/logo.svg" alt="" className="h-1/2 w-1/2" />
          </div>
        )}
      </div>
    </div>
  )
}
