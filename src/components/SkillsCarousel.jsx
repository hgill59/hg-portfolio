import { useState } from 'react'
import { skills } from '../content/skills'

function Glyph({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="#14171c"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === 'search' ? (
        <>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l5 5" />
        </>
      ) : (
        <>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        </>
      )}
    </svg>
  )
}

function SkillList({ hidden = false }) {
  return (
    <ul className={`marquee-list ${hidden ? 'marquee-copy' : ''}`} aria-hidden={hidden || undefined}>
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="flex w-36 shrink-0 flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-6"
        >
          {skill.icon ? (
            <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
              <path d={skill.icon.path} fill={`#${skill.icon.hex}`} />
            </svg>
          ) : (
            <Glyph type={skill.glyph} />
          )}
          <span className="text-center font-display font-semibold leading-tight">{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SkillsCarousel() {
  const [paused, setPaused] = useState(false)

  return (
    <div>
      <div
        className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        data-paused={paused}
      >
        <div className="marquee-track">
          <SkillList />
          <SkillList hidden />
        </div>
      </div>
{/* 
      <div className="marquee-controls mx-auto mt-5 max-w-6xl px-5 sm:px-8">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="text-link"
        >
          {paused ? 'Resume scrolling' : 'Pause scrolling'}
        </button>
      </div> */}
    </div>
  )
}
