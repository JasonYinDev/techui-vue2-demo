import{t as r}from"./themeChart-df325d8f.js";import{n}from"./index-beda625d.js";const l={components:{},mixins:[r],data(){return{chartData:{name:this.$t("dashboard4x2D.p3.desc1"),value:45,colors:["#5c53de","#18c8ff"],pos:["50%","50%"]},chartOption:{}}},computed:{},methods:{processData(){const{getColor:e,chartData:t}=this,{colors:o}=t;let a=t;this.chartOption.series.push({name:"业务指标",type:"gauge",detail:{formatter:"{value}%"},data:[a],radius:"145%",center:["50%","90%"],startAngle:180,endAngle:0,axisLine:{lineStyle:{width:30,offset:0,color:[[a.value/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:o[0]},{offset:1,color:o[1]}])],[1,$c.hsll(o[1],.15)]]}},axisLabel:{show:!1},splitLine:{length:20,lineStyle:{width:1}},pointer:{show:!1,length:"80%",width:5},itemStyle:{color:$c.bll8},title:{show:!0,offsetCenter:[0,"-10%"],fontSize:18},detail:{show:!0,offsetCenter:[0,"-40%"],color:e("staFC"),formatter:function(s){return s+"%"},fontSize:25}})},processOption(){const{getColor:e}=this;this.chartOption={update:!1,title:{show:!1,text:"",left:"62%",top:"55%",textStyle:{color:e("staFC"),fontSize:14,fontWeight:"bold"}},tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[]},this.processData()},chartTheme(){const{chartData:e,getPalette:t,oriColors:o}=this;e.colors=t({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var i=function(){var t=this,o=t._self._c;return o("echartsInit",{attrs:{chartOption:t.chartOption}})},c=[],h=n(l,i,c,!1,null,null,null,null);const d=h.exports;export{d as default};