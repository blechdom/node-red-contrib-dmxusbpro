module.exports = function(RED) {
    function DMXUSBPRONode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
        	switch(msg.payload) {
    			case "update":
        			msg.payload = "dmxusbpro will update";
        			break;
			    case "updateAll":
			        msg.payload = "dmxusbpro will updateAll";
			        break;
			    default:
			        msg.payload = "dmxusbpro does not understand: " + msg.payload;
			}
            node.send(msg);
        });
    }
    RED.nodes.registerType("dmxusbpro", DMXUSBPRONode);
}