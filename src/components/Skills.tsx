const Skills = () => {
    const languages = ["HTML", "CSS", "JavaScript", "TypeScript"];
    const tools = ["React.js", "Vite", "Git/GitHub", "VS Code"];
  
    return (
      <section id="skills">
        <h2>Skills</h2>
        <p><strong>Programming Languages:</strong></p>
        <div className="skills-list">
          {languages.map(s => <span key={s} className="skill-badge">{s}</span>)}
        </div>
        
        <p style={{marginTop: '20px'}}><strong>Tools & Frameworks:</strong></p>
        <div className="skills-list">
          {tools.map(t => <span key={t} className="skill-badge">{t}</span>)}
        </div>
      </section>
    );
  };
  
  export default Skills;