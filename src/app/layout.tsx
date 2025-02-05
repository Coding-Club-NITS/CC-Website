import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footercomp";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
