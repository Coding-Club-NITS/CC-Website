import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footercomp";
import Navbar from "./components/navbar";
import ThemeToggle from "./components/darkToggle";
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
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="light">
        <body className={`${inter.className} bg-white dark:bg-black`}>
          <Navbar />
          <ThemeToggle />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
