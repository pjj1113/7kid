(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d8023af"],{"02aa":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"empty-block"},[i("img",{style:{width:"225px"},attrs:{src:t.image}}),t._t("description",[i("div",{staticClass:"description"},[t._v(t._s(t.description))])])],2)},n=[],o={name:"empty-block",props:{image:{type:String,default:i("54e3")},description:{type:String,default:"暂无数据"}},data:function(){return{}}},s=o,c=(i("4015"),i("c701")),r=Object(c["a"])(s,a,n,!1,null,"77b72184",null);e["a"]=r.exports},"0a66":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAADeUlEQVR4Xu3cvYsUMRjH8e/PFwQPDlTU5kCwENRGrlQQbBVtRBsVO8XCwkYsBMU/QCwECysPCwULrcTGF9RGCzsbEQtBFEHQ0yt84ZGsu9y6t7PJzM7OTjK7xV0xTzLJhyTzZPZyIvGPma0AtgPvJH0r2l0VLRhDOTPbANwHZoEvwEFJj4u0PVmoNtIjYFsXzAKwrwhWklAZSB2vQljJQXmQurH2SnoSOg2TggpE6th8BGYk/QnBSgYqJ1LHZlrSfGOgzGwj8LBn4fb1/7qkE76gzvXoR1TBkXQbOBI67RxW1FAFR1JupBSg7rgkMnT6AIWQUoBymXdvUpnlVhgpeijXgcA1aiik6KDMbHm/BdiDNTRSVFDthfsBcFHS3d75lYFVClI0UD1Pt1/A4QCs0pCigMpIAXxYZ4DzefIk35Oz1nmUJ0/KxPJ1usj12kIFJpOVYdUSKhCpMzAqwaodVBvJJZFbc0yROUnHc8TnDq0VVM6R1OnsLeBomQt3P8XaQNUZqTbpQd2RagEVA9LYoWJBGitUTEhjg4oNaSxQMSJVDhUrUqVQMSNVBhU7UiVQKSCNHCoVpJFCpYQ0MqjUkEYClSJS6VCpIpUKlTJSaVAFkUr93i33u92cBYZ+wxn43X9vs6JCGnpENQVpKKgmIRWGahpSIagmIuWGaipSLqgmIwVDNR0pCGqC9C8FHJhwTpAW8+RMqAnS/5uJvlATpKUbwSVQZrYecMdJu09O+raQ0e3dfB3qvd4Pag44lqOi5JH6LuZm9hzYGQjVCKQsqEPtwzW+VzCNQcpMD8zsJHBtQPrQKKSBedQArMYhhSScvSOrkUheKBdgZvvdsVLgJXBl1H99G/gQqTystWCbmfs97dvSVN66xRsuSPqZ5/5mthKYylOmJ3a+e1CoPWJuAGuGqHTURd3phMuSzoXcyMzOApeAVSHxGTHfgVOSbramnpm9BTYPUWGVRbdIejPohma2FvgMLCuhYV/dAJJkDuoHsLqESquoYrekpx4odzTkdYmNmZK0MIHyi06g/EatiAnUBGpEa9QnwP2jhRg+s5JeeRbzGeB9SZ1xuZuber/dYn7BHZEvqeJRVuOedntCdgZmdg84UEJjrko63cqj3A8z2wFsqnFm7vKZZ5Jc4un9mJnLoXYB67zB2QEfJL3oXPa9cxriPmkV/Qu12+xYjoEhTAAAAABJRU5ErkJggg=="},1341:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover"},[a("nav-bar"),a("div",{staticClass:"wrap"},[a("div",{ref:"growthBlock",staticClass:"block"},[t.page.studentGrowthId?a("div",{staticClass:"editor",style:{width:t.bWidth+"px",height:t.bHeight+"px"}},[a("edit-panel",{attrs:{page:t.page,disabled:!0,display:!0,scale:t.bWidth/595}})],1):t._e()]),t.page.studentGrowthId?a("div",{staticClass:"foot"},[a("van-button",{staticClass:"edit-btn",attrs:{round:"",type:"primary",icon:i("0a66")},on:{click:function(e){return t.$router.push({path:"/growth/growth/edit",query:{growthId:t.page.studentGrowthId}})}}},[t._v(t._s(t.$t("common.edit")))])],1):t._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.page.studentGrowthId,expression:"!page.studentGrowthId"}],staticStyle:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0","background-color":"#F9F9FA","padding-top":"46px"}},[a("empty-block",{attrs:{description:t.$t("growth.hasNoAlbum")}})],1)],1)},n=[],o=(i("1f70"),i("2939")),s=i("da1d"),c=i("02aa"),r=i("c98f"),d=i("d722"),l=i("b132d"),u=i("86bd"),h=i("a8e1"),p={name:"growth-cover",components:{NavBar:s["a"],EmptyBlock:c["a"],editPanel:l["a"]},mixins:[h["a"]],data:function(){return{page:{studentGrowthId:""},schoolId:o["a"].getAppData().schoolId}},created:function(){o["a"].getAppData()},mounted:function(){this.getTermList()},methods:{getTermList:function(){var t=this;d["a"].termListBySchoolId({schoolId:this.schoolId,pageNum:1,pageSize:0}).then((function(e){var i=(e.data.list||[]).sort((function(t,e){return t.endTime-e.endTime})),a=t.selectDefaultTerm(i),n=i[a]?i[a].id:"0";t.getGrowthCoverPage(n)}))},selectDefaultTerm:function(t){var e=(new Date).valueOf(),i=t.findIndex((function(t){return t.endTime>e&&t.startTime<e})),a=t.findIndex((function(t){return t.startTime>e})),n=i>-1?i:a>0?a-1:0==a?0:t.length-1;return n},getGrowthCoverPage:function(t){var e=this;Object(r["h"])({termId:t}).then((function(t){t.data&&(e.page=Object(u["a"])(t.data))}))}}},m=p,g=(i("79bf"),i("c701")),f=Object(g["a"])(m,a,n,!1,null,"76704ac2",null);e["default"]=f.exports},"1f70":function(t,e,i){"use strict";var a=i("a09b"),n=i("bfc3").findIndex,o=i("c119"),s=i("c1e5"),c="findIndex",r=!0,d=s(c);c in[]&&Array(1)[c]((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},"2e09":function(t,e,i){"use strict";i("ae9b")},4015:function(t,e,i){"use strict";i("d11b")},"45e5":function(t,e,i){},"54e3":function(t,e,i){t.exports=i.p+"img/icon_empty_page.a17e32dd.png"},"796a":function(t,e,i){"use strict";i("45e5")},"79bf":function(t,e,i){"use strict";i("f9f1")},a7d6:function(t,e,i){"use strict";i("f257")},ae9b:function(t,e,i){},b132d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-panel"},[i("div",{staticClass:"container",style:{transform:"scale("+t.scale+")"}},[i("div",{staticClass:"page",style:{width:"100%",height:"100%",backgroundSize:"cover",backgroundImage:"url("+t.page.backgroundUrl+")"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.editIndex=-1}}},[t._l(t.page.contentLayout,(function(e,a){return[i("operator",{attrs:{element:e,elementIndex:a,display:t.display,disabled:t.disabled,editIndex:t.editIndex,writePermission:t.page.writePermission},on:{"update:editIndex":function(e){t.editIndex=e},"update:edit-index":function(e){t.editIndex=e},click:function(t){t.stopPropagation()},save:t.save}})]}))],2)]),t.editIndex>-1?i("van-popup",{staticClass:"textEditor",attrs:{position:"bottom"},model:{value:t.textChangeShow,callback:function(e){t.textChangeShow=e},expression:"textChangeShow"}},[i("text-editor",{attrs:{content:t.editEle.propsValue.realData,show:t.textChangeShow},on:{"update:content":function(e){return t.$set(t.editEle.propsValue,"realData",e)},"update:show":function(e){t.textChangeShow=e},save:t.save}})],1):t._e(),t.editIndex>-1?i("van-action-sheet",{attrs:{actions:t.filterActions,"cancel-text":t.$t("common.cancel"),"close-on-click-action":""},on:{select:t.mediaSelect},model:{value:t.imgChangeShow,callback:function(e){t.imgChangeShow=e},expression:"imgChangeShow"}}):t._e()],1)},n=[],o=(i("cb3c"),i("c726"),i("0bd5"),i("b784"),i("79a8"),i("ebc2")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-editor"},[i("van-row",{attrs:{type:"flex",justify:"space-between"}},[i("van-col",{attrs:{span:"4"},on:{click:function(e){return t.close()}}},[t._v(t._s(t.$t("common.cancel")))]),i("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"4"},on:{click:function(e){return t.save()}}},[t._v(t._s(t.$t("common.save")))])],1),i("van-field",{ref:"textInput",staticClass:"text-area",attrs:{rows:"10",maxlength:"800",autosize:"",autofocus:"",type:"textarea",placeholder:t.$t("growth.inputPlaceholder")},model:{value:t.cont,callback:function(e){t.cont=e},expression:"cont"}})],1)},c=[],r={name:"textEditor",props:["content","show"],data:function(){return{cont:this.content}},computed:{},watch:{content:function(t,e){this.cont=t}},mounted:function(){},methods:{close:function(){this.$emit("update:show",!1)},save:function(){this.$emit("update:content",this.cont),this.$emit("save",!0),this.close()}}},d=r,l=(i("796a"),i("c701")),u=Object(l["a"])(d,s,c,!1,null,"73da52c6",null),h=u.exports,p=(i("2939"),{name:"EditPanel",props:["page","clazzId","scale","disabled","display","clazzName"],components:{operator:o["a"],textEditor:h},data:function(){return{editIndex:-1,editEle:{},textChangeShow:!1,imgChangeShow:!1,actions:[{name:this.$t("growth.selectAiAlbum"),method:"selectAiAlbum",crop:!0,type:"media"},{name:this.$t("growth.localAlbum"),method:"selectAlbum",crop:!0,type:"image"},{name:this.$t("growth.localVideo"),method:"selectVideo",type:"video"},{name:this.$t("growth.takePhoto"),method:"takePhoto",crop:!0,type:"image"},{name:this.$t("growth.takeVideo"),method:"takeVideo",type:"video"}],imgTypes:["bmp","jpg","jpeg","png","tif","gif","exif","webp"],videoTypes:["mp4","avi","mov","rmvb","rm","flv","3gp","mpeg","ogg"]}},computed:{filterActions:function(){return"kid-video"==this.editEle.elName?this.actions.filter((function(t){return"video"==t.type||"media"==t.type})):"kid-image-only"==this.editEle.elName?this.actions.filter((function(t){return"image"==t.type||"media"==t.type})):this.actions}},watch:{page:function(t,e){this.editIndex=-1},editIndex:function(t,e){t!==e&&t>-1?(this.editEle=this.page.contentLayout[t],this.textChangeShow=!!["kid-text","kid-title"].includes(this.editEle.elName),this.imgChangeShow=!!["kid-image","kid-video","kid-image-only"].includes(this.editEle.elName)):this.editEle={}}},mounted:function(){var t=this;window.sendMediaData=function(e){return t.getMediaData(e)}},methods:{mediaSelect:function(t,e){var i={method:t.method,callback:"sendMediaData",parameters:{clazzId:this.clazzId,clazzName:this.clazzName,studentId:1===this.page.scope?"":this.page.studentId,crop:t.crop||void 0,width:this.editEle.commonStyle.width,height:this.editEle.commonStyle.height}};callNative(i)},getMediaData:function(t){var e=t.parameters.data[0].upDataAliResponse,i=e.url.split(".").pop().toLowerCase();if("kid-image-only"!=this.editEle.elName||this.imgTypes.includes(i)){if("kid-video"!=this.editEle.elName||this.videoTypes.includes(i))return this.$set(this.editEle,"propsValue",{imageSrc:e.url,realData:e.url}),this.save(),this.imgChangeShow=!1,!0;this.$toast(this.$t("growth.fillTypeWarning"))}else this.$toast(this.$t("growth.fillTypeWarning"))},save:function(t){this.$parent.saveLastPage()}}}),m=p,g=(i("2e09"),Object(l["a"])(m,a,n,!1,null,"37463efe",null));e["a"]=g.exports},d11b:function(t,e,i){},da1d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-nav-bar",{attrs:{title:t.t_title,fixed:"",border:t.border}},[t._t("left",[i("van-icon",{staticClass:"nav-go",attrs:{name:"arrow-left"},on:{click:t.onClickLeft}})],{slot:"left"}),t._t("title",null,{slot:"title"}),t._t("right",null,{slot:"right"})],2)},n=[],o=i("2939"),s={computed:{t_title:function(){return this.title?this.title:/.*[\u4e00-\u9fa5]+.*$/.test(this.$route.meta.title)?this.$route.meta.title:this.$t("route.".concat(this.$route.meta.title))}},props:{border:{type:Boolean,default:!0},onlyBack:{type:Boolean,default:!1},title:{type:String}},methods:{onClickLeft:function(){this.onlyBack||o["a"].closeWebview(),this.$router.go(-1)}}},c=s,r=(i("a7d6"),i("c701")),d=Object(r["a"])(c,a,n,!1,null,"2f4d49ad",null);e["a"]=d.exports},f257:function(t,e,i){},f9f1:function(t,e,i){}}]);