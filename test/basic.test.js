import DateLogic from '../index';
import extend from 'extend';
import expect from 'expect.js';

describe('basic.test.js', function () {
    var changeListData = []
    var list = new DateLogic({
        date: new Date('2017-07-16'),
        startWeekDay:'3',
        onChange: function (data) {
            // data format equal monthData() reutrn
            console.log('onChange')
            changeListData = extend(true,[],data)
        }
    })
    // 日历渲染的起始星期
    it('startWeekDay', function (done) {
        let startWeekDay = list.startWeekDay
        expect(startWeekDay).to.eql('3')
        done()
    })
    // 日历渲染的星期column
    it('weekDayColumn', function (done) {
        let weekDayColumn = list.weekDayColumn
        expect(weekDayColumn).to.eql([ 3, 4, 5, 6, 7, 1, 2 ])
        done()
    })
    // 获取当前一个月的渲染数据
    it('getThisMonthData', function (done) {
        let thisMonthData =  list.getThisMonthData()
        expect(thisMonthData).to.eql([
            { year: 2017, month: 7, day: 1, weekDay: 6 },
            { year: 2017, month: 7, day: 2, weekDay: 7 },
            { year: 2017, month: 7, day: 3, weekDay: 1 },
            { year: 2017, month: 7, day: 4, weekDay: 2 },
            { year: 2017, month: 7, day: 5, weekDay: 3 },
            { year: 2017, month: 7, day: 6, weekDay: 4 },
            { year: 2017, month: 7, day: 7, weekDay: 5 },
            { year: 2017, month: 7, day: 8, weekDay: 6 },
            { year: 2017, month: 7, day: 9, weekDay: 7 },
            { year: 2017, month: 7, day: 10, weekDay: 1 },
            { year: 2017, month: 7, day: 11, weekDay: 2 },
            { year: 2017, month: 7, day: 12, weekDay: 3 },
            { year: 2017, month: 7, day: 13, weekDay: 4 },
            { year: 2017, month: 7, day: 14, weekDay: 5 },
            { year: 2017, month: 7, day: 15, weekDay: 6 },
            { year: 2017, month: 7, day: 16, weekDay: 7 },
            { year: 2017, month: 7, day: 17, weekDay: 1 },
            { year: 2017, month: 7, day: 18, weekDay: 2 },
            { year: 2017, month: 7, day: 19, weekDay: 3 },
            { year: 2017, month: 7, day: 20, weekDay: 4 },
            { year: 2017, month: 7, day: 21, weekDay: 5 },
            { year: 2017, month: 7, day: 22, weekDay: 6 },
            { year: 2017, month: 7, day: 23, weekDay: 7 },
            { year: 2017, month: 7, day: 24, weekDay: 1 },
            { year: 2017, month: 7, day: 25, weekDay: 2 },
            { year: 2017, month: 7, day: 26, weekDay: 3 },
            { year: 2017, month: 7, day: 27, weekDay: 4 },
            { year: 2017, month: 7, day: 28, weekDay: 5 },
            { year: 2017, month: 7, day: 29, weekDay: 6 },
            { year: 2017, month: 7, day: 30, weekDay: 7 },
            { year: 2017, month: 7, day: 31, weekDay: 1 }
        ])
        done()
    })
    // 获取渲染日历当前一半所需数据 ( 上个月的末几天? + 本月数据 + 下个月的前几天? )
    it('getData', function (done) {
        let monthData =  list.getData()
        expect(monthData).to.eql([
            { year: 2017, month: 6, day: 28, weekDay: 3, lastMonth: true },
            { year: 2017, month: 6, day: 29, weekDay: 4, lastMonth: true },
            { year: 2017, month: 6, day: 30, weekDay: 5, lastMonth: true },
            { year: 2017, month: 7, day: 1, weekDay: 6, thisMonth: true },
            { year: 2017, month: 7, day: 2, weekDay: 7, thisMonth: true },
            { year: 2017, month: 7, day: 3, weekDay: 1, thisMonth: true },
            { year: 2017, month: 7, day: 4, weekDay: 2, thisMonth: true },
            { year: 2017, month: 7, day: 5, weekDay: 3, thisMonth: true },
            { year: 2017, month: 7, day: 6, weekDay: 4, thisMonth: true },
            { year: 2017, month: 7, day: 7, weekDay: 5, thisMonth: true },
            { year: 2017, month: 7, day: 8, weekDay: 6, thisMonth: true },
            { year: 2017, month: 7, day: 9, weekDay: 7, thisMonth: true },
            { year: 2017, month: 7, day: 10, weekDay: 1, thisMonth: true },
            { year: 2017, month: 7, day: 11, weekDay: 2, thisMonth: true },
            { year: 2017, month: 7, day: 12, weekDay: 3, thisMonth: true },
            { year: 2017, month: 7, day: 13, weekDay: 4, thisMonth: true },
            { year: 2017, month: 7, day: 14, weekDay: 5, thisMonth: true },
            { year: 2017, month: 7, day: 15, weekDay: 6, thisMonth: true },
            { year: 2017, month: 7, day: 16, weekDay: 7, thisMonth: true },
            { year: 2017, month: 7, day: 17, weekDay: 1, thisMonth: true },
            { year: 2017, month: 7, day: 18, weekDay: 2, thisMonth: true },
            { year: 2017, month: 7, day: 19, weekDay: 3, thisMonth: true },
            { year: 2017, month: 7, day: 20, weekDay: 4, thisMonth: true },
            { year: 2017, month: 7, day: 21, weekDay: 5, thisMonth: true },
            { year: 2017, month: 7, day: 22, weekDay: 6, thisMonth: true },
            { year: 2017, month: 7, day: 23, weekDay: 7, thisMonth: true },
            { year: 2017, month: 7, day: 24, weekDay: 1, thisMonth: true },
            { year: 2017, month: 7, day: 25, weekDay: 2, thisMonth: true },
            { year: 2017, month: 7, day: 26, weekDay: 3, thisMonth: true },
            { year: 2017, month: 7, day: 27, weekDay: 4, thisMonth: true },
            { year: 2017, month: 7, day: 28, weekDay: 5, thisMonth: true },
            { year: 2017, month: 7, day: 29, weekDay: 6, thisMonth: true },
            { year: 2017, month: 7, day: 30, weekDay: 7, thisMonth: true },
            { year: 2017, month: 7, day: 31, weekDay: 1, thisMonth: true },
            { year: 2017, month: 8, day: 1, weekDay: 2, nextMonth: true }
        ])
        done()
    })
    // 更改时间为上一月 自动触发配置的onchange
    it('lastMonth', function (done) {
        list.lastMonth()
        expect(changeListData).to.eql([
            { year: 2017, month: 5, day: 31, weekDay: 3, lastMonth: true },
            { year: 2017, month: 6, day: 1, weekDay: 4, thisMonth: true },
            { year: 2017, month: 6, day: 2, weekDay: 5, thisMonth: true },
            { year: 2017, month: 6, day: 3, weekDay: 6, thisMonth: true },
            { year: 2017, month: 6, day: 4, weekDay: 7, thisMonth: true },
            { year: 2017, month: 6, day: 5, weekDay: 1, thisMonth: true },
            { year: 2017, month: 6, day: 6, weekDay: 2, thisMonth: true },
            { year: 2017, month: 6, day: 7, weekDay: 3, thisMonth: true },
            { year: 2017, month: 6, day: 8, weekDay: 4, thisMonth: true },
            { year: 2017, month: 6, day: 9, weekDay: 5, thisMonth: true },
            { year: 2017, month: 6, day: 10, weekDay: 6, thisMonth: true },
            { year: 2017, month: 6, day: 11, weekDay: 7, thisMonth: true },
            { year: 2017, month: 6, day: 12, weekDay: 1, thisMonth: true },
            { year: 2017, month: 6, day: 13, weekDay: 2, thisMonth: true },
            { year: 2017, month: 6, day: 14, weekDay: 3, thisMonth: true },
            { year: 2017, month: 6, day: 15, weekDay: 4, thisMonth: true },
            { year: 2017, month: 6, day: 16, weekDay: 5, thisMonth: true },
            { year: 2017, month: 6, day: 17, weekDay: 6, thisMonth: true },
            { year: 2017, month: 6, day: 18, weekDay: 7, thisMonth: true },
            { year: 2017, month: 6, day: 19, weekDay: 1, thisMonth: true },
            { year: 2017, month: 6, day: 20, weekDay: 2, thisMonth: true },
            { year: 2017, month: 6, day: 21, weekDay: 3, thisMonth: true },
            { year: 2017, month: 6, day: 22, weekDay: 4, thisMonth: true },
            { year: 2017, month: 6, day: 23, weekDay: 5, thisMonth: true },
            { year: 2017, month: 6, day: 24, weekDay: 6, thisMonth: true },
            { year: 2017, month: 6, day: 25, weekDay: 7, thisMonth: true },
            { year: 2017, month: 6, day: 26, weekDay: 1, thisMonth: true },
            { year: 2017, month: 6, day: 27, weekDay: 2, thisMonth: true },
            { year: 2017, month: 6, day: 28, weekDay: 3, thisMonth: true },
            { year: 2017, month: 6, day: 29, weekDay: 4, thisMonth: true },
            { year: 2017, month: 6, day: 30, weekDay: 5, thisMonth: true },
            { year: 2017, month: 7, day: 1, weekDay: 6, nextMonth: true },
            { year: 2017, month: 7, day: 2, weekDay: 7, nextMonth: true },
            { year: 2017, month: 7, day: 3, weekDay: 1, nextMonth: true },
            { year: 2017, month: 7, day: 4, weekDay: 2, nextMonth: true }
        ])
        done()
    })
    // 更改时间为上一年 自动触发配置的onchange
    it('lastYear', function (done) {
        list.lastYear()
        expect(changeListData).to.eql([
            { year: 2016, month: 6, day: 1, weekDay: 3, thisMonth: true },
            { year: 2016, month: 6, day: 2, weekDay: 4, thisMonth: true },
            { year: 2016, month: 6, day: 3, weekDay: 5, thisMonth: true },
            { year: 2016, month: 6, day: 4, weekDay: 6, thisMonth: true },
            { year: 2016, month: 6, day: 5, weekDay: 7, thisMonth: true },
            { year: 2016, month: 6, day: 6, weekDay: 1, thisMonth: true },
            { year: 2016, month: 6, day: 7, weekDay: 2, thisMonth: true },
            { year: 2016, month: 6, day: 8, weekDay: 3, thisMonth: true },
            { year: 2016, month: 6, day: 9, weekDay: 4, thisMonth: true },
            { year: 2016, month: 6, day: 10, weekDay: 5, thisMonth: true },
            { year: 2016, month: 6, day: 11, weekDay: 6, thisMonth: true },
            { year: 2016, month: 6, day: 12, weekDay: 7, thisMonth: true },
            { year: 2016, month: 6, day: 13, weekDay: 1, thisMonth: true },
            { year: 2016, month: 6, day: 14, weekDay: 2, thisMonth: true },
            { year: 2016, month: 6, day: 15, weekDay: 3, thisMonth: true },
            { year: 2016, month: 6, day: 16, weekDay: 4, thisMonth: true },
            { year: 2016, month: 6, day: 17, weekDay: 5, thisMonth: true },
            { year: 2016, month: 6, day: 18, weekDay: 6, thisMonth: true },
            { year: 2016, month: 6, day: 19, weekDay: 7, thisMonth: true },
            { year: 2016, month: 6, day: 20, weekDay: 1, thisMonth: true },
            { year: 2016, month: 6, day: 21, weekDay: 2, thisMonth: true },
            { year: 2016, month: 6, day: 22, weekDay: 3, thisMonth: true },
            { year: 2016, month: 6, day: 23, weekDay: 4, thisMonth: true },
            { year: 2016, month: 6, day: 24, weekDay: 5, thisMonth: true },
            { year: 2016, month: 6, day: 25, weekDay: 6, thisMonth: true },
            { year: 2016, month: 6, day: 26, weekDay: 7, thisMonth: true },
            { year: 2016, month: 6, day: 27, weekDay: 1, thisMonth: true },
            { year: 2016, month: 6, day: 28, weekDay: 2, thisMonth: true },
            { year: 2016, month: 6, day: 29, weekDay: 3, thisMonth: true },
            { year: 2016, month: 6, day: 30, weekDay: 4, thisMonth: true },
            { year: 2016, month: 7, day: 1, weekDay: 5, nextMonth: true },
            { year: 2016, month: 7, day: 2, weekDay: 6, nextMonth: true },
            { year: 2016, month: 7, day: 3, weekDay: 7, nextMonth: true },
            { year: 2016, month: 7, day: 4, weekDay: 1, nextMonth: true },
            { year: 2016, month: 7, day: 5, weekDay: 2, nextMonth: true }
        ])
        done()
    })
    // 更改时间为下一月  自动触发配置的onchange
    it('nextMonth', function (done) {
        list.nextMonth()
        expect(changeListData).to.eql([
            { year: 2016, month: 6, day: 29, weekDay: 3, lastMonth: true },
            { year: 2016, month: 6, day: 30, weekDay: 4, lastMonth: true },
            { year: 2016, month: 7, day: 1, weekDay: 5, thisMonth: true },
            { year: 2016, month: 7, day: 2, weekDay: 6, thisMonth: true },
            { year: 2016, month: 7, day: 3, weekDay: 7, thisMonth: true },
            { year: 2016, month: 7, day: 4, weekDay: 1, thisMonth: true },
            { year: 2016, month: 7, day: 5, weekDay: 2, thisMonth: true },
            { year: 2016, month: 7, day: 6, weekDay: 3, thisMonth: true },
            { year: 2016, month: 7, day: 7, weekDay: 4, thisMonth: true },
            { year: 2016, month: 7, day: 8, weekDay: 5, thisMonth: true },
            { year: 2016, month: 7, day: 9, weekDay: 6, thisMonth: true },
            { year: 2016, month: 7, day: 10, weekDay: 7, thisMonth: true },
            { year: 2016, month: 7, day: 11, weekDay: 1, thisMonth: true },
            { year: 2016, month: 7, day: 12, weekDay: 2, thisMonth: true },
            { year: 2016, month: 7, day: 13, weekDay: 3, thisMonth: true },
            { year: 2016, month: 7, day: 14, weekDay: 4, thisMonth: true },
            { year: 2016, month: 7, day: 15, weekDay: 5, thisMonth: true },
            { year: 2016, month: 7, day: 16, weekDay: 6, thisMonth: true },
            { year: 2016, month: 7, day: 17, weekDay: 7, thisMonth: true },
            { year: 2016, month: 7, day: 18, weekDay: 1, thisMonth: true },
            { year: 2016, month: 7, day: 19, weekDay: 2, thisMonth: true },
            { year: 2016, month: 7, day: 20, weekDay: 3, thisMonth: true },
            { year: 2016, month: 7, day: 21, weekDay: 4, thisMonth: true },
            { year: 2016, month: 7, day: 22, weekDay: 5, thisMonth: true },
            { year: 2016, month: 7, day: 23, weekDay: 6, thisMonth: true },
            { year: 2016, month: 7, day: 24, weekDay: 7, thisMonth: true },
            { year: 2016, month: 7, day: 25, weekDay: 1, thisMonth: true },
            { year: 2016, month: 7, day: 26, weekDay: 2, thisMonth: true },
            { year: 2016, month: 7, day: 27, weekDay: 3, thisMonth: true },
            { year: 2016, month: 7, day: 28, weekDay: 4, thisMonth: true },
            { year: 2016, month: 7, day: 29, weekDay: 5, thisMonth: true },
            { year: 2016, month: 7, day: 30, weekDay: 6, thisMonth: true },
            { year: 2016, month: 7, day: 31, weekDay: 7, thisMonth: true },
            { year: 2016, month: 8, day: 1, weekDay: 1, nextMonth: true },
            { year: 2016, month: 8, day: 2, weekDay: 2, nextMonth: true }
        ])
        done()
    })
    // 自定义更改时间
    it('change date', function (done) {
        list.change({
            date : '2008-02-16'
        })
        expect(changeListData).to.eql([
            { year: 2008, month: 1, day: 30, weekDay: 3, lastMonth: true },
            { year: 2008, month: 1, day: 31, weekDay: 4, lastMonth: true },
            { year: 2008, month: 2, day: 1, weekDay: 5, thisMonth: true },
            { year: 2008, month: 2, day: 2, weekDay: 6, thisMonth: true },
            { year: 2008, month: 2, day: 3, weekDay: 7, thisMonth: true },
            { year: 2008, month: 2, day: 4, weekDay: 1, thisMonth: true },
            { year: 2008, month: 2, day: 5, weekDay: 2, thisMonth: true },
            { year: 2008, month: 2, day: 6, weekDay: 3, thisMonth: true },
            { year: 2008, month: 2, day: 7, weekDay: 4, thisMonth: true },
            { year: 2008, month: 2, day: 8, weekDay: 5, thisMonth: true },
            { year: 2008, month: 2, day: 9, weekDay: 6, thisMonth: true },
            { year: 2008, month: 2, day: 10, weekDay: 7, thisMonth: true },
            { year: 2008, month: 2, day: 11, weekDay: 1, thisMonth: true },
            { year: 2008, month: 2, day: 12, weekDay: 2, thisMonth: true },
            { year: 2008, month: 2, day: 13, weekDay: 3, thisMonth: true },
            { year: 2008, month: 2, day: 14, weekDay: 4, thisMonth: true },
            { year: 2008, month: 2, day: 15, weekDay: 5, thisMonth: true },
            { year: 2008, month: 2, day: 16, weekDay: 6, thisMonth: true },
            { year: 2008, month: 2, day: 17, weekDay: 7, thisMonth: true },
            { year: 2008, month: 2, day: 18, weekDay: 1, thisMonth: true },
            { year: 2008, month: 2, day: 19, weekDay: 2, thisMonth: true },
            { year: 2008, month: 2, day: 20, weekDay: 3, thisMonth: true },
            { year: 2008, month: 2, day: 21, weekDay: 4, thisMonth: true },
            { year: 2008, month: 2, day: 22, weekDay: 5, thisMonth: true },
            { year: 2008, month: 2, day: 23, weekDay: 6, thisMonth: true },
            { year: 2008, month: 2, day: 24, weekDay: 7, thisMonth: true },
            { year: 2008, month: 2, day: 25, weekDay: 1, thisMonth: true },
            { year: 2008, month: 2, day: 26, weekDay: 2, thisMonth: true },
            { year: 2008, month: 2, day: 27, weekDay: 3, thisMonth: true },
            { year: 2008, month: 2, day: 28, weekDay: 4, thisMonth: true },
            { year: 2008, month: 2, day: 29, weekDay: 5, thisMonth: true },
            { year: 2008, month: 3, day: 1, weekDay: 6, nextMonth: true },
            { year: 2008, month: 3, day: 2, weekDay: 7, nextMonth: true },
            { year: 2008, month: 3, day: 3, weekDay: 1, nextMonth: true },
            { year: 2008, month: 3, day: 4, weekDay: 2, nextMonth: true }
        ])
        done()
    })
    // 自定义更改时间+渲染起始星期设定
    it('change date+startWeekDay', function (done) {
        let weekDayColumn = list.change({
            date : '2008-03' ,
            startWeekDay : '7'
        })
        expect(changeListData).to.eql([
            { year: 2008, month: 2, day: 24, weekDay: 7, lastMonth: true },
            { year: 2008, month: 2, day: 25, weekDay: 1, lastMonth: true },
            { year: 2008, month: 2, day: 26, weekDay: 2, lastMonth: true },
            { year: 2008, month: 2, day: 27, weekDay: 3, lastMonth: true },
            { year: 2008, month: 2, day: 28, weekDay: 4, lastMonth: true },
            { year: 2008, month: 2, day: 29, weekDay: 5, lastMonth: true },
            { year: 2008, month: 3, day: 1, weekDay: 6, thisMonth: true },
            { year: 2008, month: 3, day: 2, weekDay: 7, thisMonth: true },
            { year: 2008, month: 3, day: 3, weekDay: 1, thisMonth: true },
            { year: 2008, month: 3, day: 4, weekDay: 2, thisMonth: true },
            { year: 2008, month: 3, day: 5, weekDay: 3, thisMonth: true },
            { year: 2008, month: 3, day: 6, weekDay: 4, thisMonth: true },
            { year: 2008, month: 3, day: 7, weekDay: 5, thisMonth: true },
            { year: 2008, month: 3, day: 8, weekDay: 6, thisMonth: true },
            { year: 2008, month: 3, day: 9, weekDay: 7, thisMonth: true },
            { year: 2008, month: 3, day: 10, weekDay: 1, thisMonth: true },
            { year: 2008, month: 3, day: 11, weekDay: 2, thisMonth: true },
            { year: 2008, month: 3, day: 12, weekDay: 3, thisMonth: true },
            { year: 2008, month: 3, day: 13, weekDay: 4, thisMonth: true },
            { year: 2008, month: 3, day: 14, weekDay: 5, thisMonth: true },
            { year: 2008, month: 3, day: 15, weekDay: 6, thisMonth: true },
            { year: 2008, month: 3, day: 16, weekDay: 7, thisMonth: true },
            { year: 2008, month: 3, day: 17, weekDay: 1, thisMonth: true },
            { year: 2008, month: 3, day: 18, weekDay: 2, thisMonth: true },
            { year: 2008, month: 3, day: 19, weekDay: 3, thisMonth: true },
            { year: 2008, month: 3, day: 20, weekDay: 4, thisMonth: true },
            { year: 2008, month: 3, day: 21, weekDay: 5, thisMonth: true },
            { year: 2008, month: 3, day: 22, weekDay: 6, thisMonth: true },
            { year: 2008, month: 3, day: 23, weekDay: 7, thisMonth: true },
            { year: 2008, month: 3, day: 24, weekDay: 1, thisMonth: true },
            { year: 2008, month: 3, day: 25, weekDay: 2, thisMonth: true },
            { year: 2008, month: 3, day: 26, weekDay: 3, thisMonth: true },
            { year: 2008, month: 3, day: 27, weekDay: 4, thisMonth: true },
            { year: 2008, month: 3, day: 28, weekDay: 5, thisMonth: true },
            { year: 2008, month: 3, day: 29, weekDay: 6, thisMonth: true },
            { year: 2008, month: 3, day: 30, weekDay: 7, thisMonth: true },
            { year: 2008, month: 3, day: 31, weekDay: 1, thisMonth: true },
            { year: 2008, month: 4, day: 1, weekDay: 2, nextMonth: true },
            { year: 2008, month: 4, day: 2, weekDay: 3, nextMonth: true },
            { year: 2008, month: 4, day: 3, weekDay: 4, nextMonth: true },
            { year: 2008, month: 4, day: 4, weekDay: 5, nextMonth: true },
            { year: 2008, month: 4, day: 5, weekDay: 6, nextMonth: true }
        ])
        expect(weekDayColumn).to.eql([ 7, 1, 2, 3, 4, 5, 6 ])
        done()
    })
    // 更改时间为下一年  自动触发配置的onchange
    it('nextYear', function (done) {
        list.nextYear()
        expect(changeListData).to.eql([
            { year: 2009, month: 3, day: 1, weekDay: 7, thisMonth: true },
            { year: 2009, month: 3, day: 2, weekDay: 1, thisMonth: true },
            { year: 2009, month: 3, day: 3, weekDay: 2, thisMonth: true },
            { year: 2009, month: 3, day: 4, weekDay: 3, thisMonth: true },
            { year: 2009, month: 3, day: 5, weekDay: 4, thisMonth: true },
            { year: 2009, month: 3, day: 6, weekDay: 5, thisMonth: true },
            { year: 2009, month: 3, day: 7, weekDay: 6, thisMonth: true },
            { year: 2009, month: 3, day: 8, weekDay: 7, thisMonth: true },
            { year: 2009, month: 3, day: 9, weekDay: 1, thisMonth: true },
            { year: 2009, month: 3, day: 10, weekDay: 2, thisMonth: true },
            { year: 2009, month: 3, day: 11, weekDay: 3, thisMonth: true },
            { year: 2009, month: 3, day: 12, weekDay: 4, thisMonth: true },
            { year: 2009, month: 3, day: 13, weekDay: 5, thisMonth: true },
            { year: 2009, month: 3, day: 14, weekDay: 6, thisMonth: true },
            { year: 2009, month: 3, day: 15, weekDay: 7, thisMonth: true },
            { year: 2009, month: 3, day: 16, weekDay: 1, thisMonth: true },
            { year: 2009, month: 3, day: 17, weekDay: 2, thisMonth: true },
            { year: 2009, month: 3, day: 18, weekDay: 3, thisMonth: true },
            { year: 2009, month: 3, day: 19, weekDay: 4, thisMonth: true },
            { year: 2009, month: 3, day: 20, weekDay: 5, thisMonth: true },
            { year: 2009, month: 3, day: 21, weekDay: 6, thisMonth: true },
            { year: 2009, month: 3, day: 22, weekDay: 7, thisMonth: true },
            { year: 2009, month: 3, day: 23, weekDay: 1, thisMonth: true },
            { year: 2009, month: 3, day: 24, weekDay: 2, thisMonth: true },
            { year: 2009, month: 3, day: 25, weekDay: 3, thisMonth: true },
            { year: 2009, month: 3, day: 26, weekDay: 4, thisMonth: true },
            { year: 2009, month: 3, day: 27, weekDay: 5, thisMonth: true },
            { year: 2009, month: 3, day: 28, weekDay: 6, thisMonth: true },
            { year: 2009, month: 3, day: 29, weekDay: 7, thisMonth: true },
            { year: 2009, month: 3, day: 30, weekDay: 1, thisMonth: true },
            { year: 2009, month: 3, day: 31, weekDay: 2, thisMonth: true },
            { year: 2009, month: 4, day: 1, weekDay: 3, nextMonth: true },
            { year: 2009, month: 4, day: 2, weekDay: 4, nextMonth: true },
            { year: 2009, month: 4, day: 3, weekDay: 5, nextMonth: true },
            { year: 2009, month: 4, day: 4, weekDay: 6, nextMonth: true }
        ])
        done()
    })
    // 更改时间为向前(后)几天 (月份变换时自动触发配置的onchange)
    it('changeDays', function (done) {
        list.changeDays(-3)
        expect(changeListData).to.eql([
            { year: 2009, month: 2, day: 1, weekDay: 7, thisMonth: true },
            { year: 2009, month: 2, day: 2, weekDay: 1, thisMonth: true },
            { year: 2009, month: 2, day: 3, weekDay: 2, thisMonth: true },
            { year: 2009, month: 2, day: 4, weekDay: 3, thisMonth: true },
            { year: 2009, month: 2, day: 5, weekDay: 4, thisMonth: true },
            { year: 2009, month: 2, day: 6, weekDay: 5, thisMonth: true },
            { year: 2009, month: 2, day: 7, weekDay: 6, thisMonth: true },
            { year: 2009, month: 2, day: 8, weekDay: 7, thisMonth: true },
            { year: 2009, month: 2, day: 9, weekDay: 1, thisMonth: true },
            { year: 2009, month: 2, day: 10, weekDay: 2, thisMonth: true },
            { year: 2009, month: 2, day: 11, weekDay: 3, thisMonth: true },
            { year: 2009, month: 2, day: 12, weekDay: 4, thisMonth: true },
            { year: 2009, month: 2, day: 13, weekDay: 5, thisMonth: true },
            { year: 2009, month: 2, day: 14, weekDay: 6, thisMonth: true },
            { year: 2009, month: 2, day: 15, weekDay: 7, thisMonth: true },
            { year: 2009, month: 2, day: 16, weekDay: 1, thisMonth: true },
            { year: 2009, month: 2, day: 17, weekDay: 2, thisMonth: true },
            { year: 2009, month: 2, day: 18, weekDay: 3, thisMonth: true },
            { year: 2009, month: 2, day: 19, weekDay: 4, thisMonth: true },
            { year: 2009, month: 2, day: 20, weekDay: 5, thisMonth: true },
            { year: 2009, month: 2, day: 21, weekDay: 6, thisMonth: true },
            { year: 2009, month: 2, day: 22, weekDay: 7, thisMonth: true },
            { year: 2009, month: 2, day: 23, weekDay: 1, thisMonth: true },
            { year: 2009, month: 2, day: 24, weekDay: 2, thisMonth: true },
            { year: 2009, month: 2, day: 25, weekDay: 3, thisMonth: true },
            { year: 2009, month: 2, day: 26, weekDay: 4, thisMonth: true },
            { year: 2009, month: 2, day: 27, weekDay: 5, thisMonth: true },
            { year: 2009, month: 2, day: 28, weekDay: 6, thisMonth: true }
        ])
        done()
    })
})
