import{t as n}from"./themeChart-df325d8f.js";import{n as c}from"./index-2766203e.js";const l={components:{},mixins:[n],data(){return{chartData:{legend:["回款额","开票额"],xAxis:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],colors:[$c.yel2,$c.rel4,$c.aql3],data:[[320,302,301,334,390,330,300,240,235,210,187,212,278,220],[168,181,134,126,220,179,123,134,190,230,210,120,132,101]]},chartOption:{}}},computed:{},methods:{processData(){let{legend:s,colors:e,xAxis:a,data:o}=this.chartData,r=[];a.forEach((i,t)=>{a[t]=this.$t("dashboardE.b2.xAxi")+(t+1)}),s.forEach((i,t)=>{this.chartData.legend[t]=this.$t(`dashboardE.b2.legend${t+1}`),r.push({name:this.$t(`dashboardE.b2.legend${t+1}`),type:"line",barWidth:15,label:{show:!1,position:"insideRight"},itemStyle:{color:$c.fade(e[t],.9),borderRadius:5},smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(e[t],.9)},{offset:.8,color:$c.fade(e[t],.1)}],!1),shadowcolor:$c.fade(e[t],.3),shadowBlur:10},data:o[t]})}),this.chartOption.legend.data=s,this.chartOption.series=r,this.chartOption.xAxis.data=a},processOption(){this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{right:"10",top:"0"},grid:{left:"3%",right:"5%",bottom:"5%",top:"25%",containLabel:!0},yAxis:{type:"value",splitNumber:3,splitLine:{show:!0},axisLabel:{align:"right"}},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{align:"center"}},series:[]},this.processData()},chartTheme(){const{chartData:s,getPalette:e,oriColors:a}=this;s.colors=e({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var h=function(){var e=this,a=e._self._c;return a("echartsInit",{attrs:{chartOption:e.chartOption}})},d=[],p=c(l,h,d,!1,null,null,null,null);const u=p.exports;export{u as default};
