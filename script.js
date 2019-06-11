//inside IIFE
(function(){
    var switch1=document.getElementById("x");
    var b=document.getElementsByTagName("body");
    var body=b[0];
    var flag=0;
    var bColor1="rgb(250, 246, 246)";
    var color1="black";
    var bColor2="rgba(0, 0, 0, 0.87)";
    var color2="white";
    
    function toggle(){
        if(flag==0){
            body.style.backgroundColor=bColor2;
            body.style.color=color2;
            flag=1;
        }else{
            body.style.backgroundColor=bColor1;
            body.style.color=color1;
            flag=0;
        }
    }
    switch1.addEventListener('click',toggle);
})();

