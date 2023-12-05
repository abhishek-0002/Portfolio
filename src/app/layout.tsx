import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './globals.css'
import Themecontext from '@/context/Themecontext'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/footer';

config.autoAddCss = false; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html  lang="en">
      <title>Portfolio</title>
      <Themecontext>
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>   
        </Themecontext>
    </html>
  )
}
