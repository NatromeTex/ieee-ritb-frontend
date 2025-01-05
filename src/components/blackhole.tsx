import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Asset {
  mesh: THREE.Mesh;
  angle: number;
}

const BlackHoleScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const createSpiral = () => {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const radius = 10;
      const turns = 10;
      const segments = 100;

      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * 2 * Math.PI * turns;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const z = (i / segments) * 100;
        positions.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const material = new THREE.LineBasicMaterial({
        color: 0x000000,
        opacity: 0.5,
        transparent: true,
      });

      const line = new THREE.Line(geometry, material);
      return line;
    };
    const loadTexture = (path: string): THREE.Mesh => {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(path);
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
      });

      const plane = new THREE.Mesh(geometry, material);
      return plane;
    };
    const createOrbitingAssets = (numAssets: number): Asset[] => {
      const assets: Asset[] = [];
      const radius = 10;

      for (let i = 0; i < numAssets; i++) {
        const asset = loadTexture(`/assets/bh/asset${i + 1}.png`);
        const angle = Math.random() * 2 * Math.PI;

        asset.position.set(
          radius * Math.cos(angle),
          radius * Math.sin(angle),
          50 + Math.random() * 50
        );

        assets.push({ mesh: asset, angle: angle });
        scene.add(asset);
      }

      return assets;
    };
    const animateAssets = (assets: Asset[]) => {
      const scaleSpeed = 0.001;
      const orbitSpeed = 0.01;

      const animate = () => {
        assets.forEach((asset) => {
          asset.angle += orbitSpeed;
          asset.mesh.position.x = 10 * Math.cos(asset.angle);
          asset.mesh.position.y = 10 * Math.sin(asset.angle);
          const scale = 1 + Math.sin(Date.now() * scaleSpeed) * 0.05;
          asset.mesh.scale.set(scale, scale, scale);
          asset.mesh.position.z = 50 + Math.sin(Date.now() * 0.005 + asset.angle) * 30;
        });
        requestAnimationFrame(animate);
      };

      animate();
    };
    const spiral = createSpiral();
    scene.add(spiral);
    const assets = createOrbitingAssets(10);
    camera.position.z = 30;
    animateAssets(assets);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      renderer.dispose();
    };
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};
export default BlackHoleScene;
