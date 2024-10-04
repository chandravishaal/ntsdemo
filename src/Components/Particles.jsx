import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // Disable full screen
      },
      background: {
        color: {
          value: "#16d5ff",
        },
      },
      fpsLimit: 60, // Reduced to 60 for better performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "remove",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 100, // Reduced distance for links
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false, // Set to false for smoother movement
          speed: 2, // Reduced speed to 2
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Reduced to 80 particles for less load
        },
        opacity: {
          value: 0.6, // Reduced opacity to reduce rendering load
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: false, // Disable retina mode to reduce the load
    }),
    []
  );

  return (
    <div className="">
      <Particles id={props?.id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;
