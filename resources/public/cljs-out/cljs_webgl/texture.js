// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_webgl.texture');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.texture_target');
goog.require('cljs_webgl.constants.texture_parameter_name');
goog.require('cljs_webgl.constants.parameter_name');
goog.require('cljs_webgl.constants.webgl');
goog.require('cljs_webgl.constants.texture_filter');
goog.require('cljs_webgl.constants.pixel_format');
goog.require('cljs_webgl.constants.data_type');
/**
 * Related OpenGL ES reference pages:
 *   [glPixelStorei](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
 */
cljs_webgl.texture.default_pixel_store_modes = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs_webgl.constants.webgl.unpack_flip_y_webgl,false,cljs_webgl.constants.webgl.unpack_premultiply_alpha_webgl,false,cljs_webgl.constants.webgl.unpack_colorspace_conversion_webgl,false,cljs_webgl.constants.parameter_name.unpack_alignment,(4),cljs_webgl.constants.parameter_name.pack_alignment,(4)]);
/**
 * Valid values for `target` are: `cljs-webgl.constants.texture-target/texture-2d` and
 *   `texture-cube-map`. The default value is `texture-2d`.
 */
cljs_webgl.texture.create_texture = (function cljs_webgl$texture$create_texture(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8266 = arguments.length;
var i__4532__auto___8267 = (0);
while(true){
if((i__4532__auto___8267 < len__4531__auto___8266)){
args__4534__auto__.push((arguments[i__4532__auto___8267]));

var G__8268 = (i__4532__auto___8267 + (1));
i__4532__auto___8267 = G__8268;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_webgl.texture.create_texture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_webgl.texture.create_texture.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__8243){
var map__8244 = p__8243;
var map__8244__$1 = ((((!((map__8244 == null)))?(((((map__8244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244):map__8244);
var opts = map__8244__$1;
var image = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var target = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"target","target",253001721));
var pixel_store_modes = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"pixel-store-modes","pixel-store-modes",1198746295));
var generate_mipmaps_QMARK_ = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"generate-mipmaps?","generate-mipmaps?",-1559457203));
var level_of_detail = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"level-of-detail","level-of-detail",1817545009));
var internal_pixel_format = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"internal-pixel-format","internal-pixel-format",-618695817));
var pixel_format = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"pixel-format","pixel-format",-1609978632));
var data_type = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"data-type","data-type",-326421468));
var parameters = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var texture = gl_context.createTexture();
var target__$1 = (function (){var or__3949__auto__ = target;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs_webgl.constants.texture_target.texture_2d;
}
})();
var pixel_store_modes__$1 = cljs.core.merge.call(null,cljs_webgl.texture.default_pixel_store_modes,pixel_store_modes);
gl_context.bindTexture(target__$1,texture);

var seq__8246_8269 = cljs.core.seq.call(null,pixel_store_modes__$1);
var chunk__8247_8270 = null;
var count__8248_8271 = (0);
var i__8249_8272 = (0);
while(true){
if((i__8249_8272 < count__8248_8271)){
var vec__8250_8273 = cljs.core._nth.call(null,chunk__8247_8270,i__8249_8272);
var parameter_8274 = cljs.core.nth.call(null,vec__8250_8273,(0),null);
var value_8275 = cljs.core.nth.call(null,vec__8250_8273,(1),null);
gl_context.pixelStorei(parameter_8274,value_8275);


var G__8276 = seq__8246_8269;
var G__8277 = chunk__8247_8270;
var G__8278 = count__8248_8271;
var G__8279 = (i__8249_8272 + (1));
seq__8246_8269 = G__8276;
chunk__8247_8270 = G__8277;
count__8248_8271 = G__8278;
i__8249_8272 = G__8279;
continue;
} else {
var temp__5457__auto___8280 = cljs.core.seq.call(null,seq__8246_8269);
if(temp__5457__auto___8280){
var seq__8246_8281__$1 = temp__5457__auto___8280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8246_8281__$1)){
var c__4351__auto___8282 = cljs.core.chunk_first.call(null,seq__8246_8281__$1);
var G__8283 = cljs.core.chunk_rest.call(null,seq__8246_8281__$1);
var G__8284 = c__4351__auto___8282;
var G__8285 = cljs.core.count.call(null,c__4351__auto___8282);
var G__8286 = (0);
seq__8246_8269 = G__8283;
chunk__8247_8270 = G__8284;
count__8248_8271 = G__8285;
i__8249_8272 = G__8286;
continue;
} else {
var vec__8253_8287 = cljs.core.first.call(null,seq__8246_8281__$1);
var parameter_8288 = cljs.core.nth.call(null,vec__8253_8287,(0),null);
var value_8289 = cljs.core.nth.call(null,vec__8253_8287,(1),null);
gl_context.pixelStorei(parameter_8288,value_8289);


var G__8290 = cljs.core.next.call(null,seq__8246_8281__$1);
var G__8291 = null;
var G__8292 = (0);
var G__8293 = (0);
seq__8246_8269 = G__8290;
chunk__8247_8270 = G__8291;
count__8248_8271 = G__8292;
i__8249_8272 = G__8293;
continue;
}
} else {
}
}
break;
}

gl_context.texImage2D(target__$1,(function (){var or__3949__auto__ = level_of_detail;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),(function (){var or__3949__auto__ = internal_pixel_format;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs_webgl.constants.pixel_format.rgba;
}
})(),(function (){var or__3949__auto__ = pixel_format;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs_webgl.constants.pixel_format.rgba;
}
})(),cljs_webgl.constants.data_type.unsigned_byte,image);

var seq__8256_8294 = cljs.core.seq.call(null,parameters);
var chunk__8257_8295 = null;
var count__8258_8296 = (0);
var i__8259_8297 = (0);
while(true){
if((i__8259_8297 < count__8258_8296)){
var vec__8260_8298 = cljs.core._nth.call(null,chunk__8257_8295,i__8259_8297);
var k_8299 = cljs.core.nth.call(null,vec__8260_8298,(0),null);
var v_8300 = cljs.core.nth.call(null,vec__8260_8298,(1),null);
gl_context.texParameteri(target__$1,k_8299,v_8300);


var G__8301 = seq__8256_8294;
var G__8302 = chunk__8257_8295;
var G__8303 = count__8258_8296;
var G__8304 = (i__8259_8297 + (1));
seq__8256_8294 = G__8301;
chunk__8257_8295 = G__8302;
count__8258_8296 = G__8303;
i__8259_8297 = G__8304;
continue;
} else {
var temp__5457__auto___8305 = cljs.core.seq.call(null,seq__8256_8294);
if(temp__5457__auto___8305){
var seq__8256_8306__$1 = temp__5457__auto___8305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8256_8306__$1)){
var c__4351__auto___8307 = cljs.core.chunk_first.call(null,seq__8256_8306__$1);
var G__8308 = cljs.core.chunk_rest.call(null,seq__8256_8306__$1);
var G__8309 = c__4351__auto___8307;
var G__8310 = cljs.core.count.call(null,c__4351__auto___8307);
var G__8311 = (0);
seq__8256_8294 = G__8308;
chunk__8257_8295 = G__8309;
count__8258_8296 = G__8310;
i__8259_8297 = G__8311;
continue;
} else {
var vec__8263_8312 = cljs.core.first.call(null,seq__8256_8306__$1);
var k_8313 = cljs.core.nth.call(null,vec__8263_8312,(0),null);
var v_8314 = cljs.core.nth.call(null,vec__8263_8312,(1),null);
gl_context.texParameteri(target__$1,k_8313,v_8314);


var G__8315 = cljs.core.next.call(null,seq__8256_8306__$1);
var G__8316 = null;
var G__8317 = (0);
var G__8318 = (0);
seq__8256_8294 = G__8315;
chunk__8257_8295 = G__8316;
count__8258_8296 = G__8317;
i__8259_8297 = G__8318;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(generate_mipmaps_QMARK_)){
gl_context.generateMipmap(target__$1);
} else {
}

gl_context.bindTexture(target__$1,null);

return texture;
});

cljs_webgl.texture.create_texture.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_webgl.texture.create_texture.cljs$lang$applyTo = (function (seq8241){
var G__8242 = cljs.core.first.call(null,seq8241);
var seq8241__$1 = cljs.core.next.call(null,seq8241);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8242,seq8241__$1);
});


//# sourceMappingURL=texture.js.map
