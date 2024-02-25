import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import CSSVariableProvider from "@/components/CSSVariableProvider";
import {
  generateCountryVisits,
  generateViewersDetails,
  generateVisits,
} from "@/libs/landing-page/actions";
import ProgressBarProvider from "../components/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furqan",
  description:
    "My name is Furqan and I am a full stack developer. I have working experience in react js, node.js and next.js",
};

export default function RootLayout({ children }) {
  generateVisits();
  generateCountryVisits();
  generateViewersDetails();
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-thumb-secondary scrollbar-track-dark scrollbar-track-rounded scrollbar-thumb-rounded overflow-x-hidden"
    >
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <CSSVariableProvider>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </CSSVariableProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
