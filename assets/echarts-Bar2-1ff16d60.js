import{t as l}from"./themeChart-df325d8f.js";import{n}from"./index-2766203e.js";const h={components:{},mixins:[l],data(){return{select:{options:[{value:"a",label:this.$t("dashboardD.optionA.op1")},{value:"b",label:this.$t("dashboardD.optionA.op2")}],current:"a"},chartData:{legend:["2021","2022"],xAxis:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],colors:[$c.aql4,$c.cyl4,$c.rel4],data:[[235,210,187,212,278,220,123,223,321,189,175,123],[220,123,223,321,189,175,123]]},chartOption:{}}},watch:{"select.current"(r,t){let a=this.randomData({min:100,max:500,length:15,group:2});this.chartData.data[0]=a[0],this.chartData.data[1]=a[1],this.processData(),this.chartOption.update=!0}},computed:{},methods:{processData(){let{legend:r,colors:t,xAxis:a,data:o}=this.chartData,s=[],i="bar";a.forEach((c,e)=>{a[e]=this.$t("dashboardE.b3.xAxi")+(e+1)}),r.forEach((c,e)=>{s.push({name:r[e],type:i,label:{show:!1,position:"insideRight"},itemStyle:{color:$c.fade(t[e],.9),borderRadius:3},z:5-e,smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(t[e],.9)},{offset:.8,color:$c.fade(t[e],.1)}],!1),shadowcolor:$c.fade(t[e],.3),shadowBlur:10},data:o[e]})}),this.chartOption.legend.data=r,this.chartOption.series=s,this.chartOption.xAxis.data=a},processOption(){this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{right:"10",top:"0"},grid:{left:"3%",right:"5%",bottom:"5%",top:"25%",containLabel:!0},yAxis:{type:"value",splitNumber:3,position:"left",splitLine:{show:!0},axisLabel:{formatter:"{value}",align:"right"}},xAxis:{type:"category",data:[],axisLabel:{align:"center",width:50,lineHeight:14}},series:[]},this.processData()},chartTheme(){const{chartData:r,getPalette:t,oriColors:a}=this;r.colors=t({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var p=function(){var t=this,a=t._self._c;return a("div",{staticClass:"echarts-hasSelect"},[t._e(),a("echartsInit",{attrs:{chartOption:t.chartOption}})],1)},d=[],u=n(h,p,d,!1,null,null,null,null);const _=u.exports;export{_ as default};
