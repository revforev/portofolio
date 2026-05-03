import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'My minimalist and youthful web design portfolio',
  keywords: 'web design, portfolio, minimalist, youthful',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans font-medium text-base" style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
