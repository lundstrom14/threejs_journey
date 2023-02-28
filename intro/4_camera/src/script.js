import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);

// Axis Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Objects
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube.position.z = 0;
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(
    90,
    sizes.width / sizes.height,
    1,
    100
);
camera.position.z = 10;
camera.lookAt(cube.position);
scene.add(camera);

// Cursor
const cursor = {
    x: 0,
    y: 0,
};

window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = -(event.clientY / sizes.height - 0.5);
});

window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const tick = () => {
    // Update render
    //camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
    //camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
    //camera.position.y = cursor.y * 3;
    //camera.lookAt(cube.position);

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call the tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
