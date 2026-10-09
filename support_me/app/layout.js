import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export const metadata = {
  title: "Support Me : A platform to support your favorite creators",
  description: "This is a platform where you can support your favorite creators by donating to them.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
             <Navbar />
             <div className=" min-h-[85vh] w-full px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
