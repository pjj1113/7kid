(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6718e7ce"],{a517:function(t,e,a){},dafb:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display"},[a("div",{staticClass:"wrap"},[a("div",{ref:"growthBlock",staticClass:"block",attrs:{id:"growthBlock"}},[a("div",{staticClass:"editor",style:{width:t.bWidth+"px",height:t.bHeight+"px"}},[a("div",{staticClass:"page"},[a("div",{style:{width:"100%",height:"100%",backgroundSize:"cover",backgroundImage:"url("+t.currPage.backgroundUrl+")"}},[a("div",{style:{transform:"scale("+t.bWidth/592+")",transformOrigin:"0 0"}},[t._l(t.currPage.contentLayout,(function(t,e){return[a("operator",{key:e,attrs:{element:t,pdf:""}})]}))],2)])])])])])])},n=[],c=(a("6540"),a("d0bf"),a("d211")),o=a("c98f"),i=a("a8e1"),s=a("86bd"),d=a("ebc2"),u={name:"growth-growth-pdf",components:{operator:d["a"]},mixins:[i["a"]],data:function(){return{growthId:this.$route.query.growthId,clazzThemeId:this.$route.query.clazzThemeId,studentId:this.$route.query.studentId,studentName:this.$route.query.studentName,page:Number(this.$route.query.page),maxPage:1,project:[]}},computed:{currPage:function(){var t=this.project[this.page<0?0:this.page]||{};return t}},created:function(){},mounted:function(){this.getGrowth()},methods:{getGrowth:function(){var t=this;this.growthId?Object(o["a"])({growthId:this.growthId}).then((function(e){t.project=e.data.map((function(t,e){return Object(c["a"])(Object(c["a"])({},Object(s["a"])(t)),{},{pageIndex:e})})),t.maxPage=t.project.length})):Object(o["f"])({clazzThemeId:this.clazzThemeId,studentId:this.studentId}).then((function(e){t.project=e.data.map((function(t,e){return Object(c["a"])(Object(c["a"])({},Object(s["a"])(t)),{},{pageIndex:e})})),t.maxPage=t.project.length}))}}},h=u,g=(a("f821"),a("c701")),p=Object(g["a"])(h,r,n,!1,null,"1a6134af",null);e["default"]=p.exports},f821:function(t,e,a){"use strict";a("a517")}}]);