import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { projects } from '../content/projects'
import { HexPortrait } from '../components/Hexagon'
import ProjectRow from '../components/ProjectRow'
import usePageTitle from '../usePageTitle'

export default function Home() {
  usePageTitle(`${site.name} | ${site.role}`)
  const featured = projects.slice(0, 3)

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="hex-bg absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:pt-20">
          <div>
            <h1 className="font-display text-[clamp(3.75rem,12vw,8.5rem)] font-bold leading-[0.9] tracking-tighter">
              <span className="block">{site.firstName}</span>
              <span className="block">{site.lastName}</span>
            </h1>
            <p className="mt-7 font-display text-2xl font-medium sm:text-3xl">
              {site.role} and founder of {site.business}
            </p>
            <p className="mt-4 max-w-[34rem] text-slate">
              I build, fix and grow websites for homebuilders, rental companies and non-profits.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn-primary">
                See my projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in touch
              </Link>
            </div>
          </div>

          <HexPortrait
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            className="mx-auto w-64 sm:w-80 lg:mr-6 lg:w-full lg:max-w-sm"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
          <h2 className="text-4xl font-bold sm:text-5xl">Selected work</h2>
          <Link to="/projects" className="text-link">
            All projects
          </Link>
        </div>
        {featured.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </section>

      <section className="on-dark bg-night text-fog">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Need a site built, fixed or found?</h2>
            <p className="mt-3 max-w-[34rem] text-fog/80">
              Tell me what you’re working on and I’ll get back to you by email.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary shrink-0">
            Contact me
          </Link>
        </div>
      </section>
    </>
  )
}
