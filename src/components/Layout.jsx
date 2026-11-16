import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { site } from '../content/site'
import Logo from './Logo'
import ScrollToTop from './ScrollToTop'

const navLinkClass = ({ isActive }) =>
  `border-b-2 py-1 transition-colors ${
    isActive ? 'border-ember' : 'border-transparent hover:border-ink/30'
  }`

export default function Layout() {
  const isHome = useLocation().pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 border-b border-mist backdrop-blur ${
          isHome ? 'bg-white/90' : 'bg-fog/90'
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
        >
          <Link
            to="/"
            aria-label={`${site.name}, home`}
            className="flex items-center gap-3 font-display text-lg font-bold"
          >
            <Logo className="h-9 w-9" />
            <span className="hidden sm:inline">{site.name}</span>
          </Link>
          <ul className="flex items-center gap-5 font-display text-base font-medium sm:gap-8">
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="on-dark bg-night text-fog">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-12 w-12" />
            <div>
              <p className="font-display text-lg font-bold">{site.name}</p>
              <p className="text-sm text-fog/75">{site.role}, {site.business}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display font-medium">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline">
                Email
              </a>
            </li>
          </ul>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-fog/75 sm:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </div>
  )
}
