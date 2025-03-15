import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Daniela Berardi",
  description: "Every home has its own soul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
