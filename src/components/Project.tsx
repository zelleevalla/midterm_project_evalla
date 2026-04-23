const Projects = () => {
    const projectList = [
      {
        title: "Activity 1: Basic HTML Portfolio",
        role: "Lead Developer",
        tech: "HTML, CSS",
        desc: "Ito ang unang version ng aking portfolio na ni-convert ko ngayon sa React."
      },
      {
        title: "Academic Project: [Pangalan ng Project]",
        role: "Member/Developer",
        tech: "JavaScript",
        desc: "Isang simpleng application para sa aming midterm requirement."
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