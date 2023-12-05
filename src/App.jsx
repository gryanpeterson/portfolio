import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
