import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hypha DAO Ecosystem - Decentralized Autonomous Organization Platform',
  description: 'Explore the Hypha DAO flywheel ecosystem featuring NGO micro-grants, creator collectives, freelancer platforms, and real estate DAOs. Built on transparent, efficient blockchain technology.',
  keywords: 'DAO, blockchain, decentralized, NGO, creators, freelancers, real estate, Hypha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}