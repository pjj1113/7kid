(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bc7cc47"],{4413:function(t,i,o){"use strict";o.r(i);var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"group"},[o("nav-bar",{attrs:{title:t.$t("pollingPosition.positionDetail")}},[o("template",{slot:"left"},[o("van-icon",{attrs:{name:"arrow-left"},on:{click:function(i){return i.stopPropagation(),t.onClickLeft(i)}}})],1),t.isEdit?o("template",{slot:"right"},[o("span",{on:{click:function(i){return i.stopPropagation(),t.onClickRight(i)}}},[t._v(t._s(t.$t("pollingPosition.complete")))])]):t._e()],2),o("div",{staticClass:"content"},[o("div",{staticClass:"positionName"},[o("van-field",{attrs:{label:t.$t("pollingPosition.pointName"),placeholder:t.$t("pollingPosition.namePlaceholder"),"input-align":"right",readonly:!t.isEdit,maxlength:"20","clear-trigger":"always",clearable:!0},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1),o("div",{staticClass:"headerView"},[o("span",[t._v(t._s(t.$t("pollingPosition.positionPatrolItem")))])]),t._l(t.dataList,(function(i,e){return o("van-collapse",{key:e,attrs:{accordion:""},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[o("van-collapse-item",{directives:[{name:"show",rawName:"v-show",value:t.getGroupShow(i),expression:"getGroupShow(item)"}],attrs:{name:e,icon:t.activeName===e?"arrow-down":"arrow"},scopedSlots:t._u([{key:"title",fn:function(){return[o("div",[o("span",{staticClass:"titleClass"},[t._v(t._s(i.groupName)+"（"+t._s(i.patrolCategories.length)+"）")])])]},proxy:!0},{key:"right-icon",fn:function(){return[t.isEdit?o("button",{directives:[{name:"permission",rawName:"v-permission",value:["patrol-item-view"],expression:"['patrol-item-view']"}],staticClass:"addBtn",on:{click:function(o){return o.stopPropagation(),t.addBtnAction(i)}}},[t._v(" "+t._s(t.$t("pollingPosition.addItem"))+" ")]):o("div")]},proxy:!0},{key:"default",fn:function(){return t._l(i.patrolCategories,(function(i,n){return o("div",{key:n,staticClass:"extendView"},[o("div",{staticClass:"listTitleView"},[o("span",{staticClass:"listTitle"},[t._v(t._s(i.patrolCategoryName)+"（"+t._s(i.patrolItems.length)+"）")]),t.isEdit?o("van-icon",{attrs:{name:"clear",color:"#F74931",size:"17"},on:{click:function(i){return t.clearCate(e,n)}}}):t._e()],1),o("van-divider"),t._l(i.patrolItems,(function(i,a){return o("div",{key:a,staticClass:"listContentView"},[o("div",{staticClass:"listContentItem"},[o("span",{staticClass:"listTitle"},[t._v(t._s(i.itemName))]),t.isEdit?o("van-icon",{attrs:{name:"clear",color:"#F74931",size:"17"},on:{click:function(i){return t.clearItem(e,n,a)}}}):t._e()],1),o("van-divider")],1)}))],2)}))},proxy:!0}],null,!0)})],1)}))],2),o("div",{directives:[{name:"permission",rawName:"v-permission",value:["patrol-point-manage"],expression:"['patrol-point-manage']"}],staticClass:"bottom"},[o("div",{staticClass:"delDiv"},[o("div",{staticClass:"delItem",on:{click:t.delClick}},[o("van-icon",{style:{paddingTop:"8px"},attrs:{name:"delete",size:"30",color:"#333333"}}),o("span",[t._v(t._s(t.$t("pollingPosition.delete")))])],1)]),o("div",{staticClass:"editDiv"},[o("div",{staticClass:"editItem",on:{click:t.editClick}},[o("van-icon",{style:{paddingTop:"8px"},attrs:{name:"edit",size:"30",color:t.isEdit?"#48D4C6":"#333333"}}),o("span",{class:{editColor:t.isEdit}},[t._v(t._s(t.$t("pollingPosition.edit")))])],1)])]),o("van-popup",{style:{height:"100%",width:"100%",overflow:"hidden",background:"#F9F9FA"},model:{value:t.selectOptionShow,callback:function(i){t.selectOptionShow=i},expression:"selectOptionShow"}},[o("chooseOption",{on:{onChooseSure:t.onChooseSure,onClickOptionLeft:t.onClickOptionLeft}})],1)],1)},n=[],a=(o("72b3"),o("989e"),o("270f"),o("7336"),o("b08c")),s=(o("3f27"),o("8048")),l=o("da1d"),c=o("96a0"),r=o("0319"),p=o("ed08"),d={name:"polling-management-positionDetail",components:{NavBar:l["a"],chooseOption:c["a"]},methods:{onClickLeft:function(){var t=this;this.isEdit?s["a"].confirm({message:this.$t("pollingPosition.backMessage"),confirmButtonText:this.$t("pollingPosition.backConfirm"),confirmButtonColor:"#48D4C6",cancelButtonText:this.$t("pollingPosition.backCancel"),cancelButtonColor:"#999999"}).then((function(){t.$router.go(-1)})).catch((function(){})):this.$router.go(-1)},onClickRight:function(){var t=this,i=[];this.dataList.forEach((function(t){if(t.patrolCategories.length>0){var o={groupId:0,itemIds:[]};o.groupId=t.groupId;var e=[];t.patrolCategories.forEach((function(t){t.patrolItems.forEach((function(t){e.push(t.id)}))})),o.itemIds=e,i.push(o)}})),0!=i.length?r["a"].updatePosition({pointName:this.value,pointInfo:i,pointId:this.pointId}).then((function(i){"common-0001"===i.code&&(t.isEdit=!1,t.getPositionDetail(),Object(a["a"])(t.$t("pollingPosition.editSuccessToast")))})):Object(a["a"])(this.$t("pollingPosition.nullPatrolEntryToast"))},addBtnAction:function(t){console.log(t),this.selectAddItem=t,this.selectOptionShow=!0},onClickOptionLeft:function(){this.selectOptionShow=!1},clearCate:function(t,i){var o=Object(p["a"])(this.dataList);o[t].patrolCategories.splice(i,1),this.dataList=o},clearItem:function(t,i,o){var e=Object(p["a"])(this.dataList);e[t].patrolCategories[i].patrolItems.splice(o,1),0==e[t].patrolCategories[i].patrolItems.length&&e[t].patrolCategories.splice(i,1),this.dataList=e},onChooseSure:function(t){var i=this;console.log(t),console.log(this.selectAddItem),this.selectOptionShow=!1;var o=Object(p["a"])(t),e=o.itemSelect,n=function(){var t=e[0],o=t.origItemId,n=!1;if(i.selectAddItem.patrolCategories.forEach((function(i){if(i.patrolCategoryId===o){n=!0;var a=!1;i.patrolItems.forEach((function(i){i.id===t.id&&(a=!0)})),a||i.patrolItems.push(t),e.splice(0,1)}})),!n){for(var a={patrolCategoryId:t.origItemId,patrolCategoryName:t.origItemCateName,itemNum:t.origItemItemNum,patrolItems:[]},s=e.length;s>0;s--){var l=e[s-1];l.origItemId===a.patrolCategoryId&&(a.patrolItems.splice(0,0,l),e.splice(s-1,1))}i.selectAddItem.patrolCategories.push(a)}};while(e.length>0)n();console.log(this.selectAddItem),t.topSelect=[],t.itemSelect=[]},editClick:function(){this.isEdit||(this.isEdit=!0)},delClick:function(){var t=this;s["a"].confirm({message:this.$t("pollingPosition.delMessage"),confirmButtonText:this.$t("pollingPosition.delConfirm"),confirmButtonColor:"#48D4C6",cancelButtonText:this.$t("pollingPosition.delCancel"),cancelButtonColor:"#999999"}).then((function(){t.delPosition()})).catch((function(){}))},getPositionDetail:function(){var t=this;r["a"].getPositionDetail({id:this.pointId}).then((function(i){"common-0001"===i.code&&(t.resData=i.data,t.value=t.resData.pointName,t.dataList=t.resData.patrolGroups)}))},delPosition:function(){var t=this;r["a"].delPosition({pointId:this.pointId}).then((function(i){"common-0001"===i.code&&(t.$router.go(-1),Object(a["a"])(t.$t("pollingPosition.delPositionToast")))}))},getGroupShow:function(t){return!!this.isEdit||0!=t.patrolCategories.length}},mounted:function(){this.getPositionDetail()},data:function(){return{pointId:this.$route.query.pointId,isEdit:!1,value:"点位",activeName:-1,dataList:[],resData:"",selectAddItem:{},selectOptionShow:!1}}},u=d,m=(o("7496"),o("c701")),h=Object(m["a"])(u,e,n,!1,null,"789cc926",null);i["default"]=h.exports},7496:function(t,i,o){"use strict";o("ab81")},ab81:function(t,i,o){}}]);