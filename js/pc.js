define([],function(){var e=function(){var e=$(".tips-box");return{show:function(){e.removeClass("hide")},hide:function(){e.addClass("hide")},init:function(){}}}(),n=function(){var e=$(".tagcloud a");e.css({"font-size":"12px"});for(var n=0,i=e.length;n<i;n++){var o=e.eq(n).html().length%5+1;e[n].className="",e.eq(n).addClass("color"+o)}},i=function(e){var n=$(".switch-wrap");n.css({transform:"translate(-"+100*e+"%, 0 )"}),$(".icon-wrap").addClass("hide"),$(".icon-wrap").eq(e).removeClass("hide")},o=function(){var o=$("#myonoffswitch"),s=$(".second-part"),t=$(".first-part");o.click(function(){o.hasClass("clicked")?(o.removeClass("clicked"),s.removeClass("turn-left"),t.removeClass("turn-left")):(o.addClass("clicked"),s.addClass("turn-left"),t.addClass("turn-left"),n())});var a=!1,r=!1;$(".icon").bind("mouseenter",function(){a=!0,e.show()}).bind("mouseleave",function(){a=!1,setTimeout(function(){r||e.hide()},100)}),$(".profilepic").bind("mouseover",function(){$(this).addClass("hover-profile")}).bind("mouseout",function(){$(this).removeClass("hover-profile")}),$(".tips-box").bind("mouseenter",function(){r=!0,e.show()}).bind("mouseleave",function(){r=!1,setTimeout(function(){a||e.hide()},100)}),$(".tips-inner li").bind("click",function(){var n=$(this).index();i(n),e.hide()})};return{init:function(){n(),o(),e.init(),"/"!=location.pathname||sessionStorage.overviews?$("#container").show():($("#overviews").show(),$("body").css("overflow","hidden"),require(["/js/reSlider.js"],function(e){new reSlider({elem:"slider-wrap",allowAuto:!0})}),setTimeout(function(){$("#container").show()},500)),$("#btn-begin-blog").on("mouseover",function(){$(".left-shadow").animate({left:"0px"},"ease-in"),$(".right-shadow").animate({right:"0px"},"ease-in")}).on("mouseout",function(){$(".left-shadow").animate({left:"-50%"},"ease-in"),$(".right-shadow").animate({right:"-50%"},"ease-in")}),$("#btn-begin-blog").click(function(){sessionStorage.overviews=!0,$("body").css("overflow","auto"),$("#busuanzi_container_site_uv span").text($(".welcome-info span").text()),$("#overviews").hide()})}}});