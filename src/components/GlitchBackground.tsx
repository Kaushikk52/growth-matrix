
export const GlitchBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 mix-blend-overlay" />
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <filter id="turbulence">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            seed="1"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="150" />
        </filter>
        <filter id="glitch">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
          >
            <animate
              attributeName="values"
              dur="0.5s"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0;
                      1 0 0 0 0.1
                      0 1 0 0 0
                      0 0 1 0 -0.1
                      0 0 0 1 0;
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              repeatCount="indefinite"
            />
          </feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#turbulence)" />
        <rect width="100%" height="100%" filter="url(#glitch)" />
      </svg>
    </div>
  )
}

