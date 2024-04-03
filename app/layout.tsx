import { Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "webbuddy",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative   w-9/12 justify-center items-center mx-auto'>
        <NavBar /> {/* Corrected import */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
