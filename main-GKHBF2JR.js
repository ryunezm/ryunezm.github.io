import{$ as ue,$a as nn,A as Ue,Aa as Vo,Ab as _t,B as Do,Ba as Go,Bb as ia,C as mt,Ca as Wo,Cb as hr,D as je,Da as qo,Db as ra,E as Qi,Ea as Ko,Eb as tt,F as Ao,Fa as re,Fb as mr,G as Po,Ga as qn,Gb as oa,H as pt,Ha as Yo,Hb as pr,I as Q,Ia as C,Ib as rn,J as fe,Ja as Zt,Jb as nt,K as V,Ka as Xo,Kb as aa,L as E,La as ir,Lb as sa,M as qt,Ma as Qt,Mb as U,N as _,Na as ze,Nb as $e,O as Ce,Oa as Jt,Ob as ca,P as ko,Pa as en,Q as g,Qa as rr,R as S,Ra as Zo,S as l,Sa as Qo,T as ft,Ta as Jo,U as No,Ua as or,V as de,Va as R,W as J,Wa as Re,X as ie,Xa as H,Y as I,Ya as tn,Z as Qe,Za as ar,_ as Oo,_a as sr,a as h,aa as z,ab as we,b as Y,ba as Je,bb as Te,ca as Ji,cb as xe,d as D,da as Ie,db as cr,e as ht,ea as Kt,eb as lr,f as Co,fa as Lo,fb as dr,g as Hn,ga as gt,gb as k,h as F,ha as Gn,hb as p,i as Z,ia as vt,ib as b,j as ce,ja as Fo,jb as A,k as le,ka as er,kb as O,l as y,la as Uo,lb as N,m as $n,ma as jo,mb as He,n as Xi,na as tr,nb as ea,o as Io,oa as Bo,ob as oe,p as M,pa as Yt,pb as et,q as Ro,qa as nr,qb as Se,r as Fe,ra as G,rb as X,s as To,sa as ee,sb as ur,t as Vn,ta as Xt,tb as ta,u as xo,ua as zo,ub as ge,v as Zi,va as Wn,vb as ve,w as _e,wa as Be,wb as na,x as Gt,xa as bt,xb as q,y as Wt,ya as Ho,yb as yt,z as Mo,za as $o,zb as m}from"./chunk-AIID6DOE.js";var la=null;function Me(){return la}function fr(n){la??=n}var on=class{},Kn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(da),providedIn:"platform"})}return n})();var da=(()=>{class n extends Kn{_location;_history;_doc=l(I);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Me().getBaseHref(this._doc)}onPopState(e){let t=Me().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Me().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function ma(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function ua(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Ve(n){return n&&n[0]!=="?"?`?${n}`:n}var Yn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(yc),providedIn:"root"})}return n})(),bc=new g(""),yc=(()=>{class n extends Yn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ma(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Ve(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Ve(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Ve(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(S(Kn),S(bc,8))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wt=(()=>{class n{_subject=new F;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Sc(ua(ha(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Ve(t))}normalize(e){return n.stripTrailingSlash(wc(this._basePath,ha(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ve(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ve(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Ve;static joinWithSlash=ma;static stripTrailingSlash=ua;static \u0275fac=function(t){return new(t||n)(S(Yn))};static \u0275prov=_({token:n,factory:()=>_c(),providedIn:"root"})}return n})();function _c(){return new wt(S(Yn))}function wc(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ha(n){return n.replace(/\/index\.html$/,"")}function Sc(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function gr(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var vr="browser";function ga(n){return n===vr}var va=n=>n.src,Cc=new g("",{factory:()=>va});var pa=/^((\s*\d+w\s*(,|$)){1,})$/;var Ic=[1,2],Rc=640;var Tc=1920,xc=1080;var St=(()=>{class n{imageLoader=l(Cc);config=Mc(l(er));renderer=l(Jt);imgElement=l(ee).nativeElement;injector=l(ie);destroyRef=l(Qe);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Qt("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&pa.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let t=e;this.loaderParams&&(t.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&t.width&&(t.height=Math.round(t.width/r)),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=pa.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(o=>o>=Rc)),t.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return Ic.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Tc||this.height>xc),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==va&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url("${fa(this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0}))}")`:typeof e=="string"?`url("${fa(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let a=this.injector.get(nt);r(),o(),this.placeholder=!1,a.markForCheck()},r=this.renderer.listen(e,"load",t),o=this.renderer.listen(e,"error",t);this.destroyRef.onDestroy(()=>{r(),o()}),Dc(e,t)}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,r){t&2&&na("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Ac],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",$e],height:[2,"height","height",$e],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",U],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",U],fill:[2,"fill","fill",U],placeholder:[2,"placeholder","placeholder",Pc],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Yt]})}return n})();function Mc(n){let i={};return n.breakpoints&&(i.breakpoints=n.breakpoints.sort((e,t)=>e-t)),Object.assign({},Fo,n,i)}function Dc(n,i){n.complete&&n.naturalWidth&&i()}function Ac(n){return typeof n=="string"?n:Be(n)}function fa(n){return n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Pc(n){return typeof n=="string"&&n!=="true"&&n!=="false"&&n!==""?n:U(n)}var an=class{_doc;constructor(i){this._doc=i}manager},Xn=(()=>{class n extends an{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(S(I))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Jn=new g(""),wr=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Xn));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Xn);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new E(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(S(Jn),S(z))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),br="ng-app-id";function ba(n){for(let i of n)i.remove()}function ya(n,i){let e=i.createElement("style");return e.textContent=n,e}function kc(n,i,e,t){let r=n.head?.querySelectorAll(`style[${br}="${i}"],link[${br}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(br),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function _r(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Sr=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,kc(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,ya);t?.forEach(r=>this.addUsage(r,this.external,_r))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(ba(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ba(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,ya(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,_r(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(S(I),S(Kt),S(vt,8),S(gt))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),yr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Er=/%COMP%/g;var wa="%COMP%",Nc=`_nghost-${wa}`,Oc=`_ngcontent-${wa}`,Lc=!0,Fc=new g("",{factory:()=>Lc});function Uc(n){return Oc.replace(Er,n)}function jc(n){return Nc.replace(Er,n)}function Sa(n,i){return i.map(e=>e.replace(Er,n))}var ln=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,c,s=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=s,this.tracingService=d,this.defaultRenderer=new sn(e,a,c,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Qn?r.applyToHost(e):r instanceof cn&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,c=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,v=this.tracingService;switch(t.encapsulation){case Wn.Emulated:o=new Qn(s,d,t,this.appId,u,a,c,v);break;case Wn.ShadowDom:return new Zn(s,e,t,a,c,this.nonce,v,d);case Wn.ExperimentalIsolatedShadowDom:return new Zn(s,e,t,a,c,this.nonce,v);default:o=new cn(s,d,t,u,a,c,v);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(S(wr),S(en),S(Kt),S(Fc),S(I),S(z),S(vt),S(ir,8))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),sn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(yr[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(_a(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(_a(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new E(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=yr[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=yr[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(Zt.DashCase|Zt.Important)?i.style.setProperty(e,t,r&Zt.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Zt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Me().getGlobalEventTarget(this.doc,i),!i))throw new E(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function _a(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Zn=class extends sn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,c,s){super(i,r,o,c),this.hostEl=e,this.sharedStylesHost=s,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Sa(t.id,d);for(let v of d){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=v,this.shadowRoot.appendChild(f)}let u=t.getExternalStyles?.();if(u)for(let v of u){let f=_r(v,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},cn=class extends sn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,c,s){super(i,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=s?Sa(s,d):d,this.styleUrls=t.getExternalStyles?.(s)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Qn=class extends cn{contentAttr;hostAttr;constructor(i,e,t,r,o,a,c,s){let d=r+"-"+t.id;super(i,e,t,o,a,c,s,d),this.contentAttr=Uc(d),this.hostAttr=jc(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var ei=class n extends on{supportsDOMEvents=!0;static makeCurrent(){fr(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=zc();return e==null?null:Hc(e)}resetBaseElement(){dn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return gr(document.cookie,i)}},dn=null;function zc(){return dn=dn||document.head.querySelector("base"),dn?dn.getAttribute("href"):null}function Hc(n){return new URL(n,document.baseURI).pathname}var Ea=["alt","control","meta","shift"],$c={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Vc={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ca=(()=>{class n extends an{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),c=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Me().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),Ea.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=a,s}static matchEventFullKeyCode(e,t){let r=$c[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Ea.forEach(a=>{if(a!==r){let c=Vc[a];c(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(S(I))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function Cr(n,i,e){return D(this,null,function*(){let t=h({rootComponent:n},Gc(i,e));return sa(t)})}function Gc(n,i){return{platformRef:i?.platformRef,appProviders:[...Xc,...n?.providers??[]],platformProviders:Yc}}function Wc(){ei.makeCurrent()}function qc(){return new Je}function Kc(){return zo(document),document}var Yc=[{provide:gt,useValue:vr},{provide:Lo,useValue:Wc,multi:!0},{provide:I,useFactory:Kc}];var Xc=[{provide:No,useValue:"root"},{provide:Je,useFactory:qc},{provide:Jn,useClass:Xn,multi:!0},{provide:Jn,useClass:Ca,multi:!0},ln,{provide:en,useClass:Sr},{provide:Sr,useExisting:en},wr,{provide:ze,useExisting:ln},[]];var Ae=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Tr=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},xr=class{encodeKey(i){return Ia(i)}encodeValue(i){return Ia(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Zc(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,c]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],s=e.get(a)||[];s.push(c),e.set(a,s)}),e}var Qc=/%(\d[a-f0-9])/gi,Jc={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ia(n){return encodeURIComponent(n).replace(Qc,(i,e)=>Jc[e]??i)}function ti(n){return`${n}`}var De=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new xr,i.fromString){if(i.fromObject)throw new E(2805,!1);this.map=Zc(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(ti):[ti(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(ti(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(ti(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function el(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ra(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Ta(n){return typeof Blob<"u"&&n instanceof Blob}function xa(n){return typeof FormData<"u"&&n instanceof FormData}function tl(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Ir="Content-Type",Ma="Accept",Aa="text/plain",Pa="application/json",nl=`${Pa}, ${Aa}, */*`,Et=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(el(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ae,this.context??=new Tr,!this.params)this.params=new De,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),s=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+s+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ra(this.body)||Ta(this.body)||xa(this.body)||tl(this.body)?this.body:this.body instanceof De?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xa(this.body)?null:Ta(this.body)?this.body.type||null:Ra(this.body)?null:typeof this.body=="string"?Aa:this.body instanceof De?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Pa:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,c=i.cache||this.cache,s=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,v=i.referrer||this.referrer,f=i.integrity||this.integrity,L=i.referrerPolicy||this.referrerPolicy,j=i.transferCache??this.transferCache,B=i.timeout??this.timeout,P=i.body!==void 0?i.body:this.body,te=i.withCredentials??this.withCredentials,ne=i.reportProgress??this.reportProgress,W=i.reportUploadProgress??this.reportUploadProgress,dt=i.reportDownloadProgress??this.reportDownloadProgress,$t=i.headers||this.headers,Xe=i.params||this.params,zn=i.context??this.context;return i.setHeaders!==void 0&&($t=Object.keys(i.setHeaders).reduce((ut,Ze)=>ut.set(Ze,i.setHeaders[Ze]),$t)),i.setParams&&(Xe=Object.keys(i.setParams).reduce((ut,Ze)=>ut.set(Ze,i.setParams[Ze]),Xe)),new n(e,t,P,{params:Xe,headers:$t,context:zn,reportProgress:ne,reportUploadProgress:W,reportDownloadProgress:dt,responseType:r,withCredentials:te,transferCache:j,keepalive:o,cache:c,priority:a,timeout:B,mode:s,redirect:d,credentials:u,referrer:v,integrity:f,referrerPolicy:L})}},Ct=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ct||{}),un=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new Ae,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Mr=class n extends un{constructor(i={}){super(i)}type=Ct.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},hn=class n extends un{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ct.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},it=class extends un{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},il=200;var rl=/^\)\]\}',?\n/,Xh=1024*1024,ol=new g("",{factory:()=>null}),al=(()=>{class n{fetchImpl=l(Dr,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(z);destroyRef=l(Qe);maxResponseSize=l(ol);handle(e){return new Hn(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(Ar,a=>t.error(new it({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}doRequest(e,t,r){return D(this,null,function*(){let o=this.createRequestInit(e),a;try{let P=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,h({signal:t},o)));sl(P),r.next({type:Ct.Sent}),a=yield P}catch(P){r.error(new it({error:P,status:P.status??0,statusText:P.statusText,url:e.urlWithParams,headers:P.headers}));return}let c=new Ae(a.headers),s=a.statusText,d=a.url||e.urlWithParams,u=a.status,v=null,f=e.reportProgress||e.reportDownloadProgress;if(f&&r.next(new Mr({headers:c,status:u,statusText:s,url:d})),a.body){let P=a.headers.get("content-length"),te=P!==null?Number(P):NaN;this.maxResponseSize!==null&&Number.isFinite(te)&&te>this.maxResponseSize&&Da(this.maxResponseSize);let ne=[],W=a.body.getReader(),dt=0,$t,Xe,zn=typeof Zone<"u"&&Zone.current,ut=!1;if(yield this.ngZone.runOutsideAngular(()=>D(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield W.cancel(),ut=!0;break}let{done:Vt,value:Yi}=yield W.read();if(Vt)break;if(ne.push(Yi),dt+=Yi.length,this.maxResponseSize!==null&&dt>this.maxResponseSize&&(yield W.cancel(),Da(this.maxResponseSize)),f){Xe=e.responseType==="text"?(Xe??"")+($t??=new TextDecoder).decode(Yi,{stream:!0}):void 0;let Eo=()=>r.next({type:Ct.DownloadProgress,total:Number.isFinite(te)?te:void 0,loaded:dt,partialText:Xe});zn?zn.run(Eo):Eo()}}})),ut){r.complete();return}let Ze=this.concatChunks(ne,dt);try{let Vt=a.headers.get(Ir)??"";v=this.parseBody(e,Ze,Vt,u)}catch(Vt){r.error(new it({error:Vt,headers:new Ae(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=v?il:0);let L=u>=200&&u<300,j=a.redirected,B=a.type;L?(r.next(new hn({body:v,headers:c,status:u,statusText:s,url:d,redirected:j,responseType:B})),r.complete()):r.error(new it({error:v,headers:c,status:u,statusText:s,url:d,redirected:j,responseType:B}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(rl,"");if(a==="")return null;try{return JSON.parse(a)}catch(c){if(o<200||o>=300)return a;throw c}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new E(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Ma)||(t[Ma]=nl),!e.headers.has(Ir)){let o=e.detectContentTypeHeader();o!==null&&(t[Ir]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})(),Dr=class{};function Ar(){}function sl(n){n.then(Ar,Ar)}function Da(n){throw new E(2825,!1)}function cl(n,i){return i(n)}function ll(n,i,e){return(t,r)=>J(e,()=>i(t,o=>n(o,r)))}var dl=new g("",{factory:()=>[]}),ka=new g(""),ul=new g("",{factory:()=>!0});var hl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(al),r},providedIn:"root"})}return n})();var ml=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Bo);contributeToStability=l(ul);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(dl),...this.injector.get(ka,[])]));this.chain=t.reduceRight((r,o)=>ll(r,o,this.injector),cl)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(mt(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(S(hl),S(de))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(ml),r},providedIn:"root"})}return n})();function Rr(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Pr=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Et)o=e;else{let s;r.headers instanceof Ae?s=r.headers:s=new Ae(r.headers);let d;r.params&&(r.params instanceof De?d=r.params:d=new De({fromObject:r.params})),o=new Et(e,t,r.body!==void 0?r.body:null,{headers:s,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(Wt(s=>this.handler.handle(s)));if(e instanceof Et||r.observe==="events")return a;let c=a.pipe(_e(s=>s instanceof hn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(M(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new E(2806,!1);return s.body}));case"blob":return c.pipe(M(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new E(2807,!1);return s.body}));case"text":return c.pipe(M(s=>{if(s.body!==null&&typeof s.body!="string")throw new E(2808,!1);return s.body}));default:return c.pipe(M(s=>s.body))}case"response":return c;default:throw new E(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new De().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Rr(r,t))}post(e,t,r={}){return this.request("POST",e,Rr(r,t))}put(e,t,r={}){return this.request("PUT",e,Rr(r,t))}static \u0275fac=function(t){return new(t||n)(S(pl))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Na=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(S(I))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(vl),r},providedIn:"root"})}return n})(),vl=(()=>{class n extends kr{_doc=l(I);sanitize(e,t){if(t==null)return null;switch(e){case re.NONE:return t;case re.HTML:return bt(t,"HTML")?Be(t):Ko(this._doc,String(t)).toString();case re.STYLE:return bt(t,"Style")?Be(t):t;case re.SCRIPT:if(bt(t,"Script"))return Be(t);throw new E(5200,!1);case re.URL:return bt(t,"URL")?Be(t):qo(String(t));case re.RESOURCE_URL:if(bt(t,"ResourceURL"))return Be(t);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return Ho(e)}bypassSecurityTrustStyle(e){return $o(e)}bypassSecurityTrustScript(e){return Vo(e)}bypassSecurityTrustUrl(e){return Go(e)}bypassSecurityTrustResourceUrl(e){return Wo(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();var w="primary",Rn=Symbol("RouteTitle"),Ur=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ot(n){return new Ur(n)}function Nr(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Va(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let s={},d=n.slice(0,t.length);return Nr(t,d,s)?{consumed:d,posParams:s}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let c={};return!Nr(o,n.slice(0,o.length),c)||!Nr(a,n.slice(n.length-a.length),c)?null:{consumed:n,posParams:c}}function si(n){return new Promise((i,e)=>{n.pipe(je()).subscribe({next:t=>i(t),error:t=>e(t)})})}function yl(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Ee(n[e],i[e]))return!1;return!0}function Ee(n,i){let e=n?jr(n):void 0,t=i?jr(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Ga(n[r],i[r]))return!1;return!0}function jr(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ga(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function _l(n){return n.length>0?n[n.length-1]:null}function ct(n){return Xi(n)?n:Qo(n)?le(Promise.resolve(n)):y(n)}function Wa(n){return Xi(n)?si(n):Promise.resolve(n)}var wl={exact:Ya,subset:Xa},qa={exact:Sl,subset:El,ignored:()=>!0},Ka={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Br={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function La(n,i,e){return wl[e.paths](n.root,i.root,e.matrixParams)&&qa[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function Sl(n,i){return Ee(n,i)}function Ya(n,i,e){if(!rt(n.segments,i.segments)||!ri(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Ya(n.children[t],i.children[t],e))return!1;return!0}function El(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Ga(n[e],i[e]))}function Xa(n,i,e){return Za(n,i,i.segments,e)}function Za(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!rt(r,e)||i.hasChildren()||!ri(r,e,t))}else if(n.segments.length===e.length){if(!rt(n.segments,e)||!ri(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Xa(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!rt(n.segments,r)||!ri(n.segments,r,t)||!n.children[w]?!1:Za(n.children[w],i,o,t)}}function ri(n,i,e){return i.every((t,r)=>qa[e](n[r].parameters,t.parameters))}var me=class{root;queryParams;fragment;_queryParamMap;constructor(i=new x([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=ot(this.queryParams),this._queryParamMap}toString(){return Rl.serialize(this)}},x=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return oi(this)}},Ge=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ot(this.parameters),this._parameterMap}toString(){return Ja(this)}};function Cl(n,i){return rt(n,i)&&n.every((e,t)=>Ee(e.parameters,i[t].parameters))}function rt(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Il(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===w&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==w&&(e=e.concat(i(r,t)))}),e}var Tn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:()=>new We})}return n})(),We=class{parse(i){let e=new Hr(i);return new me(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${mn(i.root,!0)}`,t=Ml(i.queryParams),r=typeof i.fragment=="string"?`#${Tl(i.fragment)}`:"";return`${e}${t}${r}`}},Rl=new We;function oi(n){return n.segments.map(i=>Ja(i)).join("/")}function mn(n,i){if(!n.hasChildren())return oi(n);if(i){let e=n.children[w]?mn(n.children[w],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==w&&t.push(`${r}:${mn(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Il(n,(t,r)=>r===w?[mn(n.children[w],!1)]:[`${r}:${mn(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[w]!=null?`${oi(n)}/${e[0]}`:`${oi(n)}/(${e.join("//")})`}}function Qa(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ni(n){return Qa(n).replace(/%3B/gi,";")}function Tl(n){return encodeURI(n)}function zr(n){return Qa(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ai(n){return decodeURIComponent(n)}function Fa(n){return ai(n.replace(/\+/g,"%20"))}function Ja(n){return`${zr(n.path)}${xl(n.parameters)}`}function xl(n){return Object.entries(n).map(([i,e])=>`;${zr(i)}=${zr(e)}`).join("")}function Ml(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${ni(e)}=${ni(r)}`).join("&"):`${ni(e)}=${ni(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Dl=/^[^\/()?;#]+/;function Or(n){let i=n.match(Dl);return i?i[0]:""}var Al=/^[^\/()?;=#]+/;function Pl(n){let i=n.match(Al);return i?i[0]:""}var kl=/^[^=?&#]+/;function Nl(n){let i=n.match(kl);return i?i[0]:""}var Ol=/^[^&#]+/;function Ll(n){let i=n.match(Ol);return i?i[0]:""}var Hr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new x([],{}):new x([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[w]=new x(e,t)),r}parseSegment(){let i=Or(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(i),new Ge(ai(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Pl(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Or(this.remaining);r&&(t=r,this.capture(t))}i[ai(e)]=ai(t)}parseQueryParam(i){let e=Nl(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Ll(this.remaining);a&&(t=a,this.capture(t))}let r=Fa(e),o=Fa(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Or(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=w);let c=this.parseChildren(e+1);t[a??w]=Object.keys(c).length===1&&c[w]?c[w]:new x([],c),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new E(4011,!1)}};function es(n){return n.segments.length>0?new x([],{[w]:n}):n}function ts(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=ts(r);if(t===w&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))i[a]=c;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new x(n.segments,i);return Fl(e)}function Fl(n){if(n.numberOfChildren===1&&n.children[w]){let i=n.children[w];return new x(n.segments.concat(i.segments),i.children)}return n}function xt(n){return n instanceof me}function ns(n,i,e=null,t=null,r=new We){let o=is(n);return rs(o,i,e,t,r)}function is(n){let i;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let c=new x(o.url,a);return o===n&&(i=c),c}let t=e(n.root),r=es(t);return i??r}function rs(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Lr(o,o,o,e,t,r);let a=Ul(i);if(a.toRoot())return Lr(o,o,new x([],{}),e,t,r);let c=jl(a,o,n),s=c.processChildren?fn(c.segmentGroup,c.index,a.commands):as(c.segmentGroup,c.index,a.commands);return Lr(o,c.segmentGroup,s,e,t,r)}function ci(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function bn(n){return typeof n=="object"&&n!=null&&n.outlets}function Ua(n,i,e){n||="\u0275";let t=new me;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Lr(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(v=>Ua(d,v,o)):Ua(d,u,o);let c;n===i?c=e:c=os(n,i,e);let s=es(ts(c));return new me(s,a,r)}function os(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=os(o,i,e)}),new x(n.segments,t)}var li=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&ci(t[0]))throw new E(4003,!1);let r=t.find(bn);if(r&&r!==_l(t))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ul(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new li(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,d])=>{c[s]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((c,s)=>{s==0&&c==="."||(s==0&&c===""?e=!0:c===".."?i++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new li(e,i,t)}var Rt=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function jl(n,i,e){if(n.isAbsolute)return new Rt(i,!0,0);if(!e)return new Rt(i,!1,NaN);if(e.parent===null)return new Rt(e,!0,0);let t=ci(n.commands[0])?0:1,r=e.segments.length-1+t;return Bl(e,r,n.numberOfDoubleDots)}function Bl(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new E(4005,!1);r=t.segments.length}return new Rt(t,!1,r-o)}function zl(n){return bn(n[0])?n[0].outlets:{[w]:n}}function as(n,i,e){if(n??=new x([],{}),n.segments.length===0&&n.hasChildren())return fn(n,i,e);let t=Hl(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new x(n.segments.slice(0,t.pathIndex),{});return o.children[w]=new x(n.segments.slice(t.pathIndex),n.children),fn(o,0,r)}else return t.match&&r.length===0?new x(n.segments,{}):t.match&&!n.hasChildren()?$r(n,i,e):t.match?fn(n,0,r):$r(n,i,e)}function fn(n,i,e){if(e.length===0)return new x(n.segments,{});{let t=zl(e),r={};if(Object.keys(t).some(o=>o!==w)&&n.children[w]&&n.numberOfChildren===1&&n.children[w].segments.length===0){let o=fn(n.children[w],i,e);return new x(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=as(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new x(n.segments,r)}}function Hl(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],c=e[t];if(bn(c))break;let s=`${c}`,d=t<e.length-1?e[t+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d=="object"&&d.outlets===void 0){if(!Ba(s,d,a))return o;t+=2}else{if(!Ba(s,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function $r(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(bn(o)){let s=$l(o.outlets);return new x(t,s)}if(r===0&&ci(e[0])){let s=n.segments[i];t.push(new Ge(s.path,ja(e[0]))),r++;continue}let a=bn(o)?o.outlets[w]:`${o}`,c=r<e.length-1?e[r+1]:null;a&&c&&ci(c)?(t.push(new Ge(a,ja(c))),r+=2):(t.push(new Ge(a,{})),r++)}return new x(t,{})}function $l(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=$r(new x([],{}),0,t))}),i}function ja(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Ba(n,i,e){return n==e.path&&Ee(i,e.parameters)}var gn="imperative",$=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})($||{}),se=class{id;url;constructor(i,e){this.id=i,this.url=e}},at=class extends se{type=$.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ke=class extends se{urlAfterRedirects;type=$.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},K=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(K||{}),yn=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(yn||{}),he=class extends se{reason;code;type=$.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ss(n){return n instanceof he&&(n.code===K.Redirect||n.code===K.SupersededByNewNavigation)}var Ne=class extends se{reason;code;type=$.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},st=class extends se{error;target;type=$.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_n=class extends se{urlAfterRedirects;state;type=$.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},di=class extends se{urlAfterRedirects;state;type=$.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ui=class extends se{urlAfterRedirects;state;shouldActivate;type=$.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},hi=class extends se{urlAfterRedirects;state;type=$.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mi=class extends se{urlAfterRedirects;state;type=$.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pi=class{route;type=$.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},fi=class{route;type=$.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},gi=class{snapshot;type=$.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vi=class{snapshot;type=$.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bi=class{snapshot;type=$.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yi=class{snapshot;type=$.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Mt=class{},wn=class{},Dt=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Vl(n){return!(n instanceof Mt)&&!(n instanceof Dt)&&!(n instanceof wn)}var _i=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Nt(this.rootInjector)}},Nt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new _i(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(S(de))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Vr(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Vr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Gr(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Gr(i,this._root).map(e=>e.value)}};function Vr(n,i){if(n===i.value)return i;for(let e of i.children){let t=Vr(n,e);if(t)return t}return null}function Gr(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Gr(n,e);if(t.length)return t.unshift(i),t}return[]}var ae=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function It(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Sn=class extends wi{snapshot;constructor(i,e){super(i),this.snapshot=e,eo(this,i)}toString(){return this.snapshot.toString()}};function cs(n,i){let e=Gl(n,i),t=new Z([new Ge("",{})]),r=new Z({}),o=new Z({}),a=new Z({}),c=new Z(""),s=new qe(t,r,a,c,o,w,n,e.root);return s.snapshot=e.root,new Sn(new ae(s,[]),e)}function Gl(n,i){let e={},t={},r={},a=new At([],e,r,"",t,w,n,null,{},i);return new En("",new ae(a,[]))}var qe=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,c,s){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(M(d=>d[Rn]))??y(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(M(i=>ot(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(M(i=>ot(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},Wl="always";function Jr(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:h(h({},i.params),n.params),data:h(h({},i.data),n.data),resolve:h(h(h(h({},n.data),i.data),r?.data),n._resolvedData)}:t={params:h({},n.params),data:h({},n.data),resolve:h(h({},n.data),n._resolvedData??{})},r&&ds(r)&&(t.resolve[Rn]=r.title),t}var At=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Rn]}constructor(i,e,t,r,o,a,c,s,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ot(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ot(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},En=class extends wi{url;constructor(i,e){super(e),this.url=i,eo(this,e)}toString(){return ls(this._root)}};function eo(n,i){i.value._routerState=n,i.children.forEach(e=>eo(n,e))}function ls(n){let i=n.children.length>0?` { ${n.children.map(ls).join(", ")} } `:"";return`${n.value}${i}`}function Fr(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Ee(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Ee(i.params,e.params)||n.paramsSubject.next(e.params),yl(i.url,e.url)||n.urlSubject.next(e.url),Ee(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Wr(n,i){let e=Ee(n.params,i.params)&&Cl(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Wr(n.parent,i.parent))}function ds(n){return typeof n.title=="string"||n.title===null}var us=new g(""),xn=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=w;activateEvents=new ue;deactivateEvents=new ue;attachEvents=new ue;detachEvents=new ue;routerOutletData=rn();parentContexts=l(Nt);location=l(Zo);changeDetector=l(nt);inputBinder=l(Ii,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new qr(e,c,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Yt]})}return n})(),qr=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===qe?this.route:i===Nt?this.childContexts:i===us?this.outletData:this.parent.get(i,e)}},Ii=new g("");var to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&A(0,"router-outlet")},dependencies:[xn],encapsulation:2,changeDetection:1})}return n})();function no(n){let i=n.children&&n.children.map(no),e=i?Y(h({},n),{children:i}):h({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==w&&(e.component=to),e}function ql(n,i,e){let t=Cn(n,i._root,e?e._root:void 0);return new Sn(t,i)}function Cn(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Kl(n,i,e);return new ae(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(c=>Cn(n,c)),a}}let t=Yl(i.value),r=i.children.map(o=>Cn(n,o));return new ae(t,r)}}function Kl(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return Cn(n,t,r);return Cn(n,t)})}function Yl(n){return new qe(new Z(n.url),new Z(n.params),new Z(n.queryParams),new Z(n.fragment),new Z(n.data),n.outlet,n.component,n)}var Pt=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},hs="ngNavigationCancelingError";function Si(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=xt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ms(!1,K.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function ms(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[hs]=!0,e.cancellationCode=i,e}function Xl(n){return ps(n)&&xt(n.url)}function ps(n){return!!n&&n[hs]}var Kr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Fr(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=It(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=It(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),c=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:c})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=It(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=It(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new yi(o.value.snapshot))}),i.children.length&&this.forwardEvent(new vi(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Fr(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Fr(c.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},Ei=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Tt=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Zl(n,i,e){let t=n._root,r=i?i._root:null;return pn(t,r,e,[t.value])}function Ql(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Ot(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!ko(n)?n:i.get(n):t}function pn(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=It(i);return n.children.forEach(a=>{Jl(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>vn(c,e.getContext(a),r)),r}function Jl(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,c=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=ed(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new Ei(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?pn(n,i,c?c.children:null,t,r):pn(n,i,e,t,r),s&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new Tt(c.outlet.component,a))}else a&&vn(i,c,r),r.canActivateChecks.push(new Ei(t)),o.component?pn(n,null,c?c.children:null,t,r):pn(n,null,e,t,r);return r}function ed(n,i,e){if(typeof e=="function")return J(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!rt(n.url,i.url);case"pathParamsOrQueryParamsChange":return!rt(n.url,i.url)||!Ee(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Wr(n,i)||!Ee(n.queryParams,i.queryParams);default:return!Wr(n,i)}}function vn(n,i,e){let t=It(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?vn(a,i.children.getContext(o),e):vn(a,null,e):vn(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Tt(i.outlet.component,r)):e.canDeactivateChecks.push(new Tt(null,r)):e.canDeactivateChecks.push(new Tt(null,r))}function Mn(n){return typeof n=="function"}function td(n){return typeof n=="boolean"}function nd(n){return n&&Mn(n.canLoad)}function id(n){return n&&Mn(n.canActivate)}function rd(n){return n&&Mn(n.canActivateChild)}function od(n){return n&&Mn(n.canDeactivate)}function ad(n){return n&&Mn(n.canMatch)}function fs(n){return n instanceof Io||n?.name==="EmptyError"}var ii=Symbol("INITIAL_VALUE");function kt(){return Q(n=>Ro(n.map(i=>i.pipe(Ue(1),pt(ii)))).pipe(M(i=>{for(let e of i)if(e!==!0){if(e===ii)return ii;if(e===!1||sd(e))return e}return!0}),_e(i=>i!==ii),Ue(1)))}function sd(n){return xt(n)||n instanceof Pt}function gs(n){return n.aborted?y(void 0).pipe(Ue(1)):new Hn(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function vs(n){return fe(gs(n))}function cd(n){return Fe(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?y(Y(h({},i),{guardsResult:!0})):ld(o,e,t).pipe(Fe(a=>a&&td(a)?dd(e,r,n):y(a)),M(a=>Y(h({},i),{guardsResult:a})))})}function ld(n,i,e){return le(n).pipe(Fe(t=>fd(t.component,t.route,e,i)),je(t=>t!==!0,!0))}function dd(n,i,e){return le(i).pipe(Wt(t=>To(hd(t.route.parent,e),ud(t.route,e),pd(n,t.path),md(n,t.route))),je(t=>t!==!0,!0))}function ud(n,i){return n!==null&&i&&i(new bi(n)),y(!0)}function hd(n,i){return n!==null&&i&&i(new gi(n)),y(!0)}function md(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let t=e.map(r=>Vn(()=>{let o=i._environmentInjector,a=Ot(r,o),c=id(a)?a.canActivate(i,n):J(o,()=>a(i,n));return ct(c).pipe(je())}));return y(t).pipe(kt())}function pd(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Ql(o)).filter(o=>o!==null).map(o=>Vn(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,d=Ot(c,s),u=rd(d)?d.canActivateChild(e,n):J(s,()=>d(e,n));return ct(u).pipe(je())});return y(a).pipe(kt())}));return y(r).pipe(kt())}function fd(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let c=i._environmentInjector,s=Ot(a,c),d=od(s)?s.canDeactivate(n,i,e,t):J(c,()=>s(n,i,e,t));return ct(d).pipe(je())});return y(o).pipe(kt())}function gd(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(c=>{let s=Ot(c,n),d=nd(s)?s.canLoad(i,e):J(n,()=>s(i,e)),u=ct(d);return r?u.pipe(vs(r)):u});return y(a).pipe(kt(),bs(t))}function bs(n){return Co(V(i=>{if(typeof i!="boolean")throw Si(n,i)}),M(i=>i===!0))}function vd(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return y(!0);let c=a.map(s=>{let d=Ot(s,n),u=ad(d)?d.canMatch(i,e,r):J(n,()=>d(i,e,r));return ct(u).pipe(vs(o))});return y(c).pipe(kt(),bs(t))}var Pe=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},In=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function bd(n){throw new E(4e3,!1)}function yd(n){throw ms(!1,K.GuardRejected)}var Yr=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return D(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[w])throw bd(`${i.redirectTo}`);r=r.children[w]}})}applyRedirectCommands(i,e,t,r,o){return D(this,null,function*(){let a=yield _d(e,r,o);if(a instanceof me)throw new In(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new In(c);return c})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new me(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);t[r]=e[c]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(i,s,t,r)}),new x(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new E(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function _d(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return si(ct(J(e,()=>t(i))))}function wd(n,i){return n.providers&&!n._injector&&(n._injector=or(n.providers,i,`Route: ${n.path}`)),n._injector??i}function be(n){return n.outlet||w}function Sd(n,i){let e=n.filter(t=>be(t)===i);return e.push(...n.filter(t=>be(t)!==i)),e}var Xr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ys(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Ed(n,i,e,t,r,o,a){let c=_s(n,i,e);if(!c.matched)return y(c);let s=ys(o(c));return t=wd(i,t),vd(t,i,e,r,s,a).pipe(M(d=>d===!0?c:h({},Xr)))}function _s(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?h({},Xr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Va)(e,n,i);if(!r)return h({},Xr);let o={};Object.entries(r.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function za(n,i,e,t,r){return e.length>0&&Rd(n,e,t,r)?{segmentGroup:new x(i,Id(t,new x(e,n.children))),slicedSegments:[]}:e.length===0&&Td(n,e,t)?{segmentGroup:new x(n.segments,Cd(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new x(n.segments,n.children),slicedSegments:e}}function Cd(n,i,e,t){let r={};for(let o of e)if(Ri(n,i,o)&&!t[be(o)]){let a=new x([],{});r[be(o)]=a}return h(h({},t),r)}function Id(n,i){let e={};e[w]=i;for(let t of n)if(t.path===""&&be(t)!==w){let r=new x([],{});e[be(t)]=r}return e}function Rd(n,i,e,t){return e.some(r=>!Ri(n,i,r)||!(be(r)!==w)?!1:!(t!==void 0&&be(r)===t))}function Td(n,i,e){return e.some(t=>Ri(n,i,t))}function Ri(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function xd(n,i,e){return i.length===0&&!n.children[e]}var Zr=class{};function Md(n,i,e,t,r,o,a,c){return D(this,null,function*(){return new Qr(n,i,e,t,r,a,o,c).recognize()})}var Dd=31,Qr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,c,s){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new Yr(this.urlSerializer,this.urlTree)}noMatchError(i){return new E(4002,`'${i.segmentGroup}'`)}recognize(){return D(this,null,function*(){let i=za(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new ae(t,e),o=new En("",r),a=ns(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return D(this,null,function*(){let e=new At([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),w,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,w,e),rootSnapshot:e}}catch(t){if(t instanceof In)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Pe?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return D(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=yield this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof ae?[a]:[]})}processChildren(i,e,t,r){return D(this,null,function*(){let o=[];for(let s of Object.keys(t.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=t.children[s],u=Sd(e,s),v=yield this.processSegmentGroup(i,u,d,s,r);a.push(...v)}let c=ws(a);return Ad(c),c})}processSegment(i,e,t,r,o,a,c){return D(this,null,function*(){for(let s of e)try{return yield this.processSegmentAgainstRoute(s._injector??i,e,s,t,r,o,a,c)}catch(d){if(d instanceof Pe||fs(d))continue;throw d}if(xd(t,r,o))return new Zr;throw new Pe(t)})}processSegmentAgainstRoute(i,e,t,r,o,a,c,s){return D(this,null,function*(){if(be(t)!==a&&(a===w||!Ri(r,o,t)))throw new Pe(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,s);throw new Pe(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,c){return D(this,null,function*(){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:v,remainingSegments:f}=_s(e,r,o);if(!s)throw new Pe(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Dd&&(this.allowRedirects=!1));let L=this.createSnapshot(i,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let j=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,v,ys(L),i),B=yield this.applyRedirects.lineralizeSegments(r,j);return this.processSegment(i,t,e,B.concat(f),a,!1,c)})}createSnapshot(i,e,t,r,o){let a=new At(t,r,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,kd(e),be(e),e.component??e._loadedComponent??null,e,Nd(e),i),c=Jr(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}matchSegmentAgainstRoute(i,e,t,r,o,a){return D(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=W=>this.createSnapshot(i,t,W.consumedSegments,W.parameters,a),s=yield si(Ed(e,t,r,i,this.urlSerializer,c,this.abortSignal));if(t.path==="**"&&(e.children={}),!s?.matched)throw new Pe(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:v,consumedSegments:f,remainingSegments:L}=s,j=this.createSnapshot(i,t,f,v,a),{segmentGroup:B,slicedSegments:P}=za(e,f,L,d,o);if(P.length===0&&B.hasChildren()){let W=yield this.processChildren(u,d,B,j);return new ae(j,W)}if(d.length===0&&P.length===0)return new ae(j,[]);let te=be(t)===o,ne=yield this.processSegment(u,d,B,P,te?w:o,!0,j);return new ae(j,ne instanceof ae?[ne]:[])})}getChildConfig(i,e,t){return D(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield si(gd(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw yd(e)}return{routes:[],injector:i}})}};function Ad(n){n.sort((i,e)=>i.value.outlet===w?-1:e.value.outlet===w?1:i.value.outlet.localeCompare(e.value.outlet))}function Pd(n){let i=n.value.routeConfig;return i&&i.path===""}function ws(n){let i=[],e=new Set;for(let t of n){if(!Pd(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=ws(t.children);i.push(new ae(t.value,r))}return i.filter(t=>!e.has(t))}function kd(n){return n.data||{}}function Nd(n){return n.resolve||{}}function Od(n,i,e,t,r,o,a){return Fe(c=>D(null,null,function*(){let{state:s,tree:d}=yield Md(n,i,e,t,c.extractedUrl,r,o,a);return Y(h({},c),{targetSnapshot:s,urlAfterRedirects:d})}))}function Ld(n){return Fe(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return y(i);let r=new Set(t.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let s of Ss(c))o.add(s);let a=0;return le(o).pipe(Wt(c=>r.has(c)?Fd(c,e,n):(c.data=Jr(c,c.parent,n).resolve,y(void 0))),V(()=>a++),Qi(1),Fe(c=>a===o.size?y(i):ce))})}function Ss(n){let i=n.children.map(e=>Ss(e)).flat();return[n,...i]}function Fd(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!ds(t)&&(r[Rn]=t.title),Vn(()=>(n.data=Jr(n,n.parent,e).resolve,Ud(r,n,i).pipe(M(o=>(n._resolvedData=o,n.data=h(h({},n.data),o),null)))))}function Ud(n,i,e){let t=jr(n);if(t.length===0)return y({});let r={};return le(t).pipe(Fe(o=>jd(n[o],i,e).pipe(je(),V(a=>{if(a instanceof Pt)throw Si(new We,a);r[o]=a}))),Qi(1),M(()=>r),Gt(o=>fs(o)?ce:$n(o)))}function jd(n,i,e){let t=i._environmentInjector,r=Ot(n,t),o=r.resolve?r.resolve(i,e):J(t,()=>r(i,e));return ct(o)}function Ha(n){return Q(i=>{let e=n(i);return e?le(e).pipe(M(()=>i)):y(i)})}var io=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===w);return t}getResolvedTitleForRoute(e){return e.data[Rn]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:()=>l(Es)})}return n})(),Es=(()=>{class n extends io{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(S(Na))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dn=new g("",{factory:()=>({})}),An=new g(""),Cs=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(ra);loadComponent(e,t){return D(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=D(this,null,function*(){try{let o=yield Wa(J(e,()=>t.loadComponent())),a=yield Rs(pr(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=D(this,null,function*(){try{let o=yield Is(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();function Is(n,i,e,t){return D(this,null,function*(){let r=yield Wa(J(e,()=>n.loadChildren())),o=yield Rs(pr(r)),a;o instanceof Jo||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),t&&t(n);let c,s,d=!1,u;return Array.isArray(a)?(s=a,d=!0):(c=a.create(e).injector,u=a,s=c.get(An,[],{optional:!0,self:!0}).flat()),{routes:s.map(no),injector:c,factory:u}})}function Rs(n){return D(this,null,function*(){return n})}var Ti=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:()=>l(Bd)})}return n})(),Bd=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})(),Ts=new g("");var zd=()=>{},xs=new g(""),Ms=(()=>{class n{currentNavigation=Ie(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Ie(null);events=new F;transitionAbortWithErrorSubject=new F;configLoader=l(Cs);environmentInjector=l(de);destroyRef=l(Qe);urlSerializer=l(Tn);rootContexts=l(Nt);location=l(wt);inputBindingEnabled=l(Ii,{optional:!0})!==null;titleStrategy=l(io);options=l(Dn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Wl;urlHandlingStrategy=l(Ti);createViewTransition=l(Ts,{optional:!0});navigationErrorHandler=l(xs,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new pi(r)),t=r=>this.events.next(new fi(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;tt(()=>{this.transitions?.next(Y(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Z(null),this.transitions.pipe(_e(t=>t!==null),Q(t=>{let r=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===t.id;return y(t).pipe(Q(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",K.SupersededByNewNavigation),ce;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?Y(h({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&v!=="reload")return this.events.next(new Ne(s.id,this.urlSerializer.serialize(s.rawUrl),"",yn.IgnoredSameUrlNavigation)),s.resolve(!1),ce;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(Q(f=>(this.events.next(new at(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?ce:Promise.resolve(f))),Od(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),V(f=>{t.targetSnapshot=f.targetSnapshot,t.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(L=>(L.finalUrl=f.urlAfterRedirects,L)),this.events.next(new wn)}),Q(f=>le(t.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(M(()=>f))),V(()=>{let f=new _n(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:L,source:j,restoredState:B,extras:P}=s,te=new at(f,this.urlSerializer.serialize(L),j,B);this.events.next(te);let ne=cs(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=Y(h({},s),{targetSnapshot:ne,urlAfterRedirects:L,extras:Y(h({},P),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(W=>(W.finalUrl=L,W)),y(t)}else return this.events.next(new Ne(s.id,this.urlSerializer.serialize(s.extractedUrl),"",yn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ce}),M(s=>{let d=new di(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=t=Y(h({},s),{guards:Zl(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),cd(s=>this.events.next(s)),Q(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Si(this.urlSerializer,s.guardsResult);let d=new ui(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!c())return ce;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",K.GuardRejected),ce;if(s.guards.canActivateChecks.length===0)return y(s);let u=new hi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!c())return ce;let v=!1;return y(s).pipe(Ld(this.paramsInheritanceStrategy),V({next:()=>{v=!0;let f=new mi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{v||this.cancelNavigationTransition(s,"",K.NoDataFromResolver)}}))}),Ha(s=>{let d=v=>{let f=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let L=v._environmentInjector;f.push(this.configLoader.loadComponent(L,v.routeConfig).then(j=>{v.component=j}))}for(let L of v.children)f.push(...d(L));return f},u=d(s.targetSnapshot.root);return u.length===0?y(s):le(Promise.all(u).then(()=>s))}),Q(s=>{let d=ql(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=Y(h({},s),{targetRouterState:d}),this.currentNavigation.update(u=>(u.targetRouterState=d,u)),y(s)}),Ha(()=>this.afterPreactivation()),Q(()=>{let{currentSnapshot:s,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return u?le(u).pipe(M(()=>t)):y(t)}),Ue(1),Q(s=>{r=!1,this.events.next(new Mt);let d=t.beforeActivateHandler.deferredHandle;return d?le(d.then(()=>s)):y(s)}),V(s=>{new Kr(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),c()&&(o=!0,this.currentNavigation.update(d=>(d.abort=zd,d)),this.lastSuccessfulNavigation.set(tt(this.currentNavigation)),this.events.next(new ke(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),fe(gs(a.signal).pipe(_e(()=>!o&&r),V(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",K.Aborted)}))),V({complete:()=>{o=!0}}),fe(this.transitionAbortWithErrorSubject.pipe(V(s=>{throw s}))),mt(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",K.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Gt(s=>{if(o=!0,this.destroyed)return t.resolve(!1),ce;if(ps(s))this.events.next(new he(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Xl(s)?this.events.next(new Dt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let d=new st(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=J(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof Pt){let{message:v,cancellationCode:f}=Si(this.urlSerializer,u);this.events.next(new he(t.id,this.urlSerializer.serialize(t.extractedUrl),v,f)),this.events.next(new Dt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return ce}))}))}cancelNavigationTransition(e,t,r){let o=new he(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=tt(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();function Hd(n){return n!==gn}var Ds=new g("");var As=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:()=>l($d)})}return n})(),Ci=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},$d=(()=>{class n extends Ci{static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})(),ro=(()=>{class n{urlSerializer=l(Tn);options=l(Dn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(wt);urlHandlingStrategy=l(Ti);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new me;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof me?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=cs(null,l(de));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:()=>l(Vd)})}return n})(),Vd=(()=>{class n extends ro{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof at?this.updateStateMemento():e instanceof Ne?this.commitTransition(t):e instanceof _n?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Mt?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof he&&!ss(e)?this.restoreHistory(t):e instanceof st?this.restoreHistory(t,!0):e instanceof ke&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:c}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=h(h({},c),this.generateNgRouterState(o,s,t));this.location.replaceState(e,"",d)}else{let s=h(h({},c),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?h({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):h({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();function oo(n,i){n.events.pipe(_e(e=>e instanceof ke||e instanceof he||e instanceof st||e instanceof Ne),M(e=>e instanceof ke||e instanceof Ne?0:(e instanceof he?e.code===K.Redirect||e.code===K.SupersededByNewNavigation:!1)?2:1),_e(e=>e!==2),Ue(1)).subscribe(()=>{i()})}var xi=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(ar);stateManager=l(ro);options=l(Dn,{optional:!0})||{};pendingTasks=l(Oo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Ms);urlSerializer=l(Tn);location=l(wt);urlHandlingStrategy=l(Ti);injector=l(de);_events=new F;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(As);injectorCleanup=l(Ds,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(An,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Ii,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ht;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=tt(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof he&&t.code!==K.Redirect&&t.code!==K.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ke)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Dt){let a=t.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),s=h({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Hd(r.source)},a);this.scheduleNavigation(c,gn,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Vl(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),gn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,c=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Y(h({},o),{browserUrl:e})),r){let d=h({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(c);this.scheduleNavigation(s,t,a,o).catch(d=>{this.disposed||this.injector.get(Ji)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return tt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(no),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=t,d=s?this.currentUrlTree.fragment:a,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let v;try{let f=r?r.snapshot:this.routerState.snapshot.root;v=is(f)}catch(f){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),v=this.currentUrlTree.root}return rs(v,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=xt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,gn,null,t)}navigate(e,t={skipLocationChange:!1}){return Gd(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(qt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=h({},Ka):t===!1?r=h({},Br):r=h(h({},Br),t),xt(e))return La(this.currentUrlTree,e,r);let o=this.parseUrl(e);return La(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let c,s,d;a?(c=a.resolve,s=a.reject,d=a.promise):d=new Promise((v,f)=>{c=v,s=f});let u=this.pendingTasks.add();return oo(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();function Gd(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new E(4008,!1)}var Kd=new g("");function ao(n,...i){return ft([{provide:An,multi:!0,useValue:n},{provide:qe,useFactory:Yd},{provide:sr,multi:!0,useFactory:Xd},i.map(e=>e.\u0275providers)])}function Yd(){return l(xi).routerState.root}function Xd(){let n=l(ie);return i=>{let e=n.get(nn);if(i!==e.components[0])return;let t=n.get(xi),r=n.get(Zd);n.get(Qd)===1&&t.initialNavigation(),n.get(Jd,null,{optional:!0})?.setUpPreloading(),n.get(Kd,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Zd=new g("",{factory:()=>new F}),Qd=new g("",{factory:()=>1});var Jd=new g("");var Ps=[];var tu="@",nu=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(ie);loadingSchedulerFn=l(iu,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-JTXTSWEF.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new E(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new so(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let c=a.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(Uo,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){rr()};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),so=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(tu)}},iu=new g("");function ks(n="animations"){return Qt("NgAsyncAnimations"),ft([{provide:ze,useFactory:()=>new nu(l(I),l(ln),l(z),n)},{provide:Gn,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ns={providers:[aa({eventCoalescing:!0}),ao(Ps),ks()]};function Pn(n){return n.buttons===0||n.detail===0}function kn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var co;function Os(){if(co==null){let n=typeof document<"u"?document.head:null;co=!!(n&&(n.createShadowRoot||n.attachShadow))}return co}function lo(n){if(Os()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ye(n){return n.composedPath?n.composedPath()[0]:n.target}var uo;try{uo=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){uo=!1}var Oe=(()=>{class n{_platformId=l(gt);isBrowser=this._platformId?ga(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||uo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nn;function Ls(){if(Nn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Nn=!0}))}finally{Nn=Nn||!1}return Nn}function Lt(n){return Ls()?n:!!n.capture}function Ke(n){return n instanceof ee?n.nativeElement:n}var Fs=new g("cdk-input-modality-detector-options"),Us={ignoreKeys:[18,17,224,91,16]},js=650,ho={passive:!0,capture:!0},Bs=(()=>{class n{_platform=l(Oe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Z(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ye(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<js||(this._modality.next(Pn(e)?"keyboard":"mouse"),this._mostRecentTarget=ye(e))};_onTouchstart=e=>{if(kn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ye(e)};constructor(){let e=l(z),t=l(I),r=l(Fs,{optional:!0});if(this._options=h(h({},Us),r),this.modalityDetected=this._modality.pipe(Po(1)),this.modalityChanged=this.modalityDetected.pipe(Do()),this._platform.isBrowser){let o=l(ze).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,ho),o.listen(t,"mousedown",this._onMousedown,ho),o.listen(t,"touchstart",this._onTouchstart,ho)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),On=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(On||{}),zs=new g("cdk-focus-monitor-default-options"),Mi=Lt({passive:!0,capture:!0}),Ln=(()=>{class n{_ngZone=l(z);_platform=l(Oe);_inputModalityDetector=l(Bs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(I);_stopInputModalityDetector=new F;constructor(){let e=l(zs,{optional:!0});this._detectionMode=e?.detectionMode||On.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ye(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Ke(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=lo(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new F,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=Ke(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Ke(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,s])=>this._originChanged(c,t,s)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===On.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===On.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?js:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ye(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Mi),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Mi)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(fe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Mi),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Mi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Di=new WeakMap,Ye=(()=>{class n{_appRef;_injector=l(ie);_environmentInjector=l(de);load(e){let t=this._appRef=this._appRef||this._injector.get(nn),r=Di.get(t);r||(r={loaders:new Set,refs:[]},Di.set(t,r),t.onDestroy(()=>{Di.get(t)?.refs.forEach(o=>o.destroy()),Di.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ca(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),Ai;function ru(){if(Ai===void 0&&(Ai=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Ai=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Ai}function Ft(n){return ru()?.createHTML(n)||n}var $s=new Set,lt,mo=(()=>{class n{_platform=l(Oe);_nonce=l(vt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):au}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ou(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ou(n,i){if(!$s.has(n))try{lt||(lt=document.createElement("style"),i&&lt.setAttribute("nonce",i),lt.setAttribute("type","text/css"),document.head.appendChild(lt)),lt.sheet&&(lt.sheet.insertRule(`@media ${n} {body{ }}`,0),$s.add(n))}catch(e){console.error(e)}}function au(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var su=200,Pi=class{_letterKeyStream=new F;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new F;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:su;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(V(e=>this._pressedLetters.push(e)),Mo(i),_e(()=>this._pressedLetters.length>0),M(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Vs(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ki=class{_items;_activeItemIndex=Ie(-1);_activeItem=Ie(null);_wrap=!1;_typeaheadSubscription=ht.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Xt?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):tr(i)&&(this._effectRef=jo(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new F;change=new F;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Pi(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Vs(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return tr(this._items)?this._items():this._items instanceof Xt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Fn=class extends ki{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var po={},Un=class n{_appId=l(Kt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),po.hasOwnProperty(i)||(po[i]=0),`${i}${e?n._infix+"-":""}${po[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})};var cu=new g("MATERIAL_ANIMATIONS"),Gs=null;function lu(){return l(cu,{optional:!0})?.animationsDisabled||l(Gn,{optional:!0})==="NoopAnimations"?"di-disabled":(Gs??=l(mo).matchMedia("(prefers-reduced-motion)").matches,Gs?"reduced-motion":"enabled")}function Ut(){return lu()!=="enabled"}var pe=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(pe||{}),fo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=pe.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ws=Lt({passive:!0,capture:!0}),go=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ws)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ws)))}_delegateEventHandler=i=>{let e=ye(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},jn={enterDuration:225,exitDuration:150},du=800,qs=Lt({passive:!0,capture:!0}),Ks=["mousedown","touchstart"],Ys=["mouseup","mouseleave","touchend","touchcancel"],uu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),Ni=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new go;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ke(t)),o&&o.get(Ye).load(uu)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},jn),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||hu(i,e,r),c=i-r.left,s=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-a}px`,u.style.top=`${s-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let v=window.getComputedStyle(u),f=v.transitionProperty,L=v.transitionDuration,j=f==="none"||L==="0s"||L==="0s, 0s"||r.width===0&&r.height===0,B=new fo(this,u,t,j);u.style.transform="scale3d(1, 1, 1)",B.state=pe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=B);let P=null;return!j&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let te=()=>{P&&(P.fallbackTimer=null),clearTimeout(W),this._finishRippleTransition(B)},ne=()=>this._destroyRipple(B),W=setTimeout(ne,d+100);u.addEventListener("transitionend",te),u.addEventListener("transitioncancel",ne),P={onTransitionEnd:te,onTransitionCancel:ne,fallbackTimer:W}}),this._activeRipples.set(B,P),(j||!d)&&this._finishRippleTransition(B),B}fadeOutRipple(i){if(i.state===pe.FADING_OUT||i.state===pe.HIDDEN)return;let e=i.element,t=h(h({},jn),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=pe.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Ke(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ks.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ys.forEach(e=>{this._triggerElement.addEventListener(e,this,qs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===pe.FADING_IN?this._startFadeOutTransition(i):i.state===pe.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=pe.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=pe.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Pn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+du;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!kn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===pe.VISIBLE||i.config.terminateOnPointerUp&&i.state===pe.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ks.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Ys.forEach(e=>i.removeEventListener(e,this,qs)),this._pointerUpEventsRegistered=!1))}};function hu(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Oi=new g("mat-ripple-global-options");var mu={capture:!0},pu=["focus","mousedown","mouseenter","touchstart"],vo="mat-ripple-loader-uninitialized",bo="mat-ripple-loader-class-name",Xs="mat-ripple-loader-centered",Li="mat-ripple-loader-disabled",Fi=(()=>{class n{_document=l(I);_animationsDisabled=Ut();_globalRippleOptions=l(Oi,{optional:!0});_platform=l(Oe);_ngZone=l(z);_injector=l(ie);_eventCleanups;_hosts=new Map;constructor(){let e=l(ze).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>pu.map(t=>e.listen(this._document,t,this._onInteraction,mu)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(vo,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(bo))&&e.setAttribute(bo,t.className||""),t.centered&&e.setAttribute(Xs,""),t.disabled&&e.setAttribute(Li,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Li,""):e.removeAttribute(Li)}_onInteraction=e=>{let t=ye(e);if(t instanceof HTMLElement){let r=t.closest(`[${vo}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(bo)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??jn.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??jn.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Li),rippleConfig:{centered:e.hasAttribute(Xs),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new Ni(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&s.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:s,hasSetUpEvents:d}),e.removeAttribute(vo)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return n})();var fu=new g("MAT_BUTTON_CONFIG");function Zs(n){return n==null?void 0:$e(n)}var Qs=(()=>{class n{_elementRef=l(ee);_ngZone=l(z);_animationsDisabled=Ut();_config=l(fu,{optional:!0});_focusMonitor=l(Ln);_cleanupClick;_renderer=l(Jt);_rippleLoader=l(Fi);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=rn(!1,{transform:U});constructor(){l(Ye).load(Bn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(we("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),yt(r.color?"mat-"+r.color:""),q("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",Zs],_tabindex:[2,"tabindex","_tabindex",Zs],showProgress:[1,"showProgress"]}})}return n})();var gu=new g("cdk-dir-doc",{providedIn:"root",factory:()=>l(I)}),vu=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Js(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?vu.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var yo=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Ie("ltr");change=new ue;constructor(){let e=l(gu,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Js(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Re({type:n});static \u0275inj=Ce({})}return n})();var bu=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],yu=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function _u(n,i){n&1&&(O(0,"div",2),X(1,3),N())}var ec=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ui=(()=>{class n extends Qs{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=wu(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?ec.get(this._appearance):null,o=ec.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[tn],ngContentSelectors:yu,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Se(bu),He(0,"span",0),X(1),O(2,"span",1),X(3,1),N(),X(4,2),Te(5,_u,2,0,"div",2),He(6,"span",3)(7,"span",4)),t&2&&(q("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),C(5),xe(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
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
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
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
`],encapsulation:2})}return n})();function wu(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}function tc(n){return Error(`Unable to find icon with the name "${n}"`)}function Su(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function nc(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function ic(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Le=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},oc=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Le(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(re.HTML,r);if(!a)throw ic(r);let c=Ft(a);return this._addSvgIconConfig(e,t,new Le("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Le(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(re.HTML,t);if(!o)throw ic(t);let a=Ft(o);return this._addSvgIconSetConfig(e,new Le("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(re.RESOURCE_URL,e);if(!t)throw nc(e);let r=this._cachedIconsByUrl.get(t);return r?y(ji(r)):this._loadSvgIconFromConfig(new Le(e,null)).pipe(V(o=>this._cachedIconsByUrl.set(t,o)),M(o=>ji(o)))}getNamedSvgIcon(e,t=""){let r=rc(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):$n(tc(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(ji(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(M(t=>ji(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return y(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Gt(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(re.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return xo(o).pipe(M(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw tc(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(V(t=>e.svgText=t),M(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(V(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let c=this._svgElementFromString(Ft("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Ft("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:c}=r[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Su();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(re.RESOURCE_URL,t);if(!a)throw nc(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let s=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(M(d=>Ft(d)),mt(()=>this._inProgressUrlFetches.delete(a)),Ao());return this._inProgressUrlFetches.set(a,s),s}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(rc(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Eu(o)?new Le(o.url,null,o.options):new Le(o,null)}}static \u0275fac=function(t){return new(t||n)(S(Pr,8),S(kr),S(I,8),S(Je))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ji(n){return n.cloneNode(!0)}function rc(n,i){return n+":"+i}function Eu(n){return!!(n.url&&n.options)}var Cu=["*"],Iu=new g("MAT_ICON_DEFAULT_OPTIONS"),Ru=new g("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(I),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),ac=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Tu=ac.map(n=>`[${n}]`).join(", "),xu=/^url\(['"]?#(.*?)['"]?\)$/,Bi=(()=>{class n{_elementRef=l(ee);_iconRegistry=l(oc);_location=l(Ru);_errorHandler=l(Je);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ht.EMPTY;constructor(){let e=l(new mr("aria-hidden"),{optional:!0}),t=l(Iu,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Tu),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)ac.forEach(a=>{let c=t[o],s=c.getAttribute(a),d=s?s.match(xu):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ue(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(we("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),yt(r.color?"mat-"+r.color:""),q("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",U],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Cu,decls:1,vars:0,template:function(t,r){t&1&&(Se(),X(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
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
`],encapsulation:2})}return n})(),sc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Re({type:n});static \u0275inj=Ce({imports:[_o]})}return n})();var zi=class n{isDarkMode=!1;scrollToSection(i){let e=document.getElementById(i);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})}toggleTheme(){this.isDarkMode=!this.isDarkMode;let i=this.isDarkMode?"dark":"light";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-header"]],decls:55,vars:2,consts:[[1,"header-top"],["disabled","","mat-button",""],[1,"spacer"],[1,"theme-toggle",3,"click"],["mat-button","",3,"click"],[1,"header-bottom"],[1,"header-bottom-presentation"],[1,"header-bottom-social"],["href","https://linkedin.com/in/ryunezm","target","_blank"],["mat-button","","outlined",""],["alt","linkedin","height","20","ngSrc","/logos/linkedin.svg","width","20"],["href","https://github.com/ryunezm/","target","_blank"],["mat-button",""],["alt","github","height","20","ngSrc","/logos/github.svg","width","20"],["href","https://threads.net/ryunezm","target","_blank"],["alt","threads","height","20","ngSrc","/logos/threads.svg","width","20"],[1,"header-bottom-photo"],["alt","profile photo","height","200","priority","","width","200",3,"ngSrc"]],template:function(e,t){e&1&&(p(0,"header")(1,"section",0)(2,"a")(3,"button",1),m(4,"Rubber Yunez"),b()(),p(5,"span",2)(6,"button",3),oe("click",function(){return t.toggleTheme()}),m(7),b()(),p(8,"ul")(9,"li")(10,"button",4),oe("click",function(){return t.scrollToSection("about-me")}),m(11,"About me"),b()(),p(12,"li")(13,"button",4),oe("click",function(){return t.scrollToSection("skills")}),m(14,"Stack"),b()(),p(15,"li")(16,"button",4),oe("click",function(){return t.scrollToSection("academic")}),m(17,"Academic"),b()(),p(18,"li")(19,"button",4),oe("click",function(){return t.scrollToSection("projects")}),m(20,"Projects"),b()()()(),p(21,"section",5)(22,"div",6)(23,"h1"),m(24,"Hey, I'm Rubber Yunez"),b(),p(25,"p"),m(26,"A passionate Full-Stack Developer with a background in Chemical Engineering. In the past I leveraged programming to solve complex problems \u2014from numerical methods to heat transfer\u2014 using C/C++, Python, and MATLAB."),b(),p(27,"div",7)(28,"a",8)(29,"button",9)(30,"div"),A(31,"img",10),p(32,"span"),m(33,"linkedin"),b(),p(34,"mat-icon"),m(35,"arrow_outward"),b()()()(),p(36,"a",11)(37,"button",12)(38,"div"),A(39,"img",13),p(40,"span"),m(41,"github"),b(),p(42,"mat-icon"),m(43,"arrow_outward"),b()()()(),p(44,"a",14)(45,"button",12)(46,"div"),A(47,"img",15),p(48,"span"),m(49,"threads"),b(),p(50,"mat-icon"),m(51,"arrow_outward"),b()()()()()(),A(52,"span",2),p(53,"div",16),A(54,"img",17),b()()()),e&2&&(C(7),_t((t.isDarkMode,"")),C(47),k("ngSrc","/profile_square.png"))},dependencies:[Ui,Bi,St],encapsulation:2,changeDetection:1})};var Hi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-about-me"]],decls:43,vars:0,consts:[["id","about-me",1,"content"]],template:function(e,t){e&1&&(O(0,"section",0)(1,"h1"),m(2,"About me"),N(),He(3,"hr"),O(4,"p"),m(5,"For the past few years, I\u2019ve immersed myself in web development, specializing in "),O(6,"em")(7,"b"),m(8,"Angular"),N()(),m(9," for frontend development, "),O(10,"em")(11,"b"),m(12,"Java"),N()(),m(13," and "),O(14,"em")(15,"b"),m(16,"Spring Boot"),N()(),m(17," for backend systems, and working with databases like "),O(18,"em")(19,"b"),m(20,"MySQL"),N()(),m(21,", "),O(22,"em")(23,"b"),m(24,"PostgreSQL"),N()(),m(25," and "),O(26,"em")(27,"b"),m(28,"MongoDB"),N()(),m(29," to build robust applications. "),N(),O(30,"p"),m(31,"\u{1F331} Currently expanding my skills is:"),N(),O(32,"ul")(33,"li"),m(34,"\u2601\uFE0F Cloud Architecture"),N(),O(35,"li"),m(36,"\u{1F6E1}\uFE0F Cybersecurity"),N()(),He(37,"br")(38,"br"),O(39,"p"),m(40,"\u{1F680} Passionate about innovation, growth, and tackling new challenges in collaborative environments. "),N(),He(41,"br")(42,"br"),N())},encapsulation:2,changeDetection:1})};var Du=["*"];var Au=new g("MAT_CARD_CONFIG"),Bt=(()=>{class n{appearance;constructor(){let e=l(Au,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&q("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Du,decls:1,vars:0,template:function(t,r){t&1&&(Se(),X(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
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
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
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
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
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
`],encapsulation:2})}return n})(),zt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),cc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})(),lc=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&q("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})();var $i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var Vi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-skills"]],decls:40,vars:22,consts:[["id","skills",1,"content"],[1,"groups"],["alt","Java","height","100","priority","","width","54",3,"ngSrc","title"],["alt","Spring Boot","height","100","priority","","width","100",3,"ngSrc","title"],["alt","MongoDB","height","100","priority","","width","98",3,"ngSrc","title"],["alt","MySQL","height","100","priority","","width","146",3,"ngSrc","title"],["alt","PostgreSQL","height","100","priority","","width","97.0111117846887",3,"ngSrc","title"],["alt","Angular","height","100","priority","","width","100",3,"ngSrc","title"],["alt","JavaScript","height","100","priority","","width","92",3,"ngSrc","title"],["alt","HTML5","height","100","width","100",3,"ngSrc","title"],["alt","CSS","height","100","width","100",3,"ngSrc","title"],["alt","Rust","height","100","width","100",3,"ngSrc","title"],["alt","Python","height","100","width","82",3,"ngSrc","title"]],template:function(e,t){e&1&&(p(0,"section",0)(1,"h1"),m(2,"Technical Stack"),b(),A(3,"hr"),p(4,"div",1)(5,"mat-card")(6,"mat-card-footer")(7,"mat-card-title"),m(8,"Back-end"),b()(),p(9,"mat-card-content")(10,"div"),A(11,"img",2)(12,"img",3),b()()(),p(13,"mat-card")(14,"mat-card-footer")(15,"mat-card-title"),m(16,"Databases"),b()(),p(17,"mat-card-content")(18,"div"),A(19,"img",4)(20,"img",5)(21,"img",6),b()()(),p(22,"mat-card")(23,"mat-card-footer")(24,"mat-card-title"),m(25,"Front-end"),b()(),p(26,"mat-card-content")(27,"div"),A(28,"img",7)(29,"img",8)(30,"img",9)(31,"img",10),b()()(),p(32,"mat-card")(33,"mat-card-footer")(34,"mat-card-title"),m(35,"Others"),b()(),p(36,"mat-card-content")(37,"div"),A(38,"img",11)(39,"img",12),b()()()()()),e&2&&(C(11),k("ngSrc","/language/Java_logo.svg")("title","Java"),C(),k("ngSrc","/language/Spring_Boot_logo.svg")("title","Spring Boot"),C(7),k("ngSrc","/language/MongoDB_logo_unofficial.png")("title","MongoDB"),C(),k("ngSrc","/language/MySQL_logo.svg")("title","MySQL"),C(),k("ngSrc","/language/postgresql_logo.svg")("title","PostgreSQL"),C(7),k("ngSrc","/language/Angular_logo.svg")("title","Angular"),C(),k("ngSrc","/language/JavaScript_unofficial_logo.svg")("title","JavaScript"),C(),k("ngSrc","/language/HTML5_logo.svg")("title","HTML"),C(),k("ngSrc","/language/CSS3_logo.svg")("title","CSS"),C(7),k("ngSrc","/language/Rust_logo.svg")("title","Rust"),C(),k("ngSrc","/language/Python_logo.svg")("title","Python"))},dependencies:[St,Bt,Ht,$i,zt],styles:["div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-items:center;width:100%}div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin:1vmax}div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;justify-content:center;justify-items:center;margin:10px;outline:1px solid black}"],changeDetection:1})};var Gi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-academic"]],decls:20,vars:6,consts:[["id","academic",1,"content"],[1,"mat-card-content-box"],["alt","Unicartagena","height","70","priority","","width","160",3,"ngSrc","title"],["alt","UIS","height","70","width","143",3,"ngSrc","title"],["alt","MinTic","height","70","width","38.5",3,"ngSrc","title"]],template:function(e,t){e&1&&(p(0,"section",0)(1,"h1"),m(2,"Academic"),b(),A(3,"hr"),p(4,"div")(5,"mat-card")(6,"mat-card-content")(7,"div",1),A(8,"img",2),b()(),p(9,"mat-card-footer")(10,"mat-card-title"),m(11,"Chemical Engineering"),b()()(),p(12,"mat-card")(13,"mat-card-content")(14,"div",1),A(15,"img",3)(16,"img",4),b()(),p(17,"mat-card-footer")(18,"mat-card-title"),m(19,"Web Developer"),b()()()()()),e&2&&(C(8),k("ngSrc","/logos/unicartagena.png")("title","Universidad de Cartagena"),C(7),k("ngSrc","/logos/uis.svg")("title","Universidad Industrial de Santander"),C(),k("ngSrc","/logos/mintic_dark.svg")("title","Ministerio de Tecnolog\xEDas de la Informaci\xF3n y Comunicaciones"))},dependencies:[Bt,$i,St,zt,Ht],styles:["div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-items:center}.mat-card-content-box[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:90%}"],changeDetection:1})};var wo=(c=>(c.Enlil="Enlil",c.Papsukkal="Papsukkal",c.Ninshubur="Ninshubur",c.Papsukkal_Experiment="MovieCataloguerJavaSwing",c.TextEncrypter="TextEncrypter",c.UnitsConverter="UnitsConverter",c.LeetCodeRust="LeetCodeRust",c))(wo||{}),dc={Papsukkal:{title:"Papsukkal",tags:["Java \u2668\uFE0F","Spring Boot \u{1F343}","MongoDB \u{1F4C3}","Angular \u{1F170}\uFE0F"],description:"This is a movie cataloging project developed using Java 11+, Spring Boot, MongoDB (back-end) and Angular (front-end). It allows you to register movies and assign them a custom score on a scale from 0 to 10.",repository:"https://github.com/ryunezm/papsukkal"},TextEncrypter:{title:"Text encrypter",tags:["HTML \u{1F4D1}","CSS \u{1F3A8}","JavaScript \u{1F4A1}"],description:"An application for encrypting and decrypting text using predefined rules. Works with lowercase letters only, excluding accented characters and special symbols.",repository:"https://github.com/ryunezm/EncriptadorTextoHTML",demo:"https://ryunezm.github.io/EncriptadorTextoHTML"},UnitsConverter:{title:"Units converter",tags:["Java \u2668\uFE0F"],description:"This project is a unit conversion application that provides functionality to convert between different types of units, such as currency, length, mass, temperature, and time.",repository:"https://github.com/ryunezm/Unit_Converter",downloadPreview:"https://github.com/ryunezm/Unit_Converter/releases/download/v0.0.1-alpha/JavaCurrencyConverter.jar"},LeetCodeRust:{title:"LeetCode's problems solved in Rust",tags:["Rust \u{1F980}"],description:"Series of exercises solved in Rust, for now, the easy ones, as I become more familiar with this lovely language.",repository:"https://github.com/ryunezm/leetcode_rust"},MovieCataloguerJavaSwing:{title:"Papsukkal (Experiment)",tags:["Java \u2668\uFE0F","H2 \u{1F5C4}\uFE0F"],description:"Small experiment of a local application (movie cataloguer) using Java and part of Spring Boot to simplify the database part (H2).",repository:"https://github.com/ryunezm/papsukkal_javaswing"},Ninshubur:{title:"Ninshubur",tags:["Java \u2668\uFE0F","Spring Boot \u{1F343}","PostgreSQL \u{1F418}"],description:"Restaurant management system: allows customers to place orders, employees to manage them, and administrators to monitor users and the menu. Includes JWT authentication, role control, automated testing and clean, layer-based architecture.",repository:"https://github.com/ryunezm/Ninshubur",demo:void 0,downloadPreview:void 0},Enlil:{title:"Enlil",tags:["Angular \u{1F170}\uFE0F"],description:"This one is a small weather app using Nominatim and OpenWeather APIs.",repository:"https://github.com/ryunezm/enlil",demo:"https://ryunezm.github.io/enlil",downloadPreview:void 0}};var Pu=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],ku=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Nu(n,i){n&1&&(p(0,"span",3),X(1,1),b())}function Ou(n,i){n&1&&(p(0,"span",6),X(1,2),b())}var Lu=["*"];var uc=new g("MatChipAvatar"),hc=new g("MatChipTrailingIcon"),mc=new g("MatChipEdit"),pc=new g("MatChipRemove"),fc=new g("MatChip"),gc=(()=>{class n{_elementRef=l(ee);_parentChip=l(fc);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Ye).load(Bn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,r){t&2&&(we("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),q("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:$e(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Fu=(()=>{class n extends gc{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nr(n)))(r||n)}})();static \u0275dir=H({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,r){t&1&&oe("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(we("tabindex",r._getTabindex()),q("mdc-evolution-chip__action--presentational",!1))},features:[tn]})}return n})();var So=(()=>{class n{_changeDetectorRef=l(nt);_elementRef=l(ee);_tagName=l(oa);_ngZone=l(z);_focusMonitor=l(Ln);_globalRippleOptions=l(Oi,{optional:!0});_document=l(I);_onFocus=new F;_onBlur=new F;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ut();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(Un).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ue;destroyed=new ue;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(Fi);_injector=l(ie);constructor(){let e=l(Ye);e.load(Bn),e.load(Hs),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Zi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let r=t._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,r,o){if(t&1&&ur(o,uc,5)(o,mc,5)(o,hc,5)(o,pc,5)(o,uc,5)(o,hc,5)(o,mc,5)(o,pc,5),t&2){let a;ge(a=ve())&&(r.leadingIcon=a.first),ge(a=ve())&&(r.editIcon=a.first),ge(a=ve())&&(r.trailingIcon=a.first),ge(a=ve())&&(r.removeIcon=a.first),ge(a=ve())&&(r._allLeadingIcons=a),ge(a=ve())&&(r._allTrailingIcons=a),ge(a=ve())&&(r._allEditIcons=a),ge(a=ve())&&(r._allRemoveIcons=a)}},viewQuery:function(t,r){if(t&1&&ta(Fu,5),t&2){let o;ge(o=ve())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,r){t&1&&oe("keydown",function(a){return r._handleKeydown(a)}),t&2&&(ea("id",r.id),we("role",r.role)("aria-label",r.ariaLabel),yt("mat-"+(r.color||"primary")),q("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",U],highlighted:[2,"highlighted","highlighted",U],disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[hr([{provide:fc,useExisting:n}])],ngContentSelectors:ku,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,r){t&1&&(Se(Pu),A(0,"span",0),p(1,"span",1)(2,"span",2),Te(3,Nu,2,0,"span",3),p(4,"span",4),X(5),A(6,"span",5),b()()(),Te(7,Ou,2,0,"span",6)),t&2&&(C(3),xe(r.leadingIcon?3:-1),C(4),xe(r._hasTrailingIcon()?7:-1))},dependencies:[gc],styles:[`.mdc-evolution-chip,
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
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
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
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
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
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
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
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
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
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
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
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
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
  color: var(--mat-chip-with-icon-icon-color, currentColor);
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
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
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
`],encapsulation:2})}return n})();var vc=(()=>{class n{_elementRef=l(ee);_changeDetectorRef=l(nt);_dir=l(yo,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new F;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Xt;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(pt(null),Q(()=>Zi(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(pt(this._chips)).subscribe(e=>{let t=[];e.forEach(r=>r._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Fn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(fe(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(fe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(pt(null),fe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(fe(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),c=o||a;this._isValidIndex(r)&&c&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,r,o){if(t&1&&ur(o,So,5),t&2){let a;ge(a=ve())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,r){t&1&&oe("keydown",function(a){return r._handleKeydown(a)}),t&2&&we("role",r.role)},inputs:{disabled:[2,"disabled","disabled",U],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:$e(e)]},ngContentSelectors:Lu,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(Se(),O(0,"div",0),X(1),N())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();function Uu(n,i){if(n&1&&(p(0,"mat-chip"),m(1),b()),n&2){let e=i.$implicit;C(),_t(e)}}function ju(n,i){if(n&1&&(p(0,"a",3)(1,"button",4),m(2,"Demo"),b()()),n&2){let e=et().$implicit,t=et();k("href",t.projectDetails[e].demo,qn)}}function Bu(n,i){if(n&1&&(p(0,"a",3)(1,"button",4),m(2,"Download preview"),b()()),n&2){let e=et().$implicit,t=et();k("href",t.projectDetails[e].downloadPreview,qn)}}function zu(n,i){if(n&1&&(p(0,"div",2)(1,"mat-card")(2,"mat-card-title"),m(3),b(),p(4,"mat-card-subtitle")(5,"mat-chip-set"),lr(6,Uu,2,1,"mat-chip",null,cr),b()(),p(8,"mat-card-content")(9,"p"),m(10),b()(),p(11,"mat-card-actions")(12,"a",3)(13,"button",4),m(14,"Repository"),b()(),Te(15,ju,3,1,"a",3),Te(16,Bu,3,1,"a",3),b()()()),n&2){let e=i.$implicit,t=et();C(3),_t(t.projectDetails[e].title),C(3),dr(t.projectDetails[e].tags),C(4),_t(t.projectDetails[e].description),C(2),k("href",t.projectDetails[e].repository,qn),C(3),xe(t.projectDetails[e].demo?15:-1),C(),xe(t.projectDetails[e].downloadPreview?16:-1)}}var Wi=class n{projects=Object.values(wo);projectDetails=dc;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-projects"]],decls:7,vars:0,consts:[["id","projects",1,"content"],[1,"project-content-container"],[1,"project-content"],["target","_blank",3,"href"],["mat-button",""]],template:function(e,t){e&1&&(p(0,"section",0)(1,"h1"),m(2,"Projects"),b(),A(3,"hr"),p(4,"div",1),lr(5,zu,17,5,"div",2,cr),b()()),e&2&&(C(5),dr(t.projects))},dependencies:[Bt,Ht,lc,zt,cc,Ui,vc,So],encapsulation:2,changeDetection:1})};var qi=class n{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-footer"]],decls:3,vars:1,template:function(e,t){e&1&&(O(0,"footer")(1,"p"),m(2),N()()),e&2&&(C(2),ia("\xA9 ",t.currentYear," Developed by Rubber Yunez "))},encapsulation:2,changeDetection:1})};var Ki=class n{showScrollTopButton=!1;buttonVisibility="hidden";ngOnInit(){document.addEventListener("contextmenu",this.preventDefault)}ngOnDestroy(){document.removeEventListener("contextmenu",this.preventDefault)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}onScroll(){let i=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;this.showScrollTopButton=i>300,this.buttonVisibility=this.showScrollTopButton?"visible":"hidden"}preventDefault(i){i.preventDefault()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-root"]],hostBindings:function(e,t){e&1&&oe("scroll",function(){return t.onScroll()},Yo)},decls:10,vars:4,consts:[["aria-label","Back to top","matFab","",1,"button-to-top",3,"click"]],template:function(e,t){e&1&&(A(0,"app-header")(1,"app-about-me")(2,"app-skills")(3,"app-academic")(4,"app-projects")(5,"app-footer"),p(6,"button",0),oe("click",function(){return t.scrollToTop()}),p(7,"mat-icon"),m(8,"arrow_upward"),b()(),A(9,"router-outlet")),e&2&&(C(6),q("hidden",t.buttonVisibility==="hidden")("visible",t.buttonVisibility==="visible"))},dependencies:[Hi,xn,Gi,qi,zi,sc,Bi,Wi,Vi],encapsulation:2,changeDetection:1})};Cr(Ki,Ns).catch(n=>console.error(n));
