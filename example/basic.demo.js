import DateLogic from '../index';

var demo1 = new DateLogic({
    date : '2008-02-16'
})

let html = `
    <b>today : `+demo1.today+`</b><br/>
    <b>date : `+demo1.date+`</b><br/>
    <b>startWeekDay : `+demo1.startWeekDay+`</b><br/>
    <b>weekDayColumn : `+demo1.weekDayColumn+`</b>
`
document.getElementById('example__basic').innerHTML = html

console.log('demo1 : ',demo1)
