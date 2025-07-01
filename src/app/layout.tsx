import type { Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { Geist, Geist_Mono } from 'next/font/google'

import Footer from '@/components/common/Footer'
import Navigation from '@/components/common/Navigation'
import { getMetadata } from '@/constants/metadata'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata()
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <div className="flex-1 pt-18">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
