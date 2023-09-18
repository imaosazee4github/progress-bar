import React, { useState, useEffect } from 'react';
import ProgressBar from './component/ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Example Component</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
