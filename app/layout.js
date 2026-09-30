import { Inter } from "next/font/google"; // Change from "next/font/local" or Geist
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Configure the Inter font instead
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Pay me",
  description: "To get funding from anyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the inter variable class here */}
      
      <body className={`${inter.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
