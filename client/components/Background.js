import * as React from 'react';
import { FC } from 'react';
import Particles from 'react-tsparticles';
// import './polltree.png';

function ParticlesBackdrop() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: -10,
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}
    >
      <Particles
        id='tsparticles'
        style={{
          position: 'absolute',
          zIndex: -10,
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        }}
        options={{
          fullScreen: {
            enable: true,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: ['#6171c7', '#96a0d9'],
            },
            // shape: {
            //   type: 'images',
            //   image: [
            //     {
            //       src: 'https://ibb.co/0XQjHsW',
            //       height: 20,
            //       width: 20,
            //     },
            //   ],
            // },
            shape: {
              type: 'triangle',
              stroke: {
                width: 5,
                color: '#edeff8',
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 50,
              color: '#A3A5B5',
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default ParticlesBackdrop;
