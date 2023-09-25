class Mouse {
    static buttonAtlas = {
        "left": 0,
        "middle": 1,
        "right": 2,
        "back": 3,
        "forward": 4
    }

    constructor(radius = 0) {
        this.x = 0;
        this.y = 0;
        this.radius = 0;

        this.buttons = {}
        
        this.buttonDownHandlers = {};
        this.buttonUpHandlers = {};

        window.addEventListener("mousedown", this.#handleMouseDown.bind(this));
        window.addEventListener("mouseup", this.#handleMouseUp.bind(this));
        window.addEventListener("mousemove", this.#handleMouseMove.bind(this));
    }

    addHandler(button, handler, opts) {
        if (opts?.down) this.buttonDownHandlers[button] = handler;
        if (opts?.up) this.buttonUpHandlers[button] = handler;
    }

    removeHandler(button, opts) {
        if (opts?.down) delete this.buttonDownHandlers[button];
        if (opts?.up) delete this.buttonUpHandlers[button];
    }

    isPressed(button) {
        return this.buttons[button];
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    #handleMouseMove(event) {
        this.x = event.clientX;
        this.y = event.clientY;
    }

    #handleMouseDown(event) {
        this.buttons[event.button] = true;
        this.buttonDownHandlers[event.button]?.();
    }

    #handleMouseUp(event) {
        this.buttons[event.button] = false;
        this.buttonUpHandlers[event.button]?.();
    }
}