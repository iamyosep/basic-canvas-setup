# Basic Canvas Setup README

This repository provides an easy starting point for quickly prototyping ideas for Canvas-based applications.
This is a template, but it contains a variety of functionalities including a feature to easily handle keyboard as well as mouse interactions. 


## Installing the repository
You only need to clone the repository and switch into the directory
```
git clone https://github.com/YousifW/basic-canvas-setup.git
cd basic-canvas-setup
```

## Keyboard.js & event.js
All events are registered within the ``event.js`` file.
This includes the functionality and the actual binding process.

Some functionalities are already available, such as the updating of the position of the mouse and its actions, 
as well as the recalculation of the width and height of the canvas.

The ``Keyboard.js`` class contains the desired core functionality to recognize simple interactions. 
These are registered in ``event.js``, as discussed earlier. 
The following functions of the class are available for this purpose:
- ``addHandler(key, handler, opts)``: ECreates and binds a handler for a given key
- ``removeHandler(key, opts)``: Detaches the handler specified for a particular key
- ``isKeyDown(key, opts)``: Returns whether the queried key is currently pressed