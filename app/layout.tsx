/**
 * @description Layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Metadata} from 'next'
import './globals.css'
import {Suspense} from 'react'

export const metadata: Metadata = {
  title: 'Next.js | Torus',
  description: 'A torus inside a Next.js app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-black text-white grid place-items-center">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
