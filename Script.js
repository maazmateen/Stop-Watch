// const time = document.querySelector(".time")
let secTime = document.querySelector("#sec")
let mintTime = document.querySelector("#mint")
let hoursTime = document.querySelector("#hours")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

let hour = 0
let min = 0
let sec = 0
let timer = null;

function startFunc() {
    if (timer !== null) {
        return
    }
    timer = setInterval(function () {
        console.log("hello world");
        sec++;
        if (sec >= 60) {
            sec = 0
            min++
        }
        if (min >= 60) {
            min = 0
            hour++
        }

        if (sec < 10) {
            secTime.innerHTML = `0${sec}`
        } else {
            secTime.innerHTML = sec
        }

        if (min < 10) {
            mintTime.innerHTML = `0${min}`
        } else {
            mintTime.innerHTML = min
        }

        if (hour < 10) {
            hoursTime.innerHTML = `0${hour}`
        } else {
            hoursTime.innerHTML = hour
        }
    }, 10)



}
function stopFunc() {
    clearInterval(timer)
    timer = null
}
function resetFunc() {
    clearInterval(timer)
    timer = null
    sec = 0
    min = 0
    hour = 0

    hoursTime.innerHTML = '00'
    secTime.innerHTML = '00'
    mintTime.innerHTML = '00'


}
// function timeFunc() {
//     sec++
//     // if (sec > 60) {
//     //     sec = 0
//     //     min++
//     // }
// }
// const get = setInterval(timeFunc, 1000)

// console.log(get);
