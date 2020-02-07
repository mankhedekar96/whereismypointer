
    var facePosition=$('.eyes-container').offset();
  
    function blinking(){
      setInterval(()=>{
          eyesClose();
      },3000);
    }
    
    function eyesClose(){
      $('.eye').css('height','0px');
      $('.eye').css('margin-top','100px');
      $('.eye-ball-center').css('height','0px');
      $('.eye-ball').css('height','0px');
      
     setTimeout(()=>{
        eyesOpen();
       },300);
    }
    
    function eyesOpen(){
      $('.eye').css('height','100px');
      $('.eye').css('margin-top','50px');
      $('.eye-ball-center').css('height','35px');
      $('.eye-ball').css('height','70px');
    }
    
    blinking();

    document.onmousemove = getMousePosition;
    
    function getMousePosition(event){
      var obj = {x : event.clientX,
                 y : event.clientY};
      
      var leftPercentage=(obj.x/screen.width)*100;
      var topPercentage=(obj.y/screen.height)*100;
      
      var posX = (leftPercentage*40)/100;
      var posY = (topPercentage*45)/100;

      var centerPosX = (leftPercentage*15)/100;
      var centerPosY = (topPercentage*15)/100;
      
       $('.eye-ball').css('transform','translate( '+posX+'px, '+posY+'px )');
       $('.eye-ball-center').css('transform','translate( '+centerPosX+'px, '+centerPosY+'px )');
    //   $('.eye-ball-center').css('left',centerPosX);
    //   $('.eye-ball-center').css('top',centerPosY);
      
    }
    