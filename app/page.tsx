'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import RetroGrid from './components/RetroGrid'
import CRTOverlay from './components/CRTOverlay'
import { Space_Grotesk, Chakra_Petch } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <BootSequence />
  }

  return (
    <main className={`min-h-screen bg-deep-space text-neon-green ${spaceGrotesk.className}`}>
      <RetroGrid />
      <div className="relative z-10">
        <Header chakraPetch={chakraPetch} />
        <HeroSection />
        <MainContent chakraPetch={chakraPetch} />
        <Footer />
      </div>
      <CRTOverlay />
    </main>
  )
}

function BootSequence() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-neon-green font-mono text-xl">
        <p>KALEIDA OS v1.0</p>
        <p>Initializing...</p>
        <p className="animate-pulse">Press any key to continue</p>
      </div>
    </div>
  )
}

