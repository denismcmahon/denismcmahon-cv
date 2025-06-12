const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

      <div>
        <h3>Course Metadata Manager Application - LRN</h3>
        <ul>
          <li>Contributed to the development of a microservice within the content platform to manage and publish course metadata.</li>
          <li>Stack: Node.js, Express, Angular, Oracle DB (later migrated to PostgreSQL).</li>
          <li>Replaced a manual Google Sheets-based workflow, streamlining metadata updates and automating publishing to the course catalog.</li>
        </ul>
      </div>

      <div>
        <h3>Content Showcase Application - Interactive Services</h3>
        <ul>
          <li>Collaborated with the CEO and Sales team to develop an internal platform for showcasing premium training content.</li>
          <li>Stack: Node.js, Express, React, MongoDB.</li>
          <li>Included admin functionality for managing content and clients, with authentication and automated expiry settings.</li>
          <li>Automated email notifications triggered on client/content creation.</li>
        </ul>
      </div>

      <div>
        <h3>Hosted Services Tracker - Interactive Services</h3>
        <ul>
          <li>Designed and built an internal tool to manage the status and technical details of client-hosted applications.</li>
          <li>Stack: Node.js, Express, Angular, MongoDB.</li>
          <li>Used by the support team to track development progress and ensure seamless hosting operations across numerous monthly deployments.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;