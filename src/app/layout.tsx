import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Provider } from '@/components/Providers'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/Footer'
import Head from 'next/head'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FDemy - Journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
        <link rel="preload" href="/globals.css" as="style" />
      </Head>
      <body className={cn(
        lexend.className,'antialiased min-h-screen'
      )}>
        <Provider>
        <Navbar/>
        {children}
        <Toaster/>
        <Footer/>
        </Provider>
        </body>
    </html>
  )
}
