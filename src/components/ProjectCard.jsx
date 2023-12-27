import TechnologyButton from "./TechnologyButton";

function ProjectCard({ thumbnail, name, description, technologies }) {
  return (
    <div className="grid p-4 w-5/6 grid-cols-[1fr_3fr] auto-rows-min bg-slate-700/20 rounded-md w-5/6 lg:w-5/6 place-items-center  duration-300 shadow-2xl hover:scale-110 ">
      <img
        className="row-span-3 "
        src={thumbnail}
        alt="A thumbnail image of the application"
      />
      <h4 className="p-1 px-4 font-bold text-center text-slate-300 text-md">
        {name}
      </h4>
      <p className="p-1 px-4 text-xs text-slate-400">{description}</p>

      <div className="flex flex-row flex-wrap justify-center p-1">
        {technologies.map((tech) => {
          return <TechnologyButton name={tech} />;
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
