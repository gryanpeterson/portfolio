import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <h2 className="mx-4 my-12 text-4xl font-bold text-slate-300">Projects</h2>
      <div className="flex flex-col items-center gap-6 sm:flex-wrap sm:flex-row sm:justify-center">
        <ProjectCard
          name="Pokemon Memory Game"
          description="A memory card game that tests the players memory based on previous card selections."
          technologies="React, TailwindCSS, PokeAPI"
          gitHubUrl="https://github.com/gryanpeterson/pokemon-memory-game"
        />
        <ProjectCard
          name="CV Application"
          description="A form-based CV generator"
          technologies="React, TailwindCSS"
          gitHubUrl="https://github.com/gryanpeterson/cv-application"
        />
        <ProjectCard
          name="Inventory Management System"
          description="A desktop GUI application that tracks inventory."
          technologies="Java, JavaFX"
          gitHubUrl="https://github.com/gryanpeterson/inventory-management-system"
        />
        <ProjectCard
          name="Appointment Scheduler"
          description="A desktop GUI application that allows a user to schedule appointments for customers."
          technologies="Java, JavaFX, MySQL"
          gitHubUrl="https://github.com/gryanpeterson/appointment-scheduler"
        />
      </div>
    </>
  );
}
export default Projects;
