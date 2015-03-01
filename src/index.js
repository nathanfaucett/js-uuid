var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    UUID = new Array(36);


module.exports = function uuid() {
    var i = -1;

    while (i++ < 36) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            UUID[i] = "-";
        } else if (i === 14) {
            UUID[i] = "4";
        } else {
            UUID[i] = CHARS[(Math.random() * 62) | 0];
        }
    }

    return UUID.join("");
};
