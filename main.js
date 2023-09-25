const start = () => {
    resizeCanvas();
}

const update = () => {
    requestAnimationFrame(update);
}

start();
update();