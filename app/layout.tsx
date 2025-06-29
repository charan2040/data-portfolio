import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KL | Portfolio',
  description: 'Portfolio website of K L Charan showcasing full-stack projects and skills.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
