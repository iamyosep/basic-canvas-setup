class Keyboard {
    constructor() {
        this.keys = {};

        this.keyDownHandlers = {};
        this.keyUpHandlers = {};

        window.addEventListener("keydown", this.#handleKeyDown.bind(this));
        window.addEventListener("keyup", this.#handleKeyUp.bind(this));
    }

    addHandler(key, handler, opts) {
        let value = key;
        if (opts?.keyCode && typeof key === "number") value = this.#getAlphabetFromKeyCode(key);
        if (opts?.down) this.keyDownHandlers[value] = handler;
        if (opts?.up) this.keyUpHandlers[value] = handler;
    }

    removeHandler(key, opts) {
        let value = key;
        if (opts?.keyCode && typeof key === "number") value = this.#getAlphabetFromKeyCode(key);
        if (opts?.down) delete this.keyDownHandlers[value];
        if (opts?.up) delete this.keyUpHandlers[value];
    }

    isKeyDown(key, opts) {
        let value = key;
        if (opts?.keyCode && typeof key === "number") value = this.#getAlphabetFromKeyCode(key);
        return this.keys[value];
    }

    #getAlphabetFromKeyCode(keyCode) {
        return String.fromCharCode(keyCode);
    }

    #handleKeyDown(event) {
        this.keys[event.key] = true;
        this.keyDownHandlers[event.key]?.();
    }

    #handleKeyUp(event) {
        this.keys[event.key] = false;
        this.keyUpHandlers[event.key]?.();
    }
}