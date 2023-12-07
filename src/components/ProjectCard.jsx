function ProjectCard({ name, description, technologies, gitHubUrl }) {
  return (
    <div className="flex flex-col items-center w-64 h-64 mb-10 bg-cover rounded-sm shadow-2xl bg-[url('https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] justify-evenly">
      <div className="flex flex-col items-center w-full bg-black/50">
        <h4 className="my-2 text-xl font-bold text-center text-white/100">
          {name}
        </h4>
        <p className="my-2 text-center text-white/100">{description}</p>
        <p className="my-2 text-white/100">{technologies}</p>
        <a className="my-2 text-white/100" href={gitHubUrl}>
          View On GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
