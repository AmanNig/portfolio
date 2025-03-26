import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Aman Nigam",
  description: "Aman Nigam's portfolio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='style-1' className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}