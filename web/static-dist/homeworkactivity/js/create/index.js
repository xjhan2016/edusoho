!function(t){function e(i,a){if(n[i])return n[i].exports;var o={i:i,l:!1,exports:{}};return 0!=a&&(n[i]=o),t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/static-dist/",e(e.s="63e2060db38e59343f5b")}({0:function(t,e){t.exports=jQuery},"07a3448be5f694cdee04":function(t,e,n){t.exports=!n("457939c2e15065e32401")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"0b7e406830a62ea861ca":function(t,e,n){var i=n("d30516674aade65150d3");i(i.S+i.F,"Object",{assign:n("73d9129a636d63c0b81a")})},"0e6d1c03aac99b65ccb1":function(t,e){e.f={}.propertyIsEnumerable},"10f5bc3e6ad5971b57b0":function(t,e,n){var i=n("26b2cb950fcc43474957"),a=Math.min;t.exports=function(t){return t>0?a(i(t),9007199254740991):0}},"11f30f0d206e0327acdc":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},"1b58d36ee38e47f1c490":function(t,e,n){var i=n("f31cab22762bc6afaacb"),a=n("f27a607058b9cc8c5827").document,o=i(a)&&i(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},"1e0cf618bc778b8ab554":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("7ab4a89ebadbfdecc2bf"),o=i(a),s=n("4602c3f5fe7ad9e3e91d"),r=i(s),c=n("b334fd7e4c5a19234db2"),f=i(c),d=n("71e1df85d5928925f4b1"),l=function(){function t(e,n){(0,o.default)(this,t),this.$form=e,this.$modal=n,this.initEvent()}return(0,r.default)(t,[{key:"initEvent",value:function(){var t=this;this.$form.on("click",'[data-role="item-delete-btn"]',function(e){return t.deleteQuestion(e)}),this.$form.on("click",'[data-role="replace-item"]',function(e){return t.replaceQuestion(e)}),this.$form.on("click",'[data-role="preview-btn"]',function(e){return t.previewQuestion(e)}),this.$form.on("click",'[data-role="batch-delete-btn"]',function(e){return t.batchDelete(e)}),this.initSortList()}},{key:"initSortList",value:function(){var t=this,e=void 0,n=this.$form.find("tbody"),i=n.hasClass("js-homework-table")?"":"<td></td>",a='<tr class="question-placehoder js-placehoder"><td></td><td></td><td></td><td></td><td></td><td></td><td></td>'+i+"</tr>";n.sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:a,exclude:".notMoveHandle",onDragStart:function(t,n,i){t.hasClass("have-sub-questions")||$(".js-have-sub").removeClass("is-question");var a=t.offset(),o=n.rootGroup.pointer;e={left:o.left-a.left,top:o.top-a.top},i(t,n)},onDrag:function(t,n){var i=t.height();t.css({left:n.left-e.left,top:n.top-e.top}),$(".js-placehoder").css({height:i})},onDrop:function(e,n,i){if(i(e,n),e.hasClass("have-sub-questions")){var a=e.parents("tbody");a.find("tr.is-question").each(function(){var t=$(this);a.find("[data-parent-id="+t.data("id")+"]").detach().insertAfter(t)})}else $(".js-have-sub").addClass("is-question");t.refreshSeqs()}})}},{key:"replaceQuestion",value:function(t){var e=this,n=$(t.currentTarget),i=[],a=this.$form.find("tbody:visible");a.find('[name="questionIds[]"]').each(function(){i.push($(this).val())}),this.$modal.data("manager",this).modal(),$.get(n.data("url"),{excludeIds:i.join(","),type:a.data("type")},function(t){e.$modal.html(t)})}},{key:"deleteQuestion",value:function(t){t.stopPropagation();var e=$(t.currentTarget),n=e.closest("tr").data("id"),i=e.closest("tbody");i.find('[data-parent-id="'+n+'"]').remove(),e.closest("tr").remove(),(0,d.questionSubjectiveRemask)(this.$form),i.trigger("lengthChange"),this.refreshSeqs()}},{key:"batchDelete",value:function(t){if(0==this.$form.find('[data-role="batch-item"]:checked').length){var e=this.$form.find(".js-help-redmine");e?(e.text(Translator.trans("activity.testpaper_manage.question_required_error_hint")).show(),setTimeout(function(){e.slideUp()},3e3)):(0,f.default)("danger",Translator.trans("activity.testpaper_manage.question_required_error_hint"))}var n=this;this.$form.find('[data-role="batch-item"]:checked').each(function(t,e){var i=$(this).val();"material"==$(this).closest("tr").data("type")&&n.$form.find('[data-parent-id="'+i+'"]').remove(),$(this).closest("tr").remove()}),(0,d.questionSubjectiveRemask)(this.$form)}},{key:"previewQuestion",value:function(t){t.preventDefault(),window.open($(t.currentTarget).data("url"),"_blank","directories=0,height=580,width=820,scrollbars=1,toolbar=0,status=0,menubar=0,location=0")}},{key:"refreshSeqs",value:function(){var t=1;this.$form.find("tbody tr").each(function(){var e=$(this);e.hasClass("have-sub-questions")||(e.find("td.seq").html(t),t++)}),this.$form.find('[name="questionLength"]').val(t-1>0?t-1:null)}}]),t}();e.default=l},"25264dbf4ec8cd0a39ef":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"26b2cb950fcc43474957":function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},"2be1a6d982f843e91a8a":function(t,e,n){var i=n("99ec8b6ce9e8b820539a"),a=n("f27a607058b9cc8c5827"),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("dff9362b82bd4eafdef8")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"2becabd90e65528fbb02":function(t,e,n){var i=n("d30516674aade65150d3");i(i.S+i.F*!n("07a3448be5f694cdee04"),"Object",{defineProperty:n("30373b8543ac2ca8f199").f})},"30373b8543ac2ca8f199":function(t,e,n){var i=n("6c3dda553b2c45fd2161"),a=n("bb82a2b96f436781c23d"),o=n("5a32a62db759afe4c196"),s=Object.defineProperty;e.f=n("07a3448be5f694cdee04")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),a)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"373811bb5ca99f7bf840":function(t,e){e.f=Object.getOwnPropertySymbols},"4373c1ac6d15a5b2dd1f":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"457939c2e15065e32401":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"4602c3f5fe7ad9e3e91d":function(t,e,n){"use strict";e.__esModule=!0;var i=n("90ee69f654d94afb7eca"),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},"5a32a62db759afe4c196":function(t,e,n){var i=n("f31cab22762bc6afaacb");t.exports=function(t,e){if(!i(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!i(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"5f49a2718ac22ba53d59":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"60adac73113c6fc50379":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"63e2060db38e59343f5b":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n("de585ca0d3c2d0205c51"),o=i(a),s=n("1e0cf618bc778b8ab554"),r=i(s),c=n("d3d3efb095af91a4fdd5"),f=i(c),d=$("#step2-form");new f.default($("#iframe-content")),new o.default(d),new r.default(d,$("#attachment-modal",window.parent.document))},"68a72f4f57d2a9459710":function(t,e,n){var i=n("9e0642ad0826b9d4cd08"),a=n("10f5bc3e6ad5971b57b0"),o=n("e2544e9d164d5ae98195");t.exports=function(t){return function(e,n,s){var r,c=i(e),f=a(c.length),d=o(s,f);if(t&&n!=n){for(;f>d;)if((r=c[d++])!=r)return!0}else for(;f>d;d++)if((t||d in c)&&c[d]===n)return t||d||0;return!t&&-1}}},"68be1979658d3a49fbce":function(t,e,n){var i=n("60adac73113c6fc50379");t.exports=function(t){return Object(i(t))}},"6b7c061c8481ac422c8d":function(t,e,n){var i=n("2be1a6d982f843e91a8a")("keys"),a=n("11f30f0d206e0327acdc");t.exports=function(t){return i[t]||(i[t]=a(t))}},"6c3dda553b2c45fd2161":function(t,e,n){var i=n("f31cab22762bc6afaacb");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},"71e1df85d5928925f4b1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.questionSubjectiveRemask=function(t){var e=!1,n="",i=$("#task-create-content-iframe").contents().find(".js-subjective-remask");if(t.find("tbody tr").each(function(){var t=$(this).data("type");"essay"==t&&(e=!0)}),e||0==t.find("tbody tr").length)return void i.html("");n="homework"==i.data("type")?Translator.trans("activity.homework_manage.objective_question_hint"):Translator.trans("activity.homework_manage.pass_objective_question_hint"),i.html(n).removeClass("hidden")}},"73d9129a636d63c0b81a":function(t,e,n){"use strict";var i=n("d137ba7e6a11667e9035"),a=n("373811bb5ca99f7bf840"),o=n("0e6d1c03aac99b65ccb1"),s=n("68be1979658d3a49fbce"),r=n("7d2b62f436fd0fdb95d0"),c=Object.assign;t.exports=!c||n("457939c2e15065e32401")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i})?function(t,e){for(var n=s(t),c=arguments.length,f=1,d=a.f,l=o.f;c>f;)for(var u,h=r(arguments[f++]),b=d?i(h).concat(d(h)):i(h),p=b.length,m=0;p>m;)l.call(h,u=b[m++])&&(n[u]=h[u]);return n}:c},"7ab4a89ebadbfdecc2bf":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"7d2b62f436fd0fdb95d0":function(t,e,n){var i=n("5f49a2718ac22ba53d59");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},"90ee69f654d94afb7eca":function(t,e,n){t.exports={default:n("bc1908f480b427a8a004"),__esModule:!0}},"99ec8b6ce9e8b820539a":function(t,e){var n=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n)},"9e0642ad0826b9d4cd08":function(t,e,n){var i=n("7d2b62f436fd0fdb95d0"),a=n("60adac73113c6fc50379");t.exports=function(t){return i(a(t))}},a0ce7130a92293994282:function(t,e,n){var i=n("e82b6e3d752b3eb55e42");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,a){return t.call(e,n,i,a)}}return function(){return t.apply(e,arguments)}}},a25cd36d0cf21bc7df34:function(t,e,n){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){var t=!1;(function(){!function(e){"function"==typeof t&&t.amd?t(["jquery"],e):e(jQuery)}(function(t){function e(e,i,a){var i={content:{message:"object"==typeof i?i.message:i,title:i.title?i.title:"",icon:i.icon?i.icon:"",url:i.url?i.url:"#",target:i.target?i.target:"-"}};a=t.extend(!0,{},i,a),this.settings=t.extend(!0,{},n,a),this._defaults=n,"-"==this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"},"number"==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),this.init()}var n={element:"body",position:null,type:"info",allow_dismiss:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};String.format=function(){for(var t=arguments[0],e=1;e<arguments.length;e++)t=t.replace(RegExp("\\{"+(e-1)+"\\}","gm"),arguments[e]);return t},t.extend(e.prototype,{init:function(){var t=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),"#"!=this.settings.content.url&&this.styleURL(),this.styleDismiss(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(e,n){var i={};"string"==typeof e?i[e]=n:i=e;for(var e in i)switch(e){case"type":this.$ele.removeClass("alert-"+t.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+t.settings.type),t.settings.type=i[e],this.$ele.addClass("alert-"+i[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+i[e]);break;case"icon":var a=this.$ele.find('[data-notify="icon"]');"class"==t.settings.icon_type.toLowerCase()?a.removeClass(t.settings.content.icon).addClass(i[e]):(a.is("img")||a.find("img"),a.attr("src",i[e]));break;case"progress":var o=t.settings.delay-t.settings.delay*(i[e]/100);this.$ele.data("notify-delay",o),this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i[e]).css("width",i[e]+"%");break;case"url":this.$ele.find('[data-notify="url"]').attr("href",i[e]);break;case"target":this.$ele.find('[data-notify="url"]').attr("target",i[e]);break;default:this.$ele.find('[data-notify="'+e+'"]').html(i[e])}var s=this.$ele.outerHeight()+parseInt(t.settings.spacing)+parseInt(t.settings.offset.y);t.reposition(s)},close:function(){t.close()}}},buildNotify:function(){var e=this.settings.content;this.$ele=t(String.format(this.settings.template,this.settings.type,e.title,e.message,e.url,e.target)),this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none"),(this.settings.delay<=0&&!this.settings.showProgressbar||!this.settings.showProgressbar)&&this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){"class"==this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"5px",zIndex:this.settings.z_index+2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:"0px",position:"absolute",top:"0px",width:"100%",zIndex:this.settings.z_index+1})},placement:function(){var e=this,n=this.settings.offset.y,i={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",zIndex:this.settings.z_index},a=!1,o=this.settings;switch(t('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){return n=Math.max(n,parseInt(t(this).css(o.placement.from))+parseInt(t(this).outerHeight())+parseInt(o.spacing))}),1==this.settings.newest_on_top&&(n=this.settings.offset.y),i[this.settings.placement.from]=n+"px",this.settings.placement.align){case"left":case"right":i[this.settings.placement.align]=this.settings.offset.x+"px";break;case"center":i.left=0,i.right=0}this.$ele.css(i).addClass(this.settings.animate.enter),t.each(Array("webkit-","moz-","o-","ms-",""),function(t,n){e.$ele[0].style[n+"AnimationIterationCount"]=1}),t(this.settings.element).append(this.$ele),1==this.settings.newest_on_top&&(n=parseInt(n)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(n)),t.isFunction(e.settings.onShow)&&e.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(t){a=!0}).one(this.animations.end,function(n){t.isFunction(e.settings.onShown)&&e.settings.onShown.call(this)}),setTimeout(function(){a||t.isFunction(e.settings.onShown)&&e.settings.onShown.call(this)},600)},bind:function(){var e=this;if(this.$ele.find('[data-notify="dismiss"]').on("click",function(){e.close()}),this.$ele.mouseover(function(e){t(this).data("data-hover","true")}).mouseout(function(e){t(this).data("data-hover","false")}),this.$ele.data("data-hover","false"),this.settings.delay>0){e.$ele.data("notify-delay",e.settings.delay);var n=setInterval(function(){var t=parseInt(e.$ele.data("notify-delay"))-e.settings.timer;if("false"===e.$ele.data("data-hover")&&"pause"==e.settings.mouse_over||"pause"!=e.settings.mouse_over){var i=(e.settings.delay-t)/e.settings.delay*100;e.$ele.data("notify-delay",t),e.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i).css("width",i+"%")}t<=-e.settings.timer&&(clearInterval(n),e.close())},e.settings.timer)}},close:function(){var e=this,n=parseInt(this.$ele.css(this.settings.placement.from)),i=!1;this.$ele.data("closing","true").addClass(this.settings.animate.exit),e.reposition(n),t.isFunction(e.settings.onClose)&&e.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(t){i=!0}).one(this.animations.end,function(n){t(this).remove(),t.isFunction(e.settings.onClosed)&&e.settings.onClosed.call(this)}),setTimeout(function(){i||(e.$ele.remove(),e.settings.onClosed&&e.settings.onClosed(e.$ele))},600)},reposition:function(e){var n=this,i='[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])',a=this.$ele.nextAll(i);1==this.settings.newest_on_top&&(a=this.$ele.prevAll(i)),a.each(function(){t(this).css(n.settings.placement.from,e),e=parseInt(e)+parseInt(n.settings.spacing)+t(this).outerHeight()})}}),t.notify=function(t,n){return new e(this,t,n).notify},t.notifyDefaults=function(e){return n=t.extend(!0,{},n,e)},t.notifyClose=function(e){void 0===e||"all"==e?t("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):t('[data-notify-position="'+e+'"]').find('[data-notify="dismiss"]').trigger("click")}})}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)},adc6e7d88332518aa1ec:function(t,e,n){t.exports={default:n("ce462d99a45ae2207993"),__esModule:!0}},b334fd7e4c5a19234db2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("adc6e7d88332518aa1ec"),a=function(t){return t&&t.__esModule?t:{default:t}}(i);n("a25cd36d0cf21bc7df34");var o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};$('[data-notify="container"]').remove();var o="";switch(t){case"info":o="cd-icon cd-icon-info-o color-info mrm";break;case"success":o="cd-icon cd-icon-success-o color-success mrm";break;case"danger":o="cd-icon cd-icon-danger-o color-danger mrm";break;case"warning":o="cd-icon cd-icon-warning-o color-warning mrm"}var s={message:e,icon:o},r={type:t,delay:3e3,placement:{from:"top",align:"center"},animate:{enter:"animated fadeInDownSmall",exit:"animated fadeOutUp"},offset:80,z_index:1051,timer:100,template:'<div data-notify="container" class="notify-content"><div class="notify notify-{0}"><span data-notify="icon"></span><span data-notify="title">{1}</span><span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div></div>'};$.notify((0,a.default)(s,i),(0,a.default)(r,n))};e.default=o},bb82a2b96f436781c23d:function(t,e,n){t.exports=!n("07a3448be5f694cdee04")&&!n("457939c2e15065e32401")(function(){return 7!=Object.defineProperty(n("1b58d36ee38e47f1c490")("div"),"a",{get:function(){return 7}}).a})},bc1908f480b427a8a004:function(t,e,n){n("2becabd90e65528fbb02");var i=n("99ec8b6ce9e8b820539a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},ce462d99a45ae2207993:function(t,e,n){n("0b7e406830a62ea861ca"),t.exports=n("99ec8b6ce9e8b820539a").Object.assign},d137ba7e6a11667e9035:function(t,e,n){var i=n("dfa76e0e7e55e0febf1e"),a=n("25264dbf4ec8cd0a39ef");t.exports=Object.keys||function(t){return i(t,a)}},d1c7bd6e35e95c182000:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},d30516674aade65150d3:function(t,e,n){var i=n("f27a607058b9cc8c5827"),a=n("99ec8b6ce9e8b820539a"),o=n("a0ce7130a92293994282"),s=n("f9e595817d8b54ee32b8"),r=n("d1c7bd6e35e95c182000"),c=function(t,e,n){var f,d,l,u=t&c.F,h=t&c.G,b=t&c.S,p=t&c.P,m=t&c.B,g=t&c.W,v=h?a:a[e]||(a[e]={}),y=v.prototype,w=h?i:b?i[e]:(i[e]||{}).prototype;h&&(n=e);for(f in n)(d=!u&&w&&void 0!==w[f])&&r(v,f)||(l=d?w[f]:n[f],v[f]=h&&"function"!=typeof w[f]?n[f]:m&&d?o(l,i):g&&w[f]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):p&&"function"==typeof l?o(Function.call,l):l,p&&((v.virtual||(v.virtual={}))[f]=l,t&c.R&&y&&!y[f]&&s(y,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},d3d3efb095af91a4fdd5:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("7ab4a89ebadbfdecc2bf"),o=i(a),s=n("4602c3f5fe7ad9e3e91d"),r=i(s),c=function(){function t(e){(0,o.default)(this,t),this.$homeworkModal=$("#modal",window.parent.document),this.$questionPickedModal=$("#attachment-modal",window.parent.document),this.$element=e,this.$step2_form=this.$element.find("#step2-form"),this.$step3_form=this.$element.find("#step3-form"),this.validator2=null,this.init()}return(0,r.default)(t,[{key:"init",value:function(){this.initEvent(),this.setValidateRule(),this.inItStep2form()}},{key:"initEvent",value:function(){var t=this;this.$element.on("click",'[data-role="pick-item"]',function(e){return t.showPickQuestion(e)}),this.$questionPickedModal.on("shown.bs.modal",function(){t.$homeworkModal.hide()}),this.$questionPickedModal.on("hidden.bs.modal",function(){t.$homeworkModal.show(),t.$questionPickedModal.html(""),t.validator2&&t.validator2.form()}),window.ltc.on("getActivity",function(e){window.ltc.emit("returnActivity",{valid:t.validator.form(),data:window.ltc.getFormSerializeObject($("#step2-form"))})}),window.ltc.on("getValidate",function(e){window.ltc.emit("returnValidate",{valid:t.validator.form()})})}},{key:"initCkeditor",value:function(t){var e=this.$element.data("status")?350:200,n=CKEDITOR.replace("homework-about-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#homework-about-field").data("imageUploadUrl"),height:e});n.on("change",function(){$("#homework-about-field").val(n.getData())}),n.on("blur",function(){t.form()})}},{key:"showPickQuestion",value:function(t){var e=this;t.preventDefault();var n=$(t.currentTarget),i=[];$("#question-table-tbody").find('[name="questionIds[]"]').each(function(){i.push($(this).val())}),this.$questionPickedModal.modal().data("manager",this),$.get(n.data("url"),{excludeIds:i.join(",")},function(t){e.$questionPickedModal.html(t)})}},{key:"inItStep2form",value:function(){this.validator=this.$step2_form.validate({onkeyup:!1,rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},description:{required:!0},content:"required",questionLength:{required:!0}},messages:{description:Translator.trans("activity.homework_manage.question_homework_hint"),questionLength:Translator.trans("activity.homework_manage.question_required_error_hint")}}),this.initCkeditor(this.validator)}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",function(t,e){return this.optional(e)||/^[0-9]+(\.[0-9]?)?$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.arithmetic_float_error_hint"))),$.validator.addMethod("positiveInteger",function(t,e){return this.optional(e)||/^[1-9]\d*$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.positive_integer_error_hint"))),$.validator.addMethod("DateAndTime",function(t,e){var n=/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ([0-1]{1}[0-9]{1})|(2[0-4]{1}):[0-5]{1}[0-9]{1}$/;return this.optional(e)||n.test(t)},$.validator.format(Translator.trans("activity.homework_manage.date_and_time_error_hint:mm")))}}]),t}();e.default=c},de585ca0d3c2d0205c51:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("7ab4a89ebadbfdecc2bf"),o=i(a),s=n("4602c3f5fe7ad9e3e91d"),r=i(s),c=function(){function t(e){(0,o.default)(this,t),this.$element=e,this.initEvent()}return(0,r.default)(t,[{key:"initEvent",value:function(){var t=this;this.$element.on("click",'[data-role="batch-select"]',function(e){return t._batch2Item(e)}),this.$element.on("click",'[data-role="batch-item"]',function(e){return t._item2Batch(e)})}},{key:"_batch2Item",value:function(t){var e=$(t.currentTarget).prop("checked");this.$element.find('[data-role="batch-select"]').prop("checked",e),this.$element.find('[data-role="batch-item"]:visible').prop("checked",e)}},{key:"_item2Batch",value:function(t){this.$element.find('[data-role="batch-item"]').length==this.$element.find('[data-role="batch-item"]:checked').length?this.$element.find('[data-role="batch-select"]').prop("checked",!0):this.$element.find('[data-role="batch-select"]').prop("checked",!1)}}]),t}();e.default=c},dfa76e0e7e55e0febf1e:function(t,e,n){var i=n("d1c7bd6e35e95c182000"),a=n("9e0642ad0826b9d4cd08"),o=n("68a72f4f57d2a9459710")(!1),s=n("6b7c061c8481ac422c8d")("IE_PROTO");t.exports=function(t,e){var n,r=a(t),c=0,f=[];for(n in r)n!=s&&i(r,n)&&f.push(n);for(;e.length>c;)i(r,n=e[c++])&&(~o(f,n)||f.push(n));return f}},dff9362b82bd4eafdef8:function(t,e){t.exports=!0},e2544e9d164d5ae98195:function(t,e,n){var i=n("26b2cb950fcc43474957"),a=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?a(t+e,0):o(t,e)}},e82b6e3d752b3eb55e42:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},f27a607058b9cc8c5827:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f31cab22762bc6afaacb:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},f9e595817d8b54ee32b8:function(t,e,n){var i=n("30373b8543ac2ca8f199"),a=n("4373c1ac6d15a5b2dd1f");t.exports=n("07a3448be5f694cdee04")?function(t,e,n){return i.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}}});