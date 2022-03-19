var hour1 = document.querySelector('#hour-1')
var hour2 = document.querySelector('#hour-2')
var minute1 = document.querySelector('#minute-1')
var minute2 = document.querySelector('#minute-2')
var second1 = document.querySelector('#second-1')
var second2 = document.querySelector('#second-2')
function setTime(){
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    hour1.src = '../BTTH_icons/0'+Math.floor(hours/10)+'.gif'
    hour2.src = '../BTTH_icons/0'+Math.floor(hours%10)+'.gif'
    minute1.src = '../BTTH_icons/0'+Math.floor(minutes/10)+'.gif'
    minute2.src = '../BTTH_icons/0'+Math.floor(minutes%10)+'.gif'
    second1.src = '../BTTH_icons/0'+Math.floor(seconds/10)+'.gif'
    second2.src = '../BTTH_icons/0'+Math.floor(seconds%10)+'.gif'
    var notifyText = document.querySelector('#notify-text')
    if (hours>=0 && hours<12){
        notifyText.textContent = 'Chào buổi sáng'
    }
    else if (hours>=12 && hours<17){
        notifyText.textContent = 'Chào buổi chiều'
        notifyText.style.fontSize = '60px'
    }
    else{
        notifyText.textContent = 'Chào buổi tối'
        notifyText.style.fontSize = '80px'
    }
}
setInterval(setTime, 0)

function blinkEffect(){
    document.querySelector('#notify-text').style.color = 'black'
    setTimeout(function(){
        document.querySelector('#notify-text').style.color = 'red'
    }, 250)
}
setInterval(blinkEffect,500)