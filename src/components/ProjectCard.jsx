function ProjectCard({ name, imageURL, description, gitHubUrl }) {
  return (
    <div className="p-10 mb-10 border-2 border-black border-solid">
      <h4 className="text-xl font-bold">{name}</h4>
      <img src={imageURL} alt="" />
      <p>{description}</p>
      <a href={gitHubUrl}>View On GitHub</a>
    </div>
  );
}

export default ProjectCard;
