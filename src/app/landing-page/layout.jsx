import "../globals.css";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";

export default async function LandingPageLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark ">
      <Navbar />
      <div className="container mx-auto px-4 lg:px-16 py-2">{children}</div>
      <Footer />
    </main>
  );
}
