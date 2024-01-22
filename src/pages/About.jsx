// pages/About.jsx
import './About.css'; // Import your styles

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="avatar-container">
          <img src="path/to/your/avatar.jpg" alt="Developer Avatar" className="avatar" />
        </div>
        <div className="bio-container">
          <h2>About Me</h2>
          <p>
            {/* Add a short bio about the developer */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
