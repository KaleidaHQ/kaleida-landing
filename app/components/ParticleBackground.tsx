'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvasWidth) this.x = 0
        else if (this.x < 0) this.x = canvasWidth

        if (this.y > canvasHeight) this.y = 0
        else if (this.y < 0) this.y = canvasHeight
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    function animate() {
      const canvasElement = canvas!
      const context = ctx!
      
      context.clearRect(0, 0, canvasElement.width, canvasElement.height)
      for (const particle of particles) {
        particle.update(canvasElement.width, canvasElement.height)
        particle.draw(context)
      }
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

