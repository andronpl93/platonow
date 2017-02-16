var cube=$('.cube');
var rotPos={
    x:-45,
    y:-45,
    z:0
    };
    
var rotX=0;
var rotY=0;
var rotZ=0;
var rot2X=92;
var rot2Y=30;
var rot2Z=-28;
var sT,timerId;
var indexInt=0;
var x=0,y=0;
 var tex;

animation(true);      ////включить анимацию




//// чтобы таймеры не становились в очередь при еактивной вкладке 
window.onfocus = function(){
    animation(true);   
            }
window.onblur = function(){
    animation(false); 
            }




function animationCube(angle,mFrames){
    
      sT=setTimeout(function tick(){
      rotX+=angle*1.1;
      rotY+=angle;
      rotZ+=angle;
      textCss="perspective(100vh) rotateX("+rotX+"deg) rotateY("+rotY+"deg) rotateZ("+rotZ+"deg)";
     cube.css({
         'transform': textCss,
         '-ms-transform': textCss,
         '-o-transform': textCss,
         '-moz-transform': textCss,
         '-webkit-transform': textCss
         
     });
    // cube.css("transform","perspective(100vh) rotate3d("+2+","+1+","+0+","+rotX+"deg)");
      
      indexInt++;
      if(indexInt>mFrames)
      {
          clearTimeout(sT);
          sT=null;
          indexInt=0;
        //  alert(rotX +" "+rotY);
      }
      else
      {
               

        sT=setTimeout(tick,5); 
          
      }

  },5);
    
    
}


function animation(stat,angle,mFrames,duration,interval){
    angle = angle || 0.45;
    mFrames = mFrames || 200;
    duration = duration || 1000;
    interval = interval || 2000;

   if(stat)
   {   
            timerId = setTimeout(function tick() {  
                animationCube(angle,mFrames);
                tex=cube.css('transform');
                timerId = setTimeout(tick, interval);

            }, duration);
   }
   else
   {
       clearTimeout(timerId);
       clearTimeout(sT);
       timerId=null;
       
   }
}