var byteToHex = require("./byteToHex");


module.exports = toString;


function toString(buffer, offset) {
    var i = offset || 0,
        localByteToHex = byteToHex;

    return (
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] + '-' +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] + '-' +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] + '-' +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] + '-' +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]] +
        localByteToHex[buffer[i++]] + localByteToHex[buffer[i++]]
    );
}
