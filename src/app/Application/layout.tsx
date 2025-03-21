import { HeadeInstitutional } from '../components/Header/HeaderInstitutional'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen ">
        <HeadeInstitutional />
        {children}
      </body>
    </html>
  )
}
