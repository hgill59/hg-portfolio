import { Link } from 'react-router-dom'
import usePageTitle from '../usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found | Harman Gill')

  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="text-5xl font-bold">That page doesn’t exist</h1>
      <p className="mt-4 max-w-[30rem] text-slate">
        The link may be out of date. Head back to the home page or browse my projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/" className="btn btn-primary">
          Go home
        </Link>
        <Link to="/projects" className="btn btn-outline">
          See my projects
        </Link>
      </div>
    </div>
  )
}
