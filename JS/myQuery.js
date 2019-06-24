$(document).ready(function () {
    $("#em_menu>ul").last().children("li").css("float","left");
    $("#em_menu>ul").first().children("li").children("a").on("click",function () {
        $(this).next().slideToggle("normal");
        changeM($(this).children("div"));
    });
    $("#em_menu>ul").eq(1).children("li").hover(function () {
        $(this).children("ul").slideDown("normal");
        changeM($(this).find("div"));
    },function () {
        $(this).children("ul").slideUp("normal");
        changeM($(this).find("div"));
    });
});
function changeM(node) {
    if(node){
        if(node.css("borderTopColor")=="rgba(0, 0, 0, 0)"){
            node.css({borderColor:"transparent",borderTopColor:"#02feff"});
        }else{
            node.css({borderColor:"transparent",borderLeftColor:"#02feff"});
        }
    }
}