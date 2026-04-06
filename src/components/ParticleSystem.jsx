import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import logo2 from '../assets/logo2.png';

const ParticleSystem = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const pointsRef = useRef(null);
  const particleDataRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const raycasterRef = useRef(new THREE.Raycaster());
  const listenersRef = useRef({ mousemove: null, resize: null });
  const sceneObjectsRef = useRef({ geometry: null, material: null });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles by detecting PNG image shape
    const particles = [];
    const particleCount = 15000;

    // Load and analyze logo PNG image
    const createLogoShapeFromImage = (callback) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      // Use imported logo2.png
      img.src = logo2;
      console.log("Loading image from:", img.src);

      img.onload = () => {
        console.log("✓ Image loaded successfully");
        console.log("Image dimensions:", img.width, "x", img.height);

        // Create canvas to read image pixel data
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data; // RGBA pixel array

        const shapePoints = [];
        const samplingRate = 1; // Sample every pixel for better accuracy
        const alphaThreshold = 30; // Lower threshold to detect more pixels

        // Scan image and collect all logo pixels
        for (let i = 0; i < data.length; i += 4 * samplingRate) {
          const alpha = data[i + 3]; // Alpha channel (transparency)

          // If pixel is visible (not transparent), add it to shape
          if (alpha > alphaThreshold) {
            const pixelIndex = i / 4;
            const x = (pixelIndex % canvas.width);
            const y = Math.floor(pixelIndex / canvas.width);

            shapePoints.push({
              x: (x - canvas.width / 2) * 0.6, // Scale and center the shape
              y: (y - canvas.height / 2) * 0.6,
            });
          }
        }

        // Apply the mirror reflection of the rotated logo
        const transformedPoints = shapePoints.map(point => ({
          x: point.x,    // Keep original x (mirror reflection)
          y: -point.y,   // Vertical flip (180 rotation)
        }));

        console.log(`✓ Detected ${transformedPoints.length} logo points from image`);
        callback(transformedPoints);
      };

      // Fallback if image doesn't load
      img.onerror = () => {
        console.error("✗ Image failed to load:", img.src);
        console.warn("Make sure logo2.png exists in the public folder");
        callback([]);
      };
    };

    // Initialize particles with detected logo shape
    createLogoShapeFromImage((logoPoints) => {
      for (let i = 0; i < particleCount; i++) {
        let x, y, z;

        if (logoPoints.length > 0) {
          // Use detected logo shape points
          const idx = Math.floor((i / particleCount) * logoPoints.length);
          const point = logoPoints[idx % logoPoints.length];
          
          // Add slight random jitter so particles don't overlap exactly
          x = point.x + (Math.random() - 0.5) * 2;
          y = point.y + (Math.random() - 0.5) * 2;
        } else {
          // Fallback: random distribution
          x = (Math.random() - 0.5) * 80;
          y = (Math.random() - 0.5) * 80;
        }

        z = (Math.random() - 0.5) * 15;

        particles.push({
          originalX: x,
          originalY: y,
          originalZ: z,
          x: x,
          y: y,
          z: z,
          vx: 0,
          vy: 0,
          vz: 0,
        });
      }

      particleDataRef.current = particles;

      // Create geometry
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particles.length * 3);

      particles.forEach((p, i) => {
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      });

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Material and points
      const material = new THREE.PointsMaterial({
        color: 0xFFD700,
        size: 0.8,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);
      pointsRef.current = points;
      sceneObjectsRef.current = { geometry, material };

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        if (particleDataRef.current && pointsRef.current) {
          const positions = pointsRef.current.geometry.attributes.position.array;
          const repelRadius = 55;  // Increased from 35 to affect particles further
          const repelForce = 2.5;   // Increased from 1.2 for stronger push
          const returnForce = 0.02; // Decreased from 0.05 to let particles stay away longer
          const damping = 0.88;

          particleDataRef.current.forEach((p, i) => {
            // Calculate distance to mouse
            const dx = p.x - mouseRef.current.x;
            const dy = p.y - mouseRef.current.y;
            const dz = p.z - mouseRef.current.z;
            const distSq = dx * dx + dy * dy + dz * dz;
            const distance = Math.sqrt(distSq);

            // Repulsion - increased minimum distance threshold
            if (distance < repelRadius && distance > 0.1) {
              const force = Math.pow(1 - distance / repelRadius, 2) * repelForce;
              p.vx += (dx / distance) * force;
              p.vy += (dy / distance) * force;
              p.vz += (dz / distance) * force;
            }

            // Return to original
            p.vx += (p.originalX - p.x) * returnForce;
            p.vy += (p.originalY - p.y) * returnForce;
            p.vz += (p.originalZ - p.z) * returnForce;

            // Damping
            p.vx *= damping;
            p.vy *= damping;
            p.vz *= damping;

            // Update position
            p.x += p.vx;
            p.y += p.vy;
            p.z += p.vz;

            // Soft bounds
            const boundsForce = 0.08;
            if (Math.abs(p.x - p.originalX) > 60) p.vx -= (p.x - p.originalX) * boundsForce;
            if (Math.abs(p.y - p.originalY) > 60) p.vy -= (p.y - p.originalY) * boundsForce;

            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;
          });

          pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Mouse tracking
      const onMouseMove = (event) => {
        if (!renderer.domElement) return;

        const rect = renderer.domElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Convert to 3D space
        const vector = new THREE.Vector3(x, y, 0.5);
        vector.unproject(camera);

        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));

        mouseRef.current = { x: pos.x, y: pos.y, z: pos.z };
      };

      renderer.domElement.addEventListener('mousemove', onMouseMove);
      listenersRef.current.mousemove = onMouseMove;

      // Handle resize
      const handleResize = () => {
        const newWidth = container.clientWidth || 500;
        const newHeight = container.clientHeight || 500;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);
      listenersRef.current.resize = handleResize;
    });

    // Cleanup
    return () => {
      console.log("Cleaning up ParticleSystem");
      
      // Remove event listeners
      if (listenersRef.current.mousemove && rendererRef.current?.domElement) {
        rendererRef.current.domElement.removeEventListener('mousemove', listenersRef.current.mousemove);
      }
      if (listenersRef.current.resize) {
        window.removeEventListener('resize', listenersRef.current.resize);
      }

      // Dispose Three.js resources
      if (sceneObjectsRef.current.geometry) {
        sceneObjectsRef.current.geometry.dispose();
      }
      if (sceneObjectsRef.current.material) {
        sceneObjectsRef.current.material.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement && container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }

      // Clear refs
      pointsRef.current = null;
      particleDataRef.current = [];
      listenersRef.current = { mousemove: null, resize: null };
      sceneObjectsRef.current = { geometry: null, material: null };
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    />
  );
};

export default ParticleSystem;
