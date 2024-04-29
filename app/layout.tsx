import { Footer, NavBar } from "@/components";
import "./globals.css";
import Footerall from "@/components/Footerall";

export const metadata = {
  title: "webbuddy",
  description: "WEBBUDDY",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative  justify-center items-center mx-auto'>
        <NavBar /> 
        {children}
        <Footerall/>
      </body>
    </html>
  );
}
