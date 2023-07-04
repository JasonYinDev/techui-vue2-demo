import{t as c}from"./themeChart-df325d8f.js";import{n as h}from"./index-2766203e.js";const d={components:{},mixins:[c],data(){return{chartData:{title:"任务完成情况",legend:["开发任务","采购任务","销售任务"],colors:[$c.aql4,$c.cyl4,$c.rel5],colorsD:[$c.aql8,$c.cyl8,$c.rel9],data:[45,33,77],radius:["55%","55%","55%"],position:[["17%","55%"],["50%","55%"],["83%","55%"]]},chartOption:{}}},watch:{"$tState.mapData.name"(a,t){let r=this.randomData({min:0,max:100,length:3,group:1});this.chartData.data=r[0],this.processData(),this.chartOption.update=!0}},computed:{},methods:{processData(){const{legend:a,colors:t,colorsD:r,data:s,radius:n,position:i}=this.chartData;let o=[];a.forEach((f,e)=>{o.push({type:"gauge",startAngle:90,endAngle:-270,center:i[e],radius:n[e],pointer:{show:!1},title:{fontSize:14},itemStyle:{color:t[e],shadowColor:t[e]},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1,itemStyle:{}},detail:{width:50,height:14,borderColor:"inherit",borderRadius:20,borderWidth:0,formatter:function(l){return"{value|"+l.toFixed(0)+"}{unit|%}"},rich:{value:{fontSize:24,color:t[e],fontWeight:"bolder"},unit:{fontSize:12,color:$c.darken(t[e],1)}}},axisLine:{lineStyle:{color:[[1,$c.darken(t[e],4)]],width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:[{value:s[e],name:this.$t(`dashboardB.l2.item${e+1}`),title:{color:$c.lighten(t[e],1),offsetCenter:["0%","30%"]},detail:{valueAnimation:!0,offsetCenter:["0","-30%"]}}]})}),this.chartOption.series=o},processOption(){this.chartOption={update:!1,series:[]},this.processData()},chartTheme(){const{chartData:a,getPalette:t,oriColors:r}=this;a.colors=t({actual:3,pickType:"seq"})}},mounted(){this.processOption()}};var p=function(){var t=this,r=t._self._c;return r("echartsInit",{attrs:{chartOption:t.chartOption}})},u=[],m=h(d,p,u,!1,null,null,null,null);const v=m.exports;export{v as default};
