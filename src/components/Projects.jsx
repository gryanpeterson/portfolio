import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <h2 className="mx-4 my-4 text-4xl font-bold text-slate-300">Projects</h2>
      <div className="flex flex-col items-center">
        <ProjectCard
          name="Pokemon Memory Game"
          description="A memory card game that tests the players memory based on previous card selections."
          technologies="React, TailwindCSS, PokeAPI"
        />
        <ProjectCard
          name="CV Application"
          description="A form-based CV generator"
          technologies="React, TailwindCSS"
        />
        <ProjectCard
          name="Inventory Management System"
          description="A desktop GUI application that tracks inventory."
          technologies="Java, JavaFX"
        />
        <ProjectCard
          name="Appointment Scheduler"
          description="A desktop GUI application that allows a user to schedule appointments for customers."
          technologies="Java, JavaFX, MySQL"
        />
      </div>
    </>
  );
}
export default Projects;
