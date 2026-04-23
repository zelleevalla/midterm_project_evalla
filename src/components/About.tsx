const About = () => {
    return (
      <section id="about">
        <h1>Student Portfolio</h1>
        {/* Palitan ang src ng totoong image path mo o URL */}
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJJH5pbESmjcOgBS2s-vbO-jmuAdmonAI21kSH6sp5jP1JxFgTU=s360-c-no" alt="My Profile" className="profile-img" />
        <h2>About Me</h2>
        <p>Kumusta! Ako si <strong>Maricel, Evalla</strong>. Isang IT student na nangangarap maging isang developer isang araw.</p>
        
        <h3>Interests & Goals</h3>
        <ul>
          <li><strong>Accomplishment:</strong> Nakaabot ng third year</li>
          <li><strong>Area of Interest:</strong> Web Development, AI.</li>
        </ul>
      </section>
    );
  };
  
  export default About;