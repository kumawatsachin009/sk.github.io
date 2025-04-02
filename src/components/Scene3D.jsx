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
        this.particles = null;
        
        this.init();
    }

    init() {
        try {
            // Setup renderer
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.shadowMap.enabled = true;
            this.container.appendChild(this.renderer.domElement);

            // Setup camera
            this.camera.position.z = 5;

            // Add lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            this.scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5);
            directionalLight.castShadow = true;
            this.scene.add(directionalLight);

            // Add point lights for better atmosphere
            const pointLight1 = new THREE.PointLight(0x00ff00, 1, 100);
            pointLight1.position.set(-5, -5, -5);
            this.scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100);
            pointLight2.position.set(5, 5, -5);
            this.scene.add(pointLight2);

            // Add controls
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.minDistance = 3;
            this.controls.maxDistance = 10;

            // Create particle system
            this.createParticles();

            // Load 3D model
            this.loadModel();

            // Start animation loop
            this.animate();

            // Handle window resize
            window.addEventListener('resize', this.onWindowResize.bind(this));
        } catch (error) {
            console.error('Error initializing Scene3D:', error);
        }
    }

    createParticles() {
        try {
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 1000;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.005,
                color: '#ffffff',
                transparent: true,
                opacity: 0.8
            });

            this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
            this.scene.add(this.particles);
        } catch (error) {
            console.error('Error creating particles:', error);
        }
    }

    loadModel() {
        const loader = new GLTFLoader();
        const modelPath = './assets/models/astronaut.glb';
        
        console.log('Loading model from:', modelPath);
        
        loader.load(
            modelPath,
            (gltf) => {
                try {
                    this.model = gltf.scene;
                    this.scene.add(this.model);
                    
                    // Enable shadows for the model
                    this.model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    
                    // Center and scale the model
                    const box = new THREE.Box3().setFromObject(this.model);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const scale = 2 / maxDim;
                    this.model.scale.setScalar(scale);
                    
                    this.model.position.sub(center.multiplyScalar(scale));

                    // Add entrance animation
                    gsap.from(this.model.position, {
                        y: -2,
                        duration: 1.5,
                        ease: "power2.out"
                    });

                    // Add floating animation
                    gsap.to(this.model.position, {
                        y: this.model.position.y + 0.1,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut"
                    });

                    console.log('Model loaded successfully');
                } catch (error) {
                    console.error('Error processing loaded model:', error);
                }
            },
            (progress) => {
                const percent = (progress.loaded / progress.total * 100).toFixed(2);
                console.log(`Loading model... ${percent}%`);
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        try {
            if (this.model) {
                // Add subtle rotation animation
                this.model.rotation.y += 0.003;
            }

            if (this.particles) {
                // Rotate particles
                this.particles.rotation.y += 0.0005;
            }
            
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        } catch (error) {
            console.error('Error in animation loop:', error);
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
}

export default Scene3D; 