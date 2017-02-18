var hKol=0;
var countPicture=10;
var content=[['#74CDDB','Адаптивный дизайн'],
             ['#7DE56F','Регистрация через соцсети'],
             ['','<img src="../img/hex/">']];
res();

window.onresize = hui;





function hui(){

    $('.hex:not(:first)').each(function (ind){
        $(this).css({'clear':'none','margin-left':'0px'}).children('div:first-child').addClass('back');
    });
    setTimeout(res,150);
};




function res(){
  hKol=0;
  var cHei=$('section').height();
  var hexHei=$('.hex:first-child').height()+parseInt($('.hex:first-child').css('margin-top'));
  var normHei=hexHei;
  var a=0;
  var b = $('.hex:first-child').width()/(-2)-parseInt($('.hex:first-child').css('margin-right'))/2;

  $('.hex:first-child').css('margin-left',b+'px').children('.back').removeClass('back');
  a=$('.hex:first-child').position().top;

   var index=0;
   $('.hex:not(:first)').each(function (ind){
        if($(this).position().top!==a){

           if($(this).position().top+$(this).height()+ parseInt($(this).css('margin-top')) < cHei)
            {
                hKol-=1;
            }
            if(index)
            {

                $(this).css({'clear':'left','margin-left':b+'px'}).children('.back').removeClass('back');
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
        if($(this).position().top+$(this).height()+ parseInt($(this).css('margin-top'))< cHei)
            hKol+=1

   });

};




