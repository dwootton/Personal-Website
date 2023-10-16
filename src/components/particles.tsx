/** react component to use ts particles */
import React, { useCallback } from "react"

import Particles from "react-tsparticles"
import type { ISourceOptions } from "tsparticles-engine"
const json: ISourceOptions = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#fbdb04",
      animation: {
        enable: true,
        speed: 10,
      },
    },
    move: {
      attract: {
        enable: true,
        rotate: {
          distance: 100,
          x: 2000,
          y: 2000,
        },
      },
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy",
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: polygonPathName,
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30,
        },
      },
      random: false,
      speed: 3,
      straight: true,
      trail: {
        fillColor: "#000",
        length: 20,
        enable: true,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 0,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
  },
  background: {
    color: "#3c5570",
  },
  fullScreen: {
    zIndex: -1,
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    rate: {
      quantity: 1,
      delay: 0.25,
    },
    size: {
      width: 0,
      height: 0,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
}
/*
const BackgroundParticles = () => {
  return <Particles id="tsparticles" options={json} />
}
*/
import { Engine } from "tsparticles-engine"
import type { Container } from "tsparticles-engine"
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon"

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadPolygonPath(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          color: {
            value: "#FF0000",
            animation: {
              enable: true,
              speed: 10,
            },
          },
          move: {
            attract: {
              enable: false,
              distance: 100,
              rotate: {
                x: 2000,
                y: 2000,
              },
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0,
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30,
              },
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 0,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        background: {
          color: "#000",
        },
        fullScreen: {
          zIndex: -1,
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      }}
    />
  )
}

export default BackgroundParticles
