import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
