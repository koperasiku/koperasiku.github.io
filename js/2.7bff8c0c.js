"use strict";(self["webpackChunkloan_cms_v2"]=self["webpackChunkloan_cms_v2"]||[]).push([[2],{9002:function(t,a,s){s.r(a),s.d(a,{default:function(){return b}});var e=s(1828),r=s(5223),i=s(4437),o=s(3974),n=s(6904),l=s(5057),d=s(2469),u=s(5294),c=s(864),h=function(){var t=this,a=t._self._c;return a(o.Z,{staticClass:"auth",attrs:{"fill-height":"",fluid:""}},[a(u.Z,{attrs:{justify:"center"}},[a(i.Z,{attrs:{cols:"12",sm:"8",md:"3",lg:"3"}},[a(n.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(a){return a.preventDefault(),t.login()}},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[a(r.ZB,{attrs:{"align-center":""}},[a(u.Z,{attrs:{justify:"center"}},[a(i.Z,[a(d.Z,{staticClass:"ml-auto mr-auto text-center justify-center",attrs:{src:s(2321),contain:"",width:"250px"}})],1)],1),a("br"),a(c.Z,{attrs:{"mt-6":"",dark:"",type:"email",rules:t.emailRules,label:"E-Mail",required:"",dense:"",outlined:"",shaped:""},model:{value:t.state.form.email,callback:function(a){t.$set(t.state.form,"email",a)},expression:"state.form.email"}}),a(c.Z,{attrs:{dark:"",rules:t.passwordRules,required:"",label:"Password","append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",dense:"",outlined:""},on:{"click:append":function(a){t.show=!t.show}},model:{value:t.state.form.password,callback:function(a){t.$set(t.state.form,"password",a)},expression:"state.form.password"}}),t.state?a(u.Z,{attrs:{"no-gutters":""}},[a(i.Z,{staticClass:"bg-white",attrs:{cols:"12"}},[a(d.Z,{staticClass:"mt-0",staticStyle:{cursor:"pointer"},attrs:{loading:!0,disabled:!0,src:t.state.captcha.img,height:"37px"},on:{click:function(a){return t.reqCaptcha()}}})],1),a(i.Z,{attrs:{cols:"12"}},[a(c.Z,{staticClass:"mt-6",attrs:{label:"Captcha",dark:"",rules:t.captchaRules,required:"",dense:"",outlined:""},model:{value:t.state.form.captcha,callback:function(a){t.$set(t.state.form,"captcha",a)},expression:"state.form.captcha"}})],1)],1):t._e(),a(e.Z,{attrs:{block:"",color:"primary",type:"submit",loading:t.loading}},[t._v(" M A S U K "),a(l.Z,{attrs:{right:""}},[t._v("mdi-login")])],1),a(e.Z,{staticClass:"mt-4",attrs:{to:"/Forgot-password",block:"",color:"white",text:""}},[t._v(" Lupa Password ")])],1)],1)],1)],1)],1)},p=[],f=s(629),m=s(3029),g={name:"LoginView",data(){return{valid:!0,show:!1,emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"],passwordRules:[t=>!!t||"Password is required",t=>t.length>5||"Password min 6 characters"],captchaRules:[t=>!!t]}},computed:{...(0,f.rn)("auth",{state:t=>t,loading:t=>t.loading})},mounted:function(){m.Z.dispatch("auth/reqCaptcha")},methods:{validate(){this.$refs.form.validate()},...(0,f.nv)("auth",["login","reqCaptcha"])}},v=g,w=s(1001),Z=(0,w.Z)(v,h,p,!1,null,null,null),b=Z.exports},6904:function(t,a,s){s(7658);var e=s(4987),r=s(4609),i=s(380);a["Z"]=(0,e.Z)(r.Z,(0,i.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput(t){const a=t=>t.$watch("hasError",(a=>{this.$set(this.errorBag,t._uid,a)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(e=>{e&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=a(t)))})):s.valid=a(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const a=this.inputs.find((a=>a._uid===t._uid));if(!a)return;const s=this.watchers.find((t=>t._uid===a._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==a._uid)),this.inputs=this.inputs.filter((t=>t._uid!==a._uid)),this.$delete(this.errorBag,a._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},3974:function(t,a,s){s(9027),s(1884);var e=s(2071),r=s(2653);a["Z"]=(0,e.Z)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:s,children:e}){let i;const{attrs:o}=s;return o&&(s.attrs={},i=Object.keys(o).filter((t=>{if("slot"===t)return!1;const a=o[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),e)}})},2071:function(t,a,s){s.d(a,{Z:function(){return r}});var e=s(144);function r(t){return e.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:s,data:e,children:r}){e.staticClass=`${t} ${e.staticClass||""}`.trim();const{attrs:i}=e;if(i){e.attrs={};const t=Object.keys(i).filter((t=>{if("slot"===t)return!1;const a=i[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a}));t.length&&(e.staticClass+=` ${t.join(" ")}`)}return s.id&&(e.domProps=e.domProps||{},e.domProps.id=s.id),a(s.tag,e,r)}})}},2321:function(t,a,s){t.exports=s.p+"img/bfi.3e015418.png"}}]);
//# sourceMappingURL=2.7bff8c0c.js.map
