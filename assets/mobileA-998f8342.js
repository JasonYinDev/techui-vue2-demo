import{n as _,_ as o}from"./index-beda625d.js";const c={mixins:[],components:{mapCounter:()=>o(()=>import("./map-counter-72186cef.js"),["assets/map-counter-72186cef.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/map-counter-dbb016c1.css"]),mapDrill:()=>o(()=>import("./map-simple-b1b7c440.js"),["assets/map-simple-b1b7c440.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/themeChart-df325d8f.js","assets/api-0c0121c1.js","assets/map-simple-553ae61c.css"]),echartsBarA:()=>o(()=>import("./echarts-BarA-1d98ea24.js"),["assets/echarts-BarA-1d98ea24.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsBarHoriz:()=>o(()=>import("./echarts-BarHoriz-b69de4e1.js"),["assets/echarts-BarHoriz-b69de4e1.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsLineA:()=>o(()=>import("./echarts-lineA-5635caa7.js"),["assets/echarts-lineA-5635caa7.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),counterGrid:()=>o(()=>import("./counter-grid-d78847a4.js"),["assets/counter-grid-d78847a4.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/counter-grid-fbdca954.css"]),echartsBarLineTabs:()=>o(()=>import("./echarts-barLineTabs-29a8c7f1.js"),["assets/echarts-barLineTabs-29a8c7f1.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/echarts-barLineTabs-b383a262.css"]),echartsLineB:()=>o(()=>import("./echarts-lineB-052211a6.js"),["assets/echarts-lineB-052211a6.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsLineC:()=>o(()=>import("./echarts-lineC-2b19fc13.js"),["assets/echarts-lineC-2b19fc13.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsPieTabs:()=>o(()=>import("./echarts-pieTabs-bb2a155d.js"),["assets/echarts-pieTabs-bb2a155d.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/echarts-pieTabs-7edde5f9.css"]),echartsBarLineA:()=>o(()=>import("./echarts-BarLineA-8877c624.js"),["assets/echarts-BarLineA-8877c624.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),scrollBoardTable:()=>o(()=>import("./scrollBoard-Table-e1b7c0fe.js"),["assets/scrollBoard-Table-e1b7c0fe.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/scrollBoard-Table-0a2caf4e.css"]),rankingBoard:()=>o(()=>import("./rankingBoardScroll-c99495df.js"),["assets/rankingBoardScroll-c99495df.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/rankingBoardScroll-75515556.css"]),echartsLineD:()=>o(()=>import("./echarts-lineD-7850e6b1.js"),["assets/echarts-lineD-7850e6b1.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsBarB:()=>o(()=>import("./echarts-BarB-57217f39.js"),["assets/echarts-BarB-57217f39.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"])},data(){return{systemTitleConfig:{scale:.65,width:502},panelTitleConfig:{width:180},tabActive:0,tabs:[{title:"海侵区",label:0},{title:"保护区A",label:1},{title:"保护区B",label:2}],areas:[{name:"top",portlets:[{id:"l0",title:"地图",component:"mapDrill",border:"aYinTechBorderB4",hideTitle:!0},{id:"l1",title:"超采区关系",component:"echartsBarA",border:"aYinTechBorderB4"},{id:"l2",title:"超采区水位 / 用水量",component:"echartsBarHoriz",border:"aYinTechBorderB4"},{id:"l3",title:"超采区行政区用水情况",component:"echartsLineA",border:"aYinTechBorderB4"},{id:"l4",title:"计数器",component:"counterGrid",border:!1},{id:"c1",title:"柱状图选项卡",component:"echartsBarLineTabs",border:"aYinTechBorderB4",hideTitle:!0},{id:"c2",title:"地下水总体趋势",component:"echartsLineB",border:"aYinTechBorderB4"}]},{name:"bottom",portlets:[{id:"r1",title:"饼图选项卡",component:"echartsPieTabs",border:"aYinTechBorderB4",hideTitle:!0},{border:"aYinTechBorderB4",charts:[{id:"r2_1",title:"海侵区面积变化情况",component:"echartsLineC",activeIn:0},{id:"r2_2",title:"区域内监测站水位A",component:"echartsLineD",activeIn:1},{id:"r2_3",title:"区域内监测站水位B",component:"echartsLineD",activeIn:2}]},{border:"aYinTechBorderB4",charts:[{id:"r3_1",title:"海侵区情况",component:"echarts-BarLineA",activeIn:0},{id:"r3_2",title:"区域内监测站埋深A",component:"echartsBarB",activeIn:1},{id:"r3_3",title:"区域内监测站埋深B",component:"echartsBarB",activeIn:2}]},{border:"aYinTechBorderB4",charts:[{id:"r4_1",title:"企业用水量超标报警",component:"scrollBoardTable",activeIn:0},{id:"r4_2",title:"日用水量排行榜A",component:"rankingBoard",activeIn:1},{id:"r4_3",title:"日用水量排行榜B",component:"rankingBoard",activeIn:2}]}]}]}},computed:{chartCounter(){return this.$tState.adaptiveConfig.chartCounter}},methods:{getConfig(a){return{title:a.title,opacity:.6}}},watch:{},mounted(){},beforeDestroy(){}};var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboardMobileA"},[e("mapCounter"),e("div",{staticClass:"area-wrap"},[t._l(t.areas,function(r){return r.name!="bottom"?e("div",{class:`area-box area-${r.name}`},t._l(r.portlets,function(i,n){return e("div",{staticClass:"portlet-wrapper"},[i.border?e(i.border,{tag:"component",attrs:{config:t.getConfig(i)}},[i.hideTitle?t._e():e("panelTitleA1",{attrs:{config:t.panelTitleConfig}},[t._v(t._s(t.$t(`dashboardC.PTitle.${i.id}`)))]),e(i.component,{tag:"component"}),e("i",[t._v(t._s(i.component))])],1):[e(i.component,{tag:"component"}),e("i",[t._v(t._s(i.component))])]],2)}),0):t._e()}),e("div",{class:"area-box area-bottom"},[e("div",{staticClass:"content-tabs"},t._l(t.tabs,function(r,i){return e("div",{staticClass:"tabs-item",class:r.label==t.tabActive?"active":"deactive",on:{click:function(n){t.tabActive=i}}},[t._v(t._s(t.$t(`dashboardC.tabs.area${i+1}`)))])}),0),t._l(t.areas[1].portlets,function(r,i){return e("div",{staticClass:"portlet-wrapper"},[e(r.border,{tag:"component",attrs:{config:t.getConfig(r)}},[r.charts?[t._l(r.charts,function(n){return n.activeIn==t.tabActive?[r.hideTitle?t._e():e("panelTitleA1",{attrs:{config:t.panelTitleConfig}},[t._v(t._s(t.$t(`dashboardC.PTitle.${n.id}`)))]),e(n.component,{tag:"component",attrs:{tabActive:t.tabActive}}),e("i",[t._v(t._s(n.activeIn==t.tabActive)+"-"+t._s(n.activeIn)+"-"+t._s(n.component))])]:t._e()})]:[r.hideTitle?t._e():e("panelTitleA1",{attrs:{config:t.panelTitleConfig}},[t._v(t._s(t.$t(`dashboardC.PTitle.${r.id}`)))]),e(r.component,{tag:"component",attrs:{tabActive:t.tabActive}}),e("i",[t._v(t._s(r.activeIn==t.tabActive)+"-"+t._s(r.activeIn)+"-"+t._s(r.component))])]],2)],1)})],2)],2),e("systemTitleA1",{attrs:{config:t.systemTitleConfig}})],1)},l=[],d=_(c,s,l,!1,null,null,null,null);const v=d.exports;export{v as default};