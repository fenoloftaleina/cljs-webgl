// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_webgl.build_fixer');
goog.require('cljs.core');
cljs_webgl.build_fixer.go = (function cljs_webgl$build_fixer$go(){
var main_js_filepath = "resources/public/cljs-out/dev-main.js";
return cljs_webgl.build_fixer.spit.call(null,main_js_filepath,clojure.string.replace.call(null,cljs_webgl.build_fixer.slurp.call(null,main_js_filepath),/\\/cljs-out/,"cljs-out"));
});

//# sourceMappingURL=build_fixer.js.map
