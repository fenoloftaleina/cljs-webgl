// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_webgl.context');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.parameter_name');
/**
 * Gets a WebGL context from a canvas element.
 * `context-attributes` may be a map in the following form:
 * 
 *  {:alpha
 *   :depth
 *   :stencil
 *   :antialias
 *   :premultiplied-apha
 *   :preserve-drawing-buffer
 *   :prefer-low-power-to-high-performance
 *   :fail-if-major-performance-caveat}
 * If you don't specify any key, the default value is assumed.
 * 
 * For further information on context creation parameters see [WebGLContextAttributes](https://www.khronos.org/registry/webgl/specs/1.0.2/#WEBGLCONTEXTATTRIBUTES);
 */
cljs_webgl.context.get_context = (function cljs_webgl$context$get_context(var_args){
var G__7959 = arguments.length;
switch (G__7959) {
case 1:
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas_element){
return cljs_webgl.context.get_context.call(null,canvas_element,cljs.core.PersistentArrayMap.EMPTY);
});

cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas_element,context_attributes){
var default_attributes = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672),false,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513),false], null);
var attributes__GT_js = ((function (default_attributes){
return (function (p__7960){
var map__7961 = p__7960;
var map__7961__$1 = ((((!((map__7961 == null)))?(((((map__7961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7961):map__7961);
var alpha = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var depth = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var stencil = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"stencil","stencil",-1049110946));
var antialias = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"antialias","antialias",-2073640634));
var premultiplied_alpha = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636));
var preserve_drawing_buffer = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663));
var prefer_low_power_to_high_performance = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672));
var fail_if_major_performance_caveat = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513));
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),alpha,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),stencil,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),antialias,new cljs.core.Keyword(null,"premultipliedAlpha","premultipliedAlpha",1701284427),premultiplied_alpha,new cljs.core.Keyword(null,"preserveDrawingBuffer","preserveDrawingBuffer",187464949),preserve_drawing_buffer,new cljs.core.Keyword(null,"preferLowPowerToHighPerformance","preferLowPowerToHighPerformance",-71326203),prefer_low_power_to_high_performance,new cljs.core.Keyword(null,"failIfMajorPerformanceCaveat","failIfMajorPerformanceCaveat",200641649),fail_if_major_performance_caveat], null));
});})(default_attributes))
;
var opts = attributes__GT_js.call(null,cljs.core.merge.call(null,default_attributes,context_attributes));
var or__3949__auto__ = canvas_element.getContext("experimental-webgl",opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return canvas_element.getContext("webgl",opts);
}
});

cljs_webgl.context.get_context.cljs$lang$maxFixedArity = 2;

/**
 * Returns the actual context parameters for a created context. The returned map has the following form:
 * 
 *  {:alpha
 *   :depth
 *   :stencil
 *   :antialias
 *   :premultiplied-apha
 *   :preserve-drawing-buffer
 *   :prefer-low-power-to-high-performance
 *   :fail-if-major-performance-caveat}
 * 
 * This function is helpful for testing if the requested parameters were satisfied.
 */
cljs_webgl.context.get_context_attributes = (function cljs_webgl$context$get_context_attributes(gl_context){
var js_obj = gl_context.getContextAttributes();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),js_obj.alpha,new cljs.core.Keyword(null,"depth","depth",1768663640),js_obj.depth,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),js_obj.stencil,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),js_obj.antialias,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),js_obj.premultipliedAlpha,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),js_obj.preserveDrawingBuffer,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672),js_obj.preferLowPowerToHighPerformance,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513),js_obj.failIfMajorPerformanceCaveat], null);
});
/**
 * Returns the canvas element from the given WebGL context.
 */
cljs_webgl.context.get_canvas = (function cljs_webgl$context$get_canvas(gl_context){
return gl_context.canvas;
});
/**
 * Returns the buffer current width.
 */
cljs_webgl.context.get_drawing_buffer_width = (function cljs_webgl$context$get_drawing_buffer_width(gl_context){
return gl_context.drawingBufferWidth;
});
/**
 * Returns the buffer current height.
 */
cljs_webgl.context.get_drawing_buffer_height = (function cljs_webgl$context$get_drawing_buffer_height(gl_context){
return gl_context.drawingBufferHeight;
});
/**
 * Returns the current viewport for a given `gl-context` as a map with the form:
 * 
 *   {:x,
 *  :y,
 *  :width,
 *  :height}
 */
cljs_webgl.context.get_viewport = (function cljs_webgl$context$get_viewport(gl_context){
var vec__7964 = Array.apply(cljs.core.PersistentVector.EMPTY,gl_context.getParameter(cljs_webgl.constants.parameter_name.viewport));
var x = cljs.core.nth.call(null,vec__7964,(0),null);
var y = cljs.core.nth.call(null,vec__7964,(1),null);
var w = cljs.core.nth.call(null,vec__7964,(2),null);
var h = cljs.core.nth.call(null,vec__7964,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null);
});
/**
 * Returns whether the context was lost.
 * 
 *   See [The Context Lost Event](http://www.khronos.org/registry/webgl/specs/1.0/#CONTEXT_LOST)
 */
cljs_webgl.context.is_context_lost_QMARK_ = (function cljs_webgl$context$is_context_lost_QMARK_(gl_context){
return gl_context.isContextLost();
});
/**
 * Returns a string sequence containing the name for each supported extension
 */
cljs_webgl.context.get_supported_extensions = (function cljs_webgl$context$get_supported_extensions(gl_context){
return (new cljs.core.LazySeq(null,(function (){
return gl_context.getSupportedExtensions();
}),null,null));
});
/**
 * Returns the object for the requested extension. The returned value is not wrapped in any ClojureScript construct.
 */
cljs_webgl.context.get_extension = (function cljs_webgl$context$get_extension(gl_context,extension_name){
return gl_context.getExtension(extension_name);
});

//# sourceMappingURL=context.js.map
