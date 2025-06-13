import SkillBar from './SkillBar';

const Skills = () => {
  const skills = {
    Languages: [
      { label: 'JavaScript', percent: 95 },
      { label: 'TypeScript', percent: 90 },
      { label: 'PHP', percent: 70 },
      { label: 'SQL', percent: 85 },
      { label: 'JSON', percent: 95 },
      { label: 'XML', percent: 80 },
    ],
    Frontend: [
      { label: 'React', percent: 95 },
      { label: 'Angular', percent: 85 },
      { label: 'Vue.js', percent: 65 },
      { label: 'Redux', percent: 85 },
      { label: 'HTML/CSS', percent: 90 },
      { label: 'Bootstrap', percent: 80 },
      { label: 'Tailwind CSS', percent: 90 },
    ],
    Backend: [
      { label: 'Node.js', percent: 90 },
      { label: 'Express', percent: 85 },
    ],
    Databases: [
      { label: 'MongoDB', percent: 75 },
      { label: 'PostgreSQL', percent: 85 },
    ],
    Testing: [
      { label: 'Jest', percent: 70 },
      { label: 'Chai', percent: 65 },
    ],
    DevOps: [
      { label: 'AWS', percent: 45 },
      { label: 'Jenkins', percent: 40 },
    ],
  };

  return (
    <section className="text-gray-700">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Skills
      </h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-md font-semibold text-gray-600 mb-2">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {skillList.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
