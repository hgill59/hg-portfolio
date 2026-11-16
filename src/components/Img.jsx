import { useState } from 'react'

// Shows the image if the file exists. If it is missing, shows a quiet hexagon-pattern
// tile with the alt text, so the page never shows a broken-image icon.
export default function Img({
  src,
  alt,
  className = '',
  ratio = 'aspect-[16/10]',
  fit = 'object-cover',
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`hex-tile flex items-end p-4 text-sm leading-snug text-slate ${ratio} ${className}`}
      >
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full ${fit} ${ratio} ${className}`}
    />
  )
}
