var ReactDOM = require('react-dom')
var render = ReactDOM.render

// basic
import './basic.demo.js'

// format
import './format.demo.js'

// change
;(function (node) {
    if (!node) {return}
    require(['./change.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__change'))

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
