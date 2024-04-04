import Navbar from "../components/navbar";
import apartmentHeader from "../assets/apart-header.webp";
import Section from "../components/section";

export default function Apartments() {
  return (
    <>
      <Navbar
        navHeader={apartmentHeader}
        className="bg-cover text-white bg-center h-32 flex items-center justify-between px-4"
        buttonStyle="border px-8 p-3 border-white  text-white"
        header={"Apartments"}
        headerStyle={"text-8xl text-white text-center p-32"}
      />
      <Section />
    </>
  );
}
