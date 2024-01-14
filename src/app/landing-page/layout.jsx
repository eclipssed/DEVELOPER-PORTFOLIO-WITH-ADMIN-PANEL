import "../globals.css";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";

const fetchText = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/text");
    const data = await res.json();
    // console.log(res);
    return data[0].logo;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export default async function RootLayout({ children }) {
  const logo = await fetchText();
  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark ">
      <Navbar logo={logo} />
      <div className="container mx-auto px-4 lg:px-16 py-2">{children}</div>
      <Footer />
    </main>
  );
}
