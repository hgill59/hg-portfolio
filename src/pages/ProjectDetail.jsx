import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../content/projects'
import Img from '../components/Img'
import usePageTitle from '../usePageTitle'
import NotFound from './NotFound'

function Meta({ label, children }) {
  return (
    <div>
      <dt className="font-display font-semibold">{label}</dt>
      <dd className="mt-0.5 text-slate">{children}</dd>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  usePageTitle(project ? `${project.title} | Harman Gill` : 'Project not found | Harman Gill')

  if (!project) return <NotFound />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const host = project.liveUrl ? new URL(project.liveUrl).host : null

  return (
    <article className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
      <Link to="/projects" className="text-link">
        All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-5xl font-bold sm:text-6xl">{project.title}</h1>
        <p className="mt-4 text-xl text-slate">{project.tagline}</p>
      </header>

      <dl className="mt-10 grid gap-6 border-y border-ink/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
        <Meta label="Type">{project.type}</Meta>
        <Meta label="My role">{project.role}</Meta>
        {project.team && <Meta label="Team">{project.team}</Meta>}
        <Meta label="Tools">{project.tools.join(', ')}</Meta>
        {project.liveUrl && (
          <Meta label="Live site">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link text-ink"
            >
              {host}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Meta>
        )}
      </dl>

      <div className="mt-10">
        {project.clip ? (
          <video
            src={project.clip}
            controls
            muted
            loop
            playsInline
            className="aspect-[16/10] w-full bg-ink object-cover"
          />
        ) : (
          <Img src={project.image} alt={project.imageAlt} ratio="aspect-[16/9]" />
        )}
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[14rem_1fr]">
        <h2 className="text-3xl font-bold">The brief</h2>
        <p className="max-w-[40rem]">{project.brief}</p>

        <h2 className="text-3xl font-bold">My process</h2>
        <div className="space-y-12">
          {project.process.map((step) => (
            <section key={step.title} className="max-w-3xl">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 max-w-[40rem]">{step.text}</p>
              {step.shot && (
                <Img src={step.shot.src} alt={step.shot.alt} className="mt-5" />
              )}
            </section>
          ))}
        </div>

        <h2 className="text-3xl font-bold">The result</h2>
        <p className="max-w-[40rem]">{project.result}</p>

        <h2 className="text-3xl font-bold">What I learned</h2>
        <p className="max-w-[40rem]">{project.learned}</p>
      </div>

      <nav
        aria-label="Next project"
        className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-8"
      >
        <Link to="/projects" className="text-link">
          All projects
        </Link>
        {next.slug !== project.slug && (
          <Link to={`/projects/${next.slug}`} className="text-link">
            Next: {next.title}
          </Link>
        )}
      </nav>
    </article>
  )
}
