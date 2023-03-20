var sound = new Audio("./sound.mp3");
sound.loop = true;

let showtime=function(){

    let t=currentTime();
    
    let clock=document.getElementById('clock');
    clock.innerText=t;

    let x=setTimeout(function(){showtime()},1000)
}
showtime();

function currentTime(){
    let time=new Date();
    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();
    let session='AM';
    if(hh==0){
        hh=12;
    }
    if(hh>12){
        hh=hh-12;
        session='PM'
    }
    if(hh<10){
        hh='0'+hh
    }
    if(mm<10){
        mm='0'+mm
    }
    if(ss<10){
        ss='0'+ss
    }

    let T=hh+':'+mm+':'+ss+" "+session;
    return T;
}

function setAlarm(){
    let hh=document.getElementById('hour').value;
    let mm=document.getElementById('min').value;
    let ss=document.getElementById('sec').value;
    let session=document.getElementById('session').value;
    if(hh<10){
        hh='0'+hh
    }
    if(mm<10){
        mm='0'+mm
    }
    if(ss<10){
        ss='0'+ss
    }
    let alarm=hh+":"+mm+':'+ss+" "+session;
    document.getElementById('alarm-time').innerText=alarm;
    document.getElementById('hour').disabled=true;
    document.getElementById('min').disabled=true;
    document.getElementById('sec').disabled=true;
    document.getElementById('session').disabled=true;
    document.getElementById('alarm').hidden=false;

    setInterval(function(){
        let time=currentTime();
        if(time==alarm){
            sound.play();
        }
    },1000)
}

function clearAlarm(){
    document.getElementById('hour').disabled=false;
    document.getElementById('min').disabled=false;
    document.getElementById('sec').disabled=false;
    document.getElementById('session').disabled=false;
    sound.pause();
    document.getElementById('alarm').hidden=true;
}