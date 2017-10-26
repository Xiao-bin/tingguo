
$(function () {
            $(window).scrollTop(0);
            var index =0;
            var $btn = $(".btn ol li")
            $btn.find("a").on("click",function (ev) {
                ev.preventDefault();
                index = $(this).parent().index();
                $btn.eq(index).attr("class","cur")
                .siblings().removeClass();       
                /* console.log($(this.hash));*/
                $("html,body").stop().animate(
                {
                    scrollTop:$(this.hash).offset().top,
                }, {easing:'easeOutQuart', 
                duration: 2000});
            });
            $(".next").on("click",function(ev) {
             /*   console.log(this);*/
                 ev.preventDefault();
                $btn.eq(0).removeClass();
                $btn.eq(1).attr("class","cur");
                index = 1;
                $("html,body").stop().animate(
                {
                    scrollTop:$(this.hash).offset().top,
                }, {easing:'easeOutQuart', 
                duration: 2000});
            })
            var timer = null;//定时器节流
            $("body,html").bind("mousewheel",function(ev,delta) {
                ev.preventDefault(ev);
                clearTimeout(timer);
             /*   console.log(delta);*/
                 timer = setTimeout(function(){
                    if(delta<0){
                        index ++;
                        if (index >= $btn.length)
                        index =  $btn.length - 1;
                    }
                    else if(delta>0){
                        index --;
                        if (index < 0)
                            index = 0;
                    }
                    $btn.eq(index).attr("class","cur")
                    .siblings().removeClass();      
                    $("html,body").stop().animate(
                    {
                        scrollTop:$("body> div").eq(index+1).offset().top,
                    }, {easing:'easeOutQuart', duration: 2000});
                },300);
             })      
            $(window).bind("keydown",function (ev) {
                console.log()
                if (ev.keyCode == 38) {
                    index--;
                    if (index < 0)
                        index = 0;
                } else if (ev.keyCode == 40) {
                    index++;
                    if (index >= $btn.length)
                        index =  $btn.length - 1;
                }
                $btn.eq(index).attr("class","cur")
                .siblings().removeClass();      
                $("html,body").stop().animate(
                {
                    scrollTop:$("body> div").eq(index+1).offset().top,
                }, {easing:'easeOutQuart', duration: 2000});
            })
        })