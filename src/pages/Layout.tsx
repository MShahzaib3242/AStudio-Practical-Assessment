import { Outlet } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";

import Footer from "../components/Footer";
import Header from "../components/Header";

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
