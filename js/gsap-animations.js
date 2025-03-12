import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';

// Example animation for a 3D object
function animateObject(object) {
    gsap.to(object.rotation, {
        x: Math.PI * 2,
        duration: 2,
        repeat: -1,
        ease: "power1.inOut"
    });
}

// Example animation for fading in an element
function fadeInElement(element) {
    gsap.fromTo(element, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }
    );
}

// Example animation for moving an element
function moveElement(element, targetPosition) {
    gsap.to(element.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1,
        ease: "power2.out"
    });
}

const element = document.getElementById('3d-container');
gsap.to("#3d-container", { duration: 2, x: 100 });

// Exporting functions for use in other modules
export { animateObject, fadeInElement, moveElement };

// Your existing code using gsap
gsap.to("#3d-container", { duration: 2, x: 100 });