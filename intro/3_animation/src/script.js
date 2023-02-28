import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
    width: 800,
    height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);

// Axis Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Objects
const group = new THREE.Group();
group.rotation.y = 0.2;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3);

gsap.to(group.position, { duration: 1, delay: 1, x: 2 });

let time = Date.now();
const clock = new THREE.Clock();

const tick = () => {
    // Time
    const elapsedTime = clock.getElapsedTime() * 2;

    // Update objects
    group.rotation.y = elapsedTime;
    group.position.x = Math.cos(elapsedTime) * 2;
    group.position.y = Math.sin(elapsedTime) * 2;
    camera.lookAt(group.position);

    // Render
    renderer.render(scene, camera);

    // Call the tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
