function RevertComment(d){$("#inpRevID").val(d);var X=$("#comment"),dJ=$("#cancel-reply"),g=$("#temp-frm");var Q=document.createElement("div");Q.id="temp-frm";Q.style.display="none";X.before(Q);$("#AjaxComment"+d).before(X);X.addClass("");dJ.show();dJ.click(function(){$("#inpRevID").val(0);var d=$("#temp-frm"),X=$("#comment");if(!d.length||!X.length)return;d.before(X);d.remove();$(this).hide();X.removeClass("");return false});try{$("#txaArticle").focus()}catch(d){}return false}function GetComments(d,X){$("span.commentspage").html("Waiting...");$.get(bloghost+"zb_system/cmd.php?act=getcmt&postid="+d+"&page="+X,function(d){$("#AjaxCommentBegin").nextUntil("#AjaxCommentEnd").remove();$("#AjaxCommentEnd").before(d);$("#cancel-reply").click()})}function CommentComplete(){$("#cancel-reply").click()}$(function(){var d=$(".responsive-nav");$(".m-nav-btn i").click(function(){$(".responsive-nav").fadeToggle("fast"),$(".pc-nav").removeClass("pc-nav"),$(".sub-nav").toggleClass("m-sub-nav")})});$(function(){jQuery(".m-nav .nav-ul > li,.m-nav .nav-ul > li ul li").each(function(){jQuery(this).children(".m-nav .m-sub-nav").not(".active").css("display","none");jQuery(this).children(".m-nav .toggle-btn").bind("click",function(){$(".m-nav .m-sub-nav").addClass("active");jQuery(this).children().addClass(function(){if(jQuery(this).hasClass("active")){jQuery(this).removeClass("active");return""}return"active"});jQuery(this).siblings(".m-nav .m-sub-nav").slideToggle()})})});$(function(){var d=$(".pc-nav").attr("data-type");$(".m-nav-btn i").click(function(){$(".m-nav-btn i").toggleClass("active")});$(".nav-ul>li ").each(function(){try{var X=$(this).attr("id");if("index"==d){if(X=="nvabar-item-index"){$("#nvabar-item-index a:first-child").addClass("active")}}else if("category"==d){var dJ=$(".pc-nav").attr("data-infoid");if(dJ!=null){var g=dJ.split(" ");for(var Q=0;Q<g.length;Q++){if(X=="navbar-category-"+g[Q]){$("#navbar-category-"+g[Q]+" a:first-child").addClass("active")}}}}else if("article"==d){var dJ=$(".pc-nav").attr("data-infoid");if(dJ!=null){var g=dJ.split(" ");for(var Q=0;Q<g.length;Q++){if(X=="navbar-category-"+g[Q]){$("#navbar-category-"+g[Q]+" a:first-child").addClass("active")}}}}else if("page"==d){var dJ=$(".pc-nav").attr("data-infoid");if(dJ!=null){if(X=="navbar-page-"+dJ){$("#navbar-page-"+dJ+" a:first-child").addClass("active")}}}else if("tag"==d){var dJ=$(".pc-nav").attr("data-infoid");if(dJ!=null){if(X=="navbar-tag-"+dJ){$("#navbar-tag-"+dJ+" a:first-child").addClass("active")}}}}catch(d){}});$(".pc-nav").delegate("a","click",function(){$(".nav-ul>li a").each(function(){$(this).removeClass("active")});if($(this).closest("ul")!=null&&$(this).closest("ul").length!=0){if($(this).closest("ul").attr("id")=="menu-navigation"){$(this).addClass("active")}else{$(this).closest("ul").closest("li").find("a:first-child").addClass("active")}}})});$(function(){$("#search-button").click(function(){$("#search-button i").toggleClass("icon-close"),$("#search-button i").toggleClass("icon-search"),$("#mask-hidden").toggleClass("mask-show"),$("#search-area").fadeToggle("fast")})});
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 */!function(d){d.fn.theiaStickySidebar=function(X){function dJ(X,dJ){var Q=g(X,dJ);Q||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),d(document).on("scroll."+X.namespace,function(X,dJ){return function(Q){var e=g(X,dJ);e&&d(this).unbind(Q)}}(X,dJ)),d(window).on("resize."+X.namespace,function(X,dJ){return function(Q){var e=g(X,dJ);e&&d(this).unbind(Q)}}(X,dJ)))}function g(X,dJ){return X.initialized===!0||!(d("body").width()<X.minWidth)&&(Q(X,dJ),!0)}function Q(X,dJ){X.initialized=!0;var g=d("#theia-sticky-sidebar-stylesheet-"+X.namespace);0===g.length&&d("head").append(d('<style id="theia-sticky-sidebar-stylesheet-'+X.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),dJ.each(function(){function dJ(){Q.fixedScrollTop=0,Q.sidebar.css({"min-height":"1px"}),Q.stickySidebar.css({position:"static",width:"",transform:"none"})}function g(X){var dJ=X.height();return X.children().each(function(){dJ=Math.max(dJ,d(this).height())}),dJ}var Q={};if(Q.sidebar=d(this),Q.options=X||{},Q.container=d(Q.options.containerSelector),0==Q.container.length&&(Q.container=Q.sidebar.parent()),Q.sidebar.parents().css("-webkit-transform","none"),Q.sidebar.css({position:Q.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),Q.stickySidebar=Q.sidebar.find(".theiaStickySidebar"),0==Q.stickySidebar.length){var Qf=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;Q.sidebar.find("script").filter(function(d,X){return 0===X.type.length||X.type.match(Qf)}).remove(),Q.stickySidebar=d("<div>").addClass("theiaStickySidebar").append(Q.sidebar.children()),Q.sidebar.append(Q.stickySidebar)}Q.marginBottom=parseInt(Q.sidebar.css("margin-bottom")),Q.paddingTop=parseInt(Q.sidebar.css("padding-top")),Q.paddingBottom=parseInt(Q.sidebar.css("padding-bottom"));var L=Q.stickySidebar.offset().top,b=Q.stickySidebar.outerHeight();Q.stickySidebar.css("padding-top",1),Q.stickySidebar.css("padding-bottom",1),L-=Q.stickySidebar.offset().top,b=Q.stickySidebar.outerHeight()-b-L,0==L?(Q.stickySidebar.css("padding-top",0),Q.stickySidebarPaddingTop=0):Q.stickySidebarPaddingTop=1,0==b?(Q.stickySidebar.css("padding-bottom",0),Q.stickySidebarPaddingBottom=0):Q.stickySidebarPaddingBottom=1,Q.previousScrollTop=null,Q.fixedScrollTop=0,dJ(),Q.onScroll=function(Q){if(Q.stickySidebar.is(":visible")){if(d("body").width()<Q.options.minWidth)return void dJ();if(Q.options.disableOnResponsiveLayouts){var Qf=Q.sidebar.outerWidth("none"==Q.sidebar.css("float"));if(Qf+50>Q.container.width())return void dJ()}var L=d(document).scrollTop(),b="static";if(L>=Q.sidebar.offset().top+(Q.paddingTop-Q.options.additionalMarginTop)){var D,eb=Q.paddingTop+X.additionalMarginTop,c=Q.paddingBottom+Q.marginBottom+X.additionalMarginBottom,Qb=Q.sidebar.offset().top,T=Q.sidebar.offset().top+g(Q.container),gC=0+X.additionalMarginTop,f=Q.stickySidebar.outerHeight()+eb+c<d(window).height();D=f?gC+Q.stickySidebar.outerHeight():d(window).height()-Q.marginBottom-Q.paddingBottom-X.additionalMarginBottom;var W=Qb-L+Q.paddingTop,dU=T-L-Q.paddingBottom-Q.marginBottom,fZ=Q.stickySidebar.offset().top-L,gB=Q.previousScrollTop-L;"fixed"==Q.stickySidebar.css("position")&&"modern"==Q.options.sidebarBehavior&&(fZ+=gB),"stick-to-top"==Q.options.sidebarBehavior&&(fZ=X.additionalMarginTop),"stick-to-bottom"==Q.options.sidebarBehavior&&(fZ=D-Q.stickySidebar.outerHeight()),fZ=gB>0?Math.min(fZ,gC):Math.max(fZ,D-Q.stickySidebar.outerHeight()),fZ=Math.max(fZ,W),fZ=Math.min(fZ,dU-Q.stickySidebar.outerHeight());var a=Q.container.height()==Q.stickySidebar.outerHeight();b=(a||fZ!=gC)&&(a||fZ!=D-Q.stickySidebar.outerHeight())?L+fZ-Q.sidebar.offset().top-Q.paddingTop<=X.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==b){var Xd=d(document).scrollLeft();Q.stickySidebar.css({position:"fixed",width:e(Q.stickySidebar)+"px",transform:"translateY("+fZ+"px)",left:Q.sidebar.offset().left+parseInt(Q.sidebar.css("padding-left"))-Xd+"px",top:"0px"})}else if("absolute"==b){var i={};"absolute"!=Q.stickySidebar.css("position")&&(i.position="absolute",i.transform="translateY("+(L+fZ-Q.sidebar.offset().top-Q.stickySidebarPaddingTop-Q.stickySidebarPaddingBottom)+"px)",i.top="0px"),i.width=e(Q.stickySidebar)+"px",i.left="",Q.stickySidebar.css(i)}else"static"==b&&dJ();"static"!=b&&1==Q.options.updateSidebarHeight&&Q.sidebar.css({"min-height":Q.stickySidebar.outerHeight()+Q.stickySidebar.offset().top-Q.sidebar.offset().top+Q.paddingBottom}),Q.previousScrollTop=L}},Q.onScroll(Q),d(document).on("scroll."+Q.options.namespace,function(d){return function(){d.onScroll(d)}}(Q)),d(window).on("resize."+Q.options.namespace,function(d){return function(){d.stickySidebar.css({position:"static"}),d.onScroll(d)}}(Q)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(Q.stickySidebar[0],function(d){return function(){d.onScroll(d)}}(Q))})}function e(d){var X;try{X=d[0].getBoundingClientRect().width}catch(d){}return"undefined"==typeof X&&(X=d.width()),X}var Qf={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return X=d.extend(Qf,X),X.additionalMarginTop=parseInt(X.additionalMarginTop)||0,X.additionalMarginBottom=parseInt(X.additionalMarginBottom)||0,dJ(X,this),this}}(jQuery);$(document).ready(function(){$("#sidebar,#index-right").theiaStickySidebar({additionalMarginTop:100})});$(function(){$("#toolbar").each(function(){$(this).find("#totop").click(function(){$("html, body").animate({"scroll-top":0},"fast")})});var d=false;$(window).scroll(function(){var X=$(window).scrollTop();if(X>500){$("#toolbar").data("status",true)}else{$("#toolbar").data("status",false)}if($("#toolbar").data("status")!=d){d=$("#toolbar").data("status");if(d){$("#totop").show()}else{$("#totop").hide()}}})});$(function(){var d=$("#flink li");d.addClass("iconfont icon-link")});

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9bb5374485245c40d4d2a6245aa1d66c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
