import{n,_ as o}from"./index-2766203e.js";const i={name:"SVC",mixins:[],data(){return{reload:!1,adptivePanelConfig:{adaptiveType:"advance",backgroundFillAll:!0,backgroundName:"A1",chartCount:9}}},components:{layout:()=>o(()=>import("./layout-639a48e3.js"),["assets/layout-639a48e3.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layout-8374ab57.css"])},computed:{},methods:{},watch:{$route(e,t){cl("dashboard1080 $route",e,t)},"globalConfig.language"(e){this.reload=!0,this.$nextTick(()=>{this.reload=!1})}},mounted(){const{tipState:e,$notify:t,$timer:a}=this;e&&a("notify1",()=>{t({title:this.$t("tip.title.common"),message:this.$t("tip.desc.dashboardC"),duration:3e3})},3e3)},beforeDestroy(){const{$notify:e,$timer:t}=this;e.closeAll(),t("notify1"),t("notify2"),t("notify3")}};var s=function(){var t=this,a=t._self._c;return t.reload?t._e():a("adaptivePanel",{staticClass:"dashboard1080C-SA",attrs:{config:t.adptivePanelConfig}},[a("layout")],1)},l=[],r=n(i,s,l,!1,null,null,null,null);const _=r.exports;export{_ as default};
