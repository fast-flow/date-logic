var ReactDOM = require('react-dom')
var render = ReactDOM.render

// basic
import './basic.demo.js'

// getData
import './getData.demo.js'

// changeM_Y
;(function (node) {
    if (!node) {return}
    require(['./changeM_Y.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__changeM_Y'))

// changeDays
;(function (node) {
    if (!node) {return}
    require(['./changeDays.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__changeDays'))
