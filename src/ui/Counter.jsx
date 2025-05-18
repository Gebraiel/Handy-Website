import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function ResettingCounter({counter}) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(false);  // Reset first
      setTimeout(() => setStart(true), 100); // Then restart count
    }
  }, [inView]);

  return (
    <div ref={ref} className="font-bold text-primary xl:text-7xl text-5xl w-52 m-auto">
      {start && <CountUp end={counter} duration={5} />}
    </div>
  );
}
