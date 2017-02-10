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




var indexMouse=false;
var startX=0,startY=0,endX=0,endY=0;
$('body').bind('mousedown touchstart',function(){
    animation(false);

    event.preventDefault();
    m0X=event.clientX;
    m0Y=event.clientY; 
    indexMouse=true;

});

$('body').bind('mousemove touchmove ',function(){

    if(indexMouse)
    {   
        if ((event.clientX)&&(event.clientY)) {
            mX = event.clientX;
            mY = event.clientY;
            } else if (event.targetTouches) {
            mX = event.targetTouches[0].clientX;
            mY = event.targetTouches[0].clientY;
            event.preventDefault();
            }
       // if (Math.abs(mX-m0X)<30 && Math.abs(mY-m0Y)<30)
      //      return 0;
        //animationCube(0.9,(mX/clientW)*400);
        //rot+=0.9;
        if(mX-m0X > 1)
            rot2Y-=1;
        if(mX-m0X < -1)
            rot2Y+=1;
        if(mY-m0Y > 1)
            rot2X-=1;
        if(mY-m0Y < -1)
            rot2X+=1;

        m0X=mX;
        m0Y=mY;
       console.log(mY);
       //console.log(cube.css('transform'));
       cube.css("transform","perspective(100vh) rotateX("+rot2X+"deg) rotateY("+rot2Y+"deg) rotateZ(-28deg)");
       
    }
});

$('body').bind('mouseup touchend',function(){

    event.preventDefault();
    startX=0;
    startY=0 
    indexMouse=false;
});

//// чтобы таймеры не становились в очередь при еактивной вкладке 
window.onfocus = function(){
    animation(true);   
            }
window.onblur = function(){
    animation(false); 
            }




function animationCube(angle,mFrames){
    
      sT=setTimeout(function tick(){
      rotX+=angle;
      rotY=rotX*0.3;
      //rotZ=-rotX*0.3;
     // cube.css("transform","perspective(100vh) rotateX("+rotX+"deg) rotateY("+rotY+"deg) rotateZ("+0+"deg)");
     cube.css("transform","perspective(100vh) rotate3d("+2+","+1+","+0+","+rotX+"deg)");
      
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
    angle = angle || 0.9;
    mFrames = mFrames || 100;
    duration = duration || 1000;
    interval = interval || 3000;

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