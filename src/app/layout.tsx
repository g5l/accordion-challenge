import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Accordion Challenge - FE Technical Challenge on Lodgify",
  description: "Welcome to the Accordion Challenge project. This is a project for a FE Technical Challenge on Lodgify",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Nunito:wght@700;800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script async src="https://kit.fontawesome.com/492a301f05.js" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
