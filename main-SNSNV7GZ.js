import{$ as ko,$a as rn,A as je,Aa as Ho,Ab as _t,B as To,Ba as $o,Bb as na,C as pt,Ca as Vo,Cb as mr,D as Be,Da as Go,Db as ia,E as Ji,Ea as Wo,Eb as Ee,F as Mo,Fa as qo,Fb as pr,G as Do,Ga as Xn,Gb as ra,H as ft,Ha as Ko,Hb as fr,I as Q,Ia as Qt,Ib as on,J as fe,Ja as Xo,Jb as it,K as G,Ka as rr,Kb as oa,L as w,La as Jt,Lb as aa,M as Kt,Ma as E,Mb as j,N as I,Na as He,Nb as Ve,O as Ce,Oa as en,Ob as sa,P as Ao,Pa as tn,Q as m,Qa as or,R as S,Ra as Yo,S as l,Sa as Zo,T as Je,Ta as Qo,U as Po,Ua as ar,V as de,Va as R,W as J,Wa as Re,X as ie,Xa as $,Y as re,Ya as nn,Z as N,Za as sr,_ as et,_a as cr,a as h,aa as ue,ab as Se,b as X,ba as H,bb as xe,ca as tt,cb as Te,d as A,da as er,db as lr,e as mt,ea as Ie,eb as dr,f as Eo,fa as Xt,fb as ur,g as Vn,ga as Oo,gb as O,h as U,ha as gt,hb as v,i as Z,ia as qn,ib as b,j as ce,ja as vt,jb as P,k as le,ka as Lo,kb as F,l as y,la as tr,lb as L,m as Gn,ma as Fo,mb as $e,n as Zi,na as Uo,nb as Jo,o as No,oa as nr,ob as oe,p as D,pa as jo,pb as nt,q as Co,qa as Yt,qb as we,r as Ue,ra as ir,rb as Y,s as Io,sa as C,sb as hr,t as Wn,ta as ee,tb as ea,u as Ro,ua as Zt,ub as ge,v as Qi,va as Bo,vb as ve,w as _e,wa as Kn,wb as ta,x as Wt,xa as ze,xb as q,y as qt,ya as bt,yb as yt,z as xo,za as zo,zb as p}from"./chunk-XPX35ZBI.js";var ca=null;function Me(){return ca}function gr(n){ca??=n}var an=class{},St=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:()=>l(la),providedIn:"platform"})}return n})();var la=(()=>{class n extends St{_location;_history;_doc=l(N);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Me().getBaseHref(this._doc)}onPopState(e){let t=Me().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Me().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function ha(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function da(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Ge(n){return n&&n[0]!=="?"?`?${n}`:n}var Yn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:()=>l(Sc),providedIn:"root"})}return n})(),_c=new m(""),Sc=(()=>{class n extends Yn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(N).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ha(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Ge(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Ge(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Ge(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(S(St),S(_c,8))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wt=(()=>{class n{_subject=new U;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Nc(da(ua(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Ge(t))}normalize(e){return n.stripTrailingSlash(Ec(this._basePath,ua(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ge(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ge(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Ge;static joinWithSlash=ha;static stripTrailingSlash=da;static \u0275fac=function(t){return new(t||n)(S(Yn))};static \u0275prov=I({token:n,factory:()=>wc(),providedIn:"root"})}return n})();function wc(){return new wt(S(Yn))}function Ec(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ua(n){return n.replace(/\/index\.html$/,"")}function Nc(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function sn(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var vr="browser";function fa(n){return n===vr}function ma(n){return n.replace(/\\/g,"\\\\").replace(/[\n\r\f\0]/g,"").replace(/"/g,'\\"')}var ga=n=>n.src,Rc=new m("",{factory:()=>ga});var pa=/^((\s*\d+w\s*(,|$)){1,})$/;var xc=[1,2],Tc=640;var Mc=1920,Dc=1080;var Et=(()=>{class n{imageLoader=l(Rc);config=Ac(l(tr));renderer=l(en);imgElement=l(ee).nativeElement;injector=l(re);destroyRef=l(et);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Jt("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&pa.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let t=e;this.loaderParams&&(t.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&t.width&&(t.height=Math.round(t.width/r)),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=pa.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(o=>o>=Tc)),t.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return xc.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Mc||this.height>Dc),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==ga&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url("${ma(this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0}))}")`:typeof e=="string"?`url("${ma(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let a=this.injector.get(it);r(),o(),this.placeholder=!1,a.markForCheck()},r=this.renderer.listen(e,"load",t),o=this.renderer.listen(e,"error",t);this.destroyRef.onDestroy(()=>{r(),o()}),Pc(e,t)}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,r){t&2&&ta("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",kc],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",Ve],height:[2,"height","height",Ve],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",j],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",j],fill:[2,"fill","fill",j],placeholder:[2,"placeholder","placeholder",Oc],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Yt]})}return n})();function Ac(n){let i={};return n.breakpoints&&(i.breakpoints=n.breakpoints.sort((e,t)=>e-t)),Object.assign({},Lo,n,i)}function Pc(n,i){n.complete&&n.naturalWidth&&i()}function kc(n){return typeof n=="string"?n:ze(n)}function Oc(n){return typeof n=="string"&&n!=="true"&&n!=="false"&&n!==""?n:j(n)}var cn=class{_doc;constructor(i){this._doc=i}manager},Zn=(()=>{class n extends cn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(S(N))};static \u0275prov=I({token:n,factory:n.\u0275fac})}return n})(),ei=new m(""),Sr=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Zn));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Zn);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new w(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(S(ei),S(H))};static \u0275prov=I({token:n,factory:n.\u0275fac})}return n})(),br="ng-app-id";function va(n){for(let i of n)i.remove()}function ba(n,i){let e=i.createElement("style");return e.textContent=n,e}function Lc(n,i,e,t){let r=n.head?.querySelectorAll(`style[${br}="${i}"],link[${br}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(br),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function _r(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var wr=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,Lc(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,ba);t?.forEach(r=>this.addUsage(r,this.external,_r))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(va(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])va(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,ba(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,_r(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(S(N),S(Xt),S(vt,8),S(gt))};static \u0275prov=I({token:n,factory:n.\u0275fac})}return n})(),yr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Er=/%COMP%/g;var _a="%COMP%",Fc=`_nghost-${_a}`,Uc=`_ngcontent-${_a}`,jc=!0,Bc=new m("",{factory:()=>jc}),zc=new m("");function Hc(n){return Uc.replace(Er,n)}function $c(n){return Fc.replace(Er,n)}function Sa(n,i){return i.map(e=>e.replace(Er,n))}var un=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,a,c,s=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=s,this.tracingService=d,this.cssVarNamespace=u??"",this.defaultRenderer=new ln(e,a,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Jn?r.applyToHost(e):r instanceof dn&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,c=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(t.encapsulation){case Kn.Emulated:o=new Jn(s,d,t,this.appId,u,a,c,f,this.cssVarNamespace);break;case Kn.ShadowDom:return new Qn(s,e,t,a,c,this.nonce,f,this.cssVarNamespace,d);case Kn.ExperimentalIsolatedShadowDom:return new Qn(s,e,t,a,c,this.nonce,f,this.cssVarNamespace);default:o=new dn(s,d,t,u,a,c,f,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(S(Sr),S(tn),S(Xt),S(Bc),S(N),S(H),S(vt),S(rr,8),S(zc,8))};static \u0275prov=I({token:n,factory:n.\u0275fac})}return n})(),ln=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(yr[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ya(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(ya(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new w(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=yr[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=yr[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(Qt.DashCase|Qt.Important)?i.style.setProperty(e,t,r&Qt.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&Qt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Me().getGlobalEventTarget(this.doc,i),!i))throw new w(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ya(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Qn=class extends ln{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,c,s,d){super(i,r,o,c,s),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=Sa(t.id,u).map(g=>g.replace(/%NS%/g,s));for(let g of u){let M=document.createElement("style");a&&M.setAttribute("nonce",a),M.textContent=g,this.shadowRoot.appendChild(M)}let f=t.getExternalStyles?.();if(f)for(let g of f){let M=_r(g,r);a&&M.setAttribute("nonce",a),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},dn=class extends ln{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,c,s,d){super(i,o,a,c,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles,f=d?Sa(d,u):u;this.styles=f.map(g=>g.replace(/%NS%/g,s)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Jn=class extends dn{contentAttr;hostAttr;constructor(i,e,t,r,o,a,c,s,d){let u=r+"-"+t.id;super(i,e,t,o,a,c,s,d,u),this.contentAttr=Hc(u),this.hostAttr=$c(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var ti=class n extends an{supportsDOMEvents=!0;static makeCurrent(){gr(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Gc();return e==null?null:Wc(e)}resetBaseElement(){hn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return sn(document.cookie,i)}},hn=null;function Gc(){return hn=hn||document.head.querySelector("base"),hn?hn.getAttribute("href"):null}function Wc(n){return new URL(n,document.baseURI).pathname}var wa=["alt","control","meta","shift"],qc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Kc={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ea=(()=>{class n extends cn{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),c=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Me().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),wa.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=a,s}static matchEventFullKeyCode(e,t){let r=qc[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),wa.forEach(a=>{if(a!==r){let c=Kc[a];c(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(S(N))};static \u0275prov=I({token:n,factory:n.\u0275fac})}return n})();function Nr(n,i,e){return A(this,null,function*(){let t=h({rootComponent:n},Xc(i,e));return aa(t)})}function Xc(n,i){return{platformRef:i?.platformRef,appProviders:[...el,...n?.providers??[]],platformProviders:Jc}}function Yc(){ti.makeCurrent()}function Zc(){return new tt}function Qc(){return Bo(document),document}var Jc=[{provide:gt,useValue:vr},{provide:Oo,useValue:Yc,multi:!0},{provide:N,useFactory:Qc}];var el=[{provide:Po,useValue:"root"},{provide:tt,useFactory:Zc},{provide:ei,useClass:Zn,multi:!0},{provide:ei,useClass:Ea,multi:!0},un,{provide:tn,useClass:wr},{provide:wr,useExisting:tn},Sr,{provide:He,useExisting:un},[]];var Ae=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],c=this.headers.get(e);if(!c)return;c=c.filter(s=>a.indexOf(s)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Rr=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},xr=class{encodeKey(i){return Na(i)}encodeValue(i){return Na(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function tl(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,c]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],s=e.get(a)||[];s.push(c),e.set(a,s)}),e}var nl=/%(\d[a-f0-9])/gi,il={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Na(n){return encodeURIComponent(n).replace(nl,(i,e)=>il[e]??i)}function ni(n){return`${n}`}var De=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new xr,i.fromString){if(i.fromObject)throw new w(2805,!1);this.map=tl(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(ni):[ni(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(ni(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(ni(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function rl(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ca(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Ia(n){return typeof Blob<"u"&&n instanceof Blob}function Ra(n){return typeof FormData<"u"&&n instanceof FormData}function ol(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Cr="Content-Type",xa="Accept",Ma="text/plain",Da="application/json",al=`${Da}, ${Ma}, */*`,Nt=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(rl(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new w(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ae,this.context??=new Rr,!this.params)this.params=new De,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e,s="",d=e.indexOf("#");d!==-1&&(s=e.substring(d),c=e.substring(0,d));let u=c.indexOf("?"),f=u===-1?"?":u<c.length-1?"&":"";this.urlWithParams=c+f+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ca(this.body)||Ia(this.body)||Ra(this.body)||ol(this.body)?this.body:this.body instanceof De?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ra(this.body)?null:Ia(this.body)?this.body.type||null:Ca(this.body)?null:typeof this.body=="string"?Ma:this.body instanceof De?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Da:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,c=i.cache||this.cache,s=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,f=i.referrer??this.referrer,g=i.integrity||this.integrity,M=i.referrerPolicy||this.referrerPolicy,B=i.transferCache??this.transferCache,z=i.timeout??this.timeout,k=i.body!==void 0?i.body:this.body,te=i.withCredentials??this.withCredentials,ne=i.reportProgress??this.reportProgress,W=i.reportUploadProgress??this.reportUploadProgress,ut=i.reportDownloadProgress??this.reportDownloadProgress,Vt=i.headers||this.headers,Ze=i.params||this.params,$n=i.context??this.context;return i.setHeaders!==void 0&&(Vt=Object.keys(i.setHeaders).reduce((ht,Qe)=>ht.set(Qe,i.setHeaders[Qe]),Vt)),i.setParams&&(Ze=Object.keys(i.setParams).reduce((ht,Qe)=>ht.set(Qe,i.setParams[Qe]),Ze)),new n(e,t,k,{params:Ze,headers:Vt,context:$n,reportProgress:ne,reportUploadProgress:W,reportDownloadProgress:ut,responseType:r,withCredentials:te,transferCache:B,keepalive:o,cache:c,priority:a,timeout:z,mode:s,redirect:d,credentials:u,referrer:f,integrity:g,referrerPolicy:M})}},Ct=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ct||{}),mn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new Ae,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Tr=class n extends mn{constructor(i={}){super(i)}type=Ct.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},pn=class n extends mn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ct.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},rt=class extends mn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},sl=200;var cl=/^\)\]\}',?\n/,lm=1024*1024,ll=new m("",{factory:()=>null}),dl=(()=>{class n{fetchImpl=l(Mr,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(H);destroyRef=l(et);maxResponseSize=l(ll);handle(e){return new Vn(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(Dr,a=>t.error(new rt({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}doRequest(e,t,r){return A(this,null,function*(){let o=this.createRequestInit(e),a;try{let k=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,h({signal:t},o)));ul(k),r.next({type:Ct.Sent}),a=yield k}catch(k){r.error(new rt({error:k,status:k.status??0,statusText:k.statusText,url:e.urlWithParams,headers:k.headers}));return}let c=new Ae(a.headers),s=a.statusText,d=a.url||e.urlWithParams,u=a.status,f=null,g=e.reportProgress||e.reportDownloadProgress;if(g&&r.next(new Tr({headers:c,status:u,statusText:s,url:d})),a.body){let k=a.headers.get("content-length"),te=k!==null?Number(k):NaN;this.maxResponseSize!==null&&Number.isFinite(te)&&te>this.maxResponseSize&&Ta(this.maxResponseSize);let ne=[],W=a.body.getReader(),ut=0,Vt,Ze,$n=typeof Zone<"u"&&Zone.current,ht=!1;if(yield this.ngZone.runOutsideAngular(()=>A(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield W.cancel(),ht=!0;break}let{done:Gt,value:Yi}=yield W.read();if(Gt)break;if(ne.push(Yi),ut+=Yi.length,this.maxResponseSize!==null&&ut>this.maxResponseSize&&(yield W.cancel(),Ta(this.maxResponseSize)),g){Ze=e.responseType==="text"?(Ze??"")+(Vt??=new TextDecoder).decode(Yi,{stream:!0}):void 0;let wo=()=>r.next({type:Ct.DownloadProgress,total:Number.isFinite(te)?te:void 0,loaded:ut,partialText:Ze});$n?$n.run(wo):wo()}}})),ht){r.complete();return}let Qe=this.concatChunks(ne,ut);try{let Gt=a.headers.get(Cr)??"";f=this.parseBody(e,Qe,Gt,u)}catch(Gt){r.error(new rt({error:Gt,headers:new Ae(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=f?sl:0);let M=u>=200&&u<300,B=a.redirected,z=a.type;M?(r.next(new pn({body:f,headers:c,status:u,statusText:s,url:d,redirected:B,responseType:z})),r.complete()):r.error(new rt({error:f,headers:c,status:u,statusText:s,url:d,redirected:B,responseType:z}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(cl,"");if(a==="")return null;try{return JSON.parse(a)}catch(c){if(o<200||o>=300)return a;throw c}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new w(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(xa)||(t[xa]=al),!e.headers.has(Cr)){let o=e.detectContentTypeHeader();o!==null&&(t[Cr]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Mr=class{};function Dr(){}function ul(n){n.then(Dr,Dr)}function Ta(n){throw new w(-2825,!1)}var hl=new m("",{factory:()=>!0}),ml="XSRF-TOKEN",pl=new m("",{factory:()=>ml}),fl="X-XSRF-TOKEN",gl=new m("",{factory:()=>fl}),vl=(()=>{class n{cookieName=l(pl);doc=l(N);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=sn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),bl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(vl),r},providedIn:"root"})}return n})();function yl(n,i){if(!l(hl)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(St).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch(r){return i(n)}let e=l(bl).getToken(),t=l(gl);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function _l(n,i){return i(n)}function Sl(n,i,e){return(t,r)=>J(e,()=>i(t,o=>n(o,r)))}var wl=new m("",{factory:()=>[yl]}),Aa=new m(""),El=new m("",{factory:()=>!0});var Nl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(dl),r},providedIn:"root"})}return n})();var Cl=(()=>{class n{backend;injector;chain=null;pendingTasks=l(jo);contributeToStability=l(El);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(wl),...this.injector.get(Aa,[])]));this.chain=r.reduceRight((o,a)=>Sl(o,a,this.injector),_l)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ee(()=>t(e,o=>this.backend.handle(o))).pipe(pt(r))}else return Ee(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(S(Nl),S(de))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Il=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(Cl),r},providedIn:"root"})}return n})();function Ir(n,i){return h({body:i},n)}var Ar=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Nt)o=e;else{let s;r.headers instanceof Ae?s=r.headers:s=new Ae(r.headers);let d;r.params&&(r.params instanceof De?d=r.params:d=new De({fromObject:r.params})),o=new Nt(e,t,r.body!==void 0?r.body:null,{headers:s,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(qt(s=>this.handler.handle(s)));if(e instanceof Nt||r.observe==="events")return a;let c=a.pipe(_e(s=>s instanceof pn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(D(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new w(2806,!1);return s.body}));case"blob":return c.pipe(D(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new w(2807,!1);return s.body}));case"text":return c.pipe(D(s=>{if(s.body!==null&&typeof s.body!="string")throw new w(2808,!1);return s.body}));default:return c.pipe(D(s=>s.body))}case"response":return c;default:throw new w(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new De().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Ir(r,t))}post(e,t,r={}){return this.request("POST",e,Ir(r,t))}put(e,t,r={}){return this.request("PUT",e,Ir(r,t))}static \u0275fac=function(t){return new(t||n)(S(Il))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pa=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(S(N))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(Tl),r},providedIn:"root"})}return n})(),Tl=(()=>{class n extends Pr{_doc=l(N);sanitize(e,t){if(t==null)return null;switch(e){case ie.NONE:return t;case ie.HTML:return bt(t,"HTML")?ze(t):qo(this._doc,String(t)).toString();case ie.STYLE:return bt(t,"Style")?ze(t):t;case ie.SCRIPT:if(bt(t,"Script"))return ze(t);throw new w(5200,!1);case ie.URL:return bt(t,"URL")?ze(t):Wo(String(t));case ie.RESOURCE_URL:if(bt(t,"ResourceURL"))return ze(t);throw new w(-5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(e){return zo(e)}bypassSecurityTrustStyle(e){return Ho(e)}bypassSecurityTrustScript(e){return $o(e)}bypassSecurityTrustUrl(e){return Vo(e)}bypassSecurityTrustResourceUrl(e){return Go(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var _="primary",xn=Symbol("RouteTitle"),Ur=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function at(n){return new Ur(n)}function kr(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Va(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let s={},d=n.slice(0,t.length);return kr(t,d,s)?{consumed:d,posParams:s}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let c={};return!kr(o,n.slice(0,o.length),c)||!kr(a,n.slice(n.length-a.length),c)?null:{consumed:n,posParams:c}}function ci(n){return new Promise((i,e)=>{n.pipe(Be()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Dl(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Ne(n[e],i[e]))return!1;return!0}function Ne(n,i){let e=n?jr(n):void 0,t=i?jr(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Ga(n[r],i[r]))return!1;return!0}function jr(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ga(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Al(n){return n.length>0?n[n.length-1]:null}function lt(n){return Zi(n)?n:Zo(n)?le(Promise.resolve(n)):y(n)}function Wa(n){return Zi(n)?ci(n):Promise.resolve(n)}var Pl={exact:Xa,subset:Ya},qa={exact:kl,subset:Ol,ignored:()=>!0},Ka={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Br={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Oa(n,i,e){return Pl[e.paths](n.root,i.root,e.matrixParams)&&qa[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function kl(n,i){return Ne(n,i)}function Xa(n,i,e){if(!ot(n.segments,i.segments)||!oi(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Xa(n.children[t],i.children[t],e))return!1;return!0}function Ol(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Ga(n[e],i[e]))}function Ya(n,i,e){return Za(n,i,i.segments,e)}function Za(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!ot(r,e)||i.hasChildren()||!oi(r,e,t))}else if(n.segments.length===e.length){if(!ot(n.segments,e)||!oi(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Ya(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!ot(n.segments,r)||!oi(n.segments,r,t)||!n.children[_]?!1:Za(n.children[_],i,o,t)}}function oi(n,i,e){return i.every((t,r)=>qa[e](n[r].parameters,t.parameters))}var me=class{root;queryParams;fragment;_queryParamMap;constructor(i=new T([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=at(this.queryParams),this._queryParamMap}toString(){return Ul.serialize(this)}},T=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ai(this)}},We=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=at(this.parameters),this._parameterMap}toString(){return Ja(this)}};function Ll(n,i){return ot(n,i)&&n.every((e,t)=>Ne(e.parameters,i[t].parameters))}function ot(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Fl(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===_&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==_&&(e=e.concat(i(r,t)))}),e}var Tn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>new qe})}return n})(),qe=class{parse(i){let e=new Hr(i);return new me(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${fn(i.root,!0)}`,t=zl(i.queryParams),r=typeof i.fragment=="string"?`#${jl(i.fragment)}`:"";return`${e}${t}${r}`}},Ul=new qe;function ai(n){return n.segments.map(i=>Ja(i)).join("/")}function fn(n,i){if(!n.hasChildren())return ai(n);if(i){let e=n.children[_]?fn(n.children[_],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==_&&t.push(`${r}:${fn(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Fl(n,(t,r)=>r===_?[fn(n.children[_],!1)]:[`${r}:${fn(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[_]!=null?`${ai(n)}/${e[0]}`:`${ai(n)}/(${e.join("//")})`}}function Qa(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ii(n){return Qa(n).replace(/%3B/gi,";")}function jl(n){return encodeURI(n)}function zr(n){return Qa(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function si(n){return decodeURIComponent(n)}function La(n){return si(n.replace(/\+/g,"%20"))}function Ja(n){return`${zr(n.path)}${Bl(n.parameters)}`}function Bl(n){return Object.entries(n).map(([i,e])=>`;${zr(i)}=${zr(e)}`).join("")}function zl(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${ii(e)}=${ii(r)}`).join("&"):`${ii(e)}=${ii(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Hl=/^[^\/()?;#]+/;function Or(n){let i=n.match(Hl);return i?i[0]:""}var $l=/^[^\/()?;=#]+/;function Vl(n){let i=n.match($l);return i?i[0]:""}var Gl=/^[^=?&#]+/;function Wl(n){let i=n.match(Gl);return i?i[0]:""}var ql=/^[^&#]+/;function Kl(n){let i=n.match(ql);return i?i[0]:""}var Hr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new T([],{}):new T([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new w(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[_]=new T(e,t)),r}parseSegment(){let i=Or(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(i),new We(si(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Vl(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Or(this.remaining);r&&(t=r,this.capture(t))}i[si(e)]=si(t)}parseQueryParam(i){let e=Wl(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Kl(this.remaining);a&&(t=a,this.capture(t))}let r=La(e),o=La(t);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Or(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new w(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=_);let c=this.parseChildren(e+1);t[a??_]=Object.keys(c).length===1&&c[_]?c[_]:new T([],c),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new w(4011,!1)}};function es(n){return n.segments.length>0?new T([],{[_]:n}):n}function ts(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=ts(r);if(t===_&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))i[a]=c;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new T(n.segments,i);return Xl(e)}function Xl(n){if(n.numberOfChildren===1&&n.children[_]){let i=n.children[_];return new T(n.segments.concat(i.segments),i.children)}return n}function Tt(n){return n instanceof me}function ns(n,i,e=null,t=null,r=new qe){let o=is(n);return rs(o,i,e,t,r)}function is(n){let i;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let c=new T(o.url,a);return o===n&&(i=c),c}let t=e(n.root),r=es(t);return i??r}function rs(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Lr(o,o,o,e,t,r);let a=Yl(i);if(a.toRoot())return Lr(o,o,new T([],{}),e,t,r);let c=Zl(a,o,n),s=c.processChildren?vn(c.segmentGroup,c.index,a.commands):as(c.segmentGroup,c.index,a.commands);return Lr(o,c.segmentGroup,s,e,t,r)}function li(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function _n(n){return typeof n=="object"&&n!=null&&n.outlets}function Fa(n,i,e){n||="\u0275";let t=new me;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Lr(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(f=>Fa(d,f,o)):Fa(d,u,o);let c;n===i?c=e:c=os(n,i,e);let s=es(ts(c));return new me(s,a,r)}function os(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=os(o,i,e)}),new T(n.segments,t)}var di=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&li(t[0]))throw new w(4003,!1);let r=t.find(_n);if(r&&r!==Al(t))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Yl(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new di(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,d])=>{c[s]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((c,s)=>{s==0&&c==="."||(s==0&&c===""?e=!0:c===".."?i++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new di(e,i,t)}var Rt=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Zl(n,i,e){if(n.isAbsolute)return new Rt(i,!0,0);if(!e)return new Rt(i,!1,NaN);if(e.parent===null)return new Rt(e,!0,0);let t=li(n.commands[0])?0:1,r=e.segments.length-1+t;return Ql(e,r,n.numberOfDoubleDots)}function Ql(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new w(4005,!1);r=t.segments.length}return new Rt(t,!1,r-o)}function Jl(n){return _n(n[0])?n[0].outlets:{[_]:n}}function as(n,i,e){if(n??=new T([],{}),n.segments.length===0&&n.hasChildren())return vn(n,i,e);let t=ed(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new T(n.segments.slice(0,t.pathIndex),{});return o.children[_]=new T(n.segments.slice(t.pathIndex),n.children),vn(o,0,r)}else return t.match&&r.length===0?new T(n.segments,{}):t.match&&!n.hasChildren()?$r(n,i,e):t.match?vn(n,0,r):$r(n,i,e)}function vn(n,i,e){if(e.length===0)return new T(n.segments,{});{let t=Jl(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==_)&&n.children[_]&&n.numberOfChildren===1&&n.children[_].segments.length===0){let o=vn(n.children[_],i,e);return new T(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=as(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new T(n.segments,r)}}function ed(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],c=e[t];if(_n(c))break;let s=`${c}`,d=t<e.length-1?e[t+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d=="object"&&d.outlets===void 0){if(!ja(s,d,a))return o;t+=2}else{if(!ja(s,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function $r(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(_n(o)){let s=td(o.outlets);return new T(t,s)}if(r===0&&li(e[0])){let s=n.segments[i];t.push(new We(s.path,Ua(e[0]))),r++;continue}let a=_n(o)?o.outlets[_]:`${o}`,c=r<e.length-1?e[r+1]:null;a&&c&&li(c)?(t.push(new We(a,Ua(c))),r+=2):(t.push(new We(a,{})),r++)}return new T(t,{})}function td(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=$r(new T([],{}),0,t))}),i}function Ua(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function ja(n,i,e){return n==e.path&&Ne(i,e.parameters)}var bn="imperative",V=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(V||{}),se=class{id;url;constructor(i,e){this.id=i,this.url=e}},st=class extends se{type=V.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ke=class extends se{urlAfterRedirects;type=V.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},K=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(K||{}),Sn=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Sn||{}),he=class extends se{reason;code;type=V.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ss(n){return n instanceof he&&(n.code===K.Redirect||n.code===K.SupersededByNewNavigation)}var Oe=class extends se{reason;code;type=V.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},ct=class extends se{error;target;type=V.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},wn=class extends se{urlAfterRedirects;state;type=V.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ui=class extends se{urlAfterRedirects;state;type=V.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hi=class extends se{urlAfterRedirects;state;shouldActivate;type=V.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},mi=class extends se{urlAfterRedirects;state;type=V.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pi=class extends se{urlAfterRedirects;state;type=V.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fi=class{route;type=V.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},gi=class{route;type=V.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},vi=class{snapshot;type=V.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bi=class{snapshot;type=V.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yi=class{snapshot;type=V.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_i=class{snapshot;type=V.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Mt=class{},En=class{},Dt=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function nd(n){return!(n instanceof Mt)&&!(n instanceof Dt)&&!(n instanceof En)}var Si=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Ot(this.rootInjector)}},Ot=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Si(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(S(de))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Vr(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Vr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Gr(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Gr(i,this._root).map(e=>e.value)}};function Vr(n,i){if(n===i.value)return i;for(let e of i.children){let t=Vr(n,e);if(t)return t}return null}function Gr(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Gr(n,e);if(t.length)return t.unshift(i),t}return[]}var ae=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function It(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Nn=class extends wi{snapshot;constructor(i,e){super(i),this.snapshot=e,eo(this,i)}toString(){return this.snapshot.toString()}};function cs(n,i){let e=id(n,i),t=new Z([new We("",{})]),r=new Z({}),o=new Z({}),a=new Z({}),c=new Z(""),s=new Ke(t,r,a,c,o,_,n,e.root);return s.snapshot=e.root,new Nn(new ae(s,[]),e)}function id(n,i){let e={},t={},r={},a=new At([],e,r,"",t,_,n,null,{},i);return new Cn("",new ae(a,[]))}var Ke=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(i,e,t,r,o,a,c,s){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(D(d=>d[xn]))??y(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(D(i=>at(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(D(i=>at(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},rd="always";function Jr(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:h(h({},i.params),n.params),data:h(h({},i.data),n.data),resolve:h(h(h(h({},n.data),i.data),r?.data),n._resolvedData)}:t={params:h({},n.params),data:h({},n.data),resolve:h(h({},n.data),n._resolvedData??{})},r&&ds(r)&&(t.resolve[xn]=r.title),t}var At=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[xn]}constructor(i,e,t,r,o,a,c,s,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=at(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=at(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Cn=class extends wi{url;constructor(i,e){super(e),this.url=i,eo(this,e)}toString(){return ls(this._root)}};function eo(n,i){i.value._routerState=n,i.children.forEach(e=>eo(n,e))}function ls(n){let i=n.children.length>0?` { ${n.children.map(ls).join(", ")} } `:"";return`${n.value}${i}`}function Fr(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Ne(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Ne(i.params,e.params)||n.paramsSubject.next(e.params),Dl(i.url,e.url)||n.urlSubject.next(e.url),Ne(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Wr(n,i){let e=Ne(n.params,i.params)&&Ll(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Wr(n.parent,i.parent))}function ds(n){return typeof n.title=="string"||n.title===null}var us=new m(""),Mn=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=_;activateEvents=new ue;deactivateEvents=new ue;attachEvents=new ue;detachEvents=new ue;routerOutletData=on();parentContexts=l(Ot);location=l(Yo);changeDetector=l(it);inputBinder=l(Ii,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new qr(e,c,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Yt]})}return n})(),qr=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Ke?this.route:i===Ot?this.childContexts:i===us?this.outletData:this.parent.get(i,e)}},Ii=new m("");var to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&P(0,"router-outlet")},dependencies:[Mn],encapsulation:2,changeDetection:1})}return n})();function no(n){let i=n.children&&n.children.map(no),e=i?X(h({},n),{children:i}):h({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==_&&(e.component=to),e}function od(n,i,e){let t=new Set,r=In(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new Nn(r,i)}}function In(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=i.value;let o=ad(n,i,e,t);return new ae(r,o)}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let c=a.route;return c.value._futureSnapshot=i.value,c.children=i.children.map(s=>In(n,s,void 0,t)),c}}let r=sd(i.value);t.add(r);let o=i.children.map(a=>In(n,a,void 0,t));return new ae(r,o)}}function ad(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return In(n,r,o,t);return In(n,r,void 0,t)})}function sd(n){return new Ke(new Z(n.url),new Z(n.params),new Z(n.queryParams),new Z(n.fragment),new Z(n.data),n.outlet,n.component,n)}var Pt=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},hs="ngNavigationCancelingError";function Ei(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Tt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ms(!1,K.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function ms(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[hs]=!0,e.cancellationCode=i,e}function cd(n){return ps(n)&&Tt(n.url)}function ps(n){return!!n&&n[hs]}var Kr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Fr(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=It(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=It(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),c=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:c})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=It(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=It(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new _i(o.value.snapshot))}),i.children.length&&this.forwardEvent(new bi(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Fr(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Fr(c.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},Ni=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},xt=class{component;route;constructor(i,e){this.component=i,this.route=e}};function ld(n,i,e){let t=n._root,r=i?i._root:null;return gn(t,r,e,[t.value])}function dd(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Lt(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Ao(n)?n:i.get(n):t}function gn(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=It(i);return n.children.forEach(a=>{ud(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>yn(c,e.getContext(a),r)),r}function ud(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,c=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=hd(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new Ni(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?gn(n,i,c?c.children:null,t,r):gn(n,i,e,t,r),s&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new xt(c.outlet.component,a))}else a&&yn(i,c,r),r.canActivateChecks.push(new Ni(t)),o.component?gn(n,null,c?c.children:null,t,r):gn(n,null,e,t,r);return r}function hd(n,i,e){if(typeof e=="function")return J(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!ot(n.url,i.url);case"pathParamsOrQueryParamsChange":return!ot(n.url,i.url)||!Ne(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Wr(n,i)||!Ne(n.queryParams,i.queryParams);default:return!Wr(n,i)}}function yn(n,i,e){let t=It(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?yn(a,i.children.getContext(o),e):yn(a,null,e):yn(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new xt(i.outlet.component,r)):e.canDeactivateChecks.push(new xt(null,r)):e.canDeactivateChecks.push(new xt(null,r))}function Dn(n){return typeof n=="function"}function md(n){return typeof n=="boolean"}function pd(n){return n&&Dn(n.canLoad)}function fd(n){return n&&Dn(n.canActivate)}function gd(n){return n&&Dn(n.canActivateChild)}function vd(n){return n&&Dn(n.canDeactivate)}function bd(n){return n&&Dn(n.canMatch)}function fs(n){return n instanceof No||n?.name==="EmptyError"}var ri=Symbol("INITIAL_VALUE");function kt(){return Q(n=>Co(n.map(i=>i.pipe(je(1),ft(ri)))).pipe(D(i=>{for(let e of i)if(e!==!0){if(e===ri)return ri;if(e===!1||yd(e))return e}return!0}),_e(i=>i!==ri),je(1)))}function yd(n){return Tt(n)||n instanceof Pt}function gs(n){return n.aborted?y(void 0).pipe(je(1)):new Vn(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function vs(n){return fe(gs(n))}function _d(n){return Ue(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?y(X(h({},i),{guardsResult:!0})):Sd(o,e,t).pipe(Ue(a=>a&&md(a)?wd(e,r,n):y(a)),D(a=>X(h({},i),{guardsResult:a})))})}function Sd(n,i,e){return le(n).pipe(Ue(t=>Rd(t.component,t.route,e,i)),Be(t=>t!==!0,!0))}function wd(n,i,e){return le(i).pipe(qt(t=>Io(Nd(t.route.parent,e),Ed(t.route,e),Id(n,t.path),Cd(n,t.route))),Be(t=>t!==!0,!0))}function Ed(n,i){return n!==null&&i&&i(new yi(n)),y(!0)}function Nd(n,i){return n!==null&&i&&i(new vi(n)),y(!0)}function Cd(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let t=e.map(r=>Wn(()=>{let o=i._environmentInjector,a=Lt(r,o),c=fd(a)?a.canActivate(i,n):J(o,()=>a(i,n));return lt(c).pipe(Be())}));return y(t).pipe(kt())}function Id(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>dd(o)).filter(o=>o!==null).map(o=>Wn(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,d=Lt(c,s),u=gd(d)?d.canActivateChild(e,n):J(s,()=>d(e,n));return lt(u).pipe(Be())});return y(a).pipe(kt())}));return y(r).pipe(kt())}function Rd(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let c=i._environmentInjector,s=Lt(a,c),d=vd(s)?s.canDeactivate(n,i,e,t):J(c,()=>s(n,i,e,t));return lt(d).pipe(Be())});return y(o).pipe(kt())}function xd(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(c=>{let s=Lt(c,n),d=pd(s)?s.canLoad(i,e):J(n,()=>s(i,e)),u=lt(d);return r?u.pipe(vs(r)):u});return y(a).pipe(kt(),bs(t))}function bs(n){return Eo(G(i=>{if(typeof i!="boolean")throw Ei(n,i)}),D(i=>i===!0))}function Td(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return y(!0);let c=a.map(s=>{let d=Lt(s,n),u=bd(d)?d.canMatch(i,e,r):J(n,()=>d(i,e,r));return lt(u).pipe(vs(o))});return y(c).pipe(kt(),bs(t))}var Pe=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Rn=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Md(n){throw new w(4e3,!1)}function Dd(n){throw ms(!1,K.GuardRejected)}var Xr=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return A(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[_])throw Md(`${i.redirectTo}`);r=r.children[_]}})}applyRedirectCommands(i,e,t,r,o){return A(this,null,function*(){let a=yield Ad(e,r,o);if(a instanceof me)throw new Rn(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new Rn(c);return c})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new me(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);t[r]=e[c]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(i,s,t,r)}),new T(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new w(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Ad(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return ci(lt(J(e,()=>t(i))))}function Pd(n,i){return n.providers&&!n._injector&&(n._injector=ar(n.providers,i,`Route: ${n.path}`)),n._injector??i}function be(n){return n.outlet||_}function kd(n,i){let e=n.filter(t=>be(t)===i);return e.push(...n.filter(t=>be(t)!==i)),e}var Yr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ys(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Od(n,i,e,t,r,o,a){let c=_s(n,i,e);if(!c.matched)return y(c);let s=ys(o(c));return t=Pd(i,t),Td(t,i,e,r,s,a).pipe(D(d=>d===!0?c:h({},Yr)))}function _s(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?h({},Yr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Va)(e,n,i);if(!r)return h({},Yr);let o={};Object.entries(r.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Ba(n,i,e,t,r){return e.length>0&&Ud(n,e,t,r)?{segmentGroup:new T(i,Fd(t,new T(e,n.children))),slicedSegments:[]}:e.length===0&&jd(n,e,t)?{segmentGroup:new T(n.segments,Ld(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new T(n.segments,n.children),slicedSegments:e}}function Ld(n,i,e,t){let r={};for(let o of e)if(Ri(n,i,o)&&!t[be(o)]){let a=new T([],{});r[be(o)]=a}return h(h({},t),r)}function Fd(n,i){let e={};e[_]=i;for(let t of n)if(t.path===""&&be(t)!==_){let r=new T([],{});e[be(t)]=r}return e}function Ud(n,i,e,t){return e.some(r=>!Ri(n,i,r)||!(be(r)!==_)?!1:!(t!==void 0&&be(r)===t))}function jd(n,i,e){return e.some(t=>Ri(n,i,t))}function Ri(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Bd(n,i,e){return i.length===0&&!n.children[e]}var Zr=class{};function zd(n,i,e,t,r,o,a,c){return A(this,null,function*(){return new Qr(n,i,e,t,r,a,o,c).recognize()})}var Hd=31,Qr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,c,s){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new Xr(this.urlSerializer,this.urlTree)}noMatchError(i){return new w(4002,`'${i.segmentGroup}'`)}recognize(){return A(this,null,function*(){let i=Ba(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new ae(t,e),o=new Cn("",r),a=ns(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return A(this,null,function*(){let e=new At([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),_,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,_,e),rootSnapshot:e}}catch(t){if(t instanceof Rn)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Pe?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return A(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=yield this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof ae?[a]:[]})}processChildren(i,e,t,r){return A(this,null,function*(){let o=[];for(let s of Object.keys(t.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=t.children[s],u=kd(e,s),f=yield this.processSegmentGroup(i,u,d,s,r);a.push(...f)}let c=Ss(a);return $d(c),c})}processSegment(i,e,t,r,o,a,c){return A(this,null,function*(){for(let s of e)try{return yield this.processSegmentAgainstRoute(s._injector??i,e,s,t,r,o,a,c)}catch(d){if(d instanceof Pe||fs(d))continue;throw d}if(Bd(t,r,o))return new Zr;throw new Pe(t)})}processSegmentAgainstRoute(i,e,t,r,o,a,c,s){return A(this,null,function*(){if(be(t)!==a&&(a===_||!Ri(r,o,t)))throw new Pe(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,s);throw new Pe(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,c){return A(this,null,function*(){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:f,remainingSegments:g}=_s(e,r,o);if(!s)throw new Pe(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Hd&&(this.allowRedirects=!1));let M=this.createSnapshot(i,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let B=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,ys(M),i),z=yield this.applyRedirects.lineralizeSegments(r,B);return this.processSegment(i,t,e,z.concat(g),a,!1,c)})}createSnapshot(i,e,t,r,o){let a=new At(t,r,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Gd(e),be(e),e.component??e._loadedComponent??null,e,Wd(e),i),c=Jr(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}matchSegmentAgainstRoute(i,e,t,r,o,a){return A(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=W=>this.createSnapshot(i,t,W.consumedSegments,W.parameters,a),s=yield ci(Od(e,t,r,i,this.urlSerializer,c,this.abortSignal));if(t.path==="**"&&(e.children={}),!s?.matched)throw new Pe(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:f,consumedSegments:g,remainingSegments:M}=s,B=this.createSnapshot(i,t,g,f,a),{segmentGroup:z,slicedSegments:k}=Ba(e,g,M,d,o);if(k.length===0&&z.hasChildren()){let W=yield this.processChildren(u,d,z,B);return new ae(B,W)}if(d.length===0&&k.length===0)return new ae(B,[]);let te=be(t)===o,ne=yield this.processSegment(u,d,z,k,te?_:o,!0,B);return new ae(B,ne instanceof ae?[ne]:[])})}getChildConfig(i,e,t){return A(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield ci(xd(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Dd(e)}return{routes:[],injector:i}})}};function $d(n){n.sort((i,e)=>i.value.outlet===_?-1:e.value.outlet===_?1:i.value.outlet.localeCompare(e.value.outlet))}function Vd(n){let i=n.value.routeConfig;return i&&i.path===""}function Ss(n){let i=[],e=new Set;for(let t of n){if(!Vd(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Ss(t.children);i.push(new ae(t.value,r))}return i.filter(t=>!e.has(t))}function Gd(n){return n.data||{}}function Wd(n){return n.resolve||{}}function qd(n,i,e,t,r,o,a){return Ue(c=>A(null,null,function*(){let{state:s,tree:d}=yield zd(n,i,e,t,c.extractedUrl,r,o,a);return X(h({},c),{targetSnapshot:s,urlAfterRedirects:d})}))}function Kd(n){return Ue(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return y(i);let r=new Set(t.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let s of ws(c))o.add(s);let a=0;return le(o).pipe(qt(c=>r.has(c)?Xd(c,e,n):(c.data=Jr(c,c.parent,n).resolve,y(void 0))),G(()=>a++),Ji(1),Ue(c=>a===o.size?y(i):ce))})}function ws(n){let i=n.children.map(e=>ws(e)).flat();return[n,...i]}function Xd(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!ds(t)&&(r[xn]=t.title),Wn(()=>(n.data=Jr(n,n.parent,e).resolve,Yd(r,n,i).pipe(D(o=>(n._resolvedData=o,n.data=h(h({},n.data),o),null)))))}function Yd(n,i,e){let t=jr(n);if(t.length===0)return y({});let r={};return le(t).pipe(Ue(o=>Zd(n[o],i,e).pipe(Be(),G(a=>{if(a instanceof Pt)throw Ei(new qe,a);r[o]=a}))),Ji(1),D(()=>r),Wt(o=>fs(o)?ce:Gn(o)))}function Zd(n,i,e){let t=i._environmentInjector,r=Lt(n,t),o=r.resolve?r.resolve(i,e):J(t,()=>r(i,e));return lt(o)}function za(n){return Q(i=>{let e=n(i);return e?le(e).pipe(D(()=>i)):y(i)})}var io=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===_);return t}getResolvedTitleForRoute(e){return e.data[xn]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Es)})}return n})(),Es=(()=>{class n extends io{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(S(Pa))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),An=new m("",{factory:()=>({})}),Pn=new m(""),Ns=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(ia);loadComponent(e,t){return A(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=A(this,null,function*(){try{let o=yield Wa(J(e,()=>t.loadComponent())),a=yield Is(fr(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=A(this,null,function*(){try{let o=yield Cs(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Cs(n,i,e,t){return A(this,null,function*(){let r=yield Wa(J(e,()=>n.loadChildren())),o=yield Is(fr(r)),a;o instanceof Qo||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),t&&t(n);let c,s,d=!1,u;return Array.isArray(a)?(s=a,d=!0):(c=a.create(e).injector,u=a,s=c.get(Pn,[],{optional:!0,self:!0}).flat()),{routes:s.map(no),injector:c,factory:u}})}function Is(n){return A(this,null,function*(){return n})}var xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Qd)})}return n})(),Qd=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Rs=new m("");var xs=new m(""),Jd=()=>{},Ts=new m(""),Ms=(()=>{class n{currentNavigation=Ie(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Ie(null);events=new U;transitionAbortWithErrorSubject=new U;configLoader=l(Ns);environmentInjector=l(de);destroyRef=l(et);urlSerializer=l(Tn);rootContexts=l(Ot);location=l(wt);inputBindingEnabled=l(Ii,{optional:!0})!==null;titleStrategy=l(io);options=l(An,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||rd;urlHandlingStrategy=l(xi);createViewTransition=l(Rs,{optional:!0});navigationErrorHandler=l(Ts,{optional:!0});activatedRouteInjectorFeature=l(xs,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new fi(r)),t=r=>this.events.next(new gi(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ee(()=>{this.transitions?.next(X(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Z(null),this.transitions.pipe(_e(t=>t!==null),Q(t=>{let r=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===t.id;return y(t).pipe(Q(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",K.SupersededByNewNavigation),ce;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?X(h({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&f!=="reload")return this.events.next(new Oe(s.id,this.urlSerializer.serialize(s.rawUrl),"",Sn.IgnoredSameUrlNavigation)),s.resolve(!1),ce;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(Q(g=>(this.events.next(new st(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?ce:Promise.resolve(g))),qd(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),G(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(M=>(M.finalUrl=g.urlAfterRedirects,M)),this.events.next(new En)}),Q(g=>le(t.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(D(()=>g))),G(()=>{let g=new wn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:M,source:B,restoredState:z,extras:k}=s,te=new st(g,this.urlSerializer.serialize(M),B,z);this.events.next(te);let ne=cs(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=X(h({},s),{targetSnapshot:ne,urlAfterRedirects:M,extras:X(h({},k),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(W=>(W.finalUrl=M,W)),y(t)}else return this.events.next(new Oe(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Sn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ce}),D(s=>{let d=new ui(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=t=X(h({},s),{guards:ld(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),_d(s=>this.events.next(s)),Q(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ei(this.urlSerializer,s.guardsResult);let d=new hi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!c())return ce;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",K.GuardRejected),ce;if(s.guards.canActivateChecks.length===0)return y(s);let u=new mi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!c())return ce;let f=!1;return y(s).pipe(Kd(this.paramsInheritanceStrategy),G({next:()=>{f=!0;let g=new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{f||this.cancelNavigationTransition(s,"",K.NoDataFromResolver)}}))}),za(s=>{let d=f=>{let g=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let M=f._environmentInjector;g.push(this.configLoader.loadComponent(M,f.routeConfig).then(B=>{f.component=B}))}for(let M of f.children)g.push(...d(M));return g},u=d(s.targetSnapshot.root);return u.length===0?y(s):le(Promise.all(u).then(()=>s))}),Q(s=>{let{newlyCreatedRoutes:d,state:u}=od(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=X(h({},s),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),y(s)}),this.activatedRouteInjectorFeature?.operator()??(s=>s),za(()=>this.afterPreactivation()),Q(()=>{let{currentSnapshot:s,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return u?le(u).pipe(D(()=>t)):y(t)}),je(1),Q(s=>{r=!1,this.events.next(new Mt);let d=t.beforeActivateHandler.deferredHandle;return d?le(d.then(()=>s)):y(s)}),G(s=>{new Kr(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(o=!0,this.currentNavigation.update(d=>(d.abort=Jd,d)),this.lastSuccessfulNavigation.set(Ee(this.currentNavigation)),this.events.next(new ke(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),fe(gs(a.signal).pipe(_e(()=>!o&&r),G(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",K.Aborted)}))),G({complete:()=>{o=!0}}),fe(this.transitionAbortWithErrorSubject.pipe(G(s=>{throw s}))),pt(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",K.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Wt(s=>{if(o=!0,Ha(t),this.destroyed)return t.resolve(!1),ce;if(ps(s))this.events.next(new he(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),cd(s)?this.events.next(new Dt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let d=new ct(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=J(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof Pt){let{message:f,cancellationCode:g}=Ei(this.urlSerializer,u);this.events.next(new he(t.id,this.urlSerializer.serialize(t.extractedUrl),f,g)),this.events.next(new Dt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return ce}))}))}cancelNavigationTransition(e,t,r){Ha(e);let o=new he(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ee(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function eu(n){return n!==bn}function Ha(n){if(n.newlyCreatedRoutes)for(let i of n.newlyCreatedRoutes)i._localInjector?.destroy()}var Ds=new m("");var As=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(tu)})}return n})(),Ci=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},tu=(()=>{class n extends Ci{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),ro=(()=>{class n{urlSerializer=l(Tn);options=l(An,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(wt);urlHandlingStrategy=l(xi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new me;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof me?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=cs(null,l(de));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(nu)})}return n})(),nu=(()=>{class n extends ro{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof st?this.updateStateMemento():e instanceof Oe?this.commitTransition(t):e instanceof wn?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Mt?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof he&&!ss(e)?this.restoreHistory(t):e instanceof ct?this.restoreHistory(t,!0):e instanceof ke&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:c}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=h(h({},c),this.generateNgRouterState(o,s,t));this.location.replaceState(e,"",d)}else{let s=h(h({},c),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?h({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):h({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function oo(n,i){n.events.pipe(_e(e=>e instanceof ke||e instanceof he||e instanceof ct||e instanceof Oe),D(e=>e instanceof ke||e instanceof Oe?0:(e instanceof he?e.code===K.Redirect||e.code===K.SupersededByNewNavigation:!1)?2:1),_e(e=>e!==2),je(1)).subscribe(()=>{i()})}var Ti=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(sr);stateManager=l(ro);options=l(An,{optional:!0})||{};pendingTasks=l(ko);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Ms);urlSerializer=l(Tn);location=l(wt);urlHandlingStrategy=l(xi);injector=l(de);_events=new U;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(As);injectorCleanup=l(Ds,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Pn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Ii,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new mt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Ee(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof he&&t.code!==K.Redirect&&t.code!==K.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ke)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Dt){let a=t.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),s=h({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||eu(r.source)},a);this.scheduleNavigation(c,bn,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}nd(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),bn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,c=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=X(h({},o),{browserUrl:e})),r){let d=h({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(c);this.scheduleNavigation(s,t,a,o).catch(d=>{this.disposed||this.injector.get(er)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ee(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(no),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=t,d=s?this.currentUrlTree.fragment:a,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let g=r?r.snapshot:this.routerState.snapshot.root;f=is(g)}catch(g){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return rs(f,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Tt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,bn,null,t)}navigate(e,t={skipLocationChange:!1}){return iu(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(Kt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=h({},Ka):t===!1?r=h({},Br):r=h(h({},Br),t),Tt(e))return Oa(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Oa(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let c,s,d;a?(c=a.resolve,s=a.reject,d=a.promise):d=new Promise((f,g)=>{c=f,s=g});let u=this.pendingTasks.add();return oo(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function iu(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new w(4008,!1)}var au=new m("");function ao(n,...i){return Je([{provide:Pn,multi:!0,useValue:n},{provide:Ke,useFactory:su},{provide:cr,multi:!0,useFactory:cu},i.map(e=>e.\u0275providers)])}function su(){return l(Ti).routerState.root}function cu(){let n=l(re);return i=>{let e=n.get(rn);if(i!==e.components[0])return;let t=n.get(Ti),r=n.get(lu);n.get(du)===1&&t.initialNavigation(),n.get(uu,null,{optional:!0})?.setUpPreloading(),n.get(au,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var lu=new m("",{factory:()=>new U}),du=new m("",{factory:()=>1});var uu=new m("");var Ps=[];var mu="@",pu=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(re);loadingSchedulerFn=l(fu,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MALQYU3P.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new w(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new so(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let c=a.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(Fo,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){or()};static \u0275prov=I({token:n,factory:n.\u0275fac})}return n})(),so=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(mu)}},fu=new m("");function ks(n="animations"){return Jt("NgAsyncAnimations"),Je([{provide:He,useFactory:()=>new pu(l(N),l(un),l(H),n)},{provide:qn,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Os={providers:[oa({eventCoalescing:!0}),ao(Ps),ks()]};function kn(n){return n.buttons===0||n.detail===0}function On(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var co;function Ls(){if(co==null){let n=typeof document<"u"?document.head:null;co=!!(n&&(n.createShadowRoot||n.attachShadow))}return co}function lo(n){if(Ls()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ye(n){if(n.composedPath)try{return n.composedPath()[0]}catch(i){}return n.target}var uo;try{uo=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){uo=!1}var Le=(()=>{class n{_platformId=l(gt);isBrowser=this._platformId?fa(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||uo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Ln;function Fs(){if(Ln==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ln=!0}))}finally{Ln=Ln||!1}return Ln}function Ft(n){return Fs()?n:!!n.capture}function Xe(n){return n instanceof ee?n.nativeElement:n}var Us=new m("cdk-input-modality-detector-options"),js={ignoreKeys:[18,17,224,91,16]},Bs=650,ho={passive:!0,capture:!0},zs=(()=>{class n{_platform=l(Le);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Z(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ye(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Bs||(this._modality.next(kn(e)?"keyboard":"mouse"),this._mostRecentTarget=ye(e))};_onTouchstart=e=>{if(On(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ye(e)};constructor(){let e=l(H),t=l(N),r=l(Us,{optional:!0});if(this._options=h(h({},js),r),this.modalityDetected=this._modality.pipe(Do(1)),this.modalityChanged=this.modalityDetected.pipe(To()),this._platform.isBrowser){let o=l(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,ho),o.listen(t,"mousedown",this._onMousedown,ho),o.listen(t,"touchstart",this._onTouchstart,ho)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Fn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Fn||{}),Hs=new m("cdk-focus-monitor-default-options"),Mi=Ft({passive:!0,capture:!0}),Un=(()=>{class n{_ngZone=l(H);_platform=l(Le);_inputModalityDetector=l(zs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(N);_stopInputModalityDetector=new U;constructor(){let e=l(Hs,{optional:!0});this._detectionMode=e?.detectionMode||Fn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ye(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Xe(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=lo(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new U,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=Xe(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Xe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,s])=>this._originChanged(c,t,s)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Fn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Fn.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Bs:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ye(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Mi),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Mi)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(fe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Mi),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Mi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Di=new WeakMap,Ye=(()=>{class n{_appRef;_injector=l(re);_environmentInjector=l(de);load(e){let t=this._appRef=this._appRef||this._injector.get(rn),r=Di.get(t);r||(r={loaders:new Set,refs:[]},Di.set(t,r),t.onDestroy(()=>{Di.get(t)?.refs.forEach(o=>o.destroy()),Di.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(sa(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var $s=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),Ai;function gu(){if(Ai===void 0&&(Ai=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{Ai=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return Ai}function Ut(n){return gu()?.createHTML(n)||n}var Vs=new Set,dt,mo=(()=>{class n{_platform=l(Le);_nonce=l(vt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):bu}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&vu(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function vu(n,i){if(!Vs.has(n))try{dt||(dt=document.createElement("style"),i&&dt.setAttribute("nonce",i),dt.setAttribute("type","text/css"),document.head.appendChild(dt)),dt.sheet&&(dt.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),Vs.add(n))}catch(e){console.error(e)}}function bu(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var yu=200,Pi=class{_letterKeyStream=new U;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new U;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:yu;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(G(e=>this._pressedLetters.push(e)),xo(i),_e(()=>this._pressedLetters.length>0),D(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Gs(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ki=class{_items;_activeItemIndex=Ie(-1);_activeItem=Ie(null);_wrap=!1;_typeaheadSubscription=mt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Zt?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):nr(i)&&(this._effectRef=Uo(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new U;change=new U;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Pi(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Gs(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return nr(this._items)?this._items():this._items instanceof Zt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var jn=class extends ki{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Ws=new Map,Bn=class n{_appId=l(Xt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=Ws.get(i);return t===void 0?t=0:t++,Ws.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})};var _u=new m("MATERIAL_ANIMATIONS"),qs=null;function Su(){return l(_u,{optional:!0})?.animationsDisabled||l(qn,{optional:!0})==="NoopAnimations"?"di-disabled":(qs??=l(mo).matchMedia("(prefers-reduced-motion)").matches,qs?"reduced-motion":"enabled")}function jt(){return Su()!=="enabled"}var pe=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(pe||{}),po=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=pe.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ks=Ft({passive:!0,capture:!0}),fo=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ks)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ks)))}_delegateEventHandler=i=>{let e=ye(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},zn={enterDuration:225,exitDuration:150},wu=800,Xs=Ft({passive:!0,capture:!0}),Ys=["mousedown","touchstart"],Zs=["mouseup","mouseleave","touchend","touchcancel"],Eu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),Oi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fo;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Xe(t)),o&&o.get(Ye).load(Eu)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},zn),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Nu(i,e,r),c=i-r.left,s=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-a}px`,u.style.top=`${s-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),g=f.transitionProperty,M=f.transitionDuration,B=g==="none"||M==="0s"||M==="0s, 0s"||r.width===0&&r.height===0,z=new po(this,u,t,B);u.style.transform="scale3d(1, 1, 1)",z.state=pe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=z);let k=null;return!B&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let te=()=>{k&&(k.fallbackTimer=null),clearTimeout(W),this._finishRippleTransition(z)},ne=()=>this._destroyRipple(z),W=setTimeout(ne,d+100);u.addEventListener("transitionend",te),u.addEventListener("transitioncancel",ne),k={onTransitionEnd:te,onTransitionCancel:ne,fallbackTimer:W}}),this._activeRipples.set(z,k),(B||!d)&&this._finishRippleTransition(z),z}fadeOutRipple(i){if(i.state===pe.FADING_OUT||i.state===pe.HIDDEN)return;let e=i.element,t=h(h({},zn),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=pe.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Xe(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ys.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Zs.forEach(e=>{this._triggerElement.addEventListener(e,this,Xs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===pe.FADING_IN?this._startFadeOutTransition(i):i.state===pe.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=pe.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=pe.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=kn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+wu;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!On(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===pe.VISIBLE||i.config.terminateOnPointerUp&&i.state===pe.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ys.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Zs.forEach(e=>i.removeEventListener(e,this,Xs)),this._pointerUpEventsRegistered=!1))}};function Nu(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Li=new m("mat-ripple-global-options");var Cu={capture:!0},Iu=["focus","mousedown","mouseenter","touchstart"],go="mat-ripple-loader-uninitialized",vo="mat-ripple-loader-class-name",Qs="mat-ripple-loader-centered",Fi="mat-ripple-loader-disabled",Ui=(()=>{class n{_document=l(N);_animationsDisabled=jt();_globalRippleOptions=l(Li,{optional:!0});_platform=l(Le);_ngZone=l(H);_injector=l(re);_eventCleanups;_hosts=new Map;constructor(){let e=l(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Iu.map(t=>e.listen(this._document,t,this._onInteraction,Cu)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(go,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(vo))&&e.setAttribute(vo,t.className||""),t.centered&&e.setAttribute(Qs,""),t.disabled&&e.setAttribute(Fi,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Fi,""):e.removeAttribute(Fi)}_onInteraction=e=>{let t=ye(e);if(t instanceof HTMLElement){let r=t.closest(`[${go}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(vo)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??zn.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??zn.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Fi),rippleConfig:{centered:e.hasAttribute(Qs),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new Oi(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&s.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:s,hasSetUpEvents:d}),e.removeAttribute(go)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Ru=new m("MAT_BUTTON_CONFIG");function Js(n){return n==null?void 0:Ve(n)}var ec=(()=>{class n{_elementRef=l(ee);_ngZone=l(H);_animationsDisabled=jt();_config=l(Ru,{optional:!0});_focusMonitor=l(Un);_cleanupClick;_renderer=l(en);_rippleLoader=l(Ui);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=on(!1,{transform:j});constructor(){l(Ye).load(Hn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(Se("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),yt(r.color?"mat-"+r.color:""),q("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j],ariaDisabled:[2,"aria-disabled","ariaDisabled",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],tabIndex:[2,"tabIndex","tabIndex",Js],_tabindex:[2,"tabindex","_tabindex",Js],showProgress:[1,"showProgress"]}})}return n})();var xu=new m("cdk-dir-doc",{providedIn:"root",factory:()=>l(N)}),Tu=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function tc(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Tu.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var bo=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Ie("ltr");change=new ue;constructor(){let e=l(xu,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(tc(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var yo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Re({type:n});static \u0275inj=Ce({})}return n})();var Mu=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Du=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Au(n,i){n&1&&(F(0,"div",2),Y(1,3),L())}var nc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ji=(()=>{class n extends ec{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Pu(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?nc.get(this._appearance):null,o=nc.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[nn],ngContentSelectors:Du,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(we(Mu),$e(0,"span",0),Y(1),F(2,"span",1),Y(3,1),L(),Y(4,2),xe(5,Au,2,0,"div",2),$e(6,"span",3)(7,"span",4)),t&2&&(q("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),E(5),Te(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function Pu(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}function ic(n){return Error(`Unable to find icon with the name "${n}"`)}function ku(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function rc(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function oc(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Fe=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},sc=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Fe(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(ie.HTML,r);if(!a)throw oc(r);let c=Ut(a);return this._addSvgIconConfig(e,t,new Fe("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Fe(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(ie.HTML,t);if(!o)throw oc(t);let a=Ut(o);return this._addSvgIconSetConfig(e,new Fe("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(ie.RESOURCE_URL,e);if(!t)throw rc(e);let r=this._cachedIconsByUrl.get(t);return r?y(Bi(r)):this._loadSvgIconFromConfig(new Fe(e,null)).pipe(G(o=>this._cachedIconsByUrl.set(t,o)),D(o=>Bi(o)))}getNamedSvgIcon(e,t=""){let r=ac(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Gn(ic(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(Bi(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(D(t=>Bi(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return y(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Wt(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(ie.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return Ro(o).pipe(D(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw ic(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(G(t=>e.svgText=t),D(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(G(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let c=this._svgElementFromString(Ut("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Ut("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:c}=r[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ku();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(ie.RESOURCE_URL,t);if(!a)throw rc(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let s=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(D(d=>Ut(d)),pt(()=>this._inProgressUrlFetches.delete(a)),Mo());return this._inProgressUrlFetches.set(a,s),s}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(ac(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Ou(o)?new Fe(o.url,null,o.options):new Fe(o,null)}}static \u0275fac=function(t){return new(t||n)(S(Ar,8),S(Pr),S(N,8),S(tt))};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Bi(n){return n.cloneNode(!0)}function ac(n,i){return n+":"+i}function Ou(n){return!!(n.url&&n.options)}var Lu=["*"],Fu=new m("MAT_ICON_DEFAULT_OPTIONS"),Uu=new m("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(N),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),cc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ju=cc.map(n=>`[${n}]`).join(", "),Bu=/^url\(['"]?#(.*?)['"]?\)$/,zi=(()=>{class n{_elementRef=l(ee);_iconRegistry=l(sc);_location=l(Uu);_errorHandler=l(tt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=mt.EMPTY;constructor(){let e=l(new pr("aria-hidden"),{optional:!0}),t=l(Fu,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ju),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)cc.forEach(a=>{let c=t[o],s=c.getAttribute(a),d=s?s.match(Bu):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(je(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Se("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),yt(r.color?"mat-"+r.color:""),q("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",j],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Lu,decls:1,vars:0,template:function(t,r){t&1&&(we(),Y(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})(),lc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Re({type:n});static \u0275inj=Ce({imports:[yo]})}return n})();var Hi=class n{isDarkMode=!1;scrollToSection(i){let e=document.getElementById(i);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})}toggleTheme(){this.isDarkMode=!this.isDarkMode;let i=this.isDarkMode?"dark":"light";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-header"]],decls:55,vars:2,consts:[[1,"header-top"],["disabled","","mat-button",""],[1,"spacer"],[1,"theme-toggle",3,"click"],["mat-button","",3,"click"],[1,"header-bottom"],[1,"header-bottom-presentation"],[1,"header-bottom-social"],["href","https://linkedin.com/in/ryunezm","target","_blank"],["mat-button","","outlined",""],["alt","linkedin","height","20","ngSrc","/logos/linkedin.svg","width","20"],["href","https://github.com/ryunezm/","target","_blank"],["mat-button",""],["alt","github","height","20","ngSrc","/logos/github.svg","width","20"],["href","https://threads.net/ryunezm","target","_blank"],["alt","threads","height","20","ngSrc","/logos/threads.svg","width","20"],[1,"header-bottom-photo"],["alt","profile photo","height","200","priority","","width","200",3,"ngSrc"]],template:function(e,t){e&1&&(v(0,"header")(1,"section",0)(2,"a")(3,"button",1),p(4,"Rubber Yunez"),b()(),v(5,"span",2)(6,"button",3),oe("click",function(){return t.toggleTheme()}),p(7),b()(),v(8,"ul")(9,"li")(10,"button",4),oe("click",function(){return t.scrollToSection("about-me")}),p(11,"About me"),b()(),v(12,"li")(13,"button",4),oe("click",function(){return t.scrollToSection("skills")}),p(14,"Stack"),b()(),v(15,"li")(16,"button",4),oe("click",function(){return t.scrollToSection("academic")}),p(17,"Academic"),b()(),v(18,"li")(19,"button",4),oe("click",function(){return t.scrollToSection("projects")}),p(20,"Projects"),b()()()(),v(21,"section",5)(22,"div",6)(23,"h1"),p(24,"Hey, I'm Rubber Yunez"),b(),v(25,"p"),p(26,"A passionate Full-Stack Developer with a background in Chemical Engineering. In the past I leveraged programming to solve complex problems \u2014from numerical methods to heat transfer\u2014 using C/C++, Python, and MATLAB."),b(),v(27,"div",7)(28,"a",8)(29,"button",9)(30,"div"),P(31,"img",10),v(32,"span"),p(33,"linkedin"),b(),v(34,"mat-icon"),p(35,"arrow_outward"),b()()()(),v(36,"a",11)(37,"button",12)(38,"div"),P(39,"img",13),v(40,"span"),p(41,"github"),b(),v(42,"mat-icon"),p(43,"arrow_outward"),b()()()(),v(44,"a",14)(45,"button",12)(46,"div"),P(47,"img",15),v(48,"span"),p(49,"threads"),b(),v(50,"mat-icon"),p(51,"arrow_outward"),b()()()()()(),P(52,"span",2),v(53,"div",16),P(54,"img",17),b()()()),e&2&&(E(7),_t((t.isDarkMode,"")),E(47),O("ngSrc","/profile_square.png"))},dependencies:[ji,zi,Et],encapsulation:2,changeDetection:1})};var $i=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-about-me"]],decls:43,vars:0,consts:[["id","about-me",1,"content"]],template:function(e,t){e&1&&(F(0,"section",0)(1,"h1"),p(2,"About me"),L(),$e(3,"hr"),F(4,"p"),p(5,"For the past few years, I\u2019ve immersed myself in web development, specializing in "),F(6,"em")(7,"b"),p(8,"Angular"),L()(),p(9," for frontend development, "),F(10,"em")(11,"b"),p(12,"Java"),L()(),p(13," and "),F(14,"em")(15,"b"),p(16,"Spring Boot"),L()(),p(17," for backend systems, and working with databases like "),F(18,"em")(19,"b"),p(20,"MySQL"),L()(),p(21,", "),F(22,"em")(23,"b"),p(24,"PostgreSQL"),L()(),p(25," and "),F(26,"em")(27,"b"),p(28,"MongoDB"),L()(),p(29," to build robust applications. "),L(),F(30,"p"),p(31,"\u{1F331} Currently expanding my skills is:"),L(),F(32,"ul")(33,"li"),p(34,"\u2601\uFE0F Cloud Architecture"),L(),F(35,"li"),p(36,"\u{1F6E1}\uFE0F Cybersecurity"),L()(),$e(37,"br")(38,"br"),F(39,"p"),p(40,"\u{1F680} Passionate about innovation, growth, and tackling new challenges in collaborative environments. "),L(),$e(41,"br")(42,"br"),L())},encapsulation:2,changeDetection:1})};var Hu=["*"];var $u=new m("MAT_CARD_CONFIG"),zt=(()=>{class n{appearance;constructor(){let e=l($u,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&q("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Hu,decls:1,vars:0,template:function(t,r){t&1&&(we(),Y(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return n})(),Ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var $t=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),dc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})(),uc=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&q("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})();var Vi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var Gi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-skills"]],decls:40,vars:22,consts:[["id","skills",1,"content"],[1,"groups"],["alt","Java","height","100","priority","","width","54",3,"ngSrc","title"],["alt","Spring Boot","height","100","priority","","width","100",3,"ngSrc","title"],["alt","MongoDB","height","100","priority","","width","98",3,"ngSrc","title"],["alt","MySQL","height","100","priority","","width","146",3,"ngSrc","title"],["alt","PostgreSQL","height","100","priority","","width","97.0111117846887",3,"ngSrc","title"],["alt","Angular","height","100","priority","","width","100",3,"ngSrc","title"],["alt","JavaScript","height","100","priority","","width","92",3,"ngSrc","title"],["alt","HTML5","height","100","width","100",3,"ngSrc","title"],["alt","CSS","height","100","width","100",3,"ngSrc","title"],["alt","Rust","height","100","width","100",3,"ngSrc","title"],["alt","Python","height","100","width","82",3,"ngSrc","title"]],template:function(e,t){e&1&&(v(0,"section",0)(1,"h1"),p(2,"Technical Stack"),b(),P(3,"hr"),v(4,"div",1)(5,"mat-card")(6,"mat-card-footer")(7,"mat-card-title"),p(8,"Back-end"),b()(),v(9,"mat-card-content")(10,"div"),P(11,"img",2)(12,"img",3),b()()(),v(13,"mat-card")(14,"mat-card-footer")(15,"mat-card-title"),p(16,"Databases"),b()(),v(17,"mat-card-content")(18,"div"),P(19,"img",4)(20,"img",5)(21,"img",6),b()()(),v(22,"mat-card")(23,"mat-card-footer")(24,"mat-card-title"),p(25,"Front-end"),b()(),v(26,"mat-card-content")(27,"div"),P(28,"img",7)(29,"img",8)(30,"img",9)(31,"img",10),b()()(),v(32,"mat-card")(33,"mat-card-footer")(34,"mat-card-title"),p(35,"Others"),b()(),v(36,"mat-card-content")(37,"div"),P(38,"img",11)(39,"img",12),b()()()()()),e&2&&(E(11),O("ngSrc","/language/Java_logo.svg")("title","Java"),E(),O("ngSrc","/language/Spring_Boot_logo.svg")("title","Spring Boot"),E(7),O("ngSrc","/language/MongoDB_logo_unofficial.png")("title","MongoDB"),E(),O("ngSrc","/language/MySQL_logo.svg")("title","MySQL"),E(),O("ngSrc","/language/postgresql_logo.svg")("title","PostgreSQL"),E(7),O("ngSrc","/language/Angular_logo.svg")("title","Angular"),E(),O("ngSrc","/language/JavaScript_unofficial_logo.svg")("title","JavaScript"),E(),O("ngSrc","/language/HTML5_logo.svg")("title","HTML"),E(),O("ngSrc","/language/CSS3_logo.svg")("title","CSS"),E(7),O("ngSrc","/language/Rust_logo.svg")("title","Rust"),E(),O("ngSrc","/language/Python_logo.svg")("title","Python"))},dependencies:[Et,zt,$t,Vi,Ht],styles:["div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-items:center;width:100%}div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin:1vmax}div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;justify-content:center;justify-items:center;margin:10px;outline:1px solid black}"],changeDetection:1})};var Wi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-academic"]],decls:20,vars:6,consts:[["id","academic",1,"content"],[1,"mat-card-content-box"],["alt","Unicartagena","height","70","priority","","width","160",3,"ngSrc","title"],["alt","UIS","height","70","width","143",3,"ngSrc","title"],["alt","MinTic","height","70","width","38.5",3,"ngSrc","title"]],template:function(e,t){e&1&&(v(0,"section",0)(1,"h1"),p(2,"Academic"),b(),P(3,"hr"),v(4,"div")(5,"mat-card")(6,"mat-card-content")(7,"div",1),P(8,"img",2),b()(),v(9,"mat-card-footer")(10,"mat-card-title"),p(11,"Chemical Engineering"),b()()(),v(12,"mat-card")(13,"mat-card-content")(14,"div",1),P(15,"img",3)(16,"img",4),b()(),v(17,"mat-card-footer")(18,"mat-card-title"),p(19,"Web Developer"),b()()()()()),e&2&&(E(8),O("ngSrc","/logos/unicartagena.png")("title","Universidad de Cartagena"),E(7),O("ngSrc","/logos/uis.svg")("title","Universidad Industrial de Santander"),E(),O("ngSrc","/logos/mintic_dark.svg")("title","Ministerio de Tecnolog\xEDas de la Informaci\xF3n y Comunicaciones"))},dependencies:[zt,Vi,Et,Ht,$t],styles:["div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-items:center}.mat-card-content-box[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:90%}"],changeDetection:1})};var _o=(c=>(c.Enlil="Enlil",c.Papsukkal="Papsukkal",c.Ninshubur="Ninshubur",c.Papsukkal_Experiment="MovieCataloguerJavaSwing",c.TextEncrypter="TextEncrypter",c.UnitsConverter="UnitsConverter",c.LeetCodeRust="LeetCodeRust",c))(_o||{}),hc={Papsukkal:{title:"Papsukkal",tags:["Java \u2668\uFE0F","Spring Boot \u{1F343}","MongoDB \u{1F4C3}","Angular \u{1F170}\uFE0F"],description:"This is a movie cataloging project developed using Java 11+, Spring Boot, MongoDB (back-end) and Angular (front-end). It allows you to register movies and assign them a custom score on a scale from 0 to 10.",repository:"https://github.com/ryunezm/papsukkal"},TextEncrypter:{title:"Text encrypter",tags:["HTML \u{1F4D1}","CSS \u{1F3A8}","JavaScript \u{1F4A1}"],description:"An application for encrypting and decrypting text using predefined rules. Works with lowercase letters only, excluding accented characters and special symbols.",repository:"https://github.com/ryunezm/EncriptadorTextoHTML",demo:"https://ryunezm.github.io/EncriptadorTextoHTML"},UnitsConverter:{title:"Units converter",tags:["Java \u2668\uFE0F"],description:"This project is a unit conversion application that provides functionality to convert between different types of units, such as currency, length, mass, temperature, and time.",repository:"https://github.com/ryunezm/Unit_Converter",downloadPreview:"https://github.com/ryunezm/Unit_Converter/releases/download/v0.0.1-alpha/JavaCurrencyConverter.jar"},LeetCodeRust:{title:"LeetCode's problems solved in Rust",tags:["Rust \u{1F980}"],description:"Series of exercises solved in Rust, for now, the easy ones, as I become more familiar with this lovely language.",repository:"https://github.com/ryunezm/leetcode_rust"},MovieCataloguerJavaSwing:{title:"Papsukkal (Experiment)",tags:["Java \u2668\uFE0F","H2 \u{1F5C4}\uFE0F"],description:"Small experiment of a local application (movie cataloguer) using Java and part of Spring Boot to simplify the database part (H2).",repository:"https://github.com/ryunezm/papsukkal_javaswing"},Ninshubur:{title:"Ninshubur",tags:["Java \u2668\uFE0F","Spring Boot \u{1F343}","PostgreSQL \u{1F418}"],description:"Restaurant management system: allows customers to place orders, employees to manage them, and administrators to monitor users and the menu. Includes JWT authentication, role control, automated testing and clean, layer-based architecture.",repository:"https://github.com/ryunezm/Ninshubur",demo:void 0,downloadPreview:void 0},Enlil:{title:"Enlil",tags:["Angular \u{1F170}\uFE0F"],description:"This one is a small weather app using Nominatim and OpenWeather APIs.",repository:"https://github.com/ryunezm/enlil",demo:"https://ryunezm.github.io/enlil",downloadPreview:void 0}};var Vu=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Gu=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Wu(n,i){n&1&&(v(0,"span",3),Y(1,1),b())}function qu(n,i){n&1&&(v(0,"span",6),Y(1,2),b())}var Ku=["*"];var mc=new m("MatChipAvatar"),pc=new m("MatChipTrailingIcon"),fc=new m("MatChipEdit"),gc=new m("MatChipRemove"),vc=new m("MatChip"),bc=(()=>{class n{_elementRef=l(ee);_parentChip=l(vc);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Ye).load(Hn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,r){t&2&&(Se("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),q("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ve(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Xu=(()=>{class n extends bc{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ir(n)))(r||n)}})();static \u0275dir=$({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,r){t&1&&oe("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Se("tabindex",r._getTabindex()),q("mdc-evolution-chip__action--presentational",!1))},features:[nn]})}return n})();var So=(()=>{class n{_changeDetectorRef=l(it);_elementRef=l(ee);_tagName=l(ra);_ngZone=l(H);_focusMonitor=l(Un);_globalRippleOptions=l(Li,{optional:!0});_document=l(N);_onFocus=new U;_onBlur=new U;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=jt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(Bn).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ue;destroyed=new ue;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(Ui);_injector=l(re);constructor(){let e=l(Ye);e.load(Hn),e.load($s),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Qi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let r=t._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,r,o){if(t&1&&hr(o,mc,5)(o,fc,5)(o,pc,5)(o,gc,5)(o,mc,5)(o,pc,5)(o,fc,5)(o,gc,5),t&2){let a;ge(a=ve())&&(r.leadingIcon=a.first),ge(a=ve())&&(r.editIcon=a.first),ge(a=ve())&&(r.trailingIcon=a.first),ge(a=ve())&&(r.removeIcon=a.first),ge(a=ve())&&(r._allLeadingIcons=a),ge(a=ve())&&(r._allTrailingIcons=a),ge(a=ve())&&(r._allEditIcons=a),ge(a=ve())&&(r._allRemoveIcons=a)}},viewQuery:function(t,r){if(t&1&&ea(Xu,5),t&2){let o;ge(o=ve())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,r){t&1&&oe("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Jo("id",r.id),Se("role",r.role)("aria-label",r.ariaLabel),yt("mat-"+(r.color||"primary")),q("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",j],highlighted:[2,"highlighted","highlighted",j],disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[mr([{provide:vc,useExisting:n}])],ngContentSelectors:Gu,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,r){t&1&&(we(Vu),P(0,"span",0),v(1,"span",1)(2,"span",2),xe(3,Wu,2,0,"span",3),v(4,"span",4),Y(5),P(6,"span",5),b()()(),xe(7,qu,2,0,"span",6)),t&2&&(E(3),Te(r.leadingIcon?3:-1),E(4),Te(r._hasTrailingIcon()?7:-1))},dependencies:[bc],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var yc=(()=>{class n{_elementRef=l(ee);_changeDetectorRef=l(it);_dir=l(bo,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new U;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Zt;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(ft(null),Q(()=>Qi(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ft(this._chips)).subscribe(e=>{let t=[];e.forEach(r=>r._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new jn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(fe(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(fe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ft(null),fe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(fe(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),c=o||a;this._isValidIndex(r)&&c&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,r,o){if(t&1&&hr(o,So,5),t&2){let a;ge(a=ve())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,r){t&1&&oe("keydown",function(a){return r._handleKeydown(a)}),t&2&&Se("role",r.role)},inputs:{disabled:[2,"disabled","disabled",j],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)]},ngContentSelectors:Ku,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(we(),F(0,"div",0),Y(1),L())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();function Yu(n,i){if(n&1&&(v(0,"mat-chip"),p(1),b()),n&2){let e=i.$implicit;E(),_t(e)}}function Zu(n,i){if(n&1&&(v(0,"a",3)(1,"button",4),p(2,"Demo"),b()()),n&2){let e=nt().$implicit,t=nt();O("href",t.projectDetails[e].demo,Xn)}}function Qu(n,i){if(n&1&&(v(0,"a",3)(1,"button",4),p(2,"Download preview"),b()()),n&2){let e=nt().$implicit,t=nt();O("href",t.projectDetails[e].downloadPreview,Xn)}}function Ju(n,i){if(n&1&&(v(0,"div",2)(1,"mat-card")(2,"mat-card-title"),p(3),b(),v(4,"mat-card-subtitle")(5,"mat-chip-set"),dr(6,Yu,2,1,"mat-chip",null,lr),b()(),v(8,"mat-card-content")(9,"p"),p(10),b()(),v(11,"mat-card-actions")(12,"a",3)(13,"button",4),p(14,"Repository"),b()(),xe(15,Zu,3,1,"a",3),xe(16,Qu,3,1,"a",3),b()()()),n&2){let e=i.$implicit,t=nt();E(3),_t(t.projectDetails[e].title),E(3),ur(t.projectDetails[e].tags),E(4),_t(t.projectDetails[e].description),E(2),O("href",t.projectDetails[e].repository,Xn),E(3),Te(t.projectDetails[e].demo?15:-1),E(),Te(t.projectDetails[e].downloadPreview?16:-1)}}var qi=class n{projects=Object.values(_o);projectDetails=hc;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-projects"]],decls:7,vars:0,consts:[["id","projects",1,"content"],[1,"project-content-container"],[1,"project-content"],["target","_blank",3,"href"],["mat-button",""]],template:function(e,t){e&1&&(v(0,"section",0)(1,"h1"),p(2,"Projects"),b(),P(3,"hr"),v(4,"div",1),dr(5,Ju,17,5,"div",2,lr),b()()),e&2&&(E(5),ur(t.projects))},dependencies:[zt,$t,uc,Ht,dc,ji,yc,So],encapsulation:2,changeDetection:1})};var Ki=class n{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-footer"]],decls:3,vars:1,template:function(e,t){e&1&&(F(0,"footer")(1,"p"),p(2),L()()),e&2&&(E(2),na("\xA9 ",t.currentYear," Developed by Rubber Yunez "))},encapsulation:2,changeDetection:1})};var Xi=class n{showScrollTopButton=!1;buttonVisibility="hidden";ngOnInit(){document.addEventListener("contextmenu",this.preventDefault)}ngOnDestroy(){document.removeEventListener("contextmenu",this.preventDefault)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}onScroll(){let i=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;this.showScrollTopButton=i>300,this.buttonVisibility=this.showScrollTopButton?"visible":"hidden"}preventDefault(i){i.preventDefault()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-root"]],hostBindings:function(e,t){e&1&&oe("scroll",function(){return t.onScroll()},Ko)},decls:10,vars:4,consts:[["aria-label","Back to top","matFab","",1,"button-to-top",3,"click"]],template:function(e,t){e&1&&(P(0,"app-header")(1,"app-about-me")(2,"app-skills")(3,"app-academic")(4,"app-projects")(5,"app-footer"),v(6,"button",0),oe("click",function(){return t.scrollToTop()}),v(7,"mat-icon"),p(8,"arrow_upward"),b()(),P(9,"router-outlet")),e&2&&(E(6),q("hidden",t.buttonVisibility==="hidden")("visible",t.buttonVisibility==="visible"))},dependencies:[$i,Mn,Wi,Ki,Hi,lc,zi,qi,Gi],encapsulation:2,changeDetection:1})};Nr(Xi,Os).catch(n=>console.error(n));
