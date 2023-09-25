const start = () => {
    resizeCanvas();
}

const update = () => {
    requestAnimationFrame(update);
    console.log(keys);
}

start();
update();