
import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";
import {
  awsIcon,
  cssIcon,
  dockerIcon,
  eslintIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  kubernetesIcon,
  neoIcon,
  nodeIcon,
  psqlIcon,
  pyIcon,
  reactIcon,
  viteIcon,
} from "../../assets";

const HeroParticles = () => {
  // Create particles options with imported images
  const particlesWithImages = {
    ...heroOptions,
    particles: {
      ...heroOptions.particles,
      shape: {
        type: 'image',
        image: [
          { src: awsIcon, width: 32, height: 32 },
          { src: cssIcon, width: 32, height: 32 },
          { src: dockerIcon, width: 32, height: 32 },
          { src: eslintIcon, width: 32, height: 32 },
          { src: figmaIcon, width: 32, height: 32 },
          { src: gitIcon, width: 32, height: 32 },
          { src: githubIcon, width: 32, height: 32 },
          { src: htmlIcon, width: 32, height: 32 },
          { src: javaIcon, width: 32, height: 32 },
          { src: jsIcon, width: 32, height: 32 },
          { src: kubernetesIcon, width: 32, height: 32 },
          { src: neoIcon, width: 32, height: 32 },
          { src: nodeIcon, width: 32, height: 32 },
          { src: psqlIcon, width: 32, height: 32 },
          { src: pyIcon, width: 32, height: 32 },
          { src: reactIcon, width: 32, height: 32 },
          { src: viteIcon, width: 32, height: 32 },
        ],
      },
    },
  };

  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={particlesWithImages}
      />
    </div>
  );
};

export default HeroParticles;
