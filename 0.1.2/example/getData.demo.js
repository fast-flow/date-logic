import DateLogic from '../index';

var date = new DateLogic({})
let columnTextMap = {
    '1' : 'Monday',
    '2' : 'Tuesday',
    '3' : 'Wednesday',
    '4' : 'Thursday',
    '5' : 'Friday',
    '6' : 'Saturday',
    '7' : 'Sunday',
}

let html = `<div class="demo2" ><div>`+date.toFormat(date.today,'YYYY年MM月DD日')+`</div><div>`
    date.weekDayColumn.map(function(item){
        html += `<b>`+columnTextMap[String(item)]+`</b>`
    })
    html += `</div><div>`
    date.getData().map(function(item){
        html += `<i>`+item.day+`</i>`
    })
    html += `</div></div>`
document.getElementById('example__getData').innerHTML = html
