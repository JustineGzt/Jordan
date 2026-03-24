import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { User, ShoppingCart, Menu, X } from 'lucide-react'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        <NavLink to="/">
          <img src="/logo.png" alt="Jordan" className="w-8 h-10 object-contain" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity">
            <User size={20} />
          </button>
          <button className="hover:opacity-60 transition-opacity">
            <ShoppingCart size={20} />
          </button>
          <button
            className="md:hidden hover:opacity-60 transition-opacity"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-nav-menu" className="md:hidden border-t border-gray-200 bg-white px-6 py-3">
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={navLinkClass} onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkClass} onClick={closeMobileMenu}>
              Shop
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
