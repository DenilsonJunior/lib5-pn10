events.on("ready",function(){1==scorm.loadObject("lm1")&&($(".btn1").addClass("visited"),$(".btn2").removeClass("block"),$(".mapa0").addClass("hide"),$(".mapa1").removeClass("hide")),1==scorm.loadObject("lm2")&&($(".btn2").addClass("visited"),$(".btn3").removeClass("block"),$(".mapa1").addClass("hide"),$(".mapa2").removeClass("hide")),1==scorm.loadObject("lm3")&&($(".btn3").addClass("visited"),$(".btn4").removeClass("block"),$(".mapa2").addClass("hide"),$(".mapa3").removeClass("hide")),1==scorm.loadObject("lm4")&&($(".btn4").addClass("visited"),$(".arrow-right").removeClass("hide"),$(".mapa3").addClass("hide"),$(".mapa4").removeClass("hide"),scorm.setCompleted()),$(".btn1").on("click",function(){$(".map").addClass("hide"),$(".map1").removeClass("hide"),$(".map1").focus()}),$(".btn2").on("click",function(){$(".map").addClass("hide"),$(".map2").removeClass("hide")}),$(".btn3").on("click",function(){$(".map").addClass("hide"),$(".map3").removeClass("hide")}),$(".btn4").on("click",function(){$(".map").addClass("hide"),$(".map").removeClass("hide")})});
//# sourceMappingURL=script.js.map
