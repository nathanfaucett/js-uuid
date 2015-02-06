var assert = require("assert"),
    uuid = require("../src/index");


describe("uuid()", function() {
    it("should return a uuid", function() {
        var id = uuid();

        assert.equal(id.length, 37);
        assert.equal(typeof(id), "string");
    });
});
