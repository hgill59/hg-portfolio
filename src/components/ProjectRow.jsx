import { Link } from 'react-router-dom'
import Img from './Img'

export default function ProjectRow({ project, showRole = false }) {
  const to = `/projects/${project.slug}`

  return (
    <article className="grid gap-6 border-t border-ink/15 py-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12">
      <Link to={to} tabIndex={-1} aria-hidden="true" className="block">
        <Img src={project.image} alt={project.imageAlt} />
      </Link>

      <div>
        <h3 className="mt-1 text-3xl font-bold sm:text-4xl">
          <Link to={to} className="hover:underline decoration-ember decoration-2 underline-offset-4">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-[34rem]">{project.tagline}</p>
        {showRole && (
          <p className="mt-3 max-w-[34rem] text-slate">
            <span className="font-display font-semibold text-ink">My role: </span>
            {project.role}
          </p>
        )}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-ink/25 px-3 py-0.5 font-display text-sm font-medium"
            >
              {tool}
            </li>
          ))}
        </ul>
        <Link to={to} className="text-link mt-6 inline-block">
          Read the case study
        </Link>
      </div>
    </article>
  )
}
