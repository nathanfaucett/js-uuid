var seedBytes = require("./seedBytes");


module.exports = [
    seedBytes[0] | 0x01,
    seedBytes[1],
    seedBytes[2],
    seedBytes[3],
    seedBytes[4],
    seedBytes[5]
];
