import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';import { motion } from 'framer-motion';import rewardImage from '../../../assets/person3.jpg';
import trophyImage from '../../../assets/trophy.png';

function RewardImageReveal({ src, playToken }) {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const materialRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTexture: { value: null },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform sampler2D uTexture;
        uniform float uProgress;
        uniform float uTime;
        varying vec2 vUv;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 345.45));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        vec3 sampleMosaic(vec2 uv, float cells) {
          vec2 grid = floor(uv * cells);
          vec2 cellUv = (grid + 0.5) / cells;
          float cellNoise = noise(grid + vec2(7.3, 2.1));

          float centerPulse = 1.0 - distance(cellUv, vec2(0.5)) * 1.25;
          float revealGate = smoothstep(-0.2, 1.0, uProgress + cellNoise * 0.22 - centerPulse * 0.18);
          float tileJitter = (noise(grid + vec2(uTime * 0.0012, uTime * 0.0008)) - 0.5) * 0.02;
          vec2 shiftedUv = cellUv + vec2(tileJitter, -tileJitter);

          vec3 baseColor = texture2D(uTexture, shiftedUv).rgb;
          float tileEdge = step(0.92, fract(uv * cells).x) + step(0.92, fract(uv * cells).y);
          float tileLine = clamp(tileEdge, 0.0, 1.0);
          vec3 tileColor = mix(baseColor * 0.88, baseColor * 1.06, cellNoise);
          tileColor = mix(tileColor, vec3(0.98, 0.99, 1.0), tileLine * 0.15);

          return tileColor * revealGate;
        }

        void main() {
          vec2 uv = vUv;
          float cells = 18.0;
          vec3 mosaicColor = sampleMosaic(uv, cells);

          float alpha = clamp(length(mosaicColor), 0.0, 1.0);
          gl_FragColor = vec4(mosaicColor, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    materialRef.current = material;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(src, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      material.uniforms.uTexture.value = texture;
      renderFrame();
    });

    const renderFrame = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    const resize = () => {
      if (!containerRef.current || !rendererRef.current || !materialRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      rendererRef.current.setSize(width, height, false);
      renderFrame();
    };

    const animate = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = performance.now();
      }
      renderFrame();
      frameRef.current = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [src]);

  useEffect(() => {
    if (!materialRef.current) return undefined;

    const material = materialRef.current;
    const startTime = performance.now();
    let frameId = 0;

    const animateReveal = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / 1000, 1);
      material.uniforms.uProgress.value = progress;

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateReveal);
      }
    };

    material.uniforms.uProgress.value = 0;
    animateReveal();

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [playToken]);

  return <div ref={containerRef} className="h-full w-full" />;
}

const GetReward = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isRevealVisible, setIsRevealVisible] = useState(false);
  const [revealToken, setRevealToken] = useState(0);
  const hideTimerRef = useRef(null);
  const triggerReveal = (nextHovering) => {
    setIsHovering(nextHovering);
    setIsRevealVisible(true);
    setRevealToken((value) => value + 1);

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      setIsRevealVisible(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const awards = [
    {
      title: 'Best Designer Awards',
      organization: 'Awwwards',
      year: '2025',
    },
    {
      title: 'Peaky UI Designer',
      organization: 'Google',
      year: '2024',
    },
    {
      title: 'Great in UX',
      organization: 'Apple',
      year: '2023',
    },
    {
      title: 'Best Website Pick',
      organization: 'Microsoft',
      year: '2022',
    },
    {
      title: 'Nelson UI & UX Designer',
      organization: 'Samsung',
      year: '2021',
    },
  ];

  return (
    <section className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-300 flex flex-col gap-20 lg:flex-row lg:gap-20">
        {/* LEFT SIDE - IMAGE */}
        <div
          className="flex shrink-0 flex-col items-start"
          onMouseEnter={() => triggerReveal(true)}
          onMouseLeave={() => triggerReveal(false)}
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-gray-200 shadow-lg sm:h-72 sm:w-72">
            <img
              src={rewardImage}
              alt="Get Rewards"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {isRevealVisible && (
              <div className="pointer-events-none absolute inset-0">
                <RewardImageReveal src={rewardImage} playToken={revealToken} />
              </div>
            )}
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            GET REWARDS
          </p>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex flex-1 flex-col gap-8">
          {/* CIRCULAR TROPHY ELEMENT */}
          <div className="relative h-40 w-40 flex items-center justify-center">
            <img src={trophyImage} alt="Trophy" className="h-full w-full object-contain" />
          </div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-full text-4xl font-funnel font-semibold leading-[1.3] text-gray-900 sm:text-xl lg:text-5xl"
          >
            Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
          </motion.h2>

          {/* DIVIDER LINE */}
          <div className="my-6 h-px w-full bg-gray-200" />

          {/* AWARDS TABLE */}
          <div className="space-y-0">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 px-5 py-4 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:bg-white hover:px-10 hover:shadow-md"
              >
                <div className="flex-1 text-sm font-semibold text-gray-900 sm:text-base">
                  {award.title}
                </div>
                <div className="flex-1 text-left text-sm text-gray-600 sm:text-base">
                  {award.organization}
                </div>
                <div className="ml-4 w-12 text-right text-sm font-medium text-gray-500 sm:text-base">
                  {award.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetReward;
