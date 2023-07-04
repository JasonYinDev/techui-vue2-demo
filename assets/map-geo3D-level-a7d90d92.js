import{n as u,_ as h}from"./index-2766203e.js";import{t as D}from"./themeChart-df325d8f.js";import{m as d}from"./api-0c0121c1.js";const f={mixins:[D],components:{mapPopover:()=>h(()=>import("./map-popover-b7e5f5f8.js"),["assets/map-popover-b7e5f5f8.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/map-popover-e2ab1a87.css"]),mapViewToggle:()=>h(()=>import("./map-viewToggle-09fbd26e.js"),["assets/map-viewToggle-09fbd26e.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/map-viewToggle-13399c52.css"])},data(){return{mapInited:!1,view:{data:[{title:"矿山分布",label:"data1"},{title:"执法完成",label:"data2"},{title:"风险分布",label:"data3"},{title:"区域分布",label:"data4"}],current:"data1"},chartData:{alladcode:[],geoJson:{},visualMapColors:[$c.cyA16,$c.cbA17,$c.blA18],mapData:[],pointData:[],sum:0,nav:{data:[{code:21e4,name:this.$t("map.navRoot")}],show:!1},maxData:500,minData:9,maxPin:45,minPin:20,layoutCenter:[["50%","66%"],["50%","50%"]],layoutSize:["100%","80%"],visualMapPos:{right:"3%",bottom:"5%"}},chartOption:{update:!1},clickData:{show:!1,area:"北京",data:"325",x:120,y:120}}},computed:{publicUrl(){return`./static/maps/${this.globalConfig.language}/`},pinColor(){const{view:a}=this;if(a.current=="data1")return[$c.aql2,$c.aql5,$c.bll7];if(a.current=="data2")return[$c.cbl3,$c.cyl5,$c.wh];if(a.current=="data3")return[$c.orl3,$c.rel5,$c.wh];if(a.current=="data4")return[$c.pul3,$c.inl6,$c.wh]},mapCenter(){const{chartData:a}=this,{layoutCenter:t}=a;return a.nav.data[a.nav.data.length-1].name=="全国"?t[0]:t[1]},mapSize(){const{chartData:a}=this,{layoutSize:t}=a;return a.nav.data[a.nav.data.length-1].name=="全国"?t[0]:t[1]}},watch:{},methods:{changeView(a){let t=this.chartData.nav.data;this.view.current=a.label,this.clickData.show=!1,this.getMapData(t[t.length-1])},processMapData(a){const{getColor:t,chartData:o,chartOption:e,processTimeLine:l}=this,{mapData:n,pointData:i,sum:s,navDept:m,maxData:c,minData:_,maxPin:C,minPin:y}=o;let p=[];p.push({geo3DIndex:0,realisticMaterial:{roughness:.6,textureTiling:20},geoIndex:0,type:"map3D",zlevel:3,map:a.name,symbolSize:0,boxHeight:10,boxWidth:200,regionHeight:4,shading:"lambert",viewControl:{autoRotateAfterStill:13,minBeta:-180,maxBeta:180,center:[0,-50,-20],beta:5,alpha:50,distance:260,rotateMouseButton:"middle",panMouseButton:"middle",panSensitivity:1,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut"},emphasis:{disabled:!1,label:{show:!0,color:t("staFCSr"),fontSize:14,formatter:r=>" "+r.value+" "},itemStyle:{color:t("mapBGHA")}},label:{show:!0,position:"top",color:$c.fade(t("staFCSr"),.8),backgroundColor:$c.fade("bk",.4),borderRadius:3,padding:3,fontSize:14,distance:50,formatter:r=>{switch(r.name){case"内蒙古自治区":r.name="内蒙古";break;case"西藏自治区":r.name="西藏";break;case"新疆维吾尔自治区":r.name="新疆";break;case"宁夏回族自治区":r.name="宁夏";break;case"广西壮族自治区":r.name="广西";break;case"香港特别行政区":r.name="香港";break;case"澳门特别行政区":r.name="澳门";break}return" "+r.name+" "}},light:{main:{intensity:.8,shadow:!0,alpha:120,beta:80},ambient:{intensity:.8}},itemStyle:{color:t("mapBGA"),borderColor:t("mapBGB"),opacity:1,borderWidth:.4,shadowColor:t("mapSD")},data:n}),e.series=p,this.mapInited=!0},processOption(a){if(!a){let c=this.chartData.nav.data;a=c[c.length-1]}const{mapCenter:t,mapSize:o,chartData:e,chartOption:l,processMapData:n,getColor:i}=this,{visualMapPos:s}=e;let m={title:{show:!1,text:a.name,left:"center"},series:[]};m.visualMap={seriesIndex:0,right:s.right,bottom:s.bottom,min:0,max:500,inRange:{color:e.visualMapColors},textStyle:{color:i("staFC")},calculable:!0};for(let c in m)l[c]=m[c];l.update=!0,n(a)},getMapData(a){const{chartData:t,processOption:o}=this;let e=[],l=[],n=0;t.geoJson.features.forEach(i=>{if(i.properties.name){let s=(Math.random()*500).toFixed(0);e.push({name:i.properties.name,value:s,cityCode:parseInt(i.properties.adcode)}),i.properties.center&&l.push({name:i.properties.name,value:[i.properties.center[0],i.properties.center[1],1,s],cityCode:parseInt(i.properties.adcode)}),n+=s}}),t.mapData=e,t.pointData=l,t.sum=n,o(a)},async initChart(a){const{chartData:t,getMapData:o}=this;t.alladcode.length==0&&await d(this.publicUrl,"all.json").then(e=>{t.alladcode=e}).catch(function(e){console.error("getmap",e)}),await d(this.publicUrl,a.code+"_geojson_full.json").then(e=>{t.geoJson={...e,...a}}).catch(function(e){console.error("getmap",e)}),o(a)},mapAction(a){const{clickData:t}=this;t.show=!1},mapHover(a){const{chartData:t}=this,{mapData:o}=t;o.forEach((e,l)=>{e.name==a.name?e.height=6:e.height=null}),this.processOption(t.nav.data[0]),console.log("mapHover",a,t)},mapClick(a){var i;const{clickData:t}=this,{alladcode:o,initChart:e,nav:l}=this.chartData,n=l.data;if(t.show=!1,n[n.length-1].name!=a.name)if(a.componentType=="geo"||a.componentType=="series"&&a.componentSubType=="map"){let s=(i=o.filter(c=>c.name===a.name)[0])==null?void 0:i.adcode,m={code:s,name:a.name};n[n.length-1].name!=a.name&&n.length<2&&(this.initChart(m),n.push({code:s,name:a.name}))}else a.code&&this.initChart(a);a.componentType=="series"&&a.componentSubType=="scatter"&&(t.area=a.name,t.data=a.data.value[2],t.x=a.domPosition[0],t.y=a.domPosition[1],t.show=!0)},chartTheme(){let a=this.themePalette.chart.visual;this.chartData.visualMapColors=this.getPalette({total:10,actual:5,palette:a,extra:["fade",1]})}},mounted(){const{chartData:a}=this;this.initChart(a.nav.data[0])},beforeDestroy(){},destroyed(){}};var v=function(){var t=this,o=t._self._c;return o("div",{staticClass:"map-wrap map3D-simple"},[o("mapPopover",{attrs:{clickData:t.clickData}}),t.mapInited?o("echartsMap",{staticClass:"echartsMap",attrs:{chartOption:t.chartOption,chartData:t.chartData},on:{mapClick:t.mapClick,mapHover:t.mapHover,mapAction:t.mapAction}}):t._e()],1)},g=[],b=u(f,v,g,!1,null,null,null,null);const k=b.exports;export{k as default};
