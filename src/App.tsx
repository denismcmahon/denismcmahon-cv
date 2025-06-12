import './App.css'

function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>Denis McMahon</h1>
        <p>Senior Full Stack Developer</p>
        <p>Email: denismcmahon@gmail.com | LinkedIn: https://www.linkedin.com/in/dmcm82 | GitHub: https://github.com/denismcmahon</p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>
          Passionate and experienced Full Stack JavaScript developer with 20+ years of experience building scalable, high-quality applications...
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React, Angular, Node.js, PostgreSQL, MongoDB</li>
          <li>CI/CD, Docker, AWS, RESTful APIs</li>
          <li>Team leadership, Agile methodologies</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <div>
          <h3>Senior Developer – LRN</h3>
          <p>2022 – Present</p>
          <p>Built robust internal tools, optimized content systems, and contributed to Solas Dev Studio side projects.</p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <p>Self-taught developer with 20+ years industry experience. Started coding at 18.</p>
      </section>

      <footer>
        <p>© 2025 Denis McMahon</p>
      </footer>
    </div>
  )
}

export default App
