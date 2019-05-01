let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".min-hand");
let hourHead = document.querySelector(".hour-hand")

getSeconds = () => {
    let dateObj = new Date();
    let seconds = dateObj.getSeconds();
    let positionDeg = seconds * (360 / 60) + 90;
    return positionDeg;
}

getMinutes = () => {
    let dateObj = new Date();
    let minutes = dateObj.getMinutes();
    let positionDeg = minutes * (360 / 60) + 90;
    console.log(minutes);
    return positionDeg;
}

getHours = () => {
    let dateObj = new Date();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let positionDeg = hours * (360 / 12)+ 90;
    console.log(hours);
    return positionDeg;
}

secondHand.style.transform = `rotate(${getSeconds()}deg)`;
minuteHand.style.transform = `rotate(${getMinutes()}deg)`;
hourHead.style.transform = `rotate(${getHours()}deg)`;

setInterval(() => {
    secondHand.style.transform = `rotate(${getSeconds()}deg)`;
    minuteHand.style.transform = `rotate(${getMinutes()}deg)`;
    hourHead.style.transform = `rotate(${getHours()}deg)`;
}, 1000);
