"use strict";(self["webpackChunkloan_cms_v2"]=self["webpackChunkloan_cms_v2"]||[]).push([[170],{1568:function(t,e,a){a.d(e,{Z:function(){return v}});var i=a(1828),s=a(3385),n=a(9789),r=a(4192),l=a(2469),o=a(5234),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(n.Z,{attrs:{width:"100%","max-width":"550"},model:{value:t.state.dialog,callback:function(e){t.$set(t.state,"dialog",e)},expression:"state.dialog"}},[e(s.Z,[t.checkFile(t.state.file)&&t.state.file?e("iframe",{attrs:{width:"100%",height:"500px",src:t.state.file}}):e(l.Z,{attrs:{width:"100%",height:"100%",src:t.state.file}}),e(r.Z),e("div",[e(o.Z),e(i.Z,{attrs:{color:"primary",text:""},on:{click:function(e){t.state.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},c=[],u=a(629),m={data(){return{dialog:!1}},computed:{...(0,u.rn)("modalFile",{state:t=>t})},methods:{...(0,u.nv)("modalFile",["simpan"]),checkFile(t){if(t){const e=t.split(".");return"pdf"===e[4]}return!0}}},h=m,p=a(1001),g=(0,p.Z)(h,d,c,!1,null,null,null),v=g.exports},3170:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var i=a(1828),s=a(3385),n=a(5223),r=a(4944),l=a(7652),o=a(864),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4"},[e(n.EB,[e("div",{staticClass:"text-h5 font-weight-light"},[t._v(" Approval ")])]),e(s.Z,{staticClass:"pa-2 ma-2"},[e(n.EB,[e(o.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",width:"100px"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(l.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.data.data,"loading-text":"Loading... Please wait",loading:t.data.loading,search:t.search},scopedSlots:t._u([{key:"item.index",fn:function({item:e}){return[t._v(" "+t._s(t.data.data.indexOf(e)+1)+". ")]}},{key:"item.SubmitDate",fn:function({item:e}){return[t._v(" "+t._s(t.toDateTime(e.SubmitDate))+" ")]}},{key:"item.firstname",fn:function({item:e}){return[t._v(" "+t._s(e.firstname)+" "+t._s(e.lastname)+" ")]}},{key:"item.DSR",fn:function({item:e}){return[t._v(" "+t._s(e.DSR?"Ya":"Tidak")+" ")]}},{key:"item.SP",fn:function({item:e}){return[t._v(" "+t._s(e.SP?"Ya":"Tidak")+" ")]}},{key:"item.LoanAmount",fn:function({item:e}){return[t._v(" "+t._s(t.toRupiahString(e.LoanAmount>0?e.LoanAmount:"0"))+" ")]}},{key:"item.Angsuran",fn:function({item:e}){return[t._v(" "+t._s(t.toRupiahString(e.Angsuran>0?e.Angsuran:"0"))+" ")]}},{key:"item.TotalPencairan",fn:function({item:e}){return[t._v(" "+t._s(t.toRupiahString(e.TotalPencairan>0?e.TotalPencairan:"0"))+" ")]}},{key:"item.ApvSekretaris",fn:function({item:a}){return[e(r.Z,{directives:[{name:"show",rawName:"v-show",value:a.ApvSekretaris,expression:"item.ApvSekretaris"}],staticClass:"ma-2",attrs:{color:"success","text-color":"white",small:""}},[t._v(" Disetujui ")])]}},{key:"item.ApvKetua",fn:function({item:a}){return[e(r.Z,{directives:[{name:"show",rawName:"v-show",value:a.ApvKetua,expression:"item.ApvKetua"}],staticClass:"ma-2",attrs:{color:"success","text-color":"white",smal:""}},[t._v(" Disetujui ")])]}},{key:"item.action",fn:function({item:a}){return[a.ApvSekretaris>0||a.ApvKetua>0?e(i.Z,{attrs:{depressed:"",elevation:"2",loading:!1,color:"secondary",disabled:""}},[t._v(" DONE ")]):e(i.Z,{attrs:{depressed:"",elevation:"2",loading:!1,color:"primary"},on:{click:function(e){return t.handledetail(a)}}},[t._v(" Approval ")])]}}],null,!0)})],1),e("detailApproval")],1)},c=[],u=a(629),m=a(4437),h=a(3974),p=a(9789),g=a(5057),v=a(2469),f=a(5294),k=a(9868),y=a(8178),_=a(5234),Z=a(5617),b=a(5838),x=a(2370),w=function(){var t=this,e=t._self._c;return e(f.Z,{attrs:{justify:"center"}},[e(p.Z,{attrs:{persistent:"",fullscreen:"",scrollable:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.state.modal,callback:function(e){t.$set(t.state,"modal",e)},expression:"state.modal"}},[e(s.Z,{attrs:{tile:""}},[e(b.Z,{attrs:{fixed:"",dark:"",color:"primary"}},[e(i.Z,{attrs:{icon:"",dark:""},on:{click:function(e){return t.dialogClose()}}},[e(g.Z,[t._v("mdi-close")])],1),e(x.qW,[t._v("Detail")]),e(_.Z),e(x.lj,[e("div",{staticClass:"mt-auto mb-auto"},[e(i.Z,{staticClass:"success mr-1",attrs:{small:"",loading:t.state.loading},on:{click:function(e){return t.postSubmit("1")}}},[e("label",{staticClass:"hidden-sm-and-down",attrs:{for:""}},[t._v("Approve")]),e("label",{staticClass:"hidden-lg-and-up",attrs:{for:""}},[t._v("APV")])]),e(i.Z,{staticClass:"error mr-1",attrs:{small:"",loading:t.state.loading},on:{click:function(e){return t.postSubmit("0")}}},[e("label",{staticClass:"hidden-sm-and-down",attrs:{for:""}},[t._v("Reject")]),e("label",{staticClass:"hidden-lg-and-up",attrs:{for:""}},[t._v("RJT")])])],1)])],1),e(n.ZB,[e(h.Z,[e(f.Z,{staticClass:"mt-10",attrs:{dense:""}},[e(m.Z,{attrs:{cols:"12",md:"4"}},[e("label",{attrs:{for:""}},[t._v("Selfi dengan KTP/ID Card "),t.state.detail.FileAttachment_KTP?e(g.Z,{attrs:{color:"warning"},on:{click:function(e){return t.setFile(t.state.detail.FileAttachment_KTP)}}},[t._v("mdi-eye")]):t._e()],1),e(k.Z,{staticClass:"pa-3",attrs:{color:"grey "+(t.theme.isDark?"darken-2":"lighten-4")}},[!t.state.loading&&t.state.detail.FileAttachment_KTP?e(v.Z,{attrs:{width:"100%","max-height":"300px",src:t.state.detail.FileAttachment_KTP}}):e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"300",type:"image"}})],1)],1),e(m.Z,{attrs:{cols:"12",md:"4"}},[e("label",{attrs:{for:""}},[t._v("Form Pengajuan "),t.state.detail.FileAttachment_DocPendukung?e(g.Z,{attrs:{color:"warning"},on:{click:function(e){return t.setFile(t.state.detail.FileAttachment_DocPendukung)}}},[t._v("mdi-eye")]):t._e()],1),e(k.Z,{staticClass:"pa-3",attrs:{color:"grey "+(t.theme.isDark?"darken-2":"lighten-4")}},[t.state.loading?e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"300",type:"image"}}):e("div",[t.checkFile(t.state.detail.FileAttachment_DocPendukung)&&t.state.detail.FileAttachment_DocPendukung?e("iframe",{attrs:{to:t.state.detail.FileAttachment_DocPendukung,width:"100%",height:"300px",src:t.state.detail.FileAttachment_DocPendukung}}):e(v.Z,{attrs:{width:"100%","max-height":"300px",src:t.state.detail.FileAttachment_DocPendukung}})],1)],1)],1),e(m.Z,{attrs:{cols:"12",md:"4"}},[e("label",{attrs:{for:""}},[t._v("Dokumen Pendukung "),t.state.detail.FileAttachment_DocPendukung2?e(g.Z,{attrs:{color:"warning"},on:{click:function(e){return t.setFile(t.state.detail.FileAttachment_DocPendukung2)}}},[t._v("mdi-eye")]):t._e()],1),e(k.Z,{staticClass:"pa-3",attrs:{color:"grey "+(t.theme.isDark?"darken-2":"lighten-4")}},[t.state.loading?e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"300",type:"image"}}):e("div",[t.checkFile(t.state.detail.FileAttachment_DocPendukung2)&&t.state.detail.FileAttachment_DocPendukung2?e("iframe",{attrs:{to:t.state.detail.FileAttachment_DocPendukung2,width:"100%",height:"300px",src:t.state.detail.FileAttachment_DocPendukung2}}):e(v.Z,{attrs:{width:"100%","max-height":"300px",src:t.state.detail.FileAttachment_DocPendukung2}})],1)],1)],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("NIK")]),e(o.Z,{attrs:{value:t.state.detail.NIK,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6",mb:"0"}},[e("label",{attrs:{for:""}},[t._v("TUJUAN")]),e(o.Z,{attrs:{value:t.state.detail.FinancePurpose,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Nama")]),e(o.Z,{attrs:{value:t.state.detail.firstname+" "+t.state.detail.lastname,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Pinjaman")]),e(o.Z,{attrs:{value:t.toRupiahString(t.state.detail.LoanAmount>0?t.state.detail.LoanAmount:"0"),filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Lokasi kerja")]),e(o.Z,{attrs:{value:t.state.detail.WorkLocation,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Rate")]),e(o.Z,{attrs:{value:t.state.detail.EffectiveRate,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Pengajuan")]),e(o.Z,{attrs:{value:t.toDateTime(t.state.detail.SubmitDate),filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Tenor")]),e(o.Z,{attrs:{value:t.state.detail.Tenor,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Dokumen Persetujuan HCBP "),t.state.detail.DokumenPersetujuan?e(g.Z,{attrs:{color:"warning"},on:{click:function(e){return t.setFile(t.state.detail.DokumenPersetujuan)}}},[t._v("mdi-eye")]):t._e()],1),e(k.Z,{staticClass:"pa-0",attrs:{color:"grey "+(t.theme.isDark?"darken-2":"lighten-4")}},[t.state.loading?e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"300",type:"image"}}):e("iframe",{attrs:{to:t.state.detail.DokumenPersetujuan,width:"100%",height:"150",src:t.state.detail.DokumenPersetujuan}})],1)],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Note HCBP")]),e(Z.Z,{attrs:{value:t.state.detail.Notes,filled:"",readonly:""}})],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Dokumen Loan Admin "),t.state.detail.LoanAdminDoc?e(g.Z,{attrs:{color:"warning"},on:{click:function(e){return t.setFile(t.state.detail.LoanAdminDoc)}}},[t._v("mdi-eye")]):t._e()],1),e(k.Z,{staticClass:"pa-0",attrs:{color:"grey "+(t.theme.isDark?"darken-2":"lighten-4")}},[t.state.loading?e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"300",type:"image"}}):e("iframe",{attrs:{to:t.state.detail.LoanAdminDoc,width:"100%",height:"150",src:t.state.detail.LoanAdminDoc}})],1)],1),e(m.Z,{attrs:{cols:"12",md:"6"}},[e("label",{attrs:{for:""}},[t._v("Note HC Recomendation")]),e(Z.Z,{attrs:{value:t.state.detail.Notes_HCRecommendation,filled:"",readonly:""}})],1)],1)],1)],1),e("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),e("viewFIle")],1)},S=[],P=a(6879),A=a(1568),D={name:"DetailApproval",data(){return{notifications:!1,sound:!0,widgets:!1,alignments:["start","center","end"]}},inject:{theme:{default:{isDark:!1}}},components:{viewFIle:A.Z},computed:{...(0,u.rn)("approval",{state:t=>t})},methods:{...(0,u.nv)("approval",["dialogClose","postSubmit"]),...(0,u.nv)("modalFile",["setFile"]),toRupiahString(t){return P.Z.toRupiahString(t)},toDateTime(t){return P.Z.toDateTime(t)},checkFile(t){if(t){const e=t.split(".");return"pdf"===e[4]}return!0}}},C=D,F=a(1001),T=(0,F.Z)(C,w,S,!1,null,null,null),L=T.exports,j=a(3029),B={name:"OrganizationPage",components:{detailApproval:L},data:()=>({search:"",headers:[{text:"Tgl Pengajuan",align:"start",sortable:!1,value:"SubmitDate",width:"130px"},{text:"Nama",value:"firstname",sortable:!1},{text:"NIK",value:"NIK",sortable:!1},{text:"Lokasi Kerja",value:"WorkLocation",sortable:!1},{text:"Jenis Pengajuan",value:"JenisPengajuan",sortable:!1},{text:"Pinjaman",value:"LoanAmount",sortable:!1,align:"right"},{text:"Angsuran",value:"Angsuran",sortable:!1,align:"right"},{text:"Total Pencairan",value:"TotalPencairan",sortable:!1,align:"right"},{text:"DSR",value:"DSR",sortable:!1},{text:"SP",value:"SP",sortable:!1},{text:"Sekretaris",value:"ApvSekretaris",sortable:!1},{text:"Ketua",value:"ApvKetua",sortable:!1},{text:"Action",value:"action",sortable:!1}]}),mounted:function(){j.Z.dispatch("approval/reqData")},computed:{...(0,u.rn)("approval",{data:t=>t})},methods:{...(0,u.nv)("approval",["edit","handledetail"]),toRupiahString(t){return P.Z.toRupiahString(t)},toDateTime(t){return P.Z.toDateStringMount(t)}}},R=B,N=(0,F.Z)(R,d,c,!1,null,null,null),I=N.exports},3974:function(t,e,a){a(9027),a(1884);var i=a(2071),s=a(2653);e["Z"]=(0,i.Z)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let n;const{attrs:r}=a;return r&&(a.attrs={},n=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,(0,s.ZP)(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},2071:function(t,e,a){a.d(e,{Z:function(){return s}});var i=a(144);function s(t){return i.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,s)}})}},8178:function(t,e,a){a.d(e,{Z:function(){return o}});a(7658);var i=a(5303),s=a(9196),n=a(3276),r=a(4987),l=a(1050),o=(0,r.Z)(i.Z,s.Z,n.Z).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),i=()=>this.genStructure(e);return Array.from({length:a}).map(i)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push((0,l.z9)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},5617:function(t,e,a){a.d(e,{Z:function(){return r}});var i=a(864),s=a(4987);const n=(0,s.Z)(i.Z);var r=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},2370:function(t,e,a){a.d(e,{lj:function(){return r},qW:function(){return n}});var i=a(5838),s=a(1050);const n=(0,s.Ji)("v-toolbar__title"),r=(0,s.Ji)("v-toolbar__items");i.Z}}]);
//# sourceMappingURL=170.50133555.js.map