import About from "./About"
import Contact from "./Contact"
import BannerSection from "./BannerSection"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Products from "./Products"
import Services from "./Services"


export const Home = () => {
  return (
    <>
      <div className=" w-screen h-screen">
        <NavBar />
        <BannerSection />
        <Products />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}