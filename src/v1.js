var now = require("@nathanfaucett/now"),
    isNullOrUndefinded = require("@nathanfaucett/is_null_or_undefined"),
    NativeUint8Array = require("./NativeUint8Array"),
    nodeId = require("./nodeId"),
    emptyObject = require("./emptyObject"),
    seedBytes = require("./seedBytes"),
    toString = require("./toString");


var CLOCKSEQ = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff,
    LAST_MSECS = 0,
    LAST_NSECS = 0;


module.exports = v1;


function v1(options, buffer, offset) {
    var b = buffer || new NativeUint8Array(16),
        clockseq, msecs, nsecs, dt, tl, tmh, node, n;

    i = buffer && offset || 0;
    options = options || emptyObject;

    clockseq = isNullOrUndefinded(options.clockseq) ? CLOCKSEQ : options.clockseq;
    msecs = isNullOrUndefinded(options.msecs) ? now.stamp() : options.msecs;
    nsecs = isNullOrUndefinded(options.nsecs) ? LAST_NSECS + 1 : options.nsecs;
    dt = (msecs - LAST_MSECS) + (nsecs - LAST_NSECS) / 10000;

    if (dt < 0 && isNullOrUndefinded(options.clockseq)) {
        clockseq = clockseq + 1 & 0x3fff;
    }
    if ((dt < 0 || msecs > LAST_MSECS) && isNullOrUndefinded(options.nsecs)) {
        nsecs = 0;
    }
    if (nsecs >= 10000) {
        throw new Error("v1([options [, buffer [, offset]]]): Can't create more than 10M uuids/sec");
    }

    LAST_MSECS = msecs;
    LAST_NSECS = nsecs;
    CLOCKSEQ = clockseq;

    // Convert from unix epoch to gregorian epoch
    msecs += 12219292800000;

    tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    b[i++] = clockseq >>> 8 | 0x80;
    b[i++] = clockseq & 0xff;

    node = options.node || nodeId;
    n = -1;
    while (n++ < 5) {
        b[i + n] = node[n];
    }

    return buffer ? buffer : toString(b);
}
