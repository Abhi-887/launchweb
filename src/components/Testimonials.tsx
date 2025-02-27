import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-Commerce Owner",
    content: "LaunchWeb transformed my brick-and-mortar store into a thriving online business. Their expertise in e-commerce was invaluable.",
  },
  {
    name: "Michael Chen",
    role: "Tech Startup Founder",
    content: "The team's technical knowledge and attention to detail helped us launch our MVP ahead of schedule. Highly recommended!",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director",
    content: "Their SEO strategies helped us achieve page one rankings for our key terms. Our organic traffic has increased by 200%.",
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-purple-300 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300">Hear from businesses we've helped launch</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-purple-500/20"
            >
              <Quote className="w-10 h-10 text-purple-400 mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="text-purple-300 font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
