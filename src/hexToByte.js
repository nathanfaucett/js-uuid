var byteToHex = require("./byteToHex");


var hexToByte = exports,
    i, il;


for (i = 0, il = 256; i < il; i++) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
    hexToByte[byteToHex[i]] = i;
}
