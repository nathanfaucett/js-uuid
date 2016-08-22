var md5 = require("@nathanfaucett/md5"),
    toString = require("./toString");


var md5Options = {
    asBytes: true
};


module.exports = v3;


function v3(domain /*, options */ ) {
    return toString(md5(domain, md5Options));
}
