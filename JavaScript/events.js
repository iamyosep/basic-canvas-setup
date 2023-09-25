const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const updateMousePosition = (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    
    mouse.isPressed = event.buttons === 1;
};

window.addEventListener("keyup", (event) => keys[event.key] = false);
window.addEventListener("keydown", (event) => keys[event.key] = true);

window.addEventListener("mouseup", () => mouse.isPressed = false);
window.addEventListener("mousedown", () => mouse.isPressed = true);
window.addEventListener("mousemove", updateMousePosition);

window.addEventListener("resize", resizeCanvas);