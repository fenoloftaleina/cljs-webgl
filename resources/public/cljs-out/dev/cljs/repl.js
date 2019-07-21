// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13166){
var map__13167 = p__13166;
var map__13167__$1 = ((((!((map__13167 == null)))?(((((map__13167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13167):map__13167);
var m = map__13167__$1;
var n = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13169_13191 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13170_13192 = null;
var count__13171_13193 = (0);
var i__13172_13194 = (0);
while(true){
if((i__13172_13194 < count__13171_13193)){
var f_13195 = cljs.core._nth.call(null,chunk__13170_13192,i__13172_13194);
cljs.core.println.call(null,"  ",f_13195);


var G__13196 = seq__13169_13191;
var G__13197 = chunk__13170_13192;
var G__13198 = count__13171_13193;
var G__13199 = (i__13172_13194 + (1));
seq__13169_13191 = G__13196;
chunk__13170_13192 = G__13197;
count__13171_13193 = G__13198;
i__13172_13194 = G__13199;
continue;
} else {
var temp__5457__auto___13200 = cljs.core.seq.call(null,seq__13169_13191);
if(temp__5457__auto___13200){
var seq__13169_13201__$1 = temp__5457__auto___13200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13169_13201__$1)){
var c__4351__auto___13202 = cljs.core.chunk_first.call(null,seq__13169_13201__$1);
var G__13203 = cljs.core.chunk_rest.call(null,seq__13169_13201__$1);
var G__13204 = c__4351__auto___13202;
var G__13205 = cljs.core.count.call(null,c__4351__auto___13202);
var G__13206 = (0);
seq__13169_13191 = G__13203;
chunk__13170_13192 = G__13204;
count__13171_13193 = G__13205;
i__13172_13194 = G__13206;
continue;
} else {
var f_13207 = cljs.core.first.call(null,seq__13169_13201__$1);
cljs.core.println.call(null,"  ",f_13207);


var G__13208 = cljs.core.next.call(null,seq__13169_13201__$1);
var G__13209 = null;
var G__13210 = (0);
var G__13211 = (0);
seq__13169_13191 = G__13208;
chunk__13170_13192 = G__13209;
count__13171_13193 = G__13210;
i__13172_13194 = G__13211;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13212 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13212);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13212)))?cljs.core.second.call(null,arglists_13212):arglists_13212));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13173_13213 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13174_13214 = null;
var count__13175_13215 = (0);
var i__13176_13216 = (0);
while(true){
if((i__13176_13216 < count__13175_13215)){
var vec__13177_13217 = cljs.core._nth.call(null,chunk__13174_13214,i__13176_13216);
var name_13218 = cljs.core.nth.call(null,vec__13177_13217,(0),null);
var map__13180_13219 = cljs.core.nth.call(null,vec__13177_13217,(1),null);
var map__13180_13220__$1 = ((((!((map__13180_13219 == null)))?(((((map__13180_13219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13180_13219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13180_13219):map__13180_13219);
var doc_13221 = cljs.core.get.call(null,map__13180_13220__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13222 = cljs.core.get.call(null,map__13180_13220__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13218);

cljs.core.println.call(null," ",arglists_13222);

if(cljs.core.truth_(doc_13221)){
cljs.core.println.call(null," ",doc_13221);
} else {
}


var G__13223 = seq__13173_13213;
var G__13224 = chunk__13174_13214;
var G__13225 = count__13175_13215;
var G__13226 = (i__13176_13216 + (1));
seq__13173_13213 = G__13223;
chunk__13174_13214 = G__13224;
count__13175_13215 = G__13225;
i__13176_13216 = G__13226;
continue;
} else {
var temp__5457__auto___13227 = cljs.core.seq.call(null,seq__13173_13213);
if(temp__5457__auto___13227){
var seq__13173_13228__$1 = temp__5457__auto___13227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13173_13228__$1)){
var c__4351__auto___13229 = cljs.core.chunk_first.call(null,seq__13173_13228__$1);
var G__13230 = cljs.core.chunk_rest.call(null,seq__13173_13228__$1);
var G__13231 = c__4351__auto___13229;
var G__13232 = cljs.core.count.call(null,c__4351__auto___13229);
var G__13233 = (0);
seq__13173_13213 = G__13230;
chunk__13174_13214 = G__13231;
count__13175_13215 = G__13232;
i__13176_13216 = G__13233;
continue;
} else {
var vec__13182_13234 = cljs.core.first.call(null,seq__13173_13228__$1);
var name_13235 = cljs.core.nth.call(null,vec__13182_13234,(0),null);
var map__13185_13236 = cljs.core.nth.call(null,vec__13182_13234,(1),null);
var map__13185_13237__$1 = ((((!((map__13185_13236 == null)))?(((((map__13185_13236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13185_13236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13185_13236):map__13185_13236);
var doc_13238 = cljs.core.get.call(null,map__13185_13237__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13239 = cljs.core.get.call(null,map__13185_13237__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13235);

cljs.core.println.call(null," ",arglists_13239);

if(cljs.core.truth_(doc_13238)){
cljs.core.println.call(null," ",doc_13238);
} else {
}


var G__13240 = cljs.core.next.call(null,seq__13173_13228__$1);
var G__13241 = null;
var G__13242 = (0);
var G__13243 = (0);
seq__13173_13213 = G__13240;
chunk__13174_13214 = G__13241;
count__13175_13215 = G__13242;
i__13176_13216 = G__13243;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__13187 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13188 = null;
var count__13189 = (0);
var i__13190 = (0);
while(true){
if((i__13190 < count__13189)){
var role = cljs.core._nth.call(null,chunk__13188,i__13190);
var temp__5457__auto___13244__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13244__$1)){
var spec_13245 = temp__5457__auto___13244__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13245));
} else {
}


var G__13246 = seq__13187;
var G__13247 = chunk__13188;
var G__13248 = count__13189;
var G__13249 = (i__13190 + (1));
seq__13187 = G__13246;
chunk__13188 = G__13247;
count__13189 = G__13248;
i__13190 = G__13249;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__13187);
if(temp__5457__auto____$1){
var seq__13187__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13187__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__13187__$1);
var G__13250 = cljs.core.chunk_rest.call(null,seq__13187__$1);
var G__13251 = c__4351__auto__;
var G__13252 = cljs.core.count.call(null,c__4351__auto__);
var G__13253 = (0);
seq__13187 = G__13250;
chunk__13188 = G__13251;
count__13189 = G__13252;
i__13190 = G__13253;
continue;
} else {
var role = cljs.core.first.call(null,seq__13187__$1);
var temp__5457__auto___13254__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13254__$2)){
var spec_13255 = temp__5457__auto___13254__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13255));
} else {
}


var G__13256 = cljs.core.next.call(null,seq__13187__$1);
var G__13257 = null;
var G__13258 = (0);
var G__13259 = (0);
seq__13187 = G__13256;
chunk__13188 = G__13257;
count__13189 = G__13258;
i__13190 = G__13259;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
