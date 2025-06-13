const Projects = () => {
  return (
    <section className="text-gray-700 mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Projects
      </h2>

      <div className="space-y-8 text-gray-800">
        <div>
          <h3 className="text-lg font-semibold">
            Course Metadata Manager Application - LRN
          </h3>
          <ul className="list-disc list-outside space-y-1 mt-2">
            <li>Contributed to the development of a microservice within the content platform to manage and publish course metadata.</li>
            <li><span className="font-medium">Stack:</span> Node.js, Express, Angular, Oracle DB (migrated to PostgreSQL).</li>
            <li>Replaced manual Google Sheets workflows, streamlining metadata updates and automating catalog publishing.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Content Showcase Application - Interactive Services
          </h3>
          <ul className="list-disc list-outside space-y-1 mt-2">
            <li>Collaborated with the CEO and Sales team to develop an internal platform for showcasing premium training content.</li>
            <li><span className="font-medium">Stack:</span> Node.js, Express, React, MongoDB.</li>
            <li>Included admin functionality for content and client management, with authentication and customizable expiry.</li>
            <li>Automated email notifications triggered on client/content creation.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Hosted Services Tracker - Interactive Services
          </h3>
          <ul className="list-disc list-outside space-y-1 mt-2">
            <li>Designed and built an internal tool to manage the status and technical details of client-hosted applications.</li>
            <li><span className="font-medium">Stack:</span> Node.js, Express, Angular, MongoDB.</li>
            <li>Used by the support team to track development progress and ensure smooth operations across frequent deployments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
