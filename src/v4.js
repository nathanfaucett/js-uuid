var isString = require("@nathanfaucett/is_string"),
    getRandomBytes = require("@nathanfaucett/get_random_bytes"),
    toString = require("./toString"),
    emptyObject = require("./emptyObject");


module.exports = v4;


function v4(options, buffer, offset) {
    var random, i;

    offset = buffer && offset || 0;

    if (isString(options)) {
        buffer = (options === "binary") ? new Buffer(16) : null;
        options = null;
    }
    options = options || emptyObject;

    random = options.random || (options.getRandomBytes || getRandomBytes)(16);
    random[6] = (random[6] & 0x0f) | 0x40;
    random[8] = (random[8] & 0x3f) | 0x80;

    if (buffer) {
        i = -1;
        while (i++ < 15) {
            buffer[offset + i] = random[i];
        }
    }

    return buffer || toString(random);
}
