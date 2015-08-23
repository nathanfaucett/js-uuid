var tape = require("tape"),
    uuid = require("..");


tape("uuid() should return a uuid", function(assert) {
    var id = uuid();

    assert.equal(id.length, 37);
    assert.equal(typeof(id), "string");

    assert.end();
});
