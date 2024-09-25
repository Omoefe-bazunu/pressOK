import About from "./About";
import Contact from "./Contact";
import BannerSection from "./BannerSection";
import Products from "./Products";
import Services from "./Services";

export const Home = () => {
  return (
    <>
      <div className="w-full">
        <BannerSection />
        <Products />
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
};
