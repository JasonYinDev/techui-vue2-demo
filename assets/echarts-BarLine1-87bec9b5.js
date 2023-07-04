import{t as h}from"./themeChart-df325d8f.js";import{n as d}from"./index-2766203e.js";const p={components:{},mixins:[h],data(){return{chartData:{legend:["合同成本-(万元)","合同利润-(万元)","毛利润-(%)"],xAxis:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],colors:[$c.aql4,$c.cbl4,$c.cbl4],data:[[235,210,187,212,278,220,320,302,301,334,390,330,300,240],[35,21,18,21,27,22,32,30,30,33,39,33,30,24],[3,5,22,6,13,20,35,10,20,9,13,10,32,1]]},chartOption:{}}},computed:{},methods:{processData(){let{legend:s,colors:e,xAxis:a,data:l}=this.chartData,r=[],o="bar",i="bar",n=0;a.forEach((c,t)=>{a[t]=this.$t("dashboardE.t2.xAxi")+(t+1)}),s.forEach((c,t)=>{t>1&&(o="line",n=1,i="line"),this.chartData.legend[t]=this.$t(`dashboardE.t2.legend${t+1}`),r.push({name:this.$t(`dashboardE.t2.legend${t+1}`),type:o,stack:i,barWidth:30,label:{show:!1,position:"insideRight"},itemStyle:{color:$c.fade(e[t],.9),borderRadius:3},z:t,smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(e[t],.9)},{offset:.8,color:$c.fade(e[t],.3)}],!1),shadowcolor:$c.fade(e[t],.3),shadowBlur:10},yAxisIndex:n,data:l[t]})}),this.chartOption.legend.data=s,this.chartOption.series=r,this.chartOption.xAxis.data=a},processOption(){this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{left:"center",top:"20"},grid:{left:"2%",right:"2%",bottom:"2%",top:"15%",containLabel:!0},yAxis:[{type:"value",name:"万元",min:0,max:400,position:"left",splitLine:{show:!0},axisLabel:{formatter:"{value}",align:"right"}},{type:"value",name:"%",position:"right",splitLine:{show:!1},axisLabel:{formatter:"{value}"}}],xAxis:{type:"category",data:[],axisLabel:{align:"center",interval:0}},series:[]},this.processData()},chartTheme(){const{chartData:s,getPalette:e,oriColors:a}=this;s.colors=e({actual:3,jump:3,total:15,pickType:"seq"})}},mounted(){this.processOption()}};var f=function(){var e=this,a=e._self._c;return a("echartsInit",{attrs:{chartOption:e.chartOption}})},m=[],u=d(p,f,m,!1,null,null,null,null);const g=u.exports;export{g as default};
