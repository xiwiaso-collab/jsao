export const metadata = {
  title: 'My Next.js App',
  description: 'Deployed on Vercel',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
