# node-red-contrib-dmxusbpro

A simple [Node-Red](http://nodered.org) driver for Enntec DMX USB PRO.

## Pre-requisites

Requires [Node-Red](http://nodered.org)

## Installation

    $ npm i --save node-red-contrib-dmxusbpro

## Description

 	* Sends DMX data through the Enntec DMXUSBPRO device
    * Adapted and simplified from the existing [node-dmx package](https://www.npmjs.com/package/dmx) requires node-serialport module (has a lot more functionality than included here)
    * node-red-contrib-dmxusbpro node takes an array of ints (0-255) as input.
    * node-red-contrib-dmxusbpro requires the serialport node library. Similarly, the serialport needs to be assigned, COM3, COM4, or /dev/ttyS0, etc
    * The DMX starting address is assignable in the object. This shifts where the preset array is stored in the Universe buffer.
    * Checkout the example Flow called "DMX Presets with MongoDB2 and DMXUSBPRO node"
