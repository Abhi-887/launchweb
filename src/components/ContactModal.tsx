import { useEffect } from 'react'
import { X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const response = await fetch('/process-form.php', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        onClose();
      } else {
        alert(result.error || 'Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message');
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="w-full max-w-[90%] sm:max-w-[440px] relative">
                <div className="bg-gradient-to-br from-blue-950 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="p-5 sm:p-6">
                    {/* Modal content */}
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-5 pr-10">
                      Let's Talk
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-base"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-base"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none text-base"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-base font-medium"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
