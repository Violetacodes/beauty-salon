const items = document.querySelectorAll('.item');
items.forEach( item => {
item.addEventListener('mouseover', ()=>{
    removeFocus ();
    item.classList.add('selected');
})

removeFocus = ()=> {
    items.forEach( item => {
        item.classList.remove('selected');
    })
}

})

const citat = document.querySelector('.citation');
citat.addEventListener('click', ()=>{
    window.open('http://www.amybloom.com/' , '_blank');

})


const todo = document.querySelector('.todo');
const inputField = document.querySelector('.inputField');
const but = document.querySelector('.but');

but.addEventListener('click', function(){
   const item = document.createElement('li');
   item.innerText= inputField.value;
  if (inputField.value.length === 0) {
return false;
}
    item.classList.add('done');
todo.appendChild(item); 
inputField.value = "";

item.addEventListener('click', ()=>{
    item.classList.add('toDoDone');
 })
 item.addEventListener('dblclick', ()=>{
     todo.removeChild(item);
 })

})

function openingCountdown(){
    const openingDate = new Date ("April 1, 2023 00:00");
    const now = new Date();
    const diff = openingDate - now;

    const msInSecond = 1000;
    const msInMinutes = 60*1000;
    const msInHours = 60*60*1000;
    const msInDays = 24*60*60*1000;

    const displayDay= Math.floor(diff/msInDays);
    document.querySelector(".days").textContent=displayDay;

    const displayHours = Math.floor ((diff%msInDays)/msInHours);
    document.querySelector(".hours").textContent=displayHours;

    const displayMinutes = Math.floor((diff%msInHours)/msInMinutes);
    document.querySelector(".minutes").textContent=displayMinutes;

    const displaySeconds = Math.floor ((diff%msInMinutes)/msInSecond);
    document.querySelector(".seconds").textContent=displaySeconds;

    setInterval(openingCountdown, 1000);

    if (diff<=0){
        document.querySelector(".days").textContent=0;
        document.querySelector(".hours").textContent=0;
        document.querySelector(".minutes").textContent=0;
        document.querySelector(".seconds").textContent=0;
        clearInterval(timerId);
        shopopen();
    }

   
}

let timerId = setInterval(openingCountdown, 1000);
clearInterval(timerId);

function shopopen (){
    const heads = document.querySelector(".openingtitle");
    heads.textContent= "WE ARE OPEN!!!";
    heads.classList.add("yellow");
}

const button = document.querySelector("#myButton");
button.addEventListener('click', function(){
    document.querySelector("#myAudio").play();
})

openingCountdown();