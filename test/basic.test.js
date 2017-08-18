import DateLogic from '../index'
import expect from 'expect.js'


describe('basic.test.js', function () {
    var list = new DateLogic({
        date: new Date('2017-08-16'),
        onChange: function (data) {
            // data format equal monthData() reutrn
            console.log('onChange : ',data)
        }
    })
    it('change', function (done) {
        let value = list.change('2016-9-11', '4')
        expect(value).to.eql([{"year":2016,"month":9,"day":1,"weekDay":4,"thisMonth":true},{"year":2016,"month":9,"day":2,"weekDay":5,"thisMonth":true},{"year":2016,"month":9,"day":3,"weekDay":6,"thisMonth":true},{"year":2016,"month":9,"day":4,"weekDay":7,"thisMonth":true},{"year":2016,"month":9,"day":5,"weekDay":1,"thisMonth":true},{"year":2016,"month":9,"day":6,"weekDay":2,"thisMonth":true},{"year":2016,"month":9,"day":7,"weekDay":3,"thisMonth":true},{"year":2016,"month":9,"day":8,"weekDay":4,"thisMonth":true},{"year":2016,"month":9,"day":9,"weekDay":5,"thisMonth":true},{"year":2016,"month":9,"day":10,"weekDay":6,"thisMonth":true},{"year":2016,"month":9,"day":11,"weekDay":7,"thisMonth":true},{"year":2016,"month":9,"day":12,"weekDay":1,"thisMonth":true},{"year":2016,"month":9,"day":13,"weekDay":2,"thisMonth":true},{"year":2016,"month":9,"day":14,"weekDay":3,"thisMonth":true},{"year":2016,"month":9,"day":15,"weekDay":4,"thisMonth":true},{"year":2016,"month":9,"day":16,"weekDay":5,"thisMonth":true},{"year":2016,"month":9,"day":17,"weekDay":6,"thisMonth":true},{"year":2016,"month":9,"day":18,"weekDay":7,"thisMonth":true},{"year":2016,"month":9,"day":19,"weekDay":1,"thisMonth":true},{"year":2016,"month":9,"day":20,"weekDay":2,"thisMonth":true},{"year":2016,"month":9,"day":21,"weekDay":3,"thisMonth":true},{"year":2016,"month":9,"day":22,"weekDay":4,"thisMonth":true},{"year":2016,"month":9,"day":23,"weekDay":5,"thisMonth":true},{"year":2016,"month":9,"day":24,"weekDay":6,"thisMonth":true},{"year":2016,"month":9,"day":25,"weekDay":7,"thisMonth":true},{"year":2016,"month":9,"day":26,"weekDay":1,"thisMonth":true},{"year":2016,"month":9,"day":27,"weekDay":2,"thisMonth":true},{"year":2016,"month":9,"day":28,"weekDay":3,"thisMonth":true},{"year":2016,"month":9,"day":29,"weekDay":4,"thisMonth":true},{"year":2016,"month":9,"day":30,"weekDay":5,"thisMonth":true},{"year":2016,"month":10,"day":1,"weekDay":6,"nextMonth":true},{"year":2016,"month":10,"day":2,"weekDay":7,"nextMonth":true},{"year":2016,"month":10,"day":3,"weekDay":1,"nextMonth":true},{"year":2016,"month":10,"day":4,"weekDay":2,"nextMonth":true},{"year":2016,"month":10,"day":5,"weekDay":3,"nextMonth":true}])
        done()
    })
})
