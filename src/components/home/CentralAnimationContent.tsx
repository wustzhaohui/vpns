

import React, { useState, useEffect } from 'react';

const CentralAnimationContent: React.FC = () => {
  const [step, setStep] = useState(0); // 0: "3", 1: "2", 2: "1", 3: Accelerating

  useEffect(() => {
    setStep(0); // Reset step
    const S0Timer = setTimeout(() => { // Delay before starting countdown to ensure reset is processed
        const S1 = setTimeout(() => setStep(1), 1000); // "3" shown for 1s
        const S2 = setTimeout(() => setStep(2), 2000); // "2" shown for 1s (from step 1)
        const S3 = setTimeout(() => setStep(3), 3000); // "1" shown for 1s (from step 2), then accelerate

        return () => {
            clearTimeout(S1);
            clearTimeout(S2);
            clearTimeout(S3);
        };
    }, 100); // Small delay before starting the countdown timers

    return () => clearTimeout(S0Timer);
  }, []);


  const countdownText = step === 0 ? "3" : step === 1 ? "2" : step === 2 ? "1" : null;
  const isAccelerating = step === 3;

  const initialCircleFill = "url(#readybot)"; // Red gradient
  const solidBlueFill = "rgb(0, 175, 248)"; // Pure blue
  
  // Base coordinates for central elements
  const centerX = 200;
  const centerY = 200;
  const mainCircleRadius = 36;
  const imageSize = 38; // for speeding.bc74876f.png
  const orbitRadius = 6; // "2cm" equivalent

  // Opacities: 0.4 (furthest back), 0.5 (middle), 0.6 (closest of the rotating ones)
  // Durations are "3s". Staggered begin times: 0s, 0.6s, 1.2s (600ms difference)
  const rotatingCirclesData = [
    { id: 1, duration: "3s", begin: "0s",    opacity: 0.4 }, 
    { id: 2, duration: "3s", begin: "0.6s",  opacity: 0.5 }, // 0s + 600ms
    { id: 3, duration: "3s", begin: "1.2s",  opacity: 0.6 }, // 0.6s + 600ms
  ];

  return (
    <g>
      <defs>
        <linearGradient id="readybot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(255, 112, 136)' }} />
          <stop offset="100%" style={{ stopColor: 'rgb(250, 75, 102)' }} />
        </linearGradient>
        {/* successbot is not directly used for rotating circles but kept for potential future use or if other elements depend on it */}
        <linearGradient id="successbot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(0, 195, 253)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(0, 175, 248)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Orbiting Circles - rendered first to be behind the central stationary circle. Now always visible. */}
      {rotatingCirclesData.map((circleData) => (
        <g key={`orbiting-group-${circleData.id}`}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values={`0 ${centerX} ${centerY}; 360 ${centerX} ${centerY}`} // Group rotates around main center
            dur={circleData.duration}
            begin={circleData.begin} // Staggered start times for "错峰抖动" effect
            repeatCount="indefinite"
          />
          {/* The circle is offset within the group. As the group rotates, the circle orbits. */}
          <circle
            cx={centerX + orbitRadius} // Offset from the group's rotation center
            cy={centerY}
            r={mainCircleRadius} // Same size as main central circle
            fill={isAccelerating ? solidBlueFill : initialCircleFill} // Color changes based on state
            opacity={circleData.opacity}
          />
        </g>
      ))}

      {/* Central Stationary Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={mainCircleRadius}
        fill={isAccelerating ? solidBlueFill : initialCircleFill}
        // This circle is stationary once 'isAccelerating' is true and blue.
      />

      {/* Countdown Text or Speeding Image */}
      {countdownText && !isAccelerating && (
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="30"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          {countdownText}
        </text>
      )}

      {isAccelerating && (
        <image
          xlinkHref="/assets/speeding.bc74876f.png"
          width={imageSize}
          height={imageSize}
          x={centerX - imageSize / 2}
          y={centerY - imageSize / 2}
          opacity="0" // Initial opacity for fade-in
        >
          {/* Fade-in animation for the image */}
          <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin="0s" fill="freeze" />
        </image>
      )}
    </g>
  );
};

export default CentralAnimationContent;