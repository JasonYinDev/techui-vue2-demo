import{n as s,_ as o}from"./index-2766203e.js";const i={name:"blockCenter",mixins:[],components:{echartsLine:()=>o(()=>import("./echarts-line-bb2cef27.js"),["assets/echarts-line-bb2cef27.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"])},data(){return{counterList:[{name:"软件年盈利",num:394,unit:"万元",barColor:$c.rel3},{name:"硬件年盈利",num:42558,unit:"万元",barColor:$c.yel3},{name:"服务年盈利",num:50262,unit:"万元"},{name:"安全年盈利",num:50262,unit:"万元"}]}},watch:{"$tState.mapData.code"(r,t){let n=this.randomData({min:1e3,max:1e4,length:4,group:1})[0];this.counterList.forEach((a,e)=>{a.num=n[e]})}},computed:{},methods:{},mounted(){}};var l=function(){var t=this,n=t._self._c;return n("div",{staticClass:"map-counter-wrap"},t._l(t.counterList,function(a,e){return n("div",{staticClass:"counter-item"},[n("div",{staticClass:"content"},[n("DigitalTransform",{staticClass:"num",attrs:{value:a.num,useGrouping:!1,interval:t.globalConfig.animation?2e3:0}})],1),n("div",{staticClass:"name"},[t._v(t._s(a.name)+" "),n("span",{staticClass:"unit"},[t._v("("+t._s(a.unit)+")")])]),n("echartsLine",{attrs:{barColor:a.barColor}})],1)}),0)},u=[],m=s(i,l,u,!1,null,null,null,null);const _=m.exports;export{_ as default};
