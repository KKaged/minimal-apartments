import Navbar from "./components/navbar";
import "./App.css";
import homeHeader from "./assets/apartment-header.webp";
import apartHeader from "./assets/apart-header.webp";
import Section from "./components/section";
import Carousel from "./components/carousel";

function App() {
  const imageArray = [homeHeader, apartHeader];

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
        sectionHeader="Use MiniMAL to find your ideal modern and minimal home. - the best in
          the market"
      >
        <p className="text-gray-600 p-12 font-light text-left">{aboutOne}</p>
        <p className="text-gray-600 p-12 font-light text-left">{aboutTwo}</p>
      </Section>
      <Carousel images={imageArray} />
    </>
  );
}

export default App;
