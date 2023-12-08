import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col w-min-content bg-slate-800 h-min-content">
      <Header />
      <Contact />
      <About />
      <Projects />
    </div>
  );
}

export default App;
