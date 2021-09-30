function gettime(){
    var hour = document.getElementById("hour")
    var min = document.getElementById("min")
    var sec = document.getElementById("sec")


    var date = document.getElementById("date")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    var day = document.getElementById("dayy")

    
    // day / week 
    var week = new Date().getDay()
    if (week == 0){
        day.innerHTML = "Sunday"
    }
    if (week == 1){
        day.innerHTML = "Monday"
    }
    if (week == 2){
        day.innerHTML = "Tuesday"
    }
    if (week == 3){
        day.innerHTML = "Wednesday"
    }
    if (week == 4){
        day.innerHTML = "Thursday"
    }
    if (week == 5){
        day.innerHTML = "Friday"
    }
    if (week == 6){
        day.innerHTML = "Saturday"
    }

    // hour.innerHTML = new Date().getHours() -12
    var hourr = new Date().getHours() -12
    if(hourr < 10){
        hour.innerHTML = "0" + hourr
    }

    // minutes
    var minnn = new Date().getMinutes()
    if(minnn < 10){
        min.innerHTML = "0" + minnn
    }
    else{
        min.innerHTML = minnn
    }
    // seconds
    var seccc = new Date().getSeconds()
    if(seccc < 10){
        sec.innerHTML = "0" + seccc
    }
    else{
        sec.innerHTML = seccc
    }

    date.innerHTML = new Date().getUTCDate()

    var monn = new Date().getMonth()
    if(monn == 0){
        month.innerHTML = "Jan"
    }
    if(monn == 1){
        month.innerHTML = "Feb"
    }
    if(monn == 2){
        month.innerHTML = "Mar"
    }
    if(monn == 3){
        month.innerHTML = "April"
    }
    if(monn == 4){
        month.innerHTML = "May"
    }
    if(monn == 5){
        month.innerHTML = "June"
    }
    if(monn == 6){
        month.innerHTML = "July"
    }
    if(monn == 7){
        month.innerHTML = "Aug"
    }
    if(monn == 8){
        month.innerHTML = "Sep"
    }
    if(monn == 9){
        month.innerHTML = "Oct"
    }
    if(monn == 10){
        month.innerHTML = "Nov"
    }
    if(monn == 11){
        month.innerHTML = "Dec"
    }

    year.innerHTML = new Date().getFullYear()



    return
}
var interval;

function startBtn(){
    interval = setInterval(gettime,1000)
}
function stopBtn(){
    clearInterval(interval)
}
startBtn()