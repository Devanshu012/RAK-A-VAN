import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "RAK A VAN – Australia's #1 Van Shelving & Storage System",
  description: "Australia's first van shelving company. Trade kits, frames, bins, accessories and StorageTek for builders, electricians, plumbers, painters and more.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* ── Chatbot placeholder — wire up your widget here ── */}
        <div id="chatbot-root" />
      </body>
    </html>
  )
}
