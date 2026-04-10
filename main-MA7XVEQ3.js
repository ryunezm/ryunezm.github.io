import{$ as le,$a as Re,A as Fe,Aa as zo,Ab as cr,B as Co,Ba as $o,Bb as ea,C as ut,Ca as Ho,Cb as et,D as Ue,Da as ne,Db as lr,E as Xi,Ea as Gn,Eb as ta,F as Ro,Fa as Vo,Fb as en,G as xo,Ga as I,Gb as tt,H as ht,Ha as Qt,Hb as na,I as ee,Ia as Go,Ib as ia,J as pe,Ja as Ji,Jb as F,K as $,Ka as Xt,Kb as $e,L as E,La as Be,Lb as ra,M as Vt,Ma as Yt,N as p,Na as er,O as Ee,Oa as Wo,P as Mo,Pa as qo,Q as v,Qa as Ko,R as w,Ra as tr,S as l,Sa as R,T as mt,Ta as Ce,U as To,Ua as B,V as ce,Va as Zt,W as Y,Wa as nr,X as te,Xa as ir,Y as C,Ya as Qo,Z as Ye,Za as Jt,_ as Do,_a as _e,a as h,aa as U,ab as xe,b as Q,ba as Ze,bb as rr,ca as Yi,cb as or,d as A,da as Se,db as ar,e as dt,ea as Ao,eb as P,f as yo,fa as ko,fb as g,g as Bn,ga as Po,gb as b,h as L,ha as Gt,hb as k,i as X,ia as pt,ib as O,j as ae,ja as Z,jb as N,k as se,ka as Wt,kb as ze,l as y,la as No,lb as Xo,m as zn,ma as qt,mb as ie,n as Ki,na as Oo,nb as Je,o as _o,oa as ft,ob as we,p as D,pa as Hn,pb as K,q as wo,qa as Kt,qb as sr,r as Le,ra as Lo,rb as Yo,s as Io,sa as Zi,sb as fe,t as $n,ta as Vn,tb as ge,u as Eo,ua as je,ub as Zo,v as Qi,va as gt,vb as H,w as ye,wa as Fo,wb as vt,x as $t,xa as Uo,xb as f,y as Ht,ya as jo,yb as bt,z as So,za as Bo,zb as Jo}from"./chunk-TKVOBXDJ.js";var oa=null;function Me(){return oa}function dr(n){oa??=n}var tn=class{},Wn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>l(aa),providedIn:"platform"})}return n})();var aa=(()=>{class n extends Wn{_location;_history;_doc=l(C);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Me().getBaseHref(this._doc)}onPopState(e){let t=Me().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Me().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function la(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function sa(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function He(n){return n&&n[0]!=="?"?`?${n}`:n}var qn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>l(pc),providedIn:"root"})}return n})(),mc=new v(""),pc=(()=>{class n extends qn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(C).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return la(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+He(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+He(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+He(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(w(Wn),w(mc,8))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yt=(()=>{class n{_subject=new L;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=vc(sa(ca(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+He(t))}normalize(e){return n.stripTrailingSlash(gc(this._basePath,ca(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+He(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+He(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=He;static joinWithSlash=la;static stripTrailingSlash=sa;static \u0275fac=function(t){return new(t||n)(w(qn))};static \u0275prov=p({token:n,factory:()=>fc(),providedIn:"root"})}return n})();function fc(){return new yt(w(qn))}function gc(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ca(n){return n.replace(/\/index.html$/,"")}function vc(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function ur(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var nn=class{};var hr="browser";function ua(n){return n===hr}var ha=n=>n.src,yc=new v("",{factory:()=>ha});var da=/^((\s*\d+w\s*(,|$)){1,})$/;var _c=[1,2],wc=640;var Ic=1920,Ec=1080;var _t=(()=>{class n{imageLoader=l(yc);config=Sc(l(Zi));renderer=l(Yt);imgElement=l(Z).nativeElement;injector=l(te);destroyRef=l(Ye);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Xt("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&da.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let t=e;this.loaderParams&&(t.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&t.width&&(t.height=Math.round(t.width/r)),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=da.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(o=>o>=wc)),t.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return _c.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Ic||this.height>Ec),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==ha&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let a=this.injector.get(tt);r(),o(),this.placeholder=!1,a.markForCheck()},r=this.renderer.listen(e,"load",t),o=this.renderer.listen(e,"error",t);this.destroyRef.onDestroy(()=>{r(),o()}),Cc(e,t)}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,r){t&2&&Zo("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Rc],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",$e],height:[2,"height","height",$e],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",F],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",F],fill:[2,"fill","fill",F],placeholder:[2,"placeholder","placeholder",xc],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Gt]})}return n})();function Sc(n){let i={};return n.breakpoints&&(i.breakpoints=n.breakpoints.sort((e,t)=>e-t)),Object.assign({},Lo,n,i)}function Cc(n,i){n.complete&&n.naturalWidth&&i()}function Rc(n){return typeof n=="string"?n:je(n)}function xc(n){return typeof n=="string"&&n!=="true"&&n!=="false"&&n!==""?n:F(n)}var rn=class{_doc;constructor(i){this._doc=i}manager},Kn=(()=>{class n extends rn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(w(C))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),Yn=new v(""),gr=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Kn));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Kn);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new E(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(w(Yn),w(U))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),mr="ng-app-id";function ma(n){for(let i of n)i.remove()}function pa(n,i){let e=i.createElement("style");return e.textContent=n,e}function Mc(n,i,e,t){let r=n.head?.querySelectorAll(`style[${mr}="${i}"],link[${mr}="${i}"]`);if(r)for(let o of r)o.removeAttribute(mr),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function fr(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var vr=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,Mc(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,pa);t?.forEach(r=>this.addUsage(r,this.external,fr))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(ma(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ma(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,pa(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,fr(t,this.doc)))}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(w(C),w(qt),w(Kt,8),w(ft))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),pr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},br=/%COMP%/g;var ga="%COMP%",Tc=`_nghost-${ga}`,Dc=`_ngcontent-${ga}`,Ac=!0,kc=new v("",{factory:()=>Ac});function Pc(n){return Dc.replace(br,n)}function Nc(n){return Tc.replace(br,n)}function va(n,i){return i.map(e=>e.replace(br,n))}var sn=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new on(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Xn?r.applyToHost(e):r instanceof an&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case Vn.Emulated:o=new Xn(c,d,t,this.appId,u,a,s,m);break;case Vn.ShadowDom:return new Qn(c,e,t,a,s,this.nonce,m,d);case Vn.ExperimentalIsolatedShadowDom:return new Qn(c,e,t,a,s,this.nonce,m);default:o=new an(c,d,t,u,a,s,m);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(w(gr),w(vr),w(qt),w(kc),w(C),w(U),w(Kt),w(Ji,8))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),on=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(pr[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(fa(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(fa(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new E(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=pr[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=pr[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(Qt.DashCase|Qt.Important)?i.style.setProperty(e,t,r&Qt.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Qt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Me().getGlobalEventTarget(this.doc,i),!i))throw new E(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function fa(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Qn=class extends on{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=va(t.id,d);for(let m of d){let S=document.createElement("style");a&&S.setAttribute("nonce",a),S.textContent=m,this.shadowRoot.appendChild(S)}let u=t.getExternalStyles?.();if(u)for(let m of u){let S=fr(m,r);a&&S.setAttribute("nonce",a),this.shadowRoot.appendChild(S)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},an=class extends on{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?va(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Go.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Xn=class extends an{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(i,e,t,o,a,s,c,d),this.contentAttr=Pc(d),this.hostAttr=Nc(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Zn=class n extends tn{supportsDOMEvents=!0;static makeCurrent(){dr(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Lc();return e==null?null:Fc(e)}resetBaseElement(){cn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return ur(document.cookie,i)}},cn=null;function Lc(){return cn=cn||document.head.querySelector("base"),cn?cn.getAttribute("href"):null}function Fc(n){return new URL(n,document.baseURI).pathname}var Uc=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),ba=["alt","control","meta","shift"],jc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Bc={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ya=(()=>{class n extends rn{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Me().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),ba.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=jc[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ba.forEach(a=>{if(a!==r){let s=Bc[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(w(C))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})();function yr(n,i,e){return A(this,null,function*(){let t=h({rootComponent:n},zc(i,e));return ia(t)})}function zc(n,i){return{platformRef:i?.platformRef,appProviders:[...Wc,...n?.providers??[]],platformProviders:Gc}}function $c(){Zn.makeCurrent()}function Hc(){return new Ze}function Vc(){return No(document),document}var Gc=[{provide:ft,useValue:hr},{provide:Oo,useValue:$c,multi:!0},{provide:C,useFactory:Vc}];var Wc=[{provide:To,useValue:"root"},{provide:Ze,useFactory:Hc},{provide:Yn,useClass:Kn,multi:!0},{provide:Yn,useClass:ya,multi:!0},sn,vr,gr,{provide:Be,useExisting:sn},{provide:nn,useClass:Uc},[]];var De=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Ir=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Er=class{encodeKey(i){return _a(i)}encodeValue(i){return _a(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function qc(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var Kc=/%(\d[a-f0-9])/gi,Qc={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function _a(n){return encodeURIComponent(n).replace(Kc,(i,e)=>Qc[e]??i)}function Jn(n){return`${n}`}var Te=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Er,i.fromString){if(i.fromObject)throw new E(2805,!1);this.map=qc(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Jn):[Jn(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Jn(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(Jn(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Xc(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function wa(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Ia(n){return typeof Blob<"u"&&n instanceof Blob}function Ea(n){return typeof FormData<"u"&&n instanceof FormData}function Yc(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var _r="Content-Type",Sa="Accept",Ca="text/plain",Ra="application/json",Zc=`${Ra}, ${Ca}, */*`,wt=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Xc(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new De,this.context??=new Ir,!this.params)this.params=new Te,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||wa(this.body)||Ia(this.body)||Ea(this.body)||Yc(this.body)?this.body:this.body instanceof Te?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ea(this.body)?null:Ia(this.body)?this.body.type||null:wa(this.body)?null:typeof this.body=="string"?Ca:this.body instanceof Te?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ra:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,m=i.referrer||this.referrer,S=i.integrity||this.integrity,G=i.referrerPolicy||this.referrerPolicy,j=i.transferCache??this.transferCache,T=i.timeout??this.timeout,W=i.body!==void 0?i.body:this.body,me=i.withCredentials??this.withCredentials,q=i.reportProgress??this.reportProgress,J=i.headers||this.headers,Qe=i.params||this.params,jn=i.context??this.context;return i.setHeaders!==void 0&&(J=Object.keys(i.setHeaders).reduce((lt,Xe)=>lt.set(Xe,i.setHeaders[Xe]),J)),i.setParams&&(Qe=Object.keys(i.setParams).reduce((lt,Xe)=>lt.set(Xe,i.setParams[Xe]),Qe)),new n(e,t,W,{params:Qe,headers:J,context:jn,reportProgress:q,responseType:r,withCredentials:me,transferCache:j,keepalive:o,cache:s,priority:a,timeout:T,mode:c,redirect:d,credentials:u,referrer:m,integrity:S,referrerPolicy:G})}},It=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(It||{}),ln=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new De,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Sr=class n extends ln{constructor(i={}){super(i)}type=It.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},dn=class n extends ln{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=It.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},nt=class extends ln{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Jc=200;var el=/^\)\]\}',?\n/,tl=(()=>{class n{fetchImpl=l(Cr,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(U);destroyRef=l(Ye);handle(e){return new Bn(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(Rr,a=>t.error(new nt({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}doRequest(e,t,r){return A(this,null,function*(){let o=this.createRequestInit(e),a;try{let T=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,h({signal:t},o)));nl(T),r.next({type:It.Sent}),a=yield T}catch(T){r.error(new nt({error:T,status:T.status??0,statusText:T.statusText,url:e.urlWithParams,headers:T.headers}));return}let s=new De(a.headers),c=a.statusText,d=a.url||e.urlWithParams,u=a.status,m=null;if(e.reportProgress&&r.next(new Sr({headers:s,status:u,statusText:c,url:d})),a.body){let T=a.headers.get("content-length"),W=[],me=a.body.getReader(),q=0,J,Qe,jn=typeof Zone<"u"&&Zone.current,lt=!1;if(yield this.ngZone.runOutsideAngular(()=>A(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield me.cancel(),lt=!0;break}let{done:zt,value:qi}=yield me.read();if(zt)break;if(W.push(qi),q+=qi.length,e.reportProgress){Qe=e.responseType==="text"?(Qe??"")+(J??=new TextDecoder).decode(qi,{stream:!0}):void 0;let bo=()=>r.next({type:It.DownloadProgress,total:T?+T:void 0,loaded:q,partialText:Qe});jn?jn.run(bo):bo()}}})),lt){r.complete();return}let Xe=this.concatChunks(W,q);try{let zt=a.headers.get(_r)??"";m=this.parseBody(e,Xe,zt,u)}catch(zt){r.error(new nt({error:zt,headers:new De(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=m?Jc:0);let S=u>=200&&u<300,G=a.redirected,j=a.type;S?(r.next(new dn({body:m,headers:s,status:u,statusText:c,url:d,redirected:G,responseType:j})),r.complete()):r.error(new nt({error:m,headers:s,status:u,statusText:c,url:d,redirected:G,responseType:j}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(el,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Sa)||(t[Sa]=Zc),!e.headers.has(_r)){let o=e.detectContentTypeHeader();o!==null&&(t[_r]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cr=class{};function Rr(){}function nl(n){n.then(Rr,Rr)}function il(n,i){return i(n)}function rl(n,i,e){return(t,r)=>Y(e,()=>i(t,o=>n(o,r)))}var ol=new v("",{factory:()=>[]}),xa=new v(""),al=new v("",{factory:()=>!0});var sl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=w(tl),r},providedIn:"root"})}return n})();var cl=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Po);contributeToStability=l(al);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(ol),...this.injector.get(xa,[])]));this.chain=t.reduceRight((r,o)=>rl(r,o,this.injector),il)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ut(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(w(sl),w(ce))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ll=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=w(cl),r},providedIn:"root"})}return n})();function wr(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var xr=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof wt)o=e;else{let c;r.headers instanceof De?c=r.headers:c=new De(r.headers);let d;r.params&&(r.params instanceof Te?d=r.params:d=new Te({fromObject:r.params})),o=new wt(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(Ht(c=>this.handler.handle(c)));if(e instanceof wt||r.observe==="events")return a;let s=a.pipe(ye(c=>c instanceof dn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(D(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new E(2806,!1);return c.body}));case"blob":return s.pipe(D(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new E(2807,!1);return c.body}));case"text":return s.pipe(D(c=>{if(c.body!==null&&typeof c.body!="string")throw new E(2808,!1);return c.body}));default:return s.pipe(D(c=>c.body))}case"response":return s;default:throw new E(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Te().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,wr(r,t))}post(e,t,r={}){return this.request("POST",e,wr(r,t))}put(e,t,r={}){return this.request("PUT",e,wr(r,t))}static \u0275fac=function(t){return new(t||n)(w(ll))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ma=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(w(C))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=w(hl),r},providedIn:"root"})}return n})(),hl=(()=>{class n extends Mr{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case ne.NONE:return t;case ne.HTML:return gt(t,"HTML")?je(t):Ho(this._doc,String(t)).toString();case ne.STYLE:return gt(t,"Style")?je(t):t;case ne.SCRIPT:if(gt(t,"Script"))return je(t);throw new E(5200,!1);case ne.URL:return gt(t,"URL")?je(t):$o(String(t));case ne.RESOURCE_URL:if(gt(t,"ResourceURL"))return je(t);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return Fo(e)}bypassSecurityTrustStyle(e){return Uo(e)}bypassSecurityTrustScript(e){return jo(e)}bypassSecurityTrustUrl(e){return Bo(e)}bypassSecurityTrustResourceUrl(e){return zo(e)}static \u0275fac=function(t){return new(t||n)(w(C))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _="primary",Sn=Symbol("RouteTitle"),Pr=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function rt(n){return new Pr(n)}function Tr(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Ua(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},d=n.slice(0,t.length);return Tr(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Tr(o,n.slice(0,o.length),s)||!Tr(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function oi(n){return new Promise((i,e)=>{n.pipe(Ue()).subscribe({next:t=>i(t),error:t=>e(t)})})}function pl(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Ie(n[e],i[e]))return!1;return!0}function Ie(n,i){let e=n?Nr(n):void 0,t=i?Nr(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!ja(n[r],i[r]))return!1;return!0}function Nr(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function ja(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function fl(n){return n.length>0?n[n.length-1]:null}function st(n){return Ki(n)?n:qo(n)?se(Promise.resolve(n)):y(n)}function Ba(n){return Ki(n)?oi(n):Promise.resolve(n)}var gl={exact:Ha,subset:Va},za={exact:vl,subset:bl,ignored:()=>!0},$a={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Or={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Da(n,i,e){return gl[e.paths](n.root,i.root,e.matrixParams)&&za[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function vl(n,i){return Ie(n,i)}function Ha(n,i,e){if(!it(n.segments,i.segments)||!ni(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Ha(n.children[t],i.children[t],e))return!1;return!0}function bl(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>ja(n[e],i[e]))}function Va(n,i,e){return Ga(n,i,i.segments,e)}function Ga(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!it(r,e)||i.hasChildren()||!ni(r,e,t))}else if(n.segments.length===e.length){if(!it(n.segments,e)||!ni(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Va(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!it(n.segments,r)||!ni(n.segments,r,t)||!n.children[_]?!1:Ga(n.children[_],i,o,t)}}function ni(n,i,e){return i.every((t,r)=>za[e](n[r].parameters,t.parameters))}var ue=class{root;queryParams;fragment;_queryParamMap;constructor(i=new M([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=rt(this.queryParams),this._queryParamMap}toString(){return wl.serialize(this)}},M=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ii(this)}},Ve=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=rt(this.parameters),this._parameterMap}toString(){return qa(this)}};function yl(n,i){return it(n,i)&&n.every((e,t)=>Ie(e.parameters,i[t].parameters))}function it(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function _l(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===_&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==_&&(e=e.concat(i(r,t)))}),e}var Cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>new Ge,providedIn:"root"})}return n})(),Ge=class{parse(i){let e=new Fr(i);return new ue(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${un(i.root,!0)}`,t=Sl(i.queryParams),r=typeof i.fragment=="string"?`#${Il(i.fragment)}`:"";return`${e}${t}${r}`}},wl=new Ge;function ii(n){return n.segments.map(i=>qa(i)).join("/")}function un(n,i){if(!n.hasChildren())return ii(n);if(i){let e=n.children[_]?un(n.children[_],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==_&&t.push(`${r}:${un(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=_l(n,(t,r)=>r===_?[un(n.children[_],!1)]:[`${r}:${un(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[_]!=null?`${ii(n)}/${e[0]}`:`${ii(n)}/(${e.join("//")})`}}function Wa(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ei(n){return Wa(n).replace(/%3B/gi,";")}function Il(n){return encodeURI(n)}function Lr(n){return Wa(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ri(n){return decodeURIComponent(n)}function Aa(n){return ri(n.replace(/\+/g,"%20"))}function qa(n){return`${Lr(n.path)}${El(n.parameters)}`}function El(n){return Object.entries(n).map(([i,e])=>`;${Lr(i)}=${Lr(e)}`).join("")}function Sl(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${ei(e)}=${ei(r)}`).join("&"):`${ei(e)}=${ei(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Cl=/^[^\/()?;#]+/;function Dr(n){let i=n.match(Cl);return i?i[0]:""}var Rl=/^[^\/()?;=#]+/;function xl(n){let i=n.match(Rl);return i?i[0]:""}var Ml=/^[^=?&#]+/;function Tl(n){let i=n.match(Ml);return i?i[0]:""}var Dl=/^[^&#]+/;function Al(n){let i=n.match(Dl);return i?i[0]:""}var Fr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new M([],{}):new M([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[_]=new M(e,t)),r}parseSegment(){let i=Dr(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(i),new Ve(ri(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=xl(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Dr(this.remaining);r&&(t=r,this.capture(t))}i[ri(e)]=ri(t)}parseQueryParam(i){let e=Tl(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Al(this.remaining);a&&(t=a,this.capture(t))}let r=Aa(e),o=Aa(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Dr(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=_);let s=this.parseChildren(e+1);t[a??_]=Object.keys(s).length===1&&s[_]?s[_]:new M([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new E(4011,!1)}};function Ka(n){return n.segments.length>0?new M([],{[_]:n}):n}function Qa(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=Qa(r);if(t===_&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new M(n.segments,i);return kl(e)}function kl(n){if(n.numberOfChildren===1&&n.children[_]){let i=n.children[_];return new M(n.segments.concat(i.segments),i.children)}return n}function Rt(n){return n instanceof ue}function Xa(n,i,e=null,t=null,r=new Ge){let o=Ya(n);return Za(o,i,e,t,r)}function Ya(n){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new M(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=Ka(t);return i??r}function Za(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Ar(o,o,o,e,t,r);let a=Pl(i);if(a.toRoot())return Ar(o,o,new M([],{}),e,t,r);let s=Nl(a,o,n),c=s.processChildren?mn(s.segmentGroup,s.index,a.commands):es(s.segmentGroup,s.index,a.commands);return Ar(o,s.segmentGroup,c,e,t,r)}function ai(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function gn(n){return typeof n=="object"&&n!=null&&n.outlets}function ka(n,i,e){n||="\u0275";let t=new ue;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Ar(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(m=>ka(d,m,o)):ka(d,u,o);let s;n===i?s=e:s=Ja(n,i,e);let c=Ka(Qa(s));return new ue(c,a,r)}function Ja(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Ja(o,i,e)}),new M(n.segments,t)}var si=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&ai(t[0]))throw new E(4003,!1);let r=t.find(gn);if(r&&r!==fl(t))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Pl(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new si(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new si(e,i,t)}var St=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Nl(n,i,e){if(n.isAbsolute)return new St(i,!0,0);if(!e)return new St(i,!1,NaN);if(e.parent===null)return new St(e,!0,0);let t=ai(n.commands[0])?0:1,r=e.segments.length-1+t;return Ol(e,r,n.numberOfDoubleDots)}function Ol(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new E(4005,!1);r=t.segments.length}return new St(t,!1,r-o)}function Ll(n){return gn(n[0])?n[0].outlets:{[_]:n}}function es(n,i,e){if(n??=new M([],{}),n.segments.length===0&&n.hasChildren())return mn(n,i,e);let t=Fl(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new M(n.segments.slice(0,t.pathIndex),{});return o.children[_]=new M(n.segments.slice(t.pathIndex),n.children),mn(o,0,r)}else return t.match&&r.length===0?new M(n.segments,{}):t.match&&!n.hasChildren()?Ur(n,i,e):t.match?mn(n,0,r):Ur(n,i,e)}function mn(n,i,e){if(e.length===0)return new M(n.segments,{});{let t=Ll(e),r={};if(Object.keys(t).some(o=>o!==_)&&n.children[_]&&n.numberOfChildren===1&&n.children[_].segments.length===0){let o=mn(n.children[_],i,e);return new M(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=es(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new M(n.segments,r)}}function Fl(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(gn(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Na(c,d,a))return o;t+=2}else{if(!Na(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Ur(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(gn(o)){let c=Ul(o.outlets);return new M(t,c)}if(r===0&&ai(e[0])){let c=n.segments[i];t.push(new Ve(c.path,Pa(e[0]))),r++;continue}let a=gn(o)?o.outlets[_]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&ai(s)?(t.push(new Ve(a,Pa(s))),r+=2):(t.push(new Ve(a,{})),r++)}return new M(t,{})}function Ul(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Ur(new M([],{}),0,t))}),i}function Pa(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Na(n,i,e){return n==e.path&&Ie(i,e.parameters)}var pn="imperative",z=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(z||{}),oe=class{id;url;constructor(i,e){this.id=i,this.url=e}},ot=class extends oe{type=z.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ke=class extends oe{urlAfterRedirects;type=z.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},V=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(V||{}),vn=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(vn||{}),de=class extends oe{reason;code;type=z.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ts(n){return n instanceof de&&(n.code===V.Redirect||n.code===V.SupersededByNewNavigation)}var Pe=class extends oe{reason;code;type=z.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},at=class extends oe{error;target;type=z.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},bn=class extends oe{urlAfterRedirects;state;type=z.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ci=class extends oe{urlAfterRedirects;state;type=z.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},li=class extends oe{urlAfterRedirects;state;shouldActivate;type=z.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},di=class extends oe{urlAfterRedirects;state;type=z.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ui=class extends oe{urlAfterRedirects;state;type=z.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hi=class{route;type=z.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},mi=class{route;type=z.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pi=class{snapshot;type=z.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fi=class{snapshot;type=z.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gi=class{snapshot;type=z.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vi=class{snapshot;type=z.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var xt=class{},yn=class{},Mt=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function jl(n){return!(n instanceof xt)&&!(n instanceof Mt)&&!(n instanceof yn)}var bi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new kt(this.rootInjector)}},kt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new bi(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(w(ce))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=jr(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=jr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Br(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Br(i,this._root).map(e=>e.value)}};function jr(n,i){if(n===i.value)return i;for(let e of i.children){let t=jr(n,e);if(t)return t}return null}function Br(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Br(n,e);if(t.length)return t.unshift(i),t}return[]}var re=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Et(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var _n=class extends yi{snapshot;constructor(i,e){super(i),this.snapshot=e,Qr(this,i)}toString(){return this.snapshot.toString()}};function ns(n,i){let e=Bl(n,i),t=new X([new Ve("",{})]),r=new X({}),o=new X({}),a=new X({}),s=new X(""),c=new We(t,r,a,s,o,_,n,e.root);return c.snapshot=e.root,new _n(new re(c,[]),e)}function Bl(n,i){let e={},t={},r={},a=new Tt([],e,r,"",t,_,n,null,{},i);return new wn("",new re(a,[]))}var We=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(D(d=>d[Sn]))??y(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(D(i=>rt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(D(i=>rt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Kr(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:h(h({},i.params),n.params),data:h(h({},i.data),n.data),resolve:h(h(h(h({},n.data),i.data),r?.data),n._resolvedData)}:t={params:h({},n.params),data:h({},n.data),resolve:h(h({},n.data),n._resolvedData??{})},r&&rs(r)&&(t.resolve[Sn]=r.title),t}var Tt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Sn]}constructor(i,e,t,r,o,a,s,c,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=rt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=rt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},wn=class extends yi{url;constructor(i,e){super(e),this.url=i,Qr(this,e)}toString(){return is(this._root)}};function Qr(n,i){i.value._routerState=n,i.children.forEach(e=>Qr(n,e))}function is(n){let i=n.children.length>0?` { ${n.children.map(is).join(", ")} } `:"";return`${n.value}${i}`}function kr(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Ie(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Ie(i.params,e.params)||n.paramsSubject.next(e.params),pl(i.url,e.url)||n.urlSubject.next(e.url),Ie(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function zr(n,i){let e=Ie(n.params,i.params)&&yl(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||zr(n.parent,i.parent))}function rs(n){return typeof n.title=="string"||n.title===null}var os=new v(""),Rn=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=_;activateEvents=new le;deactivateEvents=new le;attachEvents=new le;detachEvents=new le;routerOutletData=en();parentContexts=l(kt);location=l(Wo);changeDetector=l(tt);inputBinder=l(Ei,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new $r(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Gt]})}return n})(),$r=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===We?this.route:i===kt?this.childContexts:i===os?this.outletData:this.parent.get(i,e)}},Ei=new v("");var Xr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&k(0,"router-outlet")},dependencies:[Rn],encapsulation:2,changeDetection:1})}return n})();function Yr(n){let i=n.children&&n.children.map(Yr),e=i?Q(h({},n),{children:i}):h({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==_&&(e.component=Xr),e}function zl(n,i,e){let t=In(n,i._root,e?e._root:void 0);return new _n(t,i)}function In(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=$l(n,i,e);return new re(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>In(n,s)),a}}let t=Hl(i.value),r=i.children.map(o=>In(n,o));return new re(t,r)}}function $l(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return In(n,t,r);return In(n,t)})}function Hl(n){return new We(new X(n.url),new X(n.params),new X(n.queryParams),new X(n.fragment),new X(n.data),n.outlet,n.component,n)}var Dt=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},as="ngNavigationCancelingError";function _i(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Rt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ss(!1,V.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function ss(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[as]=!0,e.cancellationCode=i,e}function Vl(n){return cs(n)&&Rt(n.url)}function cs(n){return!!n&&n[as]}var Hr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),kr(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Et(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Et(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Et(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=Et(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new vi(o.value.snapshot))}),i.children.length&&this.forwardEvent(new fi(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(kr(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),kr(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},wi=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Ct=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Gl(n,i,e){let t=n._root,r=i?i._root:null;return hn(t,r,e,[t.value])}function Wl(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Pt(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Mo(n)?n:i.get(n):t}function hn(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Et(i);return n.children.forEach(a=>{ql(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>fn(s,e.getContext(a),r)),r}function ql(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Kl(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new wi(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?hn(n,i,s?s.children:null,t,r):hn(n,i,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ct(s.outlet.component,a))}else a&&fn(i,s,r),r.canActivateChecks.push(new wi(t)),o.component?hn(n,null,s?s.children:null,t,r):hn(n,null,e,t,r);return r}function Kl(n,i,e){if(typeof e=="function")return Y(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!it(n.url,i.url);case"pathParamsOrQueryParamsChange":return!it(n.url,i.url)||!Ie(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!zr(n,i)||!Ie(n.queryParams,i.queryParams);default:return!zr(n,i)}}function fn(n,i,e){let t=Et(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?fn(a,i.children.getContext(o),e):fn(a,null,e):fn(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ct(i.outlet.component,r)):e.canDeactivateChecks.push(new Ct(null,r)):e.canDeactivateChecks.push(new Ct(null,r))}function xn(n){return typeof n=="function"}function Ql(n){return typeof n=="boolean"}function Xl(n){return n&&xn(n.canLoad)}function Yl(n){return n&&xn(n.canActivate)}function Zl(n){return n&&xn(n.canActivateChild)}function Jl(n){return n&&xn(n.canDeactivate)}function ed(n){return n&&xn(n.canMatch)}function ls(n){return n instanceof _o||n?.name==="EmptyError"}var ti=Symbol("INITIAL_VALUE");function At(){return ee(n=>wo(n.map(i=>i.pipe(Fe(1),ht(ti)))).pipe(D(i=>{for(let e of i)if(e!==!0){if(e===ti)return ti;if(e===!1||td(e))return e}return!0}),ye(i=>i!==ti),Fe(1)))}function td(n){return Rt(n)||n instanceof Dt}function ds(n){return n.aborted?y(void 0).pipe(Fe(1)):new Bn(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function us(n){return pe(ds(n))}function nd(n){return Le(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?y(Q(h({},i),{guardsResult:!0})):id(o,e,t).pipe(Le(a=>a&&Ql(a)?rd(e,r,n):y(a)),D(a=>Q(h({},i),{guardsResult:a})))})}function id(n,i,e){return se(n).pipe(Le(t=>ld(t.component,t.route,e,i)),Ue(t=>t!==!0,!0))}function rd(n,i,e){return se(i).pipe(Ht(t=>Io(ad(t.route.parent,e),od(t.route,e),cd(n,t.path),sd(n,t.route))),Ue(t=>t!==!0,!0))}function od(n,i){return n!==null&&i&&i(new gi(n)),y(!0)}function ad(n,i){return n!==null&&i&&i(new pi(n)),y(!0)}function sd(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let t=e.map(r=>$n(()=>{let o=i._environmentInjector,a=Pt(r,o),s=Yl(a)?a.canActivate(i,n):Y(o,()=>a(i,n));return st(s).pipe(Ue())}));return y(t).pipe(At())}function cd(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Wl(o)).filter(o=>o!==null).map(o=>$n(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Pt(s,c),u=Zl(d)?d.canActivateChild(e,n):Y(c,()=>d(e,n));return st(u).pipe(Ue())});return y(a).pipe(At())}));return y(r).pipe(At())}function ld(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let s=i._environmentInjector,c=Pt(a,s),d=Jl(c)?c.canDeactivate(n,i,e,t):Y(s,()=>c(n,i,e,t));return st(d).pipe(Ue())});return y(o).pipe(At())}function dd(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(s=>{let c=Pt(s,n),d=Xl(c)?c.canLoad(i,e):Y(n,()=>c(i,e)),u=st(d);return r?u.pipe(us(r)):u});return y(a).pipe(At(),hs(t))}function hs(n){return yo($(i=>{if(typeof i!="boolean")throw _i(n,i)}),D(i=>i===!0))}function ud(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return y(!0);let s=a.map(c=>{let d=Pt(c,n),u=ed(d)?d.canMatch(i,e,r):Y(n,()=>d(i,e,r));return st(u).pipe(us(o))});return y(s).pipe(At(),hs(t))}var Ae=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},En=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function hd(n){throw new E(4e3,!1)}function md(n){throw ss(!1,V.GuardRejected)}var Vr=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return A(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[_])throw hd(`${i.redirectTo}`);r=r.children[_]}})}applyRedirectCommands(i,e,t,r,o){return A(this,null,function*(){let a=yield pd(e,r,o);if(a instanceof ue)throw new En(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new En(s);return s})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new ue(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,t,r)}),new M(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new E(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function pd(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return oi(st(Y(e,()=>t(i))))}function fd(n,i){return n.providers&&!n._injector&&(n._injector=tr(n.providers,i,`Route: ${n.path}`)),n._injector??i}function ve(n){return n.outlet||_}function gd(n,i){let e=n.filter(t=>ve(t)===i);return e.push(...n.filter(t=>ve(t)!==i)),e}var Gr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ms(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function vd(n,i,e,t,r,o,a){let s=ps(n,i,e);if(!s.matched)return y(s);let c=ms(o(s));return t=fd(i,t),ud(t,i,e,r,c,a).pipe(D(d=>d===!0?s:h({},Gr)))}function ps(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?h({},Gr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Ua)(e,n,i);if(!r)return h({},Gr);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Oa(n,i,e,t,r){return e.length>0&&_d(n,e,t,r)?{segmentGroup:new M(i,yd(t,new M(e,n.children))),slicedSegments:[]}:e.length===0&&wd(n,e,t)?{segmentGroup:new M(n.segments,bd(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new M(n.segments,n.children),slicedSegments:e}}function bd(n,i,e,t){let r={};for(let o of e)if(Si(n,i,o)&&!t[ve(o)]){let a=new M([],{});r[ve(o)]=a}return h(h({},t),r)}function yd(n,i){let e={};e[_]=i;for(let t of n)if(t.path===""&&ve(t)!==_){let r=new M([],{});e[ve(t)]=r}return e}function _d(n,i,e,t){return e.some(r=>!Si(n,i,r)||!(ve(r)!==_)?!1:!(t!==void 0&&ve(r)===t))}function wd(n,i,e){return e.some(t=>Si(n,i,t))}function Si(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Id(n,i,e){return i.length===0&&!n.children[e]}var Wr=class{};function Ed(n,i,e,t,r,o,a="emptyOnly",s){return A(this,null,function*(){return new qr(n,i,e,t,r,a,o,s).recognize()})}var Sd=31,qr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Vr(this.urlSerializer,this.urlTree)}noMatchError(i){return new E(4002,`'${i.segmentGroup}'`)}recognize(){return A(this,null,function*(){let i=Oa(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new re(t,e),o=new wn("",r),a=Xa(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return A(this,null,function*(){let e=new Tt([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),_,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,_,e),rootSnapshot:e}}catch(t){if(t instanceof En)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Ae?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return A(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=yield this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof re?[a]:[]})}processChildren(i,e,t,r){return A(this,null,function*(){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],u=gd(e,c),m=yield this.processSegmentGroup(i,u,d,c,r);a.push(...m)}let s=fs(a);return Cd(s),s})}processSegment(i,e,t,r,o,a,s){return A(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,o,a,s)}catch(d){if(d instanceof Ae||ls(d))continue;throw d}if(Id(t,r,o))return new Wr;throw new Ae(t)})}processSegmentAgainstRoute(i,e,t,r,o,a,s,c){return A(this,null,function*(){if(ve(t)!==a&&(a===_||!Si(r,o,t)))throw new Ae(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,c);throw new Ae(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){return A(this,null,function*(){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:m,remainingSegments:S}=ps(e,r,o);if(!c)throw new Ae(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Sd&&(this.allowRedirects=!1));let G=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let j=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,m,ms(G),i),T=yield this.applyRedirects.lineralizeSegments(r,j);return this.processSegment(i,t,e,T.concat(S),a,!1,s)})}createSnapshot(i,e,t,r,o){let a=new Tt(t,r,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,xd(e),ve(e),e.component??e._loadedComponent??null,e,Md(e),i),s=Kr(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(i,e,t,r,o,a){return A(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=J=>this.createSnapshot(i,t,J.consumedSegments,J.parameters,a),c=yield oi(vd(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Ae(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:m,consumedSegments:S,remainingSegments:G}=c,j=this.createSnapshot(i,t,S,m,a),{segmentGroup:T,slicedSegments:W}=Oa(e,S,G,d,o);if(W.length===0&&T.hasChildren()){let J=yield this.processChildren(u,d,T,j);return new re(j,J)}if(d.length===0&&W.length===0)return new re(j,[]);let me=ve(t)===o,q=yield this.processSegment(u,d,T,W,me?_:o,!0,j);return new re(j,q instanceof re?[q]:[])})}getChildConfig(i,e,t){return A(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield oi(dd(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw md(e)}return{routes:[],injector:i}})}};function Cd(n){n.sort((i,e)=>i.value.outlet===_?-1:e.value.outlet===_?1:i.value.outlet.localeCompare(e.value.outlet))}function Rd(n){let i=n.value.routeConfig;return i&&i.path===""}function fs(n){let i=[],e=new Set;for(let t of n){if(!Rd(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=fs(t.children);i.push(new re(t.value,r))}return i.filter(t=>!e.has(t))}function xd(n){return n.data||{}}function Md(n){return n.resolve||{}}function Td(n,i,e,t,r,o,a){return Le(s=>A(null,null,function*(){let{state:c,tree:d}=yield Ed(n,i,e,t,s.extractedUrl,r,o,a);return Q(h({},s),{targetSnapshot:c,urlAfterRedirects:d})}))}function Dd(n){return Le(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return y(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of gs(s))o.add(c);let a=0;return se(o).pipe(Ht(s=>r.has(s)?Ad(s,e,n):(s.data=Kr(s,s.parent,n).resolve,y(void 0))),$(()=>a++),Xi(1),Le(s=>a===o.size?y(i):ae))})}function gs(n){let i=n.children.map(e=>gs(e)).flat();return[n,...i]}function Ad(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!rs(t)&&(r[Sn]=t.title),$n(()=>(n.data=Kr(n,n.parent,e).resolve,kd(r,n,i).pipe(D(o=>(n._resolvedData=o,n.data=h(h({},n.data),o),null)))))}function kd(n,i,e){let t=Nr(n);if(t.length===0)return y({});let r={};return se(t).pipe(Le(o=>Pd(n[o],i,e).pipe(Ue(),$(a=>{if(a instanceof Dt)throw _i(new Ge,a);r[o]=a}))),Xi(1),D(()=>r),$t(o=>ls(o)?ae:zn(o)))}function Pd(n,i,e){let t=i._environmentInjector,r=Pt(n,t),o=r.resolve?r.resolve(i,e):Y(t,()=>r(i,e));return st(o)}function La(n){return ee(i=>{let e=n(i);return e?se(e).pipe(D(()=>i)):y(i)})}var Zr=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===_);return t}getResolvedTitleForRoute(e){return e.data[Sn]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>l(vs),providedIn:"root"})}return n})(),vs=(()=>{class n extends Zr{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(w(Ma))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mn=new v("",{factory:()=>({})}),Tn=new v(""),bs=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(ea);loadComponent(e,t){return A(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=A(this,null,function*(){try{let o=yield Ba(Y(e,()=>t.loadComponent())),a=yield ws(_s(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=A(this,null,function*(){try{let o=yield ys(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ys(n,i,e,t){return A(this,null,function*(){let r=yield Ba(Y(e,()=>n.loadChildren())),o=yield ws(_s(r)),a;o instanceof Ko||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),t&&t(n);let s,c,d=!1,u;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,u=a,c=s.get(Tn,[],{optional:!0,self:!0}).flat()),{routes:c.map(Yr),injector:s,factory:u}})}function Nd(n){return n&&typeof n=="object"&&"default"in n}function _s(n){return Nd(n)?n.default:n}function ws(n){return A(this,null,function*(){return n})}var Ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>l(Od),providedIn:"root"})}return n})(),Od=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Is=new v("");var Ld=()=>{},Es=new v(""),Ss=(()=>{class n{currentNavigation=Se(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Se(null);events=new L;transitionAbortWithErrorSubject=new L;configLoader=l(bs);environmentInjector=l(ce);destroyRef=l(Ye);urlSerializer=l(Cn);rootContexts=l(kt);location=l(yt);inputBindingEnabled=l(Ei,{optional:!0})!==null;titleStrategy=l(Zr);options=l(Mn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Ci);createViewTransition=l(Is,{optional:!0});navigationErrorHandler=l(Es,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new hi(r)),t=r=>this.events.next(new mi(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;et(()=>{this.transitions?.next(Q(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new X(null),this.transitions.pipe(ye(t=>t!==null),ee(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return y(t).pipe(ee(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",V.SupersededByNewNavigation),ae;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?Q(h({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Pe(s.id,this.urlSerializer.serialize(s.rawUrl),"",vn.IgnoredSameUrlNavigation)),s.resolve(!1),ae;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(ee(m=>(this.events.next(new ot(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ae:Promise.resolve(m))),Td(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),$(m=>{t.targetSnapshot=m.targetSnapshot,t.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(S=>(S.finalUrl=m.urlAfterRedirects,S)),this.events.next(new yn)}),ee(m=>se(t.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(D(()=>m))),$(()=>{let m=new bn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:S,source:G,restoredState:j,extras:T}=s,W=new ot(m,this.urlSerializer.serialize(S),G,j);this.events.next(W);let me=ns(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=Q(h({},s),{targetSnapshot:me,urlAfterRedirects:S,extras:Q(h({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(q=>(q.finalUrl=S,q)),y(t)}else return this.events.next(new Pe(s.id,this.urlSerializer.serialize(s.extractedUrl),"",vn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ae}),D(s=>{let c=new ci(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=Q(h({},s),{guards:Gl(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),nd(s=>this.events.next(s)),ee(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw _i(this.urlSerializer,s.guardsResult);let c=new li(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return ae;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",V.GuardRejected),ae;if(s.guards.canActivateChecks.length===0)return y(s);let d=new di(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return ae;let u=!1;return y(s).pipe(Dd(this.paramsInheritanceStrategy),$({next:()=>{u=!0;let m=new ui(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{u||this.cancelNavigationTransition(s,"",V.NoDataFromResolver)}}))}),La(s=>{let c=u=>{let m=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let S=u._environmentInjector;m.push(this.configLoader.loadComponent(S,u.routeConfig).then(G=>{u.component=G}))}for(let S of u.children)m.push(...c(S));return m},d=c(s.targetSnapshot.root);return d.length===0?y(s):se(Promise.all(d).then(()=>s))}),La(()=>this.afterPreactivation()),ee(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?se(d).pipe(D(()=>t)):y(t)}),Fe(1),ee(s=>{let c=zl(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=Q(h({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new xt);let d=t.beforeActivateHandler.deferredHandle;return d?se(d.then(()=>s)):y(s)}),$(s=>{new Hr(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=Ld,c)),this.lastSuccessfulNavigation.set(et(this.currentNavigation)),this.events.next(new ke(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),pe(ds(o.signal).pipe(ye(()=>!r&&!t.targetRouterState),$(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",V.Aborted)}))),$({complete:()=>{r=!0}}),pe(this.transitionAbortWithErrorSubject.pipe($(s=>{throw s}))),ut(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",V.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),$t(s=>{if(r=!0,this.destroyed)return t.resolve(!1),ae;if(cs(s))this.events.next(new de(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Vl(s)?this.events.next(new Mt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new at(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=Y(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Dt){let{message:u,cancellationCode:m}=_i(this.urlSerializer,d);this.events.next(new de(t.id,this.urlSerializer.serialize(t.extractedUrl),u,m)),this.events.next(new Mt(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return ae}))}))}cancelNavigationTransition(e,t,r){let o=new de(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=et(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fd(n){return n!==pn}var Cs=new v("");var Rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>l(Ud),providedIn:"root"})}return n})(),Ii=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Ud=(()=>{class n extends Ii{static \u0275fac=(()=>{let e;return function(r){return(e||(e=pt(n)))(r||n)}})();static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jr=(()=>{class n{urlSerializer=l(Cn);options=l(Mn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(yt);urlHandlingStrategy=l(Ci);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ue;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof ue?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=ns(null,l(ce));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:()=>l(jd),providedIn:"root"})}return n})(),jd=(()=>{class n extends Jr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof ot?this.updateStateMemento():e instanceof Pe?this.commitTransition(t):e instanceof bn?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof xt?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof de&&!ts(e)?this.restoreHistory(t):e instanceof at?this.restoreHistory(t,!0):e instanceof ke&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:r}){let{replaceUrl:o,state:a}=t;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=h(h({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=h(h({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=pt(n)))(r||n)}})();static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function eo(n,i){n.events.pipe(ye(e=>e instanceof ke||e instanceof de||e instanceof at||e instanceof Pe),D(e=>e instanceof ke||e instanceof Pe?0:(e instanceof de?e.code===V.Redirect||e.code===V.SupersededByNewNavigation:!1)?2:1),ye(e=>e!==2),Fe(1)).subscribe(()=>{i()})}var Ri=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(nr);stateManager=l(Jr);options=l(Mn,{optional:!0})||{};pendingTasks=l(Do);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Ss);urlSerializer=l(Cn);location=l(yt);urlHandlingStrategy=l(Ci);injector=l(ce);_events=new L;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Rs);injectorCleanup=l(Cs,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Tn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Ei,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new dt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=et(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof de&&t.code!==V.Redirect&&t.code!==V.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ke)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Mt){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=h({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Fd(r.source)},a);this.scheduleNavigation(s,pn,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}jl(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),pn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null;if(r){let c=h({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,a,o).catch(c=>{this.disposed||this.injector.get(Yi)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return et(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Yr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let m;try{let S=r?r.snapshot:this.routerState.snapshot.root;m=Ya(S)}catch(S){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return Za(m,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Rt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,pn,null,t)}navigate(e,t={skipLocationChange:!1}){return Bd(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(Vt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=h({},$a):t===!1?r=h({},Or):r=h(h({},Or),t),Rt(e))return Da(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Da(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((m,S)=>{s=m,c=S});let u=this.pendingTasks.add();return eo(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Bd(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new E(4008,!1)}var Hd=new v("");function to(n,...i){return mt([{provide:Tn,multi:!0,useValue:n},{provide:We,useFactory:Vd},{provide:Qo,multi:!0,useFactory:Gd},i.map(e=>e.\u0275providers)])}function Vd(){return l(Ri).routerState.root}function Gd(){let n=l(te);return i=>{let e=n.get(Jt);if(i!==e.components[0])return;let t=n.get(Ri),r=n.get(Wd);n.get(qd)===1&&t.initialNavigation(),n.get(Kd,null,{optional:!0})?.setUpPreloading(),n.get(Hd,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Wd=new v("",{factory:()=>new L}),qd=new v("",{factory:()=>1});var Kd=new v("");var xs=[];var Xd="@",Yd=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(te);loadingSchedulerFn=l(Zd,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-IP33BIAC.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new E(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new no(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(Ao,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){er()};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),no=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Xd)}},Zd=new v("");function Ms(n="animations"){return Xt("NgAsyncAnimations"),mt([{provide:Be,useFactory:()=>new Yd(l(C),l(sn),l(U),n)},{provide:Hn,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ts={providers:[na({eventCoalescing:!0}),to(xs),Ms()]};function Dn(n){return n.buttons===0||n.detail===0}function An(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var io;function Ds(){if(io==null){let n=typeof document<"u"?document.head:null;io=!!(n&&(n.createShadowRoot||n.attachShadow))}return io}function ro(n){if(Ds()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function be(n){return n.composedPath?n.composedPath()[0]:n.target}var oo;try{oo=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){oo=!1}var Ne=(()=>{class n{_platformId=l(ft);isBrowser=this._platformId?ua(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||oo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kn;function As(){if(kn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>kn=!0}))}finally{kn=kn||!1}return kn}function Nt(n){return As()?n:!!n.capture}function qe(n){return n instanceof Z?n.nativeElement:n}var ks=new v("cdk-input-modality-detector-options"),Ps={ignoreKeys:[18,17,224,91,16]},Ns=650,ao={passive:!0,capture:!0},Os=(()=>{class n{_platform=l(Ne);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new X(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=be(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ns||(this._modality.next(Dn(e)?"keyboard":"mouse"),this._mostRecentTarget=be(e))};_onTouchstart=e=>{if(An(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=be(e)};constructor(){let e=l(U),t=l(C),r=l(ks,{optional:!0});if(this._options=h(h({},Ps),r),this.modalityDetected=this._modality.pipe(xo(1)),this.modalityChanged=this.modalityDetected.pipe(Co()),this._platform.isBrowser){let o=l(Be).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,ao),o.listen(t,"mousedown",this._onMousedown,ao),o.listen(t,"touchstart",this._onTouchstart,ao)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Pn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Pn||{}),Ls=new v("cdk-focus-monitor-default-options"),xi=Nt({passive:!0,capture:!0}),Nn=(()=>{class n{_ngZone=l(U);_platform=l(Ne);_inputModalityDetector=l(Os);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(C);_stopInputModalityDetector=new L;constructor(){let e=l(Ls,{optional:!0});this._detectionMode=e?.detectionMode||Pn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=be(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=qe(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=ro(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new L,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=qe(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=qe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Pn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Pn.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Ns:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=be(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,xi),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,xi)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,xi),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,xi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mi=new WeakMap,Ke=(()=>{class n{_appRef;_injector=l(te);_environmentInjector=l(ce);load(e){let t=this._appRef=this._appRef||this._injector.get(Jt),r=Mi.get(t);r||(r={loaders:new Set,refs:[]},Mi.set(t,r),t.onDestroy(()=>{Mi.get(t)?.refs.forEach(o=>o.destroy()),Mi.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ra(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),Ti;function Jd(){if(Ti===void 0&&(Ti=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Ti=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Ti}function Ot(n){return Jd()?.createHTML(n)||n}var Us=new Set,ct,so=(()=>{class n{_platform=l(Ne);_nonce=l(Kt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):tu}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&eu(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function eu(n,i){if(!Us.has(n))try{ct||(ct=document.createElement("style"),i&&ct.setAttribute("nonce",i),ct.setAttribute("type","text/css"),document.head.appendChild(ct)),ct.sheet&&(ct.sheet.insertRule(`@media ${n} {body{ }}`,0),Us.add(n))}catch(e){console.error(e)}}function tu(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var nu=200,Di=class{_letterKeyStream=new L;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new L;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:nu;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe($(e=>this._pressedLetters.push(e)),So(i),ye(()=>this._pressedLetters.length>0),D(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function js(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ai=class{_items;_activeItemIndex=Se(-1);_activeItem=Se(null);_wrap=!1;_typeaheadSubscription=dt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Wt?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):ir(i)&&(this._effectRef=ko(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new L;change=new L;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Di(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||js(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return ir(this._items)?this._items():this._items instanceof Wt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var On=class extends Ai{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var co={},Ln=class n{_appId=l(qt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),co.hasOwnProperty(i)||(co[i]=0),`${i}${e?n._infix+"-":""}${co[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})};var iu=new v("MATERIAL_ANIMATIONS"),Bs=null;function ru(){return l(iu,{optional:!0})?.animationsDisabled||l(Hn,{optional:!0})==="NoopAnimations"?"di-disabled":(Bs??=l(so).matchMedia("(prefers-reduced-motion)").matches,Bs?"reduced-motion":"enabled")}function Lt(){return ru()!=="enabled"}var he=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(he||{}),lo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=he.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},zs=Nt({passive:!0,capture:!0}),uo=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,zs)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,zs)))}_delegateEventHandler=i=>{let e=be(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Fn={enterDuration:225,exitDuration:150},ou=800,$s=Nt({passive:!0,capture:!0}),Hs=["mousedown","touchstart"],Vs=["mouseup","mouseleave","touchend","touchcancel"],au=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})(),ki=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new uo;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=qe(t)),o&&o.get(Ke).load(au)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},Fn),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||su(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),S=m.transitionProperty,G=m.transitionDuration,j=S==="none"||G==="0s"||G==="0s, 0s"||r.width===0&&r.height===0,T=new lo(this,u,t,j);u.style.transform="scale3d(1, 1, 1)",T.state=he.FADING_IN,t.persistent||(this._mostRecentTransientRipple=T);let W=null;return!j&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let me=()=>{W&&(W.fallbackTimer=null),clearTimeout(J),this._finishRippleTransition(T)},q=()=>this._destroyRipple(T),J=setTimeout(q,d+100);u.addEventListener("transitionend",me),u.addEventListener("transitioncancel",q),W={onTransitionEnd:me,onTransitionCancel:q,fallbackTimer:J}}),this._activeRipples.set(T,W),(j||!d)&&this._finishRippleTransition(T),T}fadeOutRipple(i){if(i.state===he.FADING_OUT||i.state===he.HIDDEN)return;let e=i.element,t=h(h({},Fn),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=he.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=qe(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Hs.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Vs.forEach(e=>{this._triggerElement.addEventListener(e,this,$s)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===he.FADING_IN?this._startFadeOutTransition(i):i.state===he.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=he.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=he.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Dn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ou;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!An(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===he.VISIBLE||i.config.terminateOnPointerUp&&i.state===he.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Hs.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Vs.forEach(e=>i.removeEventListener(e,this,$s)),this._pointerUpEventsRegistered=!1))}};function su(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Pi=new v("mat-ripple-global-options");var cu={capture:!0},lu=["focus","mousedown","mouseenter","touchstart"],ho="mat-ripple-loader-uninitialized",mo="mat-ripple-loader-class-name",Gs="mat-ripple-loader-centered",Ni="mat-ripple-loader-disabled",Oi=(()=>{class n{_document=l(C);_animationsDisabled=Lt();_globalRippleOptions=l(Pi,{optional:!0});_platform=l(Ne);_ngZone=l(U);_injector=l(te);_eventCleanups;_hosts=new Map;constructor(){let e=l(Be).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>lu.map(t=>e.listen(this._document,t,this._onInteraction,cu)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ho,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(mo))&&e.setAttribute(mo,t.className||""),t.centered&&e.setAttribute(Gs,""),t.disabled&&e.setAttribute(Ni,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ni,""):e.removeAttribute(Ni)}_onInteraction=e=>{let t=be(e);if(t instanceof HTMLElement){let r=t.closest(`[${ho}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(mo)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Fn.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Fn.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Ni),rippleConfig:{centered:e.hasAttribute(Gs),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new ki(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(ho)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var du=new v("MAT_BUTTON_CONFIG");function Ws(n){return n==null?void 0:$e(n)}var qs=(()=>{class n{_elementRef=l(Z);_ngZone=l(U);_animationsDisabled=Lt();_config=l(du,{optional:!0});_focusMonitor=l(Nn);_cleanupClick;_renderer=l(Yt);_rippleLoader=l(Oi);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=en(!1,{transform:F});constructor(){l(Ke).load(Un);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(_e("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),vt(r.color?"mat-"+r.color:""),H("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",F],disabled:[2,"disabled","disabled",F],ariaDisabled:[2,"aria-disabled","ariaDisabled",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F],tabIndex:[2,"tabIndex","tabIndex",Ws],_tabindex:[2,"tabindex","_tabindex",Ws],showProgress:[1,"showProgress"]}})}return n})();var uu=new v("cdk-dir-doc",{providedIn:"root",factory:()=>l(C)}),hu=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ks(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?hu.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var po=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Se("ltr");change=new le;constructor(){let e=l(uu,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ks(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ce({type:n});static \u0275inj=Ee({})}return n})();var mu=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],pu=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function fu(n,i){n&1&&(O(0,"div",2),K(1,3),N())}var Qs=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Li=(()=>{class n extends qs{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=gu(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Qs.get(this._appearance):null,o=Qs.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Zt],ngContentSelectors:pu,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(we(mu),ze(0,"span",0),K(1),O(2,"span",1),K(3,1),N(),K(4,2),Re(5,fu,2,0,"div",2),ze(6,"span",3)(7,"span",4)),t&2&&(H("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),I(5),xe(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function gu(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}function Xs(n){return Error(`Unable to find icon with the name "${n}"`)}function vu(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ys(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Zs(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Oe=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},ec=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Oe(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(ne.HTML,r);if(!a)throw Zs(r);let s=Ot(a);return this._addSvgIconConfig(e,t,new Oe("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Oe(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(ne.HTML,t);if(!o)throw Zs(t);let a=Ot(o);return this._addSvgIconSetConfig(e,new Oe("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(ne.RESOURCE_URL,e);if(!t)throw Ys(e);let r=this._cachedIconsByUrl.get(t);return r?y(Fi(r)):this._loadSvgIconFromConfig(new Oe(e,null)).pipe($(o=>this._cachedIconsByUrl.set(t,o)),D(o=>Fi(o)))}getNamedSvgIcon(e,t=""){let r=Js(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):zn(Xs(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(Fi(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(D(t=>Fi(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return y(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe($t(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(ne.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return Eo(o).pipe(D(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Xs(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe($(t=>e.svgText=t),D(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe($(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Ot("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Ot("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw vu();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(ne.RESOURCE_URL,t);if(!a)throw Ys(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(D(d=>Ot(d)),ut(()=>this._inProgressUrlFetches.delete(a)),Ro());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Js(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return bu(o)?new Oe(o.url,null,o.options):new Oe(o,null)}}static \u0275fac=function(t){return new(t||n)(w(xr,8),w(Mr),w(C,8),w(Ze))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fi(n){return n.cloneNode(!0)}function Js(n,i){return n+":"+i}function bu(n){return!!(n.url&&n.options)}var yu=["*"],_u=new v("MAT_ICON_DEFAULT_OPTIONS"),wu=new v("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(C),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),tc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Iu=tc.map(n=>`[${n}]`).join(", "),Eu=/^url\(['"]?#(.*?)['"]?\)$/,Ui=(()=>{class n{_elementRef=l(Z);_iconRegistry=l(ec);_location=l(wu);_errorHandler=l(Ze);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=dt.EMPTY;constructor(){let e=l(new lr("aria-hidden"),{optional:!0}),t=l(_u,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Iu),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)tc.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(Eu):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Fe(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(_e("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),vt(r.color?"mat-"+r.color:""),H("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",F],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:yu,decls:1,vars:0,template:function(t,r){t&1&&(we(),K(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return n})(),nc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ce({type:n});static \u0275inj=Ee({imports:[fo]})}return n})();var ji=class n{isDarkMode=!1;scrollToSection(i){let e=document.getElementById(i);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})}toggleTheme(){this.isDarkMode=!this.isDarkMode;let i=this.isDarkMode?"dark":"light";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-header"]],decls:55,vars:2,consts:[[1,"header-top"],["disabled","","mat-button",""],[1,"spacer"],[1,"theme-toggle",3,"click"],["mat-button","",3,"click"],[1,"header-bottom"],[1,"header-bottom-presentation"],[1,"header-bottom-social"],["href","https://linkedin.com/in/ryunezm","target","_blank"],["mat-button","","outlined",""],["alt","linkedin","height","20","ngSrc","/logos/linkedin.svg","width","20"],["href","https://github.com/ryunezm/","target","_blank"],["mat-button",""],["alt","github","height","20","ngSrc","/logos/github.svg","width","20"],["href","https://threads.net/ryunezm","target","_blank"],["alt","threads","height","20","ngSrc","/logos/threads.svg","width","20"],[1,"header-bottom-photo"],["alt","profile photo","height","200","priority","","width","200",3,"ngSrc"]],template:function(e,t){e&1&&(g(0,"header")(1,"section",0)(2,"a")(3,"button",1),f(4,"Rubber Yunez"),b()(),g(5,"span",2)(6,"button",3),ie("click",function(){return t.toggleTheme()}),f(7),b()(),g(8,"ul")(9,"li")(10,"button",4),ie("click",function(){return t.scrollToSection("about-me")}),f(11,"About me"),b()(),g(12,"li")(13,"button",4),ie("click",function(){return t.scrollToSection("skills")}),f(14,"Stack"),b()(),g(15,"li")(16,"button",4),ie("click",function(){return t.scrollToSection("academic")}),f(17,"Academic"),b()(),g(18,"li")(19,"button",4),ie("click",function(){return t.scrollToSection("projects")}),f(20,"Projects"),b()()()(),g(21,"section",5)(22,"div",6)(23,"h1"),f(24,"Hey, I'm Rubber Yunez"),b(),g(25,"p"),f(26,"A passionate Full-Stack Developer with a background in Chemical Engineering. In the past I leveraged programming to solve complex problems \u2014from numerical methods to heat transfer\u2014 using C/C++, Python, and MATLAB."),b(),g(27,"div",7)(28,"a",8)(29,"button",9)(30,"div"),k(31,"img",10),g(32,"span"),f(33,"linkedin"),b(),g(34,"mat-icon"),f(35,"arrow_outward"),b()()()(),g(36,"a",11)(37,"button",12)(38,"div"),k(39,"img",13),g(40,"span"),f(41,"github"),b(),g(42,"mat-icon"),f(43,"arrow_outward"),b()()()(),g(44,"a",14)(45,"button",12)(46,"div"),k(47,"img",15),g(48,"span"),f(49,"threads"),b(),g(50,"mat-icon"),f(51,"arrow_outward"),b()()()()()(),k(52,"span",2),g(53,"div",16),k(54,"img",17),b()()()),e&2&&(I(7),bt((t.isDarkMode,"")),I(47),P("ngSrc","/profile_square.png"))},dependencies:[Li,Ui,_t],encapsulation:2,changeDetection:1})};var Bi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-about-me"]],decls:43,vars:0,consts:[["id","about-me",1,"content"]],template:function(e,t){e&1&&(O(0,"section",0)(1,"h1"),f(2,"About me"),N(),ze(3,"hr"),O(4,"p"),f(5,"For the past few years, I\u2019ve immersed myself in web development, specializing in "),O(6,"em")(7,"b"),f(8,"Angular"),N()(),f(9," for frontend development, "),O(10,"em")(11,"b"),f(12,"Java"),N()(),f(13," and "),O(14,"em")(15,"b"),f(16,"Spring Boot"),N()(),f(17," for backend systems, and working with databases like "),O(18,"em")(19,"b"),f(20,"MySQL"),N()(),f(21,", "),O(22,"em")(23,"b"),f(24,"PostgreSQL"),N()(),f(25," and "),O(26,"em")(27,"b"),f(28,"MongoDB"),N()(),f(29," to build robust applications. "),N(),O(30,"p"),f(31,"\u{1F331} Currently expanding my skills is:"),N(),O(32,"ul")(33,"li"),f(34,"\u2601\uFE0F Cloud Architecture"),N(),O(35,"li"),f(36,"\u{1F6E1}\uFE0F Cybersecurity"),N()(),ze(37,"br")(38,"br"),O(39,"p"),f(40,"\u{1F680} Passionate about innovation, growth, and tackling new challenges in collaborative environments. "),N(),ze(41,"br")(42,"br"),N())},encapsulation:2,changeDetection:1})};var Cu=["*"];var Ru=new v("MAT_CARD_CONFIG"),Ut=(()=>{class n{appearance;constructor(){let e=l(Ru,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&H("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Cu,decls:1,vars:0,template:function(t,r){t&1&&(we(),K(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})(),jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),ic=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})(),rc=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&H("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})();var zi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var $i=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-skills"]],decls:40,vars:22,consts:[["id","skills",1,"content"],[1,"groups"],["alt","Java","height","100","priority","","width","54",3,"ngSrc","title"],["alt","Spring Boot","height","100","priority","","width","100",3,"ngSrc","title"],["alt","MongoDB","height","100","priority","","width","98",3,"ngSrc","title"],["alt","MySQL","height","100","priority","","width","146",3,"ngSrc","title"],["alt","PostgreSQL","height","100","priority","","width","97.0111117846887",3,"ngSrc","title"],["alt","Angular","height","100","priority","","width","100",3,"ngSrc","title"],["alt","JavaScript","height","100","priority","","width","92",3,"ngSrc","title"],["alt","HTML5","height","100","width","100",3,"ngSrc","title"],["alt","CSS","height","100","width","100",3,"ngSrc","title"],["alt","Rust","height","100","width","100",3,"ngSrc","title"],["alt","Python","height","100","width","82",3,"ngSrc","title"]],template:function(e,t){e&1&&(g(0,"section",0)(1,"h1"),f(2,"Technical Stack"),b(),k(3,"hr"),g(4,"div",1)(5,"mat-card")(6,"mat-card-footer")(7,"mat-card-title"),f(8,"Back-end"),b()(),g(9,"mat-card-content")(10,"div"),k(11,"img",2)(12,"img",3),b()()(),g(13,"mat-card")(14,"mat-card-footer")(15,"mat-card-title"),f(16,"Databases"),b()(),g(17,"mat-card-content")(18,"div"),k(19,"img",4)(20,"img",5)(21,"img",6),b()()(),g(22,"mat-card")(23,"mat-card-footer")(24,"mat-card-title"),f(25,"Front-end"),b()(),g(26,"mat-card-content")(27,"div"),k(28,"img",7)(29,"img",8)(30,"img",9)(31,"img",10),b()()(),g(32,"mat-card")(33,"mat-card-footer")(34,"mat-card-title"),f(35,"Others"),b()(),g(36,"mat-card-content")(37,"div"),k(38,"img",11)(39,"img",12),b()()()()()),e&2&&(I(11),P("ngSrc","/language/Java_logo.svg")("title","Java"),I(),P("ngSrc","/language/Spring_Boot_logo.svg")("title","Spring Boot"),I(7),P("ngSrc","/language/MongoDB_logo_unofficial.png")("title","MongoDB"),I(),P("ngSrc","/language/MySQL_logo.svg")("title","MySQL"),I(),P("ngSrc","/language/postgresql_logo.svg")("title","PostgreSQL"),I(7),P("ngSrc","/language/Angular_logo.svg")("title","Angular"),I(),P("ngSrc","/language/JavaScript_unofficial_logo.svg")("title","JavaScript"),I(),P("ngSrc","/language/HTML5_logo.svg")("title","HTML"),I(),P("ngSrc","/language/CSS3_logo.svg")("title","CSS"),I(7),P("ngSrc","/language/Rust_logo.svg")("title","Rust"),I(),P("ngSrc","/language/Python_logo.svg")("title","Python"))},dependencies:[_t,Ut,Bt,zi,jt],styles:["div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-items:center;width:100%}div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin:1vmax}div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;justify-content:center;justify-items:center;margin:10px;outline:1px solid black}"],changeDetection:1})};var Hi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-academic"]],decls:20,vars:6,consts:[["id","academic",1,"content"],[1,"mat-card-content-box"],["alt","Unicartagena","height","70","priority","","width","160",3,"ngSrc","title"],["alt","UIS","height","70","width","143",3,"ngSrc","title"],["alt","MinTic","height","70","width","38.5",3,"ngSrc","title"]],template:function(e,t){e&1&&(g(0,"section",0)(1,"h1"),f(2,"Academic"),b(),k(3,"hr"),g(4,"div")(5,"mat-card")(6,"mat-card-content")(7,"div",1),k(8,"img",2),b()(),g(9,"mat-card-footer")(10,"mat-card-title"),f(11,"Chemical Engineering"),b()()(),g(12,"mat-card")(13,"mat-card-content")(14,"div",1),k(15,"img",3)(16,"img",4),b()(),g(17,"mat-card-footer")(18,"mat-card-title"),f(19,"Web Developer"),b()()()()()),e&2&&(I(8),P("ngSrc","/logos/unicartagena.png")("title","Universidad de Cartagena"),I(7),P("ngSrc","/logos/uis.svg")("title","Universidad Industrial de Santander"),I(),P("ngSrc","/logos/mintic_dark.svg")("title","Ministerio de Tecnolog\xEDas de la Informaci\xF3n y Comunicaciones"))},dependencies:[Ut,zi,_t,jt,Bt],styles:["div[_ngcontent-%COMP%]{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-items:center}.mat-card-content-box[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:90%}"],changeDetection:1})};var go=(s=>(s.Enlil="Enlil",s.Papsukkal="Papsukkal",s.Ninshubur="Ninshubur",s.Papsukkal_Experiment="MovieCataloguerJavaSwing",s.TextEncrypter="TextEncrypter",s.UnitsConverter="UnitsConverter",s.LeetCodeRust="LeetCodeRust",s))(go||{}),oc={Papsukkal:{title:"Papsukkal",tags:["Java \u2668\uFE0F","Spring Boot \u{1F343}","MongoDB \u{1F4C3}","Angular \u{1F170}\uFE0F"],description:"This is a movie cataloging project developed using Java 11+, Spring Boot, MongoDB (back-end) and Angular (front-end). It allows you to register movies and assign them a custom score on a scale from 0 to 10.",repository:"https://github.com/ryunezm/papsukkal"},TextEncrypter:{title:"Text encrypter",tags:["HTML \u{1F4D1}","CSS \u{1F3A8}","JavaScript \u{1F4A1}"],description:"An application for encrypting and decrypting text using predefined rules. Works with lowercase letters only, excluding accented characters and special symbols.",repository:"https://github.com/ryunezm/EncriptadorTextoHTML",demo:"https://ryunezm.github.io/EncriptadorTextoHTML"},UnitsConverter:{title:"Units converter",tags:["Java \u2668\uFE0F"],description:"This project is a unit conversion application that provides functionality to convert between different types of units, such as currency, length, mass, temperature, and time.",repository:"https://github.com/ryunezm/Unit_Converter",downloadPreview:"https://github.com/ryunezm/Unit_Converter/releases/download/v0.0.1-alpha/JavaCurrencyConverter.jar"},LeetCodeRust:{title:"LeetCode's problems solved in Rust",tags:["Rust \u{1F980}"],description:"Series of exercises solved in Rust, for now, the easy ones, as I become more familiar with this lovely language.",repository:"https://github.com/ryunezm/leetcode_rust"},MovieCataloguerJavaSwing:{title:"Papsukkal (Experiment)",tags:["Java \u2668\uFE0F","H2 \u{1F5C4}\uFE0F"],description:"Small experiment of a local application (movie cataloguer) using Java and part of Spring Boot to simplify the database part (H2).",repository:"https://github.com/ryunezm/papsukkal_javaswing"},Ninshubur:{title:"Ninshubur",tags:["Java \u2668\uFE0F","Spring Boot \u{1F343}","PostgreSQL \u{1F418}"],description:"Restaurant management system: allows customers to place orders, employees to manage them, and administrators to monitor users and the menu. Includes JWT authentication, role control, automated testing and clean, layer-based architecture.",repository:"https://github.com/ryunezm/Ninshubur",demo:void 0,downloadPreview:void 0},Enlil:{title:"Enlil",tags:["Angular \u{1F170}\uFE0F"],description:"This one is a small weather app using Nominatim and OpenWeather APIs.",repository:"https://github.com/ryunezm/enlil",demo:"https://ryunezm.github.io/enlil",downloadPreview:void 0}};var xu=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Mu=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Tu(n,i){n&1&&(g(0,"span",3),K(1,1),b())}function Du(n,i){n&1&&(g(0,"span",6),K(1,2),b())}var Au=["*"];var ac=new v("MatChipAvatar"),sc=new v("MatChipTrailingIcon"),cc=new v("MatChipEdit"),lc=new v("MatChipRemove"),dc=new v("MatChip"),uc=(()=>{class n{_elementRef=l(Z);_parentChip=l(dc);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Ke).load(Un),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=B({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,r){t&2&&(_e("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),H("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",F],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:$e(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),ku=(()=>{class n extends uc{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=pt(n)))(r||n)}})();static \u0275dir=B({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,r){t&1&&ie("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(_e("tabindex",r._getTabindex()),H("mdc-evolution-chip__action--presentational",!1))},features:[Zt]})}return n})();var vo=(()=>{class n{_changeDetectorRef=l(tt);_elementRef=l(Z);_tagName=l(ta);_ngZone=l(U);_focusMonitor=l(Nn);_globalRippleOptions=l(Pi,{optional:!0});_document=l(C);_onFocus=new L;_onBlur=new L;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Lt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(Ln).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new le;destroyed=new le;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(Oi);_injector=l(te);constructor(){let e=l(Ke);e.load(Un),e.load(Fs),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Qi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let r=t._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,r,o){if(t&1&&sr(o,ac,5)(o,cc,5)(o,sc,5)(o,lc,5)(o,ac,5)(o,sc,5)(o,cc,5)(o,lc,5),t&2){let a;fe(a=ge())&&(r.leadingIcon=a.first),fe(a=ge())&&(r.editIcon=a.first),fe(a=ge())&&(r.trailingIcon=a.first),fe(a=ge())&&(r.removeIcon=a.first),fe(a=ge())&&(r._allLeadingIcons=a),fe(a=ge())&&(r._allTrailingIcons=a),fe(a=ge())&&(r._allEditIcons=a),fe(a=ge())&&(r._allRemoveIcons=a)}},viewQuery:function(t,r){if(t&1&&Yo(ku,5),t&2){let o;fe(o=ge())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,r){t&1&&ie("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Xo("id",r.id),_e("role",r.role)("aria-label",r.ariaLabel),vt("mat-"+(r.color||"primary")),H("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",F],highlighted:[2,"highlighted","highlighted",F],disableRipple:[2,"disableRipple","disableRipple",F],disabled:[2,"disabled","disabled",F]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[cr([{provide:dc,useExisting:n}])],ngContentSelectors:Mu,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,r){t&1&&(we(xu),k(0,"span",0),g(1,"span",1)(2,"span",2),Re(3,Tu,2,0,"span",3),g(4,"span",4),K(5),k(6,"span",5),b()()(),Re(7,Du,2,0,"span",6)),t&2&&(I(3),xe(r.leadingIcon?3:-1),I(4),xe(r._hasTrailingIcon()?7:-1))},dependencies:[uc],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var hc=(()=>{class n{_elementRef=l(Z);_changeDetectorRef=l(tt);_dir=l(po,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new L;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Wt;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(ht(null),ee(()=>Qi(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ht(this._chips)).subscribe(e=>{let t=[];e.forEach(r=>r._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new On(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(pe(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(pe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ht(null),pe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(pe(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,r,o){if(t&1&&sr(o,vo,5),t&2){let a;fe(a=ge())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,r){t&1&&ie("keydown",function(a){return r._handleKeydown(a)}),t&2&&_e("role",r.role)},inputs:{disabled:[2,"disabled","disabled",F],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:$e(e)]},ngContentSelectors:Au,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(we(),O(0,"div",0),K(1),N())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();function Pu(n,i){if(n&1&&(g(0,"mat-chip"),f(1),b()),n&2){let e=i.$implicit;I(),bt(e)}}function Nu(n,i){if(n&1&&(g(0,"a",3)(1,"button",4),f(2,"Demo"),b()()),n&2){let e=Je().$implicit,t=Je();P("href",t.projectDetails[e].demo,Gn)}}function Ou(n,i){if(n&1&&(g(0,"a",3)(1,"button",4),f(2,"Download preview"),b()()),n&2){let e=Je().$implicit,t=Je();P("href",t.projectDetails[e].downloadPreview,Gn)}}function Lu(n,i){if(n&1&&(g(0,"div",2)(1,"mat-card")(2,"mat-card-title"),f(3),b(),g(4,"mat-card-subtitle")(5,"mat-chip-set"),or(6,Pu,2,1,"mat-chip",null,rr),b()(),g(8,"mat-card-content")(9,"p"),f(10),b()(),g(11,"mat-card-actions")(12,"a",3)(13,"button",4),f(14,"Repository"),b()(),Re(15,Nu,3,1,"a",3),Re(16,Ou,3,1,"a",3),b()()()),n&2){let e=i.$implicit,t=Je();I(3),bt(t.projectDetails[e].title),I(3),ar(t.projectDetails[e].tags),I(4),bt(t.projectDetails[e].description),I(2),P("href",t.projectDetails[e].repository,Gn),I(3),xe(t.projectDetails[e].demo?15:-1),I(),xe(t.projectDetails[e].downloadPreview?16:-1)}}var Vi=class n{projects=Object.values(go);projectDetails=oc;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-projects"]],decls:7,vars:0,consts:[["id","projects",1,"content"],[1,"project-content-container"],[1,"project-content"],["target","_blank",3,"href"],["mat-button",""]],template:function(e,t){e&1&&(g(0,"section",0)(1,"h1"),f(2,"Projects"),b(),k(3,"hr"),g(4,"div",1),or(5,Lu,17,5,"div",2,rr),b()()),e&2&&(I(5),ar(t.projects))},dependencies:[Ut,Bt,rc,jt,ic,Li,hc,vo],encapsulation:2,changeDetection:1})};var Gi=class n{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-footer"]],decls:3,vars:1,template:function(e,t){e&1&&(O(0,"footer")(1,"p"),f(2),N()()),e&2&&(I(2),Jo("\xA9 ",t.currentYear," Developed by Rubber Yunez "))},encapsulation:2,changeDetection:1})};var Wi=class n{showScrollTopButton=!1;buttonVisibility="hidden";ngOnInit(){document.addEventListener("contextmenu",this.preventDefault)}ngOnDestroy(){document.removeEventListener("contextmenu",this.preventDefault)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}onScroll(){let i=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;this.showScrollTopButton=i>300,this.buttonVisibility=this.showScrollTopButton?"visible":"hidden"}preventDefault(i){i.preventDefault()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-root"]],hostBindings:function(e,t){e&1&&ie("scroll",function(){return t.onScroll()},Vo)},decls:10,vars:4,consts:[["aria-label","Back to top","matFab","",1,"button-to-top",3,"click"]],template:function(e,t){e&1&&(k(0,"app-header")(1,"app-about-me")(2,"app-skills")(3,"app-academic")(4,"app-projects")(5,"app-footer"),g(6,"button",0),ie("click",function(){return t.scrollToTop()}),g(7,"mat-icon"),f(8,"arrow_upward"),b()(),k(9,"router-outlet")),e&2&&(I(6),H("hidden",t.buttonVisibility==="hidden")("visible",t.buttonVisibility==="visible"))},dependencies:[Bi,Rn,Hi,Gi,ji,nc,Ui,Vi,$i],encapsulation:2,changeDetection:1})};yr(Wi,Ts).catch(n=>console.error(n));
