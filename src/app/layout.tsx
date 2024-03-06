export const metadata = {
  title: 'Dicoding Search App', 
  description: 'This search app returns courses based on user input', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


