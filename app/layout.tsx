import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'floux - AI-Powered Voice Notes',
  description: 'Capture your thoughts before they disappear. AI-powered voice notes that transform your ideas into organized, searchable insights.',
  keywords: ['voice notes', 'AI transcription', 'note taking', 'productivity', 'thought capture'],
  authors: [{ name: 'floux' }],
  creator: 'floux',
  publisher: 'floux',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://floux.app'),
  openGraph: {
    title: 'floux - AI-Powered Voice Notes',
    description: 'Capture your thoughts before they disappear. AI-powered voice notes that transform your ideas into organized, searchable insights.',
    url: 'https://floux.app',
    siteName: 'floux',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'floux - AI-Powered Voice Notes',
    description: 'Capture your thoughts before they disappear. AI-powered voice notes that transform your ideas into organized, searchable insights.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
