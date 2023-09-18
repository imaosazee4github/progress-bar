// ProgressBar.js

// import React from 'react';
// import './ProgressBar.css'; // Create this CSS file

// const ProgressBar = ({ progress }) => {
//   return (
//     <div className="progress-bar-container">
//       <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//     </div>
//   );
// };

// export default ProgressBar;
// import React, { useState } from 'react';

// const ProgressBar = () => {
//   const [progress, setProgress] = useState(0);

//   const handleRegulatorChange = (e) => {
//     setProgress(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={progress}
//         onChange={handleRegulatorChange}
//       />
//     </div>
//   );
// };

// export default ProgressBar;

import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleRegulatorChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <div className="border-2 border-solid border-blue-500 w-406 transform rotate-0.01">
      <input className='w-406 h-10 bg-green -500 text-white'
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleRegulatorChange}
      />
      {/* <progress className="w-406" value={progress} max="100"></progress> */}
    </div>
  );
};

export default ProgressBar;


