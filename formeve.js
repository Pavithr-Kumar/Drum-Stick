var audio=document.querySelectorAll("audio");
var button=document.querySelectorAll("button");
var keys=['a', 's','d','f','g','h','j','k','l'];



document.body.addEventListener('keydown',function(event){
    console.log(event.key)
    
for( let i=0;i<keys.length;i++){
   if(event.key===keys[i]){

    audio[i].play();
    audio[i].currentTime=0; 
    button[i].classList.toggle('active')
   }

}


})
document.body.addEventListener('keyup',function(event){

    for( let i=0;i<keys.length;i++){
       if(event.key===keys[i]){
       
        button[i].classList.toggle('active')
       }
    
    }
    
    })

