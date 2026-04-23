const About = () => {
    return (
      <section id="about">
        <h1>Student Portfolio</h1>
        {/* Palitan ang src ng totoong image path mo o URL */}
        <img src="https://lh3.googleusercontent.com/a/ACg8ocIedcAgi_hz9iqTeNzTz3HAJiiSoZBNAUVoTcsJQUnXXkFf78M=s360-c-no" alt="My Profile" className="profile-img" />
        <h2>About Me</h2>
        <p>Kumusta! Ako si <strong>Jeroselyn, Cuyos</strong>. Isa akong aspiring developer na mahilig mag-solve ng problems gamit ang code.</p>
        
        <h3>Interests & Goals</h3>
        <ul>
          <li><strong>Accomplishment:</strong> Nakatapos ng 1st and 2nd Year na may mataas na grades]</li>
          <li><strong>Area of Interest:</strong> Web Development, AI, at Mobile Apps.</li>
        </ul>
      </section>
    );
  };
  
  export default About;