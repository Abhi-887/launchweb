import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react'  // Add missing icons
import AnimatedSection from './AnimatedSection'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('/process-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()
      
      if (result.success) {
        setStatus('success')
        setMessage('Message sent successfully!')
        form.reset()
      } else {
        setStatus('error')
        setMessage(result.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send message')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-blue-950">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? We're here to help you succeed.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-purple-300 mb-2 text-sm">Your Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/20 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-purple-300 mb-2 text-sm">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/20 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-purple-300 mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/20 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-8 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 font-medium disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
              {message && (
                <div className={`text-center p-3 rounded ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Website",
                  detail: "www.launchweb.in",
                  link: "https://launchweb.in"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "+91 9810839870",
                  link: "tel:+919810839870"
                },
                {
                  icon: Mail,
                  title: "Email",
                  detail: "info@launchweb.in",
                  link: "mailto:info@launchweb.in"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  detail: "New Delhi, India",
                  link: "#"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-purple-300 font-medium">{item.title}</h3>
                    <p className="text-gray-300">{item.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
