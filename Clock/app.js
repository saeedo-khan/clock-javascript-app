const hoursHand = document.querySelector('.hours')
const minutesHand = document.querySelector('.minutes')
const secondHand = document.querySelector('.seconds')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
window.setInterval(()=> {
    
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    secondHand.style.transform = `rotate(${seconds / 60 * 360 + 90}deg)`;
    minutesHand.style.transform = `rotate(${minutes / 60 * 360+ 90}deg)`;
    hoursHand.style.transform = `rotate(${360 / 12 * hours+ 90}deg)`;


    document.querySelector('.h').innerHTML = `${hours}`;
    document.querySelector('.m').innerHTML = `${minutes}`;
    document.querySelector('.s').innerHTML = `${seconds}`;

    document.getElementById('year').innerHTML = today.getFullYear()
    document.getElementById('day').innerHTML = days[today.getDay()]
    document.getElementById('month').innerHTML = months[today.getMonth()]

}, 1000)
