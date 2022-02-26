'use strict';

// DOM Selector

let checkBox = document.getElementById('checkboxPro');
let hideProfileNavbar = document.querySelector('.hideProfileNavbar');
let zIndex = document.querySelector('.zIndex');

checkBox.addEventListener('click', (e)=>{
    if( checkBox.checked === true ) {
        hideProfileNavbar.className = 'hideProfileNavbar showListItems';
        zIndex.className = 'zIndex cross';
    } else if ( checkBox.checked === false ) {
        hideProfileNavbar.className = 'hideProfileNavbar hideListItems';
        zIndex.className = 'zIndex menuBar';
    }
})

// Typing Text

// Create a new Array
let allText = ['Web Developer', 'Web Designer', 'Wordpress Designer'];

let counter = 0;
let countIndex = 0;
let textAnimate = 0;
let textLetter = 0;


let typingTextAnimate = ()=>{
    textAnimate = allText[counter];
    textLetter = textAnimate.slice(0, countIndex++);
    // Dom Selector
    let typingText = document.getElementById('typingText').innerHTML = textLetter;

    // It Statement
    if(textLetter.length == textAnimate.length) {
        counter++;
        countIndex = 0;
    }
    if( counter == allText.length ) {
        counter = 0;
    }
}

setInterval(typingTextAnimate, 200);

// Time Zone

// DOM Selector



function finalTime (){

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let amPM = document.getElementById('amPm');

    let timeZone = new Date();
    let newHours = timeZone.getHours();
    let newMinutes = timeZone.getMinutes();
    let newSeconds = timeZone.getSeconds();
    let newAmPm = 'AM';

    if ( newHours >= 12 ) {
        newHours = newHours - 12;
        newAmPm = 'PM';
    } else if (newHours <= 12) {
        newAmPm = 'AM';
    }

    if ( newMinutes <= 9 ) {
        newMinutes = `0${newMinutes}`;
    } else {
        newMinutes = newMinutes;
    }

    if ( newSeconds % 2 == 0 ) {
        seconds.style.color = 'rgb(255, 0, 106)'
    } else {
        seconds.style.color = 'rgb(142, 68, 173)'
    }

    hours.textContent = `${newHours}: ` ;
    minutes.textContent = `${newMinutes}: `;
    seconds.textContent = `${newSeconds}`;
    amPM.textContent = newAmPm;


}

setInterval(finalTime, 1000)
