window.onload = clock;

function clock(){
   
    var now = new Date();
    var day = now.getDay(); //0~6 일요일~토요일
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();    
        
    //미쓰백 program alarm
    if ( day === 6) {    
        browser.browserAction.setBadgeText({text: "미쓰"});
     }else{    
        browser.browserAction.setBadgeText({text: ""});
    }

    //가영시 special time alarm
    if ( hour > 12 ){ hour = hour - 12;} //24H -> 12H
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

//random number & image show
function pic(){ 
    var ran_num = Math.floor(Math.random() * 24);
    document.getElementById('pi').src = `./image/${ran_num}.jpg`;
}


