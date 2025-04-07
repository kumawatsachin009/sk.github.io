import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

class Scene3D {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.controls = null;
        this.model = null;
        this.flamingo = null;
        this.particles = null;
        this.river = null;
        this.waterFoam = null;
        this.clock = new THREE.Clock();
        this.flamingoMixer = null;
        
        // Track terrain and grass for updates
        this.terrainGrid = [];
        this.grassInstances = [];
        this.activeTerrain = new Set();
        this.visibleRadius = 80; // Radius of visible terrain
        this.gridSize = 10; // Size of each terrain grid cell
        
        // Debug element for loading status
        this.debugElement = document.createElement('div');
        this.debugElement.style.position = 'absolute';
        this.debugElement.style.bottom = '10px';
        this.debugElement.style.left = '10px';
        this.debugElement.style.color = 'white';
        this.debugElement.style.backgroundColor = 'rgba(0,0,0,0.5)';
        this.debugElement.style.padding = '5px';
        this.debugElement.style.fontFamily = 'monospace';
        this.debugElement.style.zIndex = '1000';
        document.body.appendChild(this.debugElement);
        
        // Add CV download button
        this.createCVDownloadButton();
        
        // Educational topics for terrain flags
        this.topics = [
            { id: 'threejs', name: 'Three.js', mdFile: 'threejs.md' },
            { id: 'webgl', name: 'WebGL', mdFile: 'webgl.md' },
            { id: 'javascript', name: 'JavaScript', mdFile: 'javascript.md' },
        ];
        
        // Store clickable objects
        this.clickableFlags = [];
        
        // Raycaster for handling clicks
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        this.init();
    }

    createCVDownloadButton() {
        // Create button element
        const button = document.createElement('a');
        button.innerHTML = 'Download CV';
        button.href = './assets/cv.pdf'; // Path to the CV file
        button.download = 'CV.pdf'; // Suggested filename when downloading
        
        // Style the button
        button.style.position = 'absolute';
        button.style.top = '20px';
        button.style.left = '20px';
        button.style.padding = '10px 15px';
        button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        button.style.color = 'white';
        button.style.border = '2px solid #4CAF50';
        button.style.borderRadius = '5px';
        button.style.textDecoration = 'none';
        button.style.fontFamily = 'Arial, sans-serif';
        button.style.fontSize = '16px';
        button.style.zIndex = '1000';
        button.style.cursor = 'pointer';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        button.style.transition = 'all 0.3s ease';
        
        // Hover effect
        button.onmouseover = function() {
            this.style.backgroundColor = 'rgba(76, 175, 80, 0.8)';
            this.style.transform = 'scale(1.05)';
        };
        
        button.onmouseout = function() {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            this.style.transform = 'scale(1)';
        };
        
        // Add button to the document
        document.body.appendChild(button);
    }

    init() {
        try {
            this.logDebug('Initializing scene');
            
            // Setup renderer
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.shadowMap.enabled = true;
            this.container.appendChild(this.renderer.domElement);

            // Add fog for infinite terrain effect
            this.scene.fog = new THREE.FogExp2(0x87ceeb, 0.01);
            this.scene.background = new THREE.Color(0x87ceeb); // Sky blue
            
            // Setup camera
            this.camera.position.set(0, 6, 15); // Higher and further back to see more terrain
            this.camera.lookAt(0, 0, 0);
            this.logDebug('Camera set up at position (0, 6, 15)');

            // Add scene environment - infinite terrain
            this.addInfiniteEnvironment();

            // Add lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            this.scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 10, 5);
            directionalLight.castShadow = true;
            
            // Improve shadow quality and coverage
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            directionalLight.shadow.camera.near = 0.5;
            directionalLight.shadow.camera.far = 100;
            directionalLight.shadow.camera.left = -20;
            directionalLight.shadow.camera.right = 20;
            directionalLight.shadow.camera.top = 20;
            directionalLight.shadow.camera.bottom = -20;
            
            this.scene.add(directionalLight);

            // Add point lights for better atmosphere
            const pointLight1 = new THREE.PointLight(0x00aaff, 1, 100); // Blue light for water
            pointLight1.position.set(-5, 2, -5);
            this.scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100);
            pointLight2.position.set(5, 5, -5);
            this.scene.add(pointLight2);
            
            // Add controls with adjusted settings for infinite terrain
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.minDistance = 5; // Slightly increase minimum zoom distance
            this.controls.maxDistance = 50; // Restrict max zoom distance for better performance
            
            // Restrict camera movement to mainly zooming with limited rotation
            this.controls.enablePan = false; // Disable panning for simplicity
            this.controls.minPolarAngle = Math.PI * 0.2; // Restrict looking up too much
            this.controls.maxPolarAngle = Math.PI * 0.45; // Restrict looking down too much
            this.controls.minAzimuthAngle = -Math.PI * 0.25; // Restrict horizontal rotation
            this.controls.maxAzimuthAngle = Math.PI * 0.25;  // Restrict horizontal rotation
            this.controls.rotateSpeed = 0.5; // Slower rotation for better control

            // Add "follow flamingo" button
            this.addFollowFlamingoButton();

            // Create natural river with curved shape
            this.createNaturalRiver();

            // Load 3D models
            this.loadFlamingo();

            // Create grass instances for realistic detail
            this.createGrassInstances();

            // Start animation loop
            this.animate();

            // Handle window resize
            window.addEventListener('resize', this.onWindowResize.bind(this));
            
            // Add click event for flags
            window.addEventListener('click', this.onMouseClick.bind(this));
            
            this.logDebug('Scene initialization complete');
        } catch (error) {
            console.error('Error initializing Scene3D:', error);
            this.logDebug('ERROR: ' + error.message);
        }
    }

    logDebug(message) {
        console.log(message);
        this.debugElement.innerHTML += message + '<br>';
        // Keep only last 5 messages
        const lines = this.debugElement.innerHTML.split('<br>');
        if (lines.length > 6) {
            this.debugElement.innerHTML = lines.slice(lines.length - 6).join('<br>');
        }
    }

    addInfiniteEnvironment() {
        // Create a giant ground plane for base
        const groundSize = 1000;
        const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize, 1, 1);
        const groundMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x3a2a0a,
            roughness: 0.8,
            metalness: 0.2
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.5;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Generate initial terrain grid around the camera
        this.generateTerrainGrid();
    }

    generateTerrainGrid() {
        // Generate a grid of terrain cells based on camera position
        const gridExtent = 8; // How many grid cells in each direction
        
        for (let x = -gridExtent; x <= gridExtent; x++) {
            for (let z = -gridExtent; z <= gridExtent; z++) {
                // Skip the center area where river will be
                if (x === 0 && z === 0) continue;
                if (Math.abs(x) <= 1 && Math.abs(z) <= 8) continue;
                
                // Create terrain cell with consistent seed based on position
                this.createTerrainCell(x * this.gridSize, z * this.gridSize);
            }
        }
        
        // Create expanded terrain along the river (keep existing code)
        this.createExpandedTerrain();
    }
    
    createTerrainCell(gridX, gridZ) {
        // Create a terrain cell at the specified grid position
        const cellKey = `${gridX},${gridZ}`;
        
        // Check if this cell already exists
        if (this.terrainGrid.some(t => t.key === cellKey)) {
            return;
        }
        
        // Skip terrain generation if this cell intersects with the river
        // Check multiple points along the river path to account for its curve
        let intersectsRiver = false;
        const riverWidth = 3; // Must match createNaturalRiver
        const riverHalfWidth = riverWidth / 2 + 1; // Add buffer zone
        
        // Check cell corners and center for river intersection
        const cellSize = this.gridSize;
        const pointsToCheck = [
            {x: gridX - cellSize/2, z: gridZ - cellSize/2}, // Bottom left
            {x: gridX + cellSize/2, z: gridZ - cellSize/2}, // Bottom right
            {x: gridX - cellSize/2, z: gridZ + cellSize/2}, // Top left
            {x: gridX + cellSize/2, z: gridZ + cellSize/2}, // Top right
            {x: gridX, z: gridZ} // Center
        ];
        
        for (const point of pointsToCheck) {
            const curveOffset = this.getRiverCurveOffset(point.z);
            const distToRiver = Math.abs(point.x - curveOffset);
            if (distToRiver < riverHalfWidth) {
                intersectsRiver = true;
                break;
            }
        }
        
        if (intersectsRiver) {
            return; // Skip this cell as it intersects with the river
        }
        
        // Create terrain features for this cell
        const terrainFeatures = [];
        
        // Use a seeded random based on position for consistency
        let seed = Math.abs(gridX * 10000 + gridZ);
        const rng = () => {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };
        
        // Generate 3-6 terrain features per cell
        const featureCount = Math.floor(rng() * 4) + 3;
        
        for (let i = 0; i < featureCount; i++) {
            // Random position within this grid cell
            const offsetX = (rng() - 0.5) * this.gridSize * 0.8;
            const offsetZ = (rng() - 0.5) * this.gridSize * 0.8;
            const posX = gridX + offsetX;
            const posZ = gridZ + offsetZ;
            
            // Skip if too close to river
            const curveOffset = this.getRiverCurveOffset(posZ);
            const distToRiver = Math.abs(posX - curveOffset);
            if (distToRiver < riverHalfWidth) continue;
            
            // Random height and scale
            const height = 0.1 + rng() * 0.4;
            const scale = 0.5 + rng() * 1.0;
            
            // Varied colors for natural appearance
            const colorVariation = rng() * 0.1;
            const baseColor = 0x3b7a37;
            const color = new THREE.Color(baseColor).offsetHSL(0, 0, colorVariation - 0.05);
            
            // Create the terrain feature
            const terrain = this.createTerrain(posX, height, posZ, scale, color.getHex());
            
            if (terrain) {
                terrainFeatures.push(terrain);
                
                // Add grass on this terrain
                this.addGrassToTerrain(terrain, scale);
            }
        }
        
        // Store the terrain cell
        this.terrainGrid.push({
            key: cellKey,
            x: gridX,
            z: gridZ,
            features: terrainFeatures
        });
    }

    // Calculate a curve offset at any point along the z-axis
    getRiverCurveOffset(z) {
        // Create a natural winding pattern using multiple sine functions with different frequencies
        // This creates a more natural, non-repeating curve for the infinite river
        return Math.sin(z * 0.02) * 4.0 + 
               Math.sin(z * 0.05) * 2.0 + 
               Math.sin(z * 0.1) * 0.8;
    }

    createExpandedTerrain() {
        // Ensure terrain doesn't overlap with river
        const riverWidth = 3; // Must match riverWidth from createNaturalRiver
        const safeDistance = riverWidth / 2 + 0.5; // Keep terrain at least this far from river center
        
        // Create many terrain features on left side (away from river)
        for (let i = 0; i < 20; i++) {
            // Random positions but avoid the river area
            const z = (Math.random() - 0.5) * 18;
            const curveOffset = this.getRiverCurveOffset(z);
            
            // Left side terrain (more extensive coverage) - ensure minimum safe distance from river
            const minSafeDistanceLeft = -safeDistance + curveOffset;
            const leftX = Math.min(minSafeDistanceLeft - 0.5, -2.5 - curveOffset - Math.random() * 5);
            const height = 0.1 + Math.random() * 0.3;
            const scale = 0.5 + Math.random() * 0.8;
            
            // Varied colors for more natural appearance
            const colorVariation = Math.random() * 0.1;
            const baseColor = 0x3b7a37;
            const color = new THREE.Color(baseColor).offsetHSL(0, 0, colorVariation - 0.05);
            
            const terrain = this.createTerrain(leftX, height, z, scale, color.getHex());
            
            // Add grass to this terrain feature
            if (terrain) {
                this.addGrassToTerrain(terrain, scale);
            }
        }
        
        // Create terrain on right side (away from river)
        for (let i = 0; i < 20; i++) {
            const z = (Math.random() - 0.5) * 18;
            const curveOffset = this.getRiverCurveOffset(z);
            
            // Right side terrain - ensure minimum safe distance from river
            const minSafeDistanceRight = safeDistance + curveOffset;
            const rightX = Math.max(minSafeDistanceRight + 0.5, 2.5 + curveOffset + Math.random() * 5);
            const height = 0.1 + Math.random() * 0.3;
            const scale = 0.5 + Math.random() * 0.8;
            
            // Varied colors
            const colorVariation = Math.random() * 0.1;
            const baseColor = 0x3b7a37;
            const color = new THREE.Color(baseColor).offsetHSL(0, 0, colorVariation - 0.05);
            
            const terrain = this.createTerrain(rightX, height, z, scale, color.getHex());
            
            // Add grass to this terrain feature
            if (terrain) {
                this.addGrassToTerrain(terrain, scale);
            }
        }
        
        // Add smaller terrain close to river banks (for detail) - ensure they're exactly at river edge
        for (let i = 0; i < 16; i++) {
            const side = i % 2 === 0 ? -1 : 1; // Alternate left and right
            const z = (Math.random() - 0.5) * 18;
            const curveOffset = this.getRiverCurveOffset(z);
            
            // Position exactly at the riverbank edge
            const edgeX = side * (riverWidth / 2 + curveOffset * 0.5);
            const xOffset = side * (0.1 + Math.random() * 0.3); // Small offset away from river
            const x = edgeX + xOffset;
            
            const height = 0.05 + Math.random() * 0.15;
            const scale = 0.3 + Math.random() * 0.4;
            
            // Greener color for near-river vegetation
            const bankColor = 0x2d6a29;
            
            const terrain = this.createTerrain(x, height, z, scale, bankColor);
            
            // Add grass to this riverbank terrain
            if (terrain) {
                this.addGrassToTerrain(terrain, scale, true); // true for denser grass near river
            }
        }
    }

    createTerrain(posX, height, posZ, scale, color) {
        try {
            // Create varied terrain shapes
            const terrainType = Math.floor(Math.random() * 3);
            let terrainGeometry;
            
            switch(terrainType) {
                case 0: // Rounded hill
                    terrainGeometry = new THREE.SphereGeometry(1, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
                    break;
                case 1: // Rocky formation
                    terrainGeometry = new THREE.DodecahedronGeometry(0.8, 0);
                    break;
                case 2: // Gentle mound
                default:
                    terrainGeometry = new THREE.SphereGeometry(1, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2);
                    break;
            }
            
            const terrainMaterial = new THREE.MeshStandardMaterial({
                color: color,
                roughness: 0.8,
                metalness: 0.1,
                flatShading: true,
            });
            
            const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
            
            // Position and scale with slight randomization
            const xVariation = Math.random() * 0.3 - 0.15;
            terrain.position.set(posX + xVariation, -0.5 + height, posZ);
            
            // Non-uniform scaling for more natural shapes
            const xzScale = scale * (1 + Math.random() * 0.3);
            const yScale = scale * (0.3 + Math.random() * 0.3);
            terrain.scale.set(xzScale, yScale, xzScale);
            
            // Random rotation
            terrain.rotation.y = Math.random() * Math.PI * 2;
            
            // Add vegetation (trees/bushes as before)
            const vegCount = Math.floor(scale * 3) + 1;
            this.addVegetation(posX, -0.5 + height, posZ, scale, vegCount);
            
            // Add a topic flag to some terrain features (30% chance)
            if (Math.random() < 0.3) {
                this.createTopicFlag(posX, -0.5 + height, posZ);
            }
            
            // Add shadows
            terrain.castShadow = true;
            terrain.receiveShadow = true;
            
            this.scene.add(terrain);
            
            // Store additional information with the terrain
            terrain.userData = {
                type: 'terrain',
                baseScale: { x: xzScale, y: yScale, z: xzScale },
                baseHeight: height,
                baseColor: color
            };
            
            return terrain;
        } catch (error) {
            console.error('Error creating terrain:', error);
            this.logDebug('ERROR creating terrain: ' + error.message);
            return null;
        }
    }
    
    addVegetation(posX, posY, posZ, scale, count = 3) {
        // Create trees and bushes
        for (let i = 0; i < count; i++) {
            // Random offsets
            const offsetX = (Math.random() - 0.5) * scale * 1.5;
            const offsetZ = (Math.random() - 0.5) * scale * 1.5;
            
            // Determine vegetation type
            const vegType = Math.random();
            let geometry, material;
            
            if (vegType > 0.7) {
                // Tall tree
                geometry = new THREE.ConeGeometry(0.15, 0.7, 5);
                material = new THREE.MeshStandardMaterial({
                    color: 0x225522,
                    roughness: 0.9,
                    metalness: 0.0
                });
            } else if (vegType > 0.3) {
                // Medium tree
                geometry = new THREE.ConeGeometry(0.2, 0.5, 5);
                material = new THREE.MeshStandardMaterial({
                    color: 0x336633,
                    roughness: 0.9,
                    metalness: 0.0
                });
            } else {
                // Bush/shrub
                geometry = new THREE.SphereGeometry(0.15, 6, 4);
                material = new THREE.MeshStandardMaterial({
                    color: 0x447744,
                    roughness: 0.9,
                    metalness: 0.0
                });
            }
            
            const vegetation = new THREE.Mesh(geometry, material);
            vegetation.position.set(posX + offsetX, posY + 0.25, posZ + offsetZ);
            
            // Random rotation
            vegetation.rotation.y = Math.random() * Math.PI * 2;
            
            // Random scale
            const vegScale = 0.7 + Math.random() * 0.6;
            vegetation.scale.set(vegScale, vegScale, vegScale);
            
            vegetation.castShadow = true;
            vegetation.receiveShadow = true;
            
            this.scene.add(vegetation);
        }
    }
    
    createGrassInstances() {
        // Create grass blade template geometry - IMPROVED GRASS VISIBILITY
        const bladeWidth = 0.15; // Wider blade
        const bladeHeight = 0.35; // Taller blade
        
        // Create cross-plane grass geometry
        const grassGeometry = new THREE.BufferGeometry();
        
        // Create positions for cross-planes
        const positions = [];
        const uvs = [];
        const indices = [];
        
        // First blade (vertical plane)
        positions.push(
            -bladeWidth/2, 0, 0,
            bladeWidth/2, 0, 0,
            bladeWidth/2, bladeHeight, 0,
            -bladeWidth/2, bladeHeight, 0
        );
        
        uvs.push(
            0, 0,
            1, 0,
            1, 1,
            0, 1
        );
        
        indices.push(
            0, 1, 2,
            0, 2, 3
        );
        
        // Second blade (crossed plane)
        positions.push(
            0, 0, -bladeWidth/2,
            0, 0, bladeWidth/2,
            0, bladeHeight, bladeWidth/2,
            0, bladeHeight, -bladeWidth/2
        );
        
        uvs.push(
            0, 0,
            1, 0,
            1, 1,
            0, 1
        );
        
        indices.push(
            4, 5, 6,
            4, 6, 7
        );
        
        // Set attributes
        grassGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        grassGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        grassGeometry.setIndex(indices);
        grassGeometry.computeVertexNormals();
        
        // Create grass texture with improved visibility
        const grassTexture = this.createGrassTexture();
        
        // Create grass material with better visibility settings
        const grassMaterial = new THREE.MeshStandardMaterial({
            map: grassTexture,
            alphaTest: 0.7,
            side: THREE.DoubleSide,
            color: 0x91e56e, // Maintain the color
            emissive: 0x112211, // Slight emissive to enhance visibility
            metalness: 0.0,
            roughness: 0.8
        });
        
        // Store for later
        this.grassGeometry = grassGeometry;
        this.grassMaterial = grassMaterial;
    }
    
    createGrassTexture() {
        // Create an improved grass blade texture
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        
        // Create more vibrant gradient
        const gradient = ctx.createLinearGradient(32, 0, 32, 128);
        gradient.addColorStop(0, 'rgba(123, 180, 90, 1.0)'); // Brighter green at bottom
        gradient.addColorStop(0.6, 'rgba(163, 219, 94, 1.0)'); // Brighter medium green
        gradient.addColorStop(1.0, 'rgba(193, 240, 125, 0.8)'); // Brighter tip with more opacity
        
        // Draw blade shape
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(32, 0); // Start at bottom middle
        ctx.bezierCurveTo(28, 32, 0, 64, 16, 128); // Left curve
        ctx.lineTo(48, 128); // Top
        ctx.bezierCurveTo(64, 64, 36, 32, 32, 0); // Right curve
        ctx.fill();
        
        // Create texture
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        
        return texture;
    }
    
    addGrassToTerrain(terrain, baseScale, isRiverbank = false) {
        if (!terrain || !this.grassGeometry || !this.grassMaterial) return;
        
        try {
            // Calculate grass density based on terrain size - INCREASED DENSITY
            const terrainSize = baseScale * 2.5; // Larger terrain size consideration
            const grassDensity = isRiverbank ? 80 : 50; // Significantly more grass on terrain
            const grassCount = Math.floor(terrainSize * terrainSize * grassDensity);
            
            // Create an instanced mesh for grass
            const grassInstancedMesh = new THREE.InstancedMesh(
                this.grassGeometry,
                this.grassMaterial,
                grassCount
            );
            
            grassInstancedMesh.castShadow = true;
            grassInstancedMesh.receiveShadow = true;
            
            // Get terrain position and scale
            const terrainPos = terrain.position;
            const terrainScale = terrain.scale;
            
            // Create dummy for instance transforms
            const dummy = new THREE.Object3D();
            
            // Place grass blades around the terrain
            for (let i = 0; i < grassCount; i++) {
                // Random position on terrain surface
                const theta = Math.random() * Math.PI * 2;
                const radius = (Math.sqrt(Math.random()) * terrainScale.x * 0.9);
                
                const x = terrainPos.x + Math.cos(theta) * radius;
                const z = terrainPos.z + Math.sin(theta) * radius;
                
                // Calculate y position on terrain surface (approximate)
                const terrainHeight = terrainPos.y + (terrainScale.y * Math.cos(radius / terrainScale.x * Math.PI/2));
                const y = terrainHeight - 0.05; // Slightly embedded in terrain
                
                // Set position, scale and rotation
                dummy.position.set(x, y, z);
                
                // Random height and width for grass variation - LARGER
                const height = 0.15 + Math.random() * 0.25; // Taller grass
                const width = 0.06 + Math.random() * 0.04; // Wider grass
                
                dummy.scale.set(width, height, width);
                
                // Random rotation
                dummy.rotation.y = Math.random() * Math.PI * 2;
                
                // Small random tilt
                const tiltAmount = Math.random() * 0.2;
                dummy.rotation.x = (Math.random() - 0.5) * tiltAmount;
                dummy.rotation.z = (Math.random() - 0.5) * tiltAmount;
                
                // Apply instance transform
                dummy.updateMatrix();
                grassInstancedMesh.setMatrixAt(i, dummy.matrix);
                
                // Apply random color variation - but check if mesh supports color first
                if (typeof grassInstancedMesh.setColorAt === 'function') {
                    const colorVar = 0.2; // More color variation
                    const baseColor = new THREE.Color(0x91e56e);
                    const randomColor = baseColor.clone().offsetHSL(
                        (Math.random() - 0.5) * 0.05,
                        (Math.random() - 0.5) * colorVar,
                        (Math.random() - 0.3) * colorVar // Bias toward slightly brighter
                    );
                    try {
                        grassInstancedMesh.setColorAt(i, randomColor);
                    } catch (e) {
                        // If setting color fails, we'll just continue without colors
                        console.warn("Could not set instance color - continuing without color variation");
                        break; // Don't try to set more colors
                    }
                }
            }
            
            // Update instance matrix and colors
            grassInstancedMesh.instanceMatrix.needsUpdate = true;
            if (grassInstancedMesh.instanceColor) {
                grassInstancedMesh.instanceColor.needsUpdate = true;
            }
            
            // Add to scene
            this.scene.add(grassInstancedMesh);
            
            // Store reference to grass with its parent terrain
            this.grassInstances.push({
                mesh: grassInstancedMesh,
                terrain: terrain,
                count: grassCount
            });
        } catch (error) {
            console.error("Error adding grass to terrain:", error);
            // Silently fail - terrain will just have no grass
        }
    }

    createNaturalRiver() {
        try {
            this.logDebug('Creating infinite winding river');
            
            // Create a much longer river for infinite scrolling effect
            const riverWidth = 3;
            const riverLength = 200; // Much longer river
            const segments = 64; // More segments for smoother curves
            
            // Create a curved river surface using custom geometry
            const waterGeometry = new THREE.PlaneGeometry(riverWidth, riverLength, segments, segments);
            const positions = waterGeometry.attributes.position.array;
            
            // Apply winding curve to the river shape
            for (let i = 0; i < positions.length; i += 3) {
                const vertexIndex = i / 3;
                const y = positions[i + 1]; // This is the z-coord before rotation
                
                // Apply sine wave curve with increasing frequency for natural look
                const curveOffset = this.getRiverCurveOffset(y);
                positions[i] += curveOffset; // Add curve to x position
            }
            
            // Update geometry
            waterGeometry.attributes.position.needsUpdate = true;
            waterGeometry.computeVertexNormals();
            
            const waterMaterial = new THREE.MeshStandardMaterial({
                color: 0x0066aa,
                metalness: 0.9,
                roughness: 0.1,
                transparent: true,
                opacity: 0.8
            });
            
            this.river = new THREE.Mesh(waterGeometry, waterMaterial);
            this.river.rotation.x = -Math.PI / 2;
            this.river.position.y = -0.4; // Slightly below ground
            this.river.position.z = 0;
            
            this.scene.add(this.river);
            
            // Create natural riverbanks without blocky shapes
            this.createNaturalRiverbanks(riverLength);
            
            // Add riverbank details for better transition
            this.addEnhancedRiverbankDetails();
            
            // Add foam particles along the curved river
            this.createInfiniteWaterFoamParticles();
            
            this.logDebug('Infinite river created successfully');
        } catch (error) {
            console.error('Error creating infinite river:', error);
            this.logDebug('ERROR creating river: ' + error.message);
        }
    }
    
    createNaturalRiverbanks(riverLength) {
        // Replace the previous riverbank generation with more natural terrain
        const segments = 40; // Number of segments along the river
        
        // Create natural embankments on both sides with terrain-like features
        [-1, 1].forEach(side => {
            for (let i = 0; i < segments; i++) {
                // Position along the river
                const zPos = (i / segments) * riverLength - riverLength / 2;
                const nextZPos = ((i + 1) / segments) * riverLength - riverLength / 2;
                
                // Get curve offset at this position
                const curveOffset = this.getRiverCurveOffset(zPos);
                
                // Create natural embankment terrain instead of a block
                this.createRiverbankTerrain(side, zPos, curveOffset, nextZPos - zPos);
            }
        });
    }
    
    createRiverbankTerrain(side, zPos, curveOffset, segmentLength) {
        // Create a natural terrain-like riverbank instead of a block
        // Parameters for the natural shape
        const bankWidth = 1.5 + Math.random() * 0.5;
        
        // Calculate the exact river edge position - this is critical for proper alignment
        const riverWidth = 3; // Must match the riverWidth from createNaturalRiver
        const riverHalfWidth = riverWidth / 2;
        
        // Position calculation - ensure we start exactly at river edge
        const innerEdgeX = side * (riverHalfWidth + curveOffset * 0.5);
        const centerX = innerEdgeX + side * (bankWidth / 2);
        
        // Adjust the bank height to blend more naturally with river
        const bankHeight = 0.1 + Math.random() * 0.15;
        
        // Use terrain-like geometries for riverbanks
        const terrainType = Math.floor(Math.random() * 2);
        let bankGeometry;
        
        // Create more organic shapes for the riverbank
        if (terrainType === 0) {
            // Stretched hemisphere for rounded bank
            bankGeometry = new THREE.SphereGeometry(1, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
            bankGeometry.scale(bankWidth, bankHeight, segmentLength * 1.2);
        } else {
            // Custom displacement geometry for more varied bank
            bankGeometry = new THREE.PlaneGeometry(bankWidth * 2, segmentLength * 2, 6, 4);
            bankGeometry.rotateX(-Math.PI / 2);
            
            // Add some random displacement for natural terrain feel
            const positionAttr = bankGeometry.attributes.position;
            for (let i = 0; i < positionAttr.count; i++) {
                const x = positionAttr.getX(i);
                const y = positionAttr.getY(i);
                
                // Only displace points not at the river edge
                if ((side < 0 && x > -bankWidth * 0.8) || (side > 0 && x < bankWidth * 0.8)) {
                    // Add random height variation - more at the outer edges
                    const distFromEdge = Math.abs(x) / bankWidth;
                    const heightMult = Math.pow(distFromEdge, 1.5); // More height further from river
                    
                    positionAttr.setZ(i, positionAttr.getZ(i) + 
                        heightMult * bankHeight * (0.7 + Math.random() * 0.5));
                }
            }
            
            // Update the geometry after displacement
            bankGeometry.computeVertexNormals();
        }
        
        // Create material that better matches the terrain
        const bankMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x2d5a29,
            roughness: 0.9,
            metalness: 0.1,
            flatShading: true, // Gives a more natural terrain look
        });
        
        const bank = new THREE.Mesh(bankGeometry, bankMaterial);
        
        // Position the bank to blend with the river - ensure proper y position to avoid floating
        bank.position.set(centerX, -0.45, zPos + segmentLength / 2);
        
        // Set proper shadows
        bank.receiveShadow = true;
        bank.castShadow = true;
        
        this.scene.add(bank);
        
        // Add some grass on the riverbank for a more natural blend
        if (Math.random() > 0.6) {
            // Create natural vegetation patches 
            this.createTerrainFeatures(
                centerX + side * (Math.random() * 0.3),
                bankHeight * 0.5 - 0.4,
                zPos + segmentLength * (Math.random() * 0.8),
                0.2 + Math.random() * 0.3, // Small scale
                true // Is riverbank
            );
        }
    }
    
    createTerrainFeatures(x, y, z, scale, isRiverbank = false) {
        // Create small terrain features to enhance the riverbank
        const color = isRiverbank ? 0x3a7a35 : 0x2d5a29; // Greener near water
        
        // Create a small terrain feature
        const geometry = new THREE.SphereGeometry(1, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2);
        
        const material = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.9,
            metalness: 0.1,
            flatShading: true
        });
        
        const feature = new THREE.Mesh(geometry, material);
        
        // Scale and position the feature
        const yScale = scale * 0.3; // Flatter
        feature.scale.set(scale, yScale, scale);
        feature.position.set(x, y, z);
        feature.rotation.y = Math.random() * Math.PI * 2;
        
        // Add shadows
        feature.castShadow = true;
        feature.receiveShadow = true;
        
        this.scene.add(feature);
        
        // Add grass on this feature
        if (isRiverbank) {
            this.addGrassToTerrain(feature, scale, true);
        }
        
        // Add some vegetation if on riverbank
        if (isRiverbank && Math.random() > 0.5) {
            this.addRiverbankVegetation(x, y, z, scale);
        }
        
        return feature;
    }
    
    addRiverbankVegetation(x, y, z, scale) {
        // Add vegetation suitable for riverbanks (reeds, water plants)
        const plantCount = Math.floor(2 + Math.random() * 3);
        
        for (let i = 0; i < plantCount; i++) {
            // Random offset
            const offsetX = (Math.random() - 0.5) * scale;
            const offsetZ = (Math.random() - 0.5) * scale;
            
            // Create water-friendly vegetation
            const height = 0.2 + Math.random() * 0.3;
            const width = 0.05 + Math.random() * 0.02;
            
            // Reed-like geometry for water plants
            const geometry = new THREE.CylinderGeometry(
                width/5, // Top radius (tapered)
                width, // Bottom radius
                height, // Height
                4, // Segments
                2 // Height segments
            );
            
            // Green-brown material for reeds
            const material = new THREE.MeshStandardMaterial({
                color: 0x6a8d4a,
                roughness: 0.9,
                metalness: 0.0,
                flatShading: true
            });
            
            const reed = new THREE.Mesh(geometry, material);
            reed.position.set(x + offsetX, y + height/2, z + offsetZ);
            
            // Random angle for naturalistic look
            reed.rotation.set(
                (Math.random() - 0.5) * 0.3,
                Math.random() * Math.PI * 2,
                (Math.random() - 0.5) * 0.3
            );
            
            reed.castShadow = true;
            this.scene.add(reed);
        }
    }
    
    // Add missing method for creating water foam particles
    createInfiniteWaterFoamParticles() {
        try {
            // Create a large number of foam particles for the infinite river
            const foamCount = 800; // Many particles for better coverage
            const foamGeometry = new THREE.BufferGeometry();
            const foamPositions = new Float32Array(foamCount * 3);
            
            // Get river dimensions for proper particle placement
            const riverWidth = 3;
            const riverHalfWidth = riverWidth / 2 * 0.9; // Slightly less than half to keep particles inside
            
            // Distribute foam particles along the river
            for (let i = 0; i < foamCount * 3; i += 3) {
                // Random position along river length
                const z = Math.random() * 200 - 100; // Cover the entire longer river
                
                // Get river curve at this position
                const curveOffset = this.getRiverCurveOffset(z);
                
                // Position foam particles on water surface - constrained within river width
                // Calculate random offset but constrain to river width
                const widthOffset = (Math.random() - 0.5) * riverHalfWidth * 2;
                
                foamPositions[i] = curveOffset + widthOffset; // x - follow river curve but stay within bounds
                foamPositions[i+1] = -0.38; // y - just above water
                foamPositions[i+2] = z; // z - along river length
            }
            
            // Set geometry attributes
            foamGeometry.setAttribute('position', new THREE.BufferAttribute(foamPositions, 3));
            
            // Create foam material
            const foamMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.15,
                transparent: true,
                opacity: 0.7,
                map: this.createCircleTexture(32, '#ffffff'),
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });
            
            // Create foam particle system
            this.waterFoam = new THREE.Points(foamGeometry, foamMaterial);
            this.scene.add(this.waterFoam);
            
            this.logDebug('Water foam particles created');
        } catch (error) {
            console.error('Error creating water foam:', error);
            this.logDebug('ERROR creating water foam: ' + error.message);
        }
    }
    
    addEnhancedRiverbankDetails() {
        // Add more natural details along riverbanks (expanded from addRiverbankDetails)
        const riverLength = 40; // Increase detail area
        const detailsCount = 100; // More details
        
        // Create different materials for details
        const pebblesMatDark = new THREE.MeshStandardMaterial({
            color: 0x555555,
            roughness: 0.9,
            metalness: 0.1
        });
        
        const pebblesMatLight = new THREE.MeshStandardMaterial({
            color: 0x888888,
            roughness: 0.8,
            metalness: 0.2
        });
        
        const sandMat = new THREE.MeshStandardMaterial({
            color: 0xd2c49a,
            roughness: 1.0,
            metalness: 0.0
        });
        
        const mudMat = new THREE.MeshStandardMaterial({
            color: 0x5c4e3b,
            roughness: 1.0,
            metalness: 0.0
        });
        
        // Add random details on both sides
        for (let i = 0; i < detailsCount; i++) {
            const side = i % 2 === 0 ? -1 : 1;
            const z = (Math.random() - 0.5) * riverLength;
            const curveOffset = this.getRiverCurveOffset(z);
            
            // Position close to water edge with more variation
            const edgeDistance = 1.5 + curveOffset * 0.5;
            const x = side * (edgeDistance + Math.random() * 0.6 - 0.2); // Allow some to be in the water
            
            // Choose detail type with more variety
            const detailType = Math.random();
            
            if (detailType > 0.8) {
                // Pebble cluster
                this.createPebbleCluster(x, z, pebblesMatDark, pebblesMatLight);
            } else if (detailType > 0.6) {
                // Sand patch
                this.createSandPatch(x, z, sandMat);
            } else if (detailType > 0.4) {
                // Mud patch at water's edge
                this.createMudPatch(x, z, mudMat);
            } else if (detailType > 0.2) {
                // Water plants
                this.createWaterPlants(x, z);
            } else {
                // Single pebble
                this.createPebble(x, z, pebblesMatDark);
            }
        }
    }
    
    createMudPatch(x, z, material) {
        // Create a mud patch that blends into the water
        const patchSize = 0.2 + Math.random() * 0.4;
        const geometry = new THREE.CircleGeometry(patchSize, 8);
        
        const mudPatch = new THREE.Mesh(geometry, material);
        mudPatch.rotation.x = -Math.PI / 2;
        mudPatch.position.set(x, -0.39, z);
        
        mudPatch.receiveShadow = true;
        this.scene.add(mudPatch);
        
        // Create some bubbles or detailed texture on the mud
        if (Math.random() > 0.5) {
            const bubbleCount = Math.floor(Math.random() * 5) + 1;
            
            for (let i = 0; i < bubbleCount; i++) {
                const bubbleSize = 0.02 + Math.random() * 0.01;
                const bubbleGeometry = new THREE.SphereGeometry(bubbleSize, 4, 4);
                const bubbleMaterial = new THREE.MeshStandardMaterial({
                    color: 0x6c5b4b,
                    roughness: 0.5,
                    metalness: 0.2
                });
                
                const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
                
                // Position on the mud patch
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * patchSize * 0.8;
                
                bubble.position.set(
                    x + Math.cos(angle) * distance,
                    -0.39 + bubbleSize * 0.5,
                    z + Math.sin(angle) * distance
                );
                
                this.scene.add(bubble);
            }
        }
    }
    
    createWaterPlants(x, z) {
        // Create water plants (lilies, reeds, etc.)
        const plantType = Math.random();
        
        if (plantType > 0.6) {
            // Lily pad
            this.createLilyPad(x, z);
        } else {
            // Reed cluster
            this.createReedCluster(x, z);
        }
    }
    
    createLilyPad(x, z) {
        // Create a lily pad floating on water
        const padSize = 0.1 + Math.random() * 0.15;
        const padGeometry = new THREE.CircleGeometry(padSize, 8);
        const padMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a6b34,
            roughness: 0.7,
            metalness: 0.1,
            side: THREE.DoubleSide
        });
        
        const lilyPad = new THREE.Mesh(padGeometry, padMaterial);
        lilyPad.rotation.x = -Math.PI / 2;
        lilyPad.position.set(x, -0.35, z); // Slightly above water
        
        this.scene.add(lilyPad);
        
        // Sometimes add a flower
        if (Math.random() > 0.6) {
            const flowerGeometry = new THREE.SphereGeometry(padSize * 0.2, 8, 6);
            const flowerMaterial = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0x443333,
                roughness: 0.5,
                metalness: 0.1
            });
            
            const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
            flower.position.set(x, -0.3, z);
            
            this.scene.add(flower);
        }
    }
    
    createReedCluster(x, z) {
        // Create a cluster of reeds coming out of the water
        const reedCount = Math.floor(Math.random() * 4) + 2;
        const clusterRadius = 0.1;
        
        for (let i = 0; i < reedCount; i++) {
            const height = 0.3 + Math.random() * 0.4;
            const width = 0.02 + Math.random() * 0.01;
            
            // Reed geometry (thin cylinder)
            const reedGeometry = new THREE.CylinderGeometry(
                width/4, width, height, 4, 2
            );
            
            const reedMaterial = new THREE.MeshStandardMaterial({
                color: 0x6a8d4a, // Green-brown
                roughness: 0.9,
                metalness: 0.0
            });
            
            const reed = new THREE.Mesh(reedGeometry, reedMaterial);
            
            // Position in cluster
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * clusterRadius;
            
            reed.position.set(
                x + Math.cos(angle) * distance,
                -0.4 + height / 2, // Half in water
                z + Math.sin(angle) * distance
            );
            
            // Slight random tilt
            reed.rotation.set(
                (Math.random() - 0.5) * 0.3,
                Math.random() * Math.PI * 2,
                (Math.random() - 0.5) * 0.3
            );
            
            reed.castShadow = true;
            this.scene.add(reed);
        }
    }
    
    createPebbleCluster(x, z, darkMaterial, lightMaterial) {
        // Create a cluster of small pebbles along the riverbank
        const pebbleCount = Math.floor(Math.random() * 7) + 3;
        const clusterRadius = 0.15;
        
        for (let i = 0; i < pebbleCount; i++) {
            // Random position in cluster
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * clusterRadius;
            const pebbleX = x + Math.cos(angle) * distance;
            const pebbleZ = z + Math.sin(angle) * distance;
            
            // Random size for pebble
            const size = 0.02 + Math.random() * 0.04;
            
            // Create pebble with random shape
            const geometry = Math.random() > 0.5 ? 
                new THREE.DodecahedronGeometry(size, 0) : 
                new THREE.SphereGeometry(size, 4, 3);
            
            // Use dark or light material randomly
            const material = Math.random() > 0.7 ? lightMaterial : darkMaterial;
            
            const pebble = new THREE.Mesh(geometry, material);
            
            // Position slightly embedded in ground
            pebble.position.set(pebbleX, -0.39 + size * 0.3, pebbleZ);
            
            // Random rotation
            pebble.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            
            pebble.castShadow = true;
            pebble.receiveShadow = true;
            
            this.scene.add(pebble);
        }
    }
    
    createSandPatch(x, z, material) {
        // Create a sand patch along the riverbank
        const patchSize = 0.25 + Math.random() * 0.4;
        const geometry = new THREE.CircleGeometry(patchSize, 8);
        
        const sandPatch = new THREE.Mesh(geometry, material);
        sandPatch.rotation.x = -Math.PI / 2;
        sandPatch.position.set(x, -0.39, z);
        
        sandPatch.receiveShadow = true;
        this.scene.add(sandPatch);
        
        // Add some small ripples or patterns in the sand
        if (Math.random() > 0.6) {
            const rippleCount = Math.floor(Math.random() * 3) + 1;
            
            for (let i = 0; i < rippleCount; i++) {
                // Create ripple pattern
                const rippleSize = patchSize * (0.5 + Math.random() * 0.3);
                const rippleGeometry = new THREE.RingGeometry(
                    rippleSize * 0.7, 
                    rippleSize, 
                    8, 1
                );
                
                const rippleMaterial = new THREE.MeshBasicMaterial({
                    color: 0xc4b59a,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.3
                });
                
                const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
                ripple.rotation.x = -Math.PI / 2;
                
                // Position ripple on sand patch with slight offset
                ripple.position.set(
                    x + (Math.random() - 0.5) * patchSize * 0.4,
                    -0.389, // Slightly above sand
                    z + (Math.random() - 0.5) * patchSize * 0.4
                );
                
                this.scene.add(ripple);
            }
        }
    }
    
    createPebble(x, z, material) {
        // Create a single pebble
        const size = 0.03 + Math.random() * 0.05;
        
        // Randomly choose shape for variation
        let geometry;
        const shapeType = Math.random() * 3;
        
        switch(shapeType) {
            case 0:
                geometry = new THREE.SphereGeometry(size, 5, 4);
                break;
            case 1:
                geometry = new THREE.DodecahedronGeometry(size, 0);
                break;
            case 2:
            default:
                geometry = new THREE.IcosahedronGeometry(size, 0);
                break;
        }
        
        const pebble = new THREE.Mesh(geometry, material);
        
        // Position with slight randomization
        pebble.position.set(
            x + (Math.random() - 0.5) * 0.1,
            -0.39 + size * 0.3, // Partially embedded
            z + (Math.random() - 0.5) * 0.1
        );
        
        // Random rotation
        pebble.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        pebble.castShadow = true;
        pebble.receiveShadow = true;
        
        this.scene.add(pebble);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        try {
            const deltaTime = this.clock.getDelta();
            const elapsedTime = this.clock.getElapsedTime();
            
            // Animate existing elements
            if (this.model) {
                this.model.rotation.y += 0.003;
            }

            if (this.particles) {
                this.particles.rotation.y += 0.0005;
            }
            
            if (this.flamingoMixer) {
                this.flamingoMixer.update(deltaTime);
            }
            
            // Follow flamingo with camera if enabled - IMPROVED CAMERA FOLLOWING
            if (this.isFollowingFlamingo && this.flamingo) {
                // More natural following with smoother transitions
                const targetPos = new THREE.Vector3();
                const targetLook = new THREE.Vector3();
                
                // Calculate camera position based on flamingo orientation
                // More dynamic offset with greater height to see more terrain
                const offset = new THREE.Vector3(0, 4, 10); // Higher and further back
                offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.flamingo.rotation.y + Math.PI);
                targetPos.copy(this.flamingo.position).add(offset);
                
                // Look ahead of the flamingo in its direction of travel
                const lookOffset = new THREE.Vector3(0, 0, -10); // Look further ahead
                lookOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.flamingo.rotation.y);
                targetLook.copy(this.flamingo.position).add(lookOffset);
                
                // Smooth camera movement with lerp
                this.camera.position.lerp(targetPos, 0.05);
                
                // Create a temporary vector for the current look target
                const currentLookTarget = new THREE.Vector3();
                this.camera.getWorldDirection(currentLookTarget);
                currentLookTarget.multiplyScalar(10).add(this.camera.position);
                
                // Smoothly interpolate the look target
                const smoothLookTarget = new THREE.Vector3();
                smoothLookTarget.lerp(targetLook, 0.1);
                
                // Make the camera look at the target
                this.camera.lookAt(smoothLookTarget);
            }
            
            // Animate grass with subtle wind effect
            this.animateGrass(elapsedTime);
            
            // Animate foam particles along the curved infinite river
            if (this.waterFoam && this.waterFoam.geometry && this.waterFoam.geometry.attributes.position) {
                const positions = this.waterFoam.geometry.attributes.position.array;
                const riverWidth = 3;
                const riverHalfWidth = riverWidth / 2 * 0.9; // Keep particles inside river bounds
                
                for (let i = 0; i < positions.length; i += 3) {
                    // Store original position
                    const oldZ = positions[i+2];
                    
                    // Move particles along the river (z-axis)
                    positions[i+2] -= 0.05; // Speed of foam movement
                    
                    // Get current z
                    const newZ = positions[i+2];
                    
                    // Update x position to follow the river curve as z changes
                    const oldCurveOffset = this.getRiverCurveOffset(oldZ);
                    const newCurveOffset = this.getRiverCurveOffset(newZ);
                    positions[i] += (newCurveOffset - oldCurveOffset);
                    
                    // Add slight wobble but constrain to stay within river boundaries
                    const wobble = Math.sin(elapsedTime * 2 + positions[i+2]) * 0.003;
                    positions[i] += wobble;
                    
                    // Ensure particle stays within river bounds
                    const distFromCenter = Math.abs(positions[i] - this.getRiverCurveOffset(positions[i+2]));
                    if (distFromCenter > riverHalfWidth) {
                        // Push back toward river center
                        const direction = positions[i] > this.getRiverCurveOffset(positions[i+2]) ? -1 : 1;
                        positions[i] = this.getRiverCurveOffset(positions[i+2]) + direction * riverHalfWidth;
                    }
                    
                    // Reset particles that reach the end of visible area
                    if (positions[i+2] < -100) {
                        positions[i+2] = 100; // Much larger range for infinite effect
                        // Reset x position based on the curve at the new z position with random offset within river
                        const resetCurveOffset = this.getRiverCurveOffset(100);
                        positions[i] = resetCurveOffset + (Math.random() - 0.5) * riverHalfWidth * 2;
                    }
                }
                
                this.waterFoam.geometry.attributes.position.needsUpdate = true;
            }
            
            // Make water shimmer slightly with more varied pattern
            if (this.river && this.river.material) {
                const hue = 0.58 + Math.sin(elapsedTime * 0.5) * 0.02 + Math.sin(elapsedTime * 0.2) * 0.01;
                this.river.material.color.setHSL(hue, 0.8, 0.5);
            }
            
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        } catch (error) {
            console.error('Error in animation loop:', error);
            this.logDebug('ERROR in animation: ' + error.message);
        }
    }

    animateGrass(time) {
        // Apply a subtle wind animation to grass instances
        try {
            // If no grass instances, skip animation
            if (!this.grassInstances || this.grassInstances.length === 0) {
                return;
            }
            
            // Limit the number of instances we update per frame for performance
            const maxInstanceUpdates = Math.min(5, this.grassInstances.length);
            
            // Only update a few randomly selected grass patches each frame
            for (let j = 0; j < maxInstanceUpdates; j++) {
                // Pick a random grass patch to update
                const randomIndex = Math.floor(Math.random() * this.grassInstances.length);
                const grassInstance = this.grassInstances[randomIndex];
                
                // Safety check
                if (!grassInstance || !grassInstance.mesh) continue;
                
                const mesh = grassInstance.mesh;
                const count = grassInstance.count;
                
                // Skip if no instanceMatrix or dummy matrix
                if (!mesh.instanceMatrix || !mesh.instanceMatrix.array) continue;
                
                // Create a dummy for transformations
                const dummy = new THREE.Object3D();
                const matrix = new THREE.Matrix4();
                
                // Wind parameters - reduced for better performance
                const windStrength = 0.03;
                const windSpeed = 0.4;
                
                // Update only a subset of instances each frame for performance
                const updateCount = Math.min(15, count);
                for (let i = 0; i < updateCount; i++) {
                    // Pick a random instance to update
                    const index = Math.floor(Math.random() * count);
                    
                    try {
                        // Get original matrix
                        mesh.getMatrixAt(index, matrix);
                        dummy.matrix.copy(matrix);
                        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
                        
                        // Apply wind based on position
                        const windFactor = Math.sin(time * windSpeed + dummy.position.x * 0.5 + dummy.position.z * 0.5) * windStrength;
                        
                        // Apply tilt in wind direction
                        dummy.rotation.x = windFactor * 0.3;
                        dummy.rotation.z = windFactor * 0.5;
                        
                        // Update matrix
                        dummy.updateMatrix();
                        mesh.setMatrixAt(index, dummy.matrix);
                    } catch (error) {
                        // Skip this instance if there's an error
                        continue;
                    }
                }
                
                // Flag update
                try {
                    mesh.instanceMatrix.needsUpdate = true;
                } catch (error) {
                    console.warn("Error updating grass matrix:", error);
                }
            }
        } catch (error) {
            console.error("Error animating grass:", error);
            // Silent fail - we don't want the animation loop to stop due to grass errors
        }
    }

    onWindowResize() {
        try {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        } catch (error) {
            console.error('Error handling window resize:', error);
        }
    }

    // Add missing method for creating circle texture for particles
    createCircleTexture(radius = 32, color = '#ffffff') {
        const canvas = document.createElement('canvas');
        canvas.width = radius * 2;
        canvas.height = radius * 2;
        
        const context = canvas.getContext('2d');
        
        // Draw circle
        context.beginPath();
        context.arc(radius, radius, radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
        
        // Create soft edge (gradient)
        const gradient = context.createRadialGradient(
            radius, radius, 0,
            radius, radius, radius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        // Draw gradient circle
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = gradient;
        context.fillRect(0, 0, radius * 2, radius * 2);
        
        // Create texture from canvas
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    addFollowFlamingoButton() {
        // Create a button to toggle camera following the flamingo
        const button = document.createElement('button');
        button.innerHTML = 'Follow Flamingo';
        
        // Style the button
        button.style.position = 'absolute';
        button.style.top = '20px';
        button.style.right = '20px';
        button.style.padding = '10px 15px';
        button.style.backgroundColor = 'rgba(255, 105, 180, 0.7)';
        button.style.color = 'white';
        button.style.border = '2px solid white';
        button.style.borderRadius = '5px';
        button.style.fontFamily = 'Arial, sans-serif';
        button.style.fontSize = '16px';
        button.style.zIndex = '1000';
        button.style.cursor = 'pointer';
        
        // Store following state
        this.isFollowingFlamingo = false;
        
        // Add click event
        button.addEventListener('click', () => {
            this.isFollowingFlamingo = !this.isFollowingFlamingo;
            button.innerHTML = this.isFollowingFlamingo ? 'Free Camera' : 'Follow Flamingo';
            button.style.backgroundColor = this.isFollowingFlamingo ? 
                'rgba(70, 130, 180, 0.7)' : 'rgba(255, 105, 180, 0.7)';
                
            // Disable controls when following
            this.controls.enabled = !this.isFollowingFlamingo;
        });
        
        document.body.appendChild(button);
    }
    
    loadFlamingo() {
        try {
            this.logDebug('Loading flamingo model');
            
            // Create a loader
            const loader = new GLTFLoader();
            
            // Load the flamingo model
            loader.load(
                './assets/models/Flamingo.glb', // Path to flamingo model
                (gltf) => {
                    // Model loaded successfully
                    this.flamingo = gltf.scene;
                    
                    // Set scale and position - above the river
                    this.flamingo.scale.set(0.01, 0.01, 0.01);
                    this.flamingo.position.set(0, 1.5, 8); // Start at the front of the river
                    this.flamingo.rotation.y = 0; // Face down the river
                    
                    // Setup shadows
                    this.flamingo.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    
                    // Setup animation
                    this.flamingoMixer = new THREE.AnimationMixer(this.flamingo);
                    
                    // Play all animations
                    gltf.animations.forEach((clip) => {
                        this.flamingoMixer.clipAction(clip).play();
                    });
                    
                    // Add to scene
                    this.scene.add(this.flamingo);
                    
                    // Start flight animation
                    this.animateFlamingoFlight();
                    
                    this.logDebug('Flamingo model loaded successfully');
                },
                (xhr) => {
                    // Loading progress
                    const percentComplete = (xhr.loaded / xhr.total) * 100;
                    this.logDebug(`Flamingo loading: ${Math.round(percentComplete)}%`);
                },
                (error) => {
                    // Error loading model
                    console.error('Error loading flamingo model:', error);
                    this.logDebug('ERROR loading flamingo: ' + error.message);
                }
            );
        } catch (error) {
            console.error('Error in loadFlamingo:', error);
            this.logDebug('ERROR in loadFlamingo: ' + error.message);
        }
    }
    
    animateFlamingoFlight() {
        // Create flight path animation for flamingo
        if (!this.flamingo) return;
        
        // Random points to explore around the terrain
        const explorePoints = [];
        const pointCount = 8;
        
        // Generate exploration points along the river and on terrain
        for (let i = 0; i < pointCount; i++) {
            // Mix points near river and on terrain
            const isRiverPoint = i % 2 === 0;
            
            if (isRiverPoint) {
                // Point along the river with more randomness
                const z = 40 + (i / pointCount) * 80; // Along the river
                const curveOffset = this.getRiverCurveOffset(z);
                
                // Random position near river
                const x = curveOffset + (Math.random() - 0.5) * 3;
                const y = 1.5 + Math.random() * 0.5; // Random height
                
                explorePoints.push({ x, y, z });
            } else {
                // Point on terrain away from river
                const side = Math.random() > 0.5 ? 1 : -1;
                const z = -40 + (i / pointCount) * 80; // Along the region
                const curveOffset = this.getRiverCurveOffset(z);
                
                // Position off to the side of the river on terrain
                const x = curveOffset + side * (3 + Math.random() * 5);
                const y = 2 + Math.random() * 1.5; // Higher over terrain
                
                explorePoints.push({ x, y, z });
            }
        }
        
        // Create a timeline animation
        const timeline = gsap.timeline({
            repeat: -1,
            onRepeat: () => {
                // Generate new explore points each cycle
                this.animateFlamingoFlight();
            }
        });
        
        // Add each point to the animation path
        explorePoints.forEach((point, index) => {
            // Calculate rotation to face next point (or toward the end if last point)
            let targetRotation = 0;
            
            if (index < explorePoints.length - 1) {
                const nextPoint = explorePoints[index + 1];
                targetRotation = Math.atan2(nextPoint.x - point.x, nextPoint.z - point.z);
            }
            
            // Calculate flight duration based on distance
            let duration = 5;
            if (index < explorePoints.length - 1) {
                const nextPoint = explorePoints[index + 1];
                const distance = Math.sqrt(
                    Math.pow(nextPoint.x - point.x, 2) + 
                    Math.pow(nextPoint.y - point.y, 2) + 
                    Math.pow(nextPoint.z - point.z, 2)
                );
                duration = 2 + distance * 0.3; // Longer duration for greater distances
            }
            
            // Animate to this point
            timeline.to(this.flamingo.position, {
                x: point.x,
                y: point.y,
                z: point.z,
                duration: duration,
                ease: "power1.inOut",
                onUpdate: () => {
                    // Create a bobbing motion during flight
                    const time = this.clock.getElapsedTime();
                    this.flamingo.position.y += Math.sin(time * 4) * 0.07; // Vertical bob
                    
                    // Add slight roll to wings
                    this.flamingo.rotation.z = Math.sin(time * 3) * 0.05;
                },
                onStart: () => {
                    // Start rotating toward the next point
                    gsap.to(this.flamingo.rotation, {
                        y: targetRotation,
                        duration: duration * 0.3,
                        ease: "power1.inOut"
                    });
                }
            });
            
            // Add a hover/pause at interesting features
            if (Math.random() > 0.7) {
                timeline.to(this.flamingo.position, {
                    y: point.y + 0.5,
                    duration: 1.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut"
                });
            }
        });
        
        this.logDebug('Flamingo flight animation setup complete');
    }

    onMouseClick(event) {
        try {
            // Calculate mouse position in normalized device coordinates (-1 to +1)
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            // Update the picking ray with the camera and mouse position
            this.raycaster.setFromCamera(this.mouse, this.camera);
            
            // Calculate objects intersecting the picking ray
            const intersects = this.raycaster.intersectObjects(this.clickableFlags);
            
            // If we clicked on a flag
            if (intersects.length > 0) {
                const clickedFlag = intersects[0].object;
                
                if (clickedFlag.userData && clickedFlag.userData.topic) {
                    // Get topic data
                    const topicData = clickedFlag.userData.topic;
                    
                    // Show topic name
                    this.logDebug(`Opening topic: ${topicData.name}`);
                    
                    // Redirect to markdown file - we'll open in a modal instead of page redirect
                    this.openTopicMarkdown(topicData);
                }
            }
        } catch (error) {
            console.error('Error handling mouse click:', error);
        }
    }

    openTopicMarkdown(topicData) {
        // Create modal element
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.zIndex = '2000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        // Create content container
        const container = document.createElement('div');
        container.style.width = '80%';
        container.style.maxWidth = '800px';
        container.style.maxHeight = '80%';
        container.style.backgroundColor = '#fff';
        container.style.borderRadius = '8px';
        container.style.padding = '20px';
        container.style.overflowY = 'auto';
        container.style.position = 'relative';
        
        // Create title
        const title = document.createElement('h2');
        title.innerText = topicData.name;
        title.style.marginTop = '0';
        title.style.color = '#333';
        container.appendChild(title);
        
        // Create loading indicator
        const loading = document.createElement('p');
        loading.innerText = 'Loading content...';
        container.appendChild(loading);
        
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.innerText = '×';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '15px';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '24px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = '#333';
        closeButton.onclick = () => document.body.removeChild(modal);
        container.appendChild(closeButton);
        
        // Add container to modal
        modal.appendChild(container);
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Fetch markdown content
        fetch(`./assets/topics/${topicData.mdFile}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load markdown file');
                }
                return response.text();
            })
            .then(markdown => {
                // Remove loading indicator
                container.removeChild(loading);
                
                // Convert markdown to HTML (basic conversion)
                const content = document.createElement('div');
                content.innerHTML = this.convertMarkdownToHtml(markdown);
                content.style.color = '#333';
                content.style.lineHeight = '1.6';
                
                // Add content to container
                container.appendChild(content);
            })
            .catch(error => {
                // Show error message
                loading.innerText = `Error: ${error.message}. This is a placeholder - you would need to create the markdown files in assets/topics/ directory.`;
                loading.style.color = 'red';
            });
    }

    convertMarkdownToHtml(markdown) {
        if (!markdown) return '';
        
        // Basic markdown conversion for demonstration
        let html = markdown;
        
        // Headers
        html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
        html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
        html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        
        // Bold and italic
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
        
        // Lists
        html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
        html = html.replace(/(<li>.+<\/li>\n)+/g, '<ul>$&</ul>');
        
        // Code blocks
        html = html.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>');
        html = html.replace(/`(.+?)`/g, '<code>$1</code>');
        
        // Links
        html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // Paragraphs
        html = html.replace(/^(?!(<h|<ul|<li|<pre)).+$/gm, '<p>$&</p>');
        
        return html;
    }

    createTopicFlag(x, y, z) {
        if (this.topics.length === 0) return null;
        
        try {
            // Pick a random topic
            const topic = this.topics[Math.floor(Math.random() * this.topics.length)];
            
            // Create flag pole - thin cylinder
            const poleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8);
            const poleMaterial = new THREE.MeshStandardMaterial({
                color: 0x8B4513, // Brown color for pole
                roughness: 0.8,
                metalness: 0.2
            });
            const pole = new THREE.Mesh(poleGeometry, poleMaterial);
            pole.position.set(x, y + 0.3, z);
            pole.castShadow = true;
            
            // Create flag - use plane geometry
            const flagGeometry = new THREE.PlaneGeometry(0.3, 0.2);
            const flagMaterial = new THREE.MeshStandardMaterial({
                color: Math.random() * 0xffffff, // Random color
                side: THREE.DoubleSide,
                roughness: 0.5,
                metalness: 0.1
            });
            const flag = new THREE.Mesh(flagGeometry, flagMaterial);
            flag.position.set(0.15, 0.2, 0); // Position relative to pole
            
            // Add text with topic name
            this.addTextToFlag(flag, topic.name);
            
            // Store topic data with the flag
            flag.userData.topic = topic;
            
            // Add flag to pole
            pole.add(flag);
            
            // Add to scene
            this.scene.add(pole);
            
            // Add to clickable objects list
            this.clickableFlags.push(flag);
            
            return pole;
        } catch (error) {
            console.error('Error creating topic flag:', error);
            return null;
        }
    }

    addTextToFlag(flag, text) {
        // Create a canvas for the text
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        
        // Clear canvas with flag background color
        context.fillStyle = '#' + flag.material.color.getHexString();
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text
        context.font = 'bold 16px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = this.getContrastColor(flag.material.color.getHexString());
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        
        // Create texture from canvas
        const texture = new THREE.CanvasTexture(canvas);
        
        // Apply to flag material
        flag.material.map = texture;
        flag.material.needsUpdate = true;
    }

    getContrastColor(hexColor) {
        // Convert hex to RGB
        const r = parseInt(hexColor.substr(0,2), 16);
        const g = parseInt(hexColor.substr(2,2), 16);
        const b = parseInt(hexColor.substr(4,2), 16);
        
        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Return black or white based on luminance
        return luminance > 0.5 ? '#000000' : '#ffffff';
    }
}

export default Scene3D; 