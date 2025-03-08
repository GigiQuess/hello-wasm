const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true, // 非同期WebAssemblyを有効にする
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async", // .wasmファイルをWebAssemblyとして扱う
      },
    ],
  },
};
