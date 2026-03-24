import { useState } from 'react'

const FOOTER_LIENS = {
  Company: [
    { label: 'About Nike', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'News', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
  Collaborate: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Delivery Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Terms of Sale', href: '#' },
  ],
  Shop: [
    { label: 'How to order', href: '#' },
    { label: 'Track your order', href: '#' },
    { label: 'Return & Exchanges', href: '#' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(FOOTER_LIENS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm  hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Email Address</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 border border-black border-r-0 px-3 py-2 text-sm focus:outline-none focus:border-black"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4">
        <p className="ml-10 text-xs">
          © {new Date().getFullYear()} Nike, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
