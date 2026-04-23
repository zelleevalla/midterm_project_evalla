const Projects = () => {
    const projectList = [
      {
        title: "Activity 1: Basic HTML Portfolio",
        role: "Developer",
        tech: "HTML, CSS",
    
      }
    ];
  
    return (
      <section id="projects">
        <h2>Projects</h2>
        {projectList.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>
            <p><strong>Role:</strong> {p.role} | <strong>Tech:</strong> {p.tech}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;