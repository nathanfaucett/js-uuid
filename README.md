uuid
=======

uuid for the browser and node.js

```javascript
var uuid = require("@nathanfaucett/uuid");


var v1_uuid = uuid(uuid.V1, {
    node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
    clockseq: 0x1234,
    msecs: new Date("1970-0-01").getTime(),
    nsecs: 0
});

var v3_uuid = uuid(uuid.V3, "nathanfaucett@gmail.com");

var v4_uuid = uuid(uuid.V4, {
    random: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
});

var v5_uuid = uuid(uuid.V5, "nathanfaucett@gmail.com");

var bytes = uuid.parse(uuid(uuid.V5, "nathanfaucett@gmail.com"));
```
