import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 },
}

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6,
        delay 
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
