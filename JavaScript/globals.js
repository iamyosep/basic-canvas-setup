const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const mouse = {
    x: undefined,
    y: undefined,
    isPressed: false
}

const keys = {};