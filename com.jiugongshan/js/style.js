window.onload=function(){
var currentIndex=0;
var time=null;
var ss;
 outbox();
window.onresize=function () {
    clearInterval(time);
        ss=$(window).width();
        if(currentIndex==4){
            $(".box-img").stop().animate({"margin-left":(-currentIndex-1)*ss+"px"},"2s",function () {
                $(".box-img").css("margin-left",-ss+"px");
            });
            currentIndex=0;
        }else{
            $(".box-img").stop().animate({"margin-left":(-currentIndex-1)*ss+"px"},"2s");
        }
        // currentIndex=$(event.target).index()
        outbox();
};
function outbox() {
    function Move() {
        time=setInterval(function () {
            currentIndex++;
            slideOne();
            itemHover();
        },2000)
    }
    function Clear() {
        if(time){
            clearInterval(time);
        }
    }
    function next() {
        Clear();
        currentIndex++;
        slideOne();
        itemHover();
        Move();
    }
    function prev() {
        Clear();
        currentIndex--;
        slideTwo();
        itemHover();
        Move();
    }

    ss=$(window).width();
    function slideOne() {
        if(currentIndex==4){
            $(".box-img").stop().animate({"margin-left":(-currentIndex-1)*ss+"px"},"linear",function () {
                $(".box-img").css("margin-left",-ss+"px");
            });
            currentIndex=0;
        }else{
            $(".box-img").stop().animate({"margin-left":(-currentIndex-1)*ss+"px"},"linear");
        }
    }
    function slideTwo() {
        if(currentIndex==-1){
            $(".box-img").stop().animate({"margin-left":"0px"},"linear",function () {
                $(".box-img").css("margin-left",-5*ss+"px");
            })
            currentIndex=3
        }else{
            $(".box-img").stop().animate({"margin-left":(-currentIndex-1)*ss+"px"},"linear");
        }
    }
    $("#indexLine").on("click","div",function (e) {
        Clear();
        var event=window.event || e;
        currentIndex=$(event.target).index();
        slideOne();
        itemHover();
        Move();
    })
    function itemHover() {
        var indexLine=$("#indexLine");
        indexLine=indexLine.children();
        indexLine.css("background-color","");
        indexLine.eq(currentIndex).css("background-color","#FFAF00");
    }
    Move();
    itemHover();
}

$(".bnnr-con").mouseover(function(){
     $(".bnnr-con").css({"right":"0"})
})

$(".bnnr-con").mouseout(function(){
     $(".bnnr-con").css({"right":"-660px"})
})

$(window).scroll(function(){
    var len=$(window).scrollTop();
    if(len>=990){
        $(".fixed-top").css({"opacity":"1","z-index":"99"})
        $(".fh-top").css({"opacity":".5","z-index":"99"})
        $(".cbl").css({"width":"71px"})
    }
    else{
        $(".fixed-top").css({"opacity":"0","z-index":"-99"})
        $(".fh-top").css({"opacity":"0","z-index":"-99"})
        $(".cbl").css({"width":"0px"})
    }
});
    var len=$(window).scrollTop();
    if(len>=990){
        $(".top").css({"opacity":"1","z-index":"99"})
        $(".cbl").css({"width":"71px"})
    }
    else{
        $(".top").css({"opacity":"0","z-index":"-99"})
        $(".cbl").css({"width":"0px"})
    }
$("#topp").click(function(){
    $("body,html").animate({scrollTop:0},500);
    // document.body.scrollTop="0";
    // dd=0
});
    $(".fh-top").click(function(){
        $("body,html").animate({scrollTop:0},500);
        // document.body.scrollTop="0";
        // dd=0
    })
    $("#book").mouseover(function(){
        $("#book p").stop().animate({width:330+"px"},500);
        // document.body.scrollTop="0";
        // dd=0
    })
    $("#book").mouseleave(function(){
        $("#book p").stop().animate({width:0},500);
        // document.body.scrollTop="0";
        // dd=0
    })
};
var menu=$(".jl-menu");
var menu1=$(".goin-menu a");
for(var i=0;i<menu.length;i++){
    $(menu[i]).click(function(){
        for(var j=0;j<menu.length;j++){
            $(menu[j]).css("background","#F4F4F4")
            $(menu[j]).css("color","#000");
        }
        $(this).css("background","#4FCFDC")
        $(this).css("color","#fff");
        $("#yqje").text($(this).text())
    })
}
$(".goin-menu li").eq(0).css("color","#fff");
$(".goin-menu1 li").eq(0).css("color","#fff");

function lunboo() {
    var flag=$(".lb-nbox-ne").children().length-3;
    var flagg=$(".lb-nbox-ne").children().length;
    $(".lb-nbox-ne").css("width",100+flag*34+"%");
    $(".img-box").css("width",(100/flagg)-0.7+"%");
    $(".shang").css("height",$(".lb-nbox-ne").height()-2);
    $(".xia").css("height",$(".lb-nbox-ne").height()-2);
    var i=0;
    var imglenght1=$(".img-box").length;
    var imglenght=$(".img-box").length-2;
    var cd=$(".lb-nbox-ne").width()-578;
    $(".shang").click(function () {
        if(i==0){
            i=imglenght+1;
        }
        i--;
        $(".lb-nbox-ne").stop().animate({marginLeft:-(i*$(".img-box").width()+16)+"px"})
    })
    $(".xia").click(function () {
        i++;
        if(i==imglenght){
            i=0;
        }
        $(".lb-nbox-ne").stop().animate({marginLeft:-(i*($(".img-box").width()+16))+"px"})
    })
    for(var j=0;j<imglenght1;j++){
        $(".img-box")[j].onmousedown=function () {
            $(".display").css("opacity","0")
            $(".display").css("transition","all 0.1s linear")
        }
        $(".img-box")[j].onmouseup=function () {
            $(".display").css("opacity","1");
            console.log($(this).find("img").attr("src"));
            var ss=$(this).find("img").attr("src")
            $(".display").find("img").attr('src',ss);
            $(".display").css("opacity","1");
        }
    }
    $(".display").click(function () {
        $(".big-box").css("display","block");
        var ss=$(this).find("img").attr("src");
        $(".big-box-img").find("img").attr('src',ss);
    })
    $("#guanb").click(function () {
        $(".big-box").css("display","none");
    })
}
function bb() {
    var imglenght2=$(".img-box1").length;
    var imglenght=$(".img-box1").length-2;
    var flag=$(".lb-nbox-ne").children().length-3;
    var flagg=$(".lb-nbox-ne").children().length;
    var flag1=$(".lb-nbox-ne1").children().length-3;
    var flagg1=$(".lb-nbox-ne1").children().length;
    var a=0;
    $(".lb-nbox-ne").css("width",100+flag*34+"%");
    $(".lb-nbox-ne1").css("width",100+flag1*34+"%");
    $(".img-box").css("width",(100/flagg)-0.7+"%");
    $(".img-box1").css("width",(100/flagg1)-0.7+"%");
    $(".shang").css("height",$(".lb-nbox-ne").height()-2);
    $(".shang1").css("height",$(".lb-nbox-ne").height()+10);
    $(".xia").css("height",$(".lb-nbox-ne").height()-2);
    $(".xia1").css("height",$(".lb-nbox-ne").height()-2+10);



    $(".shang1").click(function () {
        console.log(a)
        if(a==0){
            a=imglenght+1;
        }
        a--;
        $(".lb-nbox-ne1").animate({marginLeft:-(a*$(".img-box1").width()+16)+"px"});
    })
    $(".xia1").click(function () {
        a++;
        if(a==imglenght){
            a=0;
        }
        $(".lb-nbox-ne1").animate({marginLeft:-(a*$(".img-box1").width()+16)+"px"})
    });
    console.log(a)
    for(var j=0;j<imglenght2;j++){
        $(".img-box1")[j].onmousedown=function () {
            $(".display1").css("opacity","0")
            $(".display1").css("transition","all 0.1s linear")
        }
        $(".img-box1")[j].onmouseup=function () {
            $(".display1").css("opacity","1");
            var ss=$(this).find("img").attr("src")
            $(".display1").find("img").attr('src',ss);
            $(".display1").css("opacity","1");
        }
    }
    $(".display1").click(function () {
        $(".big-box").css("display","block");
        var ss=$(this).find("img").attr("src");
        $(".big-box-img").find("img").attr('src',ss);
    })
    $("#guanb1").click(function () {
        $(".big-box").css("display","none");
    })

}




$(".cbl").children().eq(2).attr("target","_blank");
$(".fh-top").children().css("width","80%");
$(".fh-top").children().css("margin","10% 0 0 11%");
$("#zn").mouseover(function () {
    $(".lianb").css("display","block");
    // $(".lianb1").css("display","none");
})

$("#zn").mouseout(function () {
    $(".lianb").css("display","none");
    // $(".lianb1").css("display","block");
})
$(".lianb").mouseout(function () {
    $(".lianb").css("display","none");
    $(".lianb1").css("display","block");
})


$(".lianb").mouseover(function () {
    $(".lianb").css("display","block");
    $(".lianb1").css("display","none");
});

function fanye() {
    var ss=1;
    $(".you").click(function () {
        $("body,html").animate({scrollTop:120+"px"},500);
        for(var q=0;q<$(".new-bos").length;q++){
            $(".new-bos").eq(q).css("display","none")
        };
        ss++;
        if (ss==$(".new-bos").length){
            $(".you").css("display","none")
        };
        if(ss>0){
            $(".zuo").css("display","block")
        };
        $(".yema").text(ss);
        $(".new-bos").eq(ss-1).css("display","block")
    })
    $(".zuo").click(function () {
        $("body,html").animate({scrollTop:120+"px"},500);
        for(var q=0;q<$(".new-bos").length;q++){
            $(".new-bos").eq(q).css("display","none")
        };
        ss--;
        if (ss!=$(".new-bos").length){
            $(".you").css("display","block")
        };
        if(ss<=1){
            ss=1
        };
        $(".yema").text(ss);
        $(".new-bos").eq(ss-1).css("display","block")
    })
}
function fanye1() {
    var ss=1;
    $(".you1").click(function () {
        $("body,html").animate({scrollTop:120+"px"},500);
        for(var q=0;q<$(".new-bos1").length;q++){
            $(".new-bos1").eq(q).css("display","none")
        };
        ss++;
        if (ss==$(".new-bos1").length){
            $(".you1").css("display","none")
        };
        if(ss>0){
            $(".zuo1").css("display","block")
        };;
        $(".yema1").text(ss);
        $(".new-bos1").eq(ss-1).css("display","block")
    })
    $(".zuo1").click(function () {
        $("body,html").animate({scrollTop:120+"px"},500);
        for(var q=0;q<$(".new-bos1").length;q++){
            $(".new-bos1").eq(q).css("display","none")
        };
        ss--;
        if (ss!=$(".new-bos1").length){
            $(".you1").css("display","block")
        };
        if(ss<=1){
            ss=1
        };
        $(".yema1").text(ss);
        $(".new-bos1").eq(ss-1).css("display","block")
    })
}
function fanye2() {
    var ss=1;
    $(".you2").click(function () {
        $("body,html").animate({scrollTop:120+"px"},500);
        for(var q=0;q<$(".new-bos").length;q++){
            $(".new-bos2").eq(q).css("display","none")
        };
        ss++;
        if (ss==$(".new-bos2").length){
            $(".you2").css("display","none")
        };
        if(ss>0){
            $(".zuo2").css("display","block")
        };
        $(".yema2").text(ss);
        $(".new-bos2").eq(ss-1).css("display","block")
    })
    $(".zuo2").click(function () {
        $("body,html").animate({scrollTop:120+"px"},500);
        for(var q=0;q<$(".new-bos2").length;q++){
            $(".new-bos2").eq(q).css("display","none")
        };
        ss--;
        if (ss!=$(".new-bos2").length){
            $(".you2").css("display","block")
        };
        if(ss<=1){
            ss=1
        };
        $(".yema2").text(ss);
        $(".new-bos2").eq(ss-1).css("display","block")
    })
}



function shaixuan() {
    $(document).ready(function(){

        $("#select1 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectA").remove();
            } else {
                var copyThisA = $(this).clone();
                if ($("#selectA").length > 0) {
                    $("#selectA a").html($(this).text());
                } else {
                    $(".select-result dl").append(copyThisA.attr("id", "selectA"));
                }
            }
        });

        $("#select2 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectB").remove();
            } else {
                var copyThisB = $(this).clone();
                if ($("#selectB").length > 0) {
                    $("#selectB a").html($(this).text());
                } else {
                    $(".select-result dl").append(copyThisB.attr("id", "selectB"));
                }
            }
        });

        $("#select3 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectC").remove();
            } else {
                var copyThisC = $(this).clone();
                if ($("#selectC").length > 0) {
                    $("#selectC a").html($(this).text());
                } else {
                    $(".select-result dl").append(copyThisC.attr("id", "selectC"));
                }
            }
        });

        $("#selectA").live("click", function () {
            $(this).remove();
            $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $("#selectB").live("click", function () {
            $(this).remove();
            $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $("#selectC").live("click", function () {
            $(this).remove();
            $("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $(".select dd").live("click", function () {
            if ($(".select-result dd").length > 1) {
                $(".select-no").hide();
            } else {
                $(".select-no").show();
            }
        });

    });
}

$(".gd").mouseover(function(){
    $(".gd").css("color","#4FCFDC");
    $(".gd-one").css("opacity","0")
     $(".gd-two").css("display","block")
})
$(".gd").mouseout(function(){
    $(".gd").css("color","#656565");
    $(".gd-one").css("opacity","1")
    $(".gd-two").css("display","none")
})