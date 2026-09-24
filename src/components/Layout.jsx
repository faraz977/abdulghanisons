import { Link, NavLink } from 'react-router-dom'
import { company } from '../data/company'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
          <NavLink to="/" end className="flex items-center gap-3 no-underline">
            <img src="/images/logo/ags-mark.png" alt="AGS" className="h-12 w-auto" />
            <span>
              <span className="block text-lg font-semibold leading-none text-navy">
                Abdul Ghani Sons
              </span>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-blue-deep">
                Karachi, Pakistan
              </span>
            </span>
          </NavLink>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'text-blue-deep' : 'hover:text-blue-deep'
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded bg-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-paper hover:bg-blue-deep"
            >
              Request a quote
            </Link>
          </nav>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t border-navy/10 px-5 py-3 text-sm md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'text-blue-deep' : 'text-ink-soft')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-navy/10 bg-paper-deep text-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/logo/ags-mark.png" alt="" className="h-12 w-auto" />
            <p className="mt-4 text-sm leading-6 text-mist">
              Manufacturer and exporter of industrial wiping rags and cotton rags since 2012.
              Fresh mill whites and reclaimed cuts, packed to importer spec.
            </p>
          </div>
          <div className="text-sm leading-8">
            <p className="font-semibold text-navy">Quick links</p>
            <Link to="/" className="block">Home</Link>
            <Link to="/about" className="block">About us</Link>
            <Link to="/products" className="block">Products</Link>
            <Link to="/contact" className="block">Contact</Link>
          </div>
          <div className="text-sm leading-8">
            <p className="font-semibold text-navy">Rag grades</p>
            <Link to="/products?range=fresh-white" className="block">Fresh white (AGSF)</Link>
            <Link to="/products?range=reclaimed-white" className="block">Reclaimed white (AGSU)</Link>
            <Link to="/products?range=reclaimed-color" className="block">Reclaimed color (AGSUC)</Link>
            <a href="/AGS-Product-Range.pdf" className="block text-blue-deep">
              Download product PDF
            </a>
          </div>
          <div className="text-sm leading-7">
            <p className="font-semibold text-navy">Contact us</p>
            <p className="mt-2">{company.address}</p>
            <p>Call: +92 315 3035299</p>
            <p>{company.email}</p>
          </div>
        </div>
        <div className="bg-navy px-5 py-4 text-center text-xs text-linen">
          © {new Date().getFullYear()} Abdul Ghani Sons. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
