// pages/Resume.jsx
import './Resume.css'; // Import your styles

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
  ];

  return (
    <section className="resume-section">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>
          Download my resume:{' '}
          <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume.pdf
          </a>
        </p>
        <div className="proficiencies">
          <h3>Proficiencies:</h3>
          <ul>
            {proficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
