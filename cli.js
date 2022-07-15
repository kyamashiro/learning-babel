const babel = require("@babel/core");
const fs = require("fs");

const filename = "index.js";
const source = fs.readFileSync(filename, "utf8");
console.log("source code")
console.log("===========================")
console.log(source)
console.log("===========================\n")

// トランスパイル
const {ast, code, map} = babel.transformSync(source, {
    filename,
    ast: true,
    code: true,
    presets: ["minify"],
    sourceType: "module",
    sourceMap: true,
});
console.log("ast")
console.log("===========================")
console.log(JSON.stringify(ast))
console.log("===========================\n")
console.log("transpiled code")
console.log("===========================")
console.log(code)
console.log("===========================\n")
console.log("source map")
console.log("===========================")
console.log(map)