'use client'
import React from 'react'

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
   <section className="w-full flex justify-center items-center py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 bg-[#fafafa]">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm sm:text-base font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm sm:text-base font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm sm:text-base font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base resize-y"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-pink-600 transition mt-2 sm:mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
