import{n as i,_ as e}from"./index-2766203e.js";const d={mixins:[],name:"dashboard4X2Combin",components:{dashboardA:()=>e(()=>import("./layoutCombin-df44bc95.js"),["assets/layoutCombin-df44bc95.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layoutCombin-79221d69.css"]),dashboardB:()=>e(()=>import("./layoutCombin-9d8c14bf.js"),["assets/layoutCombin-9d8c14bf.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layoutCombin-5a1d3d4b.css"]),dashboardC:()=>e(()=>import("./layoutCombin-8bd89f58.js"),["assets/layoutCombin-8bd89f58.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layoutCombin-9387100e.css"]),dashboardD:()=>e(()=>import("./layoutCombin-e330c981.js"),["assets/layoutCombin-e330c981.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layoutCombin-8c38047b.css"]),dashboardE:()=>e(()=>import("./layoutCombin-deefda1f.js"),["assets/layoutCombin-deefda1f.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layoutCombin-99741d00.css"])},data(){return{reload:!1,adptivePanelConfig:{adaptiveType:"proportional",backgroundFillAll:!0,width:7680,height:2160,chartCount:24},systemTitleConfig:{subType:"B"},pcMode:!0,chartCount:23,boxStyle:{color1:$c.fade($c.bk,.3),color2:$c.blm7,color3:$c.bll1,BGColor:$c.fade($c.bll9,.8)},state:{hover:!1,init:0,dashboard:[{id:0,name:"boardA",component:"dashboardA"},{id:1,name:"boardB",component:"dashboardB"},{id:2,name:"boardC",component:"dashboardC"},{id:3,name:"boardD",component:"dashboardD"},{id:4,name:"boardE",component:"dashboardE"}]}}},watch:{"$tState.deviceType"(a){a=="mobile"?this.pcMode=!1:this.pcMode=!0},"globalConfig.language"(a){this.dragInitLang()}},computed:{},methods:{dragInitLang(){this.state.dashboard.forEach((a,t)=>{a.name=this.$t(`common.dragTool.board${t+1}`)})}},beforeMount(){},mounted(){this.dragInitLang();const{tipState:a,$notify:t,$timer:o}=this;this.deviceType!="mobile"?a&&(o("notify1",()=>{t({title:this.$t("tip.title.performance"),message:this.$t("tip.desc.dashboardCombin1"),duration:0})},3e3),o("notify2",()=>{t({title:this.$t("tip.title.common"),message:this.$t("tip.desc.dashboardCombin2"),duration:0})},5e3)):this.pcMode=!1},beforeDestroy(){const{$notify:a,$timer:t}=this;a.closeAll(),t("notify2")}};var n=function(){var t=this,o=t._self._c;return o("div",{staticClass:"dashboard4X2Combin"},[t.pcMode?[t.reload?t._e():o("dragTool",{attrs:{state:t.state}}),o("adaptivePanel",{attrs:{config:t.adptivePanelConfig}},[o("systemTitleA2",{class:`${t.state.hover?"hide":"show"}`,attrs:{config:t.systemTitleConfig}}),o("div",{staticClass:"dashboard-wrapper"},t._l(t.state.dashboard,function(s){return o("div",{staticClass:"dashboard-item"},[o("div",{class:`dashboard-name ${t.state.hover?"show":"hide"}`},[o("i",[t._v(t._s(s.name))])]),t.state.init>=s.id?o(s.component,{tag:"component",attrs:{"data-name":s.component,state:t.state}}):t._e()],1)}),0)],1)]:[t._m(0)]],2)},r=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"mobileMode-alert"},[t("p",{staticClass:"title"},[a._v("4x2组合屏 提示")]),t("p",[a._v("检测到您当前处于移动端模式查看，4x2组合屏数据量庞大，通常移动设备的性能有限，无法支撑本功能的展示。")]),t("p",[a._v("请移步到PC端访问。")])])}],l=i(d,n,r,!1,null,null,null,null);const _=l.exports;export{_ as default};