import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../../photo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shibasish Banerjee
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Coder',
                'Full Stack Developer',
                'Web Developer',
                'Problem Solver',
                'Ui/Ux Designer',
                'Content Creator',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              displayTextRenderer={(text, i) => (
                <span className="text-primary">{text}</span>
              )}
              cursorRenderer={(cursor) => (
                <span className="text-primary">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I turn concepts into impactful digital solutions. As a full-stack developer specializing in the MERN stack, I build modern, scalable web applications that prioritize performance, usability, and clean architecture. With a strong eye for intuitive UI and a focus on robust backend systems, I deliver seamless experiences that align with real-world user needs and business goals.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/17tcr3H4Qx7Bh5hCpIdafacPvR5gnM_aJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-gradient-to-r from-primary to-secondary py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center shadow-blue-glow mt-5 text-lg font-bold"
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-primary rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shibasish Banerjee"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(37,99,235,0.7)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
