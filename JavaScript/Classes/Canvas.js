class Canvas {
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        
        this.canvas.width = width;
        this.canvas.height = height;

        document.body.appendChild(this.canvas);
    }

    resizeCanvas(width = window.innerWidth, height = window.innerHeight) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}