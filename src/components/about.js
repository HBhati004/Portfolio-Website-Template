import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Player } from '@lottiefiles/react-lottie-player';
import aboutAnimationData from '../animations/Animation - 1717156508036.json'; // Replace with your actual animation file

const About = () => {
  const { ref: animationRef, inView: animationInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between p-8 pt-16 md:pt-8"
      style={{ minHeight: '400px', width: '100%', marginTop: '3%', position: 'relative', overflow: 'hidden' }} // Add overflow hidden here
    >
      {/* Left Side - Animation */}
      <div
        ref={animationRef}
        className={`w-full md:w-1/2 flex justify-center mb-8 md:mb-0 transition-transform duration-1000 overflow-hidden ${
          animationInView ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
        }`}
        style={{ maxHeight: '400px' }} // Set a max height to ensure the animation doesn't overflow
      >
        <div style={{ width: '100%', height: '100%', maxWidth: '400px', maxHeight: '400px' }}>
          <Player
            autoplay
            loop
            src={aboutAnimationData}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Right Side - About Information */}
      <div
        ref={textRef}
        className={`w-full md:w-1/2 p-4 mt-4 transition-transform duration-1000 ${
          textInView ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-black">About Me</h2>
        <p className="mt-4 text-base md:text-lg text-gray-800">
          I am Dr. John Doe, a dedicated medical professional with over a decade of experience in providing top-notch healthcare services. My journey in the medical field has been driven by a passion for helping others and a commitment to excellence.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800">
          Over the years, I have had the privilege of solving numerous complex cases and bringing smiles to the faces of my patients. My approach combines the latest medical advancements with a compassionate and patient-centric philosophy.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800">
          When I am not in the clinic, you can find me reading the latest medical journals, attending conferences, and continually updating my knowledge to serve my patients better.
        </p>
      </div>
    </section>
  );
};

export default About;
