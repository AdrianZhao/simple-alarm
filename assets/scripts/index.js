'use strict';
/*
  OOP JavaScript
  Yuhan Zhao
*/

const audio = new Audio('./assets/audio/alarm.mp3');
audio.type = 'audio/mp3';

const display = document.querySelector('.time');
const output = document.querySelector('.timer span');
const set = document.querySelector('.set-time');
const alarm = document.querySelector('.button');

let alarmTime = '';

function ringing(){
  audio.play();
  display.style.color = '#ff4655';
}

function updateTime() {
  const today = new Date();
  const hour = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  const now = `${hour}:${minutes}`;
  display.innerText=`${hour}:${minutes}:${seconds}`;
  if(alarmTime === now) { 
    ringing();
    alarmTime='';
  }
}

function formatTime(time) {
  if (time < 10 && time.length != 2) {
    return '0' + time;
  }
  return time;
}

function setAlarm(){
  let time = set.value.trim();
  if (time.length == 5 && time.includes(':')) {
    let formatHour = time.substring(0, 2);
    let formatMinute = time.substring(3, 5);
    time =formatHour.concat(formatMinute);
    if (!isNaN(time)) {
      let hour = time.substring(0, 2);
      let minute = time.substring(2, 4);
      const today = new Date();
      const currHour = formatTime(today.getHours());
      const currMinutes = formatTime(today.getMinutes());
      if (hour < 24 && minute < 60 && hour >= currHour) {
        if (hour == currHour && minute > currMinutes){
          alarmTime = `${hour}:${minute}`;
          output.innerText = `${hour}:${minute}`;
        } else if (hour > currHour) {
          alarmTime = `${hour}:${minute}`;
          output.innerText = `${hour}:${minute}`;
        } else {
          output.innerText = 'Please enter valid minutes';
        }
      } else {
        output.innerText = 'Please enter valid time';
      }
    } else {
      output.innerText = 'Please enter numbers';
    }
  } else {
    output.innerText = 'Please use valid time format';
  }
}

alarm.addEventListener('click', setAlarm);
setInterval(updateTime, 10);