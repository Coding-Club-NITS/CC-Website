import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footercomp";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Club NITS",
  description: "The official website of Coding Club NIT Silchar",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // <SmoothScrolling>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    // </SmoothScrolling>
  );
}
