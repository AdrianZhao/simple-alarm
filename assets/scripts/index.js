'use strict';
/*
  OOP JavaScript
  Yuhan Zhao
*/

const audio = new Audio('./assets/audio/alarm.mp3');
audio.type = 'audio/mp3';

const display = document.querySelector('.time');

function ringing(){
  audio.play();
}

function updateTime() {
  const today = new Date();
  const hour = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  const now = `${hour}:${minutes}:`;
  display.innerText=`${hour}:${minutes}:${seconds}`;
}

function formatTime(time) {
  if (time < 10 && time.length != 2) {
    return '0' + time;
  }
  return time;
}

setInterval(updateTime, 10);