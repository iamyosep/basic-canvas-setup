/* Keyboard */
keyboard.addHandler(" ", () => console.log("Space is pressed"), { down: true });
keyboard.addHandler(32, () => console.log("Space is released"), { up: true, keyCode: true });

/* Mouse */
mouse.addHandler(Mouse.buttonAtlas.left, () => console.log("Left mouse button is pressed"), { down: true });
mouse.addHandler(2, () => console.log("Right mouse button is released"), { up: true });

/* Canvas */
window.addEventListener("resize", () => canvas.resizeCanvas());