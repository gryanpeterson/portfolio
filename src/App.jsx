import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col w-screen bg-slate-800 h-min-content">
      <Header />
      <Contact />
      <About />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
