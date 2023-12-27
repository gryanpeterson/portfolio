import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col px-8 lg:flex-row w-min-content bg-slate-900 h-min-content">
      <div className="lg:flex lg:flex-col lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
        <Header />
        <Contact />
      </div>
      <div className="mb-8 lg:w-1/2">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
