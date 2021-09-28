function gettime(){
    var hour = document.getElementById("hour")
    var min = document.getElementById("min")
    var sec = document.getElementById("sec")


    var date = document.getElementById("date")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    var day = document.getElementById("dayy")

    // day.innerHTML = new Date().getDay()

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

    // var hourss = new Date().getHours()
    // if(hourss == 13){
    //     hour.innerHTML = "01"
    // }
    // else if(hourss == 14){
    //     hour.innerHTML = "02"
    // }
    // else if(hourss == 15){
    //     hour.innerHTML = "03"
    // }
    // else if(hourss == 16){
    //     hour.innerHTML = "04"
    // }
    // else if(hourss == 17){
    //     hour.innerHTML = "05"
    // }
    // else if(hourss == 18){
    //     hour.innerHTML = "06"
    // }
    // else if(hourss == 19){
    //     hour.innerHTML = "07"
    // }
    // else if(hourss == 20){
    //     hour.innerHTML = "08"
    // }
    // else if(hourss == 21){
    //     hour.innerHTML = "09"
    // }
    // else if(hourss == 22){
    //     hour.innerHTML = "10"
    // }
    // else if(hourss == 23){
    //     hour.innerHTML = "11"
    // }
    // else if(hourss == 24){
    //     hour.innerHTML = "12"
    // }
    hour.innerHTML = new Date().getHours()
    min.innerHTML = new Date().getMinutes()
    sec.innerHTML = new Date().getSeconds()

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