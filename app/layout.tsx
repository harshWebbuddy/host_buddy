import { Footer, NavBar } from "@/components";
import "./globals.css";

export default function RootLayout({ children, showFooter = true }: { children: React.ReactNode, showFooter?: boolean }) {
  return (
    <html lang='en'>
      <body className='relative justify-center items-center mx-auto'>
        <NavBar />
        {children}
        <Footer showFooter={showFooter} />
      </body>
    </html>
  );
}
