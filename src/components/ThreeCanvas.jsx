import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0.1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      shininess: 100,
      wireframe: false,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Add edges to cube for better visualization
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x075985, linewidth: 2 })
    );
    cube.add(line);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    const animationId = setInterval(() => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.005;
        cubeRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    }, 1000 / 60); // 60 FPS

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      edges.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700"
    />
  );
}
