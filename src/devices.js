const SerialPort = require("serialport");
const SerialPortParser = require("@serialport/parser-readline");
const GPS = require("gps");

const port = new SerialPort("/dev/ttyS0", { baudRate: 9600 });
const parser = port.pipe(new SerialPortParser());

const raspberry = {
        port,
        parser,
}

const gps = new GPS();

module.exports = {
        raspberry,
        gps,
}

