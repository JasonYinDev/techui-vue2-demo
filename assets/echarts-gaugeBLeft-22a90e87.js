import{t as s}from"./themeChart-df325d8f.js";import{n as o}from"./index-2766203e.js";const r={components:{},mixins:[s],data(){return{chartData:{colors:[$c.cyl5,$c.bll5],data:45},chartOption:{}}},computed:{},methods:{processData(){this.chartOption.series[1].data[0].value=this.chartData.data},processOption(){const{getColor:a,chartData:e}=this,{colors:t}=e;this.chartOption={update:!1,title:{text:"主要告警压缩比",left:"62%",top:"55%",textStyle:{color:t[0],fontSize:14,fontWeight:"bold"}},series:[{name:"刻度",type:"gauge",center:["60%","50%"],radius:"70%",min:0,max:100,splitNumber:10,startAngle:315,endAngle:45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"transparent"]]}},axisLabel:{show:!0,fontSize:12,distance:-20},axisTick:{show:!0,splitNumber:5,length:-10},splitLine:{show:!0,length:-15}},{type:"gauge",radius:"60%",center:["60%","50%"],splitNumber:0,startAngle:315,endAngle:45,axisLine:{show:!0,lineStyle:{width:10,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:t[0]},{offset:1,color:t[1]}])]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!0,length:"80%",width:"2%",itemStyle:{color:t[0]}},detail:{show:!0,offsetCenter:["40%","0%"],fontSize:40,color:t[0]},data:[{value:0}]}]},this.processData()},chartTheme(){const{chartData:a,getPalette:e,oriColors:t}=this;a.colors=e({actual:[4,8],pickType:"cho"})}},mounted(){this.processOption()}};var n=function(){var e=this,t=e._self._c;return t("echartsInit",{attrs:{chartOption:e.chartOption}})},i=[],l=o(r,n,i,!1,null,null,null,null);const p=l.exports;export{p as default};
