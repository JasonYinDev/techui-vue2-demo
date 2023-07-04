import{n,_ as t}from"./index-2766203e.js";const a={name:"dashboardA",props:["state"],mixins:[],components:{mapDrill:()=>t(()=>import("./map-simple-b0f8e81f.js"),["assets/map-simple-b0f8e81f.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/themeChart-df325d8f.js","assets/api-0c0121c1.js","assets/map-simple-bfbd375e.css"]),counter:()=>t(()=>import("./counter-7d7943da.js"),["assets/counter-7d7943da.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/counter-612ee464.css"]),echartsPieA:()=>t(()=>import("./echarts-pieC-aa695ff5.js"),["assets/echarts-pieC-aa695ff5.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),personalCondition:()=>t(()=>import("./personalCondition-442a90a5.js"),["assets/personalCondition-442a90a5.js","assets/base64Img-c31623a6.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/personalCondition-4e41c4d1.css"]),pyramid:()=>t(()=>import("./pyramid-25e50972.js"),["assets/pyramid-25e50972.js","assets/base64Img-c31623a6.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/pyramid-4d070d6d.css"]),echartsBarLineTabs:()=>t(()=>import("./echarts-barLineTabs-18795cfb.js"),["assets/echarts-barLineTabs-18795cfb.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/echarts-barLineTabs-b8bc124c.css"]),echartsBarSpc:()=>t(()=>import("./echarts-barSpc-c1af9a60.js"),["assets/echarts-barSpc-c1af9a60.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/echarts-barSpc-1beadab8.css"]),echartsLineA:()=>t(()=>import("./echarts-lineA-69ef29a9.js"),["assets/echarts-lineA-69ef29a9.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"])},data(){return{panelTitleConfig:{width:180},portlets:[{id:"p1",title:"重点指标",component:"counter",border:"aYinTechBorderB1",hideTitle:!0},{id:"p2",title:"非煤矿山情况",component:"echartsPieA",border:"aYinTechBorderB4"},{id:"p3",title:"井下人员情况",component:"personalCondition",border:"aYinTechBorderB4"},{id:"p4",title:"本月事故情况",component:"echartsLineA",border:"aYinTechBorderB4"},{id:"p5",title:"煤矿生产标准化",component:"pyramid",border:"aYinTechBorderB4"},{id:"p6",title:"联网接入情况",component:"echartsBarSpc",border:"aYinTechBorderB4"},{id:"p7",title:"执法情况",component:"echartsBarLineTabs",border:"aYinTechBorderB4",hideTitle:!0}]}},computed:{gbc(){return{opacity:.7}}},methods:{},mounted(){this.state.init++},destroyed(){}};var _=function(){var e=this,r=e._self._c;return r("div",{staticClass:"dashboardA dashboardSub",attrs:{id:"dashboardA"}},[e._l(e.portlets,function(o){return r("div",{staticClass:"portlet-wrapper"},[r(o.border,{tag:"component",attrs:{config:e.gbc}},[o.hideTitle?e._e():r("panelTitleA1",{attrs:{config:e.panelTitleConfig}},[e._v(e._s(e.$t(`dashboard4x2A.PTitle.${o.id}`)))]),r(o.component,{tag:"component"}),r("i",[e._v(e._s(o.component))])],1)],1)}),r("mapDrill",{staticClass:"dashboardCombin-map"})],2)},d=[],s=n(a,_,d,!1,null,null,null,null);const c=s.exports;export{c as default};
