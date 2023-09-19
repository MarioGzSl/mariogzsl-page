import './globals.css'
import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'MarioGuz',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
