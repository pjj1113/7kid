(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a77eb20"],{"0386":function(t,e,a){},"078d":function(t,e,a){},"841e":function(t,e,a){"use strict";a("078d")},"989e":function(t,e,a){"use strict";var i=a("a09b"),r=a("0119"),s=a("0296"),n=a("c3a3"),o=a("6050"),h=a("28ea"),d=a("8863"),p=a("4d7f"),l=a("c1e5"),c=p("splice"),g=l("splice",{ACCESSORS:!0,0:0,1:2}),u=Math.max,f=Math.min,v=9007199254740991,w="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!c||!g},{splice:function(t,e){var a,i,p,l,c,g,m=o(this),b=n(m.length),x=r(t,b),y=arguments.length;if(0===y?a=i=0:1===y?(a=0,i=b-x):(a=y-2,i=f(u(s(e),0),b-x)),b+a-i>v)throw TypeError(w);for(p=h(m,i),l=0;l<i;l++)c=x+l,c in m&&d(p,l,m[c]);if(p.length=i,a<i){for(l=x;l<b-i;l++)c=l+i,g=l+a,c in m?m[g]=m[c]:delete m[g];for(l=b;l>b-i+a;l--)delete m[l-1]}else if(a>i)for(l=b-i;l>x;l--)c=l+i-1,g=l+a-1,c in m?m[g]=m[c]:delete m[g];for(l=0;l<a;l++)m[l+x]=arguments[l+2];return m.length=b-i+a,p}})},b176:function(t,e,a){(function(t){a("a543"),a("cca2"),a("b131"),a("989e"),a("1d7a"),a("0bd5"),a("79a8");var e=a("c92d");(function(t){function a(t,a,i){if(!i[0]||"object"==e(i[0]))return a.init.apply(t,i);if(a[i[0]])return a[i[0]].apply(t,Array.prototype.slice.call(i,1));throw c(i[0]+" is not a method or property")}function i(t,e,a,i){return{css:{position:"absolute",top:t,left:e,overflow:i||"hidden",zIndex:a||"auto"}}}function r(t,e,a,i,r){var n=1-r,o=n*n*n,h=r*r*r;return s(Math.round(o*t.x+3*r*n*n*e.x+3*r*r*n*a.x+h*i.x),Math.round(o*t.y+3*r*n*n*e.y+3*r*r*n*a.y+h*i.y))}function s(t,e){return{x:t,y:e}}function n(t,e,a){return u&&a?" translate3d("+t+"px,"+e+"px, 0px) ":" translate("+t+"px, "+e+"px) "}function o(t){return" rotate("+t+"deg) "}function h(t,e){return Object.prototype.hasOwnProperty.call(e,t)}function d(){for(var t=["Moz","Webkit","Khtml","O","ms"],e=t.length,a="";e--;)t[e]+"Transform"in document.body.style&&(a="-"+t[e].toLowerCase()+"-");return a}function p(t,e,a,i,r){var n,o=[];if("-webkit-"==v){for(n=0;n<r;n++)o.push("color-stop("+i[n][0]+", "+i[n][1]+")");t.css({"background-image":"-webkit-gradient(linear, "+e.x+"% "+e.y+"%,"+a.x+"% "+a.y+"%, "+o.join(",")+" )"})}else{e={x:e.x/100*t.width(),y:e.y/100*t.height()},a={x:a.x/100*t.width(),y:a.y/100*t.height()};var h=a.x-e.x;n=a.y-e.y;var d=Math.atan2(n,h),p=d-Math.PI/2,l=(p=Math.abs(t.width()*Math.sin(p))+Math.abs(t.height()*Math.cos(p)),h=Math.sqrt(n*n+h*h),a=s(a.x<e.x?t.width():0,a.y<e.y?t.height():0),Math.tan(d));for(n=-1/l,l=(n*a.x-a.y-l*e.x+e.y)/(n-l),a=n*l-n*a.x+a.y,e=Math.sqrt(Math.pow(l-e.x,2)+Math.pow(a-e.y,2)),n=0;n<r;n++)o.push(" "+i[n][1]+" "+100*(e+h*i[n][0])/p+"%");t.css({"background-image":v+"linear-gradient("+-d+"rad,"+o.join(",")+")"})}}function l(e,a,i){return e=t.Event(e),a.trigger(e,i),e.isDefaultPrevented()?"prevented":e.isPropagationStopped()?"stopped":""}function c(t){function e(t){this.name="TurnJsError",this.message=t}return e.prototype=Error(),e.prototype.constructor=e,new e(t)}function g(t){var e={top:0,left:0};do{e.left+=t.offsetLeft,e.top+=t.offsetTop}while(t=t.offsetParent);return e}var u,f,v="",w=Math.PI,m=w/2,b="ontouchstart"in window,x=b?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},y={backward:["bl","tl"],forward:["br","tr"],all:"tl bl tr br l r".split(" ")},P=["single","double"],_=["ltr","rtl"],M={acceleration:!0,display:"double",duration:600,page:1,gradients:!0,turnCorners:"bl,br",when:null},z={cornerSize:200},j={init:function(e){var a,i;u="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style,f=!(a=/AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))||534.3<parseFloat(a[1]),v=d(),a=0;var r=this.data(),s=this.children();e=t.extend({width:this.width(),height:this.height(),direction:this.attr("dir")||this.css("direction")||"ltr"},M,e);if(r.opts=e,r.pageObjs={},r.pages={},r.pageWrap={},r.pageZoom={},r.pagePlace={},r.pageMv=[],r.zoom=1,r.totalPages=e.pages||0,r.eventHandlers={touchStart:t.proxy(j._touchStart,this),touchMove:t.proxy(j._touchMove,this),touchEnd:t.proxy(j._touchEnd,this),start:t.proxy(j._eventStart,this)},e.when)for(i in e.when)h(i,e.when)&&this.bind(i,e.when[i]);for(this.css({position:"relative",width:e.width,height:e.height}),this.turn("display",e.display),""!==e.direction&&this.turn("direction",e.direction),u&&!b&&e.acceleration&&this.transform(n(0,0,!0)),i=0;i<s.length;i++)"1"!=t(s[i]).attr("ignore")&&this.turn("addPage",s[i],++a);return t(this).bind(x.down,r.eventHandlers.touchStart).bind("end",j._eventEnd).bind("pressed",j._eventPressed).bind("released",j._eventReleased).bind("flip",j._flip),t(this).parent().bind("start",r.eventHandlers.start),t(document).bind(x.move,r.eventHandlers.touchMove).bind(x.up,r.eventHandlers.touchEnd),this.turn("page",e.page),r.done=!0,this},addPage:function(e,a){var i,r=!1,s=this.data(),n=s.totalPages+1;if(s.destroying)return!1;if((i=/\bp([0-9]+)\b/.exec(t(e).attr("class")))&&(a=parseInt(i[1],10)),a){if(a==n)r=!0;else if(a>n)throw c('Page "'+a+'" cannot be inserted')}else a=n,r=!0;return 1<=a&&a<=n&&(i="double"==s.display?a%2?" odd":" even":"",s.done&&this.turn("stop"),a in s.pageObjs&&j._movePages.call(this,a,1),r&&(s.totalPages=n),s.pageObjs[a]=t(e).css({float:"left"}).addClass("page p"+a+i),-1!=navigator.userAgent.indexOf("MSIE 9.0")&&s.pageObjs[a].hasClass("hard")&&s.pageObjs[a].removeClass("hard"),j._addPage.call(this,a),j._removeFromDOM.call(this)),this},_addPage:function(e){var a=this.data(),i=a.pageObjs[e];if(i)if(j._necessPage.call(this,e)){if(!a.pageWrap[e]){a.pageWrap[e]=t("<div/>",{class:"page-wrapper",page:e,css:{position:"absolute",overflow:"hidden"}}),this.append(a.pageWrap[e]),a.pagePlace[e]||(a.pagePlace[e]=e,a.pageObjs[e].appendTo(a.pageWrap[e]));var r=j._pageSize.call(this,e,!0);i.css({width:r.width,height:r.height}),a.pageWrap[e].css(r)}a.pagePlace[e]==e&&j._makeFlip.call(this,e)}else a.pagePlace[e]=0,a.pageObjs[e]&&a.pageObjs[e].remove()},hasPage:function(t){return h(t,this.data().pageObjs)},center:function(e){var a=this.data(),i=t(this).turn("size"),r=0;return a.noCenter||("double"==a.display&&(e=this.turn("view",e||a.tpage||a.page),"ltr"==a.direction?e[0]?e[1]||(r+=i.width/4):r-=i.width/4:e[0]?e[1]||(r-=i.width/4):r+=i.width/4),t(this).css({marginLeft:r})),this},destroy:function(){var e=this,a=this.data(),i="end first flip last pressed released start turning turned zooming missing".split(" ");if("prevented"!=l("destroying",this)){for(a.destroying=!0,t.each(i,(function(t,a){e.unbind(a)})),this.parent().unbind("start",a.eventHandlers.start),t(document).unbind(x.move,a.eventHandlers.touchMove).unbind(x.up,a.eventHandlers.touchEnd);0!==a.totalPages;)this.turn("removePage",a.totalPages);return a.fparent&&a.fparent.remove(),a.shadow&&a.shadow.remove(),this.removeData(),a=null,this}},is:function(){return"object"==e(this.data().pages)},zoom:function(e){var a=this.data();if("number"==typeof e){if(.001>e||100<e)throw c(e+" is not a value for zoom");if("prevented"==l("zooming",this,[e,a.zoom]))return this;var i=this.turn("size"),r=this.turn("view"),s=1/a.zoom,n=Math.round(i.width*s*e);i=Math.round(i.height*s*e);for(a.zoom=e,t(this).turn("stop").turn("size",n,i),a.opts.autoCenter&&this.turn("center"),j._updateShadow.call(this),e=0;e<r.length;e++)r[e]&&a.pageZoom[r[e]]!=a.zoom&&(this.trigger("zoomed",[r[e],r,a.pageZoom[r[e]],a.zoom]),a.pageZoom[r[e]]=a.zoom);return this}return a.zoom},_pageSize:function(t,e){var a=this.data(),i={};if("single"==a.display)i.width=this.width(),i.height=this.height(),e&&(i.top=0,i.left=0,i.right="auto");else{var r=this.width()/2,s=this.height();if(a.pageObjs[t].hasClass("own-size")?(i.width=a.pageObjs[t].width(),i.height=a.pageObjs[t].height()):(i.width=r,i.height=s),e){var n=t%2;i.top=(s-i.height)/2,"ltr"==a.direction?(i[n?"right":"left"]=r-i.width,i[n?"left":"right"]="auto"):(i[n?"left":"right"]=r-i.width,i[n?"right":"left"]="auto")}}return i},_makeFlip:function(t){var e=this.data();if(!e.pages[t]&&e.pagePlace[t]==t){var a="single"==e.display,i=t%2;e.pages[t]=e.pageObjs[t].css(j._pageSize.call(this,t)).flip({page:t,next:i||a?t+1:t-1,turn:this}).flip("disable",e.disabled),j._setPageLoc.call(this,t),e.pageZoom[t]=e.zoom}return e.pages[t]},_makeRange:function(){var t,e;if(!(1>this.data().totalPages))for(e=this.turn("range"),t=e[0];t<=e[1];t++)j._addPage.call(this,t)},range:function(t){var e,a,i,r=this.data();t=t||r.tpage||r.page||1;if(i=j._view.call(this,t),1>t||t>r.totalPages)throw c('"'+t+'" is not a valid page');return i[1]=i[1]||i[0],1<=i[0]&&i[1]<=r.totalPages?(t=Math.floor(2),r.totalPages-i[1]>i[0]?(e=Math.min(i[0]-1,t),a=2*t-e):(a=Math.min(r.totalPages-i[1],t),e=2*t-a)):a=e=5,[Math.max(1,i[0]-e),Math.min(r.totalPages,i[1]+a)]},_necessPage:function(t){if(0===t)return!0;var e=this.turn("range");return this.data().pageObjs[t].hasClass("fixed")||t>=e[0]&&t<=e[1]},_removeFromDOM:function(){var t,e=this.data();for(t in e.pageWrap)h(t,e.pageWrap)&&!j._necessPage.call(this,t)&&j._removePageFromDOM.call(this,t)},_removePageFromDOM:function(t){var e=this.data();if(e.pages[t]){var a=e.pages[t].data();O._moveFoldingPage.call(e.pages[t],!1),a.f&&a.f.fwrapper&&a.f.fwrapper.remove(),e.pages[t].removeData(),e.pages[t].remove(),delete e.pages[t]}e.pageObjs[t]&&e.pageObjs[t].remove(),e.pageWrap[t]&&(e.pageWrap[t].remove(),delete e.pageWrap[t]),j._removeMv.call(this,t),delete e.pagePlace[t],delete e.pageZoom[t]},removePage:function(t){var e=this.data();if("*"==t)for(;0!==e.totalPages;)this.turn("removePage",e.totalPages);else{if(1>t||t>e.totalPages)throw c("The page "+t+" doesn't exist");e.pageObjs[t]&&(this.turn("stop"),j._removePageFromDOM.call(this,t),delete e.pageObjs[t]),j._movePages.call(this,t,-1),e.totalPages-=1,e.page>e.totalPages?(e.page=null,j._fitPage.call(this,e.totalPages)):(j._makeRange.call(this),this.turn("update"))}return this},_movePages:function(t,e){var a,i=this,r=this.data(),s="single"==r.display,n=function(t){var a=t+e,n=a%2,o=n?" odd ":" even ";r.pageObjs[t]&&(r.pageObjs[a]=r.pageObjs[t].removeClass("p"+t+" odd even").addClass("p"+a+o)),r.pagePlace[t]&&r.pageWrap[t]&&(r.pagePlace[a]=a,r.pageWrap[a]=r.pageObjs[a].hasClass("fixed")?r.pageWrap[t].attr("page",a):r.pageWrap[t].css(j._pageSize.call(i,a,!0)).attr("page",a),r.pages[t]&&(r.pages[a]=r.pages[t].flip("options",{page:a,next:s||n?a+1:a-1})),e&&(delete r.pages[t],delete r.pagePlace[t],delete r.pageZoom[t],delete r.pageObjs[t],delete r.pageWrap[t]))};if(0<e)for(a=r.totalPages;a>=t;a--)n(a);else for(a=t;a<=r.totalPages;a++)n(a)},display:function(e){var a=this.data(),i=a.display;if(void 0===e)return i;if(-1==t.inArray(e,P))throw c('"'+e+'" is not a value for display');switch(e){case"single":a.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),a.pageObjs[0]=t("<div />",{class:"page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)),this.addClass("shadow");break;case"double":a.pageObjs[0]&&(this.turn("stop").css({overflow:""}),a.pageObjs[0].remove(),delete a.pageObjs[0]),this.removeClass("shadow")}return a.display=e,i&&(e=this.turn("size"),j._movePages.call(this,1,0),this.turn("size",e.width,e.height).turn("update")),this},direction:function(e){var a=this.data();if(void 0===e)return a.direction;if(e=e.toLowerCase(),-1==t.inArray(e,_))throw c('"'+e+'" is not a value for direction');return"rtl"==e&&t(this).attr("dir","ltr").css({direction:"ltr"}),a.direction=e,a.done&&this.turn("size",t(this).width(),t(this).height()),this},animating:function(){return 0<this.data().pageMv.length},corner:function(){var t,e,a=this.data();for(e in a.pages)if(h(e,a.pages)&&(t=a.pages[e].flip("corner")))return t;return!1},data:function(){return this.data()},disable:function(e){var a,i=this.data(),r=this.turn("view");for(a in i.disabled=void 0===e||!0===e,i.pages)h(a,i.pages)&&i.pages[a].flip("disable",!!i.disabled||-1==t.inArray(parseInt(a,10),r));return this},disabled:function(t){return void 0===t?!0===this.data().disabled:this.turn("disable",t)},size:function(t,e){if(void 0===t||void 0===e)return{width:this.width(),height:this.height()};this.turn("stop");var a,i,r=this.data();for(a in i="double"==r.display?t/2:t,this.css({width:t,height:e}),r.pageObjs[0]&&r.pageObjs[0].css({width:i,height:e}),r.pageWrap)h(a,r.pageWrap)&&(i=j._pageSize.call(this,a,!0),r.pageObjs[a].css({width:i.width,height:i.height}),r.pageWrap[a].css(i),r.pages[a]&&r.pages[a].css({width:i.width,height:i.height}));return this.turn("resize"),this},resize:function(){var t,e=this.data();for(e.pages[0]&&(e.pageWrap[0].css({left:-this.width()}),e.pages[0].flip("resize",!0)),t=1;t<=e.totalPages;t++)e.pages[t]&&e.pages[t].flip("resize",!0);j._updateShadow.call(this),e.opts.autoCenter&&this.turn("center")},_removeMv:function(t){var e,a=this.data();for(e=0;e<a.pageMv.length;e++)if(a.pageMv[e]==t)return a.pageMv.splice(e,1),!0;return!1},_addMv:function(t){var e=this.data();j._removeMv.call(this,t),e.pageMv.push(t)},_view:function(t){var e=this.data();t=t||e.page;return"double"==e.display?t%2?[t-1,t]:[t,t+1]:[t]},view:function(t){var e=this.data();t=j._view.call(this,t);return"double"==e.display?[0<t[0]?t[0]:0,t[1]<=e.totalPages?t[1]:0]:[0<t[0]&&t[0]<=e.totalPages?t[0]:0]},stop:function(t,e){if(this.turn("animating")){var a,i,r,s=this.data();for(s.tpage&&(s.page=s.tpage,delete s.tpage),a=0;a<s.pageMv.length;a++)s.pageMv[a]&&s.pageMv[a]!==t&&(r=s.pages[s.pageMv[a]],i=r.data().f.opts,r.flip("hideFoldedPage",e),e||O._moveFoldingPage.call(r,!1),i.force&&(i.next=0===i.page%2?i.page-1:i.page+1,delete i.force))}return this.turn("update"),this},pages:function(t){var e=this.data();if(t){if(t<e.totalPages)for(var a=e.totalPages;a>t;a--)this.turn("removePage",a);return e.totalPages=t,j._fitPage.call(this,e.page),this}return e.totalPages},_missing:function(t){var e=this.data();if(!(1>e.totalPages)){var a=this.turn("range",t),i=[];for(t=a[0];t<=a[1];t++)e.pageObjs[t]||i.push(t);0<i.length&&this.trigger("missing",[i])}},_fitPage:function(t){var e=this.data(),a=this.turn("view",t);if(j._missing.call(this,t),e.pageObjs[t]){e.page=t,this.turn("stop");for(var i=0;i<a.length;i++)a[i]&&e.pageZoom[a[i]]!=e.zoom&&(this.trigger("zoomed",[a[i],a,e.pageZoom[a[i]],e.zoom]),e.pageZoom[a[i]]=e.zoom);j._removeFromDOM.call(this),j._makeRange.call(this),j._updateShadow.call(this),this.trigger("turned",[t,a]),this.turn("update"),e.opts.autoCenter&&this.turn("center")}},_turnPage:function(e){var a,i,r=this.data(),s=r.pagePlace[e],n=this.turn("view"),o=this.turn("view",e);if(r.page!=e){var h=r.page;if("prevented"==l("turning",this,[e,o]))return void(h==r.page&&-1!=t.inArray(s,r.pageMv)&&r.pages[s].flip("hideFoldedPage",!0));-1!=t.inArray(1,o)&&this.trigger("first"),-1!=t.inArray(r.totalPages,o)&&this.trigger("last")}"single"==r.display?(a=n[0],i=o[0]):n[1]&&e>n[1]?(a=n[1],i=o[0]):n[0]&&e<n[0]&&(a=n[0],i=o[1]),s=r.opts.turnCorners.split(","),n=r.pages[a].data().f,o=n.opts,h=n.point,j._missing.call(this,e),r.pageObjs[e]&&(this.turn("stop"),r.page=e,j._makeRange.call(this),r.tpage=i,o.next!=i&&(o.next=i,o.force=!0),this.turn("update"),n.point=h,"hard"==n.effect?"ltr"==r.direction?r.pages[a].flip("turnPage",e>a?"r":"l"):r.pages[a].flip("turnPage",e>a?"l":"r"):"ltr"==r.direction?r.pages[a].flip("turnPage",s[e>a?1:0]):r.pages[a].flip("turnPage",s[e>a?0:1]))},page:function(e){var a=this.data();if(void 0===e)return a.page;if(!a.disabled&&!a.destroying){if(e=parseInt(e,10),0<e&&e<=a.totalPages)return e!=a.page&&(a.done&&-1==t.inArray(e,this.turn("view"))?j._turnPage.call(this,e):j._fitPage.call(this,e)),this;throw c("The page "+e+" does not exist")}},next:function(){return this.turn("page",Math.min(this.data().totalPages,j._view.call(this,this.data().page).pop()+1))},previous:function(){return this.turn("page",Math.max(1,j._view.call(this,this.data().page).shift()-1))},peel:function(t,e){var a=this.data(),i=this.turn("view");e=void 0===e||!0===e;return!1===t?this.turn("stop",null,e):"single"==a.display?a.pages[a.page].flip("peel",t,e):(i="ltr"==a.direction?-1!=t.indexOf("l")?i[0]:i[1]:-1!=t.indexOf("l")?i[1]:i[0],a.pages[i]&&a.pages[i].flip("peel",t,e)),this},_addMotionPage:function(){var e=t(this).data().f.opts,a=e.turn;a.data(),j._addMv.call(a,e.page)},_eventStart:function(t,e,a){var i=e.turn.data(),r=i.pageZoom[e.page];t.isDefaultPrevented()||(r&&r!=i.zoom&&(e.turn.trigger("zoomed",[e.page,e.turn.turn("view",e.page),r,i.zoom]),i.pageZoom[e.page]=i.zoom),"single"==i.display&&a&&("l"==a.charAt(1)&&"ltr"==i.direction||"r"==a.charAt(1)&&"rtl"==i.direction?(e.next=e.next<e.page?e.next:e.page-1,e.force=!0):e.next=e.next>e.page?e.next:e.page+1),j._addMotionPage.call(t.target)),j._updateShadow.call(e.turn)},_eventEnd:function(e,a,i){t(e.target).data();e=a.turn;var r=e.data();i?(i=r.tpage||r.page,(i==a.next||i==a.page)&&(delete r.tpage,j._fitPage.call(e,i||a.next,!0))):(j._removeMv.call(e,a.page),j._updateShadow.call(e),e.turn("update"))},_eventPressed:function(e){e=t(e.target).data().f;var a=e.opts.turn;return a.data().mouseAction=!0,a.turn("update"),e.time=(new Date).getTime()},_eventReleased:function(e,a){var i;i=t(e.target);var r=i.data().f,s=r.opts.turn,n=s.data();i="single"==n.display?"br"==a.corner||"tr"==a.corner?a.x<i.width()/2:a.x>i.width()/2:0>a.x||a.x>i.width(),(200>(new Date).getTime()-r.time||i)&&(e.preventDefault(),j._turnPage.call(s,r.opts.next)),n.mouseAction=!1},_flip:function(e){e.stopPropagation(),e=t(e.target).data().f.opts,e.turn.trigger("turn",[e.next]),e.turn.data().opts.autoCenter&&e.turn.turn("center",e.next)},_touchStart:function(t){if("VIDEO"==t.target.nodeName)return!1;var e,a=this.data();for(e in a.pages)if(h(e,a.pages)&&!1===O._eventStart.apply(a.pages[e],arguments))return!1},_touchMove:function(){var t,e=this.data();for(t in e.pages)h(t,e.pages)&&O._eventMove.apply(e.pages[t],arguments)},_touchEnd:function(){var t,e=this.data();for(t in e.pages)h(t,e.pages)&&O._eventEnd.apply(e.pages[t],arguments)},calculateZ:function(t){var e,a,i,r,s=this,n=this.data();e=this.turn("view");var o=e[0]||e[1],h=t.length-1,d={pageZ:{},partZ:{},pageV:{}},p=function(t){t=s.turn("view",t),t[0]&&(d.pageV[t[0]]=!0),t[1]&&(d.pageV[t[1]]=!0)};for(e=0;e<=h;e++)a=t[e],i=n.pages[a].data().f.opts.next,r=n.pagePlace[a],p(a),p(i),a=n.pagePlace[i]==i?i:a,d.pageZ[a]=n.totalPages-Math.abs(o-a),d.partZ[r]=2*n.totalPages-h+e;return d},update:function(){var e,a=this.data();if(this.turn("animating")&&0!==a.pageMv[0]){var i,r=this.turn("calculateZ",a.pageMv),s=this.turn("corner"),n=this.turn("view"),o=this.turn("view",a.tpage);for(e in a.pageWrap)h(e,a.pageWrap)&&(i=a.pageObjs[e].hasClass("fixed"),a.pageWrap[e].css({display:r.pageV[e]||i?"":"none",zIndex:(a.pageObjs[e].hasClass("hard")?r.partZ[e]:r.pageZ[e])||(i?-1:0)}),i=a.pages[e])&&(i.flip("z",r.partZ[e]||null),r.pageV[e]&&i.flip("resize"),a.tpage?i.flip("hover",!1).flip("disable",-1==t.inArray(parseInt(e,10),a.pageMv)&&e!=o[0]&&e!=o[1]):i.flip("hover",!1===s).flip("disable",e!=n[0]&&e!=n[1]))}else for(e in a.pageWrap)h(e,a.pageWrap)&&(r=j._setPageLoc.call(this,e),a.pages[e]&&a.pages[e].flip("disable",a.disabled||1!=r).flip("hover",!0).flip("z",null));return this},_updateShadow:function(){var e,a,r=this.data(),s=this.width(),n=this.height(),o="single"==r.display?s:s/2;e=this.turn("view"),r.shadow||(r.shadow=t("<div />",{class:"shadow",css:i(0,0,0).css}).appendTo(this));for(var h=0;h<r.pageMv.length&&e[0]&&e[1];h++)e=this.turn("view",r.pages[r.pageMv[h]].data().f.opts.next),a=this.turn("view",r.pageMv[h]),e[0]=e[0]&&a[0],e[1]=e[1]&&a[1];switch(e[0]?e[1]?3:"ltr"==r.direction?2:1:"ltr"==r.direction?1:2){case 1:r.shadow.css({width:o,height:n,top:0,left:o});break;case 2:r.shadow.css({width:o,height:n,top:0,left:0});break;case 3:r.shadow.css({width:s,height:n,top:0,left:0})}},_setPageLoc:function(t){var e=this.data(),a=this.turn("view"),i=0;if(t==a[0]||t==a[1]?i=1:("single"==e.display&&t==a[0]+1||"double"==e.display&&t==a[0]-2||t==a[1]+2)&&(i=2),!this.turn("animating"))switch(i){case 1:e.pageWrap[t].css({zIndex:e.totalPages,display:""});break;case 2:e.pageWrap[t].css({zIndex:e.totalPages-1,display:""});break;case 0:e.pageWrap[t].css({zIndex:0,display:e.pageObjs[t].hasClass("fixed")?"":"none"})}return i},options:function(e){if(void 0===e)return this.data().opts;var a=this.data();if(t.extend(a.opts,e),e.pages&&this.turn("pages",e.pages),e.page&&this.turn("page",e.page),e.display&&this.turn("display",e.display),e.direction&&this.turn("direction",e.direction),e.width&&e.height&&this.turn("size",e.width,e.height),e.when)for(var i in e.when)h(i,e.when)&&this.unbind(i).bind(i,e.when[i]);return this},version:function(){return"4.1.0"}},O={init:function(t){return this.data({f:{disabled:!1,hover:!1,effect:this.hasClass("hard")?"hard":"sheet"}}),this.flip("options",t),O._addPageWrapper.call(this),this},setData:function(e){var a=this.data();return a.f=t.extend(a.f,e),this},options:function(e){var a=this.data().f;return e?(O.setData.call(this,{opts:t.extend({},a.opts||z,e)}),this):a.opts},z:function(t){var e=this.data().f;return e.opts["z-index"]=t,e.fwrapper&&e.fwrapper.css({zIndex:t||parseInt(e.parent.css("z-index"),10)||0}),this},_cAllowed:function(){var t=this.data().f,e=t.opts.page,a=t.opts.turn.data(),i=e%2;return"hard"==t.effect?"ltr"==a.direction?[i?"r":"l"]:[i?"l":"r"]:"single"==a.display?1==e?"ltr"==a.direction?y.forward:y.backward:e==a.totalPages?"ltr"==a.direction?y.backward:y.forward:y.all:"ltr"==a.direction?y[i?"forward":"backward"]:y[i?"backward":"forward"]},_cornerActivated:function(e){var a=this.data().f,i=this.width(),r=this.height(),s=(e={x:e.x,y:e.y,corner:""},a.opts.cornerSize);if(0>=e.x||0>=e.y||e.x>=i||e.y>=r)return!1;var n=O._cAllowed.call(this);switch(a.effect){case"hard":if(e.x>i-s)e.corner="r";else{if(!(e.x<s))return!1;e.corner="l"}break;case"sheet":if(e.y<s)e.corner+="t";else{if(!(e.y>=r-s))return!1;e.corner+="b"}if(e.x<=s)e.corner+="l";else{if(!(e.x>=i-s))return!1;e.corner+="r"}}return!(!e.corner||-1==t.inArray(e.corner,n))&&e},_isIArea:function(t){var e=this.data().f.parent.offset();t=b&&t.originalEvent?t.originalEvent.touches[0]:t;return O._cornerActivated.call(this,{x:t.pageX-e.left,y:t.pageY-e.top})},_c:function(t,e){switch(e=e||0,t){case"tl":return s(e,e);case"tr":return s(this.width()-e,e);case"bl":return s(e,this.height()-e);case"br":return s(this.width()-e,this.height()-e);case"l":return s(e,0);case"r":return s(this.width()-e,0)}},_c2:function(t){switch(t){case"tl":return s(2*this.width(),0);case"tr":return s(-this.width(),0);case"bl":return s(2*this.width(),this.height());case"br":return s(-this.width(),this.height());case"l":return s(2*this.width(),0);case"r":return s(-this.width(),0)}},_foldingPage:function(){var t=this.data().f;if(t){var e=t.opts;if(e.turn)return t=e.turn.data(),"single"==t.display?1<e.next||1<e.page?t.pageObjs[0]:null:t.pageObjs[e.next]}},_backGradient:function(){var e=this.data().f,a=e.opts.turn.data();return(a=a.opts.gradients&&("single"==a.display||2!=e.opts.page&&e.opts.page!=a.totalPages-1))&&!e.bshadow&&(e.bshadow=t("<div/>",i(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(e.parent)),a},type:function(){return this.data().f.effect},resize:function(t){var e=this.data().f,a=e.opts.turn.data(),i=this.width(),r=this.height();switch(e.effect){case"hard":t&&(e.wrapper.css({width:i,height:r}),e.fpage.css({width:i,height:r}),a.opts.gradients&&(e.ashadow.css({width:i,height:r}),e.bshadow.css({width:i,height:r})));break;case"sheet":t&&(t=Math.round(Math.sqrt(Math.pow(i,2)+Math.pow(r,2))),e.wrapper.css({width:t,height:t}),e.fwrapper.css({width:t,height:t}).children(":first-child").css({width:i,height:r}),e.fpage.css({width:i,height:r}),a.opts.gradients&&e.ashadow.css({width:i,height:r}),O._backGradient.call(this)&&e.bshadow.css({width:i,height:r})),e.parent.is(":visible")&&(a=g(e.parent[0]),e.fwrapper.css({top:a.top,left:a.left}),a=g(e.opts.turn[0]),e.fparent.css({top:-a.top,left:-a.left})),this.flip("z",e.opts["z-index"])}},_addPageWrapper:function(){var e=this.data().f,a=e.opts.turn.data(),r=this.parent();if(e.parent=r,!e.wrapper)switch(e.effect){case"hard":var s={};s[v+"transform-style"]="preserve-3d",s[v+"backface-visibility"]="hidden",e.wrapper=t("<div/>",i(0,0,2)).css(s).appendTo(r).prepend(this),e.fpage=t("<div/>",i(0,0,1)).css(s).appendTo(r),a.opts.gradients&&(e.ashadow=t("<div/>",i(0,0,0)).hide().appendTo(r),e.bshadow=t("<div/>",i(0,0,0)));break;case"sheet":s=this.width();var n=this.height();Math.round(Math.sqrt(Math.pow(s,2)+Math.pow(n,2))),e.fparent=e.opts.turn.data().fparent,e.fparent||(s=t("<div/>",{css:{"pointer-events":"none"}}).hide(),s.data().flips=0,s.css(i(0,0,"auto","visible").css).appendTo(e.opts.turn),e.opts.turn.data().fparent=s,e.fparent=s),this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"}),e.wrapper=t("<div/>",i(0,0,this.css("z-index"))).appendTo(r).prepend(this),e.fwrapper=t("<div/>",i(r.offset().top,r.offset().left)).hide().appendTo(e.fparent),e.fpage=t("<div/>",i(0,0,0,"visible")).css({cursor:"default"}).appendTo(e.fwrapper),a.opts.gradients&&(e.ashadow=t("<div/>",i(0,0,1)).appendTo(e.fpage)),O.setData.call(this,e)}O.resize.call(this,!0)},_fold:function(t){var e=this.data().f,a=e.opts.turn.data(),i=O._c.call(this,t.corner),r=this.width(),h=this.height();switch(e.effect){case"hard":t.x="l"==t.corner?Math.min(Math.max(t.x,0),2*r):Math.max(Math.min(t.x,r),-r);var d,l,c,g,u,b=a.totalPages,x=e.opts["z-index"]||b,y={overflow:"visible"},P=i.x?(i.x-t.x)/r:t.x/r,_=90*P,M=90>_;switch(t.corner){case"l":g="0% 50%",u="100% 50%",M?(d=0,l=0<e.opts.next-1,c=1):(d="100%",l=e.opts.page+1<b,c=0);break;case"r":g="100% 50%",u="0% 50%",_=-_,r=-r,M?(d=0,l=e.opts.next+1<b,c=0):(d="-100%",l=1!=e.opts.page,c=1)}y[v+"perspective-origin"]=u,e.wrapper.transform("rotateY("+_+"deg)translate3d(0px, 0px, "+(this.attr("depth")||0)+"px)",u),e.fpage.transform("translateX("+r+"px) rotateY("+(180+_)+"deg)",g),e.parent.css(y),M?(P=1-P,e.wrapper.css({zIndex:x+1}),e.fpage.css({zIndex:x})):(P-=1,e.wrapper.css({zIndex:x}),e.fpage.css({zIndex:x+1})),a.opts.gradients&&(l?e.ashadow.css({display:"",left:d,backgroundColor:"rgba(0,0,0,"+.5*P+")"}).transform("rotateY(0deg)"):e.ashadow.hide(),e.bshadow.css({opacity:1-P}),M?e.bshadow.parent()[0]!=e.wrapper[0]&&e.bshadow.appendTo(e.wrapper):e.bshadow.parent()[0]!=e.fpage[0]&&e.bshadow.appendTo(e.fpage),p(e.bshadow,s(100*c,0),s(100*(1-c),0),[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],2));break;case"sheet":var z,j,k,T,A,W,C,I=this,S=0,F=s(0,0),E=s(0,0),D=s(0,0),Z=O._foldingPage.call(this);Math.tan(0);var q=a.opts.acceleration,H=e.wrapper.height(),R="t"==t.corner.substr(0,1),$="l"==t.corner.substr(1,1),L=function e(){var n=s(0,0),o=s(0,0);n.x=i.x?i.x-t.x:t.x,n.y=f?i.y?i.y-t.y:t.y:0,o.x=$?r-n.x/2:t.x+n.x/2,o.y=n.y/2;var d=m-Math.atan2(n.y,n.x),p=d-Math.atan2(o.y,o.x);p=Math.max(0,Math.sin(p)*Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2)));return S=d/w*180,D=s(p*Math.sin(d),p*Math.cos(d)),d>m&&(D.x+=Math.abs(D.y*n.y/n.x),D.y=0,Math.round(D.x*Math.tan(w-d))<h)?(t.y=Math.sqrt(Math.pow(h,2)+2*o.x*n.x),R&&(t.y=h-t.y),e()):(d>m&&(n=w-d,o=H-h/Math.sin(n),F=s(Math.round(o*Math.cos(n)),Math.round(o*Math.sin(n))),$&&(F.x=-F.x),R&&(F.y=-F.y)),z=Math.round(D.y/Math.tan(d)+D.x),n=r-z,o=n*Math.cos(2*d),p=n*Math.sin(2*d),E=s(Math.round($?n-o:z+o),Math.round(R?p:h-p)),a.opts.gradients&&(A=n*Math.sin(d),n=O._c2.call(I,t.corner),n=Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))/r,C=Math.sin(m*(1<n?2-n:n)),W=Math.min(n,1),T=100<A?(A-100)/A:0,j=s(A*Math.sin(d)/r*100,A*Math.cos(d)/h*100),O._backGradient.call(I)&&(k=s(1.2*A*Math.sin(d)/r*100,1.2*A*Math.cos(d)/h*100),$||(k.x=100-k.x),R||(k.y=100-k.y))),D.x=Math.round(D.x),D.y=Math.round(D.y),!0)};switch(d=function(t,i,d,l){var c=["0","auto"],g=(r-H)*d[0]/100,u=(h-H)*d[1]/100,f=(i={left:c[i[0]],top:c[i[1]],right:c[i[2]],bottom:c[i[3]]},c={},90!=l&&-90!=l?$?-1:1:0),v=d[0]+"% "+d[1]+"%";I.css(i).transform(o(l)+n(t.x+f,t.y,q),v),e.fpage.css(i).transform(o(l)+n(t.x+E.x-F.x-r*d[0]/100,t.y+E.y-F.y-h*d[1]/100,q)+o((180/l-2)*l),v),e.wrapper.transform(n(-t.x+g-f,-t.y+u,q)+o(-l),v),e.fwrapper.transform(n(-t.x+F.x+g,-t.y+F.y+u,q)+o(-l),v),a.opts.gradients&&(d[0]&&(j.x=100-j.x),d[1]&&(j.y=100-j.y),c["box-shadow"]="0 0 20px rgba(0,0,0,"+.5*C+")",Z.css(c),p(e.ashadow,s($?100:0,R?0:100),s(j.x,j.y),[[T,"rgba(0,0,0,0)"],[.8*(1-T)+T,"rgba(0,0,0,"+.2*W+")"],[1,"rgba(255,255,255,"+.2*W+")"]],3,0),O._backGradient.call(I)&&p(e.bshadow,s($?0:100,R?0:100),s(k.x,k.y),[[.6,"rgba(0,0,0,0)"],[.8,"rgba(0,0,0,"+.3*W+")"],[1,"rgba(0,0,0,0)"]],3))},t.corner){case"tl":t.x=Math.max(t.x,1),L(),d(D,[1,0,0,1],[100,0],S);break;case"tr":t.x=Math.min(t.x,r-1),L(),d(s(-D.x,D.y),[0,0,0,1],[0,0],-S);break;case"bl":t.x=Math.max(t.x,1),L(),d(s(D.x,-D.y),[1,1,0,0],[100,100],-S);break;case"br":t.x=Math.min(t.x,r-1),L(),d(s(-D.x,-D.y),[0,1,1,0],[0,100],S)}}e.point=t},_moveFoldingPage:function(t){var e=this.data().f;if(e){var a=e.opts.turn,i=a.data(),r=i.pagePlace;t?(i=e.opts.next,r[i]!=e.opts.page&&(e.folding&&O._moveFoldingPage.call(this,!1),O._foldingPage.call(this).appendTo(e.fpage),r[i]=e.opts.page,e.folding=i),a.turn("update")):e.folding&&(i.pages[e.folding]?(a=i.pages[e.folding].data().f,i.pageObjs[e.folding].appendTo(a.wrapper)):i.pageWrap[e.folding]&&i.pageObjs[e.folding].appendTo(i.pageWrap[e.folding]),e.folding in r&&(r[e.folding]=e.folding),delete e.folding)}},_showFoldedPage:function(t,e){var a=O._foldingPage.call(this),i=this.data(),r=i.f,s=r.visible;if(a){if((!s||!r.point||r.point.corner!=t.corner)&&(a="hover"==r.status||"peel"==r.status||r.opts.turn.data().mouseAction?t.corner:null,s=!1,"prevented"==l("start",this,[r.opts,a])))return!1;if(e){var n=this;i=r.point&&r.point.corner==t.corner?r.point:O._c.call(this,t.corner,1);this.animatef({from:[i.x,i.y],to:[t.x,t.y],duration:500,frame:function(e){t.x=Math.round(e[0]),t.y=Math.round(e[1]),O._fold.call(n,t)}})}else O._fold.call(this,t),i.effect&&!i.effect.turning&&this.animatef(!1);if(!s)switch(r.effect){case"hard":r.visible=!0,O._moveFoldingPage.call(this,!0),r.fpage.show(),r.opts.shadows&&r.bshadow.show();break;case"sheet":r.visible=!0,r.fparent.show().data().flips++,O._moveFoldingPage.call(this,!0),r.fwrapper.show(),r.bshadow&&r.bshadow.show()}return!0}return!1},hide:function(){var t=this.data().f,e=t.opts.turn.data(),a=O._foldingPage.call(this);switch(t.effect){case"hard":e.opts.gradients&&(t.bshadowLoc=0,t.bshadow.remove(),t.ashadow.hide()),t.wrapper.transform(""),t.fpage.hide();break;case"sheet":0===--t.fparent.data().flips&&t.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform(""),t.wrapper.transform(""),t.fwrapper.hide(),t.bshadow&&t.bshadow.hide(),a.transform("")}return t.visible=!1,this},hideFoldedPage:function(t){var e=this.data().f;if(e.point){var a=this,i=e.point,n=function(){e.point=null,e.status="",a.flip("hide"),a.trigger("end",[e.opts,!1])};if(t){var o=O._c.call(this,i.corner),h=(t="t"==i.corner.substr(0,1)?Math.min(0,i.y-o.y)/2:Math.max(0,i.y-o.y)/2,s(i.x,i.y+t)),d=s(o.x,o.y-t);this.animatef({from:0,to:1,frame:function(t){t=r(i,h,d,o,t),i.x=t.x,i.y=t.y,O._fold.call(a,i)},complete:n,duration:800,hiding:!0})}else this.animatef(!1),n()}},turnPage:function(t){var e=this,a=this.data().f,i=a.opts.turn.data(),s=(t={corner:a.corner?a.corner.corner:t||O._cAllowed.call(this)[0]},a.point||O._c.call(this,t.corner,a.opts.turn?i.opts.elevation:0)),n=O._c2.call(this,t.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(a){a=r(s,s,n,n,a),t.x=a.x,t.y=a.y,O._showFoldedPage.call(e,t)},complete:function(){e.trigger("end",[a.opts,!0])},duration:i.opts.duration,turning:!0}),a.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},corner:function(){return this.data().f.corner},_eventStart:function(t){var e=this.data().f,a=e.opts.turn;if(!e.corner&&!e.disabled&&!this.flip("isTurning")&&e.opts.page==a.data().pagePlace[e.opts.page]){if(e.corner=O._isIArea.call(this,t),e.corner&&O._foldingPage.call(this))return this.trigger("pressed",[e.point]),O._showFoldedPage.call(this,e.corner),!1;e.corner=null}},_eventMove:function(t){var e=this.data().f;if(!e.disabled)if(t=b?t.originalEvent.touches:[t],e.corner){var a=e.parent.offset();e.corner.x=t[0].pageX-a.left,e.corner.y=t[0].pageY-a.top,O._showFoldedPage.call(this,e.corner)}else e.hover&&!this.data().effect&&this.is(":visible")&&((t=O._isIArea.call(this,t[0]))?("sheet"==e.effect&&2==t.corner.length||"hard"==e.effect)&&(e.status="hover",e=O._c.call(this,t.corner,e.opts.cornerSize/2),t.x=e.x,t.y=e.y,O._showFoldedPage.call(this,t,!0)):"hover"==e.status&&(e.status="",O.hideFoldedPage.call(this,!0)))},_eventEnd:function(){var t=this.data().f,e=t.corner;!t.disabled&&e&&"prevented"!=l("released",this,[t.point||e])&&O.hideFoldedPage.call(this,!0),t.corner=null},disable:function(t){return O.setData.call(this,{disabled:t}),this},hover:function(t){return O.setData.call(this,{hover:t}),this},peel:function(e,a){var i=this.data().f;if(e){if(-1==t.inArray(e,y.all))throw c("Corner "+e+" is not permitted");if(-1!=t.inArray(e,O._cAllowed.call(this))){var r=O._c.call(this,e,i.opts.cornerSize/2);i.status="peel",O._showFoldedPage.call(this,{corner:e,x:r.x,y:r.y},a)}}else i.status="",O.hideFoldedPage.call(this,a);return this}};window.requestAnim=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},t.extend(t.fn,{flip:function(){return a(t(this[0]),O,arguments)},turn:function(){return a(t(this[0]),j,arguments)},transform:function(t,e){var a={};return e&&(a[v+"transform-origin"]=e),a[v+"transform"]=t,this.css(a)},animatef:function(e){var a=this.data();if(a.effect&&a.effect.stop(),e){e.to.length||(e.to=[e.to]),e.from.length||(e.from=[e.from]);for(var i=[],r=e.to.length,s=!0,n=this,o=(new Date).getTime(),h=function t(){if(a.effect&&s){for(var h=[],d=Math.min(e.duration,(new Date).getTime()-o),p=0;p<r;p++)h.push(a.effect.easing(1,d,e.from[p],i[p],e.duration));e.frame(1==r?h[0]:h),d==e.duration?(delete a.effect,n.data(a),e.complete&&e.complete()):window.requestAnim(t)}},d=0;d<r;d++)i.push(e.to[d]-e.from[d]);a.effect=t.extend({stop:function(){s=!1},easing:function(t,e,a,i,r){return i*Math.sqrt(1-(e=e/r-1)*e)+a}},e),this.data(a),h()}else delete a.effect}}),t.isTouch=b,t.mouseEvents=x,t.cssPrefix=d,t.cssTransitionEnd=function(){var t,e=document.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MSTransition:"transitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(void 0!==e.style[t])return a[t]},t.findPos=g})(t)}).call(this,a("46e5"))},b7d5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display"},[a("nav-bar",{attrs:{title:t.studentName+t.$t("growth.onesGrowth"),onlyBack:!0}}),a("div",{staticClass:"wrap"},[a("div",{ref:"growthBlock",staticClass:"block",attrs:{id:"growthBlock"}},[a("div",{staticClass:"editor",style:{width:t.bWidth+"px",height:t.bHeight+"px"}},[a("display-panel",{attrs:{project:t.project,bWidth:t.bWidth,bHeight:t.bHeight,maxPage:t.maxPage,currPage:t.currPage},on:{"update:currPage":function(e){t.currPage=e},"update:curr-page":function(e){t.currPage=e}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageNumber,expression:"pageNumber"}],staticClass:"page-number"},[a("span",[t._v(t._s(t.pageNumber))])])],1)]),a("div",{staticClass:"foot"},[a("div",{staticClass:"foot-block"},[a("div",{staticClass:"slide-block"},[a("van-slider",{attrs:{"bar-height":"4px","active-color":"#A0A3B4",min:1,max:t.maxPage},scopedSlots:t._u([{key:"button",fn:function(){return[a("div",{staticClass:"slide-button"})]},proxy:!0}]),model:{value:t.currPage,callback:function(e){t.currPage=e},expression:"currPage"}})],1),a("div",{staticClass:"page-block"},[a("div",{staticClass:"page-indicator"},[t._v(t._s(t.totalPage))])])])])])],1)},r=[],s=(a("445a"),a("cb3c"),a("a543"),a("6540"),a("b131"),a("0bd5"),a("9b42"),a("d211")),n=a("4c09"),o=a("da1d"),h=a("c98f"),d=a("a8e1"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"flipbook"}},[t._l(t.project,(function(e,i){return[a("div",{staticClass:"page"},[a("div",{style:{width:"100%",height:"100%",backgroundSize:"cover",backgroundImage:"url("+e.backgroundUrl+")"}},[a("div",{style:{transform:"scale("+t.bWidth/592+")",transformOrigin:"0 0"}},[t._l(e.contentLayout,(function(t,e){return[a("operator",{attrs:{element:t,preview:""}})]}))],2)])])]}))],2)},l=[],c=a("ebc2"),g=a("46e5"),u=a.n(g);window.$=u.a,window.jQuery=u.a;var f=u.a,v=(a("b176"),{name:"displayPanel",components:{operator:c["a"]},props:["project","bWidth","bHeight","maxPage","currPage"],data:function(){return{}},computed:{},watch:{project:{handler:function(t,e){var a=this,i=this;this.$nextTick((function(){f("#flipbook").turn({width:a.bWidth+"px",height:a.bHeight+"px",acceleration:!0,display:"single",duration:600,pages:a.maxPage,gradients:!0,autoCenter:!0,when:{turning:function(t,e,a){i.$emit("update:currPage",e)}}})}))}},currPage:{handler:function(t,e){t!=e&&f("#flipbook").turn("page",t)}}},mounted:function(){},beforeRouteLeave:function(t,e,a){t.meta.keepAlive=!0,a()},methods:{}}),w=v,m=(a("e71e"),a("c701")),b=Object(m["a"])(w,p,l,!1,null,"278c61d8",null),x=b.exports,y=a("86bd"),P={name:"growth-growth-display",components:{displayPanel:x,navBar:o["a"]},mixins:[d["a"]],data:function(){return{growthId:this.$route.query.growthId,clazzThemeId:this.$route.query.clazzThemeId,studentId:this.$route.query.studentId,studentName:this.$route.query.studentName,currPage:1,maxPage:1,project:[]}},computed:{totalPage:function(){return this.$t("growth.totalPage").replace(/\{\{[^\}]+\}\}/,this.maxPage)},pageNumber:function(){var t=Math.max.apply(Math,Object(n["a"])(this.project.filter((function(t){return 2==t.pageType})).map((function(t){return t.pageIndex})).concat([-1]))),e=this.project.slice(0,-1).filter((function(e){return e.pageIndex>t})).map((function(t){return t.pageIndex+1}));return e.indexOf(this.currPage)+1}},created:function(){},mounted:function(){this.getGrowth()},methods:{getGrowth:function(){var t=this;this.growthId?Object(h["a"])({growthId:this.growthId}).then((function(e){t.project=e.data.map((function(t,e){return Object(s["a"])(Object(s["a"])({},Object(y["a"])(t)),{},{pageIndex:e})})),t.maxPage=t.project.length})):Object(h["f"])({clazzThemeId:this.clazzThemeId,studentId:this.studentId}).then((function(e){t.project=e.data.map((function(t,e){return Object(s["a"])(Object(s["a"])({},Object(y["a"])(t)),{},{pageIndex:e})})),t.maxPage=t.project.length}))}}},_=P,M=(a("841e"),Object(m["a"])(_,i,r,!1,null,"e554a182",null));e["default"]=M.exports},c92d:function(t,e,a){function i(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=i=function(t){return typeof t}:t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}a("ab31"),a("4f40"),a("172f"),a("402f"),a("2db5"),a("6ab7"),t.exports=i},cca2:function(t,e,a){"use strict";var i=a("a09b"),r=a("7866"),s=a("ec87"),n=a("f8b2"),o=[].join,h=r!=Object,d=n("join",",");i({target:"Array",proto:!0,forced:h||!d},{join:function(t){return o.call(s(this),void 0===t?",":t)}})},e71e:function(t,e,a){"use strict";a("0386")}}]);