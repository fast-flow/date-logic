import DateLogic from '../index'

var list = new DateLogic({
    date: new Date(),
    onChange: function (data) {
        // data format equal monthData() reutrn
        console.log(data)
    }
})

let value = list.getData()
