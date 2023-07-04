import{t as l}from"./themeChart-df325d8f.js";import{n as c}from"./index-2766203e.js";const n={components:{},mixins:[l],data(){return{current:0,title:"年用水量",total:0,buttonConfig:{height:30,decoration:!1},chartData:[{name:"年用水量",legend:["工业用水","农业用水","生活用水","循环水","其他"],colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],data:[625,352,123,83,129]},{name:"日用水量",legend:["工业用水","农业用水","生活用水","循环水","其他"],colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],data:[15,72,43,13,20]}],chartOption:{}}},computed:{},props:["tabActive"],watch:{tabActive(a){let t=this.randomData({min:1,max:999,length:5,group:2});this.chartData[0].data=t[0],this.chartData[1].data=t[1],this.processData(),this.chartOption.update=!0}},methods:{tabClick(a){this.current=a,this.processData(),this.chartOption.update=!0},processData(){const{current:a}=this,{legend:t,colors:e,data:o}=this.chartData[a];let r=[],s=0;t.forEach((u,i)=>{this.chartData[a].legend[i]=this.$t(`dashboardC.r1.item${a+1}_${i+1}`),r.push({value:o[i],name:t[i],itemStyle:{color:e[i]}}),s+=o[i]}),this.total=s,this.chartOption.series[0].data=r,this.chartOption.legend.data=t},processOption(){const{getColor:a}=this;this.chartOption={update:!1,title:{show:!1,text:`总量
1231`,x:"center",top:"45%",left:"center",textStyle:{color:a("staFC"),fontSize:18,fontWeight:"bold",lineHeight:30}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",show:!0,right:"30",top:"25%",data:[],formatter:t=>{let e,o=this.chartData[this.current].data,r=this.chartData[this.current].legend;for(let s=0;s<o.length;s++)r[s]==t&&(e=o[s]);return"{a|"+t+"} {b|"+e+"}"},textStyle:{rich:{a:{fontSize:14,color:a("staFC"),padding:10},b:{fontSize:16,color:a("staFCW")}}}},series:[{name:"数据类别",type:"pie",radius:["45%","70%"],center:["30%","55%"],avoidLabelOverlap:!1,label:{show:!1,position:"outside"},itemStyle:{borderRadius:10,borderColor:a("techBG"),borderWidth:5},emphasis:{label:{show:!1,fontSize:"20",color:$c.gyd5}},labelLine:{show:!1},data:[]}]},this.processData()},chartTheme(){const{chartData:a,getPalette:t,oriColors:e}=this;a[0].colors=a[1].colors=t({total:15,actual:5,palette:"alt"})}},mounted(){this.processOption()}};var h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart-hasTabs mobile-pie-tabs"},[e("div",{staticClass:"unit"},[t._v(t._s(t.$t("dashboardC.r1.unit")))]),e("div",{staticClass:"card-header-tabs"},t._l(t.chartData,function(o,r){return e("div",{staticClass:"button-wrap",on:{click:function(s){return t.tabClick(r)}}},[e("techButtonB1",{class:r==t.current?"active":"",attrs:{config:t.buttonConfig}},[t._v(t._s(t.$t(`dashboardC.r1.item${r+1}`)))])],1)}),0),e("div",{staticClass:"total-digital"},[e("span",{staticClass:"desc"},[t._v(t._s(t.$t(`dashboardC.r1.item${t.current+1}`)))]),e("DigitalTransform",{staticClass:"counter",attrs:{value:t.total,interval:t.globalConfig.animation?1e3:0,dislocation:!1}})],1),e("echartsInit",{attrs:{chartOption:t.chartOption}})],1)},d=[],p=c(n,h,d,!1,null,null,null,null);const b=p.exports;export{b as default};
