const Experience = () => {
  return (
    <section className="text-gray-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Experience
      </h2>

      <div className="grid gap-6">
        {[
          {
            title: "Senior Full Stack Developer - LRN",
            date: "Sept 2020 - Present",
            bullets: [
              "Developing infrastructure for a global educative content library and delivery platform.",
              "Designing new microservices and improving existing components of the delivery stack.",
              "Working with a global team; clients include Apple, Dell, and Siemens."
            ]
          },
          {
            title: "Senior Full Stack Developer - Interactive Services",
            date: "Jan 2018 - Sept 2020",
            bullets: [
              "Built internal tools to support customer-facing applications.",
              "Led a team of 3 engineers supporting major client’s Learning Management System."
            ]
          },
          {
            title: "Senior Developer - Interactive Services",
            date: "Nov 2008 - Jan 2018",
            bullets: [
              "Developed training applications for Fortune 500 companies including Visa, Coca-Cola, Facebook, Netflix, and Danone.",
              "Collaborated with designers to build engaging client learning solutions."
            ]
          },
          {
            title: "Reporting Engineer - Computacenter (Barcelona)",
            date: "Jan 2008 - Nov 2008",
            bullets: [
              "Created and automated detailed call center reports using database and reporting tools.",
              "Supported reporting infrastructure for multiple internal support teams."
            ]
          },
          {
            title: "Senior Developer - ThirdForce",
            date: "May 2003 - Aug 2007",
            bullets: [
              "Delivered e-learning solutions to a wide client base as part of a creative development team.",
              "Explored new technologies to improve online training delivery and innovation."
            ]
          }
        ].map((job, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{job.date}</p>
            <ul className="list-disc list-outside ms-8 space-y-1">
              {job.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
