import React, { useState, useEffect } from 'react';

const CentralAnimationContent: React.FC = () => {
  const [step, setStep] = useState(0); // 0: "3", 1: "2", 2: "1", 3: Accelerating

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => {
        setStep(prevStep => prevStep + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const countdownText = step === 0 ? "3" : step === 1 ? "2" : step === 2 ? "1" : null;
  const isAccelerating = step === 3;

  const initialCircleFill = "url(#readybot)";
  const acceleratingCircleFill = "url(#successbot)";
  
  // Base coordinates for central elements
  const centerX = 200;
  const centerY = 200;
  const mainCircleRadius = 36;
  const imageSize = 38; // for speeding.bc74876f.png

  return (
    <g>
      <defs>
        <linearGradient id="readybot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(255, 112, 136)' }} />
          <stop offset="100%" style={{ stopColor: 'rgb(250, 75, 102)' }} />
        </linearGradient>
        <linearGradient id="successbot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(0, 195, 253)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(0, 175, 248)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Diffusing Ellipses - only when accelerating */}
      {isAccelerating && (
        <g className="ellipbox">
          {[0, 0.6, 1.2].map((delay, index) => (
            <ellipse
              key={`diffuse-${index}`}
              cx={centerX}
              cy={centerY}
              rx={mainCircleRadius + 3.6} // Initial rx from 39.6pt
              ry={mainCircleRadius}      // Initial ry from 36pt
              fill={acceleratingCircleFill}
              opacity="0"
            >
              <animate attributeName="rx" values={`${mainCircleRadius + 3.6};${mainCircleRadius + 20};${mainCircleRadius + 3.6}`} dur="1.8s" begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="ry" values={`${mainCircleRadius};${mainCircleRadius + 15};${mainCircleRadius}`} dur="1.8s" begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" begin={`${delay}s`} repeatCount="indefinite" />
            </ellipse>
          ))}
        </g>
      )}

      {/* Central Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={mainCircleRadius}
        fill={initialCircleFill}
        className="elliptop"
      >
        {isAccelerating && (
          <animate attributeName="fill" from={initialCircleFill} to={acceleratingCircleFill} dur="0.2s" begin="0s" fill="freeze" />
        )}
      </circle>

      {/* Countdown Text or Speeding Image */}
      {countdownText && !isAccelerating && (
        <text
          x={centerX}
          y={centerY} // Adjusted y for better centering if needed
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="30" // Was 30pt
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
          opacity="0"
        >
          <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin="0s" fill="freeze" />
        </image>
      )}
    </g>
  );
};

export default CentralAnimationContent;