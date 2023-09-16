"use strict";(self.webpackChunklacrema=self.webpackChunklacrema||[]).push([[1704],{4576:(e,t,s)=>{s.d(t,{Ei:()=>w,JU:()=>m,MS:()=>u,Ue:()=>d,VS:()=>p,lV:()=>g,p9:()=>c,uT:()=>h}),s(9389),s(2060);class i{static isArray(e){return e&&"object"==typeof e&&Array.isArray(e)}static isObject(e){return e&&"object"==typeof e&&!Array.isArray(e)}static isString(e){return e&&"string"==typeof e}static mergeDeep(e,t){const s=Object.assign({},e);return i.isObject(e)&&i.isObject(t)&&Object.keys(t).forEach((n=>{i.isObject(t[n])?n in e?s[n]=i.isObject(e[n])&&i.isObject(t[n])?i.mergeDeep(e[n],t[n]):t[n]:Object.assign(s,{[n]:t[n]}):Object.assign(s,{[n]:t[n]})})),s}static toCamelCase(e){return i.isString(e)?e.replace(/(?:^\w|[A-Z]|\b\w)/g,((e,t)=>0===t?e.toLowerCase():e.toUpperCase())).replace(/\W+/g,""):e}static toUpperCamelCase(e){return i.isString(e)?(e=i.toCamelCase(e)).charAt(0).toUpperCase()+e.slice(1):e}static isInPage(e){return e!==document.body&&document.body.contains(e)}static deepFreeze(e){return Object.keys(e).forEach((t=>{"object"==typeof e[t]&&i.deepFreeze(e[t])})),Object.freeze(e)}static clamp(e,t,s){return Math.min(s,Math.max(t,e))}}var n=i,o=new class{constructor(){this.events=[]}on(e,t,s,i=!1){(this.events[e]||(this.events[e]=[])).push({cb:t,context:s,once:i})}once(e,t,s){this.on(e,t,s,!0)}emit(e){const t=this,s=[].slice.call(arguments,1);this.events[e]&&this.events[e].forEach(((i,n)=>{i.cb.apply(i.context,s),i.once&&delete t.events[e][n]}))}off(e,t){const s=this;this.events[e]&&this.events[e].forEach(((i,n)=>{i.cb===t&&delete s.events[e][n]}))}},l=new class{constructor(){this.eventsName=["siteInit","pageInit","siteLoad","pageLoad","siteIn","pageIn","reveal","pageFetch","pageOut","pageCreate","pageKill","siteReload"],this.events={},this.eventsName.forEach((e=>{this.events[e]={callbacks:[],done:0}})),this.cycles={load:{events:["siteInit","pageInit",["siteLoad","pageLoad"],"siteIn","pageIn","reveal"]},reload:{events:["pageOut","siteReload"]},transition:{events:[["pageFetch","pageOut"],"pageCreate","pageKill","pageInit","pageLoad","pageIn","reveal"]},refresh:{events:["pageKill","pageInit","pageLoad","pageIn","reveal"]}},this.debug=!1}cycle(e){if(this.cycles[e]){this.cycles[e].current=0,this.debug&&console.log("Start cycle: "+e);for(const e in this.events)this.events[e].done=0;this.proceed(e)}}proceed(e){const t=this.cycles[e].events,s=this.cycles[e].current;if(s<t.length){const i=t[s];Array.isArray(i)?i.forEach((t=>{this.do(e,t)})):this.do(e,i)}else this.debug&&console.log(e+" cycle ended")}next(e){const t=this,s=this.cycles[e].events,i=this.cycles[e].current;if(i<s.length){const n=s[i];let o=!0,l=[];l="string"==typeof n?Array(n):n,l.length>1&&l.forEach((e=>{(0===t.events[e].done||t.events[e].done<t.events[e].callbacks.length)&&(o=!1)})),o&&(this.cycles[e].current++,requestAnimationFrame(this.proceed.bind(this,e)))}}add(e,t,s=10,i=null){this.events[e]&&this.events[e].callbacks.push({callback:t,position:s,cycle:i})}remove(e,t,s=null){const i=this;this.events[e]&&this.events[e].callbacks.forEach(((n,o)=>{n.callback===t&&n.cycle===s&&delete i.events[e].callbacks[o]}))}do(e,t){this.events[t].done=0,this.events[t].callbacks.length>0?(this.debug&&console.log("Do event: "+t+" ("+e+" cycle)"),o.emit(n.toCamelCase("before-"+t)),this.events[t].callbacks.sort(((e,t)=>e.position-t.position)).forEach((s=>{null===s.cycle||s.cycle===e?s.callback((()=>this.done(e,t))):this.done(e,t)}))):this.done(e,t)}done(e,t){this.events[t].done++,this.debug&&console.log("Done event: "+t+" "+this.events[t].done+"/"+this.events[t].callbacks.length+" ("+e+" cycle)"),o.emit(n.toCamelCase("after-"+t)),this.events[t].done>=this.events[t].callbacks.length&&this.next(e,t)}enableDebug(e=!0){this.debug=e}},r=new class{constructor(){this.settings=n.deepFreeze({cursor:{inertia:1,trailLength:10},intersection:{threshold:.3},lottie:{renderer:"svg",subFrame:!0},mouse:{inertia:.1},parallax:{inertia:.1},preloader:{duration:0},reveal:{stagger:.1,threshold:.15},scroll:{inertia:.1},smooth:{inertia:.1},ticker:{external:!1},transition:{reload:!1},credits:{show:!0}}),this.timeouts={resizeThrottle:null,scrollEnd:null},this.windowWidth=1,this.windowHeight=1,this.clientWidth=1,window.scrollTop=window.scrollY,window.unifiedScrollTop=window.scrollTop,window.maxScrollTop=1,window.scrollProgress=0,this.previousScrollTop=window.scrollY,this.isScrolling=!1,window.mouseX=-1,window.mouseY=-1,window.mouseLastScrollTop=0,l.add("siteInit",this.siteInit.bind(this),999),this.bindEvents()}setSettings(e){this.settings=n.deepFreeze(n.mergeDeep(this.settings,e))}siteInit(e){this.showCredits(),this.setCSSProperties(),this.scrollHandler(),e()}bindEvents(){window.addEventListener("mousemove",this.mouseHandler.bind(this),{passive:!0}),window.addEventListener("resize",this.resizeThrottle.bind(this)),window.addEventListener("scroll",this.scrollHandler.bind(this),{passive:!0})}mouseHandler(e){const t=e.pageY-window.scrollTop;window.mouseX=e.pageX,window.mouseY=t,o.emit("mouseMove",e)}resizeThrottle(){clearTimeout(this.timeouts.resizeThrottle),this.timeouts.resizeThrottle=setTimeout(this.resizeHandler.bind(this),200)}resizeHandler(){this.setCSSProperties(),o.emit("resize")}setCSSProperties(){const e=window.innerWidth;this.windowWidth!==e&&(this.windowWidth=e,this.clientWidth=document.body.clientWidth);const t=window.innerHeight;this.windowHeight!==t&&(this.windowHeight=t,this.clientHeight=document.body.clientHeight),requestAnimationFrame((()=>{document.documentElement.style.setProperty("--vw",.01*this.windowWidth+"px"),document.documentElement.style.setProperty("--cw",.01*this.clientWidth+"px"),document.documentElement.style.setProperty("--vh",.01*this.windowHeight+"px"),document.documentElement.style.setProperty("--ch",.01*this.clientHeight+"px")}))}scrollHandler(){window.scrollTop=window.scrollY,window.unifiedScrollTop=window.scrollTop,this.isScrolling||this.scrollStart(),clearTimeout(this.timeouts.scrollEnd),this.timeouts.scrollEnd=setTimeout(this.scrollEnd.bind(this),200),this.previousScrollTop=window.scrollTop,window.scrollProgress=window.scrollTop/window.maxScrollTop,o.emit("scroll")}scrollStart(){this.isScrolling=!0,document.documentElement.classList.add("is-scrolling"),o.emit("scrollStart")}scrollEnd(){this.isScrolling=!1,document.documentElement.classList.remove("is-scrolling"),o.emit("scrollEnd")}showCredits(){if(this.settings.credits.show){const e="background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; ";console.log("%c powered by %cluge%c / 0.6.16-beta %c > https://luge.cool ",e,e+"font-weight: bold; ",e,"color: black; font: 400 1em monospace; padding: 0.5em 0; ")}}};class a{constructor(e){this.pluginSlug=e,l.add("siteInit",this.beforeInit.bind(this),5)}beforeInit(e){this.isDisabled=this.disabled(),this.isDisabled?document.documentElement.classList.add("lg-"+this.pluginSlug+"-disabled"):this.init(),e()}init(){this.setAttributes()}disabled(){return!!(r.settings[this.pluginSlug]||{}).disabled}setAttributes(){this.pluginAttributes={}}getAttributes(e){const t=this.pluginAttributes,s={};for(const i in t){const o=t[i];let l="lg-"+this.pluginSlug;"root"!==i&&(l+="-"+i),l=n.toCamelCase(l);const r=e.dataset[l];let a,c,d;"object"==typeof o?(a=o[0],d=o[1]):a=o,c=void 0===r&&void 0!==d?a(d):(void 0!==r||a!==Boolean)&&(void 0!==r?a===Boolean?"false"!==r:a(r):void 0),s[i]=c}return(e.luge||(e.luge={}))&&(e.luge[this.pluginSlug]=s),s}}class c extends a{constructor(e){super("preloader"),this.luge=e,this.intro=!1,this.playerIn=!1,this.startTime=Date.now(),this.doneLoad=null,e.preloader={add:this.add.bind(this)}}init(){super.init(),this.el=document.querySelector("[data-lg-preloader]"),this.el&&(this.attributes=this.getAttributes(this.el),this.el.classList.add("lg-preloader","lg-preloader--"+this.attributes.root),this.initLottie(),this.luge.lifecycle.add("siteIn",this.siteIn.bind(this))),this.luge.lifecycle.add("pageLoad",this.pageLoad.bind(this))}setAttributes(){this.pluginAttributes={root:[String,""],duration:[Number,this.luge._settings.preloader.duration],in:String,reverse:Boolean}}pageLoad(e){this.attributes&&"lottie"===this.attributes.root&&"object"==typeof lottie?this.doneLoad=e:e()}siteIn(e){const t=(Date.now()-this.startTime)/1e3,s=this.attributes.duration-t;if(s<=0){const t=this.clear.bind(this,e);if(this.playerIn)this.playerIn.play(),this.playerIn.addEventListener("complete",t,{once:!0});else if("function"==typeof this.intro)this.intro(e,this.remove.bind(this));else{const e=window.getComputedStyle(this.el).getPropertyValue("transition-duration");""!==e&&"0s"!==e?(this.el.addEventListener("transitionend",t,{once:!0}),this.el.classList.add("is-hidden")):t()}}else setTimeout(this.siteIn.bind(this,e),1e3*s)}clear(e){this.playerIn&&this.playerIn.destroy(),this.remove(),e()}remove(e){this.el.parentNode.removeChild(this.el),this.el=null}add(e){this.intro=e}initLottie(){const e=this;if("lottie"===this.attributes.root&&"object"==typeof lottie){const t=this.attributes.in;let s=!1;t&&(s=lottie.loadAnimation({container:this.el,renderer:"svg",loop:!1,autoplay:!1,path:t,rendererSettings:{preserveAspectRatio:"none"}}),this.attributes.reverse&&s.setDirection(-1)),s.addEventListener("DOMLoaded",(()=>{e.attributes.reverse&&s.goToAndStop(s.totalFrames-1,!0),e.el.setAttribute("style",""),"function"==typeof e.doneLoad&&(e.doneLoad(),e.doneLoad=null)}),{once:!0}),this.playerIn=s}}}class d extends a{constructor(e){super("reveal"),this.luge=e,this.elements=[],this.toRevealIn=[],this.toRevealOut=[],this.reveals={in:{},out:{}},this.canReveal=!1,this.onScrollProgress=this.onScrollProgress.bind(this),e.reveal={add:this.add.bind(this)}}init(){super.init(),this.luge.lifecycle.add("pageInit",this.pageInit.bind(this),11),this.luge.lifecycle.add("pageKill",this.pageKill.bind(this)),this.luge.lifecycle.add("reveal",this.reveal.bind(this)),this.bindEvents()}setAttributes(){super.setAttributes(),this.pluginAttributes={root:String,stagger:String,manual:[Boolean,!1],multiple:Boolean,delay:[Number,0]}}getAttributes(e){const t=super.getAttributes(e);return void 0!==t.stagger&&""===t.stagger?t.stagger=this.luge._settings.reveal.stagger:void 0===t.stagger&&(t.stagger=!1),t}bindEvents(){this.luge.emitter.on("resize",this.resizeHandler,this),this.luge.emitter.on("scroll",this.scrollHandler,this),this.luge.emitter.on("update",this.updateHandler,this)}pageInit(e){this.addElements(),e()}addElements(){const e=document.querySelectorAll("[data-lg-reveal]"),t=this;e.forEach((e=>{t.addElement(e)}))}addElement(e){if(!this.elements.includes(e)){const t=this.getAttributes(e);if(!t.stagger&&null!==e.closest("[data-lg-reveal-stagger]"))return;const s=t.root;e.luge.reveal.name=n.toCamelCase(s),t.manual?(e.luge.reveal.in=()=>{this.revealCallback(e,e.luge.reveal.name,"in"),this.setRevealClasses(e,"is-in")},e.luge.reveal.out=()=>{this.revealCallback(e,e.luge.reveal.name,"out"),this.setRevealClasses(e,"is-out")}):(this.luge.scrollobserver.add(e),e.addEventListener("scrollprogress",this.onScrollProgress)),e.luge.reveal.delay=1e3*t.delay,t.stagger?Array.from(e.children).forEach((e=>{const t=e.dataset.lgReveal;e.style.transition="none",this.luge.ticker.nextTick((()=>{e.style.transition=""})),e.classList.add("lg-reveal","is-out"),(t||s)&&e.classList.add("lg-reveal--"+(null!=t?t:s)),e.dataset.lgRevealChild="",(e.luge||(e.luge={}))&&(e.luge.reveal={isRevealed:!1})})):(e.style.transition="none",this.luge.ticker.nextTick((()=>{e.style.transition=""})),e.classList.add("lg-reveal","is-out"),s&&e.classList.add("lg-reveal--"+s)),this.elements.push(e)}}removeElement(e){e.removeEventListener("scrollprogress",this.onScrollProgress),this.elements.includes(e)&&this.elements.splice(this.elements.indexOf(e),1)}pageKill(e){const t=this;this.canReveal=!1,this.elements.forEach((e=>{t.removeElement(e)})),e()}onScrollProgress(e){const t=e.target,s=this.luge._settings.reveal.threshold;t.scrollProgress>=s&&t.scrollProgress<=1-s&&!t.luge.reveal.isRevealed?(this.toRevealOut.includes(t)&&this.toRevealOut.splice(this.toRevealOut.indexOf(t),1),this.toRevealIn.includes(t)||this.toRevealIn.push(t)):(t.scrollProgress<s||t.scrollProgress>1-s&&t.scrollEnd<Math.round(window.unifiedScrollTop))&&t.luge.reveal.isRevealed&&(this.toRevealIn.includes(t)&&this.toRevealIn.splice(this.toRevealIn.indexOf(t),1),this.toRevealOut.includes(t)||this.toRevealOut.push(t))}reveal(e){this.canReveal=!0,this.elements.forEach((e=>{e.scrollStart<0&&(this.toRevealIn.includes(e)||this.toRevealIn.push(e))})),this.revealElements(),e()}resizeHandler(){this.revealElements()}scrollHandler(){this.revealElements()}updateHandler(){this.addElements(),this.revealElements()}revealElements(){const e=this;if(this.canReveal){let t=0;this.toRevealIn.forEach((s=>{const i=n.toCamelCase(s.luge.reveal.root);t+=s.luge.reveal.delay,setTimeout((function(){e.revealCallback(s,i,"in"),s.luge.reveal.stagger?Array.from(s.children).forEach(((t,o)=>{const l=n.toCamelCase(t.dataset.lgReveal);setTimeout((()=>{(l||i)&&e.revealCallback(t,null!=l?l:i,"in"),e.setRevealClasses(t,"is-in")}),o*s.luge.reveal.stagger*1e3)})):e.setRevealClasses(s,"is-in")}),t),t+=1e3*this.luge._settings.reveal.stagger,s.luge.reveal.multiple||e.removeElement(s)})),this.toRevealOut.forEach((t=>{const s=n.toCamelCase(t.luge.reveal.root);void 0!==t.luge.reveal.isRevealed&&e.revealCallback(t,s,"out");let i="";i=t.scrollProgress>.5?"is-out is-out-top":"is-out is-out-bottom",t.luge.reveal.stagger?Array.from(t.children).forEach(((o,l)=>{const r=n.toCamelCase(o.dataset.lgReveal);setTimeout((()=>{(r||s)&&e.revealCallback(o,null!=r?r:s,"out"),e.setRevealClasses(o,i)}),l*t.luge.reveal.stagger*1e3)})):e.setRevealClasses(t,i)})),this.toRevealIn=[],this.toRevealOut=[]}}setRevealClasses(e,t){t=t.split(" "),e.classList.remove("is-in","is-out","is-out-top","is-out-bottom"),t.forEach((t=>{e.classList.add(t)}))}revealCallback(e,t,s){e.dispatchEvent(new CustomEvent("reveal"+s)),e.luge.reveal.isRevealed="in"===s,"function"==typeof this.reveals[s][t]?this.reveals[s][t](e):"function"==typeof e["onreveal"+s]&&e["onreveal"+s]()}add(e,t,s){this.reveals[e]&&(t=n.toCamelCase(t),this.reveals[e][t]?console.log("Reveal animation named "+t+" already exists."):this.reveals[e][t]=s)}}class h extends a{constructor(e){super("transition"),this.luge=e,this.url=window.location.href,this.pathname=window.location.pathname,this.pageFetched=null,this.currentPage=null,this.reload=this.luge._settings.transition.reload,this.prevScrollTop=0,this.newScrollTop=0,this.transitions={in:{},out:{}},this.listeners={linkHandler:this.linkHandler.bind(this)},e.transition={add:this.add.bind(this)}}init(){this.currentPage=document.querySelector("[data-lg-page]"),this.currentPage&&(this.reload=!!this.currentPage.hasAttribute("data-lg-reload")||this.luge._settings.transition.reload),this.initLoader(),this.reload||window.addEventListener("popstate",this.historyStateChanged.bind(this)),this.luge.lifecycle.add("pageInit",this.pageInit.bind(this)),this.luge.lifecycle.add("pageFetch",this.pageFetch.bind(this)),this.luge.lifecycle.add("pageOut",this.pageOut.bind(this)),this.luge.lifecycle.add("pageIn",this.pageIn.bind(this),10,"transition"),this.luge.lifecycle.add("pageCreate",this.pageCreate.bind(this)),this.luge.lifecycle.add("pageKill",this.pageKill.bind(this),999,"transition")}bindLinksEvent(){document.querySelector("[data-lg-page]")&&document.querySelectorAll("a").forEach((e=>{e.addEventListener("click",this.listeners.linkHandler)}))}unbindLinksEvent(){document.querySelectorAll("a").forEach((e=>{e.removeEventListener("click",this.listeners.linkHandler)}))}linkHandler(e){const t=e.currentTarget,s=t.getAttribute("href");if(s&&0!==s.indexOf("#")&&0!==s.indexOf("tel")&&0!==s.indexOf("mailto")&&!t.closest("#wpadminbar")&&"disabled"!==t.getAttribute("data-lg-transition")&&"_blank"!==t.getAttribute("target")&&(0===s.indexOf(window.location.origin)||0===s.indexOf("/")||-1===s.indexOf("/"))){if(e.preventDefault(),window.location.href===s)return;this.navigateTo(s),history.pushState(null,null,this.url)}}navigateTo(e){if(this.url=e,this.reload){const t=document.createElement("link");t.rel="prefetch",t.href=e,document.head.appendChild(t),this.luge.lifecycle.add("siteReload",(t=>{window.location=e})),this.luge.lifecycle._cycle("reload")}else this.luge.lifecycle._cycle("transition")}pageInit(e){this.bindLinksEvent(),e()}initLoader(){const e=document.querySelector("[data-lg-loader]");if(e&&(e.style.transition="none",e.classList.add("lg-loader","lg-loader--"+e.getAttribute("data-lg-loader")),this.luge.ticker.nextTick((()=>{e.style.transition=""}))),e&&"lottie"===e.getAttribute("data-lg-loader")&&"object"==typeof lottie){const t=e.getAttribute("data-lg-loader-out");let s=!1,i=e.getAttribute("data-lg-loader-in"),n=!1;t&&(s=lottie.loadAnimation({container:e,renderer:"svg",loop:!1,autoplay:!1,path:t,rendererSettings:{preserveAspectRatio:"none"}})),"reverse"===i&&(i=t),i&&(n=lottie.loadAnimation({container:e,renderer:"svg",loop:!1,autoplay:!1,path:i,rendererSettings:{preserveAspectRatio:"none"}}),i===t&&n.setDirection(-1)),e.playerOut=s,e.playerIn=n}}pageFetch(e){const t=this;this.url&&fetch(this.url,{credentials:"include"}).then((function(e){return e.text()})).then((function(s){t.pageFetched=s,e()}))}pageCreate(e){const t=(new DOMParser).parseFromString(this.pageFetched,"text/html"),s=t.querySelector("[data-lg-page]");if(s){{this.currentPage.insertAdjacentElement("beforebegin",s),s.style.opacity=0,this.currentPage.style.opacity=0,this.currentPage.style.position="absolute",this.currentPage.style.top=0,this.currentPage.style.left="-999em",this.currentPage.style.width="100%",document.querySelector("body").className=t.querySelector("body").className,document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach((e=>{e.parentNode.removeChild(e)})),t.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach((e=>{document.querySelector("head title").insertAdjacentElement("afterend",e)}));const e=document.querySelector("head title"),i=t.querySelector("head title");e&&i&&(e.innerText=i.innerText)}window.scroll({top:this.newScrollTop,left:0,behavior:"instant"}),window.scrollTop=0,window.smoothScrollTop=0,window.unifiedScrollTop=0,this.prevScrollTop=0,this.newScrollTop=0,this.luge.emitter.emit("pageTransition",t),e()}else window.location=this.url}pageKill(e){const t=this.currentPage;t.parentNode.removeChild(t),this.currentPage=document.querySelector("[data-lg-page]"),this.reload=!!this.currentPage.hasAttribute("data-lg-reload")||this.luge._settings.transition.reload,e()}pageOut(e){const t=this,s=document.querySelector("[data-lg-page]");if(s){const i=n.toCamelCase(s.getAttribute("data-lg-page"));let o=!1;if("function"==typeof this.transitions.out[i]?o=this.transitions.out[i]:"function"==typeof s.onpageout?o=s.onpageout:"function"==typeof this.transitions.out.default&&(o=this.transitions.out.default),o)o(s,e);else{const s=document.querySelector("[data-lg-loader]");if(s){if(s.playerOut)s.playerOut.stop(),s.playerOut.renderer.svgElement.style.opacity=1,s.playerOut.play(),s.playerOut.addEventListener("complete",(()=>{t.reload||(s.playerOut.renderer.svgElement.style.opacity=""),e()}),{once:!0});else{const t=window.getComputedStyle(document.querySelector("[data-lg-loader]")).getPropertyValue("transition-duration");""!==t&&"0s"!==t?s.addEventListener("transitionend",e,{once:!0}):e()}s.classList.add("is-visible")}else e()}}else e();this.unbindLinksEvent.bind(this)}pageIn(e){const t=document.querySelector("[data-lg-page]");if(t){const s=n.toCamelCase(t.getAttribute("data-lg-page"));let i=!1;if(t.style.opacity="","function"==typeof this.transitions.in[s]?i=this.transitions.in[s]:"function"==typeof t.onpagein?i=t.onpagein:"function"==typeof this.transitions.in.default&&(i=this.transitions.in.default),i)i(t,e);else{const t=document.querySelector("[data-lg-loader]");if(t&&t.classList.contains("is-visible"))if(t.playerIn)t.playerIn.stop(),t.playerIn.renderer.svgElement.style.opacity=1,"reverse"===t.getAttribute("data-lg-loader-in")?t.playerIn.goToAndPlay(t.playerIn.totalFrames,!0):t.playerIn.play(),t.playerIn.addEventListener("complete",(()=>{t.playerIn.renderer.svgElement.style.opacity="",t.classList.remove("is-visible"),e()}),{once:!0});else{const s=window.getComputedStyle(document.querySelector("[data-lg-loader]")).getPropertyValue("transition-duration");""!==s&&"0s"!==s?t.addEventListener("transitionend",e,{once:!0}):e(),t.classList.remove("is-visible")}else e()}}else e()}historyStateChanged(){let e="";e=0===this.url.indexOf(window.location.origin)?new URL(this.url):new URL(window.location.origin+this.url),e.pathname!==window.location.pathname&&(this.prevScrollTop=window.scrollY,this.luge.ticker.nextTick((()=>{this.newScrollTop=window.scrollY,window.scroll({top:this.prevScrollTop,left:0,behavior:"instant"})})),this.navigateTo(window.location.href))}add(e,t="default",s){this.transitions[e]&&(t=n.toCamelCase(t),this.transitions[e][t]?console.log("Transition animation for "+t+" page already exists."):this.transitions[e][t]=s)}}class u extends a{constructor(e){super("scroll"),this.luge=e,this.elements=[],this.allowedProperties=["opacity","background-x","background-y"],this.transformProperties=["x","y","z","translate3d","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ"],this.presets={"background-x":{"background-x":["0%","100%"]},"background-y":{"background-y":["0%","100%"]}},this.onScrollProgress=this.onScrollProgress.bind(this)}init(){super.init(),this.luge.lifecycle.add("pageInit",this.pageInit.bind(this)),this.luge.lifecycle.add("pageKill",this.pageKill.bind(this)),this.luge.ticker.add(this.tick,this),this.bindEvents()}setAttributes(){this.pluginAttributes={root:String,yoyo:Boolean,inertia:[String,this.luge._settings.scroll.inertia],animate:String}}getAttributes(e){const t=super.getAttributes(e);if(t.inertia){const e=t.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);t.inertia=e?Number(e[1])+(Number(e[2])-Number(e[1]))*Math.random():Number(t.inertia),t.inertia=Math.max(Math.min(t.inertia,.99),0)}return t}bindEvents(){this.luge.emitter.on("update",this.updateHandler,this)}updateHandler(){this.addElements()}pageInit(e){this.addElements(),e()}addElements(){const e=document.querySelectorAll("[data-lg-scroll]"),t=this;e.forEach((e=>{t.addElement(e)}))}addElement(e){if(!this.elements.includes(e)){const t=this.getAttributes(e);this.luge.scrollobserver.add(e),e.addEventListener("scrollprogress",this.onScrollProgress);const s={};s.smoothProgress=void 0!==e.scrollProgress?e.scrollProgress:0,s.yoyo=t.yoyo,s.inertia=t.inertia;let i=!1;if(void 0!==t.animate?i=JSON.parse(t.animate.replace(/'/g,'"')):this.presets[t.root]&&(i=this.presets[t.root]),i){const e={};for(const t in i)if(this.allowedProperties.includes(t)||this.transformProperties.includes(t)){const s=i[t];let n=String(s[0]),o=String(s[1]),l=n.match(/\d+([a-zA-Z%]+)/m);l?l=l[1]:0===t.indexOf("rotate")&&(l="deg"),n=Number(n.replace(l,"")),o=Number(o.replace(l,""));let r=t;"background-x"===t?r="background-position-x":"background-y"===t&&(r="background-position-y"),e[r]={from:n,to:o,current:n,unit:l}}s.properties=e}e.luge.scroll.animation=s,this.elements.push(e)}}removeElement(e){e.removeEventListener("scrollprogress",this.onScrollProgress),this.elements.includes(e)&&this.elements.splice(this.elements.indexOf(e),1)}pageKill(e){const t=this;this.elements.forEach((e=>{t.removeElement(e)})),e()}onScrollProgress(e){e.target.luge.scroll.animation.atDest=!1}tick(){for(const e of this.elements){if(e.luge.scroll.animation.atDest)continue;let t=e.scrollProgress;if(e.luge.scroll.yoyo&&(t=1-Math.abs(1-2*t)),e.luge.scroll.animation.smoothProgress+=(t-e.luge.scroll.animation.smoothProgress)*(1-e.luge.scroll.inertia),e.luge.scroll.animation.properties){const t={};for(const[s,i]of Object.entries(e.luge.scroll.animation.properties))i.current=i.from+(i.to-i.from)*e.luge.scroll.animation.smoothProgress,["x","y","z"].includes(s)?(t.translate3d||(t.translate3d={}))&&(t.translate3d[s]=i.current+i.unit):t[s]=i.current+i.unit;const s=[];for(const[e,i]of Object.entries(t))if(this.transformProperties.includes(e)){if("object"==typeof i)if("translate3d"===e){const e=Object.assign({x:0,y:0,z:0},i);i.string=e.x+", "+e.y+", "+e.z}else i.string=Object.values(i).join(", ");s.push(e+"("+("object"!=typeof i?i:i.string)+")")}const i={},n=[];s.length>0&&(i.transform=s.join(" "),n.push("transform"));for(const[e,s]of Object.entries(t))this.transformProperties.includes(e)||(i[e]=s,n.push(e));for(const[t,s]of Object.entries(i))e.style.setProperty(t,s);e.style.setProperty("will-change",n.join(", "))}else{const t=Math.round(1e3*(e.scrollProgress-e.luge.scroll.animation.smoothProgress))/1e3;e.style.setProperty("--progress",e.luge.scroll.animation.smoothProgress),e.style.setProperty("--abs-diff",Math.abs(t)),e.style.setProperty("--diff",t)}Math.abs(t-e.luge.scroll.animation.smoothProgress)<1e-4&&(e.luge.scroll.animation.atDest=!0)}}}class g extends a{constructor(e){super("intersection"),this.luge=e,this.listeners={onViewportIntersect:this.onViewportIntersect.bind(this)}}init(){super.init(),this.elements=[],this.luge.lifecycle.add("pageInit",this.pageInit.bind(this)),this.luge.lifecycle.add("pageKill",this.pageKill.bind(this)),this.bindEvents()}setAttributes(){this.pluginAttributes={root:String,class:String}}bindEvents(){this.luge.emitter.on("update",this.updateHandler,this)}updateHandler(){this.addElements()}pageInit(e){this.addElements(),e()}addElements(){const e=document.querySelectorAll("[data-lg-intersection]"),t=this;e.forEach((e=>{t.addElement(e)}))}addElement(e){this.elements.includes(e)||(this.getAttributes(e),this.luge.viewportobserver.add(e),e.addEventListener("viewportintersect",this.listeners.onViewportIntersect),this.elements.push(e))}removeElement(e){this.elements.includes(e)&&(this.luge.viewportobserver.remove(e),e.removeEventListener("viewportintersect",this.listeners.onViewportIntersect),this.elements.splice(this.elements.indexOf(e),1))}pageKill(e){const t=this;this.elements.forEach((e=>{t.removeElement(e)})),e()}onViewportIntersect(e){const t=e.target,s=t.luge.viewport.position,i=!!t.luge.intersection.class&&t.luge.intersection.class.split(" ");t.classList.remove("is-in","is-out","is-out-top","is-out-bottom"),"in"===s?(t.classList.add("is-in"),i&&document.documentElement.classList.add(...i)):(i&&document.documentElement.classList.remove(...i),t.classList.add("is-out","above"===s?"is-out-top":"is-out-bottom"))}}class m extends a{constructor(e){super("mouse"),this.luge=e,this.elements=[],this.mouse={x:window.mouseX,y:window.mouseY},window.mouseSpeed=0}init(){super.init(),this.luge.lifecycle.add("pageInit",this.pageInit.bind(this)),this.luge.lifecycle.add("pageKill",this.pageKill.bind(this)),this.luge.ticker.add(this.tick,this),this.getMouseMovement(),this.bindEvents()}setAttributes(){this.pluginAttributes={root:String,inertia:[String,this.luge._settings.mouse.inertia]}}getAttributes(e){const t=super.getAttributes(e);if(t.inertia){const e=t.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);t.inertia=e?Number(e[1])+(Number(e[2])-Number(e[1]))*Math.random():Number(t.inertia),t.inertia=Math.max(Math.min(t.inertia,.99),0)}return t}bindEvents(){this.luge.emitter.on("update",this.updateHandler,this)}updateHandler(){this.addElements()}pageInit(e){this.addElements(),e()}addElements(){const e=document.querySelectorAll("[data-lg-mouse]"),t=this;e.forEach((e=>{t.addElement(e)}))}addElement(e){this.elements.includes(e)||(this.getAttributes(e),this.luge.mouseobserver.add(e),e.luge.mouse.smoothX=0,e.luge.mouse.smoothY=0,e.luge.mouse.smoothProgressX=0,e.luge.mouse.smoothProgressY=0,this.elements.push(e))}removeElement(e){this.elements.includes(e)&&this.elements.splice(this.elements.indexOf(e),1)}pageKill(e){const t=this;this.elements.forEach((e=>{t.removeElement(e)})),e()}getMouseMovement(){const e=this.mouse.x-window.mouseX,t=this.mouse.y-window.mouseY,s=Math.hypot(e,t);if(window.mouseSpeed+=.5*(s-window.mouseSpeed),window.mouseSpeed<.001&&(window.mouseSpeed=0),s>1){const s=Math.atan2(t,e)*(180/Math.PI)+180;window.mouseAngle=s,window.mouseDirection=s>=45&&s<135?"down":s>=135&&s<225?"left":s>=225&&s<315?"up":"right"}this.mouse={x:window.mouseX,y:window.mouseY},setTimeout(this.getMouseMovement.bind(this),20)}tick(){this.elements.forEach((e=>{const t=e.luge.mouse;if(t.x)if(t.inertia){t.smoothX+=(t.x-t.smoothX)*t.inertia,t.smoothY+=(t.y-t.smoothY)*t.inertia,t.smoothProgressX+=(t.progressX-t.smoothProgressX)*t.inertia,t.smoothProgressY+=(t.progressY-t.smoothProgressY)*t.inertia,e.style.setProperty("--mouse-x",t.smoothX),e.style.setProperty("--mouse-y",t.smoothY),e.style.setProperty("--mouse-progress-x",t.smoothProgressX),e.style.setProperty("--mouse-progress-y",t.smoothProgressY);const s=Math.round(1e3*(t.x-t.smoothX))/1e3,i=Math.round(1e3*(t.y-t.smoothY))/1e3;e.style.setProperty("--abs-diff-x",Math.abs(s)),e.style.setProperty("--diff-x",s),e.style.setProperty("--abs-diff-y",Math.abs(i)),e.style.setProperty("--diff-y",i)}else e.style.setProperty("--mouse-x",t.x),e.style.setProperty("--mouse-y",t.y),e.style.setProperty("--mouse-progress-x",t.progressX),e.style.setProperty("--mouse-progress-y",t.progressY)}))}}class p extends a{constructor(e){super("parallax"),this.luge=e,this.elements=[],this.onScrollProgress=this.onScrollProgress.bind(this)}init(){super.init(),this.luge.lifecycle.add("pageInit",this.pageInit.bind(this),30),this.luge.lifecycle.add("pageKill",this.pageKill.bind(this)),this.luge.ticker.add(this.tick,this),this.bindEvents()}setAttributes(){this.pluginAttributes={root:String,disable:String,amplitude:[String,1],anchor:String,inertia:[String,this.luge._settings.parallax.inertia]}}getAttributes(e){const t=super.getAttributes(e);if(t.amplitude){const e=t.amplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);t.amplitude=e?Number(e[1])+(Number(e[2])-Number(e[1]))*Math.random():Number(t.amplitude)}return t}bindEvents(){this.luge.emitter.on("update",this.updateHandler,this)}updateHandler(){this.addElements()}pageInit(e){this.addElements(),e()}pageKill(e){const t=this;this.elements.forEach((e=>{t.removeElement(e)})),e()}addElements(){document.querySelectorAll("[data-lg-parallax]").forEach((e=>{const t=this.getAttributes(e).disable;let s=!0;const i=(window.luge.browser||{}).is;t&&i&&("desktop"===t&&i("desktop")||"handheld"===t&&!i("desktop")||"mobile"===t&&i("mobile")||"tablet"===t&&i("tablet"))&&(s=!1),s&&this.addElement(e)}))}addElement(e){this.elements.includes(e)||(this.luge.scrollobserver.add(e),"child"===e.luge.parallax.root&&(e.style.overflow="hidden",e.luge.parallax.child=e.firstElementChild),e.luge.parallax.movement=0,e.luge.parallax.smoothMovement=0,this.elements.push(e),this.luge.ticker.nextTick((()=>{e.addEventListener("scrollprogress",this.onScrollProgress),this.moveElement(e)})))}removeElement(e){e.removeEventListener("scrollprogress",this.onScrollProgress),this.elements.includes(e)&&this.elements.splice(this.elements.indexOf(e),1)}onScrollProgress(e){this.moveElement(e.target)}moveElement(e){let t=0;t=e.scrollStart<0?e.scrollProgress:1-2*e.scrollProgress,"bottom"===e.luge.parallax.anchor?t+=1:"top"===e.luge.parallax.anchor&&(t-=1),e.luge.parallax.movement="child"===e.luge.parallax.root?5*e.luge.parallax.amplitude*t:e.clientHeight*t*e.luge.parallax.amplitude/2}tick(){this.elements.forEach((e=>{e.luge.parallax.smoothMovement+=(e.luge.parallax.movement-e.luge.parallax.smoothMovement)*e.luge.parallax.inertia,"child"===e.luge.parallax.root&&e.luge.parallax.child?e.luge.parallax.child.style.transform="translate3d(0, "+e.luge.parallax.smoothMovement+"%, 0) scale(1."+String(Math.abs(e.luge.parallax.amplitude)).replace(".","")+")":e.style.transform="translate3d(0, "+e.luge.parallax.smoothMovement+"px, 0)"}))}}var v=new class{constructor(){this.elements=[],l.add("siteInit",this.init.bind(this),20)}init(e){this.createObserver(),e()}createObserver(){this.observer=new IntersectionObserver(this.intersectionCallback.bind(this),{threshold:[r.settings.intersection.threshold]})}intersectionCallback(e){e.forEach((e=>{const t=e.target;let s="in";e.isIntersecting||(s=e.boundingClientRect.y<=0?"above":"under"),t.luge.viewport.position!==s&&(t.luge.viewport.position=s,t.dispatchEvent(new CustomEvent("viewportintersect")),"in"===s?t.dispatchEvent(new CustomEvent("viewportin")):(t.dispatchEvent(new CustomEvent("viewportout")),t.dispatchEvent(new CustomEvent("viewport"+s))))}))}add(e){this.observer.observe(e),(e.luge||(e.luge={}))&&(e.luge=n.mergeDeep(e.luge,{viewport:{position:"out"}}))}remove(e){this.observer.unobserve(e)}},b=new class{constructor(){this.callbacks=[],this.onceCallbacks=[],r.settings.ticker.external||(this.fps=60,this.fpsInterval=1e3/this.fps,this.lastTickTime=null,requestAnimationFrame(this._tick.bind(this)))}add(e,t){let s=!1;this.callbacks.forEach((i=>{i.cb===e&&i.context===t&&(s=!0)})),s||this.callbacks.push({cb:e,context:t})}remove(e,t){const s=this;this.callbacks.forEach(((i,n)=>{i.cb===e&&i.context===t&&delete s.callbacks[n]}))}nextTick(e,t){this.onceCallbacks.push({cb:e,context:t})}_tick(e){const t=e-this.lastTickTime;t>this.fpsInterval&&(this.tick(e),this.lastTickTime=e-t%this.fpsInterval),r.settings.ticker.external||requestAnimationFrame(this._tick.bind(this))}tick(e){const t=this;this.callbacks.forEach((t=>{t.cb.apply(t.context,[e])})),this.onceCallbacks.forEach(((s,i)=>{s.cb.apply(s.context,[e]),delete t.onceCallbacks[i]}))}},y=new class{constructor(){this.elements=[],this.elementsToBound=[],this.timeouts={scroll:null},l.add("pageKill",this.pageKill.bind(this)),l.add("pageInit",this.init.bind(this),20),b.add(this.tick,this),this.bindEvents()}bindEvents(){o.on("mouseMove",this.mouseHandler,this),o.on("resize",this.resizeHandler,this),o.on("update",this.updateHandler,this),o.on("scroll",this.scrollHandler,this)}pageKill(e){this.elements=[],this.elementsToBound=[],e()}init(e){this.getBoundingThrottle(),e()}resizeHandler(){this.getBoundingThrottle()}updateHandler(){b.nextTick((()=>{this.getBoundingThrottle()}),this)}scrollHandler(){clearTimeout(this.timeouts.scroll),this.timeouts.scroll=setTimeout(this.getBoundingThrottle.bind(this),75)}mouseHandler(){const e=this;this.elements.forEach((t=>{e.setElementPosition(t)})),window.mouseLastScrollTop=window.scrollTop}getBoundingThrottle(){this.elementsToBound=this.elements,b.nextTick(this.getBounding.bind(this))}getBounding(){this.elementsToBound.forEach((e=>{this.setElementBounding(e),this.setElementPosition(e)})),this.elementsToBound=[]}setElementBounding(e){const t=e.getAttribute("style");e.setAttribute("style","");const s=e.getBoundingClientRect(),i={anchor:{x:s.left,y:s.top+window.unifiedScrollTop},width:e.offsetWidth,height:e.offsetHeight};(e.luge||(e.luge={}))&&(e.luge=n.mergeDeep(e.luge,i)),e.setAttribute("style",t)}setElementPosition(e){if(e.luge&&e.luge.anchor){const t={x:window.mouseX-e.luge.anchor.x,y:window.mouseY-e.luge.anchor.y+window.unifiedScrollTop};t.progressX=n.clamp(t.x/e.luge.width,0,1),t.progressY=n.clamp(t.y/e.luge.height,0,1),e.luge.mouse=n.mergeDeep(e.luge.mouse,t)}}add(e){this.elements.includes(e)||(this.elementsToBound.includes(e)||this.elementsToBound.push(e),this.elements.push(e))}remove(e){this.elements.includes(e)&&this.elements.splice(this.elements.indexOf(e),1),this.elementsToBound.includes(e)&&this.elementsToBound.splice(this.elementsToBound.indexOf(e),1)}tick(){const e=this;0!=window.scrollTop-window.mouseLastScrollTop&&this.elements.forEach((t=>{e.setElementPosition(t)}))}},f=new class{constructor(){this.elements=[],this.elementsToBound=[],this.elementsToCheck=[],this.setMaxScrollTop(),l.add("pageKill",this.pageKill.bind(this)),l.add("pageInit",this.init.bind(this),20),this.bindEvents()}bindEvents(){o.on("resize",this.resizeHandler,this),o.on("scroll",this.scrollHandler,this),o.on("update",this.updateHandler,this)}pageKill(e){this.elements=[],this.elementsToBound=[],this.elementsToCheck=[],e()}init(e){this.getBoundingThrottle(),this.checkElementsThrottle(),e()}resizeHandler(){this.getBoundingThrottle(),this.checkElementsThrottle()}scrollHandler(){this.checkElementsThrottle()}updateHandler(){b.nextTick((()=>{this.getBoundingThrottle(),this.checkElementsThrottle()}),this)}setMaxScrollTop(){window.maxScrollTop=Math.max(document.body?document.body.scrollHeight:0,document.body?document.body.offsetHeight:0,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight}getBoundingThrottle(){this.setMaxScrollTop(),this.elements.forEach((e=>{this.elementsToBound.includes(e)||(e.scrollProgress=0,this.elementsToBound.push(e))})),b.nextTick(this.getBounding.bind(this))}getBounding(){this.elementsToBound.forEach((e=>{this.setElementBounding(e)})),this.elementsToBound=[]}setElementBounding(e){const t=e.getAttribute("style");e.setAttribute("style","");const s=e.getBoundingClientRect();e.scrollStart=s.top+window.unifiedScrollTop-window.innerHeight,e.scrollEnd=e.scrollStart+e.clientHeight+window.innerHeight,e.scrollEnd=Math.min(e.scrollEnd,window.maxScrollTop),e.scrollMiddle=e.scrollStart+(e.scrollEnd-e.scrollStart)/2,e.setAttribute("style",t)}checkElementsThrottle(){this.elements.forEach((e=>{this.elementsToCheck.includes(e)||this.elementsToCheck.push(e)})),b.nextTick(this.checkElements.bind(this))}checkElements(){this.elementsToCheck.forEach((e=>{this.checkElement(e)})),this.elementsToCheck=[]}checkElement(e){const t=window.unifiedScrollTop;let s="",i=0;i=e.scrollStart<0?Math.min(Math.max(t/e.scrollEnd,0),1):Math.min(Math.max((t-e.scrollStart)/(e.scrollEnd-e.scrollStart),0),1),isNaN(i)&&(i=0),s=i<=0&&e.scrollStart>0?"under":i>=1&&e.scrollEnd<window.maxScrollTop?"above":"in",e.scrollProgress=i,e.viewportPosition!==s?(e.viewportPosition=s,e.dispatchEvent(new CustomEvent("viewportintersect")),e.dispatchEvent(new CustomEvent("viewport"+s)),"in"!==s&&e.dispatchEvent(new CustomEvent("viewportout")),e.dispatchEvent(new CustomEvent("scrollprogress"))):i>0&&i<1&&e.dispatchEvent(new CustomEvent("scrollprogress"))}add(e){this.elements.includes(e)||(e.scrollProgress=0,this.elementsToBound.includes(e)||(this.elementsToBound.push(e),this.elementsToCheck.push(e)),this.elements.push(e))}remove(e){this.elements.includes(e)&&this.elements.splice(this.elements.indexOf(e),1),this.elementsToBound.includes(e)&&this.elementsToBound.splice(this.elementsToBound.indexOf(e),1),this.elementsToCheck.includes(e)&&this.elementsToCheck.splice(this.elementsToCheck.indexOf(e),1)}},w=class{constructor(){this.plugins={},this.emitter={emit:o.emit.bind(o),off:o.off.bind(o),on:o.on.bind(o),once:o.once.bind(o)},this.viewportobserver={add:v.add.bind(v),remove:v.remove.bind(v)},this.lifecycle={add:l.add.bind(l),refresh:l.cycle.bind(l,"refresh"),remove:l.remove.bind(l),debug:l.enableDebug.bind(l),_cycle:l.cycle.bind(l)},this.mouseobserver={add:y.add.bind(y),remove:y.remove.bind(y)},this.scrollobserver={add:f.add.bind(f),remove:f.remove.bind(f)},this.ticker={add:b.add.bind(b),nextTick:b.nextTick.bind(b),remove:b.remove.bind(b),tick:b.tick.bind(b)},this.settings=r.setSettings.bind(r)}init(){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",l.cycle("load"),{once:!0}):this.ticker.nextTick((()=>{l.cycle("load")}),null)}addPlugin(e,t){this.plugins[e]=new t(this)}get _settings(){return r.settings}}}}]);