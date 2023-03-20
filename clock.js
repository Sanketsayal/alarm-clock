var sound = new Audio("./sound.mp3");
sound.loop = true;

//this function shows the current time
//it also plays the sound if if current time is set in alarm
let showtime=function(){

    let t=currentTime();
    
    let clock=document.getElementById('clock');
    clock.innerText=t;

    let x=setTimeout(function(){
        showtime();
        if(alarmList.includes(t)){
            sound.play();
        }

    },1000)
}
showtime();


//function to get the current time
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

let list=document.getElementById('alarms');

let alarmList=[];

//this function takes the user input and stores it in an array
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
    alarmList.push(alarm);
    updateList(alarm); 
}


//this function adds the newly added alarm to the alarms list
function updateList(alarm){
    let html=`
            <li class='alarm-time'>
                <p class='time'>${alarm}</p>
                <input type="submit" class='delete-button' id value='Delete' onclick='deleteItem(this)'>
            </li>`
    list.innerHTML+=html;
}

//function to stop the alarm
function clearAlarm(){
    sound.pause();
}

//function to delete the alarm and removing it from array of alarms
function deleteItem(e){
    let alarm=e.parentElement.innerText;
    const index=alarmList.indexOf(alarm);
    alarmList.splice(index,1);
    e.parentElement.remove();
}