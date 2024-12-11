import './globals.css'
import { Space_Grotesk as SpaceGrotesk, Chakra_Petch as ChakraPetch } from 'next/font/google'

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] })
const chakraPetch = ChakraPetch({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Kaleida - Technology Incubator & R&D Lab',
  description: 'Exploring the frontiers of technology and innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

