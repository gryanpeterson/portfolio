import ProjectCard from "./ProjectCard";
import gitHubLogo from "/src/assets/github-mark-white.png";
import pokemonThumbnail from "/src/assets/pokemonThumbnail.png";
import cvThumbnail from "/src/assets/cvThumbnail.png";
import inventoryThumbnail from "/src/assets/inventoryThumbnail.png";

function Projects() {
  return (
    <>
      <h2 className="my-12 text-3xl font-bold text-slate-300">Projects</h2>
      <div className="flex flex-col items-center gap-6 sm:flex-wrap sm:flex-row sm:justify-center">
        <ProjectCard
          thumbnail={pokemonThumbnail}
          name="Pokemon Memory Game"
          description="A memory card game that tests the players memory based on previous card selections."
          technologies={["React", "TailwindCSS", "PokeAPI", "Vite", "VS Code"]}
          gitHubUrl="https://github.com/gryanpeterson/pokemon-memory-game"
        />
        <ProjectCard
          thumbnail={cvThumbnail}
          name="CV Application"
          description="A form-based CV generator."
          technologies={["React", "TailwindCSS", "Vite", "VS Code"]}
          gitHubUrl="https://github.com/gryanpeterson/cv-application"
        />
        <ProjectCard
          thumbnail={gitHubLogo}
          name="Heart Disease Predictor"
          description="A Jupyter Notebook application that uses independant variables to calculate if a person is prone to heart disease by using a heart disease dataset."
          technologies={[
            "Python",
            "NumPy",
            "SciKit Learn",
            "Pandas",
            "Jupyter Notebook",
          ]}
          gitHubUrl="https://github.com/gryanpeterson/"
        />
        <ProjectCard
          thumbnail={inventoryThumbnail}
          name="Inventory Management System"
          description="A desktop GUI application that tracks inventory."
          technologies={["Java", "JavaFX", "IntelliJ"]}
          gitHubUrl="https://github.com/gryanpeterson/inventory-management-system"
        />
        <ProjectCard
          thumbnail={gitHubLogo}
          name="Appointment Scheduler"
          description="A desktop GUI application that allows a user to schedule appointments for customers."
          technologies={["Java", "JavaFX", "SQL", "MySQL", "IntelliJ"]}
          gitHubUrl="https://github.com/gryanpeterson/appointment-scheduler"
        />
      </div>
    </>
  );
}
export default Projects;
