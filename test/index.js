var tape = require("tape"),
    uuid = require("..");


tape("uuid(uuid.V1) or uuid.v1() should return a v1 uuid", function(assert) {
    var v1_uuid = uuid(uuid.V1, {
        node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
        clockseq: 0x1234,
        msecs: new Date("1970-0-01").getTime(),
        nsecs: 0
    });

    assert.equal(v1_uuid.length, 36);
    assert.equal(v1_uuid, "00000000-0000-1000-9234-0123456789ab");
    assert.equal(typeof(v1_uuid), "string");

    assert.end();
});

tape("uuid(uuid.V3) or uuid.v3() should return a v3 uuid", function(assert) {
    var v3_uuid = uuid(uuid.V3, "nathanfaucett@gmail.com");

    assert.equal(v3_uuid.length, 36);
    assert.equal(v3_uuid, "02f4e012-f7f0-b674-490d-d85a779c0ef8");
    assert.equal(typeof(v3_uuid), "string");

    assert.end();
});

tape("uuid(uuid.V4) or uuid.v4() should return a v4 uuid", function(assert) {
    var v4_uuid = uuid(uuid.V4, {
        random: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    });

    assert.equal(v4_uuid.length, 36);
    assert.equal(v4_uuid, "01020304-0506-4708-890a-0b0c0d0e0f10");
    assert.equal(typeof(v4_uuid), "string");

    assert.end();
});

tape("uuid(uuid.V5) or uuid.v5() should return a v5 uuid", function(assert) {
    var v5_uuid = uuid(uuid.V5, "nathanfaucett@gmail.com");

    assert.equal(v5_uuid.length, 36);
    assert.equal(v5_uuid, "b92291c9-8ccd-ff52-da0c-a035f2086e45");
    assert.equal(typeof(v5_uuid), "string");

    assert.end();
});

tape("parse(string) should return a v5 uuid as a array", function(assert) {
    var bytes = uuid.parse(uuid(uuid.V5, "nathanfaucett@gmail.com"));

    assert.equal(bytes.length, 16);
    assert.deepEqual(bytes, [185, 34, 145, 201, 140, 205, 255, 82, 218, 12, 160, 53, 242, 8, 110, 69]);

    assert.end();
});
