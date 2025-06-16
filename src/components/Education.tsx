const Education = () => {
  return (
    <section className="text-gray-700 mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Education
      </h2>

      <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
        <h3 className="text-lg font-semibold text-gray-800">Self-Taught Developer</h3>
        <p className="text-sm text-gray-500 mb-2 font-medium">2001 - Present</p>
        <ul className="list-disc list-outside ms-8 space-y-1 text-gray-700 text-sm">
          <li>
            Over two decades of hands-on software development experience, with a focus on JavaScript and full stack technologies.
          </li>
          <li>
            Continuously learning and evolving through real-world projects, online resources, and professional challenges.
          </li>
          <li>
            Strong emphasis on practical skills, problem-solving, and staying up to date with emerging technologies.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
