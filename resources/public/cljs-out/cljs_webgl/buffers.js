// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_webgl.buffers');
goog.require('cljs.core');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants.capability');
goog.require('cljs_webgl.constants.clear_buffer_mask');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.texture_target');
goog.require('cljs_webgl.constants.texture_unit');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
/**
 * Creates a new buffer with initialized `data`.
 * 
 *   `data` must be a typed-array
 * 
 *   `target` may be `cljs-webgl.constants.buffer-object/array-buffer` or `cljs-webgl.constants.buffer-object/element-array-buffer`
 * 
 *   `usage` may be `cljs-webgl.constants.buffer-object/static-draw` or `cljs-webgl.constants.buffer-object/dynamic-draw`
 * 
 *   `item-size` [optional] will set the item size as an attribute on the buffer, and the calculate the number of items accordingly.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGenBuffers(Similar to createBuffer)](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGenBuffers.xml)
 *   * [glBindBuffer](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBindBuffer.xml)
 *   * [glBufferData](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBufferData.xml)
 */
cljs_webgl.buffers.create_buffer = (function cljs_webgl$buffers$create_buffer(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8030 = arguments.length;
var i__4532__auto___8031 = (0);
while(true){
if((i__4532__auto___8031 < len__4531__auto___8030)){
args__4534__auto__.push((arguments[i__4532__auto___8031]));

var G__8032 = (i__4532__auto___8031 + (1));
i__4532__auto___8031 = G__8032;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,data,target,usage,p__8026){
var vec__8027 = p__8026;
var item_size = cljs.core.nth.call(null,vec__8027,(0),null);
var buffer = gl_context.createBuffer();
gl_context.bindBuffer(target,buffer);

gl_context.bufferData(target,data,usage);

if(cljs.core.truth_(item_size)){
buffer.itemSize = item_size;

buffer.numItems = cljs.core.quot.call(null,data.length,item_size);
} else {
}

return buffer;
});

cljs_webgl.buffers.create_buffer.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs_webgl.buffers.create_buffer.cljs$lang$applyTo = (function (seq8021){
var G__8022 = cljs.core.first.call(null,seq8021);
var seq8021__$1 = cljs.core.next.call(null,seq8021);
var G__8023 = cljs.core.first.call(null,seq8021__$1);
var seq8021__$2 = cljs.core.next.call(null,seq8021__$1);
var G__8024 = cljs.core.first.call(null,seq8021__$2);
var seq8021__$3 = cljs.core.next.call(null,seq8021__$2);
var G__8025 = cljs.core.first.call(null,seq8021__$3);
var seq8021__$4 = cljs.core.next.call(null,seq8021__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8022,G__8023,G__8024,G__8025,seq8021__$4);
});

/**
 * Clears the color buffer with specified `red`, `green`, `blue` and `alpha` values.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearColor](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearColor.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_color_buffer = (function cljs_webgl$buffers$clear_color_buffer(gl_context,red,green,blue,alpha){
gl_context.clearColor(red,green,blue,alpha);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.color_buffer_bit);

return gl_context;
});
/**
 * Clears the depth buffer with specified `depth` value.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearDepthf](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearDepthf.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_depth_buffer = (function cljs_webgl$buffers$clear_depth_buffer(gl_context,depth){
gl_context.clearDepth(depth);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.depth_buffer_bit);

return gl_context;
});
/**
 * Clears the stencil buffer with specified `index` value.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearStencil](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearStencil.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_stencil_buffer = (function cljs_webgl$buffers$clear_stencil_buffer(gl_context,index){
gl_context.clearStencil(index);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.stencil_buffer_bit);

return gl_context;
});
cljs_webgl.buffers.set_uniform = (function cljs_webgl$buffers$set_uniform(gl_context,shader,p__8033){
var map__8034 = p__8033;
var map__8034__$1 = ((((!((map__8034 == null)))?(((((map__8034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8034):map__8034);
var name = cljs.core.get.call(null,map__8034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__8034__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.call(null,map__8034__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.call(null,map__8034__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var uniform_location = cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name);
var G__8036 = type;
var G__8036__$1 = (((G__8036 instanceof cljs.core.Keyword))?G__8036.fqn:null);
switch (G__8036__$1) {
case "bool":
return gl_context.uniform1fv(uniform_location,values);

break;
case "bvec2":
return gl_context.uniform2fv(uniform_location,values);

break;
case "bvec3":
return gl_context.uniform3fv(uniform_location,values);

break;
case "bvec4":
return gl_context.uniform4fv(uniform_location,values);

break;
case "float":
return gl_context.uniform1fv(uniform_location,values);

break;
case "vec2":
return gl_context.uniform2fv(uniform_location,values);

break;
case "vec3":
return gl_context.uniform3fv(uniform_location,values);

break;
case "vec4":
return gl_context.uniform4fv(uniform_location,values);

break;
case "int":
return gl_context.uniform1iv(uniform_location,values);

break;
case "ivec2":
return gl_context.uniform2iv(uniform_location,values);

break;
case "ivec3":
return gl_context.uniform3iv(uniform_location,values);

break;
case "ivec4":
return gl_context.uniform4iv(uniform_location,values);

break;
case "mat2":
return gl_context.uniformMatrix2fv(uniform_location,transpose,values);

break;
case "mat3":
return gl_context.uniformMatrix3fv(uniform_location,transpose,values);

break;
case "mat4":
return gl_context.uniformMatrix4fv(uniform_location,transpose,values);

break;
default:
return null;

}
});
cljs_webgl.buffers.set_attribute = (function cljs_webgl$buffers$set_attribute(gl_context,p__8038){
var map__8039 = p__8038;
var map__8039__$1 = ((((!((map__8039 == null)))?(((((map__8039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8039):map__8039);
var buffer = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var location = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var components_per_vertex = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635));
var type = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.call(null,map__8039__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.array_buffer,buffer);

gl_context.enableVertexAttribArray(location);

return gl_context.vertexAttribPointer(location,(function (){var or__3949__auto__ = components_per_vertex;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return buffer.itemSize;
}
})(),(function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs_webgl.constants.data_type.float$;
}
})(),(function (){var or__3949__auto__ = normalized_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
})(),(function (){var or__3949__auto__ = stride;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),(function (){var or__3949__auto__ = offset;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})());
});
cljs_webgl.buffers.set_texture = (function cljs_webgl$buffers$set_texture(gl_context,shader,p__8041){
var map__8042 = p__8041;
var map__8042__$1 = ((((!((map__8042 == null)))?(((((map__8042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8042):map__8042);
var texture = cljs.core.get.call(null,map__8042__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var name = cljs.core.get.call(null,map__8042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var texture_unit = cljs.core.get.call(null,map__8042__$1,new cljs.core.Keyword(null,"texture-unit","texture-unit",-731109059));
var unit = (cljs.core.truth_(texture_unit)?(cljs_webgl.constants.texture_unit.texture0 + texture_unit):cljs_webgl.constants.texture_unit.texture0);
var uniform_index = (function (){var or__3949__auto__ = texture_unit;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
gl_context.activeTexture(cljs_webgl.constants.texture_unit.texture0);

gl_context.bindTexture(cljs_webgl.constants.texture_target.texture_2d,texture);

return gl_context.uniform1i(cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name),(0));
});
cljs_webgl.buffers.default_capabilities = cljs.core.PersistentHashMap.fromArrays([cljs_webgl.constants.capability.stencil_test,cljs_webgl.constants.capability.dither,cljs_webgl.constants.capability.depth_test,cljs_webgl.constants.capability.blend,cljs_webgl.constants.capability.scissor_test,cljs_webgl.constants.capability.sample_alpha_to_coverage,cljs_webgl.constants.capability.polygon_offset_fill,cljs_webgl.constants.capability.cull_face,cljs_webgl.constants.capability.sample_coverage],[false,true,false,false,false,false,false,false,false]);
/**
 * Enables/disables according to `enabled?` a given server-side GL `capability`
 * 
 * The valid values for `capability` are: `cljs-webgl.constants.capability/blend`,
 * `cljs-webgl.constants.capability/cull-face`, `cljs-webgl.constants.capability/depth-test`, `cljs-webgl.constants.capability/dither`,
 * `cljs-webgl.constants.capability/polygon-offset-fill`, `cljs-webgl.constants.capability/sample-alpha-to-coverage`,
 * `cljs-webgl.constants.capability/sample-coverage`, `cljs-webgl.constants.capability/scissor-test`,
 * `cljs-webgl.constants.capability/stencil-test`
 * 
 * Relevant OpenGL ES reference pages:
 * 
 * * [glEnable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glEnable.xml)
 * * [glDisable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glDisable.xml)
 */
cljs_webgl.buffers.set_capability = (function cljs_webgl$buffers$set_capability(gl_context,capability,enabled_QMARK_){
if(cljs.core.truth_(enabled_QMARK_)){
gl_context.enable(capability);
} else {
gl_context.disable(capability);
}

return gl_context;
});
/**
 * Sets `gl-context` viewport according to `viewport` which is expected to have the form:
 * 
 *   {:x,
 * :y,
 * :width,
 * :height}
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [viewport](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glViewport.xml)
 */
cljs_webgl.buffers.set_viewport = (function cljs_webgl$buffers$set_viewport(gl_context,p__8044){
var map__8045 = p__8044;
var map__8045__$1 = ((((!((map__8045 == null)))?(((((map__8045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8045):map__8045);
var viewport = map__8045__$1;
var x = cljs.core.get.call(null,map__8045__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8045__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__8045__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__8045__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return gl_context.viewport(x,y,width,height);
});
cljs_webgl.buffers.draw_BANG_ = (function cljs_webgl$buffers$draw_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8088 = arguments.length;
var i__4532__auto___8089 = (0);
while(true){
if((i__4532__auto___8089 < len__4531__auto___8088)){
args__4534__auto__.push((arguments[i__4532__auto___8089]));

var G__8090 = (i__4532__auto___8089 + (1));
i__4532__auto___8089 = G__8090;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__8049){
var map__8050 = p__8049;
var map__8050__$1 = ((((!((map__8050 == null)))?(((((map__8050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8050):map__8050);
var opts = map__8050__$1;
var textures = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var first = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var viewport = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var attributes = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var shader = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
var capabilities = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"capabilities","capabilities",212739361));
var blend_function = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"blend-function","blend-function",1123696099));
var uniforms = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var element_array = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"element-array","element-array",38145164));
var count = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var draw_mode = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794));
cljs_webgl.buffers.set_viewport.call(null,gl_context,(function (){var or__3949__auto__ = viewport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),cljs_webgl.context.get_drawing_buffer_width.call(null,gl_context),new cljs.core.Keyword(null,"height","height",1025178622),cljs_webgl.context.get_drawing_buffer_height.call(null,gl_context)], null);
}
})());

gl_context.useProgram(shader);

var seq__8052_8091 = cljs.core.seq.call(null,uniforms);
var chunk__8053_8092 = null;
var count__8054_8093 = (0);
var i__8055_8094 = (0);
while(true){
if((i__8055_8094 < count__8054_8093)){
var u_8095 = cljs.core._nth.call(null,chunk__8053_8092,i__8055_8094);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_8095);


var G__8096 = seq__8052_8091;
var G__8097 = chunk__8053_8092;
var G__8098 = count__8054_8093;
var G__8099 = (i__8055_8094 + (1));
seq__8052_8091 = G__8096;
chunk__8053_8092 = G__8097;
count__8054_8093 = G__8098;
i__8055_8094 = G__8099;
continue;
} else {
var temp__5457__auto___8100 = cljs.core.seq.call(null,seq__8052_8091);
if(temp__5457__auto___8100){
var seq__8052_8101__$1 = temp__5457__auto___8100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8052_8101__$1)){
var c__4351__auto___8102 = cljs.core.chunk_first.call(null,seq__8052_8101__$1);
var G__8103 = cljs.core.chunk_rest.call(null,seq__8052_8101__$1);
var G__8104 = c__4351__auto___8102;
var G__8105 = cljs.core.count.call(null,c__4351__auto___8102);
var G__8106 = (0);
seq__8052_8091 = G__8103;
chunk__8053_8092 = G__8104;
count__8054_8093 = G__8105;
i__8055_8094 = G__8106;
continue;
} else {
var u_8107 = cljs.core.first.call(null,seq__8052_8101__$1);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_8107);


var G__8108 = cljs.core.next.call(null,seq__8052_8101__$1);
var G__8109 = null;
var G__8110 = (0);
var G__8111 = (0);
seq__8052_8091 = G__8108;
chunk__8053_8092 = G__8109;
count__8054_8093 = G__8110;
i__8055_8094 = G__8111;
continue;
}
} else {
}
}
break;
}

var seq__8056_8112 = cljs.core.seq.call(null,attributes);
var chunk__8057_8113 = null;
var count__8058_8114 = (0);
var i__8059_8115 = (0);
while(true){
if((i__8059_8115 < count__8058_8114)){
var a_8116 = cljs.core._nth.call(null,chunk__8057_8113,i__8059_8115);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_8116);


var G__8117 = seq__8056_8112;
var G__8118 = chunk__8057_8113;
var G__8119 = count__8058_8114;
var G__8120 = (i__8059_8115 + (1));
seq__8056_8112 = G__8117;
chunk__8057_8113 = G__8118;
count__8058_8114 = G__8119;
i__8059_8115 = G__8120;
continue;
} else {
var temp__5457__auto___8121 = cljs.core.seq.call(null,seq__8056_8112);
if(temp__5457__auto___8121){
var seq__8056_8122__$1 = temp__5457__auto___8121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8056_8122__$1)){
var c__4351__auto___8123 = cljs.core.chunk_first.call(null,seq__8056_8122__$1);
var G__8124 = cljs.core.chunk_rest.call(null,seq__8056_8122__$1);
var G__8125 = c__4351__auto___8123;
var G__8126 = cljs.core.count.call(null,c__4351__auto___8123);
var G__8127 = (0);
seq__8056_8112 = G__8124;
chunk__8057_8113 = G__8125;
count__8058_8114 = G__8126;
i__8059_8115 = G__8127;
continue;
} else {
var a_8128 = cljs.core.first.call(null,seq__8056_8122__$1);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_8128);


var G__8129 = cljs.core.next.call(null,seq__8056_8122__$1);
var G__8130 = null;
var G__8131 = (0);
var G__8132 = (0);
seq__8056_8112 = G__8129;
chunk__8057_8113 = G__8130;
count__8058_8114 = G__8131;
i__8059_8115 = G__8132;
continue;
}
} else {
}
}
break;
}

var seq__8060_8133 = cljs.core.seq.call(null,textures);
var chunk__8061_8134 = null;
var count__8062_8135 = (0);
var i__8063_8136 = (0);
while(true){
if((i__8063_8136 < count__8062_8135)){
var t_8137 = cljs.core._nth.call(null,chunk__8061_8134,i__8063_8136);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_8137);


var G__8138 = seq__8060_8133;
var G__8139 = chunk__8061_8134;
var G__8140 = count__8062_8135;
var G__8141 = (i__8063_8136 + (1));
seq__8060_8133 = G__8138;
chunk__8061_8134 = G__8139;
count__8062_8135 = G__8140;
i__8063_8136 = G__8141;
continue;
} else {
var temp__5457__auto___8142 = cljs.core.seq.call(null,seq__8060_8133);
if(temp__5457__auto___8142){
var seq__8060_8143__$1 = temp__5457__auto___8142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8060_8143__$1)){
var c__4351__auto___8144 = cljs.core.chunk_first.call(null,seq__8060_8143__$1);
var G__8145 = cljs.core.chunk_rest.call(null,seq__8060_8143__$1);
var G__8146 = c__4351__auto___8144;
var G__8147 = cljs.core.count.call(null,c__4351__auto___8144);
var G__8148 = (0);
seq__8060_8133 = G__8145;
chunk__8061_8134 = G__8146;
count__8062_8135 = G__8147;
i__8063_8136 = G__8148;
continue;
} else {
var t_8149 = cljs.core.first.call(null,seq__8060_8143__$1);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_8149);


var G__8150 = cljs.core.next.call(null,seq__8060_8143__$1);
var G__8151 = null;
var G__8152 = (0);
var G__8153 = (0);
seq__8060_8133 = G__8150;
chunk__8061_8134 = G__8151;
count__8062_8135 = G__8152;
i__8063_8136 = G__8153;
continue;
}
} else {
}
}
break;
}

var seq__8064_8154 = cljs.core.seq.call(null,cljs.core.merge.call(null,cljs_webgl.buffers.default_capabilities,capabilities));
var chunk__8065_8155 = null;
var count__8066_8156 = (0);
var i__8067_8157 = (0);
while(true){
if((i__8067_8157 < count__8066_8156)){
var vec__8068_8158 = cljs.core._nth.call(null,chunk__8065_8155,i__8067_8157);
var capability_8159 = cljs.core.nth.call(null,vec__8068_8158,(0),null);
var enabled_QMARK__8160 = cljs.core.nth.call(null,vec__8068_8158,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_8159,enabled_QMARK__8160);


var G__8161 = seq__8064_8154;
var G__8162 = chunk__8065_8155;
var G__8163 = count__8066_8156;
var G__8164 = (i__8067_8157 + (1));
seq__8064_8154 = G__8161;
chunk__8065_8155 = G__8162;
count__8066_8156 = G__8163;
i__8067_8157 = G__8164;
continue;
} else {
var temp__5457__auto___8165 = cljs.core.seq.call(null,seq__8064_8154);
if(temp__5457__auto___8165){
var seq__8064_8166__$1 = temp__5457__auto___8165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8064_8166__$1)){
var c__4351__auto___8167 = cljs.core.chunk_first.call(null,seq__8064_8166__$1);
var G__8168 = cljs.core.chunk_rest.call(null,seq__8064_8166__$1);
var G__8169 = c__4351__auto___8167;
var G__8170 = cljs.core.count.call(null,c__4351__auto___8167);
var G__8171 = (0);
seq__8064_8154 = G__8168;
chunk__8065_8155 = G__8169;
count__8066_8156 = G__8170;
i__8067_8157 = G__8171;
continue;
} else {
var vec__8071_8172 = cljs.core.first.call(null,seq__8064_8166__$1);
var capability_8173 = cljs.core.nth.call(null,vec__8071_8172,(0),null);
var enabled_QMARK__8174 = cljs.core.nth.call(null,vec__8071_8172,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_8173,enabled_QMARK__8174);


var G__8175 = cljs.core.next.call(null,seq__8064_8166__$1);
var G__8176 = null;
var G__8177 = (0);
var G__8178 = (0);
seq__8064_8154 = G__8175;
chunk__8065_8155 = G__8176;
count__8066_8156 = G__8177;
i__8067_8157 = G__8178;
continue;
}
} else {
}
}
break;
}

if((element_array == null)){
gl_context.drawArrays(draw_mode,(function (){var or__3949__auto__ = first;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),count);
} else {
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.element_array_buffer,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(element_array));

gl_context.drawElements(draw_mode,count,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element_array),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(element_array));
}

var seq__8074_8179 = cljs.core.seq.call(null,attributes);
var chunk__8075_8180 = null;
var count__8076_8181 = (0);
var i__8077_8182 = (0);
while(true){
if((i__8077_8182 < count__8076_8181)){
var a_8183 = cljs.core._nth.call(null,chunk__8075_8180,i__8077_8182);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_8183));


var G__8184 = seq__8074_8179;
var G__8185 = chunk__8075_8180;
var G__8186 = count__8076_8181;
var G__8187 = (i__8077_8182 + (1));
seq__8074_8179 = G__8184;
chunk__8075_8180 = G__8185;
count__8076_8181 = G__8186;
i__8077_8182 = G__8187;
continue;
} else {
var temp__5457__auto___8188 = cljs.core.seq.call(null,seq__8074_8179);
if(temp__5457__auto___8188){
var seq__8074_8189__$1 = temp__5457__auto___8188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8074_8189__$1)){
var c__4351__auto___8190 = cljs.core.chunk_first.call(null,seq__8074_8189__$1);
var G__8191 = cljs.core.chunk_rest.call(null,seq__8074_8189__$1);
var G__8192 = c__4351__auto___8190;
var G__8193 = cljs.core.count.call(null,c__4351__auto___8190);
var G__8194 = (0);
seq__8074_8179 = G__8191;
chunk__8075_8180 = G__8192;
count__8076_8181 = G__8193;
i__8077_8182 = G__8194;
continue;
} else {
var a_8195 = cljs.core.first.call(null,seq__8074_8189__$1);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_8195));


var G__8196 = cljs.core.next.call(null,seq__8074_8189__$1);
var G__8197 = null;
var G__8198 = (0);
var G__8199 = (0);
seq__8074_8179 = G__8196;
chunk__8075_8180 = G__8197;
count__8076_8181 = G__8198;
i__8077_8182 = G__8199;
continue;
}
} else {
}
}
break;
}

var seq__8078_8200 = cljs.core.seq.call(null,blend_function);
var chunk__8079_8201 = null;
var count__8080_8202 = (0);
var i__8081_8203 = (0);
while(true){
if((i__8081_8203 < count__8080_8202)){
var vec__8082_8204 = cljs.core._nth.call(null,chunk__8079_8201,i__8081_8203);
var k_8205 = cljs.core.nth.call(null,vec__8082_8204,(0),null);
var v_8206 = cljs.core.nth.call(null,vec__8082_8204,(1),null);
gl_context.blendFunc(k_8205,v_8206);


var G__8207 = seq__8078_8200;
var G__8208 = chunk__8079_8201;
var G__8209 = count__8080_8202;
var G__8210 = (i__8081_8203 + (1));
seq__8078_8200 = G__8207;
chunk__8079_8201 = G__8208;
count__8080_8202 = G__8209;
i__8081_8203 = G__8210;
continue;
} else {
var temp__5457__auto___8211 = cljs.core.seq.call(null,seq__8078_8200);
if(temp__5457__auto___8211){
var seq__8078_8212__$1 = temp__5457__auto___8211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8078_8212__$1)){
var c__4351__auto___8213 = cljs.core.chunk_first.call(null,seq__8078_8212__$1);
var G__8214 = cljs.core.chunk_rest.call(null,seq__8078_8212__$1);
var G__8215 = c__4351__auto___8213;
var G__8216 = cljs.core.count.call(null,c__4351__auto___8213);
var G__8217 = (0);
seq__8078_8200 = G__8214;
chunk__8079_8201 = G__8215;
count__8080_8202 = G__8216;
i__8081_8203 = G__8217;
continue;
} else {
var vec__8085_8218 = cljs.core.first.call(null,seq__8078_8212__$1);
var k_8219 = cljs.core.nth.call(null,vec__8085_8218,(0),null);
var v_8220 = cljs.core.nth.call(null,vec__8085_8218,(1),null);
gl_context.blendFunc(k_8219,v_8220);


var G__8221 = cljs.core.next.call(null,seq__8078_8212__$1);
var G__8222 = null;
var G__8223 = (0);
var G__8224 = (0);
seq__8078_8200 = G__8221;
chunk__8079_8201 = G__8222;
count__8080_8202 = G__8223;
i__8081_8203 = G__8224;
continue;
}
} else {
}
}
break;
}

return gl_context;
});

cljs_webgl.buffers.draw_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_webgl.buffers.draw_BANG_.cljs$lang$applyTo = (function (seq8047){
var G__8048 = cljs.core.first.call(null,seq8047);
var seq8047__$1 = cljs.core.next.call(null,seq8047);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8048,seq8047__$1);
});


//# sourceMappingURL=buffers.js.map
