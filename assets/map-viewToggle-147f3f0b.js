import{n as a}from"./index-2766203e.js";const c={name:"blockCenter",mixins:[],props:{view:{type:Object}},data(){return{buttonConfig:{subType:"B",height:46,backgroundOpacity:1}}},computed:{},methods:{itemClick(i){this.$emit("changeView",i)}},mounted(){}};var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"change-view"},e._l(e.view.data,function(n,l){return t("div",{staticClass:"tabs-btn-wrap",on:{click:function(_){return e.itemClick(n)}}},[t("techButtonB1",{class:n.label==e.view.current?"active":"deactive",attrs:{config:e.buttonConfig}},[e._v(e._s(n.title))])],1)}),0)},o=[],r=a(c,s,o,!1,null,null,null,null);const v=r.exports;export{v as default};
