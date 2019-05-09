import multi from "rollup-plugin-multi-entry";
import baseConfig from "./rollup.config";
import sourcemaps from "rollup-plugin-sourcemaps";
import json from "rollup-plugin-json";
const [browser] = baseConfig;

browser.input = ["dist-esm/test/*.js", "dist-esm/test/browser/*.js"];
browser.output.sourcemap = "inline";
browser.output.file = "dist-test/index.browser.js";
browser.plugins.unshift(multi());
browser.plugins.unshift(sourcemaps());
browser.plugins.unshift(json());
browser.context = "null";

export default [browser];