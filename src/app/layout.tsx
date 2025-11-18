import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
  variable: '--font-playfair-display',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Bitpan Multipurpose WooCommerce FSE Theme',
    default: 'Bitpan - Multipurpose WooCommerce FSE Block Theme',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Bitpan WooCommerce Fse block theme"
          href="/blog/feed.xml"
        />
      </head>
      <body
        className={`text-gray-950 antialiased ${playfairDisplay.variable} ${dmSans.className}`}
      >
        {children}
      </body>
    </html>
  )
}
