import{t as p}from"./themeChart-df325d8f.js";import{n as x}from"./index-2766203e.js";const f={components:{},mixins:[p],data(){return{chartData:{legend:["数据1","数据2","数据3"],xAxis:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],colors:[$c.cyl4,$c.rel4,$c.aql3],data:[[100,200,400,500,400,200,100,100,200,400,200,100],[100,200,100,200,300,450,400,300,200,100,200,50],[200,300,200,150,100,50,50,100,100,100,50,50]]},chartOption:{}}},computed:{},methods:{processData(){let{legend:o,colors:e,xAxis:s,data:n}=this.chartData,l=[];s.forEach((i,t)=>{this.chartData.xAxis[t]=this.$t("dashboard4x2C.p4.xAxis")+(t+1)}),o.forEach((i,t)=>{let a=n[t].sort((r,h)=>h-r),c=n[t].findIndex(r=>r===a[0]),d=n[t].findIndex(r=>r===a[a.length-1]);this.chartData.legend[t]=this.$t(`dashboard4x2C.p4.legend${t+1}`),l.push({name:this.$t(`dashboard4x2C.p4.legend${t+1}`),type:"line",smooth:!0,showSymbol:!1,markPoint:{data:[{name:"月最高",value:a[0],xAxis:c,yAxis:a[0]},{name:"月最低",value:a[a.length-1],xAxis:d,yAxis:a[a.length-1]}]},itemStyle:{color:$c.fade(e[t],.9),borderColor:"#f1f1f1",borderWidth:1},lineStyle:{width:4,color:e[t],shadowColor:"rgba(249,165,137, 0.5)",shadowBlur:30,shadowOffsetY:5},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(e[t],.9)},{offset:.6,color:$c.fade(e[t],.1)},{offset:.8,color:$c.fade(e[t],.1)}],!1),shadowColor:"rgba(58,182,224, 0.1)",shadowBlur:6},data:n[t]})}),this.chartOption.legend.data=o,this.chartOption.series=l,this.chartOption.xAxis.data=s},processOption(){this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[],right:"5%",top:"20"},grid:{left:"3%",right:"3%",bottom:"8%",top:"60",containLabel:!0},dataZoom:[{type:"inside",start:0,end:100}],yAxis:{type:"value",splitNumber:6,axisLabel:{align:"right"}},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{align:"center"}},series:[]},this.processData()},chartTheme(){const{chartData:o,getPalette:e,oriColors:s}=this;o.colors=e({actual:3,total:7,pickType:"seq",palette:"alt"})}},mounted(){this.processOption()}};var m=function(){var e=this,s=e._self._c;return s("echartsInit",{attrs:{chartOption:e.chartOption}})},g=[],u=x(f,m,g,!1,null,null,null,null);const b=u.exports;export{b as default};
