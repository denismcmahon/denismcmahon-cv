import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const SkillBar = ({ label, percent }: { label: string; percent: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setWidth(`${percent}%`);
      }, 100); // slight delay for smoother animation
    }
  }, [inView, percent]);

  return (
    <div ref={ref} className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
