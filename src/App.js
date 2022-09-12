import Navbar from "./components/Navbar/navbar"
import Home from "./components/Home/Home"
import Artist from "./components/Artist/Artist";
import Roadmap from "./components/Roadmap/Roadmap";
import Faq from "./components/FAQ/FAQ"
import Minting from "./components/Minting-section/Minting-section"
function App() {
  return (
    <div className="body-bg">
      <Navbar />
      <Home />
      <Minting />
      <Roadmap/>
      <Artist />
      <Faq />
    </div>
  );
}

export default App;
