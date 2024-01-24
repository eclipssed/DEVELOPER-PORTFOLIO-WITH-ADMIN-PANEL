import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import CSSVariableProvider from "@/components/CSSVariableProvider";
import { getImages } from "@/libs/data";
const inter = Inter({ subsets: ["latin"] });

// const images = await getImages().then((data) => JSON.parse(data));
// const logo = images.logo.slice(8);
// console.log(logo);

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
      className="scroll-smooth scrollbar-thumb-secondary scrollbar-track-dark scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded overflow-x-hidden"
    >
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <CSSVariableProvider>{children}</CSSVariableProvider>
      </body>
    </html>
  );
}
