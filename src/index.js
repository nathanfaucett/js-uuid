var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    UUID_ARRAY = new Array(36);


module.exports = uuid;


function uuid() {
    var localRandom = Math.random,
        localArray = UUID_ARRAY,
        localChars = CHARS,
        i = -1;

    while (i++ < 36) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            localArray[i] = "-";
        } else if (i === 14) {
            localArray[i] = "4";
        } else {
            localArray[i] = localChars[(localRandom() * 62) | 0];
        }
    }

    return localArray.join("");
}
