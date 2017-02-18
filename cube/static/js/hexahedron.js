var settings = {
     hKol          : 0,
     content       : [
                     '<img src="../../static/img/hex/adaptive.gif">',
                     '<img src="../../static/img/hex/rs.gif">',
                     '<img src="../../static/img/hex/pg.gif">',
                     '<img src="../../static/img/hex/vk.gif">',
                     '<img src="../../static/img/hex/fb.gif">',
                     '<img src="../../static/img/hex/gp.gif">',
                     '<img src="../../static/img/hex/ig.png">',
                     '<img src="../../static/img/hex/adaptive2.gif">'
                     ]
     }

res();
window.onresize = hui;




function hui(){

    $('.hex:not(:first)').each(function (ind){
        $(this).css({'clear':'none','margin-left':'0px'}).children('div:first-child').addClass('back');
    });
    setTimeout(res,150);
};

function res(){
  settings.hKol=0;
  var cHei=$('section').height();
  var hexHei=$('.hex:first-child').height()+parseInt($('.hex:first-child').css('margin-top'));
  var a=0;
  var marginLeft = $('.hex:first-child').width()/(-2)-parseInt($('.hex:first-child').css('margin-right'))/2;


  $('.back').each(function (index){
        $(this).html(" ");
        $(this).parent().css('background-color','black');
  });

  $('.hex:first-child').css('margin-left',marginLeft+'px').children('.back').removeClass('back');
  a=$('.hex:first-child').position().top;

   var index=0;
   $('.hex:not(:first-child)').each(function (ind){
        if($(this).position().top!==a){

           if($(this).position().top+$(this).height()+ 2*parseInt($(this).css('margin-top')) < cHei)
            {
                settings.hKol-=1;
              //  $(this).css('background-color','green');
            }
            if(index)
            {

                $(this).css({'clear':'left','margin-left':marginLeft+'px'}).children('.back').removeClass('back');
                a=$(this).position().top;
                index=0;

            }
            else
            {
                a=$(this).position().top;
                $(this).children('.back').removeClass('back');
                index=1;
            }
        }
        if($(this).position().top+$(this).height()+ 2*parseInt($(this).css('margin-top'))< cHei)
        {
            settings.hKol+=1;
          //  $(this).css('background-color','red');
        }
        else
            $(this).children('.back').removeClass('back');

   });
    imagePlacement ();
 //   alert(settings.hKol+" "+settings.content.length);
};




function imagePlacement (){
    var mas=settings.content.slice();

    var i=0;
    $('.back').each(function (index){
        if(i<settings.content.length){
           // if(index%Math.ceil(settings.hKol/(settings.hKol-settings.content.length))!=0){
                $(this).html(randList(mas));
                $(this).parent().css('background-color','transparent');
                i++;
           // }

        }
    });

}

function randList(list){
    var r,v;
    while(true){
        r=Math.floor(Math.random()*list.length);
        if(list[r]!==undefined){
            v = list[r];
            list[r]=undefined;
            return v;
        }
    }
}




























