"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
console.log("동기식 api");
var buffer = (0, fs_1.readFileSync)('./package.json');
console.log(buffer.toString());
//# sourceMappingURL=index.js.map