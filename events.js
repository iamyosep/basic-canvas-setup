const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const updateMousePosition = (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    
    mouse.isPressed = event.buttons === 1;
};

window.addEventListener("mousemove", updateMousePosition);
window.addEventListener("resize", resizeCanvas);