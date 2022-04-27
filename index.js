'use strict';
window.addEventListener('DOMContentLoaded', () =>{
    for (let elem of ['.volume-progress','.video-progress']){
        document.querySelector(elem).addEventListener('input', function handler(){
let value = this.value;
this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`;
        })
    }
})
    

