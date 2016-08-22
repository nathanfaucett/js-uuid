var hexToByte = require("./hexToByte");


var reByte = /[0-9a-f]{2}/g;


module.exports = parse;


function parse(string, buffer, offset) {
    var i;

    offset = buffer ? (offset || 0) : 0;
    i = offset;

    buffer = buffer || [];
    string.toLowerCase().replace(reByte, function(oct) {
        if (i < 16) {
            buffer[offset + i++] = hexToByte[oct];
        }
    });

    while (i < 16) {
        buffer[offset + i++] = 0;
    }

    return buffer;
}
