res();
window.onresize = res;
function res(){
  var a=0;
  var b = $('.hex:first-child').width()/(-2)-parseInt($('.hex:first-child').css('margin-right'))/2;
  var sec = $('.hex:nth-child(2)').css('margin-left');
   $('.hex:first-child').css('margin-left',b+'px').css('background-color','red');
    a=$('.hex:first-child').position().top;
   var index=0;
   $('.hex').each(function (ind){
        if($(this).position().top!==a){
            if(index)
            {

                $(this).css({'clear':'left','margin-left':b+'px','background-color':'red'});
                a=$(this).position().top;
                index=0;

            }
            else
            {
                a=$(this).position().top;
                 $(this).css({'clear':'none','margin-left':sec+'px','background-color':'green'});
                index=1;

            }
        }
        else
        {
            $(this).css({'clear':'none','margin-left':sec+'px','background-color':'green'});
        }
   });

};



/*
  var a=0;
    var cWidth=$('#wrapHex').width();
    var b = $('.hex:first-child').width()/(-2)-parseInt($('.hex:first-child').css('margin-right'))/2;
    $('.hex:first-child').css('margin-left',b+'px').css('background-color','red');

    $('.hex').each(function (){
        a+=parseInt($(this).width())+parseInt($(this).css('margin-right'));
        if(a>1.95*cWidth){
            a=0;
            a+=parseInt($(this).width())+parseInt($(this).css('margin-right'));
            $(this).css('margin-left',b+'px');
            $(this).css('background-color','red');
        }

    });




*/