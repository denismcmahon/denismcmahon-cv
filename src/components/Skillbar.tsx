import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const SkillBar = ({ label, percent }: { label: string; percent: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [width, setWidth] = useState('0%');

  // existing animation for screen
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(`${percent}%`), 100);
      return () => clearTimeout(t);
    }
  }, [inView, percent]);

  // ensure correct width for print
  useEffect(() => {
    const apply = () => setWidth(`${percent}%`);

    // If already in print media, apply immediately
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia && window.matchMedia('print');
      if (mq?.matches) apply();

      // Before printing (browser + Puppeteer)
      const onBeforePrint = () => apply();
      window.addEventListener('beforeprint', onBeforePrint);
      return () => window.removeEventListener('beforeprint', onBeforePrint);
    }
  }, [percent]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="skill-bar w-full bg-gray-200 rounded-full h-2.5">
        <div className="fill bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width }} />
      </div>
    </div>
  );
};

export default SkillBar;
