# Canvas Template

This repository provides an easy starting point for quickly prototyping ideas for Canvas-based applications.
This is a template, but it contains a variety of functionalities including a feature to easily handle keyboard as well as mouse interactions. 


## Installing the repository
You only need to clone the repository and switch into the directory
```
git clone https://github.com/YousifW/basic-canvas-setup.git
```
```
cd basic-canvas-setup
```

## event.js
All events are registered within the ``event.js`` file.
This includes the functionality and the actual binding process.
This includes native, user-defined or even self-created EventListeners.

## Keyboard.js
The ``Keyboard.js`` class contains the desired core functionality to recognize simple interactions. 
The following functions of the class are available for this purpose:
- ``addHandler(key, handler, opts)``: Creates and binds a handler for a given key
- ``removeHandler(key, opts)``: Detaches the handler specified for a particular key
- ``isKeyDown(key, opts)``: Returns whether the queried key is currently pressed

## Mouse.js
The ``Mouse.js`` class is similar to the aforementioned Keyboard class.
The user can create listeners for all mouse buttons. An atlas is also provided for the common mouse buttons.
The following functions of the class are available for this purpose:
- ``addHandler(button, handler, opts)``: Creates and binds a handler for a given mouse button
- ``removeHandler(button, opts)``: Detaches the handler specified for a particular mouse button
- ``isPressed(button)``: Returns whether the queried button is currently pressed
- ``getPosition()``: Returns the current x and y coordinates of the mouse