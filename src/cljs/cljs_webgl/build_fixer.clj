(ns cljs-webgl.build-fixer)

(defn go [_]
  (let [main-js-filepath "resources/public/cljs-out/dev-main.js"]
    (spit main-js-filepath
          (-> main-js-filepath
              slurp
              (clojure.string/replace #"\/cljs-out" "cljs-out")))))
