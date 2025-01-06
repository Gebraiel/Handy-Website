import React, { useEffect, useState } from 'react';

export default function Counter({ counter, duration, countBy }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const totalIncrements = Math.ceil(counter / countBy); // Total steps needed
    const stepDuration = duration / totalIncrements; // Duration for each step

    const interval = setInterval(() => {
      setNum((prevNum) => {
        if (prevNum + countBy >= counter) {
          clearInterval(interval); // Stop the interval when reaching the target
          return counter;
        }
        return prevNum + countBy;
      });
    }, stepDuration);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [counter, duration, countBy]);

  return <span className="font-bold text-primary text-2xl">{num}</span>;
}