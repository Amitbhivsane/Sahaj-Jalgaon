import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/footer/Footer";
import ShreeMataji from "./Pages/shreemataji/ShreeMataji";
import Sahajayoga from "./Pages/sahajayoga/Sahajayoga";
import Center from "./Pages/center/Center";
import Events from "./Pages/eventss/Events";
import Download from "./Pages/downlo/Download";
import Memories from "./Pages/memories/Memories";
import Subtle from "./Pages/sahajayoga/Subtle";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shree-mataji" element={<ShreeMataji />} />
        <Route path="/sahaja-yoga" element={<Sahajayoga />} />
        <Route path="/centers" element={<Center />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/download" element={<Download />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/subtle" element={<Subtle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
