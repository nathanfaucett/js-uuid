var sha1 = require("@nathanfaucett/sha1"),
    toString = require("./toString");


var sha1Options = {
    asBytes: true
};


module.exports = v5;


function v5(domain /*, options */ ) {
    return toString(sha1(domain, sha1Options));
}
