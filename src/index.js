var v1 = require("./v1"),
    v3 = require("./v3"),
    v4 = require("./v4"),
    v5 = require("./v5");


var V1 = 1,
    V2 = 2,
    V3 = 3,
    V4 = 4,
    V5 = 5;


module.exports = uuid;


uuid.V1 = V1;
uuid.V2 = V2;
uuid.V3 = V3;
uuid.V4 = V4;
uuid.V5 = V5;


function uuid(type, options, buffer, offset) {
    var domain;

    switch (type) {
        case V3:
            domain = options;
            options = buffer;
            return v3(domain, options);
        case V4:
            return v4(options, buffer, offset);
        case V5:
            domain = options;
            options = buffer;
            return v5(domain, options);
        default:
            return v1(options, buffer, offset);
    }
}


uuid.v1 = v1;
uuid.v2 = v1;
uuid.v3 = v3;
uuid.v4 = v4;
uuid.v5 = v5;

uuid.toString = require("./toString");
uuid.parse = require("./parse");
