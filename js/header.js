
//  阻止默认事件
/*$('.dropdown-toggle').click(function(event){
    event.preventDefault();
})*/

//  针对不用设备执行不同的触发方法
if(window.screen.width>=768){
    $('.dropdown-toggle').parent().hover(function(event){
        $(this).children('.dropdown-menu').stop(true,false);
        $(this).children('.dropdown-menu').slideDown("slow");
        $(this).addClass('open')
    },function(event){
        $(this).children('.dropdown-menu').stop(true,false);
        $(this).children('.dropdown-menu').slideUp("slow");
        $(this).removeClass('open')
    })
}else {
    $('.dropdown-toggle').click(function (event) {
        $(this).parent().toggleClass('open')
    })
}
if(window.screen.width<768){
    $('.dropdown-toggle').click(function (event) {
        event.preventDefault();
    })
}

function listHeight(){
    if(window.screen.width<=1024){
        setTimeout(function(){
            var liArr = $('.pro_icon_div .pro1_middle li')
            if (liArr.length > 0) {
                for (var i = 0; i < liArr.length; i += 2) {
                    var num1 = liArr.eq(i).css('height');
                    console.log(num1)
                    var num2 = liArr.eq(i + 1).css('height');
                    if(num1 > num2){
                        liArr.eq(i+1).css('height',num1)
                    }else{
                        liArr.eq(i).css('height',num2)
                    }

                }
            }
        },100)

    }
}
var topOpen=false
$('.search-logo').click(function(event){
//        $('#search_div').css('display','block')
    event.stopPropagation()
    topOpen=true;
    $('#search_div').fadeIn("slow");
    $('#search_div input')[0].focus()
});
$('.search-logo1').click(function(event){
//        $('#search_div').css('display','block')
    event.stopPropagation()
    topOpen=true;
    $('#search_div').fadeIn("slow");
    $('#search_div input')[0].focus()
});
function fTopClose(){
    opOpen=false;
    $('#search_div').fadeOut("slow")
}
$('.search_close').click(fTopClose);
$('body').click(function(event){
   /* if(){
        return
    }*/
    if($(event.target).is('.search_bg')||!$(event.target).parents('#search_div')[0]){
        if(topOpen){
            fTopClose()
        }
    }
})

if(window.screen.width<=1024){
    $('#myform').on('submit', function () {
        $(location).attr('href', '../../view/search/search.html');
    });
}
$('.search_input a').click(function(e){
    e.preventDefault();
    $(location).attr('href', '../../view/search/search.html?keywords='+$('#myform input').val());
})


