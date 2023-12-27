import TechnologyButton from "./TechnologyButton";

function ProjectCard({
  thumbnail,
  name,
  description,
  technologies,
  gitHubUrl,
}) {
  return (
    <div className="grid p-4 w-5/6 grid-cols-[1fr_3fr] auto-rows-min lg:hover:bg-slate-800 rounded-md w-5/6 lg:w-5/6 place-items-center lg:duration-300 lg:hover:scale-105 ">
      <img
        className="row-span-4 "
        src={thumbnail}
        alt="A thumbnail image of the application"
      />
      <h4 className="p-1 px-4 font-bold text-center text-slate-300 text-md hover:text-cyan-200">
        {name}
      </h4>
      <p className="p-1 px-4 text-xs text-slate-400">{description}</p>

      <div className="flex flex-row flex-wrap justify-center p-1">
        {technologies.map((tech) => {
          return <TechnologyButton name={tech} />;
        })}
      </div>
      <a className="my-4 text-xs text-slate-300" href={gitHubUrl}>
        View Project On GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
