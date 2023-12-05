import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="flex flex-col items-center">
        <ProjectCard name="Project Name" description="Description Text" />
        <ProjectCard name="Project Name" description="Description Text" />
        <ProjectCard name="Project Name" description="Description Text" />
        <ProjectCard name="Project Name" description="Description Text" />
      </div>
    </>
  );
}
export default Projects;
