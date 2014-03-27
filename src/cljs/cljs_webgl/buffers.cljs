(ns cljs-webgl.buffers
  (:require
    [cljs-webgl.typed-arrays :as ta]
    [cljs-webgl.constants :as constants]
    [cljs-webgl.shaders :as shaders]))

(defn create-buffer
  "Creates a new buffer with initialized `data`.

  `data` must be a typed-array

  `target` may be `cljs-webgl.constants/array-buffer` or `cljs-webgl.constants/element-array-buffer`

  `usage` may be `cljs-webgl.constants/static-draw` or `cljs-webgl.constants/dynamic-draw`

  `item-size` [optional] will set the item size as an attribute on the buffer, and the calculate the number of items accordingly.

  Relevant OpenGL ES reference pages:

  * [glGenBuffers(Similar to createBuffer)](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGenBuffers.xml)
  * [glBindBuffer](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBindBuffer.xml)
  * [glBufferData](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBufferData.xml)"
  [gl-context data target usage & [item-size]]
  (let [buffer (.createBuffer gl-context)]
    (.bindBuffer gl-context target buffer)
    (.bufferData gl-context target data usage)
    (when item-size
      (set! (.-itemSize buffer) item-size)
      (set! (.-numItems buffer) (quot (.-length data) item-size)))
    buffer))

(defn clear-color-buffer
  "Clears the color buffer with specified `red`, `green`, `blue` and `alpha` values.

  Relevant OpenGL ES reference pages:

  * [glClearColor](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearColor.xml)
  * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)"
  [gl-context red green blue alpha]
  (.clearColor gl-context red green blue alpha)
  (.clear gl-context constants/color-buffer-bit)
  gl-context)

(defn clear-depth-buffer
  "Clears the depth buffer with specified `depth` value.

  Relevant OpenGL ES reference pages:

  * [glClearDepthf](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearDepthf.xml)
  * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)"
  [gl-context depth]
  (.clearDepth gl-context depth)
  (.clear gl-context constants/depth-buffer-bit)
  gl-context)

(defn clear-stencil-buffer
  "Clears the stencil buffer with specified `index` value.

  Relevant OpenGL ES reference pages:

  * [glClearStencil](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearStencil.xml)
  * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)"
  [gl-context index]
  (.clearStencil gl-context index)
  (.clear gl-context constants/stencil-buffer-bit)
  gl-context)

(defn ^:private bool->float
  [x]
  (if x 1.0 0.0))

(defn ^:private set-uniform
  [gl-context shader {:keys [name type values transpose]}]
  (let [uniform-location (shaders/get-uniform-location gl-context shader name)]
    (case type
      :bool   (.uniform1fv gl-context uniform-location (ta/float32 (map bool->float values)))
      :bvec2  (.uniform2fv gl-context uniform-location (ta/float32 (map bool->float values)))
      :bvec3  (.uniform3fv gl-context uniform-location (ta/float32 (map bool->float values)))
      :bvec4  (.uniform4fv gl-context uniform-location (ta/float (map bool->float values)))
      :float  (.uniform1fv gl-context uniform-location (ta/float32 values))
      :vec2   (.uniform2fv gl-context uniform-location (ta/float32 values))
      :vec3   (.uniform3fv gl-context uniform-location (ta/float32 values))
      :vec4   (.uniform4fv gl-context uniform-location (ta/float32 values))
      :int    (.uniform1iv gl-context uniform-location (ta/int32 values))
      :ivec2  (.uniform2iv gl-context uniform-location (ta/int32 values))
      :ivec3  (.uniform3iv gl-context uniform-location (ta/int32 values))
      :ivec4  (.uniform4iv gl-context uniform-location (ta/int32 values))
      :mat2   (.uniformMatrix2fv gl-context uniform-location transpose (ta/float32 values))
      :mat3   (.uniformMatrix3fv gl-context uniform-location transpose (ta/float32 values))
      :mat4   (.uniformMatrix4fv gl-context uniform-location transpose (ta/float32 values))
      nil)))

(defn ^:private set-attribute
  [gl-context {:keys [buffer location components-per-vertex type normalized? stride offset]}]
  (.bindBuffer
    gl-context
    constants/array-buffer
    buffer)

  (.enableVertexAttribArray
    gl-context
    location)

  (.vertexAttribPointer
    gl-context
    location
    (or components-per-vertex (.-itemSize buffer))
    (or type constants/float)
    (or normalized? false)
    (or stride 0)
    (or offset 0)))

(defn ^:private set-texture
  [gl-context shader {:keys [texture name]}]

  (.activeTexture
    gl-context
    constants/texture0) ; TODO: probably want to parameterize this

  (.bindTexture
    gl-context
    constants/texture-2d ; TODO: probably want to parameterize this
    texture)

  (.uniform1i
    gl-context
   (shaders/get-uniform-location gl-context shader name)
    0)) ; TODO: probably want to parameterize this

(def ^:private default-capabilities
  {constants/blend                    false
   constants/cull-face                false
   constants/depth-test               false
   constants/dither                   true
   constants/polygon-offset-fill      false
   constants/sample-alpha-to-coverage false
   constants/sample-coverage          false
   constants/scissor-test             false
   constants/stencil-test             false})

(defn ^:private set-capability
  "Enables/disables acording to `enabled?` a given server-side GL `capability`

   The valid values for `capability` are: `cljs-webgl.constants/blend`,
   `cljs-webgl.constants/cull-face`, `cljs-webgl.constants/depth-test`, `cljs-webgl.constants/dither`,
   `cljs-webgl.constants/polygon-offset-fill`, `cljs-webgl.constants/sample-alpha-to-coverage`,
   `cljs-webgl.constants/sample-coverage`, `cljs-webgl.constants/scissor-test`,
   `cljs-webgl.constants/stencil-test`

   Relevant OpenGL ES reference pages:

   * [glEnable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glEnable.xml)
   * [glDisable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glDisable.xml)"
  [gl-context capability enabled?]

  (if enabled?
    (.enable gl-context capability)
    (.disable gl-context capability))
  gl-context)

(defn draw!
  [gl-context & {:keys [shader draw-mode first count attributes
                        uniforms textures element-array capabilities] :as opts}]

  (.useProgram gl-context shader)

  (doseq [u uniforms]
    (set-uniform gl-context shader u))

  (doseq [a attributes]
    (set-attribute gl-context a))

  (doseq [t textures]
    (set-texture gl-context shader t))

  (doseq [[capability enabled?] (merge default-capabilities capabilities)]
    (set-capability gl-context capability enabled?))

  (if (nil? element-array)
    (.drawArrays gl-context draw-mode (or first 0) count)
    (do
      (.bindBuffer gl-context constants/element-array-buffer (:buffer element-array))
      (.drawElements gl-context draw-mode count (:type element-array) (:offset element-array))))

  (doseq [a attributes]
    (.disableVertexAttribArray gl-context (:location a)))

  gl-context)
