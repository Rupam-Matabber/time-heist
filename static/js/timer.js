const clock = document.getElementById("clock");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");


var eventTime= new Date("2023-03-22T18:30:00Z").getTime(); 
var currentTime = new Date().getTime();
var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime, 'milliseconds');

setInterval(function(){
  duration = moment.duration(duration - 1000, 'milliseconds');
  if(duration.days()<10){
    days.innerText='0'+duration.days();
  }
  else{
    days.innerText=(duration.days());

  }

  if(duration.hours()<10){
    hours.innerText='0'+duration.hours();
  }
  else{
   
    hours.innerHTML=(duration.hours());

  }
  
  if(duration.minutes()<10){
    minutes.innerText='0'+duration.minutes();
  }
  else{
    mins.innerHTML=(duration.minutes());

  }
  
  if(duration.seconds()<10){
    secs.innerText='0'+duration.seconds();
  }
  else{
    secs.innerHTML=(duration.seconds())
  }
    
}, 1000);