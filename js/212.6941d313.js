"use strict";(self["webpackChunkloan_cms_v2"]=self["webpackChunkloan_cms_v2"]||[]).push([[212],{2657:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var i=a(1828),s=a(3385),r=a(5223),n=a(4944),c=a(7652),l=a(5057),o=a(5234),d=a(864),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4"},[e(r.EB,[e("div",{staticClass:"text-h5 font-weight-light"},[t._v(" Product ")]),e(o.Z),e(i.Z,{attrs:{to:{name:"AddProduct"},color:"primary",depressed:"",elevation:"2"}},[e(l.Z,[t._v("mdi-plus")]),t._v(" Tambah")],1)],1),e(s.Z,{staticClass:"pa-2 ma-2"},[e(r.EB,[e(d.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",width:"100px"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(c.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.data.data,"loading-text":"Loading... Please wait",loading:t.data.loading,search:t.search},scopedSlots:t._u([{key:"item.index",fn:function({item:e}){return[t._v(" "+t._s(t.data.data.indexOf(e)+1)+". ")]}},{key:"item.isactive",fn:function({item:a}){return[e(n.Z,{staticClass:"ma-2",attrs:{small:"",color:a.isactive?"success":"danger","text-color":"white"}},[t._v(" "+t._s(a.isactive?"Active":"Non Active")+" ")])]}},{key:"item.action",fn:function({item:a}){return[e(i.Z,{attrs:{icon:"",color:"warning"},on:{click:function(e){return t.edit(a)}}},[e(l.Z,{attrs:{small:""}},[t._v(" mdi-lead-pencil ")])],1),e(i.Z,{attrs:{icon:"",color:"red"},on:{click:function(e){return t.hapus(a.id)}}},[e(l.Z,{attrs:{small:""}},[t._v(" mdi-delete ")])],1),e(i.Z,{attrs:{depressed:"",small:"",color:"primary",to:`product-detail/${a.ProductID}/${a.ProductName}`}},[t._v(" RATE ")])]}}],null,!0)})],1)],1)},m=[],p=a(629),v=a(3029),h={name:"ProductPage",data:()=>({search:"",headers:[{text:"ProductID",align:"start",sortable:!1,value:"ProductID"},{text:"Product Name",value:"ProductName",sortable:!1},{text:"Description",value:"ProductDescription",sortable:!1,align:"top"},{text:"Financial Purpose",value:"FinancePurpose",sortable:!1},{text:"Status",value:"isactive",sortable:!1,align:"center"},{text:"Action",value:"action",sortable:!1,width:"170px",align:"center"}]}),mounted:function(){v.Z.dispatch("product/reqData")},computed:{...(0,p.rn)("product",{data:t=>t})},methods:{...(0,p.nv)("product",["edit","hapus","detail"])}},f=h,_=a(1001),g=(0,_.Z)(f,u,m,!1,null,null,null),x=g.exports}}]);
//# sourceMappingURL=212.6941d313.js.map