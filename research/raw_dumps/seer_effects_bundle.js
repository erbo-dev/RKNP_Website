import{a as e,s as t}from"./transitions-JC0Aprch.js";function n(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vr[e&255]+Vr[e>>8&255]+Vr[e>>16&255]+Vr[e>>24&255]+`-`+Vr[t&255]+Vr[t>>8&255]+`-`+Vr[t>>16&15|64]+Vr[t>>24&255]+`-`+Vr[n&63|128]+Vr[n>>8&255]+`-`+Vr[n>>16&255]+Vr[n>>24&255]+Vr[r&255]+Vr[r>>8&255]+Vr[r>>16&255]+Vr[r>>24&255]).toUpperCase()}function r(e,t,n){return Math.max(t,Math.min(n,e))}function i(e,t){return(e%t+t)%t}function a(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function o(e,t,n){return e===t?0:(n-e)/(t-e)}function s(e,t,n){return(1-n)*e+n*t}function c(e,t,n,r){return s(e,t,1-Math.exp(-n*r))}function l(e,t=1){return t-Math.abs(i(e,t*2)-t)}function u(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function d(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function f(e,t){return e+Math.floor(Math.random()*(t-e+1))}function p(e,t){return e+Math.random()*(t-e)}function m(e){return e*(.5-Math.random())}function h(e){return e!==void 0&&(Hr=e%2147483647),Hr=Hr*16807%2147483647,(Hr-1)/2147483646}function g(e){return e*Ur}function _(e){return e*Wr}function v(e){return!(e&e-1)&&e!==0}function y(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function b(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function x(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function S(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qr.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}function C(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mi.fromArray(e,a);let o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),s=t.dot(mi),c=n.dot(mi),l=r.dot(mi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function w(){Object.defineProperty(this,"id",{value:pa++}),this.uuid=n(),this.name=``,this.type=`Material`,this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}function T(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function E(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function D(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function O(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,r=e.length;n<r;++n)e[n]>t&&(t=e[n]);return t}function ee(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side!==2,s),c===null)return null;Ka.copy(s),Ka.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ka);return l<n.near||l>n.far?null:{distance:l,point:Ka.clone(),object:e}}function te(e,t,n,r,i,a,o,s,c,l,u,d){Na.fromBufferAttribute(i,l),Pa.fromBufferAttribute(i,u),Fa.fromBufferAttribute(i,d);let f=e.morphTargetInfluences;if(t.morphTargets&&a&&f){za.set(0,0,0),Ba.set(0,0,0),Va.set(0,0,0);for(let e=0,t=a.length;e<t;e++){let t=f[e],n=a[e];t!==0&&(Ia.fromBufferAttribute(n,l),La.fromBufferAttribute(n,u),Ra.fromBufferAttribute(n,d),o?(za.addScaledVector(Ia,t),Ba.addScaledVector(La,t),Va.addScaledVector(Ra,t)):(za.addScaledVector(Ia.sub(Na),t),Ba.addScaledVector(La.sub(Pa),t),Va.addScaledVector(Ra.sub(Fa),t)))}Na.add(za),Pa.add(Ba),Fa.add(Va)}e.isSkinnedMesh&&t.skinning&&(e.boneTransform(l,Na),e.boneTransform(u,Pa),e.boneTransform(d,Fa));let p=ee(e,t,n,r,Na,Pa,Fa,Ga);if(p){s&&(Ha.fromBufferAttribute(s,l),Ua.fromBufferAttribute(s,u),Wa.fromBufferAttribute(s,d),p.uv=fa.getUV(Ga,Na,Pa,Fa,Ha,Ua,Wa,new F)),c&&(Ha.fromBufferAttribute(c,l),Ua.fromBufferAttribute(c,u),Wa.fromBufferAttribute(c,d),p.uv2=fa.getUV(Ga,Na,Pa,Fa,Ha,Ua,Wa,new F));let e={a:l,b:u,c:d,normal:new L,materialIndex:0};fa.getNormal(Na,Pa,Fa,e.normal),p.face=e}return p}function k(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function A(e){let t={};for(let n=0;n<e.length;n++){let r=k(e[n]);for(let e in r)t[e]=r[e]}return t}function ne(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function re(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=e.createBuffer();e.bindBuffer(r,o),e.bufferData(r,i,a),t.onUploadCallback();let s=5126;return i instanceof Float32Array?s=5126:i instanceof Float64Array?console.warn(`THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.`):i instanceof Uint16Array?t.isFloat16BufferAttribute?n?s=5131:console.warn(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`):s=5123:i instanceof Int16Array?s=5122:i instanceof Uint32Array?s=5125:i instanceof Int32Array?s=5124:i instanceof Int8Array?s=5120:i instanceof Uint8Array&&(s=5121),{buffer:o,type:s,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version}}function a(t,r,i){let a=r.array,o=r.updateRange;e.bindBuffer(i,t),o.count===-1?e.bufferSubData(i,0,a):(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1)}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);n===void 0?r.set(e,i(e,t)):n.version<e.version&&(a(n.buffer,e,t),n.version=e.version)}return{get:o,remove:s,update:c}}function ie(e,t,n,r,i){let a=new B(0),o=0,s,c,l=null,u=0,d=null;function f(n,i,f,m){let h=i.isScene===!0?i.background:null;h&&h.isTexture&&(h=t.get(h));let g=e.xr,_=g.getSession&&g.getSession();_&&_.environmentBlendMode===`additive`&&(h=null),h===null?p(a,o):h&&h.isColor&&(p(h,1),m=!0),(e.autoClear||m)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),h&&(h.isCubeTexture||h.mapping===306)?(c===void 0&&(c=new W(new qa(1,1,1),new G({name:`BackgroundCubeMaterial`,uniforms:k(lo.cube.uniforms),vertexShader:lo.cube.vertexShader,fragmentShader:lo.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute(`normal`),c.geometry.deleteAttribute(`uv`),c.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=h,c.material.uniforms.flipEnvMap.value=h.isCubeTexture&&h._needsFlipEnvMap?-1:1,(l!==h||u!==h.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,l=h,u=h.version,d=e.toneMapping),n.unshift(c,c.geometry,c.material,0,0,null)):h&&h.isTexture&&(s===void 0&&(s=new W(new co(2,2),new G({name:`BackgroundMaterial`,uniforms:k(lo.background.uniforms),vertexShader:lo.background.vertexShader,fragmentShader:lo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute(`normal`),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(s)),s.material.uniforms.t2D.value=h,h.matrixAutoUpdate===!0&&h.updateMatrix(),s.material.uniforms.uvTransform.value.copy(h.matrix),(l!==h||u!==h.version||d!==e.toneMapping)&&(s.material.needsUpdate=!0,l=h,u=h.version,d=e.toneMapping),n.unshift(s,s.geometry,s.material,0,0,null))}function p(e,t){n.buffers.color.setClear(e.r,e.g,e.b,t,i)}return{getClearColor:function(){return a},setClearColor:function(e,t=1){a.set(e),o=t,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(e){o=e,p(a,o)},render:f}}function ae(e,t,n,r){let i=e.getParameter(34921),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=h(null),l=c;function u(t,r,i,a,s){let c=!1;if(o){let e=m(a,i,r);l!==e&&(l=e,f(l.object)),c=g(a,s),c&&_(a,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}t.isInstancedMesh===!0&&(c=!0),s!==null&&n.update(s,34963),c&&(C(t,r,i,a),s!==null&&e.bindBuffer(34963,n.get(s).buffer))}function d(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function f(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function p(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function m(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=h(d()),a[r]=o),o}function h(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function g(e,t){let n=l.attributes,r=e.attributes,i=0;for(let e in r){let t=n[e],a=r[e];if(t===void 0||t.attribute!==a||t.data!==a.data)return!0;i++}return l.attributesNum!==i||l.index!==t}function _(e,t){let n={},r=e.attributes,i=0;for(let e in r){let t=r[e],a={};a.attribute=t,t.data&&(a.data=t.data),n[e]=a,i++}l.attributes=n,l.attributesNum=i,l.index=t}function v(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function y(e){b(e,0)}function b(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function x(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function S(t,n,i,a,o,s){r.isWebGL2===!0&&(i===5124||i===5125)?e.vertexAttribIPointer(t,n,i,o,s):e.vertexAttribPointer(t,n,i,a,o,s)}function C(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;v();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let r=l[t];if(r>=0){let a=c[t];if(a!==void 0){let t=a.normalized,i=a.itemSize,o=n.get(a);if(o===void 0)continue;let c=o.buffer,l=o.type,u=o.bytesPerElement;if(a.isInterleavedBufferAttribute){let n=a.data,o=n.stride,d=a.offset;n&&n.isInstancedInterleavedBuffer?(b(r,n.meshPerAttribute),s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)):y(r),e.bindBuffer(34962,c),S(r,i,l,t,o*u,d*u)}else a.isInstancedBufferAttribute?(b(r,a.meshPerAttribute),s._maxInstanceCount===void 0&&(s._maxInstanceCount=a.meshPerAttribute*a.count)):y(r),e.bindBuffer(34962,c),S(r,i,l,t,0,0)}else if(t===`instanceMatrix`){let t=n.get(i.instanceMatrix);if(t===void 0)continue;let a=t.buffer,o=t.type;b(r+0,1),b(r+1,1),b(r+2,1),b(r+3,1),e.bindBuffer(34962,a),e.vertexAttribPointer(r+0,4,o,!1,64,0),e.vertexAttribPointer(r+1,4,o,!1,64,16),e.vertexAttribPointer(r+2,4,o,!1,64,32),e.vertexAttribPointer(r+3,4,o,!1,64,48)}else if(t===`instanceColor`){let t=n.get(i.instanceColor);if(t===void 0)continue;let a=t.buffer,o=t.type;b(r,1),e.bindBuffer(34962,a),e.vertexAttribPointer(r,3,o,!1,12,0)}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(r,n);break;case 3:e.vertexAttrib3fv(r,n);break;case 4:e.vertexAttrib4fv(r,n);break;default:e.vertexAttrib1fv(r,n)}}}}x()}function w(){D();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)p(n[e].object),delete n[e];delete t[e]}delete s[e]}}function T(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)p(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function E(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)p(r[e].object),delete r[e];delete n[e.id]}}function D(){O(),l!==c&&(l=c,f(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:y,disableUnusedAttributes:x}}function oe(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}this.setMode=o,this.render=s,this.renderInstances=c}function se(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<`u`&&e instanceof WebGL2ComputeRenderingContext,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=n.logarithmicDepthBuffer===!0,u=e.getParameter(34930),d=e.getParameter(35660),f=e.getParameter(3379),p=e.getParameter(34076),m=e.getParameter(34921),h=e.getParameter(36347),g=e.getParameter(36348),_=e.getParameter(36349),v=d>0,y=o||t.has(`OES_texture_float`),b=v&&y,x=o?e.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:x}}function ce(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ta,s=new Gr,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,a){let o=e.length!==0||t||r!==0||i;return i=t,n=u(e,a,0),r=e.length,o},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,l()},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function le(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=e.getRenderTarget(),s=new ro(a.height/2);return s.fromEquirectangularTexture(e,r),t.set(r,s),e.setRenderTarget(o),r.addEventListener(`dispose`,i),n(s.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}function ue(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?n(`EXT_color_buffer_float`):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function de(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(e){let n=e.attributes;for(let e in n)t.update(n[e],34962);let r=e.morphAttributes;for(let e in r){let n=r[e];for(let e=0,r=n.length;e<r;e++)t.update(n[e],34962)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(O(n)>65535?ba:ya)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function fe(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function pe(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(e,t,r){switch(n.calls++,t){case 4:n.triangles+=e/3*r;break;case 1:n.lines+=e/2*r;break;case 3:n.lines+=r*(e-1);break;case 2:n.lines+=r*e;break;case 0:n.points+=r*e;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,t)}}function i(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function me(e,t){return e[0]-t[0]}function he(e,t){return Math.abs(t[1])-Math.abs(e[1])}function ge(e){let t={},n=new Float32Array(8),r=[];for(let e=0;e<8;e++)r[e]=[e,0];function i(i,a,o,s){let c=i.morphTargetInfluences,l=c===void 0?0:c.length,u=t[a.id];if(u===void 0){u=[];for(let e=0;e<l;e++)u[e]=[e,0];t[a.id]=u}for(let e=0;e<l;e++){let t=u[e];t[0]=e,t[1]=c[e]}u.sort(he);for(let e=0;e<8;e++)e<l&&u[e][1]?(r[e][0]=u[e][0],r[e][1]=u[e][1]):(r[e][0]=2**53-1,r[e][1]=0);r.sort(me);let d=o.morphTargets&&a.morphAttributes.position,f=o.morphNormals&&a.morphAttributes.normal,p=0;for(let e=0;e<8;e++){let t=r[e],i=t[0],o=t[1];i!==2**53-1&&o?(d&&a.getAttribute(`morphTarget`+e)!==d[i]&&a.setAttribute(`morphTarget`+e,d[i]),f&&a.getAttribute(`morphNormal`+e)!==f[i]&&a.setAttribute(`morphNormal`+e,f[i]),n[e]=o,p+=o):(d&&a.hasAttribute(`morphTarget`+e)===!0&&a.deleteAttribute(`morphTarget`+e),f&&a.hasAttribute(`morphNormal`+e)===!0&&a.deleteAttribute(`morphNormal`+e),n[e]=0)}let m=a.morphTargetsRelative?1:1-p;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,m),s.getUniforms().setValue(e,`morphTargetInfluences`,n)}return{update:i}}function _e(e,t,n,r){let i=new WeakMap;function a(e){let a=r.render.frame,o=e.geometry,c=t.get(e,o);return i.get(c)!==a&&(t.update(c),i.set(c,a)),e.isInstancedMesh&&(e.hasEventListener(`dispose`,s)===!1&&e.addEventListener(`dispose`,s),n.update(e.instanceMatrix,34962),e.instanceColor!==null&&n.update(e.instanceColor,34962)),c}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}function ve(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=_o[i];if(a===void 0&&(a=new Float32Array(i),_o[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ye(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function be(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function xe(e,t){let n=vo[t];n===void 0&&(n=new Int32Array(t),vo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Se(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ce(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ye(n,t))return;e.uniform2fv(this.addr,t),be(n,t)}}function j(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ye(n,t))return;e.uniform3fv(this.addr,t),be(n,t)}}function we(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ye(n,t))return;e.uniform4fv(this.addr,t),be(n,t)}}function Te(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),be(n,t)}else{if(ye(n,r))return;xo.set(r),e.uniformMatrix2fv(this.addr,!1,xo),be(n,r)}}function Ee(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),be(n,t)}else{if(ye(n,r))return;bo.set(r),e.uniformMatrix3fv(this.addr,!1,bo),be(n,r)}}function M(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),be(n,t)}else{if(ye(n,r))return;yo.set(r),e.uniformMatrix4fv(this.addr,!1,yo),be(n,r)}}function De(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Oe(e,t){let n=this.cache;ye(n,t)||(e.uniform2iv(this.addr,t),be(n,t))}function ke(e,t){let n=this.cache;ye(n,t)||(e.uniform3iv(this.addr,t),be(n,t))}function Ae(e,t){let n=this.cache;ye(n,t)||(e.uniform4iv(this.addr,t),be(n,t))}function je(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Me(e,t){let n=this.cache;ye(n,t)||(e.uniform2uiv(this.addr,t),be(n,t))}function Ne(e,t){let n=this.cache;ye(n,t)||(e.uniform3uiv(this.addr,t),be(n,t))}function Pe(e,t){let n=this.cache;ye(n,t)||(e.uniform4uiv(this.addr,t),be(n,t))}function Fe(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.safeSetTexture2D(t||po,i)}function Ie(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ho,i)}function Le(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.safeSetTextureCube(t||go,i)}function Re(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||mo,i)}function ze(e){switch(e){case 5126:return Se;case 35664:return Ce;case 35665:return j;case 35666:return we;case 35674:return Te;case 35675:return Ee;case 35676:return M;case 5124:case 35670:return De;case 35667:case 35671:return Oe;case 35668:case 35672:return ke;case 35669:case 35673:return Ae;case 5125:return je;case 36294:return Me;case 36295:return Ne;case 36296:return Pe;case 35678:case 36198:case 36298:case 36306:case 35682:return Fe;case 35679:case 36299:case 36307:return Ie;case 35680:case 36300:case 36308:case 36293:return Le;case 36289:case 36303:case 36311:case 36292:return Re}}function Be(e,t){e.uniform1fv(this.addr,t)}function Ve(e,t){let n=ve(t,this.size,2);e.uniform2fv(this.addr,n)}function He(e,t){let n=ve(t,this.size,3);e.uniform3fv(this.addr,n)}function Ue(e,t){let n=ve(t,this.size,4);e.uniform4fv(this.addr,n)}function We(e,t){let n=ve(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ge(e,t){let n=ve(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ke(e,t){let n=ve(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function qe(e,t){e.uniform1iv(this.addr,t)}function Je(e,t){e.uniform2iv(this.addr,t)}function Ye(e,t){e.uniform3iv(this.addr,t)}function Xe(e,t){e.uniform4iv(this.addr,t)}function Ze(e,t){e.uniform1uiv(this.addr,t)}function Qe(e,t){e.uniform2uiv(this.addr,t)}function $e(e,t){e.uniform3uiv(this.addr,t)}function et(e,t){e.uniform4uiv(this.addr,t)}function tt(e,t,n){let r=t.length,i=xe(n,r);e.uniform1iv(this.addr,i);for(let e=0;e!==r;++e)n.safeSetTexture2D(t[e]||po,i[e])}function nt(e,t,n){let r=t.length,i=xe(n,r);e.uniform1iv(this.addr,i);for(let e=0;e!==r;++e)n.safeSetTextureCube(t[e]||go,i[e])}function rt(e){switch(e){case 5126:return Be;case 35664:return Ve;case 35665:return He;case 35666:return Ue;case 35674:return We;case 35675:return Ge;case 35676:return Ke;case 5124:case 35670:return qe;case 35667:case 35671:return Je;case 35668:case 35672:return Ye;case 35669:case 35673:return Xe;case 5125:return Ze;case 36294:return Qe;case 36295:return $e;case 36296:return et;case 35678:case 36198:case 36298:case 36306:case 35682:return tt;case 35680:case 36300:case 36308:case 36293:return nt}}function it(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ze(t.type)}function at(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rt(t.type)}function ot(e){this.id=e,this.seq=[],this.map={}}function st(e,t){e.seq.push(t),e.map[t.id]=t}function ct(e,t,n){let r=e.name,i=r.length;for(So.lastIndex=0;;){let a=So.exec(r),o=So.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){st(n,l===void 0?new it(s,e,t):new at(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ot(s),st(n,e)),n=e}}}function lt(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ct(n,e.getUniformLocation(t,n.name),this)}}function ut(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function dt(e){let t=e.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+`: `+t[e];return t.join(`
`)}function ft(e){switch(e){case Dr:return[`Linear`,`( value )`];case Or:return[`sRGB`,`( value )`];case Ar:return[`RGBE`,`( value )`];case Mr:return[`RGBM`,`( value, 7.0 )`];case Nr:return[`RGBM`,`( value, 16.0 )`];case Pr:return[`RGBD`,`( value, 256.0 )`];case kr:return[`Gamma`,`( value, float( GAMMA_FACTOR ) )`];case jr:return[`LogLuv`,`( value )`];default:return console.warn(`THREE.WebGLProgram: Unsupported encoding:`,e),[`Linear`,`( value )`]}}function pt(e,t,n){let r=e.getShaderParameter(t,35713),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=e.getShaderSource(t);return`THREE.WebGLShader: gl.getShaderInfoLog() `+n+`
`+i+dt(a)}function mt(e,t){let n=ft(t);return`vec4 `+e+`( vec4 value ) { return `+n[0]+`ToLinear`+n[1]+`; }`}function ht(e,t){let n=ft(t);return`vec4 `+e+`( vec4 value ) { return LinearTo`+n[0]+n[1]+`; }`}function gt(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function _t(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(bt).join(`
`)}function vt(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function yt(e,t){let n={},r=e.getProgramParameter(t,35721);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i).name;n[r]=e.getAttribLocation(t,r)}return n}function bt(e){return e!==``}function xt(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function St(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Ct(e){return e.replace(wo,wt)}function wt(e,t){let n=K[t];if(n===void 0)throw Error(`Can not resolve #include <`+t+`>`);return Ct(n)}function Tt(e){return e.replace(Eo,Dt).replace(To,Et)}function Et(e,t,n,r){return console.warn(`WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.`),Dt(e,t,n,r)}function Dt(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ot(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function kt(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function At(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:case 307:t=`ENVMAP_TYPE_CUBE_UV`}return t}function jt(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:case 307:t=`ENVMAP_MODE_REFRACTION`}return t}function Mt(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Nt(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=kt(n),l=At(n),u=jt(n),d=Mt(n),f=e.gammaFactor>0?e.gammaFactor:1,p=n.isWebGL2?``:_t(n),m=vt(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[m].filter(bt).join(`
`),g.length>0&&(g+=`
`),_=[p,m].filter(bt).join(`
`),_.length>0&&(_+=`
`)):(g=[Ot(n),`#define SHADER_NAME `+n.shaderName,m,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.supportsVertexTextures?`#define VERTEX_TEXTURES`:``,`#define GAMMA_FACTOR `+f,`#define MAX_BONES `+n.maxBones,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMap&&n.objectSpaceNormalMap?`#define OBJECTSPACE_NORMALMAP`:``,n.normalMap&&n.tangentSpaceNormalMap?`#define TANGENTSPACE_NORMALMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.displacementMap&&n.supportsVertexTextures?`#define USE_DISPLACEMENTMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.vertexTangents?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUvs?`#define USE_UV`:``,n.uvsVertexOnly?`#define UVS_VERTEX_ONLY`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.useVertexTexture?`#define BONE_TEXTURE`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_MORPHTARGETS`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(bt).join(`
`),_=[p,Ot(n),`#define SHADER_NAME `+n.shaderName,m,n.alphaTest?`#define ALPHATEST `+n.alphaTest+(n.alphaTest%1?``:`.0`):``,`#define GAMMA_FACTOR `+f,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMap&&n.objectSpaceNormalMap?`#define OBJECTSPACE_NORMALMAP`:``,n.normalMap&&n.tangentSpaceNormalMap?`#define TANGENTSPACE_NORMALMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.sheen?`#define USE_SHEEN`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.vertexTangents?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUvs?`#define USE_UV`:``,n.uvsVertexOnly?`#define UVS_VERTEX_ONLY`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.physicallyCorrectLights?`#define PHYSICALLY_CORRECT_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?`#define TEXTURE_LOD_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:gt(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,K.encodings_pars_fragment,n.map?mt(`mapTexelToLinear`,n.mapEncoding):``,n.matcap?mt(`matcapTexelToLinear`,n.matcapEncoding):``,n.envMap?mt(`envMapTexelToLinear`,n.envMapEncoding):``,n.emissiveMap?mt(`emissiveMapTexelToLinear`,n.emissiveMapEncoding):``,n.lightMap?mt(`lightMapTexelToLinear`,n.lightMapEncoding):``,ht(`linearToOutputTexel`,n.outputEncoding),n.depthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(bt).join(`
`)),o=Ct(o),o=xt(o,n),o=St(o,n),s=Ct(s),s=xt(s,n),s=St(s,n),o=Tt(o),s=Tt(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ut(i,35633,y),S=ut(i,35632,b);if(i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h),e.debug.checkShaderErrors){let e=i.getProgramInfoLog(h).trim(),t=i.getShaderInfoLog(x).trim(),n=i.getShaderInfoLog(S).trim(),r=!0,a=!0;if(i.getProgramParameter(h,35714)===!1){r=!1;let t=pt(i,x,`vertex`),n=pt(i,S,`fragment`);console.error(`THREE.WebGLProgram: shader error: `,i.getError(),`35715`,i.getProgramParameter(h,35715),`gl.getProgramInfoLog`,e,t,n)}else e===``?(t===``||n===``)&&(a=!1):console.warn(`THREE.WebGLProgram: gl.getProgramInfoLog()`,e);a&&(this.diagnostics={runnable:r,programLog:e,vertexShader:{log:t,prefix:g},fragmentShader:{log:n,prefix:_}})}i.deleteShader(x),i.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new lt(i,h)),C};let w;return this.getAttributes=function(){return w===void 0&&(w=yt(i,h)),w},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=Co++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function Pt(e,t,n,r,i,a){let o=[],s=r.isWebGL2,c=r.logarithmicDepthBuffer,l=r.floatVertexTextures,u=r.maxVertexUniforms,d=r.vertexTextures,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`},m=`precision.isWebGL2.supportsVertexTextures.outputEncoding.instancing.instancingColor.map.mapEncoding.matcap.matcapEncoding.envMap.envMapMode.envMapEncoding.envMapCubeUV.lightMap.lightMapEncoding.aoMap.emissiveMap.emissiveMapEncoding.bumpMap.normalMap.objectSpaceNormalMap.tangentSpaceNormalMap.clearcoatMap.clearcoatRoughnessMap.clearcoatNormalMap.displacementMap.specularMap.roughnessMap.metalnessMap.gradientMap.alphaMap.combine.vertexColors.vertexAlphas.vertexTangents.vertexUvs.uvsVertexOnly.fog.useFog.fogExp2.flatShading.sizeAttenuation.logarithmicDepthBuffer.skinning.maxBones.useVertexTexture.morphTargets.morphNormals.premultipliedAlpha.numDirLights.numPointLights.numSpotLights.numHemiLights.numRectAreaLights.numDirLightShadows.numPointLightShadows.numSpotLightShadows.shadowMapEnabled.shadowMapType.toneMapping.physicallyCorrectLights.alphaTest.doubleSided.flipSided.numClippingPlanes.numClipIntersection.depthPacking.dithering.sheen.transmissionMap`.split(`.`);function h(e){let t=e.skeleton.bones;if(l)return 1024;{let e=Math.floor((u-20)/4),n=Math.min(e,t.length);return n<t.length?(console.warn(`THREE.WebGLRenderer: Skeleton has `+t.length+` bones. This GPU supports `+n+`.`),0):n}}function g(e){let t;return e&&e.isTexture?t=e.encoding:e&&e.isWebGLRenderTarget?(console.warn(`THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.`),t=e.texture.encoding):t=Dr,t}function _(i,o,u,m,_){let v=m.fog,y=i.isMeshStandardMaterial?m.environment:null,b=t.get(i.envMap||y),x=p[i.type],S=_.isSkinnedMesh?h(_):0;i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let C,w;if(x){let e=lo[x];C=e.vertexShader,w=e.fragmentShader}else C=i.vertexShader,w=i.fragmentShader;let T=e.getRenderTarget();return{isWebGL2:s,shaderID:x,shaderName:i.type,vertexShader:C,fragmentShader:w,defines:i.defines,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,instancing:_.isInstancedMesh===!0,instancingColor:_.isInstancedMesh===!0&&_.instanceColor!==null,supportsVertexTextures:d,outputEncoding:T===null?e.outputEncoding:g(T.texture),map:!!i.map,mapEncoding:g(i.map),matcap:!!i.matcap,matcapEncoding:g(i.matcap),envMap:!!b,envMapMode:b&&b.mapping,envMapEncoding:g(b),envMapCubeUV:!!b&&(b.mapping===306||b.mapping===307),lightMap:!!i.lightMap,lightMapEncoding:g(i.lightMap),aoMap:!!i.aoMap,emissiveMap:!!i.emissiveMap,emissiveMapEncoding:g(i.emissiveMap),bumpMap:!!i.bumpMap,normalMap:!!i.normalMap,objectSpaceNormalMap:i.normalMapType===1,tangentSpaceNormalMap:i.normalMapType===0,clearcoatMap:!!i.clearcoatMap,clearcoatRoughnessMap:!!i.clearcoatRoughnessMap,clearcoatNormalMap:!!i.clearcoatNormalMap,displacementMap:!!i.displacementMap,roughnessMap:!!i.roughnessMap,metalnessMap:!!i.metalnessMap,specularMap:!!i.specularMap,alphaMap:!!i.alphaMap,gradientMap:!!i.gradientMap,sheen:!!i.sheen,transmissionMap:!!i.transmissionMap,combine:i.combine,vertexTangents:i.normalMap&&i.vertexTangents,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&_.geometry&&_.geometry.attributes.color&&_.geometry.attributes.color.itemSize===4,vertexUvs:!!i.map||!!i.bumpMap||!!i.normalMap||!!i.specularMap||!!i.alphaMap||!!i.emissiveMap||!!i.roughnessMap||!!i.metalnessMap||!!i.clearcoatMap||!!i.clearcoatRoughnessMap||!!i.clearcoatNormalMap||!!i.displacementMap||!!i.transmissionMap,uvsVertexOnly:!(i.map||i.bumpMap||i.normalMap||i.specularMap||i.alphaMap||i.emissiveMap||i.roughnessMap||i.metalnessMap||i.clearcoatNormalMap||i.transmissionMap)&&!!i.displacementMap,fog:!!v,useFog:i.fog,fogExp2:v&&v.isFogExp2,flatShading:!!i.flatShading,sizeAttenuation:i.sizeAttenuation,logarithmicDepthBuffer:c,skinning:i.skinning&&S>0,maxBones:S,useVertexTexture:l,morphTargets:i.morphTargets,morphNormals:i.morphNormals,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:i.toneMapped?e.toneMapping:0,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:i.premultipliedAlpha,alphaTest:i.alphaTest,doubleSided:i.side===2,flipSided:i.side===1,depthPacking:i.depthPacking!==void 0&&i.depthPacking,index0AttributeName:i.index0AttributeName,extensionDerivatives:i.extensions&&i.extensions.derivatives,extensionFragDepth:i.extensions&&i.extensions.fragDepth,extensionDrawBuffers:i.extensions&&i.extensions.drawBuffers,extensionShaderTextureLOD:i.extensions&&i.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||n.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:s||n.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:s||n.has(`EXT_shader_texture_lod`),customProgramCacheKey:i.customProgramCacheKey()}}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.fragmentShader),n.push(t.vertexShader)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);if(t.isRawShaderMaterial===!1){for(let e=0;e<m.length;e++)n.push(t[m[e]]);n.push(e.outputEncoding),n.push(e.gammaFactor)}return n.push(t.customProgramCacheKey),n.join()}function y(e){let t=p[e.type],n;if(t){let e=lo[t];n=Ja.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r;for(let e=0,t=o.length;e<t;e++){let t=o[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Nt(e,n,t,i),o.push(r)),r}function x(e){if(--e.usedTimes===0){let t=o.indexOf(e);o[t]=o[o.length-1],o.pop(),e.destroy()}}return{getParameters:_,getProgramCacheKey:v,getUniforms:y,acquireProgram:b,releaseProgram:x,programs:o}}function Ft(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function It(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.program===t.program?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.program.id-t.program.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Lt(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rt(e){let t=[],n=0,r=[],i=[],a={id:-1};function o(){n=0,r.length=0,i.length=0}function s(r,i,o,s,c,l){let u=t[n],d=e.get(o);return u===void 0?(u={id:r.id,object:r,geometry:i,material:o,program:d.program||a,groupOrder:s,renderOrder:r.renderOrder,z:c,group:l},t[n]=u):(u.id=r.id,u.object=r,u.geometry=i,u.material=o,u.program=d.program||a,u.groupOrder=s,u.renderOrder=r.renderOrder,u.z=c,u.group=l),n++,u}function c(e,t,n,a,o,c){let l=s(e,t,n,a,o,c);(n.transparent===!0?i:r).push(l)}function l(e,t,n,a,o,c){let l=s(e,t,n,a,o,c);(n.transparent===!0?i:r).unshift(l)}function u(e,t){r.length>1&&r.sort(e||It),i.length>1&&i.sort(t||Lt)}function d(){for(let e=n,r=t.length;e<r;e++){let n=t[e];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.program=null,n.group=null}}return{opaque:r,transparent:i,init:o,push:c,unshift:l,finish:d,sort:u}}function zt(e){let t=new WeakMap;function n(n,r){let i;return t.has(n)===!1?(i=new Rt(e),t.set(n,[i])):r>=t.get(n).length?(i=new Rt(e),t.get(n).push(i)):i=t.get(n)[r],i}function r(){t=new WeakMap}return{get:n,dispose:r}}function Bt(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new L,color:new B};break;case`SpotLight`:n={position:new L,direction:new L,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function Vt(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}function Ht(e,t){return!!t.castShadow-+!!e.castShadow}function Ut(e,t){let n=new Bt,r=Vt(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let e=0;e<9;e++)i.probe.push(new L);let a=new L,o=new R,s=new R;function c(a){let o=0,s=0,c=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0;a.sort(Ht);for(let e=0,t=a.length;e<t;e++){let t=a[e],_=t.color,v=t.intensity,y=t.distance,b=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)o+=_.r*v,s+=_.g*v,c+=_.b*v;else if(t.isLightProbe)for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],v);else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[l]=n,i.directionalShadowMap[l]=b,i.directionalShadowMatrix[l]=t.shadow.matrix,m++}i.directional[l]=e,l++}else if(t.isSpotLight){let e=n.get(t);if(e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(_).multiplyScalar(v),e.distance=y,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.spotShadow[d]=n,i.spotShadowMap[d]=b,i.spotShadowMatrix[d]=t.shadow.matrix,g++}i.spot[d]=e,d++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(_).multiplyScalar(v),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[f]=e,f++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[u]=n,i.pointShadowMap[u]=b,i.pointShadowMatrix[u]=t.shadow.matrix,h++}i.point[u]=e,u++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(v),e.groundColor.copy(t.groundColor).multiplyScalar(v),i.hemi[p]=e,p++}}f>0&&(t.isWebGL2||e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_FLOAT_1,i.rectAreaLTC2=q.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_HALF_1,i.rectAreaLTC2=q.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=o,i.ambient[1]=s,i.ambient[2]=c;let _=i.hash;(_.directionalLength!==l||_.pointLength!==u||_.spotLength!==d||_.rectAreaLength!==f||_.hemiLength!==p||_.numDirectionalShadows!==m||_.numPointShadows!==h||_.numSpotShadows!==g)&&(i.directional.length=l,i.spot.length=d,i.rectArea.length=f,i.point.length=u,i.hemi.length=p,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=h,i.pointShadowMap.length=h,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=h,i.spotShadowMatrix.length=g,_.directionalLength=l,_.pointLength=u,_.spotLength=d,_.rectAreaLength=f,_.hemiLength=p,_.numDirectionalShadows=m,_.numPointShadows=h,_.numSpotShadows=g,i.version=Do++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),e.direction.normalize(),u++}}}return{setup:c,setupView:l,state:i}}function Wt(e,t){let n=new Ut(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(){n.setup(r)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Gt(e,t){let n=new WeakMap;function r(r,i=0){let a;return n.has(r)===!1?(a=new Wt(e,t),n.set(r,[a])):i>=n.get(r).length?(a=new Wt(e,t),n.get(r).push(a)):a=n.get(r)[i],a}function i(){n=new WeakMap}return{get:r,dispose:i}}function Kt(e,t,n){let r=new so,i=new F,a=new F,o=new I,s=[],c=[],l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new G({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new F},radius:{value:4}},vertexShader:jo,fragmentShader:Ao}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new U;m.setAttribute(`position`,new H(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let p=d.getFrameExtents();if(i.multiply(p),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/p.x),i.x=a.x*p.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/p.y),i.y=a.y*p.y,d.mapSize.y=a.y)),d.map===null&&!d.isPointLightShadow&&this.type===3){let e={minFilter:or,magFilter:or,format:hr};d.map=new Xr(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.mapPass=new Xr(i.x,i.y,e),d.camera.updateProjectionMatrix()}if(d.map===null){let e={minFilter:rr,magFilter:rr,format:hr};d.map=new Xr(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let m=d.getViewportCount();for(let e=0;e<m;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),x(n,s,d.camera,l,this.type)}!d.isPointLightShadow&&this.type===3&&_(d,s),d.needsUpdate=!1}g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function _(n,r){let i=t.update(h);f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,p,h,null)}function v(e,t,n){let r=e<<0|t<<1|n<<2,i=s[r];return i===void 0&&(i=new Oo({depthPacking:Ir,morphTargets:e,skinning:t}),s[r]=i),i}function y(e,t,n){let r=e<<0|t<<1|n<<2,i=c[r];return i===void 0&&(i=new ko({morphTargets:e,skinning:t}),c[r]=i),i}function b(t,n,r,i,a,o,s){let c=null,u=v,f=t.customDepthMaterial;if(i.isPointLight===!0&&(u=y,f=t.customDistanceMaterial),f===void 0){let e=!1;r.morphTargets===!0&&(e=n.morphAttributes&&n.morphAttributes.position&&n.morphAttributes.position.length>0);let i=!1;t.isSkinnedMesh===!0&&(r.skinning===!0?i=!0:console.warn(`THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:`,t));let a=t.isInstancedMesh===!0;c=u(e,i,a)}else c=f;if(e.localClippingEnabled&&r.clipShadows===!0&&r.clippingPlanes.length!==0){let e=c.uuid,t=r.uuid,n=l[e];n===void 0&&(n={},l[e]=n);let i=n[t];i===void 0&&(i=c.clone(),n[t]=i),c=i}return c.visible=r.visible,c.wireframe=r.wireframe,s===3?c.side=r.shadowSide===null?r.side:r.shadowSide:c.side=r.shadowSide===null?d[r.side]:r.shadowSide,c.clipShadows=r.clipShadows,c.clippingPlanes=r.clippingPlanes,c.clipIntersection=r.clipIntersection,c.wireframeLinewidth=r.wireframeLinewidth,c.linewidth=r.linewidth,i.isPointLight===!0&&c.isMeshDistanceMaterial===!0&&(c.referencePosition.setFromMatrixPosition(i.matrixWorld),c.nearDistance=a,c.farDistance=o),c}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),i=n.material;if(Array.isArray(i)){let t=r.groups;for(let c=0,l=t.length;c<l;c++){let l=t[c],u=i[l.materialIndex];if(u&&u.visible){let t=b(n,r,u,o,a.near,a.far,s);e.renderBufferDirect(a,null,r,t,n,l)}}}else if(i.visible){let t=b(n,r,i,o,a.near,a.far,s);e.renderBufferDirect(a,null,r,t,n,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}}function qt(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new I,r=null,i=new I(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(e){e?se(2929):ce(2929)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){if(t)switch(t){case 0:e.depthFunc(512);break;case 1:e.depthFunc(519);break;case 2:e.depthFunc(513);break;case 3:e.depthFunc(515);break;case 4:e.depthFunc(514);break;case 5:e.depthFunc(518);break;case 6:e.depthFunc(516);break;case 7:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(e){t||(e?se(2960):ce(2960))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u={},d=null,f={},p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=!1,C=null,w=null,T=null,E=null,D=null,O=e.getParameter(35661),ee=!1,te=0,k=e.getParameter(7938);k.indexOf(`WebGL`)===-1?k.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(k)[1]),ee=te>=1);let A=null,ne={},re=new I(0,0,e.canvas.width,e.canvas.height),ie=new I(0,0,e.canvas.width,e.canvas.height);function ae(t,n,r){let i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let t=0;t<r;t++)e.texImage2D(n+t,0,6408,1,1,0,6408,5121,i);return a}let oe={};oe[3553]=ae(3553,3553,1),oe[34067]=ae(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),se(2929),c.setFunc(3),ge(!1),_e(1),se(2884),me(0);function se(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t){t!==d&&(e.bindFramebuffer(36160,t),d=t)}function ue(t,n){n===null&&d!==null&&(n=d),f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,r&&(t===36009&&(f[36160]=n),t===36160&&(f[36009]=n)))}function de(t){return p!==t&&(e.useProgram(t),p=t,!0)}let fe={100:32774,101:32778,102:32779};if(r)fe[103]=32775,fe[104]=32776;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(fe[103]=e.MIN_EXT,fe[104]=e.MAX_EXT)}let pe={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function me(t,n,r,i,a,o,s,c){if(t===0){m===!0&&(ce(3042),m=!1);return}if(m===!1&&(se(3042),m=!0),t!==5){if(t!==h||c!==S){if((g!==100||y!==100)&&(e.blendEquation(32774),g=100,y=100),c)switch(t){case 1:e.blendFuncSeparate(1,771,1,771);break;case 2:e.blendFunc(1,1);break;case 3:e.blendFuncSeparate(0,0,769,771);break;case 4:e.blendFuncSeparate(0,768,0,770);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(770,771,1,771);break;case 2:e.blendFunc(770,1);break;case 3:e.blendFunc(0,769);break;case 4:e.blendFunc(0,768);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,h=t,S=c}return}a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(fe[n],fe[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),_=r,v=i,b=o,x=s),h=t,S=null}function he(e,t){e.side===2?ce(2884):se(2884);let n=e.side===1;t&&(n=!n),ge(n),e.blending===1&&e.transparent===!1?me(0):me(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),c.setFunc(e.depthFunc),c.setTest(e.depthTest),c.setMask(e.depthWrite),s.setMask(e.colorWrite);let r=e.stencilWrite;l.setTest(r),r&&(l.setMask(e.stencilWriteMask),l.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),l.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),ye(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),e.alphaToCoverage===!0?se(32926):ce(32926)}function ge(t){C!==t&&(t?e.frontFace(2304):e.frontFace(2305),C=t)}function _e(t){t===0?ce(2884):(se(2884),t!==w&&(t===1?e.cullFace(1029):t===2?e.cullFace(1028):e.cullFace(1032))),w=t}function ve(t){t!==T&&(ee&&e.lineWidth(t),T=t)}function ye(t,n,r){t?(se(32823),(E!==n||D!==r)&&(e.polygonOffset(n,r),E=n,D=r)):ce(32823)}function be(e){e?se(3089):ce(3089)}function xe(t){t===void 0&&(t=33984+O-1),A!==t&&(e.activeTexture(t),A=t)}function Se(t,n){A===null&&xe();let r=ne[A];r===void 0&&(r={type:void 0,texture:void 0},ne[A]=r),(r.type!==t||r.texture!==n)&&(e.bindTexture(t,n||oe[t]),r.type=t,r.texture=n)}function Ce(){let t=ne[A];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function j(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function M(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function De(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),r===!0&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},A=null,ne={},d=null,f={},p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=!1,C=null,w=null,T=null,E=null,D=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:se,disable:ce,bindFramebuffer:ue,bindXRFramebuffer:le,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:j,texImage2D:we,texImage3D:Te,scissor:Ee,viewport:M,reset:De}}function Jt(e,t,n,r,i,a,o){let s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=new WeakMap,p,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):document.createElementNS(`http://www.w3.org/1999/xhtml`,`canvas`)}function g(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?b:Math.floor,a=r(i*e.width),o=r(i*e.height);p===void 0&&(p=h(a,o));let s=n?h(a,o):p;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function _(e){return v(e.width)&&v(e.height)}function y(e){return s?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function x(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function S(t,n,i,a){e.generateMipmap(t);let o=r.get(n);o.__maxMipLevel=Math.log2(Math.max(i,a))}function C(n,r,i){if(s===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let a=r;return r===6403&&(i===5126&&(a=33326),i===5131&&(a=33325),i===5121&&(a=33321)),r===6407&&(i===5126&&(a=34837),i===5131&&(a=34843),i===5121&&(a=32849)),r===6408&&(i===5126&&(a=34836),i===5131&&(a=34842),i===5121&&(a=32856)),(a===33325||a===33326||a===34842||a===34836)&&t.get(`EXT_color_buffer_float`),a}function w(e){return e===1003||e===1004||e===1005?9728:9729}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&f.delete(t),o.memory.textures--}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),o.memory.textures--}function D(t){let n=r.get(t);n.__webglInit!==void 0&&(e.deleteTexture(n.__webglTexture),r.remove(t))}function O(t){let n=t.texture,i=r.get(t),a=r.get(n);if(t){if(a.__webglTexture!==void 0&&e.deleteTexture(a.__webglTexture),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]),i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer),i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer&&e.deleteRenderbuffer(i.__webglColorRenderbuffer),i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer);r.remove(n),r.remove(t)}}let ee=0;function te(){ee=0}function k(){let e=ee;return e>=c&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+c),ee+=1,e}function A(e,t){let i=r.get(e);if(e.isVideoTexture&&ye(e),e.version>0&&i.__version!==e.version){let n=e.image;if(n===void 0)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is undefined`);else if(n.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{le(i,e,t);return}}n.activeTexture(33984+t),n.bindTexture(3553,i.__webglTexture)}function ne(e,t){let i=r.get(e);if(e.version>0&&i.__version!==e.version){le(i,e,t);return}n.activeTexture(33984+t),n.bindTexture(35866,i.__webglTexture)}function re(e,t){let i=r.get(e);if(e.version>0&&i.__version!==e.version){le(i,e,t);return}n.activeTexture(33984+t),n.bindTexture(32879,i.__webglTexture)}function ie(e,t){let i=r.get(e);if(e.version>0&&i.__version!==e.version){ue(i,e,t);return}n.activeTexture(33984+t),n.bindTexture(34067,i.__webglTexture)}let ae={[er]:10497,[tr]:33071,[nr]:33648},oe={[rr]:9728,[ir]:9984,[ar]:9986,[or]:9729,[sr]:9985,[cr]:9987};function se(n,a,o){if(o?(e.texParameteri(n,10242,ae[a.wrapS]),e.texParameteri(n,10243,ae[a.wrapT]),(n===32879||n===35866)&&e.texParameteri(n,32882,ae[a.wrapR]),e.texParameteri(n,10240,oe[a.magFilter]),e.texParameteri(n,10241,oe[a.minFilter])):(e.texParameteri(n,10242,33071),e.texParameteri(n,10243,33071),(n===32879||n===35866)&&e.texParameteri(n,32882,33071),(a.wrapS!==1001||a.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,10240,w(a.magFilter)),e.texParameteri(n,10241,w(a.minFilter)),a.minFilter!==1003&&a.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),t.has(`EXT_texture_filter_anisotropic`)===!0){let o=t.get(`EXT_texture_filter_anisotropic`);if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1||s===!1&&a.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function ce(t,n){t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T),t.__webglTexture=e.createTexture(),o.memory.textures++)}function le(t,r,i){let o=3553;r.isDataTexture2DArray&&(o=35866),r.isDataTexture3D&&(o=32879),ce(t,r),n.activeTexture(33984+i),n.bindTexture(o,t.__webglTexture),e.pixelStorei(37440,r.flipY),e.pixelStorei(37441,r.premultiplyAlpha),e.pixelStorei(3317,r.unpackAlignment),e.pixelStorei(37443,0);let c=y(r)&&_(r.image)===!1,l=g(r.image,c,!1,u),d=_(l)||s,f=a.convert(r.format),p=a.convert(r.type),m=C(r.internalFormat,f,p);se(o,r,d);let h,v=r.mipmaps;if(r.isDepthTexture)m=6402,s?m=r.type===1015?36012:r.type===1014?33190:r.type===1020?35056:33189:r.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),r.format===1026&&m===6402&&r.type!==1012&&r.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),r.type=ur,p=a.convert(r.type)),r.format===1027&&m===6402&&(m=34041,r.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),r.type=pr,p=a.convert(r.type))),n.texImage2D(3553,0,m,l.width,l.height,0,f,p,null);else if(r.isDataTexture){if(v.length>0&&d){for(let e=0,t=v.length;e<t;e++)h=v[e],n.texImage2D(3553,e,m,h.width,h.height,0,f,p,h.data);r.generateMipmaps=!1,t.__maxMipLevel=v.length-1}else n.texImage2D(3553,0,m,l.width,l.height,0,f,p,l.data),t.__maxMipLevel=0}else if(r.isCompressedTexture){for(let e=0,t=v.length;e<t;e++)h=v[e],r.format!==1023&&r.format!==1022?f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):n.compressedTexImage2D(3553,e,m,h.width,h.height,0,h.data):n.texImage2D(3553,e,m,h.width,h.height,0,f,p,h.data);t.__maxMipLevel=v.length-1}else if(r.isDataTexture2DArray)n.texImage3D(35866,0,m,l.width,l.height,l.depth,0,f,p,l.data),t.__maxMipLevel=0;else if(r.isDataTexture3D)n.texImage3D(32879,0,m,l.width,l.height,l.depth,0,f,p,l.data),t.__maxMipLevel=0;else if(v.length>0&&d){for(let e=0,t=v.length;e<t;e++)h=v[e],n.texImage2D(3553,e,m,f,p,h);r.generateMipmaps=!1,t.__maxMipLevel=v.length-1}else n.texImage2D(3553,0,m,f,p,l),t.__maxMipLevel=0;x(r,d)&&S(o,r,l.width,l.height),t.__version=r.version,r.onUpdate&&r.onUpdate(r)}function ue(t,r,i){if(r.image.length!==6)return;ce(t,r),n.activeTexture(33984+i),n.bindTexture(34067,t.__webglTexture),e.pixelStorei(37440,r.flipY),e.pixelStorei(37441,r.premultiplyAlpha),e.pixelStorei(3317,r.unpackAlignment),e.pixelStorei(37443,0);let o=r&&(r.isCompressedTexture||r.image[0].isCompressedTexture),c=r.image[0]&&r.image[0].isDataTexture,u=[];for(let e=0;e<6;e++)!o&&!c?u[e]=g(r.image[e],!1,!0,l):u[e]=c?r.image[e].image:r.image[e];let d=u[0],f=_(d)||s,p=a.convert(r.format),m=a.convert(r.type),h=C(r.internalFormat,p,m);se(34067,r,f);let v;if(o){for(let e=0;e<6;e++){v=u[e].mipmaps;for(let t=0;t<v.length;t++){let i=v[t];r.format!==1023&&r.format!==1022?p===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):n.compressedTexImage2D(34069+e,t,h,i.width,i.height,0,i.data):n.texImage2D(34069+e,t,h,i.width,i.height,0,p,m,i.data)}}t.__maxMipLevel=v.length-1}else{v=r.mipmaps;for(let e=0;e<6;e++)if(c){n.texImage2D(34069+e,0,h,u[e].width,u[e].height,0,p,m,u[e].data);for(let t=0;t<v.length;t++){let r=v[t].image[e].image;n.texImage2D(34069+e,t+1,h,r.width,r.height,0,p,m,r.data)}}else{n.texImage2D(34069+e,0,h,p,m,u[e]);for(let t=0;t<v.length;t++){let r=v[t];n.texImage2D(34069+e,t+1,h,p,m,r.image[e])}}t.__maxMipLevel=v.length}x(r,f)&&S(34067,r,d.width,d.height),t.__version=r.version,r.onUpdate&&r.onUpdate(r)}function de(t,i,o,s){let c=i.texture,l=a.convert(c.format),u=a.convert(c.type),d=C(c.internalFormat,l,u);s===32879||s===35866?n.texImage3D(s,0,d,i.width,i.height,i.depth,0,l,u,null):n.texImage2D(s,0,d,i.width,i.height,0,l,u,null),n.bindFramebuffer(36160,t),e.framebufferTexture2D(36160,o,s,r.get(c).__webglTexture,0),n.bindFramebuffer(36160,null)}function fe(t,n,r){if(e.bindRenderbuffer(36161,t),n.depthBuffer&&!n.stencilBuffer){let i=33189;if(r){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=36012:t.type===1014&&(i=33190));let r=ve(n);e.renderbufferStorageMultisample(36161,r,i,n.width,n.height)}else e.renderbufferStorage(36161,i,n.width,n.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(n.depthBuffer&&n.stencilBuffer){if(r){let t=ve(n);e.renderbufferStorageMultisample(36161,t,35056,n.width,n.height)}else e.renderbufferStorage(36161,34041,n.width,n.height);e.framebufferRenderbuffer(36160,33306,36161,t)}else{let t=n.texture,i=a.convert(t.format),o=a.convert(t.type),s=C(t.internalFormat,i,o);if(r){let t=ve(n);e.renderbufferStorageMultisample(36161,t,s,n.width,n.height)}else e.renderbufferStorage(36161,s,n.width,n.height)}e.bindRenderbuffer(36161,null)}function pe(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(36160,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),A(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture;if(i.depthTexture.format===1026)e.framebufferTexture2D(36160,36096,3553,a,0);else if(i.depthTexture.format===1027)e.framebufferTexture2D(36160,33306,3553,a,0);else throw Error(`Unknown depthTexture format`)}function me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);pe(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(36160,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),fe(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(36160,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),fe(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(36160,null)}function he(t){let i=t.texture,c=r.get(t),l=r.get(i);t.addEventListener(`dispose`,E),l.__webglTexture=e.createTexture(),l.__version=i.version,o.memory.textures++;let u=t.isWebGLCubeRenderTarget===!0,d=t.isWebGLMultisampleRenderTarget===!0,f=i.isDataTexture3D||i.isDataTexture2DArray,p=_(t)||s;if(s&&i.format===1022&&(i.type===1015||i.type===1016)&&(i.format=hr,console.warn(`THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.`)),u){c.__webglFramebuffer=[];for(let t=0;t<6;t++)c.__webglFramebuffer[t]=e.createFramebuffer()}else if(c.__webglFramebuffer=e.createFramebuffer(),d){if(s){c.__webglMultisampledFramebuffer=e.createFramebuffer(),c.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,c.__webglColorRenderbuffer);let r=a.convert(i.format),o=a.convert(i.type),s=C(i.internalFormat,r,o),l=ve(t);e.renderbufferStorageMultisample(36161,l,s,t.width,t.height),n.bindFramebuffer(36160,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,c.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),t.depthBuffer&&(c.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(c.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(36160,null)}else console.warn(`THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.`)}if(u){n.bindTexture(34067,l.__webglTexture),se(34067,i,p);for(let e=0;e<6;e++)de(c.__webglFramebuffer[e],t,36064,34069+e);x(i,p)&&S(34067,i,t.width,t.height),n.bindTexture(34067,null)}else{let e=3553;f&&(s?e=i.isDataTexture3D?32879:35866:console.warn(`THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.`)),n.bindTexture(e,l.__webglTexture),se(e,i,p),de(c.__webglFramebuffer,t,36064,e),x(i,p)&&S(3553,i,t.width,t.height),n.bindTexture(3553,null)}t.depthBuffer&&me(t)}function ge(e){let t=e.texture;if(x(t,_(e)||s)){let i=e.isWebGLCubeRenderTarget?34067:3553,a=r.get(t).__webglTexture;n.bindTexture(i,a),S(i,t,e.width,e.height),n.bindTexture(i,null)}}function _e(t){if(t.isWebGLMultisampleRenderTarget){if(s){let i=t.width,a=t.height,o=16384;t.depthBuffer&&(o|=256),t.stencilBuffer&&(o|=1024);let s=r.get(t);n.bindFramebuffer(36008,s.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,s.__webglFramebuffer),e.blitFramebuffer(0,0,i,a,0,0,i,a,o,9728),n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,s.__webglMultisampledFramebuffer)}else console.warn(`THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.`)}}function ve(e){return s&&e.isWebGLMultisampleRenderTarget?Math.min(d,e.samples):0}function ye(e){let t=o.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}let be=!1,xe=!1;function Se(e,t){e&&e.isWebGLRenderTarget&&(be===!1&&(console.warn(`THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.`),be=!0),e=e.texture),A(e,t)}function Ce(e,t){e&&e.isWebGLCubeRenderTarget&&(xe===!1&&(console.warn(`THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.`),xe=!0),e=e.texture),ie(e,t)}this.allocateTextureUnit=k,this.resetTextureUnits=te,this.setTexture2D=A,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=_e,this.safeSetTexture2D=Se,this.safeSetTextureCube=Ce}function Yt(e,t,n){let r=n.isWebGL2;function i(e){let n;if(e===1009)return 5121;if(e===1017)return 32819;if(e===1018)return 32820;if(e===1019)return 33635;if(e===1010)return 5120;if(e===1011)return 5122;if(e===1012)return 5123;if(e===1013)return 5124;if(e===1014)return 5125;if(e===1015)return 5126;if(e===1016)return r?5131:(n=t.get(`OES_texture_half_float`),n===null?null:n.HALF_FLOAT_OES);if(e===1021)return 6406;if(e===1022)return 6407;if(e===1023)return 6408;if(e===1024)return 6409;if(e===1025)return 6410;if(e===1026)return 6402;if(e===1027)return 34041;if(e===1028)return 6403;if(e===1029)return 36244;if(e===1030)return 33319;if(e===1031)return 33320;if(e===1032)return 36248;if(e===1033)return 36249;if(e===33776||e===33777||e===33778||e===33779){if(n=t.get(`WEBGL_compressed_texture_s3tc`),n!==null){if(e===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(e===35840||e===35841||e===35842||e===35843){if(n=t.get(`WEBGL_compressed_texture_pvrtc`),n!==null){if(e===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(e===36196)return n=t.get(`WEBGL_compressed_texture_etc1`),n===null?null:n.COMPRESSED_RGB_ETC1_WEBGL;if((e===37492||e===37496)&&(n=t.get(`WEBGL_compressed_texture_etc`),n!==null)){if(e===37492)return n.COMPRESSED_RGB8_ETC2;if(e===37496)return n.COMPRESSED_RGBA8_ETC2_EAC}if(e===37808||e===37809||e===37810||e===37811||e===37812||e===37813||e===37814||e===37815||e===37816||e===37817||e===37818||e===37819||e===37820||e===37821||e===37840||e===37841||e===37842||e===37843||e===37844||e===37845||e===37846||e===37847||e===37848||e===37849||e===37850||e===37851||e===37852||e===37853)return n=t.get(`WEBGL_compressed_texture_astc`),n===null?null:e;if(e===36492)return n=t.get(`EXT_texture_compression_bptc`),n===null?null:e;if(e===1020)return r?34042:(n=t.get(`WEBGL_depth_texture`),n===null?null:n.UNSIGNED_INT_24_8_WEBGL)}return{convert:i}}function Xt(e){function t(e,t){e.fogColor.value.copy(t.color),t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)}function n(e,t,n,_){t.isMeshBasicMaterial?r(e,t):t.isMeshLambertMaterial?(r(e,t),c(e,t)):t.isMeshToonMaterial?(r(e,t),u(e,t)):t.isMeshPhongMaterial?(r(e,t),l(e,t)):t.isMeshStandardMaterial?(r(e,t),t.isMeshPhysicalMaterial?f(e,t):d(e,t)):t.isMeshMatcapMaterial?(r(e,t),p(e,t)):t.isMeshDepthMaterial?(r(e,t),m(e,t)):t.isMeshDistanceMaterial?(r(e,t),h(e,t)):t.isMeshNormalMaterial?(r(e,t),g(e,t)):t.isLineBasicMaterial?(i(e,t),t.isLineDashedMaterial&&a(e,t)):t.isPointsMaterial?o(e,t,n,_):t.isSpriteMaterial?s(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function r(t,n){t.opacity.value=n.opacity,n.color&&t.diffuse.value.copy(n.color),n.emissive&&t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(t.map.value=n.map),n.alphaMap&&(t.alphaMap.value=n.alphaMap),n.specularMap&&(t.specularMap.value=n.specularMap);let r=e.get(n).envMap;if(r){t.envMap.value=r,t.flipEnvMap.value=r.isCubeTexture&&r._needsFlipEnvMap?-1:1,t.reflectivity.value=n.reflectivity,t.refractionRatio.value=n.refractionRatio;let i=e.get(r).__maxMipLevel;i!==void 0&&(t.maxMipLevel.value=i)}n.lightMap&&(t.lightMap.value=n.lightMap,t.lightMapIntensity.value=n.lightMapIntensity),n.aoMap&&(t.aoMap.value=n.aoMap,t.aoMapIntensity.value=n.aoMapIntensity);let i;n.map?i=n.map:n.specularMap?i=n.specularMap:n.displacementMap?i=n.displacementMap:n.normalMap?i=n.normalMap:n.bumpMap?i=n.bumpMap:n.roughnessMap?i=n.roughnessMap:n.metalnessMap?i=n.metalnessMap:n.alphaMap?i=n.alphaMap:n.emissiveMap?i=n.emissiveMap:n.clearcoatMap?i=n.clearcoatMap:n.clearcoatNormalMap?i=n.clearcoatNormalMap:n.clearcoatRoughnessMap&&(i=n.clearcoatRoughnessMap),i!==void 0&&(i.isWebGLRenderTarget&&(i=i.texture),i.matrixAutoUpdate===!0&&i.updateMatrix(),t.uvTransform.value.copy(i.matrix));let a;n.aoMap?a=n.aoMap:n.lightMap&&(a=n.lightMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),t.uv2Transform.value.copy(a.matrix))}function i(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity}function a(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function o(e,t,n,r){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*n,e.scale.value=r*.5,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);let i;t.map?i=t.map:t.alphaMap&&(i=t.alphaMap),i!==void 0&&(i.matrixAutoUpdate===!0&&i.updateMatrix(),e.uvTransform.value.copy(i.matrix))}function s(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);let n;t.map?n=t.map:t.alphaMap&&(n=t.alphaMap),n!==void 0&&(n.matrixAutoUpdate===!0&&n.updateMatrix(),e.uvTransform.value.copy(n.matrix))}function c(e,t){t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap)}function l(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===1&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===1&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function u(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===1&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===1&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function d(t,n){t.roughness.value=n.roughness,t.metalness.value=n.metalness,n.roughnessMap&&(t.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(t.metalnessMap.value=n.metalnessMap),n.emissiveMap&&(t.emissiveMap.value=n.emissiveMap),n.bumpMap&&(t.bumpMap.value=n.bumpMap,t.bumpScale.value=n.bumpScale,n.side===1&&(t.bumpScale.value*=-1)),n.normalMap&&(t.normalMap.value=n.normalMap,t.normalScale.value.copy(n.normalScale),n.side===1&&t.normalScale.value.negate()),n.displacementMap&&(t.displacementMap.value=n.displacementMap,t.displacementScale.value=n.displacementScale,t.displacementBias.value=n.displacementBias),e.get(n).envMap&&(t.envMapIntensity.value=n.envMapIntensity)}function f(e,t){d(e,t),e.reflectivity.value=t.reflectivity,e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.sheen&&e.sheen.value.copy(t.sheen),t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap),t.clearcoatNormalMap&&(e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),e.clearcoatNormalMap.value=t.clearcoatNormalMap,t.side===1&&e.clearcoatNormalScale.value.negate()),e.transmission.value=t.transmission,t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap)}function p(e,t){t.matcap&&(e.matcap.value=t.matcap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===1&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===1&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function m(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function h(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),e.referencePosition.value.copy(t.referencePosition),e.nearDistance.value=t.nearDistance,e.farDistance.value=t.farDistance}function g(e,t){t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===1&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===1&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Zt(){let e=document.createElementNS(`http://www.w3.org/1999/xhtml`,`canvas`);return e.style.display=`block`,e}function N(e){e||={};let t=e.canvas===void 0?Zt():e.canvas,n=e.context===void 0?null:e.context,r=e.alpha!==void 0&&e.alpha,i=e.depth===void 0||e.depth,a=e.stencil===void 0||e.stencil,o=e.antialias!==void 0&&e.antialias,s=e.premultipliedAlpha===void 0||e.premultipliedAlpha,c=e.preserveDrawingBuffer!==void 0&&e.preserveDrawingBuffer,l=e.powerPreference===void 0?`default`:e.powerPreference,u=e.failIfMajorPerformanceCaveat!==void 0&&e.failIfMajorPerformanceCaveat,d=null,f=null,p=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Dr,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let h=this,g=!1,_=0,v=0,b=null,x=-1,S=null,C=new I,w=new I,T=null,E=t.width,D=t.height,O=1,ee=null,te=null,k=new I(0,0,E,D),A=new I(0,0,E,D),me=!1,he=new so,ve=!1,ye=!1,be=new R,xe=new L,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return b===null?O:1}let j=n;function we(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:r,depth:i,stencil:a,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(t.addEventListener(`webglcontextlost`,Je,!1),t.addEventListener(`webglcontextrestored`,Ye,!1),j===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(h.isWebGL1Renderer===!0&&t.shift(),j=we(t,e),j===null)throw we(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let Te,Ee,M,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge;function Ke(){Te=new ue(j),Ee=new se(j,Te,e),Te.init(Ee),We=new Yt(j,Te,Ee),M=new qt(j,Te,Ee),De=new pe(j),Oe=new Ft,ke=new Jt(j,Te,M,Oe,Ee,We,De),Ae=new le(h),je=new re(j,Ee),Ge=new ae(j,Te,je,Ee),Me=new de(j,je,De,Ge),Ne=new _e(j,Me,je,De),Ve=new ge(j),Re=new ce(Oe),Pe=new Pt(h,Ae,Te,Ee,Ge,Re),Fe=new Xt(Oe),Ie=new zt(Oe),Le=new Gt(Te,Ee),Be=new ie(h,Ae,M,Ne,s),ze=new Kt(h,Ne,Ee),He=new oe(j,Te,De,Ee),Ue=new fe(j,Te,De,Ee),De.programs=Pe.programs,h.capabilities=Ee,h.extensions=Te,h.properties=Oe,h.renderLists=Ie,h.shadowMap=ze,h.state=M,h.info=De}Ke();let qe=new Io(h,j);this.xr=qe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(e){e!==void 0&&(O=e,this.setSize(E,D,!1))},this.getSize=function(e){return e===void 0&&(console.warn(`WebGLRenderer: .getsize() now requires a Vector2 as an argument`),e=new F),e.set(E,D)},this.setSize=function(e,n,r){if(qe.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}E=e,D=n,t.width=Math.floor(e*O),t.height=Math.floor(n*O),r!==!1&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e===void 0&&(console.warn(`WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument`),e=new F),e.set(E*O,D*O).floor()},this.setDrawingBufferSize=function(e,n,r){E=e,D=n,O=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e===void 0&&(console.warn(`WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument`),e=new I),e.copy(C)},this.getViewport=function(e){return e.copy(k)},this.setViewport=function(e,t,n,r){e.isVector4?k.set(e.x,e.y,e.z,e.w):k.set(e,t,n,r),M.viewport(C.copy(k).multiplyScalar(O).floor())},this.getScissor=function(e){return e.copy(A)},this.setScissor=function(e,t,n,r){e.isVector4?A.set(e.x,e.y,e.z,e.w):A.set(e,t,n,r),M.scissor(w.copy(A).multiplyScalar(O).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){M.setScissorTest(me=e)},this.setOpaqueSort=function(e){ee=e},this.setTransparentSort=function(e){te=e},this.getClearColor=function(e){return e===void 0&&(console.warn(`WebGLRenderer: .getClearColor() now requires a Color as an argument`),e=new B),e.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(e,t,n){let r=0;(e===void 0||e)&&(r|=16384),(t===void 0||t)&&(r|=256),(n===void 0||n)&&(r|=1024),j.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),Ie.dispose(),Le.dispose(),Oe.dispose(),Ae.dispose(),Ne.dispose(),Ge.dispose(),qe.dispose(),qe.removeEventListener(`sessionstart`,nt),qe.removeEventListener(`sessionend`,rt),it.stop()};function Je(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),g=!0}function Ye(){console.log(`THREE.WebGLRenderer: Context Restored.`),g=!1;let e=De.autoReset,t=ze.enabled,n=ze.autoUpdate,r=ze.needsUpdate,i=ze.type;Ke(),De.autoReset=e,ze.enabled=t,ze.autoUpdate=n,ze.needsUpdate=r,ze.type=i}function Xe(e){let t=e.target;t.removeEventListener(`dispose`,Xe),Ze(t)}function Ze(e){Qe(e),Oe.remove(e)}function Qe(e){let t=Oe.get(e).programs;t!==void 0&&t.forEach(function(e){Pe.releaseProgram(e)})}function $e(e,t){e.render(function(e){h.renderBufferImmediate(e,t)})}this.renderBufferImmediate=function(e,t){Ge.initAttributes();let n=Oe.get(e);e.hasPositions&&!n.position&&(n.position=j.createBuffer()),e.hasNormals&&!n.normal&&(n.normal=j.createBuffer()),e.hasUvs&&!n.uv&&(n.uv=j.createBuffer()),e.hasColors&&!n.color&&(n.color=j.createBuffer());let r=t.getAttributes();e.hasPositions&&(j.bindBuffer(34962,n.position),j.bufferData(34962,e.positionArray,35048),Ge.enableAttribute(r.position),j.vertexAttribPointer(r.position,3,5126,!1,0,0)),e.hasNormals&&(j.bindBuffer(34962,n.normal),j.bufferData(34962,e.normalArray,35048),Ge.enableAttribute(r.normal),j.vertexAttribPointer(r.normal,3,5126,!1,0,0)),e.hasUvs&&(j.bindBuffer(34962,n.uv),j.bufferData(34962,e.uvArray,35048),Ge.enableAttribute(r.uv),j.vertexAttribPointer(r.uv,2,5126,!1,0,0)),e.hasColors&&(j.bindBuffer(34962,n.color),j.bufferData(34962,e.colorArray,35048),Ge.enableAttribute(r.color),j.vertexAttribPointer(r.color,3,5126,!1,0,0)),Ge.disableUnusedAttributes(),j.drawArrays(4,0,e.count),e.count=0},this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=dt(e,t,r,i);M.setMaterial(r,o);let c=n.index,l=n.attributes.position;if(c===null){if(l===void 0||l.count===0)return}else if(c.count===0)return;let u=1;r.wireframe===!0&&(c=Me.getWireframeAttribute(n),u=2),(r.morphTargets||r.morphNormals)&&Ve.update(i,n,r,s),Ge.setup(i,r,s,n,c);let d,f=He;c!==null&&(d=je.get(c),f=Ue,f.setIndex(d));let p=c===null?l.count:c.count,m=n.drawRange.start*u,h=n.drawRange.count*u,g=a===null?0:a.start*u,_=a===null?1/0:a.count*u,v=Math.max(m,g),y=Math.min(p,m+h,g+_)-1,b=Math.max(0,y-v+1);if(b!==0){if(i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*Ce()),f.setMode(1)):f.setMode(4);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*Ce()),i.isLineSegments?f.setMode(1):i.isLineLoop?f.setMode(2):f.setMode(3)}else i.isPoints?f.setMode(0):i.isSprite&&f.setMode(4);if(i.isInstancedMesh)f.renderInstances(v,b,i.count);else if(n.isInstancedBufferGeometry){let e=Math.min(n.instanceCount,n._maxInstanceCount);f.renderInstances(v,b,e)}else f.render(v,b)}},this.compile=function(e,t){f=Le.get(e),f.init(),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(f.pushLight(e),e.castShadow&&f.pushShadow(e))}),f.setupLights(),e.traverse(function(t){let n=t.material;if(n){if(Array.isArray(n))for(let r=0;r<n.length;r++){let i=n[r];ct(i,e,t)}else ct(n,e,t)}})};let et=null;function tt(e){et&&et(e)}function nt(){it.stop()}function rt(){it.start()}let it=new ne;it.setAnimationLoop(tt),typeof window<`u`&&it.setContext(window),this.setAnimationLoop=function(e){et=e,qe.setAnimationLoop(e),e===null?it.stop():it.start()},qe.addEventListener(`sessionstart`,nt),qe.addEventListener(`sessionend`,rt),this.render=function(e,t){let n,r;if(arguments[2]!==void 0&&(console.warn(`THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.`),n=arguments[2]),arguments[3]!==void 0&&(console.warn(`THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.`),r=arguments[3]),t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(g===!0)return;e.autoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(t=qe.getCamera(t)),e.isScene===!0&&e.onBeforeRender(h,e,t,n||b),f=Le.get(e,m.length),f.init(),m.push(f),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(be),ye=this.localClippingEnabled,ve=Re.init(this.clippingPlanes,ye,t),d=Ie.get(e,p.length),d.init(),p.push(d),at(e,t,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(ee,te),ve===!0&&Re.beginShadows();let i=f.state.shadowsArray;ze.render(i,e,t),f.setupLights(),f.setupLightsView(t),ve===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),n!==void 0&&this.setRenderTarget(n),Be.render(d,e,t,r);let a=d.opaque,o=d.transparent;a.length>0&&ot(a,e,t),o.length>0&&ot(o,e,t),b!==null&&(ke.updateRenderTargetMipmap(b),ke.updateMultisampleRenderTarget(b)),e.isScene===!0&&e.onAfterRender(h,e,t),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1),Ge.resetDefaultState(),x=-1,S=null,m.pop(),f=m.length>0?m[m.length-1]:null,p.pop(),d=p.length>0?p[p.length-1]:null};function at(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)f.pushLight(e),e.castShadow&&f.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||he.intersectsSprite(e)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let t=Ne.update(e),i=e.material;i.visible&&d.push(e,t,i,n,xe.z,null)}}else if(e.isImmediateRenderObject)r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be),d.push(e,null,e.material,n,xe.z,null);else if((e.isMesh||e.isLine||e.isPoints)&&(e.isSkinnedMesh&&e.skeleton.frame!==De.render.frame&&(e.skeleton.update(),e.skeleton.frame=De.render.frame),!e.frustumCulled||he.intersectsObject(e))){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let t=Ne.update(e),i=e.material;if(Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&d.push(e,t,s,n,xe.z,o)}}else i.visible&&d.push(e,t,i,n,xe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)at(i[e],t,n,r)}function ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;if(n.isArrayCamera){let e=n.cameras;for(let n=0,r=e.length;n<r;n++){let r=e[n];o.layers.test(r.layers)&&(M.viewport(C.copy(r.viewport)),f.setupLightsView(r),st(o,t,r,s,c,l))}}else st(o,t,n,s,c,l)}}function st(e,t,n,r,i,a){if(e.onBeforeRender(h,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),e.isImmediateRenderObject){let r=dt(n,t,i,e);M.setMaterial(i),Ge.reset(),$e(e,r)}else h.renderBufferDirect(n,t,r,i,e,a);e.onAfterRender(h,t,n,r,i,a)}function ct(e,t,n){t.isScene!==!0&&(t=Se);let r=Oe.get(e),i=f.state.lights,a=f.state.shadowsArray,o=i.state.version,s=Pe.getParameters(e,i.state,a,t,n),c=Pe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=Ae.get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,Xe),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ut(e,s),u}else s.uniforms=Pe.getUniforms(e),e.onBuild(s,h),e.onBeforeCompile(s,h),u=Pe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Re.uniform),ut(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotShadowMatrix.value=i.state.spotShadowMatrix,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix);let p=u.getUniforms(),m=lt.seqWithValue(p.seq,d);return r.currentProgram=u,r.uniformsList=m,u}function ut(e,t){let n=Oe.get(e);n.outputEncoding=t.outputEncoding,n.instancing=t.instancing,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas}function dt(e,t,n,r){t.isScene!==!0&&(t=Se),ke.resetTextureUnits();let i=t.fog,a=n.isMeshStandardMaterial?t.environment:null,o=b===null?h.outputEncoding:b.texture.encoding,s=Ae.get(n.envMap||a),c=n.vertexColors===!0&&r.geometry&&r.geometry.attributes.color&&r.geometry.attributes.color.itemSize===4,l=Oe.get(n),u=f.state.lights;if(ve===!0&&(ye===!0||e!==S)){let t=e===S&&n.id===x;Re.setState(n,e,t)}let d=!1;n.version===l.__version?l.needsLights&&l.lightsStateVersion!==u.state.version?d=!0:l.outputEncoding===o?r.isInstancedMesh&&l.instancing===!1||!r.isInstancedMesh&&l.instancing===!0?d=!0:l.envMap===s?(n.fog&&l.fog!==i||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==Re.numPlanes||l.numIntersection!==Re.numIntersection)||l.vertexAlphas!==c)&&(d=!0):d=!0:d=!0:(d=!0,l.__version=n.version);let p=l.currentProgram;d===!0&&(p=ct(n,t,r));let m=!1,g=!1,_=!1,v=p.getUniforms(),C=l.uniforms;if(M.useProgram(p.program)&&(m=!0,g=!0,_=!0),n.id!==x&&(x=n.id,g=!0),m||S!==e){if(v.setValue(j,`projectionMatrix`,e.projectionMatrix),Ee.logarithmicDepthBuffer&&v.setValue(j,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),S!==e&&(S=e,g=!0,_=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){let t=v.map.cameraPosition;t!==void 0&&t.setValue(j,xe.setFromMatrixPosition(e.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&v.setValue(j,`isOrthographic`,e.isOrthographicCamera===!0),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||n.skinning)&&v.setValue(j,`viewMatrix`,e.matrixWorldInverse)}if(n.skinning){v.setOptional(j,r,`bindMatrix`),v.setOptional(j,r,`bindMatrixInverse`);let e=r.skeleton;if(e){let t=e.bones;if(Ee.floatVertexTextures){if(e.boneTexture===null){let n=Math.sqrt(t.length*4);n=y(n),n=Math.max(n,4);let r=new Float32Array(n*n*4);r.set(e.boneMatrices);let i=new io(r,n,n,hr,fr);e.boneMatrices=r,e.boneTexture=i,e.boneTextureSize=n}v.setValue(j,`boneTexture`,e.boneTexture,ke),v.setValue(j,`boneTextureSize`,e.boneTextureSize)}else v.setOptional(j,e,`boneMatrices`)}}return(g||l.receiveShadow!==r.receiveShadow)&&(l.receiveShadow=r.receiveShadow,v.setValue(j,`receiveShadow`,r.receiveShadow)),g&&(v.setValue(j,`toneMappingExposure`,h.toneMappingExposure),l.needsLights&&ft(C,_),i&&n.fog&&Fe.refreshFogUniforms(C,i),Fe.refreshMaterialUniforms(C,n,O,D),lt.upload(j,l.uniformsList,C,ke)),n.isShaderMaterial&&n.uniformsNeedUpdate===!0&&(lt.upload(j,l.uniformsList,C,ke),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&v.setValue(j,`center`,r.center),v.setValue(j,`modelViewMatrix`,r.modelViewMatrix),v.setValue(j,`normalMatrix`,r.normalMatrix),v.setValue(j,`modelMatrix`,r.matrixWorld),p}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTarget=function(e,t=0,n=0){b=e,_=t,v=n,e&&Oe.get(e).__webglFramebuffer===void 0&&ke.setupRenderTarget(e);let r=null,i=!1,a=!1;if(e){let n=e.texture;(n.isDataTexture3D||n.isDataTexture2DArray)&&(a=!0);let o=Oe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=o[t],i=!0):r=e.isWebGLMultisampleRenderTarget?Oe.get(e).__webglMultisampledFramebuffer:o,C.copy(e.viewport),w.copy(e.scissor),T=e.scissorTest}else C.copy(k).multiplyScalar(O).floor(),w.copy(A).multiplyScalar(O).floor(),T=me;if(M.bindFramebuffer(36160,r),M.viewport(C),M.scissor(w),M.setScissorTest(T),i){let r=Oe.get(e.texture);j.framebufferTexture2D(36160,36064,34069+t,r.__webglTexture,n)}else if(a){let r=Oe.get(e.texture),i=t||0;j.framebufferTextureLayer(36160,36064,r.__webglTexture,n||0,i)}},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=Oe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){M.bindFramebuffer(36160,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&We.convert(s)!==j.getParameter(35739)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(Te.has(`EXT_color_buffer_half_float`)||Ee.isWebGL2&&Te.has(`EXT_color_buffer_float`));if(c!==1009&&We.convert(c)!==j.getParameter(35738)&&!(c===1015&&(Ee.isWebGL2||Te.has(`OES_texture_float`)||Te.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}j.checkFramebufferStatus(36160)===36053?t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&j.readPixels(t,n,r,i,We.convert(s),We.convert(c),a):console.error(`THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.`)}finally{let e=b===null?null:Oe.get(b).__webglFramebuffer;M.bindFramebuffer(36160,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r),o=We.convert(t.format);ke.setTexture2D(t,0),j.copyTexImage2D(3553,n,o,e.x,e.y,i,a,0),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=We.convert(n.format),s=We.convert(n.type);ke.setTexture2D(n,0),j.pixelStorei(37440,n.flipY),j.pixelStorei(37441,n.premultiplyAlpha),j.pixelStorei(3317,n.unpackAlignment),t.isDataTexture?j.texSubImage2D(3553,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?j.compressedTexSubImage2D(3553,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):j.texSubImage2D(3553,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&j.generateMipmap(3553),M.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(h.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let{width:a,height:o,data:s}=n.image,c=We.convert(r.format),l=We.convert(r.type),u;if(r.isDataTexture3D)ke.setTexture3D(r,0),u=32879;else if(r.isDataTexture2DArray)ke.setTexture2DArray(r,0),u=35866;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}j.pixelStorei(37440,r.flipY),j.pixelStorei(37441,r.premultiplyAlpha),j.pixelStorei(3317,r.unpackAlignment);let d=j.getParameter(3314),f=j.getParameter(32878),p=j.getParameter(3316),m=j.getParameter(3315),g=j.getParameter(32877);j.pixelStorei(3314,a),j.pixelStorei(32878,o),j.pixelStorei(3316,e.min.x),j.pixelStorei(3315,e.min.y),j.pixelStorei(32877,e.min.z),j.texSubImage3D(u,i,t.x,t.y,t.z,e.max.x-e.min.x+1,e.max.y-e.min.y+1,e.max.z-e.min.z+1,c,l,s),j.pixelStorei(3314,d),j.pixelStorei(32878,f),j.pixelStorei(3316,p),j.pixelStorei(3315,m),j.pixelStorei(32877,g),i===0&&r.generateMipmaps&&j.generateMipmap(u),M.unbindTexture()},this.initTexture=function(e){ke.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){_=0,v=0,b=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}function Qt(e,t,n,r,i,a){Yo.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Xo.copy(Yo):(Xo.x=a*Yo.x-i*Yo.y,Xo.y=i*Yo.x+a*Yo.y),e.copy(t),e.x+=Xo.x,e.y+=Xo.y,e.applyMatrix4(Zo)}function $t(e,t,n,r,i,a,o){let s=As.distanceSqToPoint(e);if(s<n){let n=new L;As.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}function en(e,t,n,r,i){let a,o;if(i===jn(e,t,n,r)>0)for(a=t;a<n;a+=r)o=On(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=On(a,e[a],e[a+1],o);return o&&bn(o,o.next)&&(kn(o),o=o.next),o}function tn(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(bn(n,n.next)||yn(n.prev,n,n.next)===0)){if(kn(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function nn(e,t,n,r,i,a,o){if(!e)return;!o&&a&&pn(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?an(e,r,i,a):rn(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),kn(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=on(tn(e),t,n),nn(e,t,n,r,i,a,2)):o===2&&sn(e,t,n,r,i,a):nn(tn(e),t,n,r,i,a,1);break}}}function rn(e){let t=e.prev,n=e,r=e.next;if(yn(t,n,r)>=0)return!1;let i=e.next.next;for(;i!==e.prev;){if(_n(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&yn(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function an(e,t,n,r){let i=e.prev,a=e,o=e.next;if(yn(i,a,o)>=0)return!1;let s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,c=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,u=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,d=hn(s,c,t,n,r),f=hn(l,u,t,n,r),p=e.prevZ,m=e.nextZ;for(;p&&p.z>=d&&m&&m.z<=f;){if(p!==e.prev&&p!==e.next&&_n(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&yn(p.prev,p,p.next)>=0||(p=p.prevZ,m!==e.prev&&m!==e.next&&_n(i.x,i.y,a.x,a.y,o.x,o.y,m.x,m.y)&&yn(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=d;){if(p!==e.prev&&p!==e.next&&_n(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&yn(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=f;){if(m!==e.prev&&m!==e.next&&_n(i.x,i.y,a.x,a.y,o.x,o.y,m.x,m.y)&&yn(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function on(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!bn(i,a)&&xn(i,r,r.next,a)&&Tn(i,a)&&Tn(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),kn(r),kn(r.next),r=e=a),r=r.next}while(r!==e);return tn(r)}function sn(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&vn(o,e)){let s=Dn(o,e);o=tn(o,o.next),s=tn(s,s.next),nn(o,t,n,r,i,a),nn(s,t,n,r,i,a);return}e=e.next}o=o.next}while(o!==e)}function cn(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=en(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(gn(l));for(i.sort(ln),a=0;a<i.length;a++)un(i[a],n),n=tn(n,n.next);return n}function ln(e,t){return e.x-t.x}function un(e,t){if(t=dn(e,t),t){let n=Dn(t,e);tn(t,t.next),tn(n,n.next)}}function dn(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a){if(a=e,e===r){if(i===n.y)return n;if(i===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(r===a)return o;let s=o,c=o.x,l=o.y,u=1/0,d;n=o;do r>=n.x&&n.x>=c&&r!==n.x&&_n(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)&&(d=Math.abs(i-n.y)/(r-n.x),Tn(n,e)&&(d<u||d===u&&(n.x>o.x||n.x===o.x&&fn(o,n)))&&(o=n,u=d)),n=n.next;while(n!==s);return o}function fn(e,t){return yn(e.prev,e,t.prev)<0&&yn(t.next,e,e.next)<0}function pn(e,t,n,r){let i=e;do i.z===null&&(i.z=hn(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,mn(i)}function mn(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function hn(e,t,n,r,i){return e=32767*(e-n)*i,t=32767*(t-r)*i,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function gn(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function _n(e,t,n,r,i,a,o,s){return(i-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(r-s)-(n-o)*(t-s)>=0&&(n-o)*(a-s)-(i-o)*(r-s)>=0}function vn(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!wn(e,t)&&(Tn(e,t)&&Tn(t,e)&&En(e,t)&&(yn(e.prev,e,t.prev)||yn(e,t.prev,t))||bn(e,t)&&yn(e.prev,e,e.next)>0&&yn(t.prev,t,t.next)>0)}function yn(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function bn(e,t){return e.x===t.x&&e.y===t.y}function xn(e,t,n,r){let i=Cn(yn(e,t,n)),a=Cn(yn(e,t,r)),o=Cn(yn(n,r,e)),s=Cn(yn(n,r,t));return!!(i!==a&&o!==s||i===0&&Sn(e,n,t)||a===0&&Sn(e,r,t)||o===0&&Sn(n,e,r)||s===0&&Sn(n,t,r))}function Sn(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Cn(e){return e>0?1:e<0?-1:0}function wn(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&xn(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Tn(e,t){return yn(e.prev,e,e.next)<0?yn(e,t,e.next)>=0&&yn(e,e.prev,t)>=0:yn(e,t,e.prev)<0||yn(e,e.next,t)<0}function En(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Dn(e,t){let n=new An(e.i,e.x,e.y),r=new An(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function On(e,t,n,r){let i=new An(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function kn(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function An(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jn(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function Mn(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Nn(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function Pn(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Fn(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function In(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return uc;case`vector`:case`vector2`:case`vector3`:case`vector4`:return mc;case`color`:return lc;case`quaternion`:return fc;case`bool`:case`boolean`:return cc;case`string`:return pc}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Ln(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=In(e.type);if(e.times===void 0){let t=[],n=[];nc.flattenJSON(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}function Rn(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function zn(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Bn(e,t){let n=1-e;return n*n*t}function Vn(e,t){return 2*(1-e)*e*t}function Hn(e,t){return e*e*t}function Un(e,t,n,r){return Bn(e,t)+Vn(e,n)+Hn(e,r)}function Wn(e,t){let n=1-e;return n*n*n*t}function Gn(e,t){let n=1-e;return 3*n*n*e*t}function Kn(e,t){return 3*(1-e)*e*e*t}function qn(e,t){return e*e*e*t}function Jn(e,t,n,r,i){return Wn(e,t)+Gn(e,n)+Kn(e,r)+qn(e,i)}function Yn(e,t,n){let r=Array.from(e),i=t/n.resolution,a=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*i,o=[],s=0,c=0;for(let e=0;e<r.length;e++){let t=r[e];if(t===`
`)s=0,c-=a;else{let e=Xn(t,i,s,c,n);s+=e.offsetX,o.push(e.path)}}return o}function Xn(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new ml,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||=a.o.split(` `);for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u)}}return{offsetX:a.ha*t,path:o}}function Zn(){return(typeof performance>`u`?Date:performance).now()}function Qn(e){let t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Qn(e.children[n]));return t}function $n(){let e=[],t=[],n=[],r=tu;for(let i=0;i<ru;i++){let a=2**r;t.push(a);let o=1/a;i>4?o=nu[i-tu+eu-1]:i==0&&(o=0),n.push(o);let s=1/(a-1),c=-s/2,l=1+s/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=new Float32Array(108),f=new Float32Array(72),p=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];d.set(r,18*e),f.set(u,12*e);let i=[e,e,e,e,e,e];p.set(i,6*e)}let m=new U;m.setAttribute(`position`,new H(d,3)),m.setAttribute(`uv`,new H(f,2)),m.setAttribute(`faceIndex`,new H(p,1)),e.push(m),r>eu&&r--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}var er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,P,F,Gr,Kr,qr,Jr,Yr,I,Xr,Zr,Qr,L,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,R,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,z,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,B,_a,V,va,H,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,U,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,W,qa,Ja,Ya,Xa,G,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,K,q,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,J,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,Y=t((()=>{er=1e3,tr=1001,nr=1002,rr=1003,ir=1004,ar=1005,or=1006,sr=1007,cr=1008,lr=1009,ur=1012,dr=1014,fr=1015,pr=1020,mr=1022,hr=1023,gr=1026,_r=2201,vr=2202,yr=2300,br=2301,xr=2302,Sr=2400,Cr=2401,wr=2402,Tr=2500,Er=2501,Dr=3e3,Or=3001,kr=3007,Ar=3002,jr=3003,Mr=3004,Nr=3005,Pr=3006,Fr=3200,Ir=3201,Lr=7680,Rr=35044,zr=35048,Br=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Vr=[];for(let e=0;e<256;e++)Vr[e]=(e<16?`0`:``)+e.toString(16);Hr=1234567,Ur=Math.PI/180,Wr=180/Math.PI,P=Object.freeze({__proto__:null,DEG2RAD:Ur,RAD2DEG:Wr,generateUUID:n,clamp:r,euclideanModulo:i,mapLinear:a,inverseLerp:o,lerp:s,damp:c,pingpong:l,smoothstep:u,smootherstep:d,randInt:f,randFloat:p,randFloatSpread:m,seededRandom:h,degToRad:g,radToDeg:_,isPowerOfTwo:v,ceilPowerOfTwo:y,floorPowerOfTwo:b,setQuaternionFromProperEuler:x}),F=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t===void 0?(this.x+=e.x,this.y+=e.y,this):(console.warn(`THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`),this.addVectors(e,t))}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t===void 0?(this.x-=e.x,this.y-=e.y,this):(console.warn(`THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`),this.subVectors(e,t))}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn(`THREE.Vector2: offset has been removed from .fromBufferAttribute().`),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}},F.prototype.isVector2=!0,Gr=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error(`THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.`)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),r=this.elements,i=r[0],a=r[3],o=r[6],s=r[1],c=r[4],l=r[7];return r[0]=t*i+n*s,r[3]=t*a+n*c,r[6]=t*o+n*l,r[1]=-n*i+t*s,r[4]=-n*a+t*c,r[7]=-n*o+t*l,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gr.prototype.isMatrix3=!0,qr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=document.createElementNS(`http://www.w3.org/1999/xhtml`,`canvas`)),Kr.width=e.width,Kr.height=e.height;let n=Kr.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}},Jr=0,Yr=class e extends Br{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=tr,a=tr,o=or,s=cr,c=hr,l=lr,u=1,d=Dr){super(),Object.defineProperty(this,"id",{value:Jr++}),this.uuid=n(),this.name=``,this.image=t,this.mipmaps=[],this.mapping=r,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new F(0,0),this.repeat=new F(1,1),this.center=new F(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gr,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.5,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=n()),!t&&e.images[i.uuid]===void 0){let t;if(Array.isArray(i)){t=[];for(let e=0,n=i.length;e<n;e++)i[e].isDataTexture?t.push(S(i[e].image)):t.push(S(i[e]))}else t=S(i);e.images[i.uuid]={uuid:i.uuid,url:t}}r.image=i.uuid}return t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x-=Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y-=Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}},Yr.DEFAULT_IMAGE=void 0,Yr.DEFAULT_MAPPING=300,Yr.prototype.isTexture=!0,I=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e,t){return t===void 0?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this):(console.warn(`THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`),this.addVectors(e,t))}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t===void 0?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this):(console.warn(`THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`),this.subVectors(e,t))}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn(`THREE.Vector4: offset has been removed from .fromBufferAttribute().`),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}},I.prototype.isVector4=!0,Xr=class extends Br{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new I(0,0,e,t),this.scissorTest=!1,this.viewport=new I(0,0,e,t),n||={},this.texture=new Yr(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter===void 0?or:n.minFilter,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture===void 0?null:n.depthTexture}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xr.prototype.isWebGLRenderTarget=!0,Zr=class extends Xr{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}},Zr.prototype.isWebGLMultisampleRenderTarget=!0,Qr=class{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn(`THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.`),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw Error(`THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.`);let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(r(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e,t){return t===void 0?this.multiplyQuaternions(this,e):(console.warn(`THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.`),this.multiplyQuaternions(e,t))}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},Qr.prototype.isQuaternion=!0,L=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t===void 0?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this):(console.warn(`THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`),this.addVectors(e,t))}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t===void 0?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this):(console.warn(`THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`),this.subVectors(e,t))}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t===void 0?(this.x*=e.x,this.y*=e.y,this.z*=e.z,this):(console.warn(`THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.`),this.multiplyVectors(e,t))}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error(`THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.`),this.applyQuaternion(ei.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ei.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=s*t+a*r-o*n,l=s*n+o*t-i*r,u=s*r+i*n-a*t,d=-i*t-a*n-o*r;return this.x=c*s+d*-i+l*-o-u*-a,this.y=l*s+d*-a+u*-i-c*-o,this.z=u*s+d*-o+c*-a-l*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t===void 0?this.crossVectors(this,e):(console.warn(`THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.`),this.crossVectors(e,t))}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(r(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn(`THREE.Vector3: offset has been removed from .fromBufferAttribute().`),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},L.prototype.isVector3=!0,$r=new L,ei=new Qr,ti=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0,c=e.length;s<c;s+=3){let c=e[s],l=e[s+1],u=e[s+2];c<t&&(t=c),l<n&&(n=l),u<r&&(r=u),c>i&&(i=c),l>a&&(a=l),u>o&&(o=u)}return this.min.set(t,n,r),this.max.set(i,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0,c=e.count;s<c;s++){let c=e.getX(s),l=e.getY(s),u=e.getZ(s);c<t&&(t=c),l<n&&(n=l),u<r&&(r=u),c>i&&(i=c),l>a&&(a=l),u>o&&(o=u)}return this.min.set(t,n,r),this.max.set(i,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn(`THREE.Box3: .getCenter() target is now required`),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn(`THREE.Box3: .getSize() target is now required`),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ii.copy(t.boundingBox),ii.applyMatrix4(e.matrixWorld),this.union(ii));let n=e.children;for(let e=0,t=n.length;e<t;e++)this.expandByObject(n[e]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn(`THREE.Box3: .getParameter() target is now required`),t=new L),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(di),fi.subVectors(this.max,di),ai.subVectors(e.a,di),oi.subVectors(e.b,di),si.subVectors(e.c,di),ci.subVectors(oi,ai),li.subVectors(si,oi),ui.subVectors(ai,si);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-ui.z,ui.y,ci.z,0,-ci.x,li.z,0,-li.x,ui.z,0,-ui.x,-ci.y,ci.x,0,-li.y,li.x,0,-ui.y,ui.x,0];return!C(t,ai,oi,si,fi)||(t=[1,0,0,0,1,0,0,0,1],!C(t,ai,oi,si,fi))?!1:(pi.crossVectors(ci,li),t=[pi.x,pi.y,pi.z],C(t,ai,oi,si,fi))}clampPoint(e,t){return t===void 0&&(console.warn(`THREE.Box3: .clampPoint() target is now required`),t=new L),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error(`THREE.Box3: .getBoundingSphere() target is now required`),this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ti.prototype.isBox3=!0,ni=[new L,new L,new L,new L,new L,new L,new L,new L],ri=new L,ii=new ti,ai=new L,oi=new L,si=new L,ci=new L,li=new L,ui=new L,di=new L,fi=new L,pi=new L,mi=new L,hi=new ti,gi=new L,_i=new L,vi=new L,yi=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?hi.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn(`THREE.Sphere: .clampPoint() target is now required`),t=new L),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn(`THREE.Sphere: .getBoundingBox() target is now required`),e=new ti),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){vi.subVectors(e,this.center);let t=vi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.add(vi.multiplyScalar(n/e)),this.radius+=n}return this}union(e){return _i.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gi.copy(e.center).add(_i)),this.expandByPoint(gi.copy(e.center).sub(_i)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new L,xi=new L,Si=new L,Ci=new L,wi=new L,Ti=new L,Ei=new L,Di=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn(`THREE.Ray: .at() target is now required`),t=new L),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t===void 0&&(console.warn(`THREE.Ray: .closestPointToPoint() target is now required`),t=new L),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.direction).multiplyScalar(t).add(this.origin),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xi.copy(e).add(t).multiplyScalar(.5),Si.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(xi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Si),o=Ci.dot(this.direction),s=-Ci.dot(Si),c=Ci.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(Si).multiplyScalar(d).add(xi),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),r=bi.dot(bi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return o<0&&s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||n!==n)&&(n=i),(a<r||r!==r)&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,i){wi.subVectors(t,e),Ti.subVectors(n,e),Ei.crossVectors(wi,Ti);let a=this.direction.dot(Ei),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);let s=o*this.direction.dot(Ti.crossVectors(Ci,Ti));if(s<0)return null;let c=o*this.direction.dot(wi.cross(Ci));if(c<0||s+c>a)return null;let l=-o*Ci.dot(Ei);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},R=class e{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error(`THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.`)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),i=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error(`THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.`);let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ai,e,ji)}lookAt(e,t,n){let r=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Mi.crossVectors(n,Pi),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Mi.crossVectors(n,Pi)),Mi.normalize(),Ni.crossVectors(Pi,Mi),r[0]=Mi.x,r[4]=Ni.x,r[8]=Pi.x,r[1]=Mi.y,r[5]=Ni.y,r[9]=Pi.y,r[2]=Mi.z,r[6]=Ni.z,r[10]=Pi.z,this}multiply(e,t){return t===void 0?this.multiplyMatrices(this,e):(console.warn(`THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.`),this.multiplyMatrices(e,t))}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],te=r[6],k=r[10],A=r[14],ne=r[3],re=r[7],ie=r[11],ae=r[15];return i[0]=a*x+o*T+s*ee+c*ne,i[4]=a*S+o*E+s*te+c*re,i[8]=a*C+o*D+s*k+c*ie,i[12]=a*w+o*O+s*A+c*ae,i[1]=l*x+u*T+d*ee+f*ne,i[5]=l*S+u*E+d*te+f*re,i[9]=l*C+u*D+d*k+f*ie,i[13]=l*w+u*O+d*A+f*ae,i[2]=p*x+m*T+h*ee+g*ne,i[6]=p*S+m*E+h*te+g*re,i[10]=p*C+m*D+h*k+g*ie,i[14]=p*w+m*O+h*A+g*ae,i[3]=_*x+v*T+y*ee+b*ne,i[7]=_*S+v*E+y*te+b*re,i[11]=_*C+v*D+y*k+b*ie,i[15]=_*w+v*O+y*A+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Oi.set(r[0],r[1],r[2]).length(),a=Oi.set(r[4],r[5],r[6]).length(),o=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],ki.copy(this);let s=1/i,c=1/a,l=1/o;return ki.elements[0]*=s,ki.elements[1]*=s,ki.elements[2]*=s,ki.elements[4]*=c,ki.elements[5]*=c,ki.elements[6]*=c,ki.elements[8]*=l,ki.elements[9]*=l,ki.elements[10]*=l,t.setFromRotationMatrix(ki),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a){a===void 0&&console.warn(`THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.`);let o=this.elements,s=2*i/(t-e),c=2*i/(n-r),l=(t+e)/(t-e),u=(n+r)/(n-r),d=-(a+i)/(a-i),f=-2*a*i/(a-i);return o[0]=s,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,i,a){let o=this.elements,s=1/(t-e),c=1/(n-r),l=1/(a-i),u=(t+e)*s,d=(n+r)*c,f=(a+i)*l;return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},R.prototype.isMatrix4=!0,Oi=new L,ki=new R,Ai=new L(0,0,0),ji=new L(1,1,1),Mi=new L,Ni=new L,Pi=new L,Fi=new R,Ii=new Qr,Li=class e{constructor(t=0,n=0,r=0,i=e.DefaultOrder){this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let i=e.elements,a=i[0],o=i[4],s=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(t||=this._order,t){case`XYZ`:this._y=Math.asin(r(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case`ZXY`:this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case`ZYX`:this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case`YZX`:this._z=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case`XZY`:this._z=Math.asin(-r(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fi,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Ii.setFromEuler(this),this.setFromQuaternion(Ii,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},Li.prototype.isEuler=!0,Li.DefaultOrder=`XYZ`,Li.RotationOrders=[`XYZ`,`YZX`,`ZXY`,`XZY`,`YXZ`,`ZYX`],Ri=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},zi=0,Bi=new L,Vi=new Qr,Hi=new R,Ui=new L,Wi=new L,Gi=new L,Ki=new Qr,qi=new L(1,0,0),Ji=new L(0,1,0),Yi=new L(0,0,1),Xi={type:`added`},Zi={type:`removed`},z=class e extends Br{constructor(){super(),Object.defineProperty(this,"id",{value:zi++}),this.uuid=n(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DefaultUp.clone();let t=new L,r=new Li,i=new Qr,a=new L(1,1,1);function o(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new R},normalMatrix:{value:new Gr}}),this.matrix=new R,this.matrixWorld=new R,this.matrixAutoUpdate=e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ri,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(qi,e)}rotateY(e){return this.rotateOnAxis(Ji,e)}rotateZ(e){return this.rotateOnAxis(Yi,e)}translateOnAxis(e,t){return Bi.copy(e).applyQuaternion(this.quaternion),this.position.add(Bi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qi,e)}translateY(e){return this.translateOnAxis(Ji,e)}translateZ(e){return this.translateOnAxis(Yi,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ui.copy(e):Ui.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Wi,Ui,this.up):Hi.lookAt(Ui,Wi,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Hi),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xi)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zi)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Zi)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return e===void 0&&(console.warn(`THREE.Object3D: .getWorldPosition() target is now required`),e=new L),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn(`THREE.Object3D: .getWorldQuaternion() target is now required`),e=new Qr),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,Gi),e}getWorldScale(e){return e===void 0&&(console.warn(`THREE.Object3D: .getWorldScale() target is now required`),e=new L),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Ki,e),e}getWorldDirection(e){e===void 0&&(console.warn(`THREE.Object3D: .getWorldDirection() target is now required`),e=new L),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!==`{}`&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},z.DefaultUp=new L(0,1,0),z.DefaultMatrixAutoUpdate=!0,z.prototype.isObject3D=!0,Qi=new L,$i=new L,ea=new Gr,ta=class{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qi.subVectors(n,t).cross($i.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn(`THREE.Plane: .projectPoint() target is now required`),t=new L),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn(`THREE.Plane: .intersectLine() target is now required`),t=new L);let n=e.delta(Qi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn(`THREE.Plane: .coplanarPoint() target is now required`),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ea.getNormalMatrix(e),r=this.coplanarPoint(Qi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ta.prototype.isPlane=!0,na=new L,ra=new L,ia=new L,aa=new L,oa=new L,sa=new L,ca=new L,la=new L,ua=new L,da=new L,fa=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r===void 0&&(console.warn(`THREE.Triangle: .getNormal() target is now required`),r=new L),r.subVectors(n,t),na.subVectors(e,t),r.cross(na);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){na.subVectors(r,t),ra.subVectors(n,t),ia.subVectors(e,t);let a=na.dot(na),o=na.dot(ra),s=na.dot(ia),c=ra.dot(ra),l=ra.dot(ia),u=a*c-o*o;if(i===void 0&&(console.warn(`THREE.Triangle: .getBarycoord() target is now required`),i=new L),u===0)return i.set(-2,-1,-1);let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,aa),aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getUV(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,aa),s.set(0,0),s.addScaledVector(i,aa.x),s.addScaledVector(a,aa.y),s.addScaledVector(o,aa.z),s}static isFrontFacing(e,t,n,r){return na.subVectors(n,t),ra.subVectors(e,t),na.cross(ra).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return na.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),na.cross(ra).length()*.5}getMidpoint(e){return e===void 0&&(console.warn(`THREE.Triangle: .getMidpoint() target is now required`),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e===void 0&&(console.warn(`THREE.Triangle: .getPlane() target is now required`),e=new ta),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return e.getUV(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn(`THREE.Triangle: .closestPointToPoint() target is now required`),t=new L);let n=this.a,r=this.b,i=this.c,a,o;oa.subVectors(r,n),sa.subVectors(i,n),la.subVectors(e,n);let s=oa.dot(la),c=sa.dot(la);if(s<=0&&c<=0)return t.copy(n);ua.subVectors(e,r);let l=oa.dot(ua),u=sa.dot(ua);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(oa,a);da.subVectors(e,i);let f=oa.dot(da),p=sa.dot(da);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(sa,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ca.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ca,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(oa,a).addScaledVector(sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pa=0,w.prototype=Object.assign(Object.create(Br.prototype),{constructor:w,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: '`+t+`' parameter is undefined.`);continue}if(t===`shading`){console.warn(`THREE.`+this.type+`: .shading has been removed. Use the boolean .flatShading instead.`),this.flatShading=n===1;continue}let r=this[t];if(r===void 0){console.warn(`THREE.`+this.type+`: '`+t+`' is not a property of this material.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}},toJSON:function(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!==`{}`&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:`dispose`})}}),Object.defineProperty(w.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ha={h:0,s:0,l:0},ga={h:0,s:0,l:0},B=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e==`number`?this.setHex(e):typeof e==`string`&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=i(e,1),t=r(t,0,1),n=r(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=T(i,r,e+1/3),this.g=T(i,r,e),this.b=T(i,r,e-1/3)}return this}setStyle(e){function t(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let e,r=n[1],i=n[2];switch(r){case`rgb`:case`rgba`:if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,t(e[4]),this;if(e=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,t(e[4]),this;break;case`hsl`:case`hsla`:if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){let n=parseFloat(e[1])/360,r=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100;return t(e[4]),this.setHSL(n,r,i)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let e=n[1],t=e.length;if(t===3)return this.r=parseInt(e.charAt(0)+e.charAt(0),16)/255,this.g=parseInt(e.charAt(1)+e.charAt(1),16)/255,this.b=parseInt(e.charAt(2)+e.charAt(2),16)/255,this;if(t===6)return this.r=parseInt(e.charAt(0)+e.charAt(1),16)/255,this.g=parseInt(e.charAt(2)+e.charAt(3),16)/255,this.b=parseInt(e.charAt(4)+e.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=ma[e.toLowerCase()];return t===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=e.r**+t,this.g=e.g**+t,this.b=e.b**+t,this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=e.r**+n,this.g=e.g**+n,this.b=e.b**+n,this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=E(e.r),this.g=E(e.g),this.b=E(e.b),this}copyLinearToSRGB(e){return this.r=D(e.r),this.g=D(e.g),this.b=D(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return(`000000`+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn(`THREE.Color: .getHSL() target is now required`),e={h:0,s:0,l:0});let t=this.r,n=this.g,r=this.b,i=Math.max(t,n,r),a=Math.min(t,n,r),o,s,c=(a+i)/2;if(a===i)o=0,s=0;else{let e=i-a;switch(s=c<=.5?e/(i+a):e/(2-i-a),i){case t:o=(n-r)/e+(n<r?6:0);break;case n:o=(r-t)/e+2;break;case r:o=(t-n)/e+4}o/=6}return e.h=o,e.s=s,e.l=c,e}getStyle(){return`rgb(`+(this.r*255|0)+`,`+(this.g*255|0)+`,`+(this.b*255|0)+`)`}offsetHSL(e,t,n){return this.getHSL(ha),ha.h+=e,ha.s+=t,ha.l+=n,this.setHSL(ha.h,ha.s,ha.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ha),e.getHSL(ga);let n=s(ha.h,ga.h,t),r=s(ha.s,ga.s,t),i=s(ha.l,ga.l,t);return this.setHSL(n,r,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}},B.NAMES=ma,B.prototype.isColor=!0,B.prototype.r=1,B.prototype.g=1,B.prototype.b=1,_a=class extends w{constructor(e){super(),this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}},_a.prototype.isMeshBasicMaterial=!0,V=new L,va=new F,H=class{constructor(e,t,n){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n===!0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyColorsArray(): color is undefined`,r),i=new B),t[n++]=i.r,t[n++]=i.g,t[n++]=i.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyVector2sArray(): vector is undefined`,r),i=new F),t[n++]=i.x,t[n++]=i.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyVector3sArray(): vector is undefined`,r),i=new L),t[n++]=i.x,t[n++]=i.y,t[n++]=i.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyVector4sArray(): vector is undefined`,r),i=new I),t[n++]=i.x,t[n++]=i.y,t[n++]=i.z,t[n++]=i.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)V.fromBufferAttribute(this,t),V.applyMatrix3(e),this.setXYZ(t,V.x,V.y,V.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)V.x=this.getX(t),V.y=this.getY(t),V.z=this.getZ(t),V.applyMatrix4(e),this.setXYZ(t,V.x,V.y,V.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)V.x=this.getX(t),V.y=this.getY(t),V.z=this.getZ(t),V.applyNormalMatrix(e),this.setXYZ(t,V.x,V.y,V.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)V.x=this.getX(t),V.y=this.getY(t),V.z=this.getZ(t),V.transformDirection(e),this.setXYZ(t,V.x,V.y,V.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}},H.prototype.isBufferAttribute=!0,ya=class extends H{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ba=class extends H{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xa=class extends H{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xa.prototype.isFloat16BufferAttribute=!0,Sa=class extends H{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ca=0,wa=new R,Ta=new z,Ea=new L,Da=new ti,Oa=new ti,ka=new L,U=class e extends Br{constructor(){super(),Object.defineProperty(this,"id",{value:Ca++}),this.uuid=n(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(O(e)>65535?ba:ya)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Gr().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return wa.makeRotationX(e),this.applyMatrix4(wa),this}rotateY(e){return wa.makeRotationY(e),this.applyMatrix4(wa),this}rotateZ(e){return wa.makeRotationZ(e),this.applyMatrix4(wa),this}translate(e,t,n){return wa.makeTranslation(e,t,n),this.applyMatrix4(wa),this}scale(e,t,n){return wa.makeScale(e,t,n),this.applyMatrix4(wa),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ea).negate(),this.translate(Ea.x,Ea.y,Ea.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Sa(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Da.setFromBufferAttribute(n),this.morphTargetsRelative?(ka.addVectors(this.boundingBox.min,Da.min),this.boundingBox.expandByPoint(ka),ka.addVectors(this.boundingBox.max,Da.max),this.boundingBox.expandByPoint(ka)):(this.boundingBox.expandByPoint(Da.min),this.boundingBox.expandByPoint(Da.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Da.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Oa.setFromBufferAttribute(n),this.morphTargetsRelative?(ka.addVectors(Da.min,Oa.min),Da.expandByPoint(ka),ka.addVectors(Da.max,Oa.max),Da.expandByPoint(ka)):(Da.expandByPoint(Oa.min),Da.expandByPoint(Oa.max))}Da.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ka.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ka));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ka.fromBufferAttribute(a,t),o&&(Ea.fromBufferAttribute(e,t),ka.add(Ea)),r=Math.max(r,n.distanceToSquared(ka))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute(`tangent`,new H(new Float32Array(4*o),4));let s=t.tangent.array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new L,l[e]=new L;let u=new L,d=new L,f=new L,p=new F,m=new F,h=new F,g=new L,_=new L;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new L,x=new L,S=new L,C=new L;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new H(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error(`THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.`,e);return}t===void 0&&(t=0,console.warn(`THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.`));let n=this.attributes;for(let r in n){if(e.attributes[r]===void 0)continue;let i=n[r].array,a=e.attributes[r],o=a.array,s=a.itemSize*t,c=Math.min(o.length,i.length-s);for(let e=0,t=s;e<c;e++,t++)i[t]=o[e]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ka.fromBufferAttribute(e,t),ka.normalize(),e.setXYZ(t,ka.x,ka.y,ka.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let e=0,i=t.length;e<i;e++){o=t[e]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new H(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.5,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new e().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},U.prototype.isBufferGeometry=!0,Aa=new R,ja=new Di,Ma=new yi,Na=new L,Pa=new L,Fa=new L,Ia=new L,La=new L,Ra=new L,za=new L,Ba=new L,Va=new L,Ha=new F,Ua=new F,Wa=new F,Ga=new L,Ka=new L,W=class extends z{constructor(e=new U,t=new _a){super(),this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){let n=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error(`THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)===!1)||(Aa.copy(i).invert(),ja.copy(e.ray).applyMatrix4(Aa),n.boundingBox!==null&&ja.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){let i=n.index,o=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative,l=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(i!==null){if(Array.isArray(r))for(let n=0,p=d.length;n<p;n++){let p=d[n],m=r[p.materialIndex],h=Math.max(p.start,f.start),g=Math.min(p.start+p.count,f.start+f.count);for(let n=h,r=g;n<r;n+=3){let r=i.getX(n),d=i.getX(n+1),f=i.getX(n+2);a=te(this,m,e,ja,o,s,c,l,u,r,d,f),a&&(a.faceIndex=Math.floor(n/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let n=Math.max(0,f.start),d=Math.min(i.count,f.start+f.count);for(let f=n,p=d;f<p;f+=3){let n=i.getX(f),d=i.getX(f+1),p=i.getX(f+2);a=te(this,r,e,ja,o,s,c,l,u,n,d,p),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}else if(o!==void 0){if(Array.isArray(r))for(let n=0,i=d.length;n<i;n++){let i=d[n],p=r[i.materialIndex],m=Math.max(i.start,f.start),h=Math.min(i.start+i.count,f.start+f.count);for(let n=m,r=h;n<r;n+=3){let r=n,d=n+1,f=n+2;a=te(this,p,e,ja,o,s,c,l,u,r,d,f),a&&(a.faceIndex=Math.floor(n/3),a.face.materialIndex=i.materialIndex,t.push(a))}}else{let n=Math.max(0,f.start),i=Math.min(o.count,f.start+f.count);for(let d=n,f=i;d<f;d+=3){let n=d,i=d+1,f=d+2;a=te(this,r,e,ja,o,s,c,l,u,n,i,f),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}else n.isGeometry&&console.error(`THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}},W.prototype.isMesh=!0,qa=class extends U{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sa(c,3)),this.setAttribute(`normal`,new Sa(l,3)),this.setAttribute(`uv`,new Sa(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}},Ja={clone:k,merge:A},Ya=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,G=class extends w{constructor(e){super(),this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.vertexShader=Ya,this.fragmentShader=Xa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error(`THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.`),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=k(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},G.prototype.isShaderMaterial=!0,Za=class extends z{constructor(){super(),this.type=`Camera`,this.matrixWorldInverse=new R,this.projectionMatrix=new R,this.projectionMatrixInverse=new R}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn(`THREE.Camera: .getWorldDirection() target is now required`),e=new L),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Za.prototype.isCamera=!0,Qa=class extends Za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qa.prototype.isPerspectiveCamera=!0,$a=90,eo=1,to=class extends z{constructor(e,t,n){if(super(),this.type=`CubeCamera`,n.isWebGLCubeRenderTarget!==!0){console.error(`THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.`);return}this.renderTarget=n;let r=new Qa($a,eo,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(1,0,0)),this.add(r);let i=new Qa($a,eo,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(-1,0,0)),this.add(i);let a=new Qa($a,eo,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);let o=new Qa($a,eo,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);let s=new Qa($a,eo,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(0,0,1)),this.add(s);let c=new Qa($a,eo,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[r,i,a,o,s,c]=this.children,l=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,s),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=l}},no=class extends Yr{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,o=o===void 0?mr:o,super(e,t,n,r,i,a,o,s,c,l),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},no.prototype.isCubeTexture=!0,ro=class extends Xr{constructor(e,t,n){Number.isInteger(t)&&(console.warn(`THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )`),t=n),super(e,e,t),t||={},this.texture=new no(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?or:t.minFilter,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=hr,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qa(5,5,5),i=new G({name:`CubemapFromEquirect`,uniforms:k(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=or),new to(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ro.prototype.isWebGLCubeRenderTarget=!0,io=class extends Yr{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(null,a,o,s,c,l,r,i,u,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c===void 0?rr:c,this.minFilter=l===void 0?rr:l,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}},io.prototype.isDataTexture=!0,ao=new yi,oo=new L,so=class{constructor(e=new ta,t=new ta,n=new ta,r=new ta,i=new ta,a=new ta){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],u=n[7],d=n[8],f=n[9],p=n[10],m=n[11],h=n[12],g=n[13],_=n[14],v=n[15];return t[0].setComponents(o-r,u-s,m-d,v-h).normalize(),t[1].setComponents(o+r,u+s,m+d,v+h).normalize(),t[2].setComponents(o+i,u+c,m+f,v+g).normalize(),t[3].setComponents(o-i,u-c,m-f,v-g).normalize(),t[4].setComponents(o-a,u-l,m-p,v-_).normalize(),t[5].setComponents(o+a,u+l,m+p,v+_).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSprite(e){return ao.center.set(0,0,0),ao.radius=.7071067811865476,ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},co=class extends U{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sa(p,3)),this.setAttribute(`normal`,new Sa(m,3)),this.setAttribute(`uv`,new Sa(h,2))}},K={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:`vec3 transformed = vec3( position );`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float fogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmissionmap_fragment:`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,transmissionmap_pars_fragment:`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,normal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,normal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`},q={common:{diffuse:{value:new B(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gr},uv2Transform:{value:new Gr},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new F(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new B(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Gr}},sprite:{diffuse:{value:new B(15658734)},opacity:{value:1},center:{value:new F(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Gr}}},lo={basic:{uniforms:A([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:A([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.fog,q.lights,{emissive:{value:new B(0)}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:A([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:A([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:A([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new B(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:A([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:A([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:A([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:A([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:A([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.normal_vert,fragmentShader:K.normal_frag},sprite:{uniforms:A([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new Gr},t2D:{value:null}},vertexShader:K.background_vert,fragmentShader:K.background_frag},cube:{uniforms:A([q.envmap,{opacity:{value:1}}]),vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distanceRGBA:{uniforms:A([q.common,q.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distanceRGBA_vert,fragmentShader:K.distanceRGBA_frag},shadow:{uniforms:A([q.lights,q.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}},lo.physical={uniforms:A([lo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new F(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new B(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},uo=class extends Yr{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=rr,this.minFilter=rr,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}},uo.prototype.isDataTexture2DArray=!0,fo=class extends Yr{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=rr,this.minFilter=rr,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}},fo.prototype.isDataTexture3D=!0,po=new Yr,mo=new uo,ho=new fo,go=new no,_o=[],vo=[],yo=new Float32Array(16),bo=new Float32Array(9),xo=new Float32Array(4),at.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),be(t,e)},ot.prototype.setValue=function(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}},So=/(\w+)(\])?(\[|\.)?/g,lt.prototype.setValue=function(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)},lt.prototype.setOptional=function(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)},lt.upload=function(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}},lt.seqWithValue=function(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n},Co=0,wo=/^[ \t]*#include +<([\w\d./]+)>/gm,To=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Eo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Do=0,Oo=class extends w{constructor(e){super(),this.type=`MeshDepthMaterial`,this.depthPacking=Fr,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo.prototype.isMeshDepthMaterial=!0,ko=class extends w{constructor(e){super(),this.type=`MeshDistanceMaterial`,this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ko.prototype.isMeshDistanceMaterial=!0,Ao=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,jo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mo=class extends Qa{constructor(e=[]){super(),this.cameras=e}},Mo.prototype.isArrayCamera=!0,No=class extends z{constructor(){super(),this.type=`Group`}},No.prototype.isGroup=!0,Po={type:`move`},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(o!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Po))),c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n);if(c.joints[r.jointName]===void 0){let e=new No;e.matrixAutoUpdate=!1,e.visible=!1,c.joints[r.jointName]=e,c.add(e)}let i=c.joints[r.jointName];e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}},Io=class extends Br{constructor(e,t){super();let n=this,r=e.state,i=null,a=1,o=null,s=`local-floor`,c=null,l=[],u=new Map,d=new Qa;d.layers.enable(1),d.viewport=new I;let f=new Qa;f.layers.enable(2),f.viewport=new I;let p=[d,f],m=new Mo;m.layers.enable(1),m.layers.enable(2);let h=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=l[e];return t===void 0&&(t=new Fo,l[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=l[e];return t===void 0&&(t=new Fo,l[e]=t),t.getGripSpace()},this.getHand=function(e){let t=l[e];return t===void 0&&(t=new Fo,l[e]=t),t.getHandSpace()};function _(e){let t=u.get(e.inputSource);t&&t.dispatchEvent({type:e.type,data:e.inputSource})}function v(){u.forEach(function(e,t){e.disconnect(t)}),u.clear(),h=null,g=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),E.stop(),n.isPresenting=!1,n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return o},this.getSession=function(){return i},this.setSession=async function(e){if(i=e,i!==null){i.addEventListener(`select`,_),i.addEventListener(`selectstart`,_),i.addEventListener(`selectend`,_),i.addEventListener(`squeeze`,_),i.addEventListener(`squeezestart`,_),i.addEventListener(`squeezeend`,_),i.addEventListener(`end`,v),i.addEventListener(`inputsourceschange`,y);let e=t.getContextAttributes();e.xrCompatible!==!0&&await t.makeXRCompatible();let r={antialias:e.antialias,alpha:e.alpha,depth:e.depth,stencil:e.stencil,framebufferScaleFactor:a},c=new XRWebGLLayer(i,t,r);i.updateRenderState({baseLayer:c}),o=await i.requestReferenceSpace(s),E.setContext(i),E.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}};function y(e){let t=i.inputSources;for(let e=0;e<l.length;e++)u.set(t[e],l[e]);for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=u.get(n);r&&(r.dispatchEvent({type:`disconnected`,data:n}),u.delete(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=u.get(n);r&&r.dispatchEvent({type:`connected`,data:n})}}let b=new L,x=new L;function S(e,t,n){b.setFromMatrixPosition(t.matrixWorld),x.setFromMatrixPosition(n.matrixWorld);let r=b.distanceTo(x),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),S=c*s/_*g,C=l*s/_*g;e.projectionMatrix.makePerspective(v,y,S,C,g,_)}function C(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.getCamera=function(e){m.near=f.near=d.near=e.near,m.far=f.far=d.far=e.far,(h!==m.near||g!==m.far)&&(i.updateRenderState({depthNear:m.near,depthFar:m.far}),h=m.near,g=m.far);let t=e.parent,n=m.cameras;C(m,t);for(let e=0;e<n.length;e++)C(n[e],t);e.matrixWorld.copy(m.matrixWorld),e.matrix.copy(m.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale);let r=e.children;for(let e=0,t=r.length;e<t;e++)r[e].updateMatrixWorld(!0);return n.length===2?S(m,d,f):m.projectionMatrix.copy(d.projectionMatrix),m};let w=null;function T(e,t){if(c=t.getViewerPose(o),c!==null){let e=c.views,t=i.renderState.baseLayer;r.bindXRFramebuffer(t.framebuffer);let n=!1;e.length!==m.cameras.length&&(m.cameras.length=0,n=!0);for(let r=0;r<e.length;r++){let i=e[r],a=t.getViewport(i),o=p[r];o.matrix.fromArray(i.transform.matrix),o.projectionMatrix.fromArray(i.projectionMatrix),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&m.matrix.copy(o.matrix),n===!0&&m.cameras.push(o)}}let n=i.inputSources;for(let e=0;e<l.length;e++){let r=l[e],i=n[e];r.update(i,t,o)}w&&w(e,t)}let E=new ne;E.setAnimationLoop(T),this.setAnimationLoop=function(e){w=e},this.dispose=function(){}}},Lo=class extends N{},Lo.prototype.isWebGL1Renderer=!0,Ro=class e{constructor(e,t=25e-5){this.name=``,this.color=new B(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,color:this.color.getHex(),density:this.density}}},Ro.prototype.isFogExp2=!0,zo=class e{constructor(e,t=1,n=1e3){this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,color:this.color.getHex(),near:this.near,far:this.far}}},zo.prototype.isFog=!0,Bo=class extends z{constructor(){super(),this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}},Bo.prototype.isScene=!0,Vo=class e{constructor(e,t){this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=n(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let r=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new e(r,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vo.prototype.isInterleavedBuffer=!0,Ho=new L,Uo=class e{constructor(e,t,n,r){this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ho.x=this.getX(t),Ho.y=this.getY(t),Ho.z=this.getZ(t),Ho.applyMatrix4(e),this.setXYZ(t,Ho.x,Ho.y,Ho.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ho.x=this.getX(t),Ho.y=this.getY(t),Ho.z=this.getZ(t),Ho.applyNormalMatrix(e),this.setXYZ(t,Ho.x,Ho.y,Ho.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ho.x=this.getX(t),Ho.y=this.getY(t),Ho.z=this.getZ(t),Ho.transformDirection(e),this.setXYZ(t,Ho.x,Ho.y,Ho.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new H(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uo.prototype.isInterleavedBufferAttribute=!0,Wo=class extends w{constructor(e){super(),this.type=`SpriteMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}},Wo.prototype.isSpriteMaterial=!0,Ko=new L,qo=new L,Jo=new L,Yo=new F,Xo=new F,Zo=new R,Qo=new L,$o=new L,es=new L,ts=new F,ns=new F,rs=new F,is=class extends z{constructor(e){if(super(),this.type=`Sprite`,Go===void 0){Go=new U;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new Vo(e,5);Go.setIndex([0,1,2,0,2,3]),Go.setAttribute(`position`,new Uo(t,3,0,!1)),Go.setAttribute(`uv`,new Uo(t,2,3,!1))}this.geometry=Go,this.material=e===void 0?new Wo:e,this.center=new F(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),qo.setFromMatrixScale(this.matrixWorld),Zo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qo.multiplyScalar(-Jo.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Qt(Qo.set(-.5,-.5,0),Jo,a,qo,r,i),Qt($o.set(.5,-.5,0),Jo,a,qo,r,i),Qt(es.set(.5,.5,0),Jo,a,qo,r,i),ts.set(0,0),ns.set(1,0),rs.set(1,1);let o=e.ray.intersectTriangle(Qo,$o,es,!1,Ko);if(o===null&&(Qt($o.set(-.5,.5,0),Jo,a,qo,r,i),ns.set(0,1),o=e.ray.intersectTriangle(Qo,es,$o,!1,Ko),o===null))return;let s=e.ray.origin.distanceTo(Ko);s<e.near||s>e.far||t.push({distance:s,point:Ko.clone(),uv:fa.getUV(Ko,Qo,$o,es,ts,ns,rs,new F),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}},is.prototype.isSprite=!0,as=new L,os=new I,ss=new I,cs=new L,ls=new R,us=class extends W{constructor(e,t){super(e,t),this.type=`SkinnedMesh`,this.bindMode=`attached`,this.bindMatrix=new R,this.bindMatrixInverse=new R}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new I,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}boneTransform(e,t){let n=this.skeleton,r=this.geometry;os.fromBufferAttribute(r.attributes.skinIndex,e),ss.fromBufferAttribute(r.attributes.skinWeight,e),as.fromBufferAttribute(r.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=ss.getComponent(e);if(r!==0){let i=os.getComponent(e);ls.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(cs.copy(as).applyMatrix4(ls),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},us.prototype.isSkinnedMesh=!0,ds=class extends z{constructor(){super(),this.type=`Bone`}},ds.prototype.isBone=!0,fs=new R,ps=new R,ms=[],hs=new W,gs=class extends W{constructor(e,t,n){super(e,t),this.instanceMatrix=new H(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0)for(let i=0;i<r;i++){this.getMatrixAt(i,fs),ps.multiplyMatrices(n,fs),hs.matrixWorld=ps,hs.raycast(e,ms);for(let e=0,n=ms.length;e<n;e++){let n=ms[e];n.instanceId=i,n.object=this,t.push(n)}ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new H(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},gs.prototype.isInstancedMesh=!0,_s=class extends w{constructor(e){super(),this.type=`LineBasicMaterial`,this.color=new B(16777215),this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}},_s.prototype.isLineBasicMaterial=!0,vs=new L,ys=new L,bs=new R,xs=new Di,Ss=new yi,Cs=class extends z{constructor(e=new U,t=new _s){super(),this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry){if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)vs.fromBufferAttribute(t,e-1),ys.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=vs.distanceTo(ys);e.setAttribute(`lineDistance`,new Sa(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`)}else e.isGeometry&&console.error(`THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Ss.radius+=i,e.ray.intersectsSphere(Ss)===!1)return;bs.copy(r).invert(),xs.copy(e.ray).applyMatrix4(bs);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new L,l=new L,u=new L,d=new L,f=this.isLineSegments?2:1;if(n.isBufferGeometry){let r=n.index,i=n.attributes.position;if(r!==null){let n=Math.max(0,a.start),o=Math.min(r.count,a.start+a.count);for(let a=n,p=o-1;a<p;a+=f){let n=r.getX(a),o=r.getX(a+1);if(c.fromBufferAttribute(i,n),l.fromBufferAttribute(i,o),xs.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let f=e.ray.origin.distanceTo(d);f<e.near||f>e.far||t.push({distance:f,point:u.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(i.count,a.start+a.count);for(let a=n,o=r-1;a<o;a+=f){if(c.fromBufferAttribute(i,a),l.fromBufferAttribute(i,a+1),xs.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error(`THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){let n=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error(`THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.`)}}},Cs.prototype.isLine=!0,ws=new L,Ts=new L,Es=class extends Cs{constructor(e,t){super(e,t),this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry){if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ws.fromBufferAttribute(t,e),Ts.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ws.distanceTo(Ts);e.setAttribute(`lineDistance`,new Sa(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`)}else e.isGeometry&&console.error(`THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`);return this}},Es.prototype.isLineSegments=!0,Ds=class extends Cs{constructor(e,t){super(e,t),this.type=`LineLoop`}},Ds.prototype.isLineLoop=!0,Os=class extends w{constructor(e){super(),this.type=`PointsMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}},Os.prototype.isPointsMaterial=!0,ks=new R,As=new Di,js=new yi,Ms=new L,Ns=class extends z{constructor(e=new U,t=new Os){super(),this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),js.radius+=i,e.ray.intersectsSphere(js)===!1)return;ks.copy(r).invert(),As.copy(e.ray).applyMatrix4(ks);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o;if(n.isBufferGeometry){let i=n.index,o=n.attributes.position;if(i!==null){let n=Math.max(0,a.start),c=Math.min(i.count,a.start+a.count);for(let a=n,l=c;a<l;a++){let n=i.getX(a);Ms.fromBufferAttribute(o,n),$t(Ms,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(o.count,a.start+a.count);for(let a=n,c=i;a<c;a++)Ms.fromBufferAttribute(o,a),$t(Ms,a,s,r,e,t,this)}}else console.error(`THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){let n=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error(`THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.`)}}},Ns.prototype.isPoints=!0,Ps=class extends Yr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.format=o===void 0?mr:o,this.minFilter=a===void 0?or:a,this.magFilter=i===void 0?or:i,this.generateMipmaps=!1;let l=this;function u(){l.needsUpdate=!0,e.requestVideoFrameCallback(u)}`requestVideoFrameCallback`in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!(`requestVideoFrameCallback`in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Ps.prototype.isVideoTexture=!0,Fs=class extends Yr{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(null,a,o,s,c,l,r,i,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Fs.prototype.isCompressedTexture=!0,Is=class extends Yr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.needsUpdate=!0}},Is.prototype.isCanvasTexture=!0,Ls=class extends Yr{constructor(e,t,n,r,i,a,o,s,c,l){if(l=l===void 0?gr:l,l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=ur),n===void 0&&l===1027&&(n=pr),super(null,r,i,a,o,s,l,n,c),this.image={width:e,height:t},this.magFilter=o===void 0?rr:o,this.minFilter=s===void 0?rr:s,this.flipY=!1,this.generateMipmaps=!1}},Ls.prototype.isDepthTexture=!0,Rs=class extends U{constructor(e,t,n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Sa(i,3)),this.setAttribute(`normal`,new Sa(i.slice(),3)),this.setAttribute(`uv`,new Sa(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new F,s=new F,c=new F;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}},new L,new L,new L,new fa,zs={triangulate:function(e,t,n){n||=2;let r=t&&t.length,i=r?t[0]*n:e.length,a=en(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=cn(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:1/p}return nn(a,o,n,s,c,p),o}},Bs=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Mn(e),Nn(n,e);let a=e.length;t.forEach(Mn);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Nn(n,t[e]);let o=zs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}},Vs=class extends U{constructor(e,t){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Sa(r,3)),this.setAttribute(`uv`,new Sa(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?100:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?6:t.bevelThickness,d=t.bevelSize===void 0?u-2:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Hs:t.UVGenerator;t.amount!==void 0&&(console.warn(`THREE.ExtrudeBufferGeometry: amount has been renamed to depth.`),c=t.amount);let g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new L,b=new L,x=new L),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Bs.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Bs.isClockWise(t)&&(w[e]=t.reverse())}}let T=Bs.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),t.clone().multiplyScalar(n).add(e)}let O=C.length,ee=T.length;function te(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new F(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new F(r/a,i/a)}let k=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),k[e]=te(E[e],E[n],E[r]);let A=[],ne,re=k.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=te(t[e],t[r],t[i]);A.push(ne),re=re.concat(ne)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],k[e],r);ce(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=A[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],ne[e],r);ce(i.x,i.y,-n)}}}let ie=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],re[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],re[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],k[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=A[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],ne[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<ee;e++){let n=T[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<ee;e++){let n=T[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ee;e++){let t=T[e];le(t[2],t[1],t[0])}for(let e=0;e<ee;e++){let t=T[e];le(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){de(e),de(t),de(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);fe(o[0]),fe(o[1]),fe(o[2])}function ue(e,t,i,a){de(e),de(t),de(a),de(t),de(i),de(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);fe(s[0]),fe(s[1]),fe(s[3]),fe(s[1]),fe(s[2]),fe(s[3])}function de(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function fe(e){i.push(e.x),i.push(e.y)}}}toJSON(){let e=U.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Pn(t,n,e)}},Hs={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new F(a,o),new F(s,c),new F(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<.01?[new F(o,1-c),new F(l,1-d),new F(f,1-m),new F(h,1-_)]:[new F(s,1-c),new F(u,1-d),new F(p,1-m),new F(g,1-_)]}},Us=class extends U{constructor(e,t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Sa(r,3)),this.setAttribute(`normal`,new Sa(i,3)),this.setAttribute(`uv`,new Sa(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Bs.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Bs.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Bs.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}toJSON(){let e=U.prototype.toJSON.call(this),t=this.parameters.shapes;return Fn(t,e)}},Ws=class extends U{constructor(e=1,t=8,n=6,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f==0&&a==0?v=.5/t:f==n&&s==Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Sa(p,3)),this.setAttribute(`normal`,new Sa(m,3)),this.setAttribute(`uv`,new Sa(h,2))}},Gs=class extends Rs{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}},Ks=class extends w{constructor(e){super(),this.type=`ShadowMaterial`,this.color=new B(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}},Ks.prototype.isShadowMaterial=!0,qs=class extends G{constructor(e){super(e),this.type=`RawShaderMaterial`}},qs.prototype.isRawShaderMaterial=!0,Js=class extends w{constructor(e){super(),this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}},Js.prototype.isMeshStandardMaterial=!0,Ys=class extends Js{constructor(e){super(),this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new F(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=r(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,this.sheen=e.sheen?(this.sheen||new B).copy(e.sheen):null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}},Ys.prototype.isMeshPhysicalMaterial=!0,Xs=class extends w{constructor(e){super(),this.type=`MeshPhongMaterial`,this.color=new B(16777215),this.specular=new B(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}},Xs.prototype.isMeshPhongMaterial=!0,Zs=class extends w{constructor(e){super(),this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new B(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}},Zs.prototype.isMeshToonMaterial=!0,Qs=class extends w{constructor(e){super(),this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}},Qs.prototype.isMeshNormalMaterial=!0,$s=class extends w{constructor(e){super(),this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}},$s.prototype.isMeshLambertMaterial=!0,ec=class extends w{constructor(e){super(),this.defines={MATCAP:``},this.type=`MeshMatcapMaterial`,this.color=new B(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:``},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}},ec.prototype.isMeshMatcapMaterial=!0,tc=class extends _s{constructor(e){super(),this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}},tc.prototype.isLineDashedMaterial=!0,nc={arraySlice:function(e,t,n){return nc.isTypedArray(e)?new e.constructor(e.subarray(t,n===void 0?e.length:n)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r},sortedArray:function(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i},flattenJSON:function(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}},subclip:function(e,t,n,r,i=30){let a=e.clone();a.name=t;let o=[];for(let e=0;e<a.tracks.length;++e){let t=a.tracks[e],s=t.getValueSize(),c=[],l=[];for(let e=0;e<t.times.length;++e){let a=t.times[e]*i;if(!(a<n||a>=r)){c.push(t.times[e]);for(let n=0;n<s;++n)l.push(t.values[e*s+n])}}c.length!==0&&(t.times=nc.convertArray(c,t.times.constructor),t.values=nc.convertArray(l,t.values.constructor),o.push(t))}a.tracks=o;let s=1/0;for(let e=0;e<a.tracks.length;++e)s>a.tracks[e].times[0]&&(s=a.tracks[e].times[0]);for(let e=0;e<a.tracks.length;++e)a.tracks[e].shift(-1*s);return a.resetDuration(),a},makeClipAdditive:function(e,t=0,n=e,r=30){r<=0&&(r=30);let i=n.tracks.length,a=t/r;for(let t=0;t<i;++t){let r=n.tracks[t],i=r.ValueTypeName;if(i===`bool`||i===`string`)continue;let o=e.tracks.find(function(e){return e.name===r.name&&e.ValueTypeName===i});if(o===void 0)continue;let s=0,c=r.getValueSize();r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(s=c/3);let l=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(l=u/3);let d=r.times.length-1,f;if(a<=r.times[0]){let e=s,t=c-s;f=nc.arraySlice(r.values,e,t)}else if(a>=r.times[d]){let e=d*c+s,t=e+c-s;f=nc.arraySlice(r.values,e,t)}else{let e=r.createInterpolant(),t=s,n=c-s;e.evaluate(a),f=nc.arraySlice(e.resultBuffer,t,n)}i===`quaternion`&&new Qr().fromArray(f).normalize().conjugate().toArray(f);let p=o.times.length;for(let e=0;e<p;++e){let t=e*u+l;if(i===`quaternion`)Qr.multiplyQuaternionsFlat(o.values,t,f,0,o.values,t);else{let e=u-l*2;for(let n=0;n<e;++n)o.values[t+n]-=f[n]}}}return e.blendMode=Er,e}},rc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,i)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,i,e)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},rc.prototype.beforeStart_=rc.prototype.copySampleValue_,rc.prototype.afterEnd_=rc.prototype.copySampleValue_,ic=class extends rc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sr,endingEnd:Sr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cr:i=e,o=2*t-n;break;case wr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Cr:a=e,s=2*n-t;break;case wr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ac=class extends rc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},oc=class extends rc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},sc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=nc.convertArray(t,this.TimeBufferType),this.values=nc.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nc.convertArray(e.times,Array),values:nc.convertArray(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ic(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case xr:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return xr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=nc.arraySlice(n,i,a),this.values=nc.arraySlice(this.values,i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&nc.isTypedArray(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=nc.arraySlice(this.times),t=nc.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===xr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=nc.arraySlice(e,0,a),this.values=nc.arraySlice(t,0,a*n)),this}clone(){let e=nc.arraySlice(this.times,0),t=nc.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},sc.prototype.TimeBufferType=Float32Array,sc.prototype.ValueBufferType=Float32Array,sc.prototype.DefaultInterpolation=br,cc=class extends sc{},cc.prototype.ValueTypeName=`bool`,cc.prototype.ValueBufferType=Array,cc.prototype.DefaultInterpolation=yr,cc.prototype.InterpolantFactoryMethodLinear=void 0,cc.prototype.InterpolantFactoryMethodSmooth=void 0,lc=class extends sc{},lc.prototype.ValueTypeName=`color`,uc=class extends sc{},uc.prototype.ValueTypeName=`number`,dc=class extends rc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Qr.slerpFlat(i,0,a,c-o,a,c,s);return i}},fc=class extends sc{InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}},fc.prototype.ValueTypeName=`quaternion`,fc.prototype.DefaultInterpolation=br,fc.prototype.InterpolantFactoryMethodSmooth=void 0,pc=class extends sc{},pc.prototype.ValueTypeName=`string`,pc.prototype.ValueBufferType=Array,pc.prototype.DefaultInterpolation=yr,pc.prototype.InterpolantFactoryMethodLinear=void 0,pc.prototype.InterpolantFactoryMethodSmooth=void 0,mc=class extends sc{},mc.prototype.ValueTypeName=`vector`,hc=class{constructor(e,t=-1,r,i=Tr){this.name=e,this.tracks=r,this.duration=t,this.blendMode=i,this.uuid=n(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Ln(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(sc.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=nc.getKeyframeOrder(o);o=nc.sortedArray(o,1,c),s=nc.sortedArray(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new uc(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];nc.flattenJSON(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(!(!i||i.length===0)){if(i[0].morphTargets){let e={},t;for(t=0;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new uc(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*(a||1)}else{let a=`.bones[`+t[e].name+`]`;n(mc,a+`.position`,i,`pos`,r),n(fc,a+`.quaternion`,i,`rot`,r),n(mc,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}},gc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},_c=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},vc=new _c,yc=class{constructor(e){this.manager=e===void 0?vc:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},bc={},xc=class extends yc{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=gc.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;if(bc[e]!==void 0){bc[e].push({onLoad:t,onProgress:n,onError:r});return}let o=e.match(/^data:(.*?)(;base64)?,(.*)$/),s;if(o){let n=o[1],a=!!o[2],s=o[3];s=decodeURIComponent(s),a&&(s=atob(s));try{let r,a=(this.responseType||``).toLowerCase();switch(a){case`arraybuffer`:case`blob`:let e=new Uint8Array(s.length);for(let t=0;t<s.length;t++)e[t]=s.charCodeAt(t);r=a===`blob`?new Blob([e.buffer],{type:n}):e.buffer;break;case`document`:r=new DOMParser().parseFromString(s,n);break;case`json`:r=JSON.parse(s);break;default:r=s}setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0)}catch(t){setTimeout(function(){r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)},0)}}else{bc[e]=[],bc[e].push({onLoad:t,onProgress:n,onError:r}),s=new XMLHttpRequest,s.open(`GET`,e,!0),s.addEventListener(`load`,function(t){let n=this.response,r=bc[e];if(delete bc[e],this.status===200||this.status===0){this.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),gc.add(e,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];t.onLoad&&t.onLoad(n)}i.manager.itemEnd(e)}else{for(let e=0,n=r.length;e<n;e++){let n=r[e];n.onError&&n.onError(t)}i.manager.itemError(e),i.manager.itemEnd(e)}},!1),s.addEventListener(`progress`,function(t){let n=bc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onProgress&&r.onProgress(t)}},!1),s.addEventListener(`error`,function(t){let n=bc[e];delete bc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}i.manager.itemError(e),i.manager.itemEnd(e)},!1),s.addEventListener(`abort`,function(t){let n=bc[e];delete bc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}i.manager.itemError(e),i.manager.itemEnd(e)},!1),this.responseType!==void 0&&(s.responseType=this.responseType),this.withCredentials!==void 0&&(s.withCredentials=this.withCredentials),s.overrideMimeType&&s.overrideMimeType(this.mimeType===void 0?`text/plain`:this.mimeType);for(let e in this.requestHeader)s.setRequestHeader(e,this.requestHeader[e]);s.send(null)}return i.manager.itemStart(e),s}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Sc=class extends yc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=gc.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=document.createElementNS(`http://www.w3.org/1999/xhtml`,`img`);function s(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1),gc.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.substr(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},Cc=class extends yc{constructor(e){super(e)}load(e,t,n,r){let i=new no,a=new Sc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function s(n){a.load(e[n],function(e){i.images[n]=e,o++,o===6&&(i.needsUpdate=!0,t&&t(i))},void 0,r)}for(let t=0;t<e.length;++t)s(t);return i}},wc=class extends yc{constructor(e){super(e)}load(e,t,n,r){let i=new Yr,a=new Sc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(n){i.image=n;let r=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;i.format=r?mr:hr,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Tc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new F:new L);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],a=[],o=[],s=new L,c=new R;for(let t=0;t<=e;t++){let n=t/e;i[t]=this.getTangentAt(n,new L),i[t].normalize()}a[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],s),o[0].crossVectors(i[0],a[0]);for(let t=1;t<=e;t++){if(a[t]=a[t-1].clone(),o[t]=o[t-1].clone(),s.crossVectors(i[t-1],i[t]),s.length()>2**-52){s.normalize();let e=Math.acos(r(i[t-1].dot(i[t]),-1,1));a[t].applyMatrix4(c.makeRotationAxis(s,e))}o[t].crossVectors(i[t],a[t])}if(t===!0){let t=Math.acos(r(a[0].dot(a[e]),-1,1));t/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(t=-t);for(let n=1;n<=e;n++)a[n].applyMatrix4(c.makeRotationAxis(i[n],t*n)),o[n].crossVectors(i[n],a[n])}return{tangents:i,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ec=class extends Tc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let n=t||new F,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ec.prototype.isEllipseCurve=!0,Dc=class extends Ec{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.type=`ArcCurve`}},Dc.prototype.isArcCurve=!0,Oc=new L,kc=new Rn,Ac=new Rn,jc=new Rn,Mc=class extends Tc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Oc.subVectors(r[0],r[1]).add(r[0]),c=Oc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Oc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Oc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),kc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ac.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),jc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(kc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ac.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),jc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(kc.calc(s),Ac.calc(s),jc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},Mc.prototype.isCatmullRomCurve3=!0,Nc=class extends Tc{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Jn(e,r.x,i.x,a.x,o.x),Jn(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc.prototype.isCubicBezierCurve=!0,Pc=class extends Tc{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Jn(e,r.x,i.x,a.x,o.x),Jn(e,r.y,i.y,a.y,o.y),Jn(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc.prototype.isCubicBezierCurve3=!0,Fc=class extends Tc{constructor(e=new F,t=new F){super(),this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new F;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc.prototype.isLineCurve=!0,Ic=class extends Tc{constructor(e=new L,t=new L){super(),this.type=`LineCurve3`,this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends Tc{constructor(e=new F,t=new F,n=new F){super(),this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Un(e,r.x,i.x,a.x),Un(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc.prototype.isQuadraticBezierCurve=!0,Rc=class extends Tc{constructor(e=new L,t=new L,n=new L){super(),this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Un(e,r.x,i.x,a.x),Un(e,r.y,i.y,a.y),Un(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc.prototype.isQuadraticBezierCurve3=!0,zc=class extends Tc{constructor(e=[]){super(),this.type=`SplineCurve`,this.points=e}getPoint(e,t=new F){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(zn(o,s.x,c.x,l.x,u.x),zn(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new F().fromArray(n))}return this}},zc.prototype.isSplineCurve=!0,Bc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Mc,CubicBezierCurve:Nc,CubicBezierCurve3:Pc,EllipseCurve:Ec,LineCurve:Fc,LineCurve3:Ic,QuadraticBezierCurve:Lc,QuadraticBezierCurve3:Rc,SplineCurve:zc}),Vc=class extends Tc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Fc(t,e))}getPoint(e){let t=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=t){let e=n[r]-t,i=this.curves[r],a=i.getLength(),o=a===0?0:1-e/a;return i.getPointAt(o)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Bc[n.type]().fromJSON(n))}return this}},Hc=class extends Vc{constructor(e){super(),this.type=`Path`,this.currentPoint=new F,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fc(this.currentPoint.clone(),new F(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Lc(this.currentPoint.clone(),new F(e,t),new F(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Nc(this.currentPoint.clone(),new F(e,t),new F(n,r),new F(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ec(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Uc=class extends Hc{constructor(e){super(e),this.uuid=n(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Hc().fromJSON(n))}return this}},Wc=class extends z{constructor(e,t=1){super(),this.type=`Light`,this.color=new B(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Wc.prototype.isLight=!0,Gc=class extends Wc{constructor(e,t,n){super(e,n),this.type=`HemisphereLight`,this.position.copy(z.DefaultUp),this.updateMatrix(),this.groundColor=new B(t)}copy(e){return Wc.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}},Gc.prototype.isHemisphereLight=!0,Kc=new R,qc=new L,Jc=new L,Yc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new F(512,512),this.map=null,this.mapPass=null,this.matrix=new R,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new F(1,1),this._viewportCount=1,this._viewports=[new I(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=class extends Yc{constructor(){super(new Qa(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=Wr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xc.prototype.isSpotLightShadow=!0,Zc=class extends Wc{constructor(e,t,n=0,r=Math.PI/3,i=0,a=1){super(e,t),this.type=`SpotLight`,this.position.copy(z.DefaultUp),this.updateMatrix(),this.target=new z,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.shadow=new Xc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zc.prototype.isSpotLight=!0,Qc=new R,$c=new L,el=new L,tl=class extends Yc{constructor(){super(new Qa(90,1,.5,500)),this._frameExtents=new F(4,2),this._viewportCount=6,this._viewports=[new I(2,1,1,1),new I(0,1,1,1),new I(3,1,1,1),new I(1,1,1,1),new I(3,0,1,1),new I(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),$c.setFromMatrixPosition(e.matrixWorld),n.position.copy($c),el.copy(n.position),el.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(el),n.updateMatrixWorld(),r.makeTranslation(-$c.x,-$c.y,-$c.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc)}},tl.prototype.isPointLightShadow=!0,nl=class extends Wc{constructor(e,t,n=0,r=1){super(e,t),this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nl.prototype.isPointLight=!0,rl=class extends Za{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rl.prototype.isOrthographicCamera=!0,il=class extends Yc{constructor(){super(new rl(-5,5,5,-5,.5,500))}},il.prototype.isDirectionalLightShadow=!0,al=class extends Wc{constructor(e,t){super(e,t),this.type=`DirectionalLight`,this.position.copy(z.DefaultUp),this.updateMatrix(),this.target=new z,this.shadow=new il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},al.prototype.isDirectionalLight=!0,ol=class extends Wc{constructor(e,t){super(e,t),this.type=`AmbientLight`}},ol.prototype.isAmbientLight=!0,sl=class extends Wc{constructor(e,t,n=10,r=10){super(e,t),this.type=`RectAreaLight`,this.width=n,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},sl.prototype.isRectAreaLight=!0,cl=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*i),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*r*1.092548),t.addScaledVector(a[5],r*i*1.092548),t.addScaledVector(a[6],.315392*(3*i*i-1)),t.addScaledVector(a[7],n*i*1.092548),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){let n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*r),t.addScaledVector(a[2],1.023328*i),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*r),t.addScaledVector(a[5],.858086*r*i),t.addScaledVector(a[6],.743125*i*i-.247708),t.addScaledVector(a[7],.858086*n*i),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let n=e.x,r=e.y,i=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*i,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*n*i,t[8]=.546274*(n*n-r*r)}},cl.prototype.isSphericalHarmonics3=!0,ll=class extends Wc{constructor(e=new cl,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},ll.prototype.isLightProbe=!0,ul=class{static decodeText(e){if(typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.substr(0,t+1)}},dl=class extends U{constructor(){super(),this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},dl.prototype.isInstancedBufferGeometry=!0,fl=class extends H{constructor(e,t,n,r){typeof n==`number`&&(r=n,n=!1,console.error(`THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.`)),super(e,t,n),this.meshPerAttribute=r||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fl.prototype.isInstancedBufferAttribute=!0,pl=class extends yc{constructor(e){super(e),typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=gc.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){gc.add(e,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}},pl.prototype.isImageBitmapLoader=!0,ml=class{constructor(){this.type=`ShapePath`,this.color=new B,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n],i=new Uc;i.curves=r.curves,t.push(i)}return t}function r(e,t){let n=t.length,r=!1;for(let i=n-1,a=0;a<n;i=a++){let n=t[i],o=t[a],s=o.x-n.x,c=o.y-n.y;if(Math.abs(c)>2**-52){if(c<0&&(n=t[a],s=-s,o=t[i],c=-c),e.y<n.y||e.y>o.y)continue;if(e.y===n.y){if(e.x===n.x)return!0}else{let t=c*(e.x-n.x)-s*(e.y-n.y);if(t===0)return!0;if(t<0)continue;r=!r}}else{if(e.y!==n.y)continue;if(o.x<=e.x&&e.x<=n.x||n.x<=e.x&&e.x<=o.x)return!0}}return r}let i=Bs.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);let o,s,c,l=[];if(a.length===1)return s=a[0],c=new Uc,c.curves=s.curves,l.push(c),l;let u=!i(a[0].getPoints());u=e?!u:u;let d=[],f=[],p=[],m=0,h;f[m]=void 0,p[m]=[];for(let t=0,n=a.length;t<n;t++)s=a[t],h=s.getPoints(),o=i(h),o=e?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new Uc,p:h},f[m].s.curves=s.curves,u&&m++,p[m]=[]):p[m].push({h:s,p:h[0]});if(!f[0])return n(a);if(f.length>1){let e=!1,t=[];for(let e=0,t=f.length;e<t;e++)d[e]=[];for(let n=0,i=f.length;n<i;n++){let i=p[n];for(let a=0;a<i.length;a++){let o=i[a],s=!0;for(let i=0;i<f.length;i++)r(o.p,f[i].p)&&(n!==i&&t.push({froms:n,tos:i,hole:a}),s?(s=!1,d[i].push(o)):e=!0);s&&d[n].push(o)}}t.length>0&&(e||(p=d))}let g;for(let e=0,t=f.length;e<t;e++){c=f[e].s,l.push(c),g=p[e];for(let e=0,t=g.length;e<t;e++)c.holes.push(g[e].h)}return l}},hl=class{constructor(e){this.type=`Font`,this.data=e}generateShapes(e,t=100){let n=[],r=Yn(e,t,this.data);for(let e=0,t=r.length;e<t;e++)Array.prototype.push.apply(n,r[e].toShapes());return n}},hl.prototype.isFont=!0,_l={getContext:function(){return gl===void 0&&(gl=new(window.AudioContext||window.webkitAudioContext)),gl},setContext:function(e){gl=e}},vl=class extends yc{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new xc(this.manager);a.setResponseType(`arraybuffer`),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{let e=n.slice(0);_l.getContext().decodeAudioData(e,function(e){t(e)})}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}},yl=class extends ll{constructor(e,t,n=1){super(void 0,n);let r=new B().set(e),i=new B().set(t),a=new L(r.r,r.g,r.b),o=new L(i.r,i.g,i.b),s=Math.sqrt(Math.PI),c=s*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}},yl.prototype.isHemisphereLightProbe=!0,bl=class extends ll{constructor(e,t=1){super(void 0,t);let n=new B().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}},bl.prototype.isAmbientLightProbe=!0,xl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zn(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zn();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Sl=class extends z{constructor(e){super(),this.type=`Audio`,this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType=`empty`,this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType=`audioNode`,this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType=`mediaNode`,this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType=`mediaStreamNode`,this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType=`buffer`,this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn(`THREE.Audio: Audio is already playing.`);return}if(this.hasPlaybackControl===!1){console.warn(`THREE.Audio: this Audio has no playback control.`);return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn(`THREE.Audio: this Audio has no playback control.`);return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress%=this.duration||this.buffer.duration),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn(`THREE.Audio: this Audio has no playback control.`);return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||=[],this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn(`THREE.Audio: this Audio has no playback control.`);return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn(`THREE.Audio: this Audio has no playback control.`),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn(`THREE.Audio: this Audio has no playback control.`);return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Cl=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},wl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){Qr.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;Qr.multiplyQuaternionsFlat(e,a,e,t,e,n),Qr.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Tl=`\\[\\]\\.:\\/`,El=RegExp(`[\\[\\]\\.:\\/]`,`g`),Dl=`[^\\[\\]\\.:\\/]`,Ol=`[^`+Tl.replace(`\\.`,``)+`]`,kl=`((?:WC+[\\/:])*)`.replace(`WC`,Dl),Al=`(WCOD+)?`.replace(`WCOD`,Ol),jl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Dl),Ml=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Dl),Nl=RegExp(`^`+kl+Al+jl+Ml+`$`),Pl=[`material`,`materials`,`bones`],Fl=class{constructor(e,t,n){let r=n||J.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},J=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(El,``)}static parseTrackName(e){let t=Nl.exec(e);if(!t)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Pl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(!t||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error(`THREE.PropertyBinding: Trying to update node for track: `+this.path+` but it wasn't found.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}else{console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.`,this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},J.Composite=Fl,J.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},J.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},J.prototype.GetterByBindingType=[J.prototype._getValue_direct,J.prototype._getValue_array,J.prototype._getValue_arrayElement,J.prototype._getValue_toArray],J.prototype.SetterByBindingTypeAndVersioning=[[J.prototype._setValue_direct,J.prototype._setValue_direct_setNeedsUpdate,J.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[J.prototype._setValue_array,J.prototype._setValue_array_setNeedsUpdate,J.prototype._setValue_array_setMatrixWorldNeedsUpdate],[J.prototype._setValue_arrayElement,J.prototype._setValue_arrayElement_setNeedsUpdate,J.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[J.prototype._setValue_fromArray,J.prototype._setValue_fromArray_setNeedsUpdate,J.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],Il=class{constructor(){this.uuid=n(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let t=0,n=arguments.length;t!==n;++t)e[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,i=this._bindings,a=i.length,o,s=e.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){let u=arguments[l],d=u.uuid,f=t[d];if(f===void 0){f=s++,t[d]=f,e.push(u);for(let e=0,t=a;e!==t;++e)i[e].push(new J(u,n[e],r[e]))}else if(f<c){o=e[f];let s=--c,l=e[s];t[l.uuid]=f,e[f]=l,t[d]=s,e[s]=u;for(let e=0,t=a;e!==t;++e){let t=i[e],a=t[s],o=t[f];t[f]=a,o===void 0&&(o=new J(u,n[e],r[e])),t[s]=o}}else e[f]!==o&&console.error(`THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.`)}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let o=arguments[a],s=o.uuid,c=t[s];if(c!==void 0&&c>=i){let a=i++,l=e[a];t[l.uuid]=c,e[c]=l,t[s]=a,e[a]=o;for(let e=0,t=r;e!==t;++e){let t=n[e],r=t[a],i=t[c];t[c]=r,t[a]=i}}}this.nCachedObjects_=i}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_,a=e.length;for(let o=0,s=arguments.length;o!==s;++o){let s=arguments[o].uuid,c=t[s];if(c!==void 0){if(delete t[s],c<i){let o=--i,s=e[o],l=--a,u=e[l];t[s.uuid]=c,e[c]=s,t[u.uuid]=o,e[o]=u,e.pop();for(let e=0,t=r;e!==t;++e){let t=n[e],r=t[o],i=t[l];t[c]=r,t[o]=i,t.pop()}}else{let i=--a,o=e[i];i>0&&(t[o.uuid]=c),e[c]=o,e.pop();for(let e=0,t=r;e!==t;++e){let t=n[e];t[c]=t[i],t.pop()}}}}this.nCachedObjects_=i}subscribe_(e,t){let n=this._bindingsIndicesByPath,r=n[e],i=this._bindings;if(r!==void 0)return i[r];let a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,l=this.nCachedObjects_,u=Array(c);r=i.length,n[e]=r,a.push(e),o.push(t),i.push(u);for(let n=l,r=s.length;n!==r;++n){let r=s[n];u[n]=new J(r,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let r=this._paths,i=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o],c=e[o];t[c]=n,a[n]=s,a.pop(),i[n]=i[o],i.pop(),r[n]=r[o],r.pop()}}},Il.prototype.isAnimationObjectGroup=!0,Ll=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:Sr,endingEnd:Sr};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_r,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;if(r<0||n===0)return;this._startTime=null,t=n*r}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case Er:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case Tr:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===vr;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Cr,r.endingEnd=Cr):(r.endingStart=e?this.zeroSlopeAtStart?Cr:Sr:wr,r.endingEnd=t?this.zeroSlopeAtEnd?Cr:Sr:wr)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},Rl=class extends Br{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new wl(J.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ac(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?hc.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?Tr:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Ll(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?hc.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Rl.prototype._controlInterpolantsResultBuffer=new Float32Array(1),zl=class e{constructor(e){typeof e==`string`&&(console.warn(`THREE.Uniform: Type parameter is no longer needed.`),e=arguments[1]),this.value=e}clone(){return new e(this.value.clone===void 0?this.value:this.value.clone())}},Bl=class extends Vo{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Bl.prototype.isInstancedInterleavedBuffer=!0,Vl=class{constructor(e,t,n,r,i){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=i,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Vl.prototype.isGLBufferAttribute=!0,Hl=new F,Ul=class{constructor(e=new F(1/0,1/0),t=new F(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn(`THREE.Box2: .getCenter() target is now required`),e=new F),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn(`THREE.Box2: .getSize() target is now required`),e=new F),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn(`THREE.Box2: .getParameter() target is now required`),t=new F),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn(`THREE.Box2: .clampPoint() target is now required`),t=new F),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Hl.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ul.prototype.isBox2=!0,Wl=new L,Gl=new L,Kl=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn(`THREE.Line3: .getCenter() target is now required`),e=new L),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn(`THREE.Line3: .delta() target is now required`),e=new L),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn(`THREE.Line3: .at() target is now required`),t=new L),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wl.subVectors(e,this.start),Gl.subVectors(this.end,this.start);let n=Gl.dot(Gl),i=Gl.dot(Wl)/n;return t&&(i=r(i,0,1)),i}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn(`THREE.Line3: .closestPointToPoint() target is now required`),n=new L),this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},ql=class extends z{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}},ql.prototype.isImmediateRenderObject=!0,Jl=new L,Yl=new R,Xl=new R,Zl=class extends Es{constructor(e){let t=Qn(e),n=new U,r=[],i=[],a=new B(0,0,1),o=new B(0,1,0);for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(a.r,a.g,a.b),i.push(o.r,o.g,o.b))}n.setAttribute(`position`,new Sa(r,3)),n.setAttribute(`color`,new Sa(i,3));let s=new _s({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,s),this.type=`SkeletonHelper`,this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);Xl.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(Yl.multiplyMatrices(Xl,i.matrixWorld),Jl.setFromMatrixPosition(Yl),r.setXYZ(n,Jl.x,Jl.y,Jl.z),Yl.multiplyMatrices(Xl,i.parent.matrixWorld),Jl.setFromMatrixPosition(Yl),r.setXYZ(n+1,Jl.x,Jl.y,Jl.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}},Ql=class extends Es{constructor(e=10,t=10,n=4473924,r=8947848){n=new B(n),r=new B(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new U;l.setAttribute(`position`,new Sa(s,3)),l.setAttribute(`color`,new Sa(c,3));let u=new _s({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}},$l=new Float32Array(1),new Int32Array($l.buffer),eu=4,tu=8,nu=[.125,.215,.35,.446,.526,.582],ru=5+nu.length,iu=new _a({side:1,depthWrite:!1,depthTest:!1}),new W(new qa,iu),{_lodPlanes:au,_sizeLods:ou,_sigmas:su}=$n(),cu=(1+Math.sqrt(5))/2,lu=1/cu,-lu,-lu,-cu,Tc.create=function(e,t){return console.log(`THREE.Curve.create() has been deprecated`),e.prototype=Object.create(Tc.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},Hc.prototype.fromPoints=function(e){return console.warn(`THREE.Path: .fromPoints() has been renamed to .setFromPoints().`),this.setFromPoints(e)},Ql.prototype.setColors=function(){console.error(`THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.`)},Zl.prototype.update=function(){console.error(`THREE.SkeletonHelper: update() no longer needs to be called.`)},yc.prototype.extractUrlBase=function(e){return console.warn(`THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.`),ul.extractUrlBase(e)},yc.Handlers={add:function(){console.error(`THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.`)},get:function(){console.error(`THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.`)}},Ul.prototype.center=function(e){return console.warn(`THREE.Box2: .center() has been renamed to .getCenter().`),this.getCenter(e)},Ul.prototype.empty=function(){return console.warn(`THREE.Box2: .empty() has been renamed to .isEmpty().`),this.isEmpty()},Ul.prototype.isIntersectionBox=function(e){return console.warn(`THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().`),this.intersectsBox(e)},Ul.prototype.size=function(e){return console.warn(`THREE.Box2: .size() has been renamed to .getSize().`),this.getSize(e)},ti.prototype.center=function(e){return console.warn(`THREE.Box3: .center() has been renamed to .getCenter().`),this.getCenter(e)},ti.prototype.empty=function(){return console.warn(`THREE.Box3: .empty() has been renamed to .isEmpty().`),this.isEmpty()},ti.prototype.isIntersectionBox=function(e){return console.warn(`THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().`),this.intersectsBox(e)},ti.prototype.isIntersectionSphere=function(e){return console.warn(`THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().`),this.intersectsSphere(e)},ti.prototype.size=function(e){return console.warn(`THREE.Box3: .size() has been renamed to .getSize().`),this.getSize(e)},yi.prototype.empty=function(){return console.warn(`THREE.Sphere: .empty() has been renamed to .isEmpty().`),this.isEmpty()},so.prototype.setFromMatrix=function(e){return console.warn(`THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().`),this.setFromProjectionMatrix(e)},Kl.prototype.center=function(e){return console.warn(`THREE.Line3: .center() has been renamed to .getCenter().`),this.getCenter(e)},Gr.prototype.flattenToArrayOffset=function(e,t){return console.warn(`THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.`),this.toArray(e,t)},Gr.prototype.multiplyVector3=function(e){return console.warn(`THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.`),e.applyMatrix3(this)},Gr.prototype.multiplyVector3Array=function(){console.error(`THREE.Matrix3: .multiplyVector3Array() has been removed.`)},Gr.prototype.applyToBufferAttribute=function(e){return console.warn(`THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.`),e.applyMatrix3(this)},Gr.prototype.applyToVector3Array=function(){console.error(`THREE.Matrix3: .applyToVector3Array() has been removed.`)},Gr.prototype.getInverse=function(e){return console.warn(`THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.`),this.copy(e).invert()},R.prototype.extractPosition=function(e){return console.warn(`THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().`),this.copyPosition(e)},R.prototype.flattenToArrayOffset=function(e,t){return console.warn(`THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.`),this.toArray(e,t)},R.prototype.getPosition=function(){return console.warn(`THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.`),new L().setFromMatrixColumn(this,3)},R.prototype.setRotationFromQuaternion=function(e){return console.warn(`THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().`),this.makeRotationFromQuaternion(e)},R.prototype.multiplyToArray=function(){console.warn(`THREE.Matrix4: .multiplyToArray() has been removed.`)},R.prototype.multiplyVector3=function(e){return console.warn(`THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},R.prototype.multiplyVector4=function(e){return console.warn(`THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},R.prototype.multiplyVector3Array=function(){console.error(`THREE.Matrix4: .multiplyVector3Array() has been removed.`)},R.prototype.rotateAxis=function(e){console.warn(`THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.`),e.transformDirection(this)},R.prototype.crossVector=function(e){return console.warn(`THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},R.prototype.translate=function(){console.error(`THREE.Matrix4: .translate() has been removed.`)},R.prototype.rotateX=function(){console.error(`THREE.Matrix4: .rotateX() has been removed.`)},R.prototype.rotateY=function(){console.error(`THREE.Matrix4: .rotateY() has been removed.`)},R.prototype.rotateZ=function(){console.error(`THREE.Matrix4: .rotateZ() has been removed.`)},R.prototype.rotateByAxis=function(){console.error(`THREE.Matrix4: .rotateByAxis() has been removed.`)},R.prototype.applyToBufferAttribute=function(e){return console.warn(`THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},R.prototype.applyToVector3Array=function(){console.error(`THREE.Matrix4: .applyToVector3Array() has been removed.`)},R.prototype.makeFrustum=function(e,t,n,r,i,a){return console.warn(`THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.`),this.makePerspective(e,t,r,n,i,a)},R.prototype.getInverse=function(e){return console.warn(`THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.`),this.copy(e).invert()},ta.prototype.isIntersectionLine=function(e){return console.warn(`THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().`),this.intersectsLine(e)},Qr.prototype.multiplyVector3=function(e){return console.warn(`THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.`),e.applyQuaternion(this)},Qr.prototype.inverse=function(){return console.warn(`THREE.Quaternion: .inverse() has been renamed to invert().`),this.invert()},Di.prototype.isIntersectionBox=function(e){return console.warn(`THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().`),this.intersectsBox(e)},Di.prototype.isIntersectionPlane=function(e){return console.warn(`THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().`),this.intersectsPlane(e)},Di.prototype.isIntersectionSphere=function(e){return console.warn(`THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().`),this.intersectsSphere(e)},fa.prototype.area=function(){return console.warn(`THREE.Triangle: .area() has been renamed to .getArea().`),this.getArea()},fa.prototype.barycoordFromPoint=function(e,t){return console.warn(`THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().`),this.getBarycoord(e,t)},fa.prototype.midpoint=function(e){return console.warn(`THREE.Triangle: .midpoint() has been renamed to .getMidpoint().`),this.getMidpoint(e)},fa.prototypenormal=function(e){return console.warn(`THREE.Triangle: .normal() has been renamed to .getNormal().`),this.getNormal(e)},fa.prototype.plane=function(e){return console.warn(`THREE.Triangle: .plane() has been renamed to .getPlane().`),this.getPlane(e)},fa.barycoordFromPoint=function(e,t,n,r,i){return console.warn(`THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().`),fa.getBarycoord(e,t,n,r,i)},fa.normal=function(e,t,n,r){return console.warn(`THREE.Triangle: .normal() has been renamed to .getNormal().`),fa.getNormal(e,t,n,r)},Uc.prototype.extractAllPoints=function(e){return console.warn(`THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.`),this.extractPoints(e)},Uc.prototype.extrude=function(e){return console.warn(`THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.`),new Vs(this,e)},Uc.prototype.makeGeometry=function(e){return console.warn(`THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.`),new Us(this,e)},F.prototype.fromAttribute=function(e,t,n){return console.warn(`THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().`),this.fromBufferAttribute(e,t,n)},F.prototype.distanceToManhattan=function(e){return console.warn(`THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().`),this.manhattanDistanceTo(e)},F.prototype.lengthManhattan=function(){return console.warn(`THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().`),this.manhattanLength()},L.prototype.setEulerFromRotationMatrix=function(){console.error(`THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.`)},L.prototype.setEulerFromQuaternion=function(){console.error(`THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.`)},L.prototype.getPositionFromMatrix=function(e){return console.warn(`THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().`),this.setFromMatrixPosition(e)},L.prototype.getScaleFromMatrix=function(e){return console.warn(`THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().`),this.setFromMatrixScale(e)},L.prototype.getColumnFromMatrix=function(e,t){return console.warn(`THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().`),this.setFromMatrixColumn(t,e)},L.prototype.applyProjection=function(e){return console.warn(`THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.`),this.applyMatrix4(e)},L.prototype.fromAttribute=function(e,t,n){return console.warn(`THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().`),this.fromBufferAttribute(e,t,n)},L.prototype.distanceToManhattan=function(e){return console.warn(`THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().`),this.manhattanDistanceTo(e)},L.prototype.lengthManhattan=function(){return console.warn(`THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().`),this.manhattanLength()},I.prototype.fromAttribute=function(e,t,n){return console.warn(`THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().`),this.fromBufferAttribute(e,t,n)},I.prototype.lengthManhattan=function(){return console.warn(`THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().`),this.manhattanLength()},z.prototype.getChildByName=function(e){return console.warn(`THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().`),this.getObjectByName(e)},z.prototype.renderDepth=function(){console.warn(`THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.`)},z.prototype.translate=function(e,t){return console.warn(`THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.`),this.translateOnAxis(t,e)},z.prototype.getWorldRotation=function(){console.error(`THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.`)},z.prototype.applyMatrix=function(e){return console.warn(`THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().`),this.applyMatrix4(e)},Object.defineProperties(z.prototype,{eulerOrder:{get:function(){return console.warn(`THREE.Object3D: .eulerOrder is now .rotation.order.`),this.rotation.order},set:function(e){console.warn(`THREE.Object3D: .eulerOrder is now .rotation.order.`),this.rotation.order=e}},useQuaternion:{get:function(){console.warn(`THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.`)},set:function(){console.warn(`THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.`)}}}),W.prototype.setDrawMode=function(){console.error(`THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.`)},Object.defineProperties(W.prototype,{drawMode:{get:function(){return console.error(`THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.`),0},set:function(){console.error(`THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.`)}}}),us.prototype.initBones=function(){console.error(`THREE.SkinnedMesh: initBones() has been removed.`)},Qa.prototype.setLens=function(e,t){console.warn(`THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.`),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)},Object.defineProperties(Wc.prototype,{onlyShadow:{set:function(){console.warn(`THREE.Light: .onlyShadow has been removed.`)}},shadowCameraFov:{set:function(e){console.warn(`THREE.Light: .shadowCameraFov is now .shadow.camera.fov.`),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn(`THREE.Light: .shadowCameraLeft is now .shadow.camera.left.`),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn(`THREE.Light: .shadowCameraRight is now .shadow.camera.right.`),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn(`THREE.Light: .shadowCameraTop is now .shadow.camera.top.`),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn(`THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.`),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn(`THREE.Light: .shadowCameraNear is now .shadow.camera.near.`),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn(`THREE.Light: .shadowCameraFar is now .shadow.camera.far.`),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn(`THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.`)}},shadowBias:{set:function(e){console.warn(`THREE.Light: .shadowBias is now .shadow.bias.`),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn(`THREE.Light: .shadowDarkness has been removed.`)}},shadowMapWidth:{set:function(e){console.warn(`THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.`),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn(`THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.`),this.shadow.mapSize.height=e}}}),Object.defineProperties(H.prototype,{length:{get:function(){return console.warn(`THREE.BufferAttribute: .length has been deprecated. Use .count instead.`),this.array.length}},dynamic:{get:function(){return console.warn(`THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.`),this.usage===zr},set:function(){console.warn(`THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.`),this.setUsage(zr)}}}),H.prototype.setDynamic=function(e){return console.warn(`THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.`),this.setUsage(e===!0?zr:Rr),this},H.prototype.copyIndicesArray=function(){console.error(`THREE.BufferAttribute: .copyIndicesArray() has been removed.`)},H.prototype.setArray=function(){console.error(`THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers`)},U.prototype.addIndex=function(e){console.warn(`THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().`),this.setIndex(e)},U.prototype.addAttribute=function(e,t){return console.warn(`THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().`),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn(`THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).`),this.setAttribute(e,new H(arguments[1],arguments[2]))):e===`index`?(console.warn(`THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.`),this.setIndex(t),this):this.setAttribute(e,t)},U.prototype.addDrawCall=function(e,t,n){n!==void 0&&console.warn(`THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.`),console.warn(`THREE.BufferGeometry: .addDrawCall() is now .addGroup().`),this.addGroup(e,t)},U.prototype.clearDrawCalls=function(){console.warn(`THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().`),this.clearGroups()},U.prototype.computeOffsets=function(){console.warn(`THREE.BufferGeometry: .computeOffsets() has been removed.`)},U.prototype.removeAttribute=function(e){return console.warn(`THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().`),this.deleteAttribute(e)},U.prototype.applyMatrix=function(e){return console.warn(`THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().`),this.applyMatrix4(e)},Object.defineProperties(U.prototype,{drawcalls:{get:function(){return console.error(`THREE.BufferGeometry: .drawcalls has been renamed to .groups.`),this.groups}},offsets:{get:function(){return console.warn(`THREE.BufferGeometry: .offsets has been renamed to .groups.`),this.groups}}}),Vo.prototype.setDynamic=function(e){return console.warn(`THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.`),this.setUsage(e===!0?zr:Rr),this},Vo.prototype.setArray=function(){console.error(`THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers`)},Vs.prototype.getArrays=function(){console.error(`THREE.ExtrudeGeometry: .getArrays() has been removed.`)},Vs.prototype.addShapeList=function(){console.error(`THREE.ExtrudeGeometry: .addShapeList() has been removed.`)},Vs.prototype.addShape=function(){console.error(`THREE.ExtrudeGeometry: .addShape() has been removed.`)},Bo.prototype.dispose=function(){console.error(`THREE.Scene: .dispose() has been removed.`)},zl.prototype.onUpdate=function(){return console.warn(`THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.`),this},Object.defineProperties(w.prototype,{wrapAround:{get:function(){console.warn(`THREE.Material: .wrapAround has been removed.`)},set:function(){console.warn(`THREE.Material: .wrapAround has been removed.`)}},overdraw:{get:function(){console.warn(`THREE.Material: .overdraw has been removed.`)},set:function(){console.warn(`THREE.Material: .overdraw has been removed.`)}},wrapRGB:{get:function(){return console.warn(`THREE.Material: .wrapRGB has been removed.`),new B}},shading:{get:function(){console.error(`THREE.`+this.type+`: .shading has been removed. Use the boolean .flatShading instead.`)},set:function(e){console.warn(`THREE.`+this.type+`: .shading has been removed. Use the boolean .flatShading instead.`),this.flatShading=e===1}},stencilMask:{get:function(){return console.warn(`THREE.`+this.type+`: .stencilMask has been removed. Use .stencilFuncMask instead.`),this.stencilFuncMask},set:function(e){console.warn(`THREE.`+this.type+`: .stencilMask has been removed. Use .stencilFuncMask instead.`),this.stencilFuncMask=e}}}),Object.defineProperties(G.prototype,{derivatives:{get:function(){return console.warn(`THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.`),this.extensions.derivatives},set:function(e){console.warn(`THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.`),this.extensions.derivatives=e}}}),N.prototype.clearTarget=function(e,t,n,r){console.warn(`THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.`),this.setRenderTarget(e),this.clear(t,n,r)},N.prototype.animate=function(e){console.warn(`THREE.WebGLRenderer: .animate() is now .setAnimationLoop().`),this.setAnimationLoop(e)},N.prototype.getCurrentRenderTarget=function(){return console.warn(`THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().`),this.getRenderTarget()},N.prototype.getMaxAnisotropy=function(){return console.warn(`THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().`),this.capabilities.getMaxAnisotropy()},N.prototype.getPrecision=function(){return console.warn(`THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.`),this.capabilities.precision},N.prototype.resetGLState=function(){return console.warn(`THREE.WebGLRenderer: .resetGLState() is now .state.reset().`),this.state.reset()},N.prototype.supportsFloatTextures=function(){return console.warn(`THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).`),this.extensions.get(`OES_texture_float`)},N.prototype.supportsHalfFloatTextures=function(){return console.warn(`THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).`),this.extensions.get(`OES_texture_half_float`)},N.prototype.supportsStandardDerivatives=function(){return console.warn(`THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).`),this.extensions.get(`OES_standard_derivatives`)},N.prototype.supportsCompressedTextureS3TC=function(){return console.warn(`THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).`),this.extensions.get(`WEBGL_compressed_texture_s3tc`)},N.prototype.supportsCompressedTexturePVRTC=function(){return console.warn(`THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).`),this.extensions.get(`WEBGL_compressed_texture_pvrtc`)},N.prototype.supportsBlendMinMax=function(){return console.warn(`THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).`),this.extensions.get(`EXT_blend_minmax`)},N.prototype.supportsVertexTextures=function(){return console.warn(`THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.`),this.capabilities.vertexTextures},N.prototype.supportsInstancedArrays=function(){return console.warn(`THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).`),this.extensions.get(`ANGLE_instanced_arrays`)},N.prototype.enableScissorTest=function(e){console.warn(`THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().`),this.setScissorTest(e)},N.prototype.initMaterial=function(){console.warn(`THREE.WebGLRenderer: .initMaterial() has been removed.`)},N.prototype.addPrePlugin=function(){console.warn(`THREE.WebGLRenderer: .addPrePlugin() has been removed.`)},N.prototype.addPostPlugin=function(){console.warn(`THREE.WebGLRenderer: .addPostPlugin() has been removed.`)},N.prototype.updateShadowMap=function(){console.warn(`THREE.WebGLRenderer: .updateShadowMap() has been removed.`)},N.prototype.setFaceCulling=function(){console.warn(`THREE.WebGLRenderer: .setFaceCulling() has been removed.`)},N.prototype.allocTextureUnit=function(){console.warn(`THREE.WebGLRenderer: .allocTextureUnit() has been removed.`)},N.prototype.setTexture=function(){console.warn(`THREE.WebGLRenderer: .setTexture() has been removed.`)},N.prototype.setTexture2D=function(){console.warn(`THREE.WebGLRenderer: .setTexture2D() has been removed.`)},N.prototype.setTextureCube=function(){console.warn(`THREE.WebGLRenderer: .setTextureCube() has been removed.`)},N.prototype.getActiveMipMapLevel=function(){return console.warn(`THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().`),this.getActiveMipmapLevel()},Object.defineProperties(N.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn(`THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.`),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn(`THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.`),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.`)}},context:{get:function(){return console.warn(`THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.`),this.getContext()}},vr:{get:function(){return console.warn(`THREE.WebGLRenderer: .vr has been renamed to .xr`),this.xr}},gammaInput:{get:function(){return console.warn(`THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.`),!1},set:function(){console.warn(`THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.`)}},gammaOutput:{get:function(){return console.warn(`THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.`),!1},set:function(e){console.warn(`THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.`),this.outputEncoding=e===!0?Or:Dr}},toneMappingWhitePoint:{get:function(){return console.warn(`THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.`),1},set:function(){console.warn(`THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.`)}}}),Object.defineProperties(Kt.prototype,{cullFace:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.`)}},renderReverseSided:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.`)}},renderSingleSided:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.`)}}}),Object.defineProperties(Xr.prototype,{wrapS:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.`),this.texture.wrapS},set:function(e){console.warn(`THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.`),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.`),this.texture.wrapT},set:function(e){console.warn(`THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.`),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.`),this.texture.magFilter},set:function(e){console.warn(`THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.`),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.`),this.texture.minFilter},set:function(e){console.warn(`THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.`),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.`),this.texture.anisotropy},set:function(e){console.warn(`THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.`),this.texture.anisotropy=e}},offset:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .offset is now .texture.offset.`),this.texture.offset},set:function(e){console.warn(`THREE.WebGLRenderTarget: .offset is now .texture.offset.`),this.texture.offset=e}},repeat:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .repeat is now .texture.repeat.`),this.texture.repeat},set:function(e){console.warn(`THREE.WebGLRenderTarget: .repeat is now .texture.repeat.`),this.texture.repeat=e}},format:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .format is now .texture.format.`),this.texture.format},set:function(e){console.warn(`THREE.WebGLRenderTarget: .format is now .texture.format.`),this.texture.format=e}},type:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .type is now .texture.type.`),this.texture.type},set:function(e){console.warn(`THREE.WebGLRenderTarget: .type is now .texture.type.`),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.`),this.texture.generateMipmaps},set:function(e){console.warn(`THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.`),this.texture.generateMipmaps=e}}}),Sl.prototype.load=function(e){console.warn(`THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.`);let t=this;return new vl().load(e,function(e){t.setBuffer(e)}),this},Cl.prototype.getData=function(){return console.warn(`THREE.AudioAnalyser: .getData() is now .getFrequencyData().`),this.getFrequencyData()},to.prototype.updateCubeMap=function(e,t){return console.warn(`THREE.CubeCamera: .updateCubeMap() is now .update().`),this.update(e,t)},to.prototype.clear=function(e,t,n,r){return console.warn(`THREE.CubeCamera: .clear() is now .renderTarget.clear().`),this.renderTarget.clear(e,t,n,r)},qr.crossOrigin=void 0,qr.loadTexture=function(e,t,n,r){console.warn(`THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.`);let i=new wc;i.setCrossOrigin(this.crossOrigin);let a=i.load(e,n,void 0,r);return t&&(a.mapping=t),a},qr.loadTextureCube=function(e,t,n,r){console.warn(`THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.`);let i=new Cc;i.setCrossOrigin(this.crossOrigin);let a=i.load(e,n,void 0,r);return t&&(a.mapping=t),a},qr.loadCompressedTexture=function(){console.error(`THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.`)},qr.loadCompressedTextureCube=function(){console.error(`THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.`)},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`128`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`128`)}));function uu(e){return typeof e==`string`?document.querySelector(e):e instanceof Element?e:null}function X(e){return e==null?null:e instanceof B?e:new B(e)}var du,Z,Q=t((()=>{Y(),du={el:null,mouseControls:!0,touchControls:!0,scale:1,scaleMobile:1,minHeight:200,minWidth:200,backgroundColor:null},Z=class{constructor(e={}){if(this.options={...du,...e},this.el=uu(this.options.el),!this.el)throw Error(`Seer.js: "el" is required and must be a selector string or DOM element.`);this.mouse={x:0,y:0,px:0,py:0,active:!1},this.rect=null,this.width=0,this.height=0,this.destroyed=!1,this.listeners=[],this.clock=new xl,this.buildCanvas(),this.buildRenderer(),this.buildCamera(),this.bindEvents(),this.resize(),this.applyOptions(),this.start()}buildCanvas(){let e=document.createElement(`canvas`);e.style.position=`absolute`,e.style.top=`0`,e.style.left=`0`,e.style.width=`100%`,e.style.height=`100%`,e.style.pointerEvents=`none`,e.style.zIndex=`0`,this.canvas=e,this.el.appendChild(e)}buildRenderer(){this.renderer=new N({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setClearColor(0,0),this.scene=new Bo}buildCamera(){this.camera=new Qa(60,1,.1,1e4),this.camera.position.set(0,0,500),this.camera.lookAt(0,0,0)}bindEvents(){this.addListener(window,`resize`,this.resize),this.bindControls()}bindControls(){this.options.mouseControls&&this.addListener(window,`pointermove`,this.onPointerMove),this.options.touchControls&&(this.addListener(window,`touchstart`,this.onTouchStart),this.addListener(window,`touchmove`,this.onTouchMove))}addListener(e,t,n){let r=n.bind(this);e.addEventListener(t,r,{passive:!0}),this.listeners.push({target:e,type:t,fn:r})}removeListeners(){for(let e of this.listeners)e.target.removeEventListener(e.type,e.fn);this.listeners=[]}updateRect(){this.rect=this.el.getBoundingClientRect()}onPointerMove(e){this.mouse.active=!0,this.mouse.px=this.mouse.x,this.mouse.py=this.mouse.y,this.mouse.x=(e.clientX-this.rect.left)/this.rect.width,this.mouse.y=(e.clientY-this.rect.top)/this.rect.height}updateTouch(e,t){this.mouse.active=!0,this.mouse.px=this.mouse.x,this.mouse.py=this.mouse.y,this.mouse.x=(e-this.rect.left)/this.rect.width,this.mouse.y=(t-this.rect.top)/this.rect.height}onTouchStart(e){if(e.touches&&e.touches.length){let t=e.touches[0];this.updateTouch(t.clientX,t.clientY)}}onTouchMove(e){if(e.touches&&e.touches.length){let t=e.touches[0];this.updateTouch(t.clientX,t.clientY)}}resize(){this.updateRect();let e=Math.max(this.el.clientWidth||this.rect.width||0,this.options.minWidth),t=Math.max(this.el.clientHeight||this.rect.height||0,this.options.minHeight),n=typeof window.matchMedia==`function`&&window.matchMedia(`(max-width: 640px)`).matches,r=this.options.scale*(n?this.options.scaleMobile:1),i=(window.devicePixelRatio||1)*r;this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.width=e,this.height=t,this.camera&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),this.onResize(e,t)}setOptions(e={}){return Object.assign(this.options,e),this.applyOptions(),this}applyOptions(){this.options.backgroundColor==null?this.renderer.setClearColor(0,0):this.renderer.setClearColor(X(this.options.backgroundColor),1);let e={m:!!this.options.mouseControls,t:!!this.options.touchControls};(!this.lastControls||this.lastControls.m!==e.m||this.lastControls.t!==e.t)&&(this.removeListeners(),this.bindEvents(),this.lastControls=e),typeof this.updateOptions==`function`&&this.updateOptions()}start(){let e=()=>{if(this.destroyed)return;let t=Math.min(this.clock.getDelta(),.05);this.onFrame(t,this.clock.elapsedTime),this.render(),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}renderNow(){let e=Math.min(this.clock.getDelta(),.05);this.onFrame(e,this.clock.elapsedTime),this.render()}render(){this.renderer.render(this.scene,this.camera)}destroy(){this.destroyed||(this.destroyed=!0,cancelAnimationFrame(this.rafId),this.removeListeners(),this.disposeScene(),this.renderer.dispose(),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas))}disposeScene(){this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())})}onResize(){}onFrame(){}updateOptions(){}}}));function fu(e){let t=e;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var pu,mu,hu,gu,_u,vu=t((()=>{Y(),Q(),pu={numDots:150,dotSize:2,linkDistance:2,spread:1.2,fieldSize:2,layout:`front`,color:`#58a8fe`,backgroundColor:null,mouseInfluence:120},mu=6e3,hu=1200,gu=1.06,_u=class extends Z{constructor(e={}){super({...pu,...e})}onResize(e,t){this.buildPoints(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2/Math.tan(e/2);if(this.options.layout===`floor`)this.camPos={x:0,y:this.height*.42,z:t*.9},this.lookTarget={x:0,y:-this.height*.06,z:-this.height*.7},this.camera.position.set(this.camPos.x,this.camPos.y,this.camPos.z),this.camera.lookAt(this.lookTarget.x,this.lookTarget.y,this.lookTarget.z);else{let t=this.height/2*gu;this.camera.position.set(0,0,t/Math.tan(e/2)),this.camera.lookAt(0,0,0),this.camPos=null}this.camera.updateProjectionMatrix()}buildPoints(e,t){this.group&&(this.scene.remove(this.group),this.disposeGroup(this.group)),this.group=new No,this.scene.add(this.group);let n=P.clamp(this.options.fieldSize,1,2.5),r=this.options.layout===`floor`,i=r?`floor`:`front`,a=e*n*(r?2:1),o,s;if(r){let e=t*.6,r=-t*n*2.2;o=e-r,s=(e+r)/2}else o=t*n,s=0;let c=P.clamp(this.options.numDots,40,600),l=Math.sqrt(e*t/c),u=Math.max(1,Math.round(a/l)),d=Math.max(1,Math.round(o/l)),f=u*d;f>hu&&(l*=Math.sqrt(f/hu),u=Math.max(1,Math.round(a/l)),d=Math.max(1,Math.round(o/l)),f=u*d),this.spacing=l,this.cols=u,this.rows=d,this.currentNumDots=c,this.lastFieldSize=n,this.lastLayout=i,this.lastSpread=P.clamp(this.options.spread,.5,2);let p=this.options.spread,m=a/2,h=o/2,g=fu(20260810),_=new Float32Array(f*3),v=new Float32Array(f*3),y=[];for(let e=0;e<f;e++){let t=(e%u+.5)*l,n=(Math.floor(e/u)+.5)*l,i=(t+(g()-.5)*l*.6-m)*p,a=(n+(g()-.5)*l*.6-h)*p,o,c,d;r?(o=i,c=(g()-.5)*l*.5*p,d=a+s):(o=i,c=a,d=(g()-.5)*l*.8*p),_[e*3]=o,_[e*3+1]=c,_[e*3+2]=d,y.push({bx:o,by:c,bz:d,phase:g()*Math.PI*2,speed:.2+g()*.5,ampX:l*p*(.02+g()*.05),ampY:l*p*(.02+g()*.05),ampZ:l*p*(.02+g()*.05),twinkle:.55+g()*.45})}this.n=f,this.pointsData=y;let b=new U;b.setAttribute(`position`,new H(_,3)),b.setAttribute(`color`,new H(v,3)),this.pointsGeo=b;let x=new Os({color:16777215,size:this.options.dotSize,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.pointsMat=x,this.points=new Ns(b,x),this.points.frustumCulled=!1,this.group.add(this.points),this.linkDistance=l*this.options.linkDistance*p;let S=this.linkDistance*this.linkDistance,C=[];for(let e=0;e<f;e++){for(let t=e+1;t<f;t++){let n=_[e*3]-_[t*3],r=_[e*3+1]-_[t*3+1],i=_[e*3+2]-_[t*3+2];if(n*n+r*r+i*i<S&&(C.push(e,t),C.length>=mu*2))break}if(C.length>=mu*2)break}this.pairs=C;let w=new U;w.setAttribute(`position`,new H(new Float32Array(C.length*3),3)),w.setAttribute(`color`,new H(new Float32Array(C.length*3),3)),w.setDrawRange(0,0),this.linesGeo=w;let T=new _s({vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.linesMat=T,this.lines=new Es(w,T),this.lines.frustumCulled=!1,this.group.add(this.lines),this.updateOptions()}onFrame(e,t){let n=t,r=this.pointsGeo.attributes.position.array,i=this.pointsGeo.attributes.color.array,a=this.n,o=this.pointsData,s=this.spacing,c=this.options.layout===`floor`,l=(this.mouse.x-.5)*this.width,u=(.5-this.mouse.y)*this.height,d=(this.mouse.y-.5)*this.height,f=this.options.mouseInfluence*this.options.spread,p=f*f;for(let e=0;e<a;e++){let t=o[e],a=t.bx+Math.sin(n*t.speed+t.phase)*t.ampX,m=t.by+Math.cos(n*t.speed*.9+t.phase)*t.ampY,h=t.bz+Math.sin(n*t.speed*1.3+t.phase*2)*t.ampZ;if(c){let e=a-l,t=h-d,n=e*e+t*t;if(n<p){let r=Math.sqrt(n)||.001,i=(1-r/f)*s*.4;a+=e/r*i,h+=t/r*i}}else{let e=a-l,t=m-u,n=e*e+t*t;if(n<p){let r=Math.sqrt(n)||.001,i=(1-r/f)*s*.4;a+=e/r*i,m+=t/r*i}}r[e*3]=a,r[e*3+1]=m,r[e*3+2]=h;let g=.45+.55*(.5+.5*Math.sin(n*t.speed*2.2+t.phase));i[e*3]=this.color.r*g,i[e*3+1]=this.color.g*g,i[e*3+2]=this.color.b*g}this.pointsGeo.attributes.position.needsUpdate=!0,this.pointsGeo.attributes.color.needsUpdate=!0,this.camPos?(this.camera.position.x=this.camPos.x+(this.mouse.x-.5)*this.width*.08,this.camera.position.y=this.camPos.y+(this.mouse.y-.5)*this.height*.03,this.camera.lookAt(this.lookTarget.x,this.lookTarget.y,this.lookTarget.z)):(this.camera.position.x=(this.mouse.x-.5)*s*.4,this.camera.position.y=(this.mouse.y-.5)*s*-.4,this.camera.lookAt(0,0,0));let m=this.linesGeo.attributes.position.array,h=this.linesGeo.attributes.color.array,g=this.linkDistance*this.linkDistance,_=this.pairs,v=this.color.r,y=this.color.g,b=this.color.b,x=0;for(let e=0;e<_.length;e+=2){let t=_[e],n=_[e+1],i=t*3,a=n*3,o=r[i]-r[a],s=r[i+1]-r[a+1],c=r[i+2]-r[a+2],l=o*o+s*s+c*c;if(l<g){let e=1-l/g,t=e*e*.85,n=x*6;h[n]=v*t,h[n+1]=y*t,h[n+2]=b*t,h[n+3]=v*t,h[n+4]=y*t,h[n+5]=b*t,m[n]=r[i],m[n+1]=r[i+1],m[n+2]=r[i+2],m[n+3]=r[a],m[n+4]=r[a+1],m[n+5]=r[a+2],x++}}this.linesGeo.setDrawRange(0,x*2),this.linesGeo.attributes.position.needsUpdate=!0,this.linesGeo.attributes.color.needsUpdate=!0}updateOptions(){let e=P.clamp(this.options.fieldSize,1,2.5),t=this.options.layout===`floor`?`floor`:`front`,n=P.clamp(this.options.numDots,40,600),r=P.clamp(this.options.spread,.5,2);if((n!==this.currentNumDots||e!==this.lastFieldSize||t!==this.lastLayout||this.lastSpread!==void 0&&r!==this.lastSpread)&&this.width&&this.height){this.buildPoints(this.width,this.height),this.frameCamera();return}let i=X(this.options.color);i&&(this.color=i,this.pointsMat.size=this.options.dotSize,this.linkDistance=this.spacing*this.options.linkDistance*this.options.spread,this.lastSpread=r,this.options.backgroundColor==null?(this.pointsMat.blending=1,this.linesMat.blending=1):(this.pointsMat.blending=2,this.linesMat.blending=2))}disposeGroup(e){e.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())})}}})),yu,bu,xu=t((()=>{Y(),Q(),yu={color:`#005494`,backgroundColor:null,style:`grid`,waveHeight:65,speed:.5,mouseInfluence:160,focusX:0,focusY:0,spread:1,fog:1},bu=class extends Z{constructor(e={}){super({...yu,...e})}onResize(e,t){this.buildMesh(e,t),this.frameCamera()}buildMesh(e,t){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose());let n=P.clamp(this.options.spread,.4,2.5);this.lastSpread=n,this.spread=n;let r=e*1.3*n,i=t*1.3*n;this.halfW=r/2,this.halfD=i/2;let a=P.clamp(Math.round(e/26),20,90),o=P.clamp(Math.round(t/26),20,90),s=new co(r,i,a,o);s.rotateX(-Math.PI/2),s.setAttribute(`color`,new H(new Float32Array(s.attributes.position.count*3),3));let c=new _a({color:16777215,vertexColors:!0,transparent:!0,opacity:.7,side:2,blending:2,depthWrite:!1,wireframe:this.options.style===`grid`}),l=new W(s,c);l.frustumCulled=!1,this.scene.add(l),this.geometry=s,this.material=c,this.mesh=l,this.waves=2.5,this.updateOptions()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2/Math.tan(e/2);this.camPos={x:0,y:t*.3,z:t*.95},this.camera.position.set(this.camPos.x,this.camPos.y,this.camPos.z),this.camera.lookAt(0,0,0)}onFrame(e,t){let n=t*this.options.speed,r=this.geometry.attributes.position.array,i=this.geometry.attributes.color.array,a=this.geometry.attributes.position.count,o=this.options.waveHeight,s=this.width,c=this.height,l=this.waves*Math.PI*2/s,u=this.waves*Math.PI*2/c,d=P.clamp(this.options.focusX,-1,1)*this.halfW*.8,f=P.clamp(this.options.focusY,-1,1)*this.height*.3,p=P.clamp(this.options.fog,0,1),m=this.camera.position.z,h=p*p*1.6,g=(this.mouse.x-.5)*s,_=(this.mouse.y-.5)*c,v=this.options.mouseInfluence,y=v*v,b=this.color,x=this.color2,S=o*2.4;for(let e=0;e<a;e++){let t=r[e*3],a=r[e*3+2],s=Math.sin((t-d)*l+n)*Math.cos(a*u+n*1.2)*o,c=t-g,f=a-_,p=c*c+f*f;if(p<y){let e=Math.cos((Math.sqrt(p)||.001)/v*Math.PI)*.5+.5;s+=e*e*o*1.4}r[e*3+1]=s;let C=P.clamp((s+o)/S,0,1),w=b.r*C+x.r*(1-C),T=b.g*C+x.g*(1-C),E=b.b*C+x.b*(1-C);if(h>0){let e=(m-a)/m,t=Math.exp(-e*e*h);w*=t,T*=t,E*=t}i[e*3]=w,i[e*3+1]=T,i[e*3+2]=E}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.camPos&&(this.camera.position.x=this.camPos.x+(this.mouse.x-.5)*s*.02),this.mesh&&(this.mesh.position.y=f)}updateOptions(){let e=X(this.options.color);if(e){if(this.color=e,this.color2=e.clone().multiplyScalar(.35),P.clamp(this.options.spread,.4,2.5)!==this.lastSpread&&this.width&&this.height){this.buildMesh(this.width,this.height),this.frameCamera();return}if(this.material){let e=this.options.style===`grid`;this.material.wireframe!==e&&(this.material.wireframe=e),this.options.backgroundColor==null?this.material.blending=1:this.material.blending=2}}}}}));function Su(e){let t=e*374761393+668265263|0;return t=(t^t>>>13)*1274126177|0,t^=t>>>16,(t&65535)/65535-.5}var Cu,wu,Tu=t((()=>{Y(),Q(),Cu={color:`#130019`,backgroundColor:null,cellSize:38,amplitude:45,speed:.5,mouseInfluence:180},wu=class extends Z{constructor(e={}){super({...Cu,...e})}onResize(e,t){this.buildMesh(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2/Math.tan(e/2);this.camera.position.set(0,t*.3,t*.95),this.camera.lookAt(0,0,0)}buildMesh(e,t){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose());let n=P.clamp(this.options.cellSize,22,64);this.lastCellSize=n;let r=P.clamp(Math.round(e/n),18,72),i=P.clamp(Math.round(t/n),14,58),a=new co(e*1.35,t*1.35,r,i);a.rotateX(-Math.PI/2),a.toNonIndexed(),this.basePositions=a.attributes.position.array.slice();let o=a.attributes.position.count;a.setAttribute(`color`,new H(new Float32Array(o*3),3));let s=o/3,c=new Float32Array(s);for(let e=0;e<s;e++)c[e]=.92+Su(e)*.4;this.facetBrightness=c;let l=new _a({color:16777215,vertexColors:!0,transparent:!0,opacity:.85,side:2,blending:2,depthWrite:!1}),u=new W(a,l);u.frustumCulled=!1,this.scene.add(u),this.geometry=a,this.material=l,this.mesh=u,this.updateOptions()}onFrame(e,t){let n=t*this.options.speed,r=this.geometry.attributes.position.array,i=this.geometry.attributes.color.array,a=this.basePositions,o=this.geometry.attributes.position.count,s=this.options.amplitude,c=this.width,l=this.height,u=this.facetBrightness,d=this.accent,f=this.darkColor,p=(this.mouse.x-.5)*c,m=(this.mouse.y-.5)*l,h=this.options.mouseInfluence,g=h*h;for(let e=0;e<o;e++){let t=e*3,o=a[t],_=a[t+2],v=o/c,y=_/l,b=.46*Math.sin(Math.PI*2*(1.05*v+.2*y)+n),x=.31*Math.cos(Math.PI*2*(-.35*v+1.4*y)-.85*n),S=.23*Math.sin(Math.PI*2*(2.2*v-1.8*y)+1.4*n),C=s*(b+x+S),w=o-p,T=_-m,E=w*w+T*T;if(E<g){let e=1-(Math.sqrt(E)||.001)/h;C+=s*1.35*e*e*(3-2*e)}r[t+1]=C;let D=P.clamp((C/s+1)*.5,0,1),O=u[Math.floor(e/3)]*(.36+.64*D);i[t]=(f.r+(d.r-f.r)*D)*O,i[t+1]=(f.g+(d.g-f.g)*D)*O,i[t+2]=(f.b+(d.b-f.b)*D)*O}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=(this.mouse.x-.5)*c*.025}updateOptions(){let e=X(this.options.color);if(e){if(this.accent=e,this.darkColor=e.clone().multiplyScalar(.22),P.clamp(this.options.cellSize,22,64)!==this.lastCellSize&&this.width&&this.height){this.buildMesh(this.width,this.height);return}this.options.backgroundColor==null?this.material.blending=1:this.material.blending=2}}}})),Eu,Du,Ou=t((()=>{Y(),Q(),Eu={color:`#ffffff`,backgroundColor:null,rings:6,segments:80,twist:0,speed:.5,depth:34,mouseControls:!1,touchControls:!1},Du=class extends Z{constructor(e={}){super({...Eu,...e})}onResize(e,t){this.buildGeometry(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.radius/Math.tan(e/2);this.camera.position.set(0,0,t),this.camera.lookAt(0,0,0)}buildGeometry(e,t){this.lines&&(this.scene.remove(this.lines),this.linesGeo.dispose(),this.linesMat.dispose());let n=P.clamp(this.options.rings,5,20),r=P.clamp(this.options.segments,24,120);this.rings=n,this.segments=r,this.radius=.72*Math.max(e,t),this.innerRadius=.1*this.radius;let i=[];for(let e=0;e<n;e++)for(let t=0;t<r;t++)i.push(e,t,e,(t+1)%r),e<n-1&&(i.push(e,t,e+1,t),(e+t)%2==0&&i.push(e,t,e+1,(t+1)%r));this.edges=i,this.nodes=new Float32Array(n*r*3);let a=i.length/4,o=new U;o.setAttribute(`position`,new H(new Float32Array(a*2*3),3)),o.setAttribute(`color`,new H(new Float32Array(a*2*3),3)),this.linesGeo=o;let s=new _s({vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.linesMat=s;let c=new Es(o,s);c.frustumCulled=!1,this.scene.add(c),this.lines=c,this.updateOptions()}onFrame(e,t){let n=t*this.options.speed,r=this.rings,i=this.segments,a=this.radius,o=this.innerRadius,s=this.depth,c=this.options.twist,l=this.nodes;for(let e=0;e<r;e++){let t=e/Math.max(r-1,1),u=o+(a-o)*t,d=(e%2==0?1:-1)*n*(.1+.022*e);for(let t=0;t<i;t++){let r=Math.PI*2*t/i,a=c*(.65*Math.sin(3*r+1.7*e-1.1*n)+.35*Math.sin(7*r-.9*e+.65*n)),o=r+d+a,f=u*(1+.055*Math.sin(5*r+.72*e+1.25*n)+.025*Math.cos(9*r-1.5*n)),p=s*(.65*Math.sin(2*r+.55*e-n)+.35*Math.cos(5*r-.7*n)),m=(e*i+t)*3;l[m]=f*Math.cos(o),l[m+1]=f*Math.sin(o),l[m+2]=p}}let u=(this.mouse.x-.5)*this.width,d=(.5-this.mouse.y)*this.height,f=Math.min(this.width,this.height)*.26,p=f*f;for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=(e*i+t)*3,r=l[n],o=l[n+1],c=l[n+2],m=r-u,h=o-d,g=m*m+h*h;if(g<p){let e=Math.sqrt(g)||.001,t=1-e/f,i=a*.035*t*t;l[n]=r+m/e*i,l[n+1]=o+h/e*i,l[n+2]=c+s*.5*t}}let m=this.linesGeo.attributes.position.array,h=this.linesGeo.attributes.color.array,g=this.edges,_=this.color,v=0;for(let e=0;e<g.length;e+=4){let t=g[e],a=g[e+1],o=g[e+2],s=g[e+3],c=(t*i+a)*3,u=(o*i+s)*3,d=t!==o&&a!==s,f=t/Math.max(r-1,1),p=Math.PI*2*a/i,y=(.35+.65*(1-f))*(.7+.3*Math.sin(2*p+t*.8+n));d&&(y*=.68);let b=_.r*y,x=_.g*y,S=_.b*y;m[v]=l[c],m[v+1]=l[c+1],m[v+2]=l[c+2],h[v]=b,h[v+1]=x,h[v+2]=S,m[v+3]=l[u],m[v+4]=l[u+1],m[v+5]=l[u+2],h[v+3]=b,h[v+4]=x,h[v+5]=S,v+=6}this.linesGeo.attributes.position.needsUpdate=!0,this.linesGeo.attributes.color.needsUpdate=!0,this.camera.position.x=(this.mouse.x-.5)*a*.04,this.camera.position.y=(.5-this.mouse.y)*a*.04,this.camera.lookAt(0,0,0)}updateOptions(){let e=X(this.options.color);if(!e)return;this.color=e,this.depth=P.clamp(Number(this.options.depth)||34,0,200);let t=P.clamp(this.options.rings,5,20),n=P.clamp(this.options.segments,24,120);if((t!==this.rings||n!==this.segments)&&this.width&&this.height){this.buildGeometry(this.width,this.height);return}this.options.backgroundColor==null?this.linesMat.blending=1:this.linesMat.blending=2}}}));function ku(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var Au,ju,Mu,Nu=t((()=>{Y(),Q(),Au={color:`#85ffc6`,backgroundColor:null,cellSize:32,distortion:0,speed:1.5,mouseInfluence:220},ju=500,Mu=class extends Z{constructor(e={}){super({...Au,...e})}onResize(e,t){this.buildGeometry(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height*.7/Math.tan(e/2);this.camera.position.set(0,0,t),this.camera.lookAt(0,0,0)}buildGeometry(e,t){this.lines&&(this.scene.remove(this.lines),this.linesGeo.dispose(),this.linesMat.dispose());let n=P.clamp(this.options.cellSize,18,64);this.lastCellSize=n;let r=n,i=null;for(let n=0;n<8&&(i=this.generateCells(r,e,t),!(i.length<=ju));n++)r*=1.15;this.cells=i,this.cellSize=r;let a=i.length*6,o=new U;o.setAttribute(`position`,new H(new Float32Array(a*2*3),3)),o.setAttribute(`color`,new H(new Float32Array(a*2*3),3)),this.linesGeo=o;let s=new _s({vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.linesMat=s;let c=new Es(o,s);c.frustumCulled=!1,this.scene.add(c),this.lines=c,this.updateOptions()}generateCells(e,t,n){let r=[],i=t*.7,a=n*.7,o=Math.ceil(a/(1.5*e)),s=Math.ceil(i/(Math.sqrt(3)*e))+o+2,c=0;for(let t=-o;t<=o;t++)for(let n=-s;n<=s;n++){let o=Math.sqrt(3)*e*(n+t/2),s=1.5*e*t;Math.abs(o)<=i&&Math.abs(s)<=a&&r.push({q:n,r:t,baseX:o,baseY:s,phase:ku(c++)*Math.PI*2,offset:r.length*12*3})}return r}onFrame(e,t){let n=t*this.options.speed,r=this.options.distortion,i=this.cells,a=this.cellSize,o=this.linesGeo.attributes.position.array,s=this.linesGeo.attributes.color.array,c=this.color,l=(this.mouse.x-.5)*this.width,u=(.5-this.mouse.y)*this.height,d=this.options.mouseInfluence;for(let e=0;e<i.length;e++){let t=i[e],f=t.q,p=t.r,m=(Math.sin(.82*f+1.17*p+n)+.55*Math.sin(-1.24*f+.63*p-1.35*n)+.3*Math.cos(.48*f-1.56*p+.72*n))/1.85,h=.8*m+t.phase+.35*n,g=a*r*.16,_=t.baseX+Math.cos(h)*g,v=t.baseY+Math.sin(h)*g,y=a*(.84+r*(.075*m+.035*Math.sin(t.phase+1.8*n))),b=t.baseX-l,x=t.baseY-u,S=Math.sqrt(b*b+x*x),C=Math.exp(-S/d),w=Math.sin(S*.05-n*3.2)*C;if(y+=a*r*.13*w,S>1e-4){let e=b/S,t=x/S;_+=e*a*r*.08*C,v+=t*a*r*.08*C}let T=.32+.68*P.clamp(.5+.5*m,0,1),E=.78+.22*Math.sin(t.phase+n*1.5),D=(f+p)%2==0?1:.9,O=T*E*D,ee=c.r*O,te=c.g*O,k=c.b*O,A=t.offset;for(let e=0;e<6;e++){let t=Math.PI/6+e*Math.PI/3,n=A+e*6;o[n]=_+y*Math.cos(t),o[n+1]=v+y*Math.sin(t),o[n+2]=0,o[n+3]=_+y*Math.cos(t+Math.PI/3),o[n+4]=v+y*Math.sin(t+Math.PI/3),o[n+5]=0,s[n]=ee,s[n+1]=te,s[n+2]=k,s[n+3]=ee,s[n+4]=te,s[n+5]=k}}this.linesGeo.attributes.position.needsUpdate=!0,this.linesGeo.attributes.color.needsUpdate=!0,this.camera.position.x=(this.mouse.x-.5)*a*.35,this.camera.position.y=(.5-this.mouse.y)*a*.35,this.camera.lookAt(0,0,0)}updateOptions(){let e=X(this.options.color);if(e){if(this.color=e,P.clamp(this.options.cellSize,18,64)!==this.lastCellSize&&this.width&&this.height){this.buildGeometry(this.width,this.height);return}this.options.backgroundColor==null?this.linesMat.blending=1:this.linesMat.blending=2}}}}));function Pu(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),(e+(e>>4)&252645135)*16843009>>24}var Fu,Iu,Lu,Ru=t((()=>{Y(),Q(),Fu={color:`#cabdff`,backgroundColor:null,size:.6,depth:4,layers:3,speed:.5},Iu=[.38,.61,.84,1],Lu=class extends Z{constructor(e={}){super({...Fu,...e})}onResize(e,t){this.buildGeometry(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height*.64/Math.tan(e/2);this.camera.position.set(0,0,t),this.camera.lookAt(0,0,0)}buildGeometry(e,t){this.lines&&(this.scene.remove(this.lines),this.scene.remove(this.points),this.linesGeo.dispose(),this.linesMat.dispose(),this.pointsGeo.dispose(),this.pointsMat.dispose());let n=P.clamp(Math.round(this.options.layers),1,4);this.layers=n,this.lastLayers=n;let r=[];for(let e=0;e<16;e++)r.push([e&1?1:-1,e&2?1:-1,e&4?1:-1,e&8?1:-1]);this.vertices4d=r;let i=[];for(let e=0;e<16;e++)for(let t=e+1;t<16;t++)Pu(e^t)===1&&i.push(e,t);this.edges=i;let a=i.length/2,o=new U;o.setAttribute(`position`,new H(new Float32Array(n*a*2*3),3)),o.setAttribute(`color`,new H(new Float32Array(n*a*2*3),3)),this.linesGeo=o;let s=new _s({vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.linesMat=s;let c=new Es(o,s);c.frustumCulled=!1,this.scene.add(c),this.lines=c;let l=new U;l.setAttribute(`position`,new H(new Float32Array(n*16*3),3)),l.setAttribute(`color`,new H(new Float32Array(n*16*3),3)),this.pointsGeo=l;let u=new Os({color:16777215,size:2.4,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.pointsMat=u;let d=new Ns(l,u);d.frustumCulled=!1,this.scene.add(d),this.points=d,this.node3d=new Float32Array(n*16*3),this.updateOptions()}onFrame(e,t){let n=t*this.options.speed,r=this.layers,i=this.depth,a=Math.min(this.width,this.height)*this.size*.52,o=this.vertices4d,s=this.node3d,c=this.edges,l=this.mouse.x-.5,u=.5-this.mouse.y;for(let e=0;e<r;e++){let t=Iu[e],r=n*(.45+.06*e)+l*.3,c=-n*(.32+.05*e)+u*.3,d=n*(.25+.03*e),f=.18*Math.sin(.65*n+e*.9),p=Math.cos(r),m=Math.sin(r),h=Math.cos(c),g=Math.sin(c),_=Math.cos(d),v=Math.sin(d),y=Math.cos(f),b=Math.sin(f),x=e*16*3;for(let e=0;e<16;e++){let n=o[e][0],r=o[e][1],c=o[e][2],l=o[e][3],u=n*p-l*m,d=n*m+l*p;n=u,l=d;let f=r*h-l*g;d=r*g+l*h,r=f,l=d;let S=c*_-l*v;d=c*v+l*_,c=S,l=d,u=n*y-r*b,f=n*b+r*y,n=u,r=f;let C=i/(i-l),w=x+e*3;s[w]=n*C*t*a,s[w+1]=r*C*t*a,s[w+2]=c*C*t*a*.42}}let d=this.linesGeo.attributes.position.array,f=this.linesGeo.attributes.color.array,p=this.color,m=a*.42,h=0;for(let e=0;e<r;e++){let t=1-.1*e,n=e*16*3;for(let e=0;e<c.length;e+=2){let r=c[e],i=c[e+1],a=n+r*3,o=n+i*3,l=P.clamp(.5+.5*s[a+2]/m,0,1),u=P.clamp(.5+.5*s[o+2]/m,0,1),g=t*(.36+.64*l),_=t*(.36+.64*u);d[h]=s[a],d[h+1]=s[a+1],d[h+2]=s[a+2],f[h]=p.r*g,f[h+1]=p.g*g,f[h+2]=p.b*g,d[h+3]=s[o],d[h+4]=s[o+1],d[h+5]=s[o+2],f[h+3]=p.r*_,f[h+4]=p.g*_,f[h+5]=p.b*_,h+=6}}let g=this.pointsGeo.attributes.position.array,_=this.pointsGeo.attributes.color.array,v=0;for(let e=0;e<r;e++){let t=1-.1*e,n=e*16*3;for(let e=0;e<16;e++){let r=n+e*3,i=t*(.58+.42*P.clamp(.5+.5*s[r+2]/m,0,1));g[v]=s[r],g[v+1]=s[r+1],g[v+2]=s[r+2],_[v]=p.r*i,_[v+1]=p.g*i,_[v+2]=p.b*i,v+=3}}this.linesGeo.attributes.position.needsUpdate=!0,this.linesGeo.attributes.color.needsUpdate=!0,this.pointsGeo.attributes.position.needsUpdate=!0,this.pointsGeo.attributes.color.needsUpdate=!0,this.camera.position.x=l*this.width*.018,this.camera.position.y=u*this.height*.018,this.camera.lookAt(0,0,0)}updateOptions(){let e=X(this.options.color);if(e){if(this.color=e,this.size=P.clamp(this.options.size,.35,1.2),this.depth=P.clamp(this.options.depth,2.6,6),P.clamp(Math.round(this.options.layers),1,4)!==this.lastLayers&&this.width&&this.height){this.buildGeometry(this.width,this.height);return}this.options.backgroundColor==null?(this.linesMat.blending=1,this.pointsMat.blending=1):(this.linesMat.blending=2,this.pointsMat.blending=2)}}}})),zu,Bu,Vu,Hu,Uu,Wu,Gu=t((()=>{Y(),Q(),zu={color:`#00e07f`,backgroundColor:null,cellSize:14,density:3,isoLevel:0,speed:1,fieldSize:1.2,mouseInfluence:180},Bu={1:[[3,0]],2:[[0,1]],3:[[3,1]],4:[[1,2]],6:[[0,2]],7:[[2,3]],8:[[2,3]],9:[[2,0]],11:[[1,2]],12:[[1,3]],13:[[0,1]],14:[[3,0]]},Vu=[[0,1],[2,3]],Hu=[[3,0],[1,2]],Uu=9e3,Wu=class extends Z{constructor(e={}){super({...zu,...e})}onResize(e,t){this.buildGeometry(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height*.58/Math.tan(e/2);this.camera.position.set(0,0,t),this.camera.lookAt(0,0,0)}buildGeometry(e,t){this.lines&&(this.scene.remove(this.lines),this.linesGeo.dispose(),this.linesMat.dispose());let n=P.clamp(this.options.fieldSize,1,2.5);this.fieldW=e*n,this.fieldH=t*n,this.lastFieldSize=n;let r=P.clamp(Math.round(this.options.cellSize),14,36),i=Math.max(28,Math.round(this.fieldW/r)),a=Math.max(20,Math.round(this.fieldH/r)),o=i*a;if(o>Uu){let e=Math.sqrt(o/Uu);r=Math.max(14,r*e),i=Math.max(28,Math.round(this.fieldW/r)),a=Math.max(20,Math.round(this.fieldH/r)),o=i*a}this.lastCellSize=r,this.lastCellRaw=P.clamp(Math.round(this.options.cellSize),14,36),this.cols=i,this.rows=a,this.field=new Float32Array((i+1)*(a+1)),this.ex=new Float32Array(4),this.ey=new Float32Array(4);let s=i*a*4,c=new U;c.setAttribute(`position`,new H(new Float32Array(s*3),3)),c.setAttribute(`color`,new H(new Float32Array(s*3),3)),c.setDrawRange(0,0),this.linesGeo=c;let l=new _s({vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.linesMat=l;let u=new Es(c,l);u.frustumCulled=!1,this.scene.add(u),this.lines=u,this.updateOptions()}gyroid(e,t,n){return Math.sin(e)*Math.cos(t)+Math.sin(t)*Math.cos(n)+Math.sin(n)*Math.cos(e)}onFrame(e,t){let n=t*this.options.speed,r=this.cols,i=this.rows,a=r+1,o=i+1,s=this.field,c=this.density,l=this.isoLevel,u=this.mouseInfluence,d=2*u*u,f=this.width,p=this.height,m=this.fieldW,h=this.fieldH,g=Math.min(f,p),_=Math.PI*2*c/g,v=(this.mouse.x-.5)*m,y=(.5-this.mouse.y)*h,b=Math.sin(n*2.1),x=n*.55;for(let e=0;e<o;e++){let t=(e/i-.5)*h,n=t*_;for(let i=0;i<a;i++){let o=(i/r-.5)*m,c=o*_,u=o-v,f=t-y,p=x+.95*Math.exp(-(u*u+f*f)/d)*b;s[e*a+i]=this.gyroid(c,n,p)-l}}let S=this.linesGeo.attributes.position.array,C=this.linesGeo.attributes.color.array,w=this.color,T=this.ex,E=this.ey,D=0;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=e*a+t,o=e*a+t+1,c=(e+1)*a+t+1,u=(e+1)*a+t,f=s[n],p=s[o],g=s[c],O=s[u],ee=+(f>0),te=+(p>0),k=+(g>0),A=+(O>0),ne=ee|te<<1|k<<2|A<<3;if(ne===0||ne===15)continue;let re=(t/r-.5)*m,ie=(e/i-.5)*h,ae=((t+1)/r-.5)*m,oe=((e+1)/i-.5)*h;if(ee!==te&&(T[0]=re+f/(f-p)*(ae-re),E[0]=ie),te!==k){let e=p/(p-g);T[1]=ae,E[1]=ie+e*(oe-ie)}if(k!==A&&(T[2]=ae+g/(g-O)*(re-ae),E[2]=oe),A!==ee){let e=O/(O-f);T[3]=re,E[3]=oe+e*(ie-oe)}let se;if(ne===5||ne===10){let e=(re+ae)*.5,t=(ie+oe)*.5,n=e-v,r=t-y,i=x+.95*Math.exp(-(n*n+r*r)/d)*b,a=this.gyroid(e*_,t*_,i)-l>0;se=ne===5?a?Vu:Hu:a?Hu:Vu}else se=Bu[ne];for(let e=0;e<se.length;e++){let t=se[e][0],n=se[e][1],r=(T[t]+T[n])*.5,i=(E[t]+E[n])*.5,a=.5*(r*_-i*_)+x,o=.38+.62*(.58+.42*Math.sin(a)),s=w.r*o,c=w.g*o,l=w.b*o;S[D]=T[t],S[D+1]=E[t],S[D+2]=0,C[D]=s,C[D+1]=c,C[D+2]=l,S[D+3]=T[n],S[D+4]=E[n],S[D+5]=0,C[D+3]=s,C[D+4]=c,C[D+5]=l,D+=6}}this.linesGeo.setDrawRange(0,D/3|0),this.linesGeo.attributes.position.needsUpdate=!0,this.linesGeo.attributes.color.needsUpdate=!0,this.camera.position.x=(this.mouse.x-.5)*this.width*.012,this.camera.position.y=(.5-this.mouse.y)*this.height*.012,this.camera.lookAt(0,0,0)}updateOptions(){let e=X(this.options.color);if(!e)return;this.color=e,this.density=P.clamp(this.options.density,2,7),this.isoLevel=P.clamp(this.options.isoLevel,-.6,.6),this.mouseInfluence=P.clamp(this.options.mouseInfluence,80,360);let t=P.clamp(Math.round(this.options.cellSize),14,36),n=P.clamp(this.options.fieldSize,1,2.5);if((t!==this.lastCellRaw||n!==this.lastFieldSize)&&this.width&&this.height){this.buildGeometry(this.width,this.height);return}this.options.backgroundColor==null?this.linesMat.blending=1:this.linesMat.blending=2}}})),Ku,qu,Ju=t((()=>{Y(),Q(),Ku={color:`#ff00f7`,backgroundColor:null,cellSize:40,intensity:1.2,speed:.05,fieldSize:1.25,fog:1,mouseControls:!1,touchControls:!1},qu=class extends Z{constructor(e={}){super({...Ku,...e})}onResize(e,t){this.buildGrid(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2/Math.tan(e/2);this.camPos={x:0,y:this.height*.15,z:t*1.25},this.lookTarget={x:0,y:0,z:-this.height*1},this.camera.position.set(this.camPos.x,this.camPos.y,this.camPos.z),this.camera.lookAt(this.lookTarget.x,this.lookTarget.y,this.lookTarget.z)}buildGrid(e,t){this.group&&(this.scene.remove(this.group),this.disposeGroup(this.group));let n=new No;this.scene.add(n),this.group=n;let r=P.clamp(this.options.cellSize,10,80),i=P.clamp(this.options.fieldSize,1,3);this.cell=r,this.currentCell=r,this.currentFieldSize=i;let a=e*i,o=t*i*2.4;this.halfW=a,this.halfDepth=o;let s=[];for(let e=-o;e<=o;e+=r)s.push(-a,0,e,a,0,e);for(let e=-a;e<=a;e+=r)s.push(e,0,-o,e,0,o);let c=new U;c.setAttribute(`position`,new H(new Float32Array(s),3)),c.setAttribute(`color`,new H(new Float32Array(s.length),3)),this.gridGeo=c,this.buildZ=s;let l=new _s({vertexColors:!0,transparent:!0,opacity:1,blending:2,depthWrite:!1});this.gridMat=l;let u=new Es(c,l);u.frustumCulled=!1,n.add(u),this.updateOptions()}onFrame(e,t){this.group&&(this.group.position.z=t*this.options.speed%1*this.cell,this.updateLineColors()),this.camPos&&(this.camera.position.x=this.camPos.x+(this.mouse.x-.5)*this.width*.08,this.camera.position.y=this.camPos.y+(this.mouse.y-.5)*this.height*.02,this.camera.lookAt(this.lookTarget.x,this.lookTarget.y,this.lookTarget.z))}updateLineColors(){let e=this.color,t=this.gridGeo.attributes.color.array,n=this.group?this.group.position.z:0,r=this.halfDepth,i=r*2,a=this.options.intensity,o=P.clamp(this.options.fog,0,1),s=this.camera.position.z,c=t.length/3;for(let l=0;l<c;l++){let c=this.buildZ[l*3+2]+n,u=(c+r)/i,d=(s-c)/s,f=o<=0?1:Math.exp(-d*d*o*o*1.6),p=(.12+.88*P.clamp(u,0,1))*a*f;t[l*3]=e.r*p,t[l*3+1]=e.g*p,t[l*3+2]=e.b*p}this.gridGeo.attributes.color.needsUpdate=!0}updateOptions(){let e=P.clamp(this.options.cellSize,10,80),t=P.clamp(this.options.fieldSize,1,3);if((e!==this.currentCell||t!==this.currentFieldSize)&&this.width&&this.height){this.buildGrid(this.width,this.height),this.frameCamera();return}let n=X(this.options.color);n&&(this.color=n,this.options.backgroundColor==null?this.gridMat.blending=1:this.gridMat.blending=2,this.updateLineColors())}disposeGroup(e){e.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())})}}})),Yu,Xu,Zu,Qu,$u=t((()=>{Y(),Q(),Yu={color:`#ffbb00`,backgroundColor:null,intensity:.5,speed:.3,spread:.5,mouseInfluence:.08},Xu=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Zu=`
uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
uniform vec3 uAccent;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uIntensity;
uniform float uSpeed;
uniform float uSpread;
uniform vec3 uDimAccent;
uniform vec3 uSoftAccent;

varying vec2 vUv;

float gaussian(vec2 point, vec2 center, float radius) {
  vec2 delta = point - center;
  return exp(-dot(delta, delta) / (2.0 * radius * radius));
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;

  float t = uTime * uSpeed;

  vec2 pointerOffset = uPointer * 0.08;

  vec2 c0 = vec2(
    -0.42 + 0.12 * sin(t * 0.71),
     0.18 + 0.10 * cos(t * 0.53)
  ) + pointerOffset;

  vec2 c1 = vec2(
     0.36 + 0.13 * cos(t * 0.47 + 1.8),
    -0.20 + 0.09 * sin(t * 0.67 + 0.5)
  ) + pointerOffset * 0.55;

  vec2 c2 = vec2(
     0.02 + 0.16 * sin(t * 0.38 + 3.2),
     0.40 + 0.08 * cos(t * 0.59 + 2.1)
  ) - pointerOffset * 0.35;

  float g0 = gaussian(p, c0, uSpread * 0.78);
  float g1 = gaussian(p, c1, uSpread * 0.64);
  float g2 = gaussian(p, c2, uSpread * 0.92);

  float field = 1.0 - (1.0 - g0 * 0.75) *
                      (1.0 - g1 * 0.55) *
                      (1.0 - g2 * 0.38);

  field *= 0.92 + 0.08 * sin(t * 0.45);
  field = smoothstep(0.0, 1.0, field) * uIntensity;

  vec3 glowColor = mix(uDimAccent, uAccent, clamp(g0 * 0.7 + g1 * 0.45, 0.0, 1.0));
  vec3 rgb = mix(uBackground, glowColor, field);
  float alpha = mix(field, 1.0, uHasBackground);

  gl_FragColor = vec4(rgb, alpha);
}
`,Qu=class extends Z{constructor(e={}){super({...Yu,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uPointer:{value:new F(0,0)},uAccent:{value:X(this.options.color).clone()},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uIntensity:{value:this.options.intensity},uSpeed:{value:this.options.speed},uSpread:{value:this.options.spread},uDimAccent:{value:new B},uSoftAccent:{value:new B}},vertexShader:Xu,fragmentShader:Zu,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,this.dimAccent=e.clone().multiplyScalar(.42),this.softAccent=e.clone().lerp(new B(16777215),.16),t.uAccent.value.copy(e),t.uDimAccent.value.copy(this.dimAccent),t.uSoftAccent.value.copy(this.softAccent);let n=X(this.options.backgroundColor);n?(t.uBackground.value.copy(n),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uIntensity.value=P.clamp(this.options.intensity,.1,.85),t.uSpeed.value=P.clamp(this.options.speed,.02,.6),t.uSpread.value=P.clamp(this.options.spread,.35,1.2);let r=this.options.backgroundColor==null;this.material.transparent!==r&&(this.material.transparent=r,this.material.needsUpdate=!0)}}})),ed,td,nd,rd,id=t((()=>{Y(),Q(),ed={color:`#9e86fe`,backgroundColor:null,brightness:.7,width:.25,speed:.4,mouseInfluence:.06},td=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,nd=`
uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
uniform vec3 uAccent;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uBrightness;
uniform float uWidth;
uniform float uSpeed;
uniform vec3 uDimAccent;

varying vec2 vUv;

vec2 axis(float angle) {
  return vec2(cos(angle), sin(angle));
}

float beam(float coordinate, float center, float halfWidth) {
  float normalizedDistance = (coordinate - center) / max(halfWidth, 0.001);
  return exp(-normalizedDistance * normalizedDistance * 3.2);
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;

  float t = uTime * uSpeed;

  vec2 pointerShift = uPointer * 0.04;
  float angle0 = -0.68 + uPointer.x * 0.08;
  float angle1 = 0.92 + uPointer.x * 0.05;
  float angle2 = -1.14 + uPointer.x * 0.04;

  float b0 = beam(dot(p - pointerShift, axis(angle0)), 0.86 * sin(t * 0.82 + 0.2), uWidth) * 0.72;
  float b1 = beam(dot(p - pointerShift * 0.6, axis(angle1)), 0.80 * sin(t * 0.57 + 2.4), uWidth * 1.55) * 0.36;
  float b2 = beam(dot(p - pointerShift * 0.3, axis(angle2)), 0.73 * sin(t * 0.43 + 4.1), uWidth * 0.72) * 0.24;

  float longVariation = 0.9 + 0.1 * sin(dot(p, axis(angle0 + 1.5708)) * 2.2 + t * 0.35);
  b0 *= longVariation;

  float energy = 1.0 - (1.0 - b0) * (1.0 - b1) * (1.0 - b2);
  energy *= uBrightness;

  vec3 beamColor = mix(uDimAccent, uAccent, clamp(b0 + b1 * 0.5, 0.0, 1.0));
  vec3 rgb = uBackground + beamColor * energy;
  float alpha = mix(energy, 1.0, uHasBackground);

  gl_FragColor = vec4(rgb, alpha);
}
`,rd=class extends Z{constructor(e={}){super({...ed,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uPointer:{value:new F(0,0)},uAccent:{value:X(this.options.color).clone()},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uBrightness:{value:this.options.brightness},uWidth:{value:this.options.width},uSpeed:{value:this.options.speed},uDimAccent:{value:new B}},vertexShader:td,fragmentShader:nd,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,this.dimAccent=e.clone().multiplyScalar(.42),t.uAccent.value.copy(e),t.uDimAccent.value.copy(this.dimAccent);let n=X(this.options.backgroundColor);n?(t.uBackground.value.copy(n),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uBrightness.value=P.clamp(this.options.brightness,.05,.7),t.uWidth.value=P.clamp(this.options.width,.08,.65),t.uSpeed.value=P.clamp(this.options.speed,.03,2);let r=this.options.backgroundColor==null;this.material.transparent!==r&&(this.material.transparent=r,this.material.needsUpdate=!0)}}}));function ad(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var od,sd,cd,ld,ud,dd,fd=t((()=>{Y(),Q(),od={color:`#8f0000`,backgroundColor:null,intensity:.3,size:.5,speed:.5,count:3,variety:.5,depth:0,mouseInfluence:.13},sd=8,cd=2.3999632,ld=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ud=`
uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uIntensity;
uniform float uSize;
uniform float uSpeed;
uniform float uDepth;
uniform float uMouseInfluence;
uniform vec3 uDimAccent;
uniform vec2 uBloomCenters[8];
uniform float uBloomDrift[8];
uniform float uBloomPhase[8];
uniform float uBloomFreq[8];
uniform float uBloomRadius[8];
uniform float uBloomWeight[8];
uniform float uBloomDepth[8];
uniform vec3 uBloomColors[8];

varying vec2 vUv;

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float bloomShape(vec2 p, vec2 c, float rad, float w, float defocus, vec3 col, inout vec3 csum, inout float wsum) {
  float r = length(p - c) / max(rad, 0.001);
  float core = exp(-16.0 * r * r) * (1.0 - 0.45 * defocus);
  float halo = exp(-(3.6 - 1.5 * defocus) * r * r);
  float atmo = exp(-1.25 * r) * (1.0 + 0.45 * defocus);
  float e = (core * 0.85 + halo * 0.5 + atmo * 0.32) * w;
  csum += col * e;
  wsum += e;
  return e;
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;

  float t = uTime * uSpeed;

  vec2 pointerOffset = uPointer * uMouseInfluence;
  float parallaxDepth = uDepth;

  float light = 0.0;
  vec3 colorSum = vec3(0.0);
  float weightSum = 0.0;

  {
    vec2 c = vec2(uBloomCenters[0].x * uAspect, uBloomCenters[0].y)
      + uBloomDrift[0] * vec2(sin(t * uBloomFreq[0] + uBloomPhase[0]), cos(t * uBloomFreq[0] * 0.83 + uBloomPhase[0] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[0] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[0] * parallaxDepth);
    float rad = uSize * uBloomRadius[0] * (0.8 + 0.14 * uBloomDepth[0]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[0])) * (1.0 + 0.18 * abs(uBloomDepth[0] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[0] * (0.72 + 0.55 * uBloomDepth[0] * parallaxDepth), abs(uBloomDepth[0] - 0.5) * 2.0 * parallaxDepth, uBloomColors[0], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[1].x * uAspect, uBloomCenters[1].y)
      + uBloomDrift[1] * vec2(sin(t * uBloomFreq[1] + uBloomPhase[1]), cos(t * uBloomFreq[1] * 0.83 + uBloomPhase[1] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[1] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[1] * parallaxDepth);
    float rad = uSize * uBloomRadius[1] * (0.8 + 0.14 * uBloomDepth[1]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[1])) * (1.0 + 0.18 * abs(uBloomDepth[1] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[1] * (0.72 + 0.55 * uBloomDepth[1] * parallaxDepth), abs(uBloomDepth[1] - 0.5) * 2.0 * parallaxDepth, uBloomColors[1], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[2].x * uAspect, uBloomCenters[2].y)
      + uBloomDrift[2] * vec2(sin(t * uBloomFreq[2] + uBloomPhase[2]), cos(t * uBloomFreq[2] * 0.83 + uBloomPhase[2] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[2] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[2] * parallaxDepth);
    float rad = uSize * uBloomRadius[2] * (0.8 + 0.14 * uBloomDepth[2]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[2])) * (1.0 + 0.18 * abs(uBloomDepth[2] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[2] * (0.72 + 0.55 * uBloomDepth[2] * parallaxDepth), abs(uBloomDepth[2] - 0.5) * 2.0 * parallaxDepth, uBloomColors[2], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[3].x * uAspect, uBloomCenters[3].y)
      + uBloomDrift[3] * vec2(sin(t * uBloomFreq[3] + uBloomPhase[3]), cos(t * uBloomFreq[3] * 0.83 + uBloomPhase[3] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[3] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[3] * parallaxDepth);
    float rad = uSize * uBloomRadius[3] * (0.8 + 0.14 * uBloomDepth[3]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[3])) * (1.0 + 0.18 * abs(uBloomDepth[3] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[3] * (0.72 + 0.55 * uBloomDepth[3] * parallaxDepth), abs(uBloomDepth[3] - 0.5) * 2.0 * parallaxDepth, uBloomColors[3], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[4].x * uAspect, uBloomCenters[4].y)
      + uBloomDrift[4] * vec2(sin(t * uBloomFreq[4] + uBloomPhase[4]), cos(t * uBloomFreq[4] * 0.83 + uBloomPhase[4] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[4] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[4] * parallaxDepth);
    float rad = uSize * uBloomRadius[4] * (0.8 + 0.14 * uBloomDepth[4]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[4])) * (1.0 + 0.18 * abs(uBloomDepth[4] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[4] * (0.72 + 0.55 * uBloomDepth[4] * parallaxDepth), abs(uBloomDepth[4] - 0.5) * 2.0 * parallaxDepth, uBloomColors[4], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[5].x * uAspect, uBloomCenters[5].y)
      + uBloomDrift[5] * vec2(sin(t * uBloomFreq[5] + uBloomPhase[5]), cos(t * uBloomFreq[5] * 0.83 + uBloomPhase[5] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[5] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[5] * parallaxDepth);
    float rad = uSize * uBloomRadius[5] * (0.8 + 0.14 * uBloomDepth[5]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[5])) * (1.0 + 0.18 * abs(uBloomDepth[5] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[5] * (0.72 + 0.55 * uBloomDepth[5] * parallaxDepth), abs(uBloomDepth[5] - 0.5) * 2.0 * parallaxDepth, uBloomColors[5], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[6].x * uAspect, uBloomCenters[6].y)
      + uBloomDrift[6] * vec2(sin(t * uBloomFreq[6] + uBloomPhase[6]), cos(t * uBloomFreq[6] * 0.83 + uBloomPhase[6] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[6] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[6] * parallaxDepth);
    float rad = uSize * uBloomRadius[6] * (0.8 + 0.14 * uBloomDepth[6]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[6])) * (1.0 + 0.18 * abs(uBloomDepth[6] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[6] * (0.72 + 0.55 * uBloomDepth[6] * parallaxDepth), abs(uBloomDepth[6] - 0.5) * 2.0 * parallaxDepth, uBloomColors[6], colorSum, weightSum);
    light += bb;
  }
  {
    vec2 c = vec2(uBloomCenters[7].x * uAspect, uBloomCenters[7].y)
      + uBloomDrift[7] * vec2(sin(t * uBloomFreq[7] + uBloomPhase[7]), cos(t * uBloomFreq[7] * 0.83 + uBloomPhase[7] * 1.37))
      * (0.6 + 0.9 * uBloomDepth[7] * parallaxDepth)
      + pointerOffset * (0.5 + 1.2 * uBloomDepth[7] * parallaxDepth);
    float rad = uSize * uBloomRadius[7] * (0.8 + 0.14 * uBloomDepth[7]) * (0.84 + 0.07 * sin(t * 0.74 + uBloomPhase[7])) * (1.0 + 0.18 * abs(uBloomDepth[7] - 0.5) * 2.0 * parallaxDepth);
    float bb = bloomShape(p, c, rad, uBloomWeight[7] * (0.72 + 0.55 * uBloomDepth[7] * parallaxDepth), abs(uBloomDepth[7] - 0.5) * 2.0 * parallaxDepth, uBloomColors[7], colorSum, weightSum);
    light += bb;
  }

  light *= uIntensity * 1.6;

  vec3 bloomColor = weightSum > 0.001 ? colorSum / weightSum : uDimAccent;

  float energy = clamp(light, 0.0, 1.0);
  vec3 pale = mix(bloomColor, vec3(1.0), 0.35 + 0.45 * energy);
  vec3 tone = vec3(1.0) - exp(-pale * light * 2.4);
  vec3 rgb = uBackground + tone;

  float edge = smoothstep(0.45, 1.15, length(p));
  float vignette = 1.0 - edge * 0.16;
  rgb *= vignette;

  rgb += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;

  float alpha = mix(energy, 1.0, uHasBackground);
  gl_FragColor = vec4(rgb, alpha);
}
`,dd=class extends Z{constructor(e={}){super({...od,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;this.centers=[],this.drift=new Float32Array(sd),this.phase=new Float32Array(sd),this.freq=new Float32Array(sd),this.radius=new Float32Array(sd),this.baseWeight=new Float32Array(sd),this.weight=new Float32Array(sd),this.bloomDepth=new Float32Array(sd),this.colors=[];for(let e=0;e<sd;e++)this.centers.push(new F),this.colors.push(new B);this.initField();let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uPointer:{value:new F(0,0)},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uIntensity:{value:this.options.intensity},uSize:{value:this.options.size},uSpeed:{value:this.options.speed},uDepth:{value:this.options.depth},uMouseInfluence:{value:this.options.mouseInfluence},uDimAccent:{value:new B},uBloomCenters:{value:this.centers},uBloomDrift:{value:this.drift},uBloomPhase:{value:this.phase},uBloomFreq:{value:this.freq},uBloomRadius:{value:this.radius},uBloomWeight:{value:this.weight},uBloomDepth:{value:this.bloomDepth},uBloomColors:{value:this.colors}},vertexShader:ld,fragmentShader:ud,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}initField(){for(let e=0;e<sd;e++)this.drift[e]=.05+ad(e+300)*.1,this.phase[e]=ad(e+400)*Math.PI*2,this.freq[e]=.35+ad(e+500)*.2,this.radius[e]=.55+ad(e+600)*.5,this.baseWeight[e]=.55+ad(e+700)*.45,this.bloomDepth[e]=ad(e+800)}layoutCenters(e){for(let t=0;t<sd;t++){if(t>=e){this.centers[t].set(0,0);continue}let n=(t+.5)/e,r=t*cd+ad(t)*.5,i=.4*Math.sqrt(n);this.centers[t].set(i*Math.cos(r)+(ad(t+100)-.5)*.08,i*Math.sin(r)+(ad(t+200)-.5)*.08)}}buildPalette(){let e={h:0,s:0,l:0};this.accent.getHSL(e);let t=P.clamp(this.options.variety,0,1)*.382,n=Array.isArray(this.options.colors)&&this.options.colors.length?this.options.colors:null;for(let r=0;r<sd;r++){let i=null;n&&r<n.length&&(i=X(n[r])),i||=new B().setHSL((e.h+t*r)%1,e.s,e.l),this.colors[r].copy(i)}}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,this.dimAccent=e.clone().multiplyScalar(.42),t.uDimAccent.value.copy(this.dimAccent);let n=X(this.options.backgroundColor);n?(t.uBackground.value.copy(n),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uIntensity.value=P.clamp(this.options.intensity,.08,.8),t.uSize.value=P.clamp(this.options.size,.3,1.4),t.uSpeed.value=P.clamp(this.options.speed,.02,.5),t.uDepth.value=P.clamp(this.options.depth,0,1),t.uMouseInfluence.value=P.clamp(this.options.mouseInfluence,0,.3);let r=P.clamp(Math.round(this.options.count),1,sd);this.layoutCenters(r),this.weight.set(this.baseWeight);for(let e=r;e<sd;e++)this.weight[e]=0;this.buildPalette();let i=this.options.backgroundColor==null;this.material.transparent!==i&&(this.material.transparent=i,this.material.needsUpdate=!0)}}})),pd,md,hd,gd,_d=t((()=>{Y(),Q(),pd={color:`#ffffff`,backgroundColor:null,coverage:.25,softness:.15,scale:1.5,speed:.15,intensity:.75,depth:1,mouseInfluence:.05},md=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hd=`
uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uCoverage;
uniform float uSoftness;
uniform float uScale;
uniform float uSpeed;
uniform float uIntensity;
uniform float uDepth;
uniform float uMouseInfluence;
uniform vec3 uDimAccent;
uniform vec3 uCloudAccent;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  v += 0.50 * valueNoise(p);
  v += 0.25 * valueNoise(p * 2.02 + vec2(13.7, -5.9));
  v += 0.15 * valueNoise(p * 4.04 + vec2(-31.4, 22.3));
  v += 0.10 * valueNoise(p * 8.08 + vec2(61.2, -49.8));
  return v;
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;

  float t = uTime * uSpeed;
  vec2 m = uPointer * uMouseInfluence;
  float s = uScale;
  float depth = uDepth;

  float warpA = fbm(p * 0.8 * s + vec2(7.2, -3.1) + t * vec2(0.12, -0.08));
  float warpB = fbm(p * 0.8 * s + vec2(-5.3, 9.7) - t * vec2(0.09, 0.10));
  vec2 warp = vec2(warpA, warpB) * (0.16 + 0.16 * depth);

  float n0 = fbm(p * 0.55 * s + warp + vec2(0.0, 0.0) + t * vec2(0.70, -0.40) + m * (0.5 + 0.25 * depth));
  float n1 = fbm(p * 0.85 * s + warp * 1.4 + vec2(31.5, -17.2) - t * vec2(0.95, 0.30) + m * (0.5 + 0.55 * depth));
  float n2 = fbm(p * 1.25 * s + warp * 1.9 + vec2(-73.9, 58.6) + t * vec2(1.10, 0.10) + m * (0.5 + 0.9 * depth));

  float T = 0.72 - 0.44 * uCoverage;
  T -= 0.05 * (vUv.y - 0.5);
  float S = 0.02 + 0.28 * uSoftness;

  float defocusFar = 0.5 * depth;
  float defocusNear = 0.5 * depth;

  float b0 = smoothstep(T - S * (1.0 + 3.0 * defocusFar), T + S * (1.0 + 3.0 * defocusFar), n0);
  float b1 = smoothstep(T - S, T + S, n1);
  float b2 = smoothstep(T - S * (1.0 + 3.0 * defocusNear), T + S * (1.0 + 3.0 * defocusNear), n2);

  float a0 = b0 * 0.34 * (1.0 - 0.5 * depth) * uIntensity;
  float a1 = b1 * 0.5 * uIntensity;
  float a2 = b2 * (0.36 + 0.5 * depth) * uIntensity;

  vec3 pre = vec3(0.0);
  pre = mix(uDimAccent, uCloudAccent, 0.28 + 0.72 * b0 * (1.0 - 0.2 * defocusFar)) * a0 + pre * (1.0 - a0);
  pre = mix(uDimAccent, uCloudAccent, 0.40 + 0.60 * b1) * a1 + pre * (1.0 - a1);
  pre = mix(uDimAccent, uCloudAccent, 0.52 + 0.48 * b2 * (1.0 - 0.2 * defocusNear)) * a2 + pre * (1.0 - a2);

  float accA = 1.0 - (1.0 - a0) * (1.0 - a1) * (1.0 - a2);

  vec3 rgb = pre / max(accA, 0.0001);
  rgb = mix(uBackground, rgb, accA);

  rgb = rgb * 1.06 - rgb * rgb * 0.13;
  float edge = smoothstep(0.45, 1.15, length(p));
  rgb *= 1.0 - edge * 0.12;
  rgb += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;

  float alpha = mix(accA, 1.0, uHasBackground);
  gl_FragColor = vec4(rgb, alpha);
}
`,gd=class extends Z{constructor(e={}){super({...pd,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uPointer:{value:new F(0,0)},uAccent:{value:X(this.options.color).clone()},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uCoverage:{value:this.options.coverage},uSoftness:{value:this.options.softness},uScale:{value:this.options.scale},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uDepth:{value:this.options.depth},uMouseInfluence:{value:this.options.mouseInfluence},uDimAccent:{value:new B},uCloudAccent:{value:new B}},vertexShader:md,fragmentShader:hd,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e;let n={h:0,s:0,l:0};e.getHSL(n),this.atmoColor=new B().setHSL(n.h,P.clamp(n.s*.6,0,1),P.clamp(n.l*.45,0,1)),this.cloudLight=new B().setHSL(n.h,P.clamp(n.s*.22,0,1),Math.min(1,n.l+(1-n.l)*.55)),t.uAccent.value.copy(e),t.uDimAccent.value.copy(this.atmoColor),t.uCloudAccent.value.copy(this.cloudLight);let r=X(this.options.backgroundColor);r?(t.uBackground.value.copy(r),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uCoverage.value=P.clamp(this.options.coverage,.15,.85),t.uSoftness.value=P.clamp(this.options.softness,.05,.42),t.uScale.value=P.clamp(this.options.scale,.45,3),t.uSpeed.value=P.clamp(this.options.speed,.02,.35),t.uIntensity.value=P.clamp(this.options.intensity,.08,.75),t.uDepth.value=P.clamp(this.options.depth,0,1),t.uMouseInfluence.value=P.clamp(this.options.mouseInfluence,0,.15);let i=this.options.backgroundColor==null;this.material.transparent!==i&&(this.material.transparent=i,this.material.needsUpdate=!0)}}}));function vd(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var yd,bd,xd,Sd,Cd,wd=t((()=>{Y(),Q(),yd={color:`#2e005c`,backgroundColor:null,layers:3,amplitude:.16,softness:.03,speed:.25,intensity:.25,crestGlow:.5,depth:1,mouseInfluence:.035},bd=6,xd=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Sd=`
#define MAX_TIDE_LAYERS 6

uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
uniform vec3 uAccent;
uniform vec3 uGradient[3];
uniform vec3 uCrestColor;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uLayerCount;
uniform float uAmplitude;
uniform float uSoftness;
uniform float uSpeed;
uniform float uIntensity;
uniform float uDepth;
uniform float uCrestGlow;
uniform float uMouseInfluence;
uniform vec4 uLayerParams[MAX_TIDE_LAYERS];
uniform vec3 uLayerShape[MAX_TIDE_LAYERS];

varying vec2 vUv;

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  float x = (vUv.x - 0.5) * uAspect;
  float y = vUv.y;
  float t = uTime * uSpeed;
  float depth = uDepth;

  vec3 pre = uBackground * uHasBackground;
  float outA = uHasBackground;

  for (int i = 0; i < MAX_TIDE_LAYERS; i++) {
    if (float(i) >= uLayerCount) continue;

    float f = uLayerCount > 1.0 ? float(i) / (uLayerCount - 1.0) : 0.0;
    float defocus = abs(f - 0.5) * 2.0 * depth;
    float parallax = 0.25 + 1.15 * f * (0.4 + 0.8 * depth) * (1.0 + 0.3 * defocus);
    float xp = x + uPointer.x * parallax * uMouseInfluence * 2.5;

    float yBase = uLayerParams[i].x;
    float freq = uLayerParams[i].y;
    float phase = uLayerParams[i].z;
    float speedMul = uLayerParams[i].w;

    float amp = uAmplitude * uLayerShape[i].x * (0.75 + 0.5 * f * (0.5 + 0.5 * depth));
    float opacity = uLayerShape[i].y;
    float tint = uLayerShape[i].z;

    float h =
      yBase +
      amp * (
        0.60 * sin(freq * xp + speedMul * t + phase) +
        0.25 * sin(1.73 * freq * xp - 0.61 * speedMul * t + 1.7 * phase) +
        0.15 * sin(0.57 * freq * xp + 0.37 * speedMul * t + 2.3 * phase)
      );

    h += uPointer.y * uMouseInfluence * (0.3 + 0.7 * tint);

    float edge = uSoftness * (1.0 + 1.6 * defocus);
    float mask = 1.0 - smoothstep(h, h + edge * 1.7, y);
    float A = mask * opacity * uIntensity;
    if (A < 0.001) continue;

    float crestDist = (y - (h + edge * 0.25)) / max(edge * (0.55 + 1.1 * defocus), 0.002);
    float crest = exp(-crestDist * crestDist);
    float under = (y < h) ? exp(-pow((y - h) / max(edge * (1.5 + 1.2 * defocus), 0.004), 2.0)) : 0.0;

    // Multi-hue gradient wash: blend smoothly across the three color stops by
    // layer depth, then brighten toward each band's crest so the stacked bands
    // merge into one continuous gradient instead of flat color regions.
    vec3 grad = mix(uGradient[0], uGradient[1], smoothstep(0.0, 0.55, f));
    grad = mix(grad, uGradient[2], smoothstep(0.45, 1.0, f));

    float band = clamp((y - h) / max(edge * 2.6, 0.004), 0.0, 1.0);
    vec3 C = grad * (0.5 + 0.5 * (1.0 - band));
    C += uCrestColor * ((crest * uCrestGlow + under * uCrestGlow * 0.4) * (1.0 - 0.4 * defocus));

    pre = C * A + pre * (1.0 - A);
    outA = A + outA * (1.0 - A);
  }

  vec3 rgb = pre / max(outA, 0.0001);
  rgb = rgb * 1.04 - rgb * rgb * 0.08;

  vec2 p = vec2((vUv.x - 0.5) * uAspect, vUv.y - 0.5);
  float edge = smoothstep(0.45, 1.15, length(p));
  rgb *= 1.0 - edge * 0.12;
  rgb += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;

  gl_FragColor = vec4(rgb, outA);
}
`,Cd=class extends Z{constructor(e={}){super({...yd,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;this.layerParams=new Float32Array(24),this.layerShape=new Float32Array(18);let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uPointer:{value:new F(0,0)},uAccent:{value:X(this.options.color).clone()},uGradient:{value:[new L,new L,new L]},uCrestColor:{value:new B},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uLayerCount:{value:this.options.layers},uAmplitude:{value:this.options.amplitude},uSoftness:{value:this.options.softness},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uDepth:{value:this.options.depth},uCrestGlow:{value:this.options.crestGlow},uMouseInfluence:{value:this.options.mouseInfluence},uLayerParams:{value:this.layerParams},uLayerShape:{value:this.layerShape}},vertexShader:xd,fragmentShader:Sd,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}layoutLayers(e){for(let t=0;t<bd;t++){let n=t*4;if(t>=e){this.layerParams[n]=0,this.layerParams[n+1]=0,this.layerParams[n+2]=0,this.layerParams[n+3]=0,this.layerShape[t*3]=0,this.layerShape[t*3+1]=0,this.layerShape[t*3+2]=0;continue}let r=e>1?t/(e-1):0;e>1?this.layerParams[n]=1.02-r*.62:this.layerParams[n]=.5,this.layerParams[n+1]=1.2+vd(t+50)*1.4,this.layerParams[n+2]=vd(t+100)*Math.PI*2,this.layerParams[n+3]=Math.max(.3,1-.45*r+vd(t+150)*.3),this.layerShape[t*3]=(.6+.8*r)*(.8+vd(t+200)*.4),this.layerShape[t*3+1]=.42+.5*r,this.layerShape[t*3+2]=.05+.62*r}}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,t.uAccent.value.copy(e);let n={h:0,s:0,l:0};e.getHSL(n);let r=t.uGradient.value,i=new B().setHSL((n.h-.045+1)%1,Math.min(1,n.s*.85),Math.max(.05,n.l*.34)),a=new B().setHSL((n.h+.07)%1,Math.min(1,n.s*.8),Math.min(1,n.l+(1-n.l)*.5));r[0].set(i.r,i.g,i.b),r[1].set(e.r,e.g,e.b),r[2].set(a.r,a.g,a.b);let o=new B().setHSL(n.h,Math.min(1,n.s*.35),Math.min(1,n.l+(1-n.l)*.65));t.uCrestColor.value.copy(o);let s=X(this.options.backgroundColor);s?(t.uBackground.value.copy(s),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0);let c=P.clamp(Math.round(this.options.layers),1,bd);this.layoutLayers(c),t.uLayerCount.value=c,t.uAmplitude.value=P.clamp(this.options.amplitude,.015,.4),t.uSoftness.value=P.clamp(this.options.softness,.004,.065),t.uSpeed.value=P.clamp(this.options.speed,.02,.38),t.uIntensity.value=P.clamp(this.options.intensity,.1,.78),t.uCrestGlow.value=P.clamp(this.options.crestGlow,0,1.5),t.uDepth.value=P.clamp(this.options.depth,0,1),t.uMouseInfluence.value=P.clamp(this.options.mouseInfluence,0,.1);let l=this.options.backgroundColor==null;this.material.transparent!==l&&(this.material.transparent=l,this.material.needsUpdate=!0)}}}));function Td(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var Ed,Dd,Od,kd,Ad=t((()=>{Y(),Q(),Ed={color:`#ffc800`,backgroundColor:null,count:60,glowSize:3.5,wander:50,speed:.5,twinkle:1,variety:1,depth:1,mouseInfluence:.025},Dd=`
attribute vec3 color;
attribute float aPhase;
attribute float aFrequency;
attribute float aWander;
attribute float aDepth;
attribute float aSize;

uniform float uTime;
uniform float uSpeed;
uniform float uWander;
uniform float uTwinkle;
uniform float uGlowSize;
uniform float uPixelRatio;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uHeight;
uniform float uCamDist;
uniform float uDepthAmount;
uniform float uSpanZ;

varying vec3 vColor;
varying float vBrightness;
varying float vDefocus;

void main() {
  float t = uTime * uSpeed;
  float wf = aFrequency;

  vec3 pos = position;
  float w = aWander * uWander;
  pos.x += w * (0.70 * sin(wf * t + aPhase) + 0.30 * sin(1.61 * wf * t + 1.9 * aPhase));
  pos.y += w * (0.55 * cos(0.83 * wf * t + 1.3 * aPhase) + 0.20 * sin(1.37 * wf * t + 0.4 * aPhase));

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float dist = max(0.001, -mvPosition.z);
  float depthFactor = clamp(uCamDist / dist, 0.25, 2.4);

  vDefocus = clamp(abs(position.z) / max(uSpanZ * 0.5, 0.001), 0.0, 1.0);

  float parallax = clamp(depthFactor, 0.5, 2.0);
  pos.x += uPointer.x * uMouseInfluence * uHeight * parallax;
  pos.y += uPointer.y * uMouseInfluence * uHeight * parallax;

  wf *= clamp(depthFactor, 0.5, 1.5);

  float tw = uTwinkle;
  float L = 0.55 + 0.45 * ((1.0 - tw) + tw * (0.5 + 0.5 * sin(1.7 * wf * t + aPhase)));
  vBrightness = L * (0.65 + 0.35 * aDepth) * clamp(0.35 + 0.65 * depthFactor, 0.2, 1.15);
  vColor = color;

  gl_PointSize = uGlowSize * 3.0 * aSize * (1.0 + 0.5 * aDepth) * (0.6 + 0.4 * L) * uPixelRatio * depthFactor * (1.0 + 0.7 * uDepthAmount * vDefocus);

  mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
`,Od=`
varying vec3 vColor;
varying float vBrightness;
varying float vDefocus;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  if (d > 1.0) discard;

  float halo = exp(-(4.5 - 2.2 * vDefocus) * d * d);
  float core = exp(-(22.0 - 16.0 * vDefocus) * d * d);
  float a = (halo * (0.35 + 0.35 * vDefocus) + core * (0.65 - 0.32 * vDefocus)) * vBrightness;
  vec3 col = vColor * (1.0 + core * 0.5 * (1.0 - 0.5 * vDefocus));

  gl_FragColor = vec4(col, a);
}
`,kd=class extends Z{constructor(e={}){super({...Ed,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildField(e,t),this.frameCamera()}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2*1.06;this.camera.position.z=t/Math.tan(e/2),this.camera.updateProjectionMatrix(),this.material&&(this.material.uniforms.uCamDist.value=this.camera.position.z)}buildField(e,t){this.points&&(this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose());let n=P.clamp(Math.round(this.options.count),8,100);this.currentCount=n;let r=P.clamp(this.options.depth,.2,1.2);this.lastDepth=r;let i=(r-.2)/1;this.depthAmount=i;let a=e*1.25,o=t*1.25,s=t*(.05+1.15*i),c=new Float32Array(n*3),l=new Float32Array(n*3),u=new Float32Array(n),d=new Float32Array(n),f=new Float32Array(n),p=new Float32Array(n),m=new Float32Array(n);this.palette=[];for(let e=0;e<n;e++)this.palette.push(new B);for(let e=0;e<n;e++)c[e*3]=(Td(e+100)-.5)*a,c[e*3+1]=(Td(e+200)-.5)*o,c[e*3+2]=(Td(e+650)-.5)*s,u[e]=Td(e+300)*Math.PI*2,d[e]=.28+Td(e+400)*.62,f[e]=.55+Td(e+500)*.9,p[e]=Td(e+600),m[e]=.7+Td(e+700)*.8;let h=this.camera.fov*Math.PI/180,g=this.height/2*1.06/Math.tan(h/2),_=new U;_.setAttribute(`position`,new H(c,3)),_.setAttribute(`color`,new H(l,3)),_.setAttribute(`aPhase`,new H(u,1)),_.setAttribute(`aFrequency`,new H(d,1)),_.setAttribute(`aWander`,new H(f,1)),_.setAttribute(`aDepth`,new H(p,1)),_.setAttribute(`aSize`,new H(m,1)),this.geometry=_;let v=new G({uniforms:{uTime:{value:0},uSpeed:{value:this.options.speed},uWander:{value:this.options.wander},uTwinkle:{value:this.options.twinkle},uGlowSize:{value:this.options.glowSize},uPixelRatio:{value:this.renderer.getPixelRatio()},uPointer:{value:new F(0,0)},uMouseInfluence:{value:this.options.mouseInfluence},uHeight:{value:t},uCamDist:{value:g},uDepthAmount:{value:i},uSpanZ:{value:s}},vertexShader:Dd,fragmentShader:Od,transparent:!0,depthWrite:!1,blending:this.options.backgroundColor==null?1:2});this.material=v;let y=new Ns(_,v);y.frustumCulled=!1,this.scene.add(y),this.points=y,this.updateOptions()}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;this.accent=e;let t=P.clamp(Math.round(this.options.count),8,100),n=P.clamp(this.options.depth,.2,1.2);if((t!==this.currentCount||n!==this.lastDepth)&&this.width&&this.height){this.buildField(this.width,this.height);return}let r=this.material.uniforms;r.uSpeed.value=P.clamp(this.options.speed,.03,2),r.uWander.value=P.clamp(this.options.wander,4,90),r.uTwinkle.value=P.clamp(this.options.twinkle,0,2),r.uGlowSize.value=P.clamp(this.options.glowSize,1,7),r.uMouseInfluence.value=P.clamp(this.options.mouseInfluence,0,.1),this.buildPalette();let i=this.geometry.attributes.color.array;for(let e=0;e<this.currentCount;e++){let t=this.palette[e];i[e*3]=t.r,i[e*3+1]=t.g,i[e*3+2]=t.b}this.geometry.attributes.color.needsUpdate=!0;let a=this.options.backgroundColor==null?1:2;this.material.blending!==a&&(this.material.blending=a)}buildPalette(){let e={h:0,s:0,l:0};this.accent.getHSL(e);let t=P.clamp(this.options.variety,0,1),n=Array.isArray(this.options.colors)&&this.options.colors.length?this.options.colors:null;for(let r=0;r<this.currentCount;r++){let i=null;if(n&&r<n.length&&(i=X(n[r])),!i){let n=(e.h+(Td(r+800)-.5)*2*t*.06+1)%1,a=P.clamp(e.s*(.75+Td(r+850)*.5),0,1),o=P.clamp(e.l*(.55+Td(r+900)*.6),0,1);i=new B().setHSL(n,a,o)}this.palette[r].copy(i)}}}})),jd,Md,Nd,Pd,Fd=t((()=>{Y(),Q(),jd={color:`#ffadad`,backgroundColor:null,mode:`dual`,density:8,warp:.25,speed:.15,intensity:.7,glow:1.5,depth:1,originX:0,originY:0,mouseInfluence:.1},Md=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Nd=`
uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
uniform vec3 uAccent;
uniform vec3 uAtmoColor;
uniform vec3 uLineColor;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uDensity;
uniform float uWarp;
uniform float uSpeed;
uniform float uIntensity;
uniform float uGlow;
uniform float uDepth;
uniform float uMode;
uniform vec2 uOrigin;
uniform float uMouseInfluence;

varying vec2 vUv;

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float sineField(vec2 p, float t) {
  float v = 0.0;
  v += sin(p.x * 1.0 + p.y * 0.35 + t * 0.70);
  v += sin(p.y * 1.0 - p.x * 0.42 + t * 0.53);
  v += sin((p.x + p.y) * 0.72 + t * 0.41);
  v += sin((p.y - p.x) * 0.88 - t * 0.34);
  return v;
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;
  p -= uOrigin * vec2(uAspect, 1.0) * 0.45;

  float t = uTime * uSpeed;
  float depth = uDepth;

  vec2 m = uPointer * uMouseInfluence;

  float w = uWarp * (0.55 + 0.45 * depth);
  float warpA = 0.5 + 0.5 * sin(p.x * 0.9 + p.y * 0.6 + t * 0.8);
  float warpB = 0.5 + 0.5 * sin(p.y * 0.8 - p.x * 0.7 - t * 0.6);
  vec2 wv = vec2(warpA, warpB) * w;

  vec2 q = p + wv + m * (0.35 + 0.85 * depth);

  float d = uDensity;
  float defocusFar = depth;
  float defocusNear = depth;

  float farField = 0.35 * sineField(q * d * 0.8 + vec2(t * 0.15, -t * 0.09), t);
  float focalField = sineField(q * d + vec2(t * 0.22, -t * 0.14), t);
  float nearField = 0.5 * sineField(q * d * 2.1 - vec2(t * 0.1, t * 0.18), t) * (0.3 + 0.5 * depth);

  float bandsFar = sin(farField * 2.4);
  float bandsFocal = sin(focalField * 2.4);
  float bandsNear = sin(nearField * 2.4);

  float contourFar = 1.0 - smoothstep(0.0, 0.16 + 0.12 * defocusFar, abs(bandsFar));
  float contourFocal = 1.0 - smoothstep(0.0, 0.16, abs(bandsFocal));
  float contourNear = 1.0 - smoothstep(0.0, 0.16 + 0.12 * defocusNear, abs(bandsNear));

  float haloFar = exp(-abs(bandsFar) * (3.4 - 1.4 * defocusFar));
  float haloFocal = exp(-abs(bandsFocal) * 3.4);
  float haloNear = exp(-abs(bandsNear) * (3.4 - 1.4 * defocusNear));

  float strength =
    (contourFar * 0.2 + haloFar * uGlow * 0.1) * (1.0 - 0.35 * defocusFar) * uMode +
    (contourFocal * 0.55 + haloFocal * uGlow * 0.34) +
    (contourNear * 0.25 + haloNear * uGlow * 0.12) * (1.0 - 0.35 * defocusNear) * uMode;
  strength *= uIntensity * 1.35;

  vec3 line = mix(uLineColor, uAccent, 0.25 + 0.35 * depth);
  vec3 col = mix(uAtmoColor, line, 0.28 + 0.72 * contourFocal);

  vec3 pre = uBackground * uHasBackground;
  float outA = uHasBackground;

  float A = clamp(strength, 0.0, 1.0);
  col = mix(col, line, A);
  pre = col * A + pre * (1.0 - A);
  outA = A + outA * (1.0 - A);

  vec3 rgb = pre / max(outA, 0.0001);
  rgb = rgb * 1.05 - rgb * rgb * 0.1;

  vec2 p2 = vec2((vUv.x - 0.5) * uAspect, vUv.y - 0.5);
  float edge = smoothstep(0.45, 1.15, length(p2));
  rgb *= 1.0 - edge * 0.12;
  rgb += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;

  gl_FragColor = vec4(rgb, outA);
}
`,Pd=class extends Z{constructor(e={}){super({...jd,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uPointer:{value:new F(0,0)},uAccent:{value:X(this.options.color).clone()},uAtmoColor:{value:new B},uLineColor:{value:new B},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uDensity:{value:this.options.density},uWarp:{value:this.options.warp},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uGlow:{value:this.options.glow},uDepth:{value:this.options.depth},uMode:{value:this.options.mode===`single`?0:1},uOrigin:{value:new F(this.options.originX,this.options.originY)},uMouseInfluence:{value:this.options.mouseInfluence}},vertexShader:Md,fragmentShader:Nd,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.material.uniforms.uTime.value=t,this.material.uniforms.uPointer.value.set(this.pointer.x,this.pointer.y)}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,t.uAccent.value.copy(e);let n={h:0,s:0,l:0};e.getHSL(n);let r=new B().setHSL(n.h,P.clamp(n.s*.6,0,1),P.clamp(n.l*.4,0,1)),i=new B().setHSL(n.h,P.clamp(n.s*.4,0,1),Math.min(1,n.l+(1-n.l)*.55));t.uAtmoColor.value.copy(r),t.uLineColor.value.copy(i);let a=X(this.options.backgroundColor);a?(t.uBackground.value.copy(a),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uDensity.value=P.clamp(this.options.density,1,10),t.uWarp.value=P.clamp(this.options.warp,0,1.2),t.uSpeed.value=P.clamp(this.options.speed,.02,.6),t.uIntensity.value=P.clamp(this.options.intensity,.08,.8),t.uGlow.value=P.clamp(this.options.glow,0,3),t.uDepth.value=P.clamp(this.options.depth,0,1),t.uMode.value=this.options.mode===`single`?0:1,t.uOrigin.value.set(P.clamp(this.options.originX,-1,1),P.clamp(this.options.originY,-1,1)),t.uMouseInfluence.value=P.clamp(this.options.mouseInfluence,0,.2);let o=this.options.backgroundColor==null;this.material.transparent!==o&&(this.material.transparent=o,this.material.needsUpdate=!0)}}})),Id,Ld,Rd,zd,Bd=t((()=>{Y(),Q(),Id={color:`#85ffca`,backgroundColor:null,layers:3,height:.3,spread:.8,folds:.5,speed:.15,intensity:.5,glow:.82,depth:.5,mouseControls:!1,touchControls:!1},Ld=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Rd=`
uniform float uTime;
uniform float uAspect;
uniform vec3 uAccent;
uniform vec3 uAtmoColor;
uniform vec3 uCrestColor;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uLayerCount;
uniform float uHeight;
uniform float uSpread;
uniform float uFolds;
uniform float uSpeed;
uniform float uIntensity;
uniform float uGlow;
uniform float uDepth;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  v += 0.55 * valueNoise(p);
  v += 0.28 * valueNoise(p * 2.03 + vec2(7.4, -3.9));
  v += 0.17 * valueNoise(p * 4.05 + vec2(-21.3, 13.7));
  return v;
}

float curtainHeight(float x, float t, float freq, float phase, float flow) {
  return 0.60 * sin(freq * x + phase + flow * t) +
         0.25 * sin(1.73 * freq * x + 1.7 * phase - flow * 0.61 * t) +
         0.15 * sin(0.57 * freq * x + 2.3 * phase + flow * 0.37 * t);
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;

  float t = uTime * uSpeed;
  float depth = uDepth;
  float center = uHeight - 0.5;
  float spread = uSpread * (0.5 + 0.5 * depth);
  float folds = uFolds;

  vec3 pre = uBackground * uHasBackground;
  float outA = uHasBackground;

  float wash = smoothstep(0.1, 0.6, fbm(vec2(p.x * 0.5, t * 0.05)));
  wash *= exp(-abs(vUv.y - uHeight) * 3.2) * uIntensity * 0.18;
  vec3 washCol = mix(uAtmoColor, uAccent, 0.3);
  pre = washCol * wash + pre * (1.0 - wash);
  outA = wash + outA * (1.0 - wash);

  for (int i = 0; i < 5; i++) {
    if (float(i) >= uLayerCount) continue;

    float f = uLayerCount > 1.0 ? float(i) / (uLayerCount - 1.0) : 0.0;
    float nearness = 0.35 + 0.65 * f;
    float defocus = abs(f - 0.5) * 2.0 * depth;

    float xp = p.x + t * (0.12 + 0.25 * nearness) * (1.0 + 0.4 * defocus);

    float freq = 0.8 + 0.7 * nearness + 0.35 * sin(float(i) * 2.1);
    float phase = float(i) * 2.4;
    float flow = 0.5 + 0.9 * nearness;

    float n = fbm(vec2(xp * (0.4 + 0.5 * nearness), float(i) * 3.7 + t * (0.25 + 0.3 * nearness)));
    float fold = (n - 0.5) * folds * (0.6 + 0.7 * nearness);

    float h = center + spread * (0.22 + 0.5 * f) * (0.55 + 0.5 * curtainHeight(xp, t, freq, phase, flow));
    h += fold * 0.2 * spread;

    float soft = (0.06 + 0.05 * (1.0 - nearness)) * (1.0 + 1.8 * defocus);
    float band = exp(-pow((vUv.y - (h + 0.5)) / soft, 2.0));
    float under = exp(-pow((vUv.y - (h + 0.5)) / max(soft * (2.4 + 1.6 * defocus), 0.004), 2.0));

    float A = (band * 0.7 + under * 0.3) * (0.35 + 0.55 * nearness) * uIntensity * (1.0 - 0.3 * defocus);
    if (A < 0.002) continue;

    float crest = exp(-pow((vUv.y - (h + 0.5)) / max(soft * (0.5 + 1.2 * defocus), 0.004), 2.0));
    vec3 C = mix(uAtmoColor, uAccent, 0.35 + 0.55 * f);
    C += uCrestColor * crest * uGlow * (0.4 + 0.6 * nearness) * (1.0 - 0.55 * defocus);

    pre = C * A + pre * (1.0 - A);
    outA = A + outA * (1.0 - A);
  }

  vec3 rgb = pre / max(outA, 0.0001);
  rgb = rgb * 1.05 - rgb * rgb * 0.1;

  vec2 p2 = vec2((vUv.x - 0.5) * uAspect, vUv.y - 0.5);
  float edge = smoothstep(0.45, 1.15, length(p2));
  rgb *= 1.0 - edge * 0.14;
  rgb += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;

  gl_FragColor = vec4(rgb, outA);
}
`,zd=class extends Z{constructor(e={}){super({...Id,...e})}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uAccent:{value:X(this.options.color).clone()},uAtmoColor:{value:new B},uCrestColor:{value:new B},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uLayerCount:{value:this.options.layers},uHeight:{value:this.options.height},uSpread:{value:this.options.spread},uFolds:{value:this.options.folds},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uGlow:{value:this.options.glow},uDepth:{value:this.options.depth}},vertexShader:Ld,fragmentShader:Rd,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.material.uniforms.uTime.value=t}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,t.uAccent.value.copy(e);let n={h:0,s:0,l:0};e.getHSL(n);let r=new B().setHSL(n.h,P.clamp(n.s*.55,0,1),P.clamp(n.l*.35,0,1)),i=new B().setHSL(n.h,P.clamp(n.s*.3,0,1),Math.min(1,n.l+(1-n.l)*.6));t.uAtmoColor.value.copy(r),t.uCrestColor.value.copy(i);let a=X(this.options.backgroundColor);a?(t.uBackground.value.copy(a),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uLayerCount.value=P.clamp(Math.round(this.options.layers),2,5),t.uHeight.value=P.clamp(this.options.height,.05,.85),t.uSpread.value=P.clamp(this.options.spread,.2,1.4),t.uFolds.value=P.clamp(this.options.folds,0,1.2),t.uSpeed.value=P.clamp(this.options.speed,.01,.35),t.uIntensity.value=P.clamp(this.options.intensity,.08,.8),t.uGlow.value=P.clamp(this.options.glow,0,1.5),t.uDepth.value=P.clamp(this.options.depth,0,1);let o=this.options.backgroundColor==null;this.material.transparent!==o&&(this.material.transparent=o,this.material.needsUpdate=!0)}}}));function Vd(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var Hd,Ud,Wd,Gd,Kd,qd=t((()=>{Y(),Q(),Hd={color:`#8000ff`,backgroundColor:null,ribbons:4,width:.06,curl:1.4,angle:0,focusX:0,focusY:0,speed:.1,intensity:.5,sheen:.8,depth:1,mouseControls:!1,touchControls:!1},Ud=6,Wd=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gd=`
#define MAX_SILK_RIBBONS 6

uniform float uTime;
uniform float uAspect;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uRibbonCount;
uniform float uWidth;
uniform float uCurl;
uniform float uAngle;
uniform float uSpeed;
uniform float uIntensity;
uniform float uSheen;
uniform float uDepth;
uniform vec2 uFocus;
uniform vec4 uRibbonParams[MAX_SILK_RIBBONS];
uniform vec3 uRibbonShape[MAX_SILK_RIBBONS];
uniform vec3 uRibbonColors[MAX_SILK_RIBBONS];

varying vec2 vUv;

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;
  p -= uFocus * vec2(uAspect, 1.0) * 0.45;

  float t = uTime * uSpeed;
  float depth = uDepth;
  float ang = uAngle * 0.9;
  float ca = cos(ang);
  float sa = sin(ang);
  vec2 rp = vec2(ca * p.x + sa * p.y, -sa * p.x + ca * p.y);
  rp.x *= 0.85 + 0.3 * depth;

  vec3 pre = uBackground * uHasBackground;
  float outA = uHasBackground;

  for (int i = 0; i < MAX_SILK_RIBBONS; i++) {
    if (float(i) >= uRibbonCount) continue;

    vec4 pr = uRibbonParams[i];
    vec3 sh = uRibbonShape[i];
    float base = pr.x;
    float amp = pr.y;
    float freq = pr.z;
    float phase = pr.w;
    float speedMul = sh.x;
    float wMul = sh.y;
    float depthF = sh.z;

    float defocus = abs(depthF - 0.5) * 2.0 * depth;
    float drift = t * speedMul * (0.35 + 0.65 * depthF) * (0.4 + 0.9 * depth);
    float xs = rp.x + drift;

    float curl = uCurl;
    float yc = base + amp * (
      0.60 * sin(freq * xs + phase + t * 0.7 * speedMul) +
      0.25 * sin(1.61 * freq * xs + 1.9 * phase - t * 0.45 * speedMul) +
      0.15 * sin(0.57 * freq * xs + 2.3 * phase + t * 0.3 * speedMul)
    );

    float xf = rp.x;
    float fade = 0.16;
    float s0 = -1.15;
    float s1 = 1.15;
    float env = smoothstep(s0, s0 + fade, xf) * (1.0 - smoothstep(s1 - fade, s1, xf));

    float w = uWidth * wMul * (0.75 + 0.5 * depthF) * (1.0 + 0.8 * defocus);
    float d = rp.y - yc;

    float body = exp(-(d * d) / (w * w));
    float sheenDist = d - w * 0.7;
    float sheen = exp(-(sheenDist * sheenDist) / (w * w * (0.22 + 0.35 * defocus))) * (1.0 - 0.45 * defocus);

    float brightness = (0.65 + 0.55 * depthF) * (1.0 - 0.2 * defocus);
    float A = (body * 0.55 + sheen * uSheen * 0.8) * brightness * uIntensity * env;
    if (A < 0.002) continue;

    vec3 C = uRibbonColors[i];
    C = mix(C, vec3(1.0), sheen * uSheen * 0.5);

    pre = C * A + pre * (1.0 - A);
    outA = A + outA * (1.0 - A);
  }

  vec3 rgb = pre / max(outA, 0.0001);
  rgb = rgb * 1.06 - rgb * rgb * 0.11;

  vec2 p2 = vec2((vUv.x - 0.5) * uAspect, vUv.y - 0.5);
  float edge = smoothstep(0.45, 1.15, length(p2));
  rgb *= 1.0 - edge * 0.13;
  rgb += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;

  gl_FragColor = vec4(rgb, outA);
}
`,Kd=class extends Z{constructor(e={}){super({...Hd,...e})}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;this.ribbonParams=new Float32Array(24),this.ribbonShape=new Float32Array(18),this.ribbonColors=[];for(let e=0;e<Ud;e++)this.ribbonColors.push(new B);this.initRibbons();let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uRibbonCount:{value:this.options.ribbons},uWidth:{value:this.options.width},uCurl:{value:this.options.curl},uAngle:{value:this.options.angle},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uSheen:{value:this.options.sheen},uDepth:{value:this.options.depth},uFocus:{value:new F(this.options.focusX,this.options.focusY)},uRibbonParams:{value:this.ribbonParams},uRibbonShape:{value:this.ribbonShape},uRibbonColors:{value:this.ribbonColors}},vertexShader:Wd,fragmentShader:Gd,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}initRibbons(){for(let e=0;e<Ud;e++){let t=e*4;this.ribbonParams[t]=.6-e*.22,this.ribbonParams[t+1]=.35+Vd(e+50)*.35,this.ribbonParams[t+2]=1.1+Vd(e+100)*1.1,this.ribbonParams[t+3]=Vd(e+150)*Math.PI*2,this.ribbonShape[e*3]=.5+Vd(e+175)*.9,this.ribbonShape[e*3+1]=.7+Vd(e+185)*.6,this.ribbonShape[e*3+2]=Vd(e+195)}}buildPalette(){let e={h:0,s:0,l:0};this.accent.getHSL(e);let t=Array.isArray(this.options.colors)&&this.options.colors.length?this.options.colors:null;for(let n=0;n<Ud;n++){let r=null;if(t&&n<t.length&&(r=X(t[n])),!r){let t=n/Ud,i=P.clamp(e.l+(t-.5)*.28,0,1);r=new B().setHSL((e.h+t*.06)%1,P.clamp(e.s*(.85+Vd(n+200)*.3),0,1),i)}this.ribbonColors[n].copy(r)}}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.material.uniforms.uTime.value=t}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e,this.buildPalette();let n=X(this.options.backgroundColor);n?(t.uBackground.value.copy(n),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uRibbonCount.value=P.clamp(Math.round(this.options.ribbons),1,Ud),t.uWidth.value=P.clamp(this.options.width,.02,.42),t.uCurl.value=P.clamp(this.options.curl,0,2.5),t.uAngle.value=P.clamp(this.options.angle,-1,1),t.uSpeed.value=P.clamp(this.options.speed,.01,.4),t.uIntensity.value=P.clamp(this.options.intensity,.08,.8),t.uSheen.value=P.clamp(this.options.sheen,0,1.5),t.uDepth.value=P.clamp(this.options.depth,0,1),t.uFocus.value.set(P.clamp(this.options.focusX,-1,1),P.clamp(this.options.focusY,-1,1));let r=this.options.backgroundColor==null;this.material.transparent!==r&&(this.material.transparent=r,this.material.needsUpdate=!0)}}}));function Jd(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}function Yd(e){switch(e){case`triangle`:return new Gs(1,0);case`sphere`:return new Ws(.78,24,18);default:return new qa(1,1,1)}}var Xd,Zd,Qd,$d,ef=t((()=>{Y(),Q(),Xd={color:`#ffad82`,backgroundColor:null,shape:`square`,count:35,size:.8,spread:.6,depth:1.2,focusX:-.29,focusY:.09,tilt:0,speed:.5,glow:.5,mouseInfluence:.05},Zd=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Qd=`
uniform sampler2D uColorTex;
uniform sampler2D uDepthTex;
uniform float uNear;
uniform float uFar;
uniform float uFocus;
uniform vec2 uResolution;
uniform float uBlur;

varying vec2 vUv;

float unpackDepth(vec2 uv) {
#ifdef WEBGL2
  return texture2D(uDepthTex, uv).r;
#else
  vec4 packed = texture2D(uDepthTex, uv);
  return dot(packed, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));
#endif
}

float linearizeDepth(float z) {
  float zNdc = z * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - zNdc * (uFar - uNear));
}

float tapWeight(vec2 uv) {
  float d = linearizeDepth(unpackDepth(uv));
  float c = clamp(abs(d - uFocus) / max(uFocus, 0.001), 0.0, 1.0);
  float w = clamp(1.0 - c * c, 0.0, 1.0);
  return w * w;
}

void accumulate(vec2 uv, inout vec3 acc, inout float wsum) {
  vec2 tc = clamp(uv, 0.0, 1.0);
  float w = tapWeight(tc);
  acc += texture2D(uColorTex, tc).rgb * w;
  wsum += w;
}

void main() {
  vec4 orig = texture2D(uColorTex, vUv);
  float centerDepth = linearizeDepth(unpackDepth(vUv));
  float isBg = step(0.999, centerDepth);

  float coc = clamp(abs(centerDepth - uFocus) / max(uFocus, 0.001), 0.0, 1.0);
  float radius = clamp(uBlur * coc * 14.0, 0.0, 12.0);
  vec2 texel = vec2(1.0) / uResolution;

  vec3 acc = orig.rgb;
  float wsum = 1.0;

  if (radius > 0.25 && isBg < 0.5) {
    acc = vec3(0.0);
    wsum = 0.0;

    vec2 uv0 = vUv;
    vec2 uv1 = vUv + vec2(1.0, 0.0) * radius * 0.5 * texel;
    vec2 uv2 = vUv + vec2(-1.0, 0.0) * radius * 0.5 * texel;
    vec2 uv3 = vUv + vec2(0.0, 1.0) * radius * 0.5 * texel;
    vec2 uv4 = vUv + vec2(0.0, -1.0) * radius * 0.5 * texel;
    vec2 uv5 = vUv + vec2(0.7071, 0.7071) * radius * texel;
    vec2 uv6 = vUv + vec2(-0.7071, 0.7071) * radius * texel;
    vec2 uv7 = vUv + vec2(0.7071, -0.7071) * radius * texel;
    vec2 uv8 = vUv + vec2(-0.7071, -0.7071) * radius * texel;
    vec2 uv9 = vUv + vec2(1.0, 0.5) * radius * texel;
    vec2 uv10 = vUv + vec2(-1.0, 0.5) * radius * texel;
    vec2 uv11 = vUv + vec2(0.5, 1.0) * radius * texel;
    vec2 uv12 = vUv + vec2(-0.5, -1.0) * radius * texel;

    accumulate(uv0, acc, wsum);
    accumulate(uv1, acc, wsum);
    accumulate(uv2, acc, wsum);
    accumulate(uv3, acc, wsum);
    accumulate(uv4, acc, wsum);
    accumulate(uv5, acc, wsum);
    accumulate(uv6, acc, wsum);
    accumulate(uv7, acc, wsum);
    accumulate(uv8, acc, wsum);
    accumulate(uv9, acc, wsum);
    accumulate(uv10, acc, wsum);
    accumulate(uv11, acc, wsum);
    accumulate(uv12, acc, wsum);
  }

  vec3 blurred = acc / max(wsum, 0.0001);
  vec3 rgb = mix(orig.rgb, blurred, smoothstep(0.0, 0.25, radius));
  rgb = mix(rgb, orig.rgb, isBg);

  float a = clamp(wsum, 0.0, 1.0);
  a = max(a, orig.a);
  a = mix(a, orig.a, isBg);

  gl_FragColor = vec4(rgb, a);
}
`,$d=class extends Z{constructor(e={}){super({...Xd,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.frameCamera(),this.buildField(),this.buildDof()}buildDof(){if(!this.renderer)return;let e=this.renderer.getDrawingBufferSize(new F),t=Math.max(2,e.x),n=Math.max(2,e.y);this.disposeDof();let r=new Xr(t,n,{minFilter:or,magFilter:or,format:hr,depthBuffer:!0,depthTexture:new Ls(t,n,dr)});this.dofRT=r;let i=new G({uniforms:{uColorTex:{value:r.texture},uDepthTex:{value:r.depthTexture},uNear:{value:.1},uFar:{value:1e4},uFocus:{value:this.camDist?this.camDist*.5:0},uResolution:{value:new F(t,n)},uBlur:{value:this.depthAmount||0}},vertexShader:Zd,fragmentShader:Qd,depthWrite:!1,depthTest:!1});this.dofMaterial=i;let a=new co(2,2);this.dofGeometry=a;let o=new W(a,i);o.frustumCulled=!1;let s=new Bo;s.add(o),this.dofScene=s,this.dofCamera=new rl(-1,1,1,-1,.1,2),this.dofCamera.position.set(0,0,1),this.dofReady=!0}updateDofUniforms(){if(!this.dofMaterial)return;let e=this.dofMaterial.uniforms;e.uBlur.value=this.depthAmount||0,this.camDist&&(e.uFocus.value=this.camDist*.5)}disposeDof(){this.dofRT&&=(this.dofRT.dispose(),null),this.dofGeometry&&=(this.dofGeometry.dispose(),null),this.dofMaterial&&=(this.dofMaterial.dispose(),null),this.dofScene=null,this.dofCamera=null,this.dofReady=!1}render(){if(!this.dofReady){this.renderer.render(this.scene,this.camera);return}let e=X(this.options.backgroundColor);this.renderer.setRenderTarget(this.dofRT),e?this.renderer.setClearColor(e,1):this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!0);let t=this.material.depthWrite,n=this.material.depthTest;this.material.depthWrite=!0,this.material.depthTest=!0,this.renderer.render(this.scene,this.camera),this.material.depthWrite=t,this.material.depthTest=n,this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.renderer.render(this.dofScene,this.dofCamera)}destroy(){this.disposeDof(),super.destroy()}frameCamera(){let e=this.camera.fov*Math.PI/180;this.halfH=this.height/2*1.06,this.camDist=this.halfH/Math.tan(e/2),this.camera.position.set(0,0,this.camDist),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}disposeGroup(){this.mesh&&=(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),null),this.material=null}buildField(){if(this.disposeGroup(),!this.width||!this.height)return;let e=X(this.options.color);e&&(this.accent=e);let t=P.clamp(Math.round(this.options.count),6,52),n=P.clamp(this.options.spread,.2,2.4),r=P.clamp(this.options.depth,.2,1.6),i=(r-.2)/1.4;this.depthAmount=i,this.currentCount=t,this.lastSpread=n,this.lastDepth=r,this.currentShape=this.options.shape||`square`;let a=this.halfH*2,o=a*(this.width/this.height)*1.25*n,s=a*1.25*n,c=this.camDist*.5,l=this.camDist*(.012+.308*i),u=this.halfH*.16;this.basePos=new Float32Array(t*3),this.baseScale=new Float32Array(t*3),this.rotSeed=new Float32Array(t*3),this.rotSpeed=new Float32Array(t*2),this.bobPhase=new Float32Array(t),this.bobFreq=new Float32Array(t),this.bobAmp=new Float32Array(t),this.brightness=new Float32Array(t),this.hueShift=new Float32Array(t),this.satMul=new Float32Array(t),this.lightMul=new Float32Array(t);let d=this.currentShape===`sphere`;for(let e=0;e<t;e++){let t=(Jd(e+100)-.5)*o,n=(Jd(e+200)-.5)*s,r=c+(Jd(e+300)-.5)*2*l;if(this.basePos[e*3]=t,this.basePos[e*3+1]=n,this.basePos[e*3+2]=r,d){let t=(.55+Jd(e+400)*1)*u;this.baseScale[e*3]=t,this.baseScale[e*3+1]=t,this.baseScale[e*3+2]=t}else this.baseScale[e*3]=(.55+Jd(e+400)*.95)*u,this.baseScale[e*3+1]=(.5+Jd(e+500)*1.05)*u,this.baseScale[e*3+2]=(.55+Jd(e+600)*.9)*u;this.rotSeed[e*3]=(Jd(e+550)-.5)*Math.PI*2,this.rotSeed[e*3+1]=(Jd(e+575)-.5)*Math.PI*2,this.rotSeed[e*3+2]=(Jd(e+650)-.5)*Math.PI*2,this.rotSpeed[e*2]=(Jd(e+625)-.5)*.4,this.rotSpeed[e*2+1]=(Jd(e+675)-.5)*.3,this.bobPhase[e]=Jd(e+700)*Math.PI*2,this.bobFreq[e]=.4+Jd(e+725)*.8,this.bobAmp[e]=(.35+Jd(e+750)*.65)*this.halfH*.05,this.brightness[e]=.55+Jd(e+775)*.6,this.hueShift[e]=(Jd(e+800)-.5)*.08,this.satMul[e]=.6+Jd(e+825)*.7,this.lightMul[e]=.55+Jd(e+850)*.9}let f=Yd(this.currentShape),p=new Xs({color:new B(16777215),emissive:new B(0),specular:new B(2236962),shininess:28,transparent:this.options.backgroundColor==null,depthWrite:this.options.backgroundColor!=null}),m=new gs(f,p,t);m.instanceMatrix.setUsage(zr),m.frustumCulled=!1,this.material=p,this.mesh=m,this.setupLights(),this.scene.add(m),this.applyInstanceColors(),this.updateTransform(0),this.updateOptions()}setupLights(){this.lights&&(this.scene.remove(this.ambient),this.scene.remove(this.fillLight),this.scene.remove(this.keyLight)),this.ambient=new ol(16777215,.55),this.fillLight=new al(10204120,.5),this.fillLight.position.set(-1,1,.5),this.keyLight=new al(16777215,.7),this.keyLight.position.set(1,-.6,.8),this.scene.add(this.ambient),this.scene.add(this.fillLight),this.scene.add(this.keyLight),this.lights=!0}applyInstanceColors(){if(!this.mesh)return;let e=this.currentCount,t={h:0,s:0,l:0};this.accent.getHSL(t);let n=1/0,r=-1/0;for(let t=0;t<e;t++){let e=this.basePos[t*3+2];e<n&&(n=e),e>r&&(r=e)}let i=Math.max(.001,r-n),a=new B;for(let r=0;r<e;r++){let e=this.basePos[r*3+2],o=P.clamp((e-n)/i,0,1),s=(t.h+this.hueShift[r]+1)%1,c=P.clamp(t.s*this.satMul[r],0,1),l=P.clamp(t.l*this.lightMul[r],0,1);a.setHSL(s,c,l),a.multiplyScalar(this.brightness[r]*(.75+.35*o)),this.mesh.setColorAt(r,a)}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}updateTransform(e){if(!this.mesh)return;this.dummy||=new z;let t=this.currentCount,n=P.clamp(this.options.size,.2,1.3),r=P.clamp(this.options.tilt,0,1),i=P.clamp(this.options.speed,0,1.5),a=P.clamp(this.options.depth,.2,1.6),o=.25+r*.85,s=e*i,c=.25+.75*Math.min(1,a),l=this.halfH*1.6,u=P.clamp(this.options.focusX,-1,1)*l,d=P.clamp(this.options.focusY,-1,1)*l;for(let e=0;e<t;e++){let t=this.basePos[e*3]+u,r=this.basePos[e*3+1]+Math.sin(s*this.bobFreq[e]+this.bobPhase[e])*this.bobAmp[e]*c+d,i=this.basePos[e*3+2];this.dummy.position.set(t,r,i),this.dummy.rotation.set(this.rotSeed[e*3]*o+s*this.rotSpeed[e*2],this.rotSeed[e*3+1]*o+s*this.rotSpeed[e*2+1],this.rotSeed[e*3+2]*o),this.dummy.scale.set(this.baseScale[e*3]*n,this.baseScale[e*3+1]*n,this.baseScale[e*3+2]*n),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}onFrame(e,t){if(this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1),this.camDist){let t=P.clamp(this.options.mouseInfluence,0,.12),n=this.camDist*.55*t*this.pointer.x,r=this.camDist*.55*t*this.pointer.y;this.camera.position.x+=(n-this.camera.position.x)*Math.min(e*2,1),this.camera.position.y+=(r-this.camera.position.y)*Math.min(e*2,1),this.camera.lookAt(0,0,0)}this.updateTransform(t)}updateOptions(){let e=X(this.options.color);if(!e)return;this.accent=e;let t=P.clamp(Math.round(this.options.count),6,52),n=P.clamp(this.options.spread,.2,2.4),r=P.clamp(this.options.depth,.2,1.6),i=this.options.shape||`square`;if((t!==this.currentCount||n!==this.lastSpread||r!==this.lastDepth||i!==this.currentShape)&&this.width&&this.height){this.buildField(),this.updateDofUniforms();return}if(this.updateDofUniforms(),!this.material)return;let a=P.clamp(this.options.glow,0,1.2);this.material.emissive.copy(e.clone().multiplyScalar(a*.32)),this.keyLight.color.copy(e),this.keyLight.intensity=.55+a*.6;let o=this.options.backgroundColor!=null;this.ambient.intensity=o?.55:.85,this.material.transparent=!o,this.material.depthWrite=o,this.material.blending=o?2:1,this.applyInstanceColors()}}}));function tf(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var nf,rf,af,of,sf,cf,lf,uf=t((()=>{Y(),Q(),nf={color:`#dcecff`,backgroundColor:null,count:120,size:3,angle:200,meteorTrail:!0,trailLength:60,trailDuration:.8,speed:1.5},rf=120,af=`
attribute float aSize;
attribute float aPhase;

uniform float uTime;
uniform float uSize;
uniform float uPixelRatio;
uniform vec3 uColor;

varying vec3 vColor;
varying float vBright;

void main() {
  vColor = uColor;
  float tw = 0.72 + 0.28 * sin(uTime * 2.6 + aPhase * 6.28318);
  vBright = tw;
  gl_PointSize = uSize * aSize * uPixelRatio * (0.72 + 0.5 * tw);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,of=`
varying vec3 vColor;
varying float vBright;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  float star = exp(-7.0 * d * d);
  float circle = 1.0 - smoothstep(0.72, 1.0, d);
  float alpha = star * circle * vBright;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor * (0.65 + star * 0.8), alpha);
}
`,sf=`
attribute float aFade;

uniform vec3 uColor;

varying vec3 vColor;
varying float vFade;

void main() {
  vColor = uColor;
  vFade = aFade;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cf=`
varying vec3 vColor;
varying float vFade;

void main() {
  float a = vFade;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor * (0.55 + 0.45 * vFade), a);
}
`,lf=class extends Z{constructor(e={}){super({...nf,...e})}onResize(e,t){this.frameCamera(),this.buildField(e,t)}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2*1.06;this.camDist=t/Math.tan(e/2),this.camera.position.set(0,0,this.camDist),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}buildField(e,t){this.disposeField();let n=P.clamp(Math.round(this.options.count),20,400);this.currentCount=n,this.maxSegs=rf,this.span=Math.max(e,t)*1.4;let r=this.span*.5,i=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(n);this.speeds=new Float32Array(n),this.across=new Float32Array(n),this.along=new Float32Array(n);let s=this.options.angle*Math.PI/180,c=Math.cos(s),l=Math.sin(s);for(let e=0;e<n;e++){let t=(tf(e+100)-.5)*this.span,n=(tf(e+200)-.5)*this.span;i[e*3]=t*c-n*l,i[e*3+1]=t*l+n*c,i[e*3+2]=0,a[e]=.55+tf(e+300)*.9,o[e]=tf(e+400),this.speeds[e]=.6+tf(e+500)*.8,this.across[e]=n,this.along[e]=t}this.half=r;let u=new U;u.setAttribute(`position`,new H(i,3)),u.setAttribute(`aSize`,new H(a,1)),u.setAttribute(`aPhase`,new H(o,1)),this.geometry=u;let d=new G({uniforms:{uTime:{value:0},uSize:{value:this.options.size},uPixelRatio:{value:this.renderer.getPixelRatio()},uColor:{value:X(this.options.color).clone()}},vertexShader:af,fragmentShader:of,transparent:!0,depthWrite:!1,blending:this.options.backgroundColor==null?1:2});this.material=d;let f=new Ns(u,d);f.frustumCulled=!1,this.scene.add(f),this.points=f,this.trailPos=new Float32Array(n*rf*3),this.trailTime=new Float32Array(n*rf);for(let e=0;e<n;e++){let t=e*rf*3,n=i[e*3],r=i[e*3+1];for(let e=0;e<rf;e++)this.trailPos[t+e*3]=n,this.trailPos[t+e*3+1]=r,this.trailPos[t+e*3+2]=0}let p=new Float32Array(n*238*3),m=new Float32Array(n*238),h=new U;h.setAttribute(`position`,new H(p,3)),h.setAttribute(`aFade`,new H(m,1)),this.trailGeom=h;let g=new G({uniforms:{uColor:{value:X(this.options.color).clone()}},vertexShader:sf,fragmentShader:cf,transparent:!0,depthWrite:!1,blending:this.options.backgroundColor==null?1:2});this.trailMat=g;let _=new Es(h,g);_.frustumCulled=!1,_.visible=this.options.meteorTrail===!0||this.options.meteorTrail===`on`,this.scene.add(_),this.trails=_,this.updateOptions()}disposeField(){this.points&&=(this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose(),null),this.trails&&=(this.scene.remove(this.trails),this.trails.geometry.dispose(),this.trails.material.dispose(),null),this.trailGeom&&=null,this.trailMat&&=null}updateTrails(e){if(!this.trailGeom)return;let t=this.trailGeom.attributes.position.array,n=this.trailGeom.attributes.aFade.array,r=this.maxSegs,i=Math.max(.1,this.options.trailDuration),a=this.trailLenSegs,o=this.trailPos,s=this.trailTime,c=(r-1)*2,l=this.currentCount;for(let u=0;u<l;u++){let l=u*r*3,d=u*r,f=u*c*3,p=u*c,m=o[l],h=o[l+1],g=o[l+2];for(let c=0;c<r-1;c++){let r=f+c*6,u=p+c*2;if(c<a&&e-s[d+c+1]<i){let f=o[l+c*3],p=o[l+c*3+1],m=o[l+c*3+2],h=o[l+(c+1)*3],g=o[l+(c+1)*3+1],_=o[l+(c+1)*3+2];t[r]=f,t[r+1]=p,t[r+2]=m,t[r+3]=h,t[r+4]=g,t[r+5]=_;let v=1-c/a;n[u]=Math.max(0,v*(1-(e-s[d+c])/i)),n[u+1]=Math.max(0,v*(1-(e-s[d+c+1])/i))}else t[r]=m,t[r+1]=h,t[r+2]=g,t[r+3]=m,t[r+4]=h,t[r+5]=g,n[u]=0,n[u+1]=0}}this.trailGeom.attributes.position.needsUpdate=!0,this.trailGeom.attributes.aFade.needsUpdate=!0}onFrame(e,t){if(!this.points)return;let n=this.angle*Math.PI/180,r=Math.cos(n),i=Math.sin(n),a=this.speed*160*e,o=this.half,s=this.geometry.attributes.position.array,c=this.maxSegs,l=this.trailPos,u=this.trailTime;for(let e=0;e<this.currentCount;e++){let n=this.along[e]+a*this.speeds[e],d=!1;n>o&&(n=-o,this.across[e]=(tf(e+700+Math.floor(t*10))-.5)*this.span,d=!0),this.along[e]=n;let f=this.across[e],p=n*r-f*i,m=n*i+f*r;s[e*3]=p,s[e*3+1]=m;let h=e*c*3,g=e*c;if(d)for(let e=0;e<c;e++)l[h+e*3]=p,l[h+e*3+1]=m,l[h+e*3+2]=0,u[g+e]=t;else{for(let e=c-1;e>=1;e--)l[h+e*3]=l[h+(e-1)*3],l[h+e*3+1]=l[h+(e-1)*3+1],l[h+e*3+2]=l[h+(e-1)*3+2],u[g+e]=u[g+e-1];l[h]=p,l[h+1]=m,l[h+2]=0,u[g]=t}}this.geometry.attributes.position.needsUpdate=!0,this.material.uniforms.uTime.value=t,this.trails&&this.trails.visible&&this.updateTrails(t)}updateOptions(){let e=X(this.options.color);if(!e)return;if(this.accent=e,P.clamp(Math.round(this.options.count),20,400)!==this.currentCount&&this.width&&this.height){this.buildField(this.width,this.height);return}this.angle=P.clamp(this.options.angle,0,360),this.speed=P.clamp(this.options.speed,.05,2),this.trailLenSegs=Math.max(2,Math.min(this.maxSegs-1,Math.round(this.options.trailLength||30))),this.trails&&(this.trails.visible=this.options.meteorTrail===!0||this.options.meteorTrail===`on`),this.material.uniforms.uSize.value=P.clamp(this.options.size,.5,12),this.material.uniforms.uColor.value.copy(e);let t=this.options.backgroundColor==null?1:2;this.material.blending!==t&&(this.material.blending=t),this.trailMat&&this.trailMat.blending!==t&&(this.trailMat.blending=t),this.trailMat&&this.trailMat.uniforms.uColor.value.copy(e)}}}));function df(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var ff,pf,mf,hf,gf,_f,vf=t((()=>{Y(),Q(),ff={color:`#bcd9ff`,backgroundColor:`#05050f`,mode:`warp`,count:260,speed:1,streak:1.6,depth:1,size:2,cycleSpeed:1,focusX:0,focusY:0,variety:.4,mouseInfluence:.08},pf=`
attribute float aSize;
attribute float aPhase;
attribute vec3 aColor;

uniform float uTime;
uniform float uSize;
uniform float uPixelRatio;
uniform float uDepthScale;
uniform float uFarZ;

varying vec3 vColor;
varying float vBright;
varying float vDim;

void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float z = max(-mv.z, 1.0);
  float tw = 0.7 + 0.3 * sin(uTime * 2.2 + aPhase * 6.28318);
  vBright = tw;
  vDim = clamp(1.0 - 0.8 * (z / uFarZ), 0.15, 1.0);
  gl_PointSize = min(uSize * aSize * uPixelRatio * (uDepthScale / z) * (0.7 + 0.5 * tw), 160.0 * uPixelRatio);
  gl_Position = projectionMatrix * mv;
}
`,mf=`
uniform float uBright;

varying vec3 vColor;
varying float vBright;
varying float vDim;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  float star = exp(-8.0 * d * d);
  float circle = 1.0 - smoothstep(0.75, 1.0, d);
  float alpha = star * circle * vBright * vDim;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor * uBright * vDim * (0.5 + star), alpha);
}
`,hf=`
attribute float aFade;

uniform vec3 uColor;
uniform float uFarZ;

varying vec3 vColor;
varying float vFade;
varying float vDim;

void main() {
  vColor = uColor;
  vFade = aFade;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDim = clamp(1.0 - 0.8 * (max(-mv.z, 1.0) / uFarZ), 0.1, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,gf=`
varying vec3 vColor;
varying float vFade;
varying float vDim;

void main() {
  float a = vFade * vDim;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor * (0.3 + 1.1 * vFade) * vDim, a);
}
`,_f=class extends Z{constructor(e={}){super({...ff,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.frameCamera(),this.buildField(e,t)}frameCamera(){this.camera.position.set(0,0,0),this.camera.lookAt(0,0,-1),this.camera.updateProjectionMatrix(),this.tanHalf=Math.tan(P.degToRad(this.camera.fov)/2)}buildField(e,t){this.disposeField();let n=P.clamp(Math.round(this.options.count),120,600);this.currentCount=n;let r=e/t,i=P.clamp(this.options.depth,.3,1.6),a=60+45*i;this.aspect=r,this.farZ=a,this.nearZ=6,this.farRadius=a*this.tanHalf*Math.sqrt(1+r*r)*.9,this.sx=new Float32Array(n),this.sy=new Float32Array(n),this.sz=new Float32Array(n),this.speedF=new Float32Array(n),this.bright=new Float32Array(n);let o=new Float32Array(n),s=new Float32Array(n);for(let e=0;e<n;e++){this.sz[e]=-(a*(.45+df(e+100)*.55));let t=Math.sqrt(df(e+150))*this.farRadius,n=df(e+180)*Math.PI*2,r=-this.sz[e]/a;this.sx[e]=Math.cos(n)*t*r,this.sy[e]=Math.sin(n)*t*r,this.speedF[e]=(.4+df(e+300)*.9)*(.55+.75*i),this.bright[e]=.55+df(e+400)*.6,o[e]=.6+df(e+500)*.8,s[e]=df(e+600)}let c=new U;c.setAttribute(`position`,new H(new Float32Array(n*3),3)),c.setAttribute(`aSize`,new H(o,1)),c.setAttribute(`aPhase`,new H(s,1)),c.setAttribute(`aColor`,new H(new Float32Array(n*3),3)),this.geometry=c;let l=new G({uniforms:{uTime:{value:0},uSize:{value:this.options.size},uPixelRatio:{value:this.renderer.getPixelRatio()},uDepthScale:{value:3*a},uFarZ:{value:a},uBright:{value:1}},vertexShader:pf,fragmentShader:mf,transparent:!0,depthWrite:!1,blending:this.options.backgroundColor==null?1:2});this.material=l;let u=new Ns(c,l);u.frustumCulled=!1,this.scene.add(u),this.points=u;let d=new U;d.setAttribute(`position`,new H(new Float32Array(n*6),3)),d.setAttribute(`aFade`,new H(new Float32Array(n*2),1)),this.trailGeom=d;let f=new G({uniforms:{uColor:{value:X(this.options.color).clone()},uFarZ:{value:a}},vertexShader:hf,fragmentShader:gf,transparent:!0,depthWrite:!1,blending:this.options.backgroundColor==null?1:2});this.trailMat=f;let p=new Es(d,f);p.frustumCulled=!1,this.scene.add(p),this.lines=p,this.updateOptions()}disposeField(){this.points&&=(this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose(),null),this.lines&&=(this.scene.remove(this.lines),this.lines.geometry.dispose(),this.lines.material.dispose(),null),this.geometry=null,this.material=null,this.trailGeom=null,this.trailMat=null}applyHeadColors(){if(!this.geometry)return;let e=this.accent||X(this.options.color),t=P.clamp(this.options.variety,0,1),n=this.geometry.attributes.aColor.array,r=new B,i={h:0,s:0,l:0},a=this.currentCount;for(let o=0;o<a;o++){if(r.copy(e),t>.01){e.getHSL(i);let n=(df(o+900)-.5)*2*t*.12;r.setHSL((i.h+n+1)%1,Math.min(1,i.s*(.7+df(o+901)*.6)),Math.min(1,i.l*(.7+df(o+902)*.6)))}r.multiplyScalar(this.bright[o]),n[o*3]=r.r,n[o*3+1]=r.g,n[o*3+2]=r.b}this.geometry.attributes.aColor.needsUpdate=!0}warpAt(e){let t=(e*Math.max(.25,this.options.cycleSpeed)*.16%1+1)%1;if(t<.45)return 0;if(t<.7){let e=(t-.45)/.25;return e*e*(3-2*e)}if(t<.82)return 1;let n=(t-.82)/.18;return Math.max(0,1-n*n*(3-2*n))}isOffScreen(e,t,n){if(n>-this.nearZ)return!0;let r=-n*this.tanHalf,i=e/(r*this.aspect),a=t/r,o=(i*.5+.5)*this.width,s=(.5-a*.5)*this.height;return o<-80||o>this.width+80||s<-80||s>this.height+80}respawn(e,t){this.sz[e]=-this.farZ;let n=Math.sqrt(df(e+2e3+t))*this.farRadius,r=df(e+2100+t)*Math.PI*2;this.sx[e]=Math.cos(r)*n,this.sy[e]=Math.sin(r)*n}onFrame(e,t){if(!this.points)return;let n=this.options;this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*1.5,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*1.5,1);let r=n.mode===`constant`?1:this.warpAt(t),i=1+r*4,a=1+r*.7,o=this.farZ*i*e/5.5*P.clamp(n.speed,.2,3),s=P.clamp(n.streak,0,4)*6*(.4+.6*r),c=P.clamp(n.mouseInfluence,0,.2),l=n.focusX*this.farRadius*.8+this.pointer.x*this.farRadius*c*2,u=n.focusY*this.farRadius*.8+this.pointer.y*this.farRadius*c*2,d=this.geometry.attributes.position.array,f=this.trailGeom.attributes.position.array,p=this.trailGeom.attributes.aFade.array,m=this.currentCount,h=Math.floor(t*10);for(let e=0;e<m;e++){let t=this.sz[e]+this.speedF[e]*o;this.isOffScreen(this.sx[e],this.sy[e],t)&&(this.respawn(e,h),t=this.sz[e]),this.sz[e]=t;let n=this.sx[e]+l,r=this.sy[e]+u,i=t-s*this.speedF[e];d[e*3]=n,d[e*3+1]=r,d[e*3+2]=t;let a=e*6;f[a]=n,f[a+1]=r,f[a+2]=i,f[a+3]=n,f[a+4]=r,f[a+5]=t;let c=e*2;p[c]=.08,p[c+1]=1}this.geometry.attributes.position.needsUpdate=!0,this.trailGeom.attributes.position.needsUpdate=!0,this.trailGeom.attributes.aFade.needsUpdate=!0,this.material.uniforms.uTime.value=t,this.material.uniforms.uBright.value=a}updateOptions(){let e=X(this.options.color);if(!e)return;if(this.accent=e,P.clamp(Math.round(this.options.count),120,600)!==this.currentCount&&this.width&&this.height){this.buildField(this.width,this.height);return}if(!this.material)return;this.material.uniforms.uSize.value=P.clamp(this.options.size,.5,8),this.applyHeadColors(),this.trailMat&&this.trailMat.uniforms.uColor.value.copy(e);let t=this.options.backgroundColor==null?1:2;this.material.blending!==t&&(this.material.blending=t),this.trailMat&&this.trailMat.blending!==t&&(this.trailMat.blending=t)}}})),yf,bf,xf,Sf,Cf,wf,Tf=t((()=>{Y(),Q(),yf={color:`#8fd3ff`,backgroundColor:null,style:`glow`,size:30,length:200,intensity:1,fadeTime:1.5},bf=900,xf={glow:0,smoke:1,flame:2},Sf=`
attribute float aAge;
attribute float aSeed;
attribute float aSizeMul;

uniform float uSize;
uniform float uPixelRatio;
uniform float uStyle;

varying float vAge;
varying float vSeed;

void main() {
  vAge = aAge;
  vSeed = aSeed;

  vec3 pos = position;
  float ps = uSize * aSizeMul;

  if (uStyle < 0.5) {
    ps *= 1.0;
  } else if (uStyle < 1.5) {
    ps *= 0.4 + 1.6 * aAge;
  } else {
    ps *= 0.5 + 0.8 * (1.0 - aAge);
  }

  gl_PointSize = ps * uPixelRatio * (0.7 + 0.5 * aSeed);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,Cf=`
uniform vec3 uColor;
uniform float uIntensity;
uniform float uStyle;

varying float vAge;
varying float vSeed;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  if (d > 1.0) discard;

  float fade = 1.0 - vAge;
  vec3 col = uColor;
  float alpha = 0.0;

  if (uStyle < 0.5) {
    alpha = exp(-2.35 * d * d) * fade * uIntensity;
  } else if (uStyle < 1.5) {
    float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + vSeed * 61.0) * 43758.5453123);
    float edge = exp(-(3.0 + 3.0 * vAge) * d * d);
    alpha = edge * (0.6 + 0.4 * n) * fade * uIntensity * 0.85;
  } else {
    float core = exp(-8.0 * d * d);
    float body = exp(-3.2 * d * d);
    col = mix(vec3(1.0, 0.85, 0.55), uColor, body * 0.8);
    alpha = (core * 0.95 + body * 0.55) * fade * uIntensity;
  }

  gl_FragColor = vec4(col, alpha);
}
`,wf=class extends Z{constructor(e={}){super({...yf,...e}),this.prevPointer={x:0,y:0},this.pathDistance=0,this.distanceRemainder=0,this.pointerSeen=!1}onResize(e,t){this.frameCamera(),this.buildField(),this.pointerSeen=!1,this.distanceRemainder=0}frameCamera(){let e=this.camera.fov*Math.PI/180,t=this.height/2*1.06;this.camDist=t/Math.tan(e/2),this.camera.position.set(0,0,this.camDist),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}buildField(){this.points&&(this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()),this.positions=new Float32Array(bf*3),this.ages=new Float32Array(bf).fill(1),this.seeds=new Float32Array(bf),this.sizeMuls=new Float32Array(bf),this.birthDistances=new Float32Array(bf),this.birthTimes=new Float32Array(bf),this.spawnIndex=0;let e=new U;e.setAttribute(`position`,new H(this.positions,3)),e.setAttribute(`aAge`,new H(this.ages,1)),e.setAttribute(`aSeed`,new H(this.seeds,1)),e.setAttribute(`aSizeMul`,new H(this.sizeMuls,1)),e.setDrawRange(0,bf),this.geometry=e;let t=new G({uniforms:{uTime:{value:0},uSize:{value:this.options.size},uPixelRatio:{value:this.renderer.getPixelRatio()},uStyle:{value:xf[this.options.style]||0},uColor:{value:X(this.options.color).clone()},uIntensity:{value:this.options.intensity}},vertexShader:Sf,fragmentShader:Cf,transparent:!0,depthWrite:!1,blending:this.options.backgroundColor==null?1:2});this.material=t;let n=new Ns(e,t);n.frustumCulled=!1,this.scene.add(n),this.points=n,this.updateOptions()}emitParticle(e,t,n){let r=this.spawnIndex;this.spawnIndex=(this.spawnIndex+1)%bf,this.positions[r*3]=e+(Math.random()-.5)*2,this.positions[r*3+1]=t+(Math.random()-.5)*2,this.positions[r*3+2]=0,this.ages[r]=0,this.seeds[r]=Math.random(),this.sizeMuls[r]=.6+Math.random()*.8,this.birthDistances[r]=n,this.birthTimes[r]=this.now}onFrame(e,t){if(!this.points)return;this.now=t;let n=this.mouse;if(n.active&&n.x>=0&&n.x<=1&&n.y>=0&&n.y<=1){let e={x:(n.x-.5)*this.width,y:(.5-n.y)*this.height};if(!this.pointerSeen)this.pointerSeen=!0,this.prevPointer=e,this.emitParticle(e.x,e.y,this.pathDistance);else{let t=e.x-this.prevPointer.x,n=e.y-this.prevPointer.y,r=Math.sqrt(t*t+n*n);if(r>0){let i=this.pathDistance,a=4-this.distanceRemainder;this.pathDistance+=r;for(let e=a;e<=r;e+=4){let a=e/r;this.emitParticle(this.prevPointer.x+t*a,this.prevPointer.y+n*a,i+e)}this.distanceRemainder=(this.distanceRemainder+r)%4,this.prevPointer=e}}}else this.pointerSeen=!1;let r=this.positions,i=this.ages,a=this.style===`smoke`||this.style===`flame`,o=this.style===`flame`?30:16;for(let t=0;t<bf;t++){if(i[t]>=1)continue;let n=(this.pathDistance-this.birthDistances[t])/this.length,s=(this.now-this.birthTimes[t])/this.fadeTime;if(i[t]=Math.min(Math.max(n,s),1),a){let n=this.seeds[t];r[t*3+1]+=o*(.5+n)*e*(1-i[t]*.5),this.style===`smoke`&&(r[t*3]+=Math.sin(i[t]*8+n*6.28)*4*e)}}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aAge.needsUpdate=!0,this.geometry.attributes.aSeed.needsUpdate=!0,this.geometry.attributes.aSizeMul.needsUpdate=!0,this.material.uniforms.uTime.value=t}updateOptions(){let e=X(this.options.color);if(!e)return;this.accent=e,this.style=xf[this.options.style]===void 0?`glow`:this.options.style,this.length=P.clamp(this.options.length,40,420),this.fadeTime=P.clamp(this.options.fadeTime,.2,6);let t=this.material.uniforms;t.uStyle.value=xf[this.style],t.uSize.value=P.clamp(this.options.size,12,120),t.uIntensity.value=P.clamp(this.options.intensity,.1,1.5),t.uColor.value.copy(e);let n=this.options.backgroundColor==null?1:2;this.material.blending!==n&&(this.material.blending=n)}}})),Ef,Df,Of,kf,Af=t((()=>{Y(),Q(),Ef={color:`#9f7cff`,backgroundColor:null,density:.55,scale:1.1,turbulence:.7,speed:.12,intensity:.75,mouseControls:!1,touchControls:!1},Df=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Of=`
uniform float uTime;
uniform float uAspect;
uniform vec3 uBackground;
uniform float uHasBackground;
uniform float uDensity;
uniform float uScale;
uniform float uTurbulence;
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uGasColor;
uniform vec3 uFilColor;
uniform vec3 uGlowColor;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  v += 0.50 * valueNoise(p);
  v += 0.28 * valueNoise(p * 2.03 + vec2(7.4, -3.9));
  v += 0.16 * valueNoise(p * 4.05 + vec2(-21.3, 13.7));
  v += 0.06 * valueNoise(p * 8.1 + vec2(53.8, -27.1));
  return v;
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;

  float t = uTime * uSpeed;
  float s = uScale;
  float turb = uTurbulence;

  vec2 q = vec2(
    fbm(p * 1.1 * s + vec2(7.2, -3.1) + t * vec2(0.10, -0.07)),
    fbm(p * 1.1 * s + vec2(-5.3, 9.7) - t * vec2(0.08, 0.09))
  );
  vec2 r = vec2(
    fbm(p * 1.1 * s + 2.1 * turb * q + vec2(0.0, 0.0) + t * vec2(0.13, 0.05)),
    fbm(p * 1.1 * s + 2.1 * turb * q + vec2(31.5, -17.2) - t * vec2(0.10, 0.12))
  );
  float f = fbm(p * 1.15 * s + 1.9 * turb * r + vec2(-73.9, 58.6));

  float density = uDensity;
  float base = 0.52 - 0.34 * density;
  float gasA = smoothstep(base, base + 0.34, f) * uIntensity;
  float filA = smoothstep(base + 0.18, base + 0.42, f) * uIntensity * 0.8;
  float glowA = pow(smoothstep(base + 0.34, base + 0.5, f), 2.0) * uIntensity;
  float streak = pow(clamp(f - base - 0.12, 0.0, 1.0), 1.6);

  vec3 pre = uBackground * uHasBackground;
  float outA = uHasBackground;

  vec3 gasC = mix(uGasColor, uFilColor, 0.5);
  pre = gasC * gasA + pre * (1.0 - gasA);
  outA = gasA + outA * (1.0 - gasA);

  pre = uFilColor * (filA * 0.7 + streak * 0.5) + pre * (1.0 - filA);
  outA = filA + outA * (1.0 - filA);

  pre = uGlowColor * glowA + pre * (1.0 - glowA);
  outA = glowA + outA * (1.0 - glowA);

  vec2 cell = vUv * 620.0;
  vec2 ci = floor(cell);
  float star = step(0.9995, hash(ci));
  float starA = star * (0.3 + 0.3 * sin(uTime * 2.0 + hash(ci) * 40.0));
  vec3 starC = vec3(0.9);
  pre = starC * starA + pre * (1.0 - starA);
  outA = starA + outA * (1.0 - starA);

  vec3 rgb = pre / max(outA, 0.0001);
  rgb = rgb * 1.05 - rgb * rgb * 0.08;
  rgb += (hash(vUv * 1200.0) - 0.5) / 255.0;

  float alpha = mix(outA, 1.0, uHasBackground);
  gl_FragColor = vec4(rgb, alpha);
}
`,kf=class extends Z{constructor(e={}){super({...Ef,...e})}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0},uDensity:{value:this.options.density},uScale:{value:this.options.scale},uTurbulence:{value:this.options.turbulence},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uGasColor:{value:new B},uFilColor:{value:new B},uGlowColor:{value:new B}},vertexShader:Df,fragmentShader:Of,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){this.material.uniforms.uTime.value=t}updateOptions(){let e=X(this.options.color);if(!e)return;let t=this.material.uniforms;this.accent=e;let n={h:0,s:0,l:0};e.getHSL(n);let r=new B().setHSL(n.h,P.clamp(n.s*.55,0,1),P.clamp(n.l*.35,0,1)),i=e,a=new B().setHSL(n.h,P.clamp(n.s*.3,0,1),Math.min(1,n.l+(1-n.l)*.6));t.uGasColor.value.copy(r),t.uFilColor.value.copy(i),t.uGlowColor.value.copy(a);let o=X(this.options.backgroundColor);o?(t.uBackground.value.copy(o),t.uHasBackground.value=1):(t.uBackground.value.set(0,0,0),t.uHasBackground.value=0),t.uDensity.value=P.clamp(this.options.density,.15,.9),t.uScale.value=P.clamp(this.options.scale,.4,3),t.uTurbulence.value=P.clamp(this.options.turbulence,0,1.5),t.uSpeed.value=P.clamp(this.options.speed,.01,.4),t.uIntensity.value=P.clamp(this.options.intensity,.08,1);let s=this.options.backgroundColor==null;this.material.transparent!==s&&(this.material.transparent=s,this.material.needsUpdate=!0)}}}));function jf(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}function Mf(e,t,n){let r=P.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function Nf(){if(Vf)return Vf;let e=zf,t=new Uint8Array(e*e*4),n=Bf.map(([e])=>{let t=new Float32Array(e*e);for(let n=0;n<t.length;n++)t[n]=jf(n*7919+e*131);return t});for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=0;for(let t=0;t<Bf.length;t++){let o=Bf[t][0],s=Bf[t][1],c=n[t],l=i/e*o,u=r/e*o,d=Math.floor(l),f=Math.floor(u),p=l-d,m=u-f;p=p*p*(3-2*p),m=m*m*(3-2*m);let h=d%o,g=(d+1)%o,_=f%o*o,v=(f+1)%o*o,y=c[_+h],b=c[_+g],x=c[v+h],S=c[v+g];a+=s*(y+(b-y)*p+(x-y)*m+(y-b-x+S)*p*m)}let o=(r*e+i)*4,s=Math.max(0,Math.min(255,Math.round(a*255)));t[o]=s,t[o+1]=s,t[o+2]=s,t[o+3]=255}return Vf=t,t}var Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf=t((()=>{Y(),Q(),Pf={color:`#ff9b5c`,backgroundColor:null,blackHoleSize:.16,diskRadius:.42,diskThickness:.16,tilt:.42,spin:.6,lensing:1,doppler:.7,brightness:1,glow:1,stars:.6,fadeIn:1.4,quality:`medium`,resolution:.7,maxFps:30,mouseInfluence:.05,mouseControls:!0,touchControls:!0},Ff=2.598076211,If=.828427125,Lf={low:{steps:80,coarse:.14,fine:.55},medium:{steps:132,coarse:.085,fine:.36},high:{steps:210,coarse:.055,fine:.24}},Rf=26e5,zf=512,Bf=[[8,.5],[16,.27],[32,.15],[64,.08]],Vf=null,Hf=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Uf=`
uniform sampler2D uNoise;
uniform float uTime;
uniform float uAspect;
uniform vec3  uCamPos;
uniform mat3  uCamBasis;
uniform float uLens;
uniform float uDiskIn;
uniform float uDiskOut;
uniform float uDiskH;
uniform float uEscape;
uniform float uCoarse;
uniform float uFine;
uniform float uNoiseA;
uniform float uNoiseB;
uniform float uSpin;
uniform float uDoppler;
uniform float uBright;
uniform float uGlow;
uniform float uStars;
uniform float uSize;
uniform float uFade;
uniform vec3  uHot;
uniform vec3  uMid;
uniform vec3  uCool;
uniform vec3  uBackground;
uniform float uHasBackground;

varying vec2 vUv;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float hash31(vec3 p) {
  p = fract(p * 0.1031 + vec3(0.11, 0.17, 0.13));
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

// Sparse stars from 3D cell hashing: no seams, no pole pinching.
float starLayer(vec3 d, float scale, float thr, float sharp) {
  vec3 g = d * scale;
  vec3 id = floor(g);
  float h = hash31(id);
  if (h < thr) return 0.0;
  vec3 c = vec3(hash31(id + 1.37), hash31(id + 4.71), hash31(id + 9.13));
  float dd = length((g - id) - c);
  return smoothstep(sharp, 0.0, dd) * (h - thr) / max(1.0 - thr, 0.0001);
}

vec3 starSky(vec3 d) {
  float s = starLayer(d, 16.0, 0.84, 0.20) +
            starLayer(d, 44.0, 0.90, 0.14) * 0.55 +
            starLayer(d, 96.0, 0.93, 0.10) * 0.30;

  float t = dot(d, normalize(vec3(0.24, 0.94, -0.24))) * 2.3;
  float milk = exp(-t * t) * (0.35 + 0.65 * texture2D(uNoise, vec2(d.x, d.z) * 0.22).r);

  vec3 col = vec3(0.86, 0.90, 1.00) * s * 2.2;
  col += mix(vec3(0.16, 0.20, 0.34), vec3(0.34, 0.28, 0.40), 0.5) * milk * 0.18;
  return col * uStars;
}

// Emission (rgb) and density (a) of the accretion disk. Takes the sample point in the
// hole's frame, its cylindrical radius, and the photon's propagation direction.
vec4 diskSample(vec3 p, float r, vec3 flow) {
  float t01 = (r - uDiskIn) / max(uDiskOut - uDiskIn, 0.001);

  // Soft fades at both rims rather than hard cut edges.
  float radial = smoothstep(0.0, 0.20, t01) * (1.0 - smoothstep(0.58, 1.0, t01));
  if (radial <= 0.001) return vec4(0.0);

  // Flared scale height: a thin bright sheet inside a dimmer puffed envelope.
  float yh = p.y / max(uDiskH * (0.42 + 1.10 * t01), 0.001);
  float dens = radial * (exp(-yh * yh * 5.5) + exp(-yh * yh * 0.9) * 0.32);
  if (dens <= 0.0008) return vec4(0.0);

  // Keplerian shear. Rotating (x, z) by the orbital phase is equivalent to sampling at
  // an advected azimuth but skips atan entirely, and staying in Cartesian keeps the
  // texture lookup seamless where the azimuth wraps. Two rates shear out filaments.
  float ratio = uDiskIn / max(r, 0.001);
  float th = uTime * uSpin * 1.5 * ratio * sqrt(ratio);
  float c1 = cos(th);
  float s1 = sin(th);
  vec2 q1 = vec2(c1 * p.x - s1 * p.z, s1 * p.x + c1 * p.z);
  float c2 = cos(th * 1.55);
  float s2 = sin(th * 1.55);
  vec2 q2 = vec2(c2 * p.x - s2 * p.z, s2 * p.x + c2 * p.z);

  float n = 0.62 * texture2D(uNoise, q1 * uNoiseA).r +
            0.38 * texture2D(uNoise, q2 * uNoiseB + 0.37).r;
  // Contrast the noise into filaments and let it drive brightness as well as opacity.
  // The disk goes optically thick, so modulating density alone averages the structure
  // straight back out again.
  float fil = n * n;
  dens *= 0.14 + 1.9 * fil;

  // Temperature climbs toward the inner edge.
  float k = clamp(1.0 - t01, 0.0, 1.0);
  float temp = k * sqrt(k);
  vec3 emit = mix(uCool, uMid, smoothstep(0.0, 0.5, temp));
  emit = mix(emit, uHot, smoothstep(0.5, 1.0, temp));

  // Gravitational redshift dims gas near the horizon.
  emit *= mix(1.0, sqrt(max(1.0 - 1.0 / max(r, 1.0001), 0.0)), 0.55);

  // Relativistic beaming. The orbital velocity is (z, 0, -x)/r, already unit length, and
  // the photon reaches us along -flow, so both come for free.
  vec3 vel = vec3(p.z, 0.0, -p.x) / max(r, 0.001);
  float beta = sqrt(0.5 / max(r, 1.0001));
  float dop = 1.0 / max(1.0 + beta * dot(vel, normalize(flow)), 0.12);
  emit *= mix(1.0, dop * dop * dop, uDoppler);
  emit = mix(emit, uHot, clamp((dop - 1.0) * uDoppler * 0.9, 0.0, 0.65));

  // Tuned against the tone curve below: the receding limb sits mid-grey, the approaching
  // limb just clips to white, and the outer rim falls away. Too high and the disk flattens
  // into a white blob, too low and it goes muddy brown.
  emit *= (0.5 + 1.25 * fil) * (0.35 + 1.05 * temp);
  return vec4(emit * uBright, dens);
}

void main() {
  vec2 sp = vUv - 0.5;
  sp.x *= uAspect;

  vec3 dir = normalize(uCamBasis * vec3(sp.x * ZOOM, sp.y * ZOOM, -1.0));
  vec3 pos = uCamPos;

  // Conserved specific angular momentum, squared. Drives the deflection term.
  vec3 hv = cross(pos, dir);
  float h2 = dot(hv, hv);

  // Per-pixel step jitter turns the coarse slab sampling into fine noise instead of
  // visible stepping rings.
  float jitter = 0.85 + 0.3 * hash21(vUv * 313.7);
  float slab = uDiskH * 2.1;
  float fine = max(uDiskH * uFine, 0.02);

  vec3 col = vec3(0.0);
  float acc = 0.0;
  float captured = 0.0;
  float rmin = 1000000.0;

  for (int i = 0; i < STEPS; i++) {
    float r = length(pos);
    rmin = min(rmin, r);

    if (r < 1.0) { captured = 1.0; break; }
    if (r > uEscape && dot(pos, dir) > 0.0) break;
    if (acc > 0.996) break;

    // Coarse outside, refined inside the disk slab. Tying the fine step to the scale
    // height instead of to r keeps the sampling density constant at any disk size.
    float near = step(abs(pos.y), slab) * step(r, uDiskOut * 1.12);
    float dt = mix(clamp(uCoarse * r, 0.04, 1.6), fine, near) * jitter;

    // Schwarzschild null geodesic in Cartesian form.
    dir += (-1.5 * uLens * h2 / (r * r * r * r * r)) * pos * dt;
    pos += dir * dt;

    float rr = length(pos.xz);
    if (rr > uDiskIn && rr < uDiskOut) {
      vec4 s = diskSample(pos, rr, dir);
      if (s.w > 0.0) {
        // Front-to-back emission/absorption, so the near side of the wrap occludes.
        float da = clamp(s.w * dt * 1.8, 0.0, 1.0);
        col += (1.0 - acc) * s.rgb * da;
        acc += (1.0 - acc) * da;
      }
    }
  }

  if (captured < 0.5) {
    // Escaped rays land on the sky, already lensed into the Einstein ring.
    if (acc < 0.99) col += (1.0 - acc) * starSky(normalize(dir));

    // Rays skimming the photon sphere pile up into a thin bright rim.
    float d = (rmin - 1.5) / 0.30;
    col += uHot * exp(-d * d) * uGlow * 0.75;

    // Screen-space bloom that fades outward from the horizon.
    float halo = exp(-max(length(sp) - uSize, 0.0) / max(uSize * 1.15, 0.001));
    col += mix(uMid, uHot, 0.5) * halo * uGlow * 0.16;
  }

  col = max(col, vec3(0.0));
  // Soft filmic roll-off keeps the disk core from clipping to flat white.
  col = col / (1.0 + col * 0.72);
  col *= 1.28;

  float lum = max(col.r, max(col.g, col.b));
  float a = clamp(max(captured, max(acc, lum)), 0.0, 1.0) * uFade;
  vec3 pre = col * uFade;

  // Dither, otherwise the long smooth falloffs band on 8-bit displays.
  pre += (hash21(vUv * 1024.0 + fract(uTime)) - 0.5) / 255.0;

  if (uHasBackground > 0.5) {
    gl_FragColor = vec4(uBackground * (1.0 - a) + pre, 1.0);
  } else {
    gl_FragColor = vec4(pre / max(a, 0.0001), a);
  }
}
`,Wf=new L(0,1,0),Gf=class extends Z{constructor(e={}){super({...Pf,...e})}buildCamera(){this.camera=new rl(-1,1,1,-1,0,1),this.camera.position.set(0,0,1),this.rayPos=new L,this.rayBasis=new Gr,this.right=new L,this.upVec=new L,this.back=new L}onResize(e,t){this.computeGeometry(),this.applyPixelRatio(e,t),this.buildQuad(),this.updateOptions(),this.primed=!1}computeGeometry(){let e=this.options,t=P.clamp(e.blackHoleSize,.05,.32);this.camDist=P.clamp(Ff/(t*If),7,90),this.shadowRadius=t;let n=this.camDist*If,r=Math.max(3.4,P.clamp(e.diskRadius,.16,.8)*n),i=Math.max(.35,P.clamp(e.diskThickness,.03,.36)*n),a=Math.max(3,r-i);r=Math.max(r,a*1.35,a+.4),this.diskIn=a,this.diskOut=r,this.diskH=Math.max(.06,(r-a)*.16),this.escape=Math.max(38,r*3),this.noiseA=.25/Math.max(r-a,.1),this.inclination=P.degToRad(3+P.clamp(e.tilt,0,1)*38)}stepBudget(){return this.qualityTier().steps}qualityTier(){return Lf[this.options.quality]||Lf.medium}applyPixelRatio(e,t){let n=P.clamp(this.options.resolution,.35,1),r=(window.devicePixelRatio||1)*(this.options.scale||1)*n,i=e*t*r*r;i>Rf&&(r*=Math.sqrt(Rf/i)),r=P.clamp(r,.3,2),this.lastDpr!==r&&(this.lastDpr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(e,t,!1))}buildQuad(){if(this.mesh)return;let e=new io(Nf(),zf,zf,hr);e.wrapS=er,e.wrapT=er,e.minFilter=or,e.magFilter=or,e.generateMipmaps=!1,e.needsUpdate=!0,this.noiseTexture=e;let t=new co(2,2),n=new G({defines:{STEPS:this.stepBudget(),ZOOM:If.toFixed(6)},uniforms:{uNoise:{value:e},uTime:{value:0},uAspect:{value:1},uCamPos:{value:new L(0,0,this.camDist)},uCamBasis:{value:new Gr},uLens:{value:1},uDiskIn:{value:this.diskIn},uDiskOut:{value:this.diskOut},uDiskH:{value:this.diskH},uEscape:{value:this.escape},uCoarse:{value:this.qualityTier().coarse},uFine:{value:this.qualityTier().fine},uNoiseA:{value:this.noiseA},uNoiseB:{value:this.noiseA*2.75},uSpin:{value:.6},uDoppler:{value:.7},uBright:{value:1},uGlow:{value:1},uStars:{value:.6},uSize:{value:this.shadowRadius},uFade:{value:0},uHot:{value:new B},uMid:{value:new B},uCool:{value:new B},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0}},vertexShader:Hf,fragmentShader:Uf,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),r=new W(t,n);r.frustumCulled=!1,this.scene.add(r),this.geometry=t,this.material=n,this.mesh=r,this.lastSteps=this.stepBudget()}updateObserver(e){this.pointer||={x:0,y:0};let t=P.clamp(this.options.mouseInfluence,0,.12),n=e*.018-this.pointer.x*t*5,r=P.clamp(this.inclination+this.pointer.y*t*4,P.degToRad(1),P.degToRad(72)),i=this.camDist*(1+.06*(1-(this.intro||0))),a=Math.cos(r)*i;this.rayPos.set(a*Math.sin(n),Math.sin(r)*i,a*Math.cos(n)),this.back.copy(this.rayPos).normalize(),this.right.crossVectors(Wf,this.back).normalize(),this.upVec.crossVectors(this.back,this.right),this.rayBasis.set(this.right.x,this.upVec.x,this.back.x,this.right.y,this.upVec.y,this.back.y,this.right.z,this.upVec.z,this.back.z)}onFrame(e,t){let n=P.clamp(this.options.maxFps,12,120);this.budget=(this.budget||0)+e;let r=1/n;if(this.primed&&!this.forceIntro&&this.budget<r){this.skipDraw=!0;return}this.budget=Math.min(this.budget-r,r),this.skipDraw=!1,this.primed=!0;let i=Math.max(0,this.options.fadeIn||0);this.intro=this.forceIntro||i<=0?1:Mf(0,1,Math.min(t/i,1)),this.pointer=this.pointer||{x:0,y:0};let a=Math.min(e*1.8,1);this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*a,this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*a,this.updateObserver(t);let o=this.material.uniforms;o.uTime.value=t,o.uFade.value=this.intro,o.uCamPos.value.copy(this.rayPos),o.uCamBasis.value.copy(this.rayBasis)}renderNow(){this.forceIntro=!0,this.primed=!1,super.renderNow(),this.forceIntro=!1}render(){this.skipDraw||this.renderer.render(this.scene,this.camera)}updateOptions(){if(!this.material)return;let e=X(this.options.color);if(!e)return;this.accent=e,this.computeGeometry(),this.width&&this.height&&this.applyPixelRatio(this.width,this.height);let t=this.stepBudget();t!==this.lastSteps&&(this.material.defines.STEPS=t,this.material.needsUpdate=!0,this.lastSteps=t);let n={h:0,s:0,l:0};e.getHSL(n);let r=new B().setHSL((n.h-.045+1)%1,P.clamp(n.s,0,1),P.clamp(n.l*.5,0,1)),i=new B().setHSL((n.h+.035)%1,P.clamp(n.s*.32,0,1),Math.min(1,n.l+(1-n.l)*.82)),a=this.material.uniforms;a.uCool.value.copy(r),a.uMid.value.copy(e),a.uHot.value.copy(i),a.uAspect.value=this.height?this.width/this.height:1,a.uDiskIn.value=this.diskIn,a.uDiskOut.value=this.diskOut,a.uDiskH.value=this.diskH,a.uEscape.value=this.escape,a.uCoarse.value=this.qualityTier().coarse,a.uFine.value=this.qualityTier().fine,a.uNoiseA.value=this.noiseA,a.uNoiseB.value=this.noiseA*2.75,a.uSize.value=this.shadowRadius,a.uLens.value=P.clamp(this.options.lensing,0,2),a.uSpin.value=P.clamp(this.options.spin,0,2),a.uDoppler.value=P.clamp(this.options.doppler,0,1),a.uBright.value=P.clamp(this.options.brightness,.2,2),a.uGlow.value=P.clamp(this.options.glow,0,2),a.uStars.value=P.clamp(this.options.stars,0,1);let o=X(this.options.backgroundColor);o?(a.uBackground.value.copy(o),a.uHasBackground.value=1):(a.uBackground.value.set(0,0,0),a.uHasBackground.value=0);let s=this.options.backgroundColor==null;this.material.transparent!==s&&(this.material.transparent=s,this.material.needsUpdate=!0),this.primed=!1}destroy(){this.noiseTexture&&=(this.noiseTexture.dispose(),null),super.destroy()}}}));function qf(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}function Jf(e,t,n){let r=P.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function Yf(e){let t=Math.max(qf(e),1e-7),n=qf(e+2654435761);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)}var Xf,Zf,Qf,$f,ep,tp,np=t((()=>{Y(),Q(),Xf={color:`#8fc4ff`,backgroundColor:null,tilt:.62,size:1,arms:3,spiral:.65,starSize:1,density:15e3,speed:.12,coreGlow:1,dust:.5,backgroundStars:1,mouseInfluence:.08,fadeIn:1.4},Zf=.3,Qf=1.6,$f=`
attribute float aSize;
attribute vec3 aColor;
attribute float aBright;
attribute float aCore;

uniform float uSizeScale;
uniform float uPixelRatio;
uniform float uScreenScale;
uniform float uFade;
uniform float uCoreGlow;
uniform float uTime;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vColor = aColor;

  float core = mix(1.0, uCoreGlow, aCore);
  float tw = 0.92 + 0.08 * sin(uTime * (1.4 + aBright * 2.2) + mv.y * 0.09 + aSize * 19.0);
  vAlpha = aBright * core * tw * uFade;

  float size = uSizeScale * aSize * uPixelRatio * (uScreenScale / max(-mv.z, 1.0));
  gl_PointSize = clamp(size, 1.0, 64.0);
  gl_Position = projectionMatrix * mv;
}
`,ep=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  float glow = exp(-3.8 * d * d);
  float core = exp(-14.0 * d * d);
  float a = (0.32 * glow + 1.05 * core) * vAlpha;
  if (a < 0.003) discard;
  vec3 col = vColor * (0.5 + 1.15 * core);
  gl_FragColor = vec4(col, a);
}
`,tp=class extends Z{constructor(e={}){super({...Xf,...e})}onResize(e,t){this.buildField(e,t),this.frameCamera()}frameCamera(){this.camera.fov*Math.PI/180,Math.min(this.width,this.height),this.camDist=this.outerR*3.4;let e=P.degToRad(14+P.clamp(this.options.tilt,0,1)*66);this.camPos={y:this.camDist*Math.sin(e),z:this.camDist*Math.cos(e)},this.camera.position.set(0,this.camPos.y,this.camPos.z),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}buildField(e,t){this.disposeField();let n=this.options,r=P.clamp(Math.round(n.density),3e3,4e4),i=P.clamp(Math.round(n.arms),2,4),a=P.clamp(n.size,.5,2),o=P.clamp(n.spiral,0,1);this.lastDensity=r,this.lastArms=i,this.lastSize=a,this.lastSpiral=o,this.lastTilt=P.clamp(n.tilt,0,1),this.lastColorHex=String(n.color),this.lastDust=n.dust;let s=Math.min(e,t);this.outerR=s*.52*a;let c=this.outerR*.13;this.coreR=c;let l=Math.floor(r*Zf),u=r-l,d=new Float32Array(r*3),f=new Float32Array(r),p=new Float32Array(r),m=new Float32Array(r),h=new Float32Array(r),g=new Float32Array(r),_=new Float32Array(r),v=0;for(;v<l;v++){let e=v*7,t=Yf(e)*c*1.5,n=Yf(e+1)*c*.32,r=Yf(e+2)*c*1.5;d[v*3]=t,d[v*3+1]=n,d[v*3+2]=r,f[v]=1+qf(e+3)*1.7,h[v]=qf(e+4),g[v]=1,m[v]=1}let y=(Qf+1.6*o)*Math.PI*2,b=.4-.24*o;for(let e=0;e<u;e++,v++){let t=(l+e)*7,n=Math.max(this.outerR*.03,-Math.log(1-qf(t)*.99)*(this.outerR*.4)+Yf(t+1)*this.outerR*.045),r=Math.floor(qf(t+2)*i),a=Yf(t+3)*b+Yf(t+8)*b*.9*(n/this.outerR),o=r*(Math.PI*2/i)+n/this.outerR*y+a;_[v]=a,d[v*3]=n*Math.cos(o);let s=qf(t+9)<.1?.16:.05;d[v*3+1]=Yf(t+4)*(c*.15+n*s),d[v*3+2]=n*Math.sin(o),f[v]=.55+qf(t+5)*.95,h[v]=qf(t+6),g[v]=0,m[v]=P.clamp(1-n/(c*2.4),0,1)}this.seeds=h,this.types=g,this.armOffset=_;let x=new U;x.setAttribute(`position`,new H(d,3)),x.setAttribute(`aSize`,new H(f,1)),x.setAttribute(`aBright`,new H(p,1)),x.setAttribute(`aColor`,new H(new Float32Array(r*3),3)),x.setAttribute(`aCore`,new H(m,1)),this.geometry=x;let S=this.options.backgroundColor==null,C=new G({uniforms:{uSizeScale:{value:P.clamp(n.starSize,.4,2.5)},uPixelRatio:{value:this.renderer.getPixelRatio()},uScreenScale:{value:this.height*4.2},uFade:{value:0},uCoreGlow:{value:P.clamp(n.coreGlow,.2,2)},uTime:{value:0}},vertexShader:$f,fragmentShader:ep,transparent:!0,depthWrite:!1,blending:S?1:2});this.material=C;let w=new Ns(x,C);w.frustumCulled=!1,this.scene.add(w),this.galaxy=w,this.buildSky(),this.applyColors(),this.updateOptions()}buildSky(){this.sky&&=(this.scene.remove(this.sky),this.sky.geometry.dispose(),null),this.skyGeo&&=null;let e=P.clamp(Math.round(this.lastDensity*.07),600,2600),t=this.outerR*3.1,n=new Float32Array(e*3),r=new Float32Array(e),i=new Float32Array(e),a=new Float32Array(e*3),o=new Float32Array(e),s=X(this.options.color)||new B(`#8fc4ff`),c={h:0,s:0,l:0};s.getHSL(c);let l=new B;for(let s=0;s<e;s++){let e=qf(s*7)*Math.PI*2,u=Math.acos(2*qf(s*7+1)-1);n[s*3]=t*Math.sin(u)*Math.cos(e),n[s*3+1]=t*Math.sin(u)*Math.sin(e),n[s*3+2]=t*Math.cos(u),r[s]=.6+qf(s*7+2)*1.3,i[s]=.1+qf(s*7+3)*.28,l.setHSL((c.h-.02+1)%1,.14,.82+qf(s*7+4)*.16),a[s*3]=l.r,a[s*3+1]=l.g,a[s*3+2]=l.b,o[s]=0}let u=new U;u.setAttribute(`position`,new H(n,3)),u.setAttribute(`aSize`,new H(r,1)),u.setAttribute(`aBright`,new H(i,1)),u.setAttribute(`aColor`,new H(a,3)),u.setAttribute(`aCore`,new H(o,1)),this.skyGeo=u;let d=new Ns(u,this.material);d.frustumCulled=!1,d.visible=this.options.backgroundStars>0,this.scene.add(d),this.sky=d}applyColors(){if(!this.geometry)return;let e=X(this.options.color);if(!e)return;this.accent=e;let t=P.clamp(this.options.dust,0,1),n={h:0,s:0,l:0};e.getHSL(n);let r=this.geometry.attributes.position.array,i=this.geometry.attributes.aColor.array,a=this.geometry.attributes.aBright.array,o=this.geometry.attributes.aCore.array,s=this.seeds.length,c=this.outerR,l=new B;for(let e=0;e<s;e++){let s=r[e*3],u=r[e*3+1],d=r[e*3+2],f=Math.sqrt(s*s+d*d),p=this.seeds[e];if(this.types[e]===1){let t=(n.h+.04+(p-.5)*.06+1)%1,r=P.clamp(n.s*.85,.15,1),s=.34+p*.28;l.setHSL(t,r,s),i[e*3]=l.r,i[e*3+1]=l.g,i[e*3+2]=l.b,a[e]=(.55+p*.6)*(.9+o[e]*.4)}else{let r=(n.h-.05+(p-.5)*.05+1)%1,o=P.clamp(n.s*.45+p*.25,.05,.7),s=.78+p*.22,d=this.armOffset?this.armOffset[e]:0,m=Math.exp(-((d/.24)**2)),h=.18+p*.35+m*(.5+p*.4),g=Math.exp(-(((f/c-.52)/.24)**2))*P.clamp(1-Math.abs(u)/(c*.08),0,1)*t;g>.001&&(h*=1-g*.8,r=(r+g*.06+1)%1,s=Math.max(.15,s-g*.25)),l.setHSL(r,o,s),i[e*3]=l.r,i[e*3+1]=l.g,i[e*3+2]=l.b,a[e]=h}}this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aBright.needsUpdate=!0}onFrame(e,t){let n=Math.max(0,this.options.fadeIn||0);this.intro=this.forceIntro||n<=0?1:Jf(0,1,Math.min(t/n,1));let r=P.clamp(this.options.speed,0,.8);if(this.galaxy&&(this.galaxy.rotation.y+=e*r*.35),this.sky&&(this.sky.rotation.y-=e*r*.05),this.material){let e=this.material.uniforms;e.uFade.value=this.intro,e.uTime.value=t}if(this.camPos&&this.mouse.active){let t=P.clamp(this.options.mouseInfluence,0,.3),n=(this.mouse.x-.5)*this.camDist*.55*t,r=this.camPos.y-(this.mouse.y-.5)*this.camDist*.3*t,i=Math.min(e*2,1);this.camera.position.x+=(n-this.camera.position.x)*i,this.camera.position.y+=(r-this.camera.position.y)*i,this.camera.lookAt(0,0,0)}}renderNow(){this.forceIntro=!0,super.renderNow(),this.forceIntro=!1}updateOptions(){if(!this.material)return;let e=this.options,t=P.clamp(Math.round(e.density),3e3,4e4),n=P.clamp(Math.round(e.arms),2,4),r=P.clamp(e.size,.5,2),i=P.clamp(e.tilt,0,1),a=P.clamp(e.spiral,0,1),o=String(e.color),s=P.clamp(e.dust,0,1);if(t!==this.lastDensity||n!==this.lastArms||r!==this.lastSize||a!==this.lastSpiral){this.buildField(this.width,this.height);return}(o!==this.lastColorHex||s!==this.lastDust)&&(this.lastColorHex=o,this.lastDust=e.dust,this.applyColors()),i!==this.lastTilt&&(this.lastTilt=i,this.frameCamera());let c=this.material.uniforms;c.uSizeScale.value=P.clamp(e.starSize,.4,2.5),c.uCoreGlow.value=P.clamp(e.coreGlow,.2,2),c.uPixelRatio.value=this.renderer.getPixelRatio(),c.uScreenScale.value=this.height*4.2,this.sky&&(this.sky.visible=e.backgroundStars>0);let l=e.backgroundColor==null?1:2;this.material.blending!==l&&(this.material.blending=l)}disposeField(){this.galaxy&&=(this.scene.remove(this.galaxy),this.galaxy.geometry.dispose(),null),this.sky&&=(this.scene.remove(this.sky),this.sky.geometry.dispose(),null),this.skyGeo=null,this.material&&=(this.material.dispose(),null),this.geometry=null}}}));function rp(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}function ip(e,t,n){let r=P.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function ap(e){let t=Math.max(rp(e),1e-7),n=rp(e+2654435761);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)}function op(e,t,n,r,i,a){let o=t*.13,s=Math.floor(e*cp),c=e-s,l=new Float32Array(e*3),u=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e*3),p=new Float32Array(e),m=new B,h=0;for(;h<s;h++){let e=h*7;l[h*3]=ap(e)*o*1.5,l[h*3+1]=ap(e+1)*o*.32,l[h*3+2]=ap(e+2)*o*1.5,u[h]=1+rp(e+3)*1.7,p[h]=1;let t=rp(e+4),n=(i+.04+(t-.5)*.06+1)%1,r=P.clamp(a*.85,.15,1),s=.34+t*.28;m.setHSL(n,r,s),f[h*3]=m.r,f[h*3+1]=m.g,f[h*3+2]=m.b,d[h]=(.55+t*.6)*1.25}let g=(lp+1.6*r)*Math.PI*2,_=.4-.24*r;for(let e=0;e<c;e++,h++){let r=(s+e)*7,c=Math.max(t*.03,-Math.log(1-rp(r)*.99)*(t*.4)+ap(r+1)*t*.045),v=Math.floor(rp(r+2)*n),y=ap(r+3)*_+ap(r+8)*_*.9*(c/t),b=v*(Math.PI*2/n)+c/t*g+y;l[h*3]=c*Math.cos(b),l[h*3+1]=ap(r+4)*(o*.15+c*.05),l[h*3+2]=c*Math.sin(b),u[h]=.55+rp(r+5)*.95,p[h]=P.clamp(1-c/(o*2.4),0,1);let x=rp(r+6),S=(i-.05+(x-.5)*.05+1)%1,C=P.clamp(a*.45+x*.25,.05,.7),w=.78+x*.22,T=Math.exp(-((y/.24)**2)),E=.18+x*.35+T*(.5+x*.4);m.setHSL(S,C,w),f[h*3]=m.r,f[h*3+1]=m.g,f[h*3+2]=m.b,d[h]=E}let v=new U;return v.setAttribute(`position`,new H(l,3)),v.setAttribute(`aSize`,new H(u,1)),v.setAttribute(`aBright`,new H(d,1)),v.setAttribute(`aColor`,new H(f,3)),v.setAttribute(`aCore`,new H(p,1)),v}var sp,cp,lp,up,dp,fp,pp=t((()=>{Y(),Q(),sp={color:`#8fc4ff`,backgroundColor:null,count:6,size:1,clusterDensity:1,arms:3,spiral:.65,starSize:1,density:5e3,speed:.12,coreGlow:1,colorVariety:.6,backgroundStars:1,mouseInfluence:.08,focusX:0,focusY:0,focusZ:0,fadeIn:1.4},cp=.3,lp=1.6,up=`
attribute float aSize;
attribute vec3 aColor;
attribute float aBright;
attribute float aCore;

uniform float uSizeScale;
uniform float uPixelRatio;
uniform float uScreenScale;
uniform float uFade;
uniform float uCoreGlow;
uniform float uTime;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vColor = aColor;

  float core = mix(1.0, uCoreGlow, aCore);
  float tw = 0.92 + 0.08 * sin(uTime * (1.4 + aBright * 2.2) + mv.y * 0.09 + aSize * 19.0);
  vAlpha = aBright * core * tw * uFade;

  float size = uSizeScale * aSize * uPixelRatio * (uScreenScale / max(-mv.z, 1.0));
  gl_PointSize = clamp(size, 1.0, 64.0);
  gl_Position = projectionMatrix * mv;
}
`,dp=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  float glow = exp(-3.8 * d * d);
  float core = exp(-14.0 * d * d);
  float a = (0.32 * glow + 1.05 * core) * vAlpha;
  if (a < 0.003) discard;
  vec3 col = vColor * (0.5 + 1.15 * core);
  gl_FragColor = vec4(col, a);
}
`,fp=class extends Z{constructor(e={}){super({...sp,...e})}onResize(e,t){this.buildCluster(e,t),this.frameCamera()}frameCamera(){this.camDist=this.unit*1.7,this.camera.position.set(0,0,this.camDist),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}buildCluster(e,t){this.disposeCluster();let n=this.options,r=P.clamp(Math.round(n.count),3,8),i=P.clamp(n.size,.5,2),a=P.clamp(Math.round(n.arms),2,4),o=P.clamp(Math.round(n.density),2e3,8e3),s=P.clamp(n.spiral,0,1),c=P.clamp(n.colorVariety,0,1),l=P.clamp(n.clusterDensity,.5,2);this.lastCount=r,this.lastSize=i,this.lastArms=a,this.lastDensity=o,this.lastSpiral=s,this.lastVariety=c,this.lastClusterDensity=l,this.lastColorHex=String(n.color);let u=Math.min(e,t);this.unit=u,this.galaxyR=u*.18*i,this.clusterR=u*.6/l,this.skyR=u*2.4;let d=n.backgroundColor==null,f=new G({uniforms:{uSizeScale:{value:P.clamp(n.starSize,.4,2.5)},uPixelRatio:{value:this.renderer.getPixelRatio()},uScreenScale:{value:this.height*4.2},uFade:{value:0},uCoreGlow:{value:P.clamp(n.coreGlow,.2,2)},uTime:{value:0}},vertexShader:up,fragmentShader:dp,transparent:!0,depthWrite:!1,blending:d?1:2});this.material=f;let p=X(n.color)||new B(`#8fc4ff`),m={h:0,s:0,l:0};p.getHSL(m);let h=new No;this.scene.add(h),this.group=h;let g=[];for(let e=0;e<r;e++){let t=(m.h+c*(rp(e*11+1)-.5)*.6+1)%1,n=op(o,this.galaxyR,a,s,t,m.s),i=new Ns(n,f);i.frustumCulled=!1;let l=(e+.5)/r,u=this.clusterR*Math.sqrt(l),d=e*2.399963229728653,p=u*Math.cos(d)+(rp(e*11+2)-.5)*this.clusterR*.16,_=u*Math.sin(d)*.72+(rp(e*11+3)-.5)*this.clusterR*.16,v=(rp(e*11+4)-.5)*this.clusterR*.9;i.position.set(p,_,v),i.rotation.order=`YXZ`,i.rotation.x=(rp(e*11+5)-.5)*Math.PI*.85,i.rotation.y=rp(e*11+6)*Math.PI*2,i.rotation.z=rp(e*11+7)*Math.PI*2,i.scale.setScalar(.7+rp(e*11+8)*.7),h.add(i),g.push({points:i,spinSpeed:.6+rp(e*11+9)*.8})}this.galaxies=g,this.buildSky(),this.updateOptions()}buildSky(){this.sky&&=(this.scene.remove(this.sky),this.sky.geometry.dispose(),null);let e=this.lastDensity*this.lastCount,t=P.clamp(Math.round(e*.05),600,2600),n=this.skyR,r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3),s=new Float32Array(t),c=X(this.options.color)||new B(`#8fc4ff`),l={h:0,s:0,l:0};c.getHSL(l);let u=new B;for(let e=0;e<t;e++){let t=rp(e*7)*Math.PI*2,c=Math.acos(2*rp(e*7+1)-1);r[e*3]=n*Math.sin(c)*Math.cos(t),r[e*3+1]=n*Math.sin(c)*Math.sin(t),r[e*3+2]=n*Math.cos(c),i[e]=.6+rp(e*7+2)*1.3,a[e]=.1+rp(e*7+3)*.28,u.setHSL((l.h-.02+1)%1,.14,.82+rp(e*7+4)*.16),o[e*3]=u.r,o[e*3+1]=u.g,o[e*3+2]=u.b,s[e]=0}let d=new U;d.setAttribute(`position`,new H(r,3)),d.setAttribute(`aSize`,new H(i,1)),d.setAttribute(`aBright`,new H(a,1)),d.setAttribute(`aColor`,new H(o,3)),d.setAttribute(`aCore`,new H(s,1));let f=new Ns(d,this.material);f.frustumCulled=!1,f.visible=this.options.backgroundStars>0,this.scene.add(f),this.sky=f}onFrame(e,t){let n=Math.max(0,this.options.fadeIn||0);this.intro=this.forceIntro||n<=0?1:ip(0,1,Math.min(t/n,1));let r=P.clamp(this.options.speed,0,.8);if(this.galaxies)for(let t of this.galaxies)t.points.rotation.y+=e*r*.35*t.spinSpeed;if(this.sky&&(this.sky.rotation.y-=e*r*.05),this.material){let e=this.material.uniforms;e.uFade.value=this.intro,e.uTime.value=t}if(this.mouse.active){let t=P.clamp(this.options.mouseInfluence,0,.3),n=(this.mouse.x-.5)*this.unit*.8*t,r=(.5-this.mouse.y)*this.unit*.5*t,i=Math.min(e*2,1);this.camera.position.x+=(n-this.camera.position.x)*i,this.camera.position.y+=(r-this.camera.position.y)*i,this.camera.lookAt(0,0,0)}}renderNow(){this.forceIntro=!0,super.renderNow(),this.forceIntro=!1}updateOptions(){if(!this.material)return;let e=this.options,t=P.clamp(Math.round(e.count),3,8),n=P.clamp(e.size,.5,2),r=P.clamp(Math.round(e.arms),2,4),i=P.clamp(Math.round(e.density),2e3,8e3),a=P.clamp(e.spiral,0,1),o=P.clamp(e.colorVariety,0,1),s=P.clamp(e.clusterDensity,.5,2),c=String(e.color);if(t!==this.lastCount||n!==this.lastSize||r!==this.lastArms||i!==this.lastDensity||a!==this.lastSpiral||o!==this.lastVariety||s!==this.lastClusterDensity||c!==this.lastColorHex){this.buildCluster(this.width,this.height);return}let l=this.material.uniforms;l.uSizeScale.value=P.clamp(e.starSize,.4,2.5),l.uCoreGlow.value=P.clamp(e.coreGlow,.2,2),l.uPixelRatio.value=this.renderer.getPixelRatio(),l.uScreenScale.value=this.height*4.2,this.sky&&(this.sky.visible=e.backgroundStars>0),this.group&&this.unit&&(this.group.position.x=P.clamp(e.focusX,-1,1)*this.unit*.9,this.group.position.y=P.clamp(e.focusY,-1,1)*this.unit*.6,this.group.position.z=-P.clamp(e.focusZ,-1,1)*this.unit*.6);let u=e.backgroundColor==null?1:2;this.material.blending!==u&&(this.material.blending=u)}disposeCluster(){if(this.group&&=(this.scene.remove(this.group),null),this.galaxies){for(let e of this.galaxies)e.points.geometry.dispose();this.galaxies=null}this.sky&&=(this.scene.remove(this.sky),this.sky.geometry.dispose(),null),this.material&&=(this.material.dispose(),null)}}}));function mp(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}function hp(e,t,n){let r=P.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function gp(){if(Cp)return Cp;let e=xp,t=new Uint8Array(e*e*4),n=Sp.map(([e])=>{let t=new Float32Array(e*e);for(let n=0;n<t.length;n++)t[n]=mp(n*7919+e*131);return t});for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=0;for(let t=0;t<Sp.length;t++){let o=Sp[t][0],s=Sp[t][1],c=n[t],l=i/e*o,u=r/e*o,d=Math.floor(l),f=Math.floor(u),p=l-d,m=u-f;p=p*p*(3-2*p),m=m*m*(3-2*m);let h=d%o,g=(d+1)%o,_=f%o*o,v=(f+1)%o*o,y=c[_+h],b=c[_+g],x=c[v+h],S=c[v+g];a+=s*(y+(b-y)*p+(x-y)*m+(y-b-x+S)*p*m)}let o=(r*e+i)*4,s=Math.max(0,Math.min(255,Math.round(a*255)));t[o]=s,t[o+1]=s,t[o+2]=s,t[o+3]=255}return Cp=t,t}var _p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op=t((()=>{Y(),Q(),_p={color:`#57f0ff`,backgroundColor:null,depth:.6,shafts:.8,caustics:.5,particles:.5,speed:.15,brightness:1,fadeIn:1.4,quality:`medium`,resolution:.75,maxFps:30,mouseInfluence:.05,mouseControls:!0,touchControls:!0},vp=.828427125,yp=26e5,bp={low:{steps:24},medium:{steps:36},high:{steps:56}},xp=512,Sp=[[8,.5],[16,.27],[32,.15],[64,.08]],Cp=null,wp=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Tp=`
uniform sampler2D uNoise;
uniform float uTime;
uniform float uAspect;
uniform vec3 uCamPos;
uniform mat3 uCamBasis;
uniform vec3 uLightDir;
uniform float uDepth;
uniform float uShafts;
uniform float uCaustic;
uniform float uParticles;
uniform float uSpeed;
uniform float uBright;
uniform float uFade;
uniform vec3 uLightColor;
uniform vec3 uDeepColor;
uniform vec3 uBackground;
uniform float uHasBackground;

varying vec2 vUv;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float hash31(vec3 p) {
  p = fract(p * 0.1031 + vec3(0.11, 0.17, 0.13));
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float tex2(vec2 p) {
  return texture2D(uNoise, fract(p)).r;
}

float fbm2(vec2 p) {
  return tex2(p) * 0.55 +
         tex2(p * 2.03 + vec2(7.4, -3.9)) * 0.28 +
         tex2(p * 4.05 + vec2(-21.3, 13.7)) * 0.17;
}

// Cheap two-octave variant for the light fields, which only shape brightness.
float fbm2b(vec2 p) {
  return tex2(p) * 0.6 + tex2(p * 2.03 + vec2(7.4, -3.9)) * 0.4;
}

// Water density from a single sheared 2D field: folding height into the plane
// keeps the blobs three-dimensional for the cost of one fbm instead of twelve.
float waterDensity(vec3 p, float t) {
  vec2 q = p.xz * 0.3 + p.y * 0.55 + vec2(t * 0.10, t * 0.07);
  return 0.3 + 1.4 * fbm2(q);
}

// Sparse twinkling marine snow from 3D cell hashing.
float snow(vec3 p, float t) {
  if (uParticles <= 0.001) return 0.0;
  vec3 g = p * 0.13;
  vec3 id = floor(g);
  vec3 f = fract(g);
  float h = hash31(id);
  float bright = smoothstep(0.991, 0.997, h);
  if (bright <= 0.0) return 0.0;
  vec3 off = vec3(hash31(id + vec3(1.13, 2.71, 3.97)),
                  hash31(id + vec3(5.29, 1.13, 7.31)),
                  hash31(id + vec3(8.57, 4.19, 2.03))) * 0.7;
  vec3 q = f - off;
  float tw = 0.55 + 0.45 * sin(t * (1.5 + hash31(id + vec3(6.1, 2.7, 9.3)) * 2.0) +
                               hash31(id + vec3(3.7, 8.1, 5.3)) * 40.0);
  return smoothstep(0.22, 0.0, dot(q, q)) * bright * tw;
}

void main() {
  vec2 sp = vUv - 0.5;
  sp.x *= uAspect;
  vec3 rd = normalize(uCamBasis * vec3(sp.x * ZOOM, sp.y * ZOOM, -1.0));
  vec3 ro = uCamPos;

  vec3 L = normalize(uLightDir);
  float t = uTime * uSpeed;
  float farDist = 18.0;

  // Light-frame axes, constant for the whole frame: hoisted out of the march.
  vec3 u1 = normalize(cross(L, vec3(0.0, 1.0, 0.0)));
  vec3 u2 = normalize(cross(L, u1));

  vec3 col = vec3(0.0);
  float T = 1.0;
  float dt = farDist / float(STEPS);
  float cur = 0.2 + dt * hash21(vUv * 641.0);

  for (int i = 0; i < STEPS; i++) {
    vec3 p = ro + rd * cur;

    float air = smoothstep(-0.4, 0.6, p.y);
    float dens = uDepth * waterDensity(p, t) * (1.0 - 0.85 * air);
    dens += snow(p, uTime) * uParticles * 2.2;

    // Shaft field sampled in the plane perpendicular to the light: bright patches
    // stay constant along each light ray, smearing into diagonal beams.
    vec2 beamUV = vec2(dot(p, u1), dot(p, u2)) * 0.34 + vec2(t * 0.3, t * 0.14);
    float b = fbm2b(beamUV);
    float beam = pow(max(b - 0.28, 0.0) / 0.72, 1.4);

    // Caustic net: interference between the shaft field and its own higher-
    // frequency copy, animated separately.
    float c2 = fbm2b(beamUV * 2.1 + vec2(13.7, -7.1) + vec2(t * 0.18, 0.0));
    float cau = pow(clamp(b - c2 + 0.4, 0.0, 1.0), 3.0);

    // Dense water between here and the surface casts shadow, carving the beams.
    float tSurf = max((0.0 - p.y) / max(-L.y, 0.0001), 0.0);
    float shadow = exp(-tSurf * dens * 0.8);
    float light = uShafts * shadow * (0.15 + 2.6 * beam) * (0.6 + 0.75 * cau);

    // Forward-peaked scattering phase: beams read strongest looking toward the sun.
    float phase = 0.55 + 0.45 * pow(max(dot(rd, -L), 0.0), 4.0);
    vec3 scat = dens * uLightColor * light * phase * uBright + uDeepColor * 0.1;

    col += scat * T * dt;
    T *= exp(-dens * 1.25 * dt);

    if (T < 0.015) break;
    cur += dt;
  }

  // Whatever the ray still carries is the far haze.
  col += uDeepColor * T * 0.55;

  col = max(col, vec3(0.0));
  col = col / (1.0 + col * 0.8);
  col *= 1.45;

  float lum = max(col.r, max(col.g, col.b));
  float a = clamp(max(lum, 1.0 - T * 0.85), 0.0, 1.0) * uFade;
  vec3 pre = col * uFade;

  pre += (hash21(vUv * 1024.0 + fract(uTime)) - 0.5) / 255.0;

  if (uHasBackground > 0.5) {
    gl_FragColor = vec4(uBackground * (1.0 - a) + pre, 1.0);
  } else {
    gl_FragColor = vec4(pre / max(a, 0.0001), a);
  }
}
`,Ep=new L(0,1,0),Dp=class extends Z{constructor(e={}){super({..._p,...e})}buildCamera(){this.camera=new rl(-1,1,1,-1,0,1),this.camera.position.set(0,0,1),this.rayPos=new L,this.rayBasis=new Gr,this.right=new L,this.upVec=new L,this.back=new L}onResize(e,t){this.applyPixelRatio(e,t),this.buildQuad(),this.updateOptions(),this.primed=!1}computeLight(){this.lightDir=new L(-.55,-.72,.3).normalize()}stepBudget(){return this.qualityTier().steps}qualityTier(){return bp[this.options.quality]||bp.medium}applyPixelRatio(e,t){let n=P.clamp(this.options.resolution,.35,1),r=(window.devicePixelRatio||1)*(this.options.scale||1)*n,i=e*t*r*r;i>yp&&(r*=Math.sqrt(yp/i)),r=P.clamp(r,.3,2),this.lastDpr!==r&&(this.lastDpr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(e,t,!1))}buildQuad(){if(this.mesh)return;this.computeLight();let e=new io(gp(),xp,xp,hr);e.wrapS=er,e.wrapT=er,e.minFilter=or,e.magFilter=or,e.generateMipmaps=!1,e.needsUpdate=!0,this.noiseTexture=e;let t=new co(2,2),n=new G({defines:{STEPS:this.stepBudget(),ZOOM:vp.toFixed(6)},uniforms:{uNoise:{value:e},uTime:{value:0},uAspect:{value:1},uCamPos:{value:new L(0,-2.6,0)},uCamBasis:{value:new Gr},uLightDir:{value:this.lightDir.clone()},uDepth:{value:.6},uShafts:{value:.8},uCaustic:{value:.5},uParticles:{value:.5},uSpeed:{value:.15},uBright:{value:1},uFade:{value:0},uLightColor:{value:new B},uDeepColor:{value:new B},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0}},vertexShader:wp,fragmentShader:Tp,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),r=new W(t,n);r.frustumCulled=!1,this.scene.add(r),this.geometry=t,this.material=n,this.mesh=r,this.lastSteps=this.stepBudget()}updateObserver(e){this.pointer||={x:0,y:0};let t=P.clamp(this.options.mouseInfluence,0,.15),n=Math.sin(e*.05)*.5*.6-this.pointer.x*t*3,r=Math.sin(n)*.55,i=-.5-this.pointer.y*t*.6;this.rayPos.set(this.pointer.x*t*12,-2.6+this.pointer.y*t*4,0),this.back.set(r,i,-1).normalize(),this.right.crossVectors(Ep,this.back).normalize(),this.upVec.crossVectors(this.back,this.right),this.rayBasis.set(this.right.x,this.upVec.x,this.back.x,this.right.y,this.upVec.y,this.back.y,this.right.z,this.upVec.z,this.back.z)}onFrame(e,t){let n=P.clamp(this.options.maxFps,12,120);this.budget=(this.budget||0)+e;let r=1/n;if(this.primed&&!this.forceIntro&&this.budget<r){this.skipDraw=!0;return}this.budget=Math.min(this.budget-r,r),this.skipDraw=!1,this.primed=!0;let i=Math.max(0,this.options.fadeIn||0);this.intro=this.forceIntro||i<=0?1:hp(0,1,Math.min(t/i,1)),this.pointer=this.pointer||{x:0,y:0};let a=Math.min(e*1.8,1);this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*a,this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*a,this.updateObserver(t);let o=this.material.uniforms;o.uTime.value=t,o.uFade.value=this.intro,o.uCamPos.value.copy(this.rayPos),o.uCamBasis.value.copy(this.rayBasis)}renderNow(){this.forceIntro=!0,this.primed=!1,super.renderNow(),this.forceIntro=!1}render(){this.skipDraw||this.renderer.render(this.scene,this.camera)}updateOptions(){if(!this.material)return;let e=X(this.options.color);if(!e)return;this.accent=e,this.width&&this.height&&this.applyPixelRatio(this.width,this.height);let t=this.stepBudget();t!==this.lastSteps&&(this.material.defines.STEPS=t,this.material.needsUpdate=!0,this.lastSteps=t);let n={h:0,s:0,l:0};e.getHSL(n);let r=new B().setHSL(n.h,P.clamp(n.s*.5,0,1),P.clamp(n.l*.12,.02,.35));this.lightDir||this.computeLight();let i=this.material.uniforms;i.uLightColor.value.copy(e),i.uDeepColor.value.copy(r),i.uAspect.value=this.height?this.width/this.height:1,i.uLightDir.value.copy(this.lightDir),i.uDepth.value=P.clamp(this.options.depth,.15,1),i.uShafts.value=P.clamp(this.options.shafts,0,1.5),i.uCaustic.value=P.clamp(this.options.caustics,0,1.2),i.uParticles.value=P.clamp(this.options.particles,0,1),i.uSpeed.value=P.clamp(this.options.speed,.02,.4),i.uBright.value=P.clamp(this.options.brightness,.2,1.8);let a=X(this.options.backgroundColor);a?(i.uBackground.value.copy(a),i.uHasBackground.value=1):(i.uBackground.value.set(0,0,0),i.uHasBackground.value=0);let o=this.options.backgroundColor==null;this.material.transparent!==o&&(this.material.transparent=o,this.material.needsUpdate=!0),this.primed=!1}destroy(){this.noiseTexture&&=(this.noiseTexture.dispose(),null),super.destroy()}}})),kp,Ap,jp,Mp,Np=t((()=>{Y(),Q(),kp={color:`#b98aff`,backgroundColor:null,palette:`holo`,thickness:.5,flow:.5,speed:.18,intensity:.7,sheen:.5,variety:.5,fadeIn:.8,mouseInfluence:.3,mouseControls:!0,touchControls:!0},Ap=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,jp=`
uniform float uTime;
uniform float uAspect;
uniform vec2 uMouse;
uniform float uThick;
uniform float uFlow;
uniform float uSpeed;
uniform float uIntensity;
uniform float uSheen;
uniform float uVariety;
uniform float uMode;
uniform float uFade;
uniform vec3 uAccent;
uniform vec3 uDeep;
uniform vec3 uBackground;
uniform float uHasBackground;

varying vec2 vUv;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  return 0.5 * valueNoise(p) +
         0.28 * valueNoise(p * 2.03 + vec2(7.4, -3.9)) +
         0.16 * valueNoise(p * 4.05 + vec2(-21.3, 13.7)) +
         0.06 * valueNoise(p * 8.1 + vec2(53.8, -27.1));
}

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uAspect;
  float t = uTime * uSpeed;

  // Warp the field twice so the film curls into oily, swirling pools.
  vec2 q = vec2(fbm(p * 1.6 + t * 0.16), fbm(p * 1.6 - vec2(t * 0.13, -t * 0.11)));
  vec2 r = p * uThick + q * uFlow + vec2(t * 0.10, 0.0);
  vec2 w = vec2(fbm(r * 1.8 + t * 0.09), fbm(r * 1.8 - t * 0.08));
  r += w * 0.6;
  float d = fbm(r * 2.2);

  // Thin-film interference: thickness times the view angle becomes an optical path
  // difference, and each wavelength interferes at its own phase -> rainbow bands.
  float angle = 0.55 + (uMouse.x - 0.5) * 0.55;
  float opd = (d * 3.0 + 0.6) * 2.0 * cos(angle);
  vec3 lambda = vec3(0.66, 0.52, 0.44) * (1.0 + uVariety * 0.18);
  vec3 film = 0.5 + 0.5 * cos(6.28318 * opd / lambda + 3.14159 * 0.5);

  // Gradient-derived surface normal drives a moving specular highlight, the oily
  // "wet sheen" that makes the field read as a liquid film.
  vec2 e = vec2(0.03, 0.0);
  float dx = fbm((r + vec2(e.x, 0.0)) * 2.2) - fbm((r - vec2(e.x, 0.0)) * 2.2);
  float dy = fbm((r + vec2(0.0, e.x)) * 2.2) - fbm((r - vec2(0.0, e.x)) * 2.2);
  vec3 n = normalize(vec3(-dx, -dy, 0.9));
  vec3 L = normalize(vec3((uMouse.x * 2.0 - 1.0) * 0.7, (uMouse.y * 2.0 - 1.0) * 0.5, 0.8));
  float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 64.0);

  vec3 col;
  if (uMode < 0.5) {
    // Oil: pure interference rainbow.
    col = film;
  } else if (uMode < 1.5) {
    // Hologram: the rainbow pulled toward the accent color.
    vec3 tint = uAccent * (0.35 + 0.65 * d);
    col = mix(film, tint, 0.55);
  } else {
    // Pastel: soft white-lit film with a hint of accent.
    col = mix(vec3(0.92), film, 0.42) + uAccent * 0.18;
  }

  col = col * uIntensity;
  col += vec3(1.0, 0.98, 0.95) * spec * uSheen;
  col += uDeep * (1.0 - uIntensity * 0.85);

  col = col / (1.0 + col * 0.6);
  vec2 pp = (vUv - 0.5) * vec2(uAspect, 1.0);
  col *= 1.0 - smoothstep(0.85, 1.5, length(pp)) * 0.35;
  col += (hash21(vUv * 1200.0 + fract(uTime)) - 0.5) / 255.0;

  float lum = max(col.r, max(col.g, col.b));
  float a = clamp(lum, 0.0, 1.0) * uFade;
  vec3 pre = col * uFade;

  if (uHasBackground > 0.5) {
    gl_FragColor = vec4(uBackground * (1.0 - a) + pre, 1.0);
  } else {
    gl_FragColor = vec4(pre / max(a, 0.0001), a);
  }
}
`,Mp=class extends Z{constructor(e={}){super({...kp,...e})}onResize(e,t){this.buildPlane(),this.sizePlane(e,t)}buildPlane(){if(this.mesh)return;let e=new co(2,2),t=new G({uniforms:{uTime:{value:0},uAspect:{value:1},uMouse:{value:new F(.5,.5)},uThick:{value:this.options.thickness},uFlow:{value:this.options.flow},uSpeed:{value:this.options.speed},uIntensity:{value:this.options.intensity},uSheen:{value:this.options.sheen},uVariety:{value:this.options.variety},uMode:{value:this.paletteMode(this.options.palette)},uFade:{value:0},uAccent:{value:new B},uDeep:{value:new B},uBackground:{value:new B(0,0,0)},uHasBackground:{value:0}},vertexShader:Ap,fragmentShader:jp,depthWrite:!1,depthTest:!1,transparent:this.options.backgroundColor==null}),n=new W(e,t);n.frustumCulled=!1,this.scene.add(n),this.geometry=e,this.material=t,this.mesh=n,this.updateOptions()}paletteMode(e){return e===`oil`?0:e===`holo`?1:2}sizePlane(e,t){let n=P.degToRad(this.camera.fov),r=2*this.camera.position.z*Math.tan(n/2),i=e/t*r;this.mesh.scale.set(i/2,r/2,1),this.material.uniforms.uAspect.value=e/t}onFrame(e,t){let n=Math.max(0,this.options.fadeIn||0);this.intro=this.forceIntro||n<=0?1:Math.min(t/n,1);let r=this.material.uniforms;r.uTime.value=t,r.uFade.value=this.intro;let i=this.mouse.active?this.mouse.x:.5,a=this.mouse.active?this.mouse.y:.5,o=Math.min(e*2.5,1),s=r.uMouse.value;s.x+=(i-s.x)*o,s.y+=(a-s.y)*o}updateOptions(){let e=X(this.options.color);if(!e||!this.material)return;this.accent=e;let t={h:0,s:0,l:0};e.getHSL(t);let n=new B().setHSL(t.h,P.clamp(t.s*.6,0,1),P.clamp(t.l*.14,.02,.4)),r=this.material.uniforms;r.uAccent.value.copy(e),r.uDeep.value.copy(n),r.uAspect.value=this.height?this.width/this.height:1,r.uMode.value=this.paletteMode(this.options.palette),r.uThick.value=P.clamp(this.options.thickness,.2,1.6),r.uFlow.value=P.clamp(this.options.flow,0,1.5),r.uSpeed.value=P.clamp(this.options.speed,.02,.4),r.uIntensity.value=P.clamp(this.options.intensity,.1,1.2),r.uSheen.value=P.clamp(this.options.sheen,0,1.5),r.uVariety.value=P.clamp(this.options.variety,0,1);let i=X(this.options.backgroundColor);i?(r.uBackground.value.copy(i),r.uHasBackground.value=1):(r.uBackground.value.set(0,0,0),r.uHasBackground.value=0);let a=this.options.backgroundColor==null;this.material.transparent!==a&&(this.material.transparent=a,this.material.needsUpdate=!0)}renderNow(){this.forceIntro=!0,super.renderNow(),this.forceIntro=!1}}}));function Pp(e){let t=e+1831565813|0;return t=(t^t>>>15)*(t|1)|0,t=t^t+Math.imul(t^t>>>7,t|61)|0,((t^t>>>14)>>>0)/4294967296}var Fp,Ip,Lp,Rp,zp=t((()=>{Y(),Q(),Fp={color:`#9fe8ff`,backgroundColor:null,count:24,size:.9,speed:.5,variety:.6,oil:!1,oilIntensity:1},Ip=`
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vViewDir = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`,Lp=`
precision highp float;

uniform vec3 uAccent;
uniform float uTime;
uniform float uPhase;
uniform float uVariety;
uniform float uOpacity;
uniform float uOil;
uniform float uOilIntensity;

varying vec3 vNormal;
varying vec3 vViewDir;

vec3 hsv2rgb(vec3 c) {
  vec3 p = abs(fract(vec3(c.x) + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
}

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  return 0.5 * valueNoise(p) +
         0.28 * valueNoise(p * 2.03 + vec2(7.4, -3.9)) +
         0.16 * valueNoise(p * 4.05 + vec2(-21.3, 13.7)) +
         0.06 * valueNoise(p * 8.1 + vec2(53.8, -27.1));
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewDir);
  float ndv = abs(dot(N, V));
  float fres = pow(1.0 - ndv, 2.0);

  vec3 L1 = normalize(vec3(0.55, 0.75, 0.6));
  vec3 L2 = normalize(vec3(-0.7, -0.35, 0.55));
  float spec1 = pow(max(dot(reflect(-L1, N), V), 0.0), 60.0);
  float spec2 = pow(max(dot(reflect(-L2, N), V), 0.0), 90.0);

  float drift = uTime * 0.5;
  float film = uPhase * 6.28318 + fres * 5.0 + drift;
  float hue = fract(0.62 + 0.42 * sin(film));
  vec3 tint = hsv2rgb(vec3(hue, 0.5, 1.0));
  tint = mix(tint, uAccent, clamp(0.55 + uVariety * 0.3, 0.0, 1.0));

  vec3 col = tint;
  if (uOil > 0.5) {
    // Oily interference swirls wrapped onto the sphere surface: an fbm thickness
    // field mapped through thin-film interference into the classic rainbow film.
    vec2 sp = vec2(N.x, N.z) * 1.5 + N.y * 0.9;
    float to = uTime * 0.25;
    vec2 q = vec2(fbm(sp * 1.7 + to * 0.15), fbm(sp * 1.7 - vec2(to * 0.12, -to * 0.1)));
    float d = fbm(sp * 2.6 + q * 0.9);
    float angle = 0.45 + 0.55 * ndv;
    float opd = (d * 3.0 + 0.5) * 2.0 * cos(angle) + fres * 3.0;
    vec3 lambda = vec3(0.66, 0.52, 0.44) * 1.12;
    vec3 oilFilm = 0.5 + 0.5 * cos(6.28318 * opd / lambda + 3.14159 * 0.5);
    col = mix(col, oilFilm, clamp(uOilIntensity, 0.0, 1.0));
  }
  col *= (0.18 + 0.82 * fres);
  col += (spec1 * 0.7 + spec2 * 0.55) * mix(vec3(1.0), uAccent, 0.3);

  float alpha = mix(0.05, 1.0, fres);
  alpha *= uOpacity;

  gl_FragColor = vec4(col * alpha, alpha);
}
`,Rp=class extends Z{constructor(e={}){super({...Fp,...e}),this.pointer={x:0,y:0}}onResize(e,t){this.frameCamera(),this.buildField()}frameCamera(){let e=this.camera.fov*Math.PI/180;this.halfH=this.height/2*1.06,this.camDist=this.halfH/Math.tan(e/2),this.camera.position.set(0,0,this.camDist),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}disposeGroup(){this.group&&=(this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())}),null),this.materials=[]}buildField(){if(this.disposeGroup(),!this.width||!this.height)return;let e=X(this.options.color);e&&(this.accent=e);let t=P.clamp(Math.round(this.options.count),6,60);this.currentCount=t,this.sizeFactor=P.clamp(this.options.size,.3,1.6);let n=this.halfH*2,r=n*(this.width/this.height)*1.15,i=n*1.15,a=this.camDist*.45,o=this.camDist*.3,s=this.halfH*.055;this.basePos=new Float32Array(t*3),this.radius=new Float32Array(t),this.phase=new Float32Array(t),this.bobPhase=new Float32Array(t),this.bobFreq=new Float32Array(t),this.bobAmp=new Float32Array(t),this.riseSpeed=new Float32Array(t),this.driftX=new Float32Array(t),this.xOffset=new Float32Array(t),this.yOffset=new Float32Array(t),this.spanX=r,this.spanY=i;let c=new Ws(1,32,24);for(let e=0;e<t;e++){let t=(Pp(e+100)-.5)*r,n=(Pp(e+200)-.5)*i,c=a+(Pp(e+300)-.5)*2*o;this.basePos[e*3]=t,this.basePos[e*3+1]=n,this.basePos[e*3+2]=c,this.radius[e]=(.45+Pp(e+400)*1.1)*s*this.sizeFactor,this.phase[e]=Pp(e+500),this.bobPhase[e]=Pp(e+600)*Math.PI*2,this.bobFreq[e]=.3+Pp(e+700)*.7,this.bobAmp[e]=(.2+Pp(e+800)*.5)*this.halfH*.06,this.riseSpeed[e]=(.02+Pp(e+900)*.05)*this.halfH,this.driftX[e]=(Pp(e+950)-.5)*.02*this.halfH}this.geometry=c,this.materials=[],this.meshes=[];let l=new No;this.group=l;let u=this.options.backgroundColor==null?.75:.9,d=P.clamp(this.options.variety,0,1);for(let e=0;e<t;e++){let t=new G({uniforms:{uAccent:{value:(this.accent||new B(10479871)).clone()},uTime:{value:0},uPhase:{value:this.phase[e]},uVariety:{value:d},uOpacity:{value:u},uOil:{value:0},uOilIntensity:{value:1}},vertexShader:Ip,fragmentShader:Lp,transparent:!0,depthWrite:!1,side:2}),n=new W(c,t);n.position.set(this.basePos[e*3],this.basePos[e*3+1],this.basePos[e*3+2]);let r=this.radius[e];n.scale.set(r,r,r),n.frustumCulled=!1,l.add(n),this.materials.push(t),this.meshes.push(n)}this.scene.add(l),this.updateOptions()}onFrame(e,t){if(this.pointer.x+=(this.mouse.x-.5-this.pointer.x)*Math.min(e*2,1),this.pointer.y+=(.5-this.mouse.y-this.pointer.y)*Math.min(e*2,1),this.camDist){let t=this.camDist*.16*this.pointer.x,n=this.camDist*.16*this.pointer.y;this.camera.position.x+=(t-this.camera.position.x)*Math.min(e*2,1),this.camera.position.y+=(n-this.camera.position.y)*Math.min(e*2,1),this.camera.lookAt(0,0,0)}if(!this.meshes)return;let n=P.clamp(this.options.speed,0,1.5),r=.35+.65*n,i=this.spanY,a=i/2;for(let o=0;o<this.currentCount;o++){let s=this.meshes[o];this.xOffset[o]+=this.driftX[o]*n*e,this.yOffset[o]+=this.riseSpeed[o]*n*e;let c=this.basePos[o*3+1]+this.yOffset[o]+Math.sin(t*this.bobFreq[o]+this.bobPhase[o])*this.bobAmp[o]*r;c>a+this.radius[o]&&(this.yOffset[o]-=i,this.basePos[o*3]=(Pp(o*31+7)-.5)*this.spanX,this.xOffset[o]=0,c-=i),s.position.set(this.basePos[o*3]+this.xOffset[o],c,this.basePos[o*3+2]),this.materials[o]&&(this.materials[o].uniforms.uTime.value=t)}}updateOptions(){let e=X(this.options.color);e&&(this.accent=e);let t=P.clamp(Math.round(this.options.count),6,60),n=P.clamp(this.options.size,.3,1.6);if((t!==this.currentCount||n!==this.sizeFactor)&&this.width&&this.height){this.buildField();return}if(!this.materials.length)return;let r=P.clamp(this.options.variety,0,1),i=this.options.backgroundColor==null?.75:.9,a=+(this.options.oil===`on`||this.options.oil===!0),o=P.clamp(Number(this.options.oilIntensity)||0,0,2);for(let e of this.materials){let t=e.uniforms;t.uAccent.value.copy(this.accent),t.uVariety.value=r,t.uOpacity.value=i,t.uOil.value=a,t.uOilIntensity.value=o}}}})),$,Bp=t((()=>{vu(),xu(),Tu(),Ou(),Nu(),Ru(),Gu(),Ju(),$u(),id(),fd(),_d(),wd(),Ad(),Fd(),Bd(),qd(),ef(),uf(),vf(),Tf(),Af(),Kf(),np(),pp(),Op(),Np(),zp(),$={Grid(e){return new _u(e)},Waves(e){return new bu(e)},Prism(e){return new wu(e)},Mandala(e){return new Du(e)},HexFlow(e){return new Mu(e)},Tesseract(e){return new Lu(e)},Gyroid(e){return new Wu(e)},Horizon(e){return new qu(e)},Fade(e){return new Qu(e)},Flash(e){return new rd(e)},Bloom(e){return new dd(e)},Clouds(e){return new gd(e)},Tide(e){return new Cd(e)},Fireflies(e){return new kd(e)},Harmonic(e){return new Pd(e)},Aurora(e){return new zd(e)},Silk(e){return new Kd(e)},Shapes(e){return new $d(e)},Starfall(e){return new lf(e)},Hyperspace(e){return new _f(e)},Trail(e){return new wf(e)},Nebula(e){return new kf(e)},BlackHole(e){return new Gf(e)},Galaxy(e){return new tp(e)},GalaxyCluster(e){return new fp(e)},Abyss(e){return new Dp(e)},Iridescence(e){return new Mp(e)},Bubbles(e){return new Rp(e)}}}));function Vp(e){return Hp[e]||Hp.grid}var Hp,Up=t((()=>{Bp(),e(),Hp={grid:{label:`Grid`,call:`Seer.Grid`,file:`seer.grid.min.js`,create:e=>$.Grid(e),color:`#58a8fe`,backgroundColor:`#000000`,params:[{id:`layout`,key:`layout`,label:`Orientation`,type:`choice`,default:`front`,options:[{value:`front`,label:`Front`},{value:`floor`,label:`Floor`}],hint:`Front faces the camera; Floor lays the constellation out as a receding ground plane.`},{id:`density`,key:`numDots`,label:`Density`,min:40,max:400,step:10,default:150,precision:0,hint:`How tightly the points are packed, does not change the size.`},{id:`dotsize`,key:`dotSize`,label:`Dot size`,min:1,max:8,step:.2,default:2,precision:2},{id:`lines`,key:`linkDistance`,label:`Amount of lines`,min:1,max:3.5,step:.1,default:2,precision:2},{id:`spread`,key:`spread`,label:`Spread`,min:.5,max:2,step:.05,default:1.2,precision:2,hint:`How big the constellation is. Higher = bigger.`},{id:`fieldsize`,key:`fieldSize`,label:`Field size`,min:1,max:2.5,step:.05,default:2,precision:2,hint:`Expands the generated field beyond the viewport without enlarging the dots.`}]},waves:{label:`Waves`,call:`Seer.Waves`,file:`seer.waves.min.js`,create:e=>$.Waves(e),color:`#005494`,backgroundColor:`#000000`,params:[{id:`style`,key:`style`,label:`Style`,type:`choice`,default:`grid`,options:[{value:`grid`,label:`Grid`},{value:`surface`,label:`Surface`}],hint:`Grid renders the wave as a glowing wire lattice; Surface keeps the smooth filled sheet.`},{id:`waveheight`,key:`waveHeight`,label:`Wave height`,min:10,max:150,step:5,default:65,precision:0},{id:`speed`,key:`speed`,label:`Speed`,min:.2,max:2,step:.1,default:.5,precision:2},{id:`spread`,key:`spread`,label:`Spread`,min:.5,max:2.5,step:.05,default:1,precision:2,hint:`How big the wave area is. Higher = the field extends further beyond the screen.`},{id:`focusx`,key:`focusX`,label:`Focus X`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the center of the wave field sideways.`},{id:`focusy`,key:`focusY`,label:`Focus Y`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the center of the wave field up and down.`},{id:`fog`,key:`fog`,label:`Fog`,min:0,max:1,step:.01,default:1,precision:2,hint:`How strongly distant waves dissolve into the background.`}]},galaxy:{label:`Galaxy`,call:`Seer.Galaxy`,file:`seer.galaxy.min.js`,create:e=>$.Galaxy(e),color:`#8fc4ff`,backgroundColor:`#000000`,params:[{id:`tilt`,key:`tilt`,label:`Orientation`,min:0,max:1,step:.01,default:.62,precision:2,hint:`How steeply the galaxy is viewed. 0 = edge-on, 1 = face-on.`},{id:`size`,key:`size`,label:`Galaxy size`,min:.5,max:2,step:.05,default:1,precision:2,hint:`How large the galaxy appears on screen.`},{id:`arms`,key:`arms`,label:`Arms`,min:2,max:4,step:1,default:3,precision:0,hint:`How many spiral arms wind around the core.`},{id:`spiral`,key:`spiral`,label:`Spiral`,min:0,max:1,step:.01,default:.65,precision:2,hint:`How tightly the arms wind. Higher = tighter, more defined classic spiral.`},{id:`density`,key:`density`,label:`Star density`,min:3e3,max:4e4,step:1e3,default:15e3,precision:0,hint:`How many stars make up the galaxy. Higher = richer, heavier.`},{id:`starsize`,key:`starSize`,label:`Star size`,min:.4,max:2.5,step:.05,default:1,precision:2,hint:`How large each star sprite appears.`},{id:`spin`,key:`speed`,label:`Spin`,min:0,max:.8,step:.01,default:.12,precision:2,hint:`How fast the galaxy rotates.`},{id:`coreglow`,key:`coreGlow`,label:`Core glow`,min:.2,max:2,step:.05,default:1,precision:2,hint:`How brightly the central bulge burns.`},{id:`dust`,key:`dust`,label:`Dust`,min:0,max:1,step:.01,default:.5,precision:2,hint:`Dark dust lanes dim and redden stars near the galactic plane.`},{id:`bgstars`,key:`backgroundStars`,label:`Background stars`,min:0,max:1,step:.01,default:1,precision:2,hint:`How visible the distant starfield behind the galaxy is.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.3,step:.01,default:.08,precision:2,hint:`How strongly the camera drifts with your pointer.`}]},galaxycluster:{label:`Galaxy Cluster`,call:`Seer.GalaxyCluster`,file:`seer.galaxy-cluster.min.js`,create:e=>$.GalaxyCluster(e),color:`#8fc4ff`,backgroundColor:`#000000`,params:[{id:`count`,key:`count`,label:`Galaxies`,min:3,max:8,step:1,default:6,precision:0,hint:`How many galaxies drift in the cluster. More = richer, heavier.`},{id:`size`,key:`size`,label:`Cluster size`,min:.5,max:2,step:.05,default:1,precision:2,hint:`How large the whole cluster appears on screen.`},{id:`clusterdensity`,key:`clusterDensity`,label:`Density`,min:.5,max:2,step:.05,default:1,precision:2,hint:`How close the galaxies sit to each other. Lower = spread far apart, higher = packed together.`},{id:`density`,key:`density`,label:`Star density`,min:2e3,max:8e3,step:500,default:5e3,precision:0,hint:`How many stars make up each galaxy. Per-galaxy, so the total multiplies by the galaxy count.`},{id:`spiral`,key:`spiral`,label:`Spiral`,min:0,max:1,step:.01,default:.65,precision:2,hint:`How tightly the arms wind. Higher = tighter, more defined spiral.`},{id:`starsize`,key:`starSize`,label:`Star size`,min:.4,max:2.5,step:.05,default:1,precision:2,hint:`How large each star sprite appears.`},{id:`spin`,key:`speed`,label:`Spin`,min:0,max:.8,step:.01,default:.12,precision:2,hint:`How fast each galaxy rotates on its own axis.`},{id:`coreglow`,key:`coreGlow`,label:`Core glow`,min:.2,max:2,step:.05,default:1,precision:2,hint:`How brightly each central bulge burns.`},{id:`variety`,key:`colorVariety`,label:`Color variety`,min:0,max:1,step:.01,default:.6,precision:2,hint:`How far apart the galaxy hues are spread across the cluster.`},{id:`bgstars`,key:`backgroundStars`,label:`Background stars`,min:0,max:1,step:.01,default:1,precision:2,hint:`How visible the distant starfield behind the cluster is.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.3,step:.01,default:.08,precision:2,hint:`How strongly the camera drifts with your pointer.`},{id:`focusx`,key:`focusX`,label:`Focus X`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Shifts the whole cluster sideways.`},{id:`focusy`,key:`focusY`,label:`Focus Y`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Shifts the whole cluster up and down.`},{id:`focusz`,key:`focusZ`,label:`Focus Z`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the whole cluster forward and back.`}]},prism:{label:`Prism`,call:`Seer.Prism`,file:`seer.prism.min.js`,create:e=>$.Prism(e),color:`#130019`,backgroundColor:`#000000`,params:[{id:`detail`,key:`cellSize`,label:`Detail`,min:22,max:64,step:1,default:38,precision:0,hint:`Smaller cells create more facets.`},{id:`height`,key:`amplitude`,label:`Wave height`,min:10,max:130,step:5,default:45,precision:0},{id:`speed`,key:`speed`,label:`Speed`,min:.1,max:2,step:.05,default:.5,precision:2}]},mandala:{label:`Mandala`,call:`Seer.Mandala`,file:`seer.mandala.min.js`,create:e=>$.Mandala(e),interactions:!1,color:`#ffffff`,backgroundColor:`#000000`,params:[{id:`rings`,key:`rings`,label:`Rings`,min:5,max:20,step:1,default:6,precision:0},{id:`segments`,key:`segments`,label:`Segments`,min:24,max:120,step:4,default:80,precision:0},{id:`twist`,key:`twist`,label:`Twist`,min:0,max:.45,step:.01,default:0,precision:2},{id:`speed`,key:`speed`,label:`Speed`,min:.05,max:1.5,step:.05,default:.5,precision:2}]},hexflow:{label:`Hex Flow`,call:`Seer.HexFlow`,file:`seer.hexflow.min.js`,create:e=>$.HexFlow(e),color:`#85ffc6`,backgroundColor:`#000000`,params:[{id:`cellsize`,key:`cellSize`,label:`Cell size`,min:18,max:64,step:1,default:32,precision:0},{id:`distortion`,key:`distortion`,label:`Distortion`,min:0,max:1.5,step:.05,default:0,precision:2},{id:`speed`,key:`speed`,label:`Speed`,min:.05,max:2,step:.05,default:1.5,precision:2}]},tesseract:{label:`Tesseract`,call:`Seer.Tesseract`,file:`seer.tesseract.min.js`,create:e=>$.Tesseract(e),color:`#cabdff`,backgroundColor:`#000000`,params:[{id:`size`,key:`size`,label:`Size`,min:.35,max:1.2,step:.01,default:.6,precision:2},{id:`depth`,key:`depth`,label:`4D Perspective`,min:2.6,max:6,step:.1,default:4,precision:2,hint:`How far the 4D projection viewpoint sits from the tesseract. Higher = flatter projection. This controls perspective, not focal blur.`},{id:`layers`,key:`layers`,label:`Layers`,min:1,max:4,step:1,default:3,precision:0},{id:`speed`,key:`speed`,label:`Speed`,min:.05,max:1.5,step:.05,default:.5,precision:2}]},gyroid:{label:`Gyroid`,call:`Seer.Gyroid`,file:`seer.gyroid.min.js`,create:e=>$.Gyroid(e),color:`#00e07f`,backgroundColor:`#000000`,params:[{id:`resolution`,key:`cellSize`,label:`Resolution`,min:14,max:36,step:1,default:14,precision:0,hint:`Smaller cells create smoother, denser contours.`},{id:`density`,key:`density`,label:`Density`,min:2,max:7,step:.1,default:3,precision:2},{id:`isolevel`,key:`isoLevel`,label:`Iso level`,min:-.6,max:.6,step:.02,default:0,precision:2},{id:`speed`,key:`speed`,label:`Speed`,min:.05,max:1.2,step:.05,default:1,precision:2},{id:`fieldsize`,key:`fieldSize`,label:`Field size`,min:1,max:2.5,step:.05,default:1.2,precision:2,hint:`Expands the generated field beyond the viewport without scaling the pattern.`}]},horizon:{label:`Horizon`,call:`Seer.Horizon`,file:`seer.horizon.min.js`,create:e=>$.Horizon(e),interactions:!1,color:`#ff00f7`,backgroundColor:`#000000`,params:[{id:`cellsize`,key:`cellSize`,label:`Grid size`,min:10,max:80,step:1,default:40,precision:0,hint:`The spacing between grid lines.`},{id:`glow`,key:`intensity`,label:`Glow`,min:.1,max:1.2,step:.01,default:1.2,precision:2,hint:`How bright the lines are.`},{id:`speed`,key:`speed`,label:`Speed`,min:0,max:1,step:.01,default:.05,precision:2,hint:`How fast the grid flows forward.`},{id:`fieldsize`,key:`fieldSize`,label:`Field size`,min:1,max:3,step:.05,default:1.25,precision:2,hint:`How far the grid extends sideways and ahead, hides the plane edges.`},{id:`fog`,key:`fog`,label:`Fog`,min:0,max:1,step:.01,default:1,precision:2,hint:`How strongly distant lines dissolve into the background.`}]},fade:{label:`Fade`,call:`Seer.Fade`,file:`seer.fade.min.js`,create:e=>$.Fade(e),color:`#ffbb00`,backgroundColor:`#000000`,params:[{id:`intensity`,key:`intensity`,label:`Intensity`,min:.1,max:.85,step:.01,default:.5,precision:2,hint:`How visible the color wash is.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.6,step:.01,default:.3,precision:2,hint:`The rate of ambient movement.`},{id:`spread`,key:`spread`,label:`Spread`,min:.35,max:1.2,step:.01,default:.5,precision:2,hint:`How broadly the faded light reaches across the screen.`}]},flash:{label:`Flash`,call:`Seer.Flash`,file:`seer.flash.min.js`,create:e=>$.Flash(e),color:`#9e86fe`,backgroundColor:`#000000`,params:[{id:`brightness`,key:`brightness`,label:`Brightness`,min:.05,max:.7,step:.01,default:.7,precision:2,hint:`The maximum strength of each sweep.`},{id:`width`,key:`width`,label:`Beam width`,min:.08,max:.65,step:.01,default:.25,precision:2,hint:`Whether sweeps feel like a fine sheen or a broad wash.`},{id:`speed`,key:`speed`,label:`Speed`,min:.03,max:2,step:.01,default:.4,precision:2,hint:`The travel rate of the sweeps.`}]},bloom:{label:`Bloom`,call:`Seer.Bloom`,file:`seer.bloom.min.js`,create:e=>$.Bloom(e),color:`#8f0000`,backgroundColor:`#000000`,params:[{id:`intensity`,key:`intensity`,label:`Intensity`,min:.08,max:.8,step:.01,default:.3,precision:2,hint:`How bright the soft light is.`},{id:`size`,key:`size`,label:`Bloom size`,min:.3,max:1.4,step:.01,default:.5,precision:2,hint:`The radius of each glow.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.5,step:.01,default:.5,precision:2,hint:`How quickly the glows breathe and drift.`},{id:`count`,key:`count`,label:`Blooms`,min:1,max:8,step:1,default:3,precision:0,hint:`How many distinct glows appear.`},{id:`variety`,key:`variety`,label:`Color variety`,min:0,max:1,step:.01,default:.5,precision:2,hint:`How far apart the bloom hues are spread.`},{id:`depth`,key:`depth`,label:`Depth`,min:0,max:1,step:.01,default:0,precision:2,hint:`How far the glows separate into near and far layers. Higher = stronger parallax and blur on out-of-focus glows.`}]},clouds:{label:`Clouds`,call:`Seer.Clouds`,file:`seer.clouds.min.js`,create:e=>$.Clouds(e),color:`#ffffff`,backgroundColor:`#000000`,params:[{id:`coverage`,key:`coverage`,label:`Coverage`,min:.15,max:.85,step:.01,default:.25,precision:2,hint:`How much of the sky the cloud field fills.`},{id:`softness`,key:`softness`,label:`Softness`,min:.05,max:.42,step:.01,default:.15,precision:2,hint:`How blurred the cloud edges are.`},{id:`scale`,key:`scale`,label:`Scale`,min:.45,max:3,step:.01,default:1.5,precision:2,hint:`How large the cloud banks appear.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.35,step:.01,default:.15,precision:2,hint:`The rate of atmospheric drift.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.08,max:.75,step:.01,default:.75,precision:2,hint:`How visible the clouds are.`},{id:`depth`,key:`depth`,label:`Depth`,min:0,max:1,step:.01,default:1,precision:2,hint:`How far the cloud banks separate into near, mid and distant layers. Higher = more parallax and softer far and near banks.`}]},tide:{label:`Tide`,call:`Seer.Tide`,file:`seer.tide.min.js`,create:e=>$.Tide(e),color:`#2e005c`,backgroundColor:`#000000`,params:[{id:`layers`,key:`layers`,label:`Layers`,min:1,max:6,step:1,default:3,precision:0,hint:`How many translucent shoreline bands stack up.`},{id:`amplitude`,key:`amplitude`,label:`Amplitude`,min:.015,max:.4,step:.001,default:.16,precision:3,hint:`How far each band's edge rises and falls.`},{id:`softness`,key:`softness`,label:`Softness`,min:.004,max:.065,step:.001,default:.03,precision:3,hint:`How soft each band's top edge is.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.38,step:.01,default:.25,precision:2,hint:`The rate of the gentle horizontal sway.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.1,max:.78,step:.01,default:.25,precision:2,hint:`How strong the band colors are.`},{id:`crest`,key:`crestGlow`,label:`Crest glow`,min:0,max:1.5,step:.01,default:.5,precision:2,hint:`How bright the lit rim on each wave edge is.`},{id:`depth`,key:`depth`,label:`Depth`,min:0,max:1,step:.01,default:1,precision:2,hint:`How far the wave bands separate into near and far layers. Higher = more parallax and softer out-of-focus crests.`}]},fireflies:{label:`Fireflies`,call:`Seer.Fireflies`,file:`seer.fireflies.min.js`,create:e=>$.Fireflies(e),color:`#ffc800`,backgroundColor:`#000000`,params:[{id:`count`,key:`count`,label:`Count`,min:8,max:100,step:1,default:60,precision:0,hint:`How many fireflies are on screen.`},{id:`glowsize`,key:`glowSize`,label:`Glow size`,min:1,max:7,step:.1,default:3.5,precision:2,hint:`The radius of each glow.`},{id:`wander`,key:`wander`,label:`Wander`,min:4,max:90,step:1,default:50,precision:0,hint:`How far each firefly drifts while hovering.`},{id:`speed`,key:`speed`,label:`Speed`,min:.03,max:2,step:.01,default:.5,precision:2,hint:`The pace of the hovering motion.`},{id:`twinkle`,key:`twinkle`,label:`Twinkle`,min:0,max:2,step:.01,default:1,precision:2,hint:`How much each light pulses in brightness.`},{id:`variety`,key:`variety`,label:`Color variety`,min:0,max:1,step:.01,default:1,precision:2,hint:`How far apart the firefly hues are spread.`},{id:`depth`,key:`depth`,label:`Depth`,min:.2,max:1.2,step:.01,default:1,precision:2,hint:`How far the lights spread back and forth in space. Higher = wider spacing, more parallax, and stronger blur on out-of-focus lights.`}]},harmonic:{label:`Harmonic`,call:`Seer.Harmonic`,file:`seer.harmonic.min.js`,create:e=>$.Harmonic(e),color:`#ffadad`,backgroundColor:`#000000`,params:[{id:`mode`,key:`mode`,label:`Mode`,type:`choice`,default:`dual`,options:[{value:`dual`,label:`Dual`},{value:`single`,label:`Single`}],hint:`Dual renders both the near and far wave fields for a layered two-effect look; Single shows only the focal wave field.`},{id:`density`,key:`density`,label:`Density`,min:1,max:10,step:.1,default:8,precision:1,hint:`How many glowing wave bands are visible.`},{id:`warp`,key:`warp`,label:`Warp`,min:0,max:1.2,step:.01,default:.25,precision:2,hint:`How much the wave field folds and bends organically.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.6,step:.01,default:.15,precision:2,hint:`The rate the interference pattern drifts.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.08,max:.8,step:.01,default:.7,precision:2,hint:`How bright the glowing contours are.`},{id:`glow`,key:`glow`,label:`Glow`,min:0,max:3,step:.01,default:1.5,precision:2,hint:`How wide and soft the light halo around each band is.`},{id:`depth`,key:`depth`,label:`Depth`,min:0,max:1,step:.01,default:1,precision:2,hint:`How strongly near and far wave layers separate and blur while drifting.`},{id:`originx`,key:`originX`,label:`Focus X`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the center of the wave field sideways.`},{id:`originy`,key:`originY`,label:`Focus Y`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the center of the wave field up and down.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.2,step:.01,default:.1,precision:2,hint:`How strongly the waves react to your pointer.`}]},aurora:{label:`Aurora`,call:`Seer.Aurora`,file:`seer.aurora.min.js`,create:e=>$.Aurora(e),interactions:!1,color:`#85ffca`,backgroundColor:`#000000`,params:[{id:`layers`,key:`layers`,label:`Layers`,min:2,max:5,step:1,default:3,precision:0,hint:`How many translucent curtains stack toward the viewer.`},{id:`height`,key:`height`,label:`Height`,min:.05,max:.85,step:.01,default:.3,precision:2,hint:`Where the aurora sits vertically on screen.`},{id:`spread`,key:`spread`,label:`Spread`,min:.2,max:1.4,step:.01,default:.8,precision:2,hint:`How far the curtains reach up and down.`},{id:`folds`,key:`folds`,label:`Folds`,min:0,max:1.2,step:.01,default:.5,precision:2,hint:`How much the curtain edges ripple into vertical folds.`},{id:`speed`,key:`speed`,label:`Speed`,min:.01,max:.35,step:.01,default:.15,precision:2,hint:`The pace of the atmospheric drift.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.08,max:.8,step:.01,default:.5,precision:2,hint:`How visible the glow is.`},{id:`glow`,key:`glow`,label:`Glow`,min:0,max:1.5,step:.01,default:.82,precision:2,hint:`How bright the lit rim on each curtain is.`},{id:`depth`,key:`depth`,label:`Depth`,min:0,max:1,step:.01,default:.5,precision:2,hint:`How far the curtains separate into near and far layers. Higher = more parallax and softer out-of-focus curtains.`}]},silk:{label:`Silk`,call:`Seer.Silk`,file:`seer.silk.min.js`,create:e=>$.Silk(e),interactions:!1,color:`#8000ff`,backgroundColor:`#000000`,params:[{id:`ribbons`,key:`ribbons`,label:`Ribbons`,min:1,max:6,step:1,default:4,precision:0,hint:`How many flowing bands cross the screen.`},{id:`width`,key:`width`,label:`Width`,min:.02,max:.42,step:.01,default:.06,precision:2,hint:`How thick each ribbon is.`},{id:`curl`,key:`curl`,label:`Curl`,min:0,max:2.5,step:.01,default:1.4,precision:2,hint:`How much the ribbons bend and fold.`},{id:`angle`,key:`angle`,label:`Angle`,min:-1,max:1,step:.01,default:0,precision:2,hint:`The diagonal direction the ribbons flow in.`},{id:`focusx`,key:`focusX`,label:`Focus X`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Shifts the ribbons sideways across the screen.`},{id:`focusy`,key:`focusY`,label:`Focus Y`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Shifts the ribbons up and down across the screen.`},{id:`speed`,key:`speed`,label:`Speed`,min:.01,max:.4,step:.01,default:.1,precision:2,hint:`How fast the fabric-like motion moves.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.08,max:.8,step:.01,default:.5,precision:2,hint:`How strong the ribbon colors are.`},{id:`sheen`,key:`sheen`,label:`Sheen`,min:0,max:1.5,step:.01,default:.8,precision:2,hint:`The narrow satin highlight running along each ribbon.`},{id:`depth`,key:`depth`,label:`Depth`,min:0,max:1,step:.01,default:1,precision:2,hint:`How far the ribbons separate into near and far layers. Higher = more depth spread and softer out-of-focus ribbons.`}]},shapes:{label:`Shapes`,call:`Seer.Shapes`,file:`seer.shapes.min.js`,create:e=>$.Shapes(e),color:`#ffad82`,backgroundColor:`#120c16`,params:[{id:`shape`,key:`shape`,label:`Shape`,type:`choice`,default:`square`,options:[{value:`square`,label:`Square`},{value:`triangle`,label:`Triangle`},{value:`sphere`,label:`Sphere`}],hint:`The kind of object floating in the field.`},{id:`count`,key:`count`,label:`Count`,min:6,max:52,step:1,default:35,precision:0,hint:`How many floating shapes are in the field.`},{id:`size`,key:`size`,label:`Size`,min:.2,max:1.3,step:.01,default:.8,precision:2,hint:`The overall scale of each shape.`},{id:`spread`,key:`spread`,label:`Spread`,min:.2,max:2.4,step:.01,default:.6,precision:2,hint:`How far the field extends sideways and vertically.`},{id:`depth`,key:`depth`,label:`Depth`,min:.2,max:1.6,step:.01,default:1.2,precision:2,hint:`How much the shapes spread back in space. Higher = more parallax and out-of-focus blur in front of and behind the focus plane.`},{id:`focusx`,key:`focusX`,label:`Focus X`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Shifts the whole field sideways.`},{id:`focusy`,key:`focusY`,label:`Focus Y`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Shifts the whole field up and down.`},{id:`tilt`,key:`tilt`,label:`Tilt`,min:0,max:1,step:.01,default:0,precision:2,hint:`How varied the resting rotation of each shape is.`},{id:`speed`,key:`speed`,label:`Speed`,min:0,max:1.5,step:.01,default:.5,precision:2,hint:`How quickly the shapes rotate and bob.`},{id:`glow`,key:`glow`,label:`Glow`,min:0,max:1.2,step:.01,default:.5,precision:2,hint:`How strongly the accent light picks out each shape.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.12,step:.005,default:.05,precision:3,hint:`How strongly the scene shifts with your pointer.`}]},starfall:{label:`Starfall`,call:`Seer.Starfall`,file:`seer.starfall.min.js`,create:e=>$.Starfall(e),color:`#dcecff`,backgroundColor:`#050814`,params:[{id:`count`,key:`count`,label:`Count`,min:20,max:400,step:1,default:120,precision:0,hint:`How many stars are on screen.`},{id:`size`,key:`size`,label:`Star size`,min:.5,max:12,step:.1,default:3,precision:2,hint:`The diameter of each falling star.`},{id:`angle`,key:`angle`,label:`Fall angle`,min:0,max:360,step:1,default:200,precision:0,hint:`The direction the stars fall, in degrees.`},{id:`meteortrail`,key:`meteorTrail`,label:`Meteor trails`,type:`choice`,default:`on`,options:[{value:`off`,label:`Off`},{value:`on`,label:`On`}],hint:`Adds a fading streak line behind every falling star.`},{id:`traillength`,key:`trailLength`,label:`Trail length`,min:2,max:119,step:1,default:60,precision:0,hint:`How many line segments each meteor streak contains. Higher = longer streaks.`},{id:`trailduration`,key:`trailDuration`,label:`Trail duration`,min:.2,max:2,step:.05,default:.8,precision:2,hint:`How long, in seconds, each stretch of trail lingers before fading away.`},{id:`speed`,key:`speed`,label:`Speed`,min:.05,max:2,step:.05,default:1.5,precision:2,hint:`How fast the stars fall.`}]},hyperspace:{label:`Hyperspace`,call:`Seer.Hyperspace`,file:`seer.hyperspace.min.js`,create:e=>$.Hyperspace(e),color:`#bcd9ff`,backgroundColor:`#05050f`,params:[{id:`mode`,key:`mode`,label:`Mode`,type:`choice`,default:`warp`,options:[{value:`warp`,label:`Warp`},{value:`constant`,label:`Constant`}],hint:`Warp auto-cycles between a calm starfield and the lightspeed streak phase. Constant keeps the tunnel at full warp forever.`},{id:`count`,key:`count`,label:`Count`,min:120,max:600,step:5,default:260,precision:0,hint:`How many stars are in the tunnel.`},{id:`speed`,key:`speed`,label:`Speed`,min:.2,max:3,step:.05,default:1,precision:2,hint:`How fast the stars travel through the tunnel.`},{id:`streak`,key:`streak`,label:`Streak length`,min:0,max:4,step:.05,default:1.6,precision:2,hint:`How long the light streaks stretch behind each star. 0 shows plain stars with no streaks.`},{id:`depth`,key:`depth`,label:`Depth`,min:.3,max:1.6,step:.01,default:1,precision:2,hint:`How much the stars spread between slow, faint and fast, bright layers. Higher = more variation.`},{id:`size`,key:`size`,label:`Star size`,min:.5,max:8,step:.1,default:2,precision:2,hint:`The diameter of each star head.`},{id:`cyclespeed`,key:`cycleSpeed`,label:`Warp cycle speed`,min:.25,max:2,step:.05,default:1,precision:2,hint:`How quickly the calm-to-warp loop plays out (Warp mode only).`},{id:`focusx`,key:`focusX`,label:`Focus X`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the center of the starfield sideways, shifting the direction of travel.`},{id:`focusy`,key:`focusY`,label:`Focus Y`,min:-1,max:1,step:.01,default:0,precision:2,hint:`Moves the center of the starfield up and down, shifting the direction of travel.`},{id:`variety`,key:`variety`,label:`Color variety`,min:0,max:1,step:.01,default:.4,precision:2,hint:`How far apart the star head hues are spread.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.2,step:.005,default:.08,precision:3,hint:`How strongly the tunnel shifts with your pointer.`}]},trail:{label:`Trail`,call:`Seer.Trail`,file:`seer.trail.min.js`,create:e=>$.Trail(e),color:`#8fd3ff`,backgroundColor:`#080b14`,params:[{id:`style`,key:`style`,label:`Style`,type:`choice`,default:`glow`,options:[{value:`glow`,label:`Glow`},{value:`smoke`,label:`Smoke`},{value:`flame`,label:`Flame`}],hint:`How the trail behaves as it follows your pointer.`},{id:`size`,key:`size`,label:`Size`,min:12,max:120,step:1,default:30,precision:0,hint:`The radius of each trail particle.`},{id:`length`,key:`length`,label:`Trail length`,min:40,max:420,step:1,default:200,precision:0,hint:`The visible distance, in pixels, behind your pointer.`},{id:`fade`,key:`fadeTime`,label:`Trail duration`,min:.2,max:5,step:.1,default:1.5,precision:1,hint:`How long, in seconds, the trail takes to disappear after you stop moving.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.1,max:1.5,step:.01,default:1,precision:2,hint:`How bright the trail is.`}]},nebula:{label:`Nebula`,call:`Seer.Nebula`,file:`seer.nebula.min.js`,create:e=>$.Nebula(e),interactions:!1,color:`#9f7cff`,backgroundColor:`#070510`,params:[{id:`density`,key:`density`,label:`Density`,min:.15,max:.9,step:.01,default:.55,precision:2,hint:`How much of the sky the gas fills.`},{id:`scale`,key:`scale`,label:`Scale`,min:.4,max:3,step:.01,default:1.1,precision:2,hint:`How large the nebula features appear.`},{id:`turbulence`,key:`turbulence`,label:`Turbulence`,min:0,max:1.5,step:.01,default:.7,precision:2,hint:`How much the gas folds into filaments and wisps.`},{id:`speed`,key:`speed`,label:`Speed`,min:.01,max:.4,step:.01,default:.12,precision:2,hint:`The pace of the slow atmospheric drift.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.08,max:1,step:.01,default:.75,precision:2,hint:`How visible the nebula glow is.`}]},blackhole:{label:`Black Hole`,call:`Seer.BlackHole`,file:`seer.blackhole.min.js`,create:e=>$.BlackHole(e),color:`#ff9b5c`,backgroundColor:`#030305`,params:[{id:`bhsize`,key:`blackHoleSize`,label:`Black hole size`,min:.05,max:.32,step:.01,default:.16,precision:2,hint:`The radius of the dark event horizon. The camera dollies in and out to reach it, so a bigger hole also means more dramatic lensing.`},{id:`diskradius`,key:`diskRadius`,label:`Disk radius`,min:.16,max:.8,step:.01,default:.42,precision:2,hint:`How far the accretion disk extends from the core.`},{id:`diskthickness`,key:`diskThickness`,label:`Disk thickness`,min:.03,max:.36,step:.01,default:.16,precision:2,hint:`How wide the disk is across, and how far the gas puffs above and below its plane.`},{id:`tilt`,key:`tilt`,label:`Tilt`,min:0,max:1,step:.01,default:.42,precision:2,hint:`The viewing angle. Near zero is edge-on, higher looks down onto the disk.`},{id:`spin`,key:`spin`,label:`Spin`,min:0,max:2,step:.01,default:.6,precision:2,hint:`How fast the gas and debris orbit. Inner material orbits faster, as it should.`},{id:`lensing`,key:`lensing`,label:`Lensing`,min:0,max:2,step:.01,default:1,precision:2,hint:`How strongly gravity bends light. At zero the rays travel straight and the disk stops wrapping over the shadow.`},{id:`doppler`,key:`doppler`,label:`Doppler beaming`,min:0,max:1,step:.01,default:.7,precision:2,hint:`How much brighter the side of the disk rotating toward you appears.`},{id:`brightness`,key:`brightness`,label:`Disk brightness`,min:.2,max:2,step:.01,default:1,precision:2,hint:`The overall emission of the accretion disk.`},{id:`glow`,key:`glow`,label:`Glow`,min:0,max:2,step:.01,default:1,precision:2,hint:`Strength of the photon ring and the halo that fades outward from the horizon.`},{id:`stars`,key:`stars`,label:`Starfield`,min:0,max:1,step:.01,default:.6,precision:2,hint:`Brightness of the background sky that gets smeared into the Einstein ring.`},{id:`fadein`,key:`fadeIn`,label:`Fade in`,min:0,max:4,step:.1,default:1.4,precision:1,hint:`How long, in seconds, the whole scene takes to fade up and settle from its opening dolly.`},{id:`quality`,key:`quality`,label:`Quality`,type:`choice`,default:`medium`,options:[{value:`low`,label:`Low`},{value:`medium`,label:`Medium`},{value:`high`,label:`High`}],hint:`Raymarch step size. Low costs about 25% less than Medium and High about 60% more, for very little visible difference, so Low is close to free.`},{id:`resolution`,key:`resolution`,label:`Resolution`,min:.35,max:1,step:.05,default:.7,precision:2,hint:`Renders below display resolution and lets the browser upscale. This is the strongest cost control: halving it roughly halves GPU work. Below about 0.5 the starfield starts to shimmer.`},{id:`maxfps`,key:`maxFps`,label:`Max FPS`,min:12,max:120,step:1,default:30,precision:0,hint:`Frame cap. The image drifts slowly, so redrawing at full refresh rate is wasted work: at 30 on a 144Hz screen this skips about 79% of frames outright.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.12,step:.005,default:.05,precision:3,hint:`How much the camera orbits the hole with your pointer.`}]},abyss:{label:`Abyss`,call:`Seer.Abyss`,file:`seer.abyss.min.js`,create:e=>$.Abyss(e),color:`#57f0ff`,backgroundColor:`#010a10`,params:[{id:`depth`,key:`depth`,label:`Depth`,min:.15,max:1,step:.01,default:.6,precision:2,hint:`How murky the water is. Higher = thicker, faster-fading haze.`},{id:`shafts`,key:`shafts`,label:`Light shafts`,min:0,max:1.5,step:.01,default:.8,precision:2,hint:`How strongly the god rays break through the water column.`},{id:`caustics`,key:`caustics`,label:`Caustics`,min:0,max:1.2,step:.01,default:.5,precision:2,hint:`How much moving light-net pattern from the surface plays through the water.`},{id:`particles`,key:`particles`,label:`Marine snow`,min:0,max:1,step:.01,default:.5,precision:2,hint:`How much twinkling drifting sediment catches the light.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.4,step:.01,default:.15,precision:2,hint:`The pace of the water and caustic drift.`},{id:`brightness`,key:`brightness`,label:`Brightness`,min:.2,max:1.8,step:.01,default:1,precision:2,hint:`Overall luminance of the scattered light.`},{id:`fadein`,key:`fadeIn`,label:`Fade in`,min:0,max:4,step:.1,default:1.4,precision:1,hint:`How long, in seconds, the scene takes to fade up.`},{id:`quality`,key:`quality`,label:`Quality`,type:`choice`,default:`medium`,options:[{value:`low`,label:`Low`},{value:`medium`,label:`Medium`},{value:`high`,label:`High`}],hint:`March step budget. Higher = smoother volumetrics, more GPU time.`},{id:`resolution`,key:`resolution`,label:`Resolution`,min:.35,max:1,step:.05,default:.75,precision:2,hint:`Renders below display resolution and lets the browser upscale. The strongest cost control.`},{id:`maxfps`,key:`maxFps`,label:`Max FPS`,min:12,max:120,step:1,default:30,precision:0,hint:`Frame cap. The water sways slowly, so lower caps save most of the GPU work.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.15,step:.005,default:.05,precision:3,hint:`How much the camera sways and the beams shift with your pointer.`}]},iridescence:{label:`Iridescence`,call:`Seer.Iridescence`,file:`seer.iridescence.min.js`,create:e=>$.Iridescence(e),color:`#b98aff`,backgroundColor:`#0a0714`,params:[{id:`palette`,key:`palette`,label:`Palette`,type:`choice`,default:`holo`,options:[{value:`oil`,label:`Oil`},{value:`holo`,label:`Hologram`},{value:`pastel`,label:`Pastel`}],hint:`How the interference colors are tuned: a pure rainbow, one pulled toward your accent, or a soft white-lit pastel.`},{id:`thickness`,key:`thickness`,label:`Thickness`,min:.2,max:1.6,step:.01,default:.5,precision:2,hint:`The feature size of the film. Higher = larger, slower-moving color pools.`},{id:`flow`,key:`flow`,label:`Flow`,min:0,max:1.5,step:.01,default:.5,precision:2,hint:`How much the field curls and swirls into oily folds.`},{id:`speed`,key:`speed`,label:`Speed`,min:.02,max:.4,step:.01,default:.18,precision:2,hint:`The pace the film drifts.`},{id:`intensity`,key:`intensity`,label:`Intensity`,min:.1,max:1.2,step:.01,default:.7,precision:2,hint:`How vivid the interference colors are.`},{id:`sheen`,key:`sheen`,label:`Sheen`,min:0,max:1.5,step:.01,default:.5,precision:2,hint:`The bright wet highlight that moves across the film.`},{id:`variety`,key:`variety`,label:`Color variety`,min:0,max:1,step:.01,default:.5,precision:2,hint:`How widely the interference hues spread.`},{id:`mouse`,key:`mouseInfluence`,label:`Mouse influence`,min:0,max:.5,step:.01,default:.3,precision:2,hint:`How strongly the viewing angle (and the colors) shift with your pointer.`}]},bubbles:{label:`Bubbles`,call:`Seer.Bubbles`,file:`seer.bubbles.min.js`,create:e=>$.Bubbles(e),color:`#9fe8ff`,backgroundColor:`#06090f`,params:[{id:`amount`,key:`count`,label:`Amount`,min:6,max:60,step:1,default:24,precision:0,hint:`How many soap bubbles float in the field. Higher = busier, heavier.`},{id:`size`,key:`size`,label:`Size`,min:.3,max:1.6,step:.05,default:.9,precision:2,hint:`The overall scale of each bubble. Higher = larger, more translucent orbs.`},{id:`speed`,key:`speed`,label:`Drift speed`,min:0,max:1.5,step:.05,default:.5,precision:2,hint:`How quickly the bubbles rise and bob.`},{id:`variety`,key:`variety`,label:`Color variety`,min:0,max:1,step:.01,default:.6,precision:2,hint:`How far apart the soap-film hues are spread across the bubbles.`},{id:`oil`,key:`oil`,label:`Oil effect`,type:`choice`,default:`off`,options:[{value:`off`,label:`Off`},{value:`on`,label:`On`}],hint:`Layers the iridescent oil-slick rainbow from the Iridescence effect over every bubble surface.`},{id:`oilintensity`,key:`oilIntensity`,label:`Oil intensity`,min:0,max:2,step:.05,default:1,precision:2,hint:`How strong the rainbow interference film is on the bubbles (only visible with Oil effect On).`}]}}}));export{Bp as a,$ as i,Vp as n,Up as r,Hp as t};