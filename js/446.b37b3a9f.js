"use strict";(self["webpackChunkloan_cms_v2"]=self["webpackChunkloan_cms_v2"]||[]).push([[446],{1343:function(t,e,i){i.r(e),i.d(e,{default:function(){return vt}});var s=i(1096),r=(i(7658),i(5838));function o(t,e,i){const{self:s=!1}=e.modifiers||{},r=e.value,o="object"===typeof r&&r.options||{passive:!0},n="function"===typeof r||"handleEvent"in r?r:r.handler,a=s?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",n,o),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:n,options:o,target:s?void 0:a})}function n(t,e,i){var s;if(!(null===(s=t._onScroll)||void 0===s?void 0:s[i.context._uid]))return;const{handler:r,options:o,target:n=t}=t._onScroll[i.context._uid];n.removeEventListener("scroll",r,o),delete t._onScroll[i.context._uid]}const a={inserted:o,unbind:n};var l=a,h=i(8386),c=i(4987);function d(t,e=[]){return(0,c.Z)((0,h.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var p=i(6596),u=i(144),v=u.ZP.extend({name:"scrollable",directives:{Scroll:a},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,p.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),m=i(8574),g=i(6470),f=i(1050);const S=(0,c.Z)(r.Z,v,m.Z,g.Z,d("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var b=S.extend({name:"v-app-bar",directives:{Scroll:l},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return v.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return r.Z.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=r.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:r.Z.options.computed.isCollapsed.call(this)},isProminent(){return r.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...r.Z.options.computed.styles.call(this),fontSize:(0,f.kb)(this.computedFontSize,"rem"),marginTop:(0,f.kb)(this.computedMarginTop),transform:`translateY(${(0,f.kb)(this.computedTransform)})`,left:(0,f.kb)(this.computedLeft),right:(0,f.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=r.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=r.Z.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),y=i(1012),w=i(1828),Z=u.ZP.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:r}){const o=Object.assign(r,{staticClass:`v-app-bar__nav-icon ${r.staticClass||""}`.trim(),props:{...s,icon:!0},on:i}),n=e().default;return t(w.Z,o,n||[t(y.Z,"$menu")])}}),A=i(4192),_=i(5057),T=i(2469),$=i(248),k=i(1908),x=i(7221),O=i(3551),M=i(92),B=(i(541),i(8914)),C=i(2524),R=i(4587),H=i(4875),P=i(3276),V=i(9042),L=i(9495),E=i(3134);const U=(0,c.Z)(d("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),B.Z,C.Z,R.Z,H.Z,m.Z,P.Z);var z=U.extend({name:"v-navigation-drawer",directives:{ClickOutside:V.Z,Resize:L.Z,Touch:E.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&R.Z.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,f.kb)(this.height),top:this.isBottom?"auto":(0,f.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,f.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,f.kb)(this.computedTransform,"%")})`,width:(0,f.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(T.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,f.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,f.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),N=i(9868),W=i(5234),j=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{id:"inspire"}},[e(z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(N.Z,{staticClass:"pt-2 pb-2 justify-center",attrs:{color:"#4e73df",justify:"center",fixed:""}},[e("center",[e(T.Z,{attrs:{flat:"",src:i(2321),width:"50%"}})],1)],1),e(A.Z),e("sidebar")],1),e(b,{attrs:{app:""}},[e(Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(W.Z),e(w.Z,{attrs:{icon:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[e(_.Z,[t._v("mdi-weather-sunny")])],1),e(M.Z,{attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(w.Z,t._g(t._b({attrs:{text:""}},"v-btn",s,!1),i),[t._v(" "+t._s(t.user.name)+" "),e(_.Z,[t._v("mdi-account")])],1)]}}])},[e("br"),e("br"),e($.Z,t._l(t.items,(function(i,s){return e(k.Z,{key:s,attrs:{small:"",link:"",to:i.url}},[e(x.V9,[t._v(t._s(i.title))])],1)})),1)],1)],1),e(O.Z,[e("router-view")],1),e("Loader")],1)},I=[],X=i(3385),D=i(1161),q=function(){var t=this,e=t._self._c;return e(X.Z,{attrs:{width:"100%"}},[e($.Z,{attrs:{dense:"",color:"#4e73df"}},t._l(t.sidebar,(function(i){return e("div",{key:i.id},[i.child.length>0?e(D.Z,{attrs:{value:!1},scopedSlots:t._u([i.child.length>0?{key:"activator",fn:function(){return[e(x.km,{class:i.child.length>0?"mt-2 mb-2 label-menu":"label-menu",attrs:{to:i.url}},[t._v(t._s(i.nama))])]},proxy:!0}:null],null,!0)},[i.child.length>0?e("div",t._l(i.child,(function(i,s){return e(k.Z,{key:s,attrs:{link:"",to:i.url}},[e(x.V9,{staticClass:"mt-2 mb-2 pl-4 label-menu"},[t._v(t._s(i.nama))])],1)})),1):t._e()]):e(k.Z,{attrs:{value:!1,link:"",to:i.url}},[e(x.V9,{staticClass:"mt-5 mb-5 label-menu"},[t._v(t._s(i.nama))])],1)],1)})),0)],1)},Y=[],F=i(629),K=i(3029),G={name:"SidebarNav",data:()=>({items:[]}),mounted:function(){K.Z.dispatch("sidebar/reqSidebar")},computed:{...(0,F.rn)("sidebar",{sidebar:t=>t.sidebar})}},J=G,Q=i(1001),tt=(0,Q.Z)(J,q,Y,!1,null,null,null),et=tt.exports,it=i(5223),st=i(9789),rt=i(1302),ot=function(){var t=this,e=t._self._c;return e(st.Z,{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[e(X.Z,{attrs:{color:"primary",dark:""}},[e(it.ZB,[t._v(" Mohon menunggu... "),e(rt.Z,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)},nt=[],at={name:"LoadingPage",data(){return{}},computed:{...(0,F.rn)("loadings",{loading:t=>t.loading})}},lt=at,ht=(0,Q.Z)(lt,ot,nt,!1,null,null,null),ct=ht.exports,dt={components:{Sidebar:et,Loader:ct},name:"AdminLayout",data:()=>({cards:["Today","Yesterday"],drawer:null,items:[{title:"Profil",url:"/Profile"},{title:"Logout",url:"/logout"}]}),computed:{...(0,F.rn)("auth",{user:t=>t.user})}},pt=dt,ut=(0,Q.Z)(pt,j,I,!1,null,null,null),vt=ut.exports},1096:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(3276),r=i(4987),o=(0,r.Z)(s.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},3551:function(t,e,i){i.d(e,{Z:function(){return r}});var s=i(8574),r=s.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:s,insetFooter:r,bottom:o,left:n}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${i}px`,paddingBottom:`${s+r+o}px`,paddingLeft:`${n}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},2321:function(t,e,i){t.exports=i.p+"img/bfi.3e015418.png"}}]);
//# sourceMappingURL=446.b37b3a9f.js.map