// pages/About.jsx
import React from 'react';
import './About.css'; // Import your styles

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="avatar-container">
          <img src="/src/assets/selfie.jpg" alt="Developer Avatar" className="avatar" />
        </div>
        <div className="bio-container">
          <h2>About Me</h2>
          <p>
            👋 Hello, I'm Joel Lopez, an enthusiastic entry-level software developer with a passion for crafting innovative solutions. I recently completed the Web Development Bootcamp at UTSA, where I delved into various technologies such as HTML, CSS, SQL, NoSQL, React, and more.
          </p>
          <p>
            🚀 During the bootcamp, I had the opportunity to work on diverse projects that showcase my skills and creativity. From designing responsive user interfaces using HTML and CSS to implementing robust back-end solutions with SQL and NoSQL databases, I've gained hands-on experience in the entire web development stack.
          </p>
          <p>
            🌐 My journey in web development has equipped me with a solid foundation to contribute effectively to dynamic projects. Now, I am actively seeking opportunities to apply my skills, collaborate with passionate teams, and contribute to the ever-evolving world of software development.
          </p>
          <p>
            🛠️ Explore my portfolio to witness the projects that reflect my dedication and proficiency in turning ideas into functional and user-friendly applications. I am eager to bring my knowledge and fresh perspectives to new challenges and projects.
          </p>
          <p>
            📧 Let's connect and explore how I can contribute to your team or project. I am open to collaborations, mentorship, and continuous learning as I embark on this exciting journey in software development!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
