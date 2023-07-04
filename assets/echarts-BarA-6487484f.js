import{t as n}from"./themeChart-df325d8f.js";import{n as l}from"./index-2766203e.js";const d={components:{},mixins:[n],data(){return{chartData:{title:"超采区关系",legend:["可开采量","超采区面积"],xAxis:["超采区1","超采区2","超采区3","超采区4","超采区5","超采区6"],colors:[$c.aql4,$c.cyl4,$c.rel4],data:[[235,210,187,212,278,220,320,302,301,334,390,330,300,240,345],[93,85,22,76,13,20,35,10,20,9,13,10,32,15,88]]},chartOption:{}}},watch:{"$tState.mapData.name"(e,t){let r=this.randomData({min:100,max:500,length:15,group:2});this.chartData.data[0]=r[0],this.chartData.data[1]=r[1],this.processData(),this.chartOption.update=!0}},computed:{},methods:{chartClick(e){let t=this.$tState.chartData;t.title=this.chartData.title+"-"+e.seriesName+"-"+e.name,t.params=e},processData(){let{legend:e,colors:t,xAxis:r,data:i}=this.chartData,s=[],o="bar",c=0;r.forEach((h,a)=>{this.chartData.xAxis[a]=this.$t("dashboardC.l1.xAxis")+(a+1)}),e.forEach((h,a)=>{this.chartData.legend[a]=this.$t(`dashboardC.l1.legend${a+1}`),s.push({name:this.$t(`dashboardC.l1.legend${a+1}`),type:o,barWidth:15,label:{show:!1,position:"insideRight"},itemStyle:{color:$c.fade(t[a],.9),borderRadius:3},z:5-a,smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(t[a],.9)},{offset:.8,color:$c.fade(t[a],.1)}],!1),shadowcolor:$c.fade(t[a],.3),shadowBlur:10},yAxisIndex:c,data:i[a]})}),this.chartOption.legend.data=e,this.chartOption.series=s,this.chartOption.xAxis.data=r},processOption(){this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{orient:"vertical",itemWidth:14,itemHeight:5,itemGap:5,right:"10",top:"10"},grid:{left:"5%",right:"5%",bottom:"8%",top:"25%",containLabel:!0},yAxis:{type:"value",position:"left",splitLine:{show:!0},axisLabel:{formatter:"{value}",align:"right"}},xAxis:{type:"category",data:[],axisLabel:{align:"center",interval:0}},series:[]},this.processData()},chartTheme(){const{chartData:e,getPalette:t,oriColors:r}=this;e.colors=t({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var p=function(){var t=this,r=t._self._c;return r("echartsInit",{attrs:{chartOption:t.chartOption},on:{chartClick:t.chartClick}})},m=[],x=l(d,p,m,!1,null,null,null,null);const g=x.exports;export{g as default};