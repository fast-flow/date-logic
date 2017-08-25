import DateLogic from '../index';

var demo1 = new DateLogic({
    date : new Date('2008-02-16')
})

let html = `
    <b>today : `+demo1.today.getFullYear()+`年` +(demo1.today.getMonth()+1)+`月`+demo1.today.getDate()+`日`+`</b><br/>
    <b>date : `+demo1.date.getFullYear()+`年` +(demo1.date.getMonth()+1)+`月`+demo1.date.getDate()+`日`+`</b><br/>
    <b>startWeekDay : `+demo1.startWeekDay+`</b><br/>
    <b>weekDayColumn : `+demo1.weekDayColumn+`</b>
`
document.getElementById('example__basic').innerHTML = html

console.log('demo1 getData() : ',demo1.getData())
