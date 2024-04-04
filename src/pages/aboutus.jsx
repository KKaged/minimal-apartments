import Navbar from "../components/navbar";
import Section from "../components/section";

export default function AboutUs() {
  return (
    <>
      <Navbar
        navHeader={null}
        className="bg-cover text-black bg-center h-32 flex items-center justify-between px-4"
        buttonStyle={"border px-8 p-3 border-black  text-black"}
        header={null}
        headerStyle={null}
      />
      <Section />
    </>
  );
}
