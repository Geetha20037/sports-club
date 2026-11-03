import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sports', path: '/sports' },
  { name: 'Membership', path: '/membership' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090d0b]/95 backdrop-blur-xl border-b border-white/10">
      <div className="container-main h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-lime flex items-center justify-center">
            <span className="font-display text-3xl font-black text-black">A</span>
          </div>
          <div>
            <p className="font-display text-2xl font-black tracking-wider leading-none">APEX</p>
            <p className="text-[9px] text-lime tracking-[3px] font-bold mt-1">ATHLETIC CLUB</p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-wider font-bold transition-colors ${isActive ? 'text-lime' : 'text-gray-300 hover:text-lime'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link to="/membership" className="hidden xl:inline-flex lime-button !py-3 !px-5">
          Join the club <ArrowUpRight size={16} />
        </Link>

        <button
          className="xl:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {open && (
        <nav className="xl:hidden bg-[#0d140f] border-t border-white/10 px-6 py-5 flex flex-col gap-5">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `text-sm font-bold uppercase tracking-wider ${isActive ? 'text-lime' : 'text-white'}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/membership" onClick={() => setOpen(false)} className="lime-button">
            Join the club <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  )
}
