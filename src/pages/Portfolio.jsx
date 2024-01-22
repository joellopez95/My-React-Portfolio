// pages/Portfolio.jsx
import './Portfolio.css'; // Import your styles

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/project1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/username/project1',
    },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed App
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
