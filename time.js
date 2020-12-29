window.onload = clock;


function clock(){
   
    var now = new Date();
    var hour = now.getHours();
    if ( hour > 12 ){ hour = hour - 12;}
    var min = now.getMinutes();
    var sec = now.getSeconds();    

    if ( hour === 12 ) { 
        document.getElementById('pp').innerText = "가영시 " + min + "분 " + sec + "초";
    }else if ( hour === 0){
        document.getElementById('pp').innerText = "가영시 " + min + "분 " + sec + "초";
    }else{
        document.getElementById('pp').innerText = hour + "시 " + min + "분 " + sec + "초";
    }
    
    setTimeout(clock,1000);
    pic();
}



function pic(){
    var ran_num = Math.floor(Math.random() * 24);
    document.getElementById('pi').src = `./image/${ran_num}.jpg`;
}
    
