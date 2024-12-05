import React from 'react';

const logos = [
  { name: '10web AI', src: '/logos/10web.png' },
  { name: 'Docus AI', src: '/logos/Docus.png' },
  { name: 'Julius AI', src: '/logos/Julius.png' },
  { name: 'Codedesign AI', src: '/logos/Codedesign.png' },
  { name: 'KickResume', src: '/logos/Kickresume.png' },
  { name: 'Usestyle AI', src: '/logos/styleAI.png' },
  { name: 'You.com', src: '/logos/youLogo.png' },
  { name: 'Abacus', src: '/logos/Abacus.jpg' },
  { name: 'Taskade', src: '/logos/Taskade.png' },
  { name: 'Hotshot AI', src: '/logos/Hotshot.png' },
  { name: 'Consensus', src: '/logos/Consensus.png' },
  { name: 'Krisp AI', src: '/logos/krisp.png' },
  { name: 'Dante AI', src: '/logos/Dante.png' },
  { name: 'OLA Cabs', src: '/logos/Ola.png' },
  { name: 'Dhan App', src: '/logos/Dhan.jpg' },
  { name: 'And many more ...', src: '/logos/more.png' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <div className="logo-marquee-container overflow-hidden whitespace-nowrap">
    <div className="logo-marquee inline-block animate-marquee">
      {logos.concat(logos).map((logo, index) => (
        <div
          key={index}
          className="inline-block mx-8 text-center"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="h-12 w-auto block mx-auto"
          />
          <span className="block text-base font-bold mt-2">{logo.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

