# BABEL

https://babeljs.io/docs/en/usage

JSをJSに変換してくれる(トランスパイル)。  
新しい記法で書かれたJSファイルを古い記法に変換して互換性のないブラウザにも対応するようにしてくれる。  
https://github.com/sebmck/babel#intro  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator  

## 使用方法

```
$ npm i

$ npx babel index.js
"use strict";

const test = true;
console.log(test !== null && test !== void 0 ? test : 'false');
```

## ビルド

```shell
$ npx babel index.js --out-dir dist/ --source-maps

Successfully compiled 1 file with Babel (207ms).
```

`dist/index.js`が変換後のファイル。ソースマップを有効にすると`index.js.map`ファイルも生成される。

## CLIでの動作

```shell
$ node cli.js

source code
===========================
const foo = "str";
const bar = foo ?? 'null';

const arr = [];
arr.filter(val => val)
===========================

ast
===========================
{"type":"File","start":0,"end":85,"loc":{"start":{"line":1,"column":0,"index":0},"end":{"line":5,"column":22,"index":85}},"errors":[],"program":{"type":"Program","start":0,"end":85,"loc":{"start":{"line":1,"column":0,"index":0},"end":{"line":5,"column":22,"index":85}},"sourceType":"script","interpreter":null,"body":[{"type":"ExpressionStatement","expression":{"type":"SequenceExpression","expressions":[{"type":"CallExpression","callee":{"type":"Identifier","name":"require"},"arguments":[{"type":"StringLiteral","value":"core-js/modules/es.array.filter.js"}]},{"type":"CallExpression","callee":{"type":"Identifier","name":"require"},"arguments":[{"type":"StringLiteral","value":"core-js/modules/es.object.to-string.js"}]}]}},{"type":"VariableDeclaration","kind":"var","declarations":[{"type":"VariableDeclarator","start":6,"end":17,"loc":{"start":{"line":1,"column":6,"index":6},"end":{"line":1,"column":17,"index":17}},"id":{"type":"Identifier","start":6,"end":9,"loc":{"start":{"line":1,"column":6,"index":6},"end":{"line":1,"column":9,"index":9},"identifierName":"foo"},"name":"foo"},"init":{"type":"StringLiteral","start":12,"end":17,"loc":{"start":{"line":1,"column":12,"index":12},"end":{"line":1,"column":17,"index":17}},"extra":{"rawValue":"str","raw":"\"str\""},"value":"str"}},{"type":"VariableDeclarator","start":25,"end":44,"loc":{"start":{"line":2,"column":6,"index":25},"end":{"line":2,"column":25,"index":44}},"id":{"type":"Identifier","start":25,"end":28,"loc":{"start":{"line":2,"column":6,"index":25},"end":{"line":2,"column":9,"index":28},"identifierName":"bar"},"name":"bar"},"init":{"type":"StringLiteral","value":"str","trailingComments":[],"leadingComments":[],"innerComments":[]}},{"type":"VariableDeclarator","start":53,"end":61,"loc":{"start":{"line":4,"column":6,"index":53},"end":{"line":4,"column":14,"index":61}},"id":{"type":"Identifier","start":53,"end":56,"loc":{"start":{"line":4,"column":6,"index":53},"end":{"line":4,"column":9,"index":56},"identifierName":"arr"},"name":"arr"},"init":{"type":"ArrayExpression","start":59,"end":61,"loc":{"start":{"line":4,"column":12,"index":59},"end":{"line":4,"column":14,"index":61}},"elements":[]}}],"trailingComments":[],"leadingComments":[],"innerComments":[]},{"type":"ExpressionStatement","expression":{"type":"CallExpression","start":63,"end":85,"loc":{"start":{"line":5,"column":0,"index":63},"end":{"line":5,"column":22,"index":85}},"callee":{"type":"MemberExpression","start":63,"end":73,"loc":{"start":{"line":5,"column":0,"index":63},"end":{"line":5,"column":10,"index":73}},"object":{"type":"Identifier","start":63,"end":66,"loc":{"start":{"line":5,"column":0,"index":63},"end":{"line":5,"column":3,"index":66},"identifierName":"arr"},"name":"arr"},"computed":false,"property":{"type":"Identifier","start":67,"end":73,"loc":{"start":{"line":5,"column":4,"index":67},"end":{"line":5,"column":10,"index":73},"identifierName":"filter"},"name":"filter"}},"arguments":[{"type":"FunctionExpression","start":74,"end":84,"loc":{"start":{"line":5,"column":11,"index":74},"end":{"line":5,"column":21,"index":84}},"id":null,"generator":false,"async":false,"params":[{"type":"Identifier","start":74,"end":77,"loc":{"start":{"line":5,"column":11,"index":74},"end":{"line":5,"column":14,"index":77},"identifierName":"val"},"name":"a"}],"body":{"type":"BlockStatement","body":[{"type":"ReturnStatement","argument":{"type":"Identifier","start":81,"end":84,"loc":{"start":{"line":5,"column":18,"index":81},"end":{"line":5,"column":21,"index":84},"identifierName":"val"},"name":"a"}}],"directives":[]}}],"leadingComments":[]}}],"directives":[{"type":"Directive","value":{"type":"DirectiveLiteral","value":"use strict"}}]},"comments":[]}
===========================

transpiled code
===========================
"use strict";require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js");var foo="str",bar="str",arr=[];arr.filter(function(a){return a});
===========================

source map
===========================
{
  version: 3,
  file: undefined,
  names: [ 'foo', 'bar', 'arr', 'filter', 'val' ],
  sourceRoot: undefined,
  sources: [ 'index.js' ],
  sourcesContent: [
    'const foo = "str";\n' +
      "const bar = foo ?? 'null';\n" +
      '\n' +
      'const arr = [];\n' +
      'arr.filter(val => val)'
  ],
  mappings: 'gHAAMA,IAAG,CAAG,K,CACNC,GAAG,M,CAEHC,GAAG,CAAG,E,CACZA,GAAG,CAACC,MAAJ,CAAW,SAAAC,CAAG,QAAIA,EAAJ,CAAd,C'
}
```

ブラウザで動かすために
`"useBuiltIns": "usage"`を無効にしている  
https://babeljs.io/docs/en/babel-polyfill#details
