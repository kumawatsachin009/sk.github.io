# Three.js - 3D JavaScript Library

## Introduction

Three.js is a cross-browser JavaScript library used to create and display animated 3D computer graphics in a web browser. It uses WebGL under the hood, making it possible to render 3D scenes directly in the browser without any plugins.

## Getting Started

To start using Three.js, you need to include the library in your project:

```javascript
import * as THREE from 'three';
```

## Basic Components

### Scene

The scene is where you place all your objects, lights, and cameras.

```javascript
const scene = new THREE.Scene();
```

### Camera

The camera defines what you see. There are different types of cameras available in Three.js:

- PerspectiveCamera: Simulates the way human eyes see
- OrthographicCamera: Used for orthographic projection

```javascript
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
```

### Renderer

The renderer draws the scene from the camera's perspective.

```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## Creating 3D Objects

Three.js provides various geometries and materials to create 3D objects:

```javascript
// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

## Animation

Animation in Three.js is achieved by repeatedly rendering the scene:

```javascript
function animate() {
  requestAnimationFrame(animate);
  
  // Update objects
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // Render the scene
  renderer.render(scene, camera);
}

animate();
```

## Advanced Features

Three.js provides many advanced features such as:

- Lights (Point, Directional, Spot, Ambient, etc.)
- Shadows
- Textures
- Loaders for 3D models (GLTF, OBJ, etc.)
- Postprocessing effects
- Physics integrations
- Particle systems

## Resources

- [Official Documentation](https://threejs.org/docs/)
- [Examples](https://threejs.org/examples/)
- [GitHub Repository](https://github.com/mrdoob/three.js/)

## Applications

Three.js is used in various fields like:

- Interactive websites
- Data visualization
- Games
- Virtual reality
- Architectural visualization
- Product configurators
- Digital art

## Conclusion

Three.js makes 3D web development accessible to JavaScript developers, enabling the creation of impressive 3D experiences directly in the browser.