import { Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "webbuddy",
  description: "WEBBUDDY",
};

export default function RootLayout({ children, showFooter = true }: { children: React.ReactNode, showFooter?: boolean }) {
  return (
    <html lang='en'>
      <body className='relative justify-center items-center mx-auto'>
        <NavBar />
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
