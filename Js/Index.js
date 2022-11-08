const hourdata = document.getElementById("hour");
const minutedata = document.getElementById("minute");
const seconddata = document.getElementById("second");
const milisecdata = document.getElementById("milisecond");
const ampmdata = document.getElementById("ampm");

function digitalclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ms = new Date().getMilliseconds()
    let ampm = "AM"
    hourdata.innerText = h
    minutedata.innerText = m
    seconddata.innerText = s
    milisecdata.innerText = ms
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    ms = ms < 10 ? "0" + ms : ms
    setTimeout(() => {
        digitalclock()
    }, 1000)
}
digitalclock()