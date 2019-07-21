// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_webgl.core');
goog.require('cljs.core');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.constants.draw_mode');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.shader');
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.typed_arrays');
cljs_webgl.core.w = window.innerWidth;
cljs_webgl.core.h = window.innerHeight;
cljs_webgl.core.vertex_shader_source = "attribute vec3 vertex_position;\n   void main() {\n     gl_Position = vec4(vertex_position, 1);\n   }";
cljs_webgl.core.fragment_shader_source = "precision mediump float;\n   uniform int frame;\n   uniform float w;\n   uniform float h;\n   void main() {\n     vec3 pos = gl_FragCoord.xyz;\n     float f = float(frame);\n     f = mod(f, 100.0) * 0.05;\n     float xf = pos.x / w;\n     float a = fract(xf * 10.0);\n     gl_FragColor.r = a;\n     gl_FragColor.g = a / f;\n     gl_FragColor.b = a * f;\n     gl_FragColor.a = 1.0;\n   }";
cljs_webgl.core.start = (function cljs_webgl$core$start(){
var canvas = document.getElementById("canvas");
var gl = cljs_webgl.context.get_context.call(null,canvas);
var shader = cljs_webgl.shaders.create_program.call(null,gl,cljs_webgl.shaders.create_shader.call(null,gl,cljs_webgl.constants.shader.vertex_shader,cljs_webgl.core.vertex_shader_source),cljs_webgl.shaders.create_shader.call(null,gl,cljs_webgl.constants.shader.fragment_shader,cljs_webgl.core.fragment_shader_source));
var vertex_buffer = cljs_webgl.buffers.create_buffer.call(null,gl,cljs_webgl.typed_arrays.float32.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,0.0,-1.0,1.0,0.0,1.0,-1.0,0.0,-1.0,-1.0,0.0], null)),cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw);
var element_buffer = cljs_webgl.buffers.create_buffer.call(null,gl,cljs_webgl.typed_arrays.unsigned_int16.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(2),(1),(3)], null)),cljs_webgl.constants.buffer_object.element_array_buffer,cljs_webgl.constants.buffer_object.static_draw);
var draw = ((function (canvas,gl,shader,vertex_buffer,element_buffer){
return (function (frame,continue$){
cljs_webgl.buffers.draw_BANG_.call(null,cljs_webgl.buffers.clear_color_buffer.call(null,gl,(0),(0),(0),(1)),new cljs.core.Keyword(null,"shader","shader",1492833021),shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),(6),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location.call(null,gl,shader,"vertex_position"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),(3),new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"frame",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.int32.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.core.w], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.core.h], null))], null)], null),new cljs.core.Keyword(null,"element-array","element-array",38145164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),element_buffer,new cljs.core.Keyword(null,"count","count",2139924085),(6),new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.unsigned_short,new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));

return window.requestAnimationFrame(((function (canvas,gl,shader,vertex_buffer,element_buffer){
return (function (time_elapsed){
return continue$.call(null,(frame + (1)),continue$);
});})(canvas,gl,shader,vertex_buffer,element_buffer))
);
});})(canvas,gl,shader,vertex_buffer,element_buffer))
;
canvas.width = cljs_webgl.core.w;

canvas.height = cljs_webgl.core.h;

return window.requestAnimationFrame(((function (canvas,gl,shader,vertex_buffer,element_buffer,draw){
return (function (time_elapsed){
return draw.call(null,(0),draw);
});})(canvas,gl,shader,vertex_buffer,element_buffer,draw))
);
});
cljs_webgl.core.start.call(null);

//# sourceMappingURL=core.js.map
