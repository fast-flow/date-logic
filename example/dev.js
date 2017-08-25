var ReactDOM = require('react-dom')
var render = ReactDOM.render

// basic
import './basic.demo.js'

// getData
import './getData.demo.js'

// changeMonth
;(function (node) {
    if (!node) {return}
    require(['./changeMonth.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__changeMonth'))
