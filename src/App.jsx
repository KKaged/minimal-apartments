import Navbar from "./components/navbar";
import "./App.css";
import homeHeader from "./assets/apartment-header.webp";
import apartHeader from "./assets/apart-header.webp";
import Section from "./components/section";
import Carousel from "./components/carousel";
import winterApart from "./assets/modern-apartment-winter.jpeg";
import darkTiny from "./assets/dark-tiny.webp";
import Team from "./assets/team.jpeg";
import Footer from "./components/footer";

function App() {
  const imageArray = [homeHeader, apartHeader, winterApart, darkTiny];

  const aboutOne =
    "Whether you want a modern apartment in the heart of the city or a minimalistic home in the suburbs, MiniMAL is here for you.";

  const aboutTwo =
    "Our team of real estate experts is here to help you every step of the way. From finding the perfect property to negotiating the best price, we're here to make your home buying experience as smooth and stress-free as possible. So why wait? Start your search for the perfect modern and minimal home today.";
  return (
    <>
      <Navbar
        navHeader={homeHeader}
        className="bg-cover text-white bg-center h-32 flex items-center justify-between px-4"
        buttonStyle="border px-8 p-3 border-white text-white"
        headerStyle="text-8xl text-white text-center p-32"
        header="MiniMAL"
      />
      <Section
        sectionHeader="Use MiniMAL to find your ideal modern and minimal home - the best in
          the market"
        sectionTitle="About Us"
      >
        <p className="text-gray-600 w-1/2 font-light text-left">{aboutOne}</p>
        <p className="text-gray-600 w-1/2 font-light text-left">{aboutTwo}</p>
      </Section>
      <Carousel images={imageArray} />

      <Section sectionHeader="Our Mission" sectionTitle={"Our Team"}>
        <p className="text-gray-600 py-12 font-light text-left">
          We know how difficult it can be to find the perfect home. That's why
          we created MiniMAL - to help you find the modern and minimal home of
          your dreams. Our team of real estate experts is here to help you every
          step of the way. From finding the perfect property to negotiating the
          price. We're here to make your home buying experience as smooth as
          possible.
        </p>
        <img
          className="w-6/12 p-6"
          src={Team}
          alt="Group of Real Estate Agents"
        />
      </Section>
      <Section sectionTitle={"Location"} sectionHeader={"Where are we based?"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208004.9165165726!2d139.43024960243804!3d35.45289254701687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185becbbb66509%3A0x69683f660285400!2sYokohama%2C%20Kanagawa!5e0!3m2!1sen!2sjp!4v1712542984337!5m2!1sen!2sjp"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
      <Footer />
    </>
  );
}

export default App;
