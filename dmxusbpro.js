module.exports = function(RED) {
    "use strict";

    var DMX = require('./dmxusbpro_driver.js');

    function DMXout(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.port = n.port || "COM3";
        this.DMX_offset = n.DMX_offset || 0;
        var current_universe_buffer = new Buffer(512);
        console.log("this in DMXout: " + JSON.stringify(this));
        var current_universe =  [];
        for (var i = 0; i<512; i++){
            current_universe[i] = 0;
        }
        current_universe_buffer = Buffer(current_universe);
        var dmx_usb_pro = new DMX(this.port, current_universe_buffer);
        this.on("input",function(msg) {
            current_universe = msg.payload;
            dmx_usb_pro.update(current_universe, this.DMX_offset);
            node.send(current_universe);               
        });
        this.on('close', function(done) {
            dmx_usb_pro.close(function (err) {
                console.log('dmxusbpro closed', err);
                done();
            });
        });
    }
    RED.nodes.registerType("dmxusbpro",DMXout);
}