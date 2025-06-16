const Projects = () => {
  return (
    <section className="text-gray-700 mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800">
            Content Manager Application - LRN
          </h3>
          <ul className="list-disc list-outside ms-6 space-y-1 mt-2 text-gray-700 text-sm">
            <li>
              Core contributor to a custom content management system enabling internal teams to manage, edit, and publish training course content.
            </li>
            <li>
              Built and enhanced user-facing features including campaign publishing, content editing tools, and version control workflows.
            </li>
            <li>
              Responsible for ongoing maintenance and performance improvements across the application.
            </li>
            <li>
              Implemented unit tests and contributed to improving overall test coverage and system reliability.
            </li>
            <li>
              <span className="font-medium">Stack:</span> Node.js, Angular, MongoDB, PostgreSQL.
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800">
            Course Metadata Manager Application - LRN
          </h3>
          <ul className="list-disc list-outside ms-6 space-y-1 mt-3 text-gray-700 text-sm">
            <li>Contributed to a microservice for managing and publishing course metadata.</li>
            <li>
              <span className="font-medium">Stack:</span> Node.js, Express, Angular, Oracle DB (migrated to PostgreSQL).
            </li>
            <li>Replaced manual Google Sheets workflows, automating catalog publishing.</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800">
            Content Showcase Application - Interactive Services
          </h3>
          <ul className="list-disc list-outside ms-6 space-y-1 mt-3 text-gray-700 text-sm">
            <li>Built an internal platform to showcase premium training content with the CEO and Sales team.</li>
            <li>
              <span className="font-medium">Stack:</span> Node.js, Express, React, MongoDB.
            </li>
            <li>Included admin panel, auth, customizable expiry, and email notifications.</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800">
            Hosted Services Tracker - Interactive Services
          </h3>
          <ul className="list-disc list-outside ms-6 space-y-1 mt-3 text-gray-700 text-sm">
            <li>Built internal tool to monitor the state of client-hosted applications and services.</li>
            <li>
              <span className="font-medium">Stack:</span> Node.js, Express, Angular, MongoDB.
            </li>
            <li>Used by support teams to manage deployment cycles and hosting infrastructure.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
