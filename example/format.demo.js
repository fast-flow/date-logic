import DateLogic from '../index';

var demo6 = new DateLogic({
	format: 'YYYY年MM月DD日',
    date : '2008年02月16日'
})

var toFormat = demo6.toFormat({
	in:'YYYY年MM月DD日',
	date:'1999年02月16日',
	output:'YYYY--公元年--MM--DD'
})

var dateToStr = demo6.dateToStr( new Date('1200-12-12') , 'YYYY+MM_DD' )

var strToDate = demo6.strToDate( '1560/3/2' , 'YYYY/MM/DD' )

let html = `
    <b>today : `+demo6.today+`</b><br/>
    <b>date : `+demo6.date+`</b><br/>
    <b>toFormat : `+toFormat+`</b><br/>
    <b>dateToStr : `+dateToStr+`</b><br/>
    <b>strToDate : `+strToDate+' , typeof : '+typeof(strToDate)+`</b>
`
document.getElementById('example__format').innerHTML = html

console.log('demo6 : ',demo6)
