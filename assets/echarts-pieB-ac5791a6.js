import{t as d}from"./themeChart-df325d8f.js";import{n as m}from"./index-2766203e.js";const f={components:{},mixins:[d],data(){return{chartData:{title:[`海侵区
面积占比A`,`海侵区
面积占比B`],legend:[["海侵区A","海侵区B","海侵区C","海侵区D"],["超采区A","超采区B","超采区C","超采区D","超采区E"]],colors:[[$c.aqm5,$c.cym5,$c.cbm5,$c.blm5],[$c.rem4,$c.rom4,$c.orm4,$c.yem3,$c.ycm4]],center:[["30%","50%"],["70%","50%"]],data:[[1831,993,731,532],[172,181,321,132,321]]},chartOption:{}}},computed:{},methods:{processData(){const{getColor:a,chartData:e}=this,{legend:r,colors:h,data:s,center:p,title:b}=e;let l=[],n=[];s.forEach((c,t)=>{let i=[];s[t].forEach(($,o)=>{this.chartData.legend[t][o]=this.$t(`dashboard4x2E.p4.legend${t+1}${o+1}`),i.push({value:s[t][o],name:this.$t(`dashboard4x2E.p4.legend${t+1}${o+1}`),itemStyle:{color:h[t][o]}})}),l.push({name:"dataType",type:"pie",radius:["55%","75%"],center:p[t],avoidLabelOverlap:!1,label:{show:!1,position:"outside"},itemStyle:{borderRadius:15,borderColor:a("techBG"),borderWidth:5},emphasis:{label:{show:!1,fontSize:"20",color:$c.gyd5}},labelLine:{show:!1},data:i})}),r.forEach((c,t)=>{n.push({orient:"horizontal",show:!0,left:t==0?"2%":null,right:t==1?"2%":null,y:"center",width:"100p",data:c,textStyle:{fontSize:14,color:a("staFC")}})}),this.chartOption.series=l,this.chartOption.legend=n,this.chartOption.title[0].text=this.$t("dashboard4x2E.p4.desc1"),this.chartOption.title[1].text=this.$t("dashboard4x2E.p4.desc2")},processOption(){this.chartOption={update:!1,title:[{text:"",left:"29%",top:"38%",textStyle:{fontSize:18,fontWeight:"bold",lineHeight:30},textAlign:"center"},{text:"",left:"69%",top:"38%",textStyle:{fontSize:18,fontWeight:"bold",lineHeight:30},textAlign:"center"}],tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{},series:[]},this.processData()},chartTheme(){const{chartData:a,getPalette:e,oriColors:r}=this;a.colors[0]=e({actual:4,pickType:"seq"}),a.colors[1]=e({actual:5,pickType:"seq",palette:"alt"})}},mounted(){this.processOption()}};var u=function(){var e=this,r=e._self._c;return r("echartsInit",{attrs:{chartOption:e.chartOption}})},g=[],_=m(f,u,g,!1,null,null,null,null);const O=_.exports;export{O as default};