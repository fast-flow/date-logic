# date-logic


```js
var DateLogic = require('date-logic')
var calendar = new DateLogic({
    date: new Date(),
    startWeekDay:'3',
    onChange: function (data) {
        // data format equal monthData() reutrn
        self.setState({
            calendar: data
        })
    }
})
var data = calendar.getData()
console.log(data)
// data format equal monthData() reutrn

// year-month-day , startWeekDay {1}
calendar.change('2017-9-11')
calendar.change({
    date: '2018-12-12',
    startWeekDay:'7'
})
// call onChange
calendar.lastMonth()
// call onChange
calendar.nextMonth()
// call onChange
calendar.lastYear()
// call onChange
calendar.nextYear()
// call onChange
```

```js
/**
 * function - 返回月渲染数据
 * @param {Date} date - new Date()
 * @returns {array}
 */
function monthData (date) {
    date = date || new Date()
}
monthData()
[
   {
       year: 2017,
       month: 7,
       day: 31,
       weekDay: 1,
       lastMonth: true
   },
   {
       year: 2017,
       month: 8,
       day: 1,
       weekDay: 2,
       thisMonth: true
   },
   {
       year: 2017,
       month: 8,
       day: 1,
       weekDay: 2,
       thisMonth: true
   },
   // ...
   {
       year: 2017,
       month: 8,
       day: 16,
       today: true,
       weekDay: 3,
       thisMonth: true
   },
   {
       year: 2017,
       month: 8,
       day: 31,
       weekDay: 4,
       thisMonth: true
   },
   {
       year: 2017,
       month: 9,
       day: 1,
       weekDay: 5,
       nextMonth: true
   },
   {
       year: 2017,
       month: 9,
       day: 2,
       weekDay: 6,
       nextMonth: true
   },
   {
       year: 2017,
       month: 9,
       day: 3,
       weekDay: 7,
       nextMonth: true
   },
]
```
