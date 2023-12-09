import gitHubBg from "/src/assets/github-mark-white.png";

function ProjectCard({ name, description, technologies, gitHubUrl }) {
  return (
    <div
      className="flex flex-col items-center w-64 h-64 mb-10 duration-300 bg-center bg-no-repeat bg-contain shadow-2xl hover:scale-110 justify-evenly"
      style={{ backgroundImage: `url(${gitHubBg})` }}>
      <div className="flex flex-col items-center justify-between w-full h-full rounded-lg bg-black/80">
        <h4 className="font-sans text-3xl font-bold text-center text-white/100">
          {name}
        </h4>
        <p className="font-sans text-xs text-center text-white/100">
          {description}
        </p>
        <p className="font-sans text-xs text-center text-white/100">
          {technologies}
        </p>
        <a
          className="font-sans text-lg text-center text-white/100"
          href={gitHubUrl}>
          View On GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
