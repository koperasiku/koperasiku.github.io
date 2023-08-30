"use strict";(self["webpackChunkloan_cms_v2"]=self["webpackChunkloan_cms_v2"]||[]).push([[515],{196:function(t,e,a){a.r(e),a.d(e,{default:function(){return N}});var n=a(1828),i=a(3385),s=a(5223),l=a(4944),o=a(7652),r=a(5057),u=a(864),c=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4"},[e(s.EB,[e("div",{staticClass:"text-h5 font-weight-light"},[t._v(" Funding Batch ")])]),e(i.Z,{staticClass:"ma-2"},[e(s.EB,[e(u.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",width:"100px"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(o.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.data.data,"loading-text":"Loading... Please wait",loading:t.data.loading,search:t.search},scopedSlots:t._u([{key:"item.ApprovalDate",fn:function({item:e}){return[t._v(" "+t._s(e.ApprovalDate?t.toDateTime(e.ApprovalDate):"")+" ")]}},{key:"item.nominal",fn:function({item:e}){return[t._v(" "+t._s(t.toRupiahString(e.nominal>0?e.nominal:"0"))+" ")]}},{key:"item.status",fn:function({item:a}){return[e(l.Z,{staticClass:"ma-2",attrs:{small:"",color:t.getColorStatus(a.status),"text-color":"white"}},[t._v(" "+t._s(a.status)+" ")])]}},{key:"item.view",fn:function({item:a}){return[e(n.Z,{attrs:{icon:"",color:"success"},on:{click:function(e){return t.$router.push({name:"FundingShow",params:{id:a.pvcode}})}}},[e(r.Z,[t._v(" mdi-eye ")])],1)]}},{key:"item.action",fn:function({item:a}){return[e("div",[e(n.Z,{staticClass:"warning mr-2",attrs:{depressed:"",elevation:"2"},on:{click:function(e){return t.download(a.pvcode)}}},[e(r.Z,{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-download ")]),t._v(" Download ")],1),a.NextApproval===t.auth.user.Jabatan?e(n.Z,{attrs:{depressed:"",elevation:"2",color:"primary"},on:{click:function(e){return t.formApproval(a)}}},[t._v(" Approval ")]):t._e()],1)]}}],null,!0)})],1),e("FormApprovalVue")],1)}),h=[],p=a(629),d=a(3029),g=a(6879),m=a(2021),v=m.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return m.y.options.computed.classes.call(this)}},methods:{genData:m.y.options.methods.genData}}),f=a(8914),y=a(4987),b=(0,y.Z)(v,f.Z).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...v.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const t=this.setTextColor(this.color,{...v.options.methods.genData.call(this)});return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),x=a(9789),S=a(4192),C=a(271),_=a(2469),w=a(5234),A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(x.Z,{attrs:{width:"100%","max-width":"1000"},model:{value:t.state.dialog,callback:function(e){t.$set(t.state,"dialog",e)},expression:"state.dialog"}},[e(i.Z,[e(s.EB,{staticClass:"text-h5 grey lighten-2"},[t._v(" Funding Batch Approval "),e(n.Z,{staticClass:"ml-auto",attrs:{color:"primary",text:""},on:{click:function(e){t.state.dialog=!1}}},[t._v(" Close ")])],1),e(s.ZB,{staticClass:"pa-4"},[e(_.Z,{attrs:{src:a(2321),contain:"",width:"150px"}}),e("br"),e("br"),e(u.Z,{attrs:{disabled:"LoanAdmin"!==t.state.detail.NextApproval,type:"text",label:"Payment Voucher Code",required:"",outlined:""},model:{value:t.state.detail.pvcode_m,callback:function(e){t.$set(t.state.detail,"pvcode_m",e)},expression:"state.detail.pvcode_m"}}),e("br"),t.state.detail.doc_pv?e("iframe",{attrs:{src:t.state.detail.doc_pv,width:"100%",height:"500px"}}):t._e(),"LoanAdmin"===t.state.detail.NextApproval?e(C.Z,{staticClass:"mt-2",attrs:{label:"Upload Paymentvoucher (.jpg / .png / .pdf)",accept:"application/pdf, image/*","show-size":"",outlined:""},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}):t._e()],1),e(S.Z),e("div",[e(w.Z),e(b,{staticClass:"ml-auto mr-auto text-center justify-center",attrs:{group:""}},[e(n.Z,{staticClass:"warning",attrs:{depressed:"",elevation:"2"},on:{click:function(e){return t.proses("RJT")}}},[t._v(" Reject ")]),e(n.Z,{staticClass:"primary",attrs:{depressed:"",elevation:"2"},on:{click:function(e){return t.proses("APV")}}},[t._v(" Approval ")])],1)],1)],1)],1)],1)},k=[],Z={data(){return{dialog:!1,image:null}},computed:{...(0,p.rn)("fundingbatch",{state:t=>t.formApproval}),...(0,p.rn)("auth",{auth:t=>t})},watch:{image:function(t,e){t&&this.createBase64Image(t)}},methods:{...(0,p.nv)("fundingbatch",["proses"]),checkFile(t){if(t){const e=t.split(".");return"pdf"===e[4]}return!0},createBase64Image:function(t){const e=new FileReader;e.onload=t=>{this.state.detail.doc_pv=t.target.result},e.readAsDataURL(t)}}},V=Z,$=a(1001),B=(0,$.Z)(V,A,k,!1,null,null,null),D=B.exports,z={name:"FundingBatch",components:{FormApprovalVue:D},data:()=>({search:"",headers:[{text:"No. Payment Voucher",align:"start",sortable:!1,value:"pvcode"},{text:"Approval Date",sortable:!1,value:"ApprovalDate"},{text:"Jumlah Transaksi",sortable:!1,value:"jumlahtransaksi",align:"center"},{text:"Nominal",sortable:!1,value:"nominal",align:"right"},{text:"Funding",sortable:!1,value:"ApprovalStatus",align:"center"},{text:"Next Approval",sortable:!1,value:"NextApproval"},{text:"Status",sortable:!1,value:"status",align:"center"},{text:"View",sortable:!1,value:"view",align:"center"},{text:"Action",sortable:!1,value:"action",align:"center",width:"320px"}]}),mounted:function(){d.Z.dispatch("fundingbatch/reqData")},computed:{...(0,p.rn)("fundingbatch",{data:t=>t}),...(0,p.rn)("auth",{auth:t=>t})},methods:{...(0,p.nv)("fundingbatch",["show","download","formApproval"]),toRupiahString(t){return g.Z.toRupiahString(t)},toDateTime(t){return g.Z.toDateTime(t)},getColorStatus(t){return"NEW"===t?"success":"CNCL"===t||"RJT"===t?"red":"APV"===t?"primary":"orange"}}},T=z,I=(0,$.Z)(T,c,h,!1,null,null,null),N=I.exports},271:function(t,e,a){a.d(e,{Z:function(){return u}});a(7658);var n=a(864),i=n.Z,s=a(4944),l=a(1050),o=a(6596),r=a(2653),u=i.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,l.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...i.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,l.XE)(e,1024===this.base))},internalArrayValue(){return(0,l.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:a=0}=t,n=this.truncateText(e);return this.showSize?`${n} (${(0,l.XE)(a,1024===this.base)})`:n})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,o.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,l.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(s.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=i.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,r.y0)(t.data.style,{display:"none"})),t},genInput(){const t=i.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=i.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},2321:function(t,e,a){t.exports=a.p+"img/bfi.3e015418.png"}}]);
//# sourceMappingURL=515.abdbfd84.js.map