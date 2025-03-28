import { HeadeInstitutional } from '../components/Header/HeaderInstitutional'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className="w-full h-screen ">
        <HeadeInstitutional />
        {children}
      </div>
  )
}
