import React from 'react'

export default function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Formulär skickat!')
  }

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="400"
      className="bg-black text-white"
    >
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-purple-400">
          Kontakta mig
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-purple-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-800 font-bold border border-gray-600 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-purple-300"
            >
              Meddelande
            </label>
            <textarea
              rows="6"
              id="message"
              className="shadow-sm bg-gray-800 font-bold border border-gray-600 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder="Skriv ditt meddelande..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
          >
            Skicka meddelande
          </button>
        </form>
      </div>
    </section>
  )
}