import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire envoye :', form)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black uppercase mb-10">Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
          required
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
          required
        />
        <input
          type="phone"
          placeholder="06 00 00 00 00"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
          required
        />
        <textarea
          placeholder="Enter your main text here ..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black resize-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white py-3 text-sm font-bold uppercase hover:bg-gray-800 transition-colors"
        >
          Submit Form
        </button>
      </form>
    </div>
  )
}
