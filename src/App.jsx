import Navbar from "./components/navbar";
import "./App.css";
import homeHeader from "./assets/apartment-header.webp";

function App() {
  return (
    <>
      <Navbar
        navHeader={homeHeader}
        className="bg-cover text-white bg-center h-32 flex items-center justify-between px-4"
        buttonStyle="border px-8 p-3 border-white text-white"
        headerStyle="text-8xl text-white text-center p-32"
        header="MiniMAL"
      />
    </>
  );
}

export default App;
