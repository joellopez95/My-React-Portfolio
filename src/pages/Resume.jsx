// pages/Resume.jsx
import './Resume.css';

const Resume = () => {
  const frontEndProficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'React Router',
    'Bootstrap',
    'Tailwind',
  ];

  const backEndProficiencies = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'NoSQL',
    'RESTful API',
    'GraphQL',
  ];

  return (
    <section className="resume-section">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>
          Download my resume:{' '}
          <a href="https://drive.google.com/file/d/122bjCIx9jo91xVtNEot_PuFAl6a0S_f2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume.pdf
          </a>
        </p>
        <div className="proficiencies">
          <div className="proficiency-column">
            <h3>Front-End Proficiencies:</h3>
            <ul>
              {frontEndProficiencies.map((proficiency, index) => (
                <li key={index}>{proficiency}</li>
              ))}
            </ul>
          </div>
          <div className="proficiency-column">
            <h3>Back-End Proficiencies:</h3>
            <ul>
              {backEndProficiencies.map((proficiency, index) => (
                <li key={index}>{proficiency}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
