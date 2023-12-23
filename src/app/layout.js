import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furqan",
  description:
    "My name is Furqan and I am a full stack developer. I have working experience in react js, node.js and next.js",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thumb-secondary scrollbar-track-[#121212] scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded overflow-x-hidden"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
