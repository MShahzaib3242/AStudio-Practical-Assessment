import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HeroUIProvider } from "@heroui/react";

export default function Layout(): JSX.Element {
  return (
    <HeroUIProvider>
      <section className="relative bg-gradient-to-tl from-primaryBlue to-primaryBlue/20">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </HeroUIProvider>
  );
}
