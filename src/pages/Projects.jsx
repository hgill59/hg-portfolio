import { projects } from '../content/projects'
import ProjectRow from '../components/ProjectRow'
import usePageTitle from '../usePageTitle'

export default function Projects() {
  usePageTitle('Projects | Harman Gill')

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
      <h1 className="text-5xl font-bold sm:text-6xl">Projects & Work</h1>
      <div className="mt-8">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} showRole />
        ))}
      </div>
    </div>
  )
}
