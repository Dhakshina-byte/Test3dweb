import * as BABYLON from 'https://cdn.babylonjs.com/babylon.esm.js';

// Your existing code using BABYLON
const canvas = document.getElementById('3d-container');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

const createScene = function () {
    
    // Create a camera
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    
    // Create a light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    
    // Create a simple sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
    
    return scene;
};

createScene();

engine.runRenderLoop(function () {
    scene.render();
});

// Resize the engine on window resize
window.addEventListener('resize', function () {
    engine.resize();
});