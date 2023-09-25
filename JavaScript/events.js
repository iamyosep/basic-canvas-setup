const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const updateMousePosition = (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    
    mouse.isPressed = event.buttons === 1;
};

keyboard.addHandler(" ", () => console.log("Space is pressed"), { down: true });
keyboard.addHandler(32, () => console.log("Space is released"), { up: true, keyCode: true });

window.addEventListener("mouseup", () => mouse.isPressed = false);
window.addEventListener("mousedown", () => mouse.isPressed = true);
window.addEventListener("mousemove", updateMousePosition);

window.addEventListener("resize", resizeCanvas);