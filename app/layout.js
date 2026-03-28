import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'My minimalist and youthful web design portfolio',
  keywords: 'web design, portfolio, minimalist, youthful',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans font-medium text-base p-8">
        {children}
      </body>
    </html>
  )
}
