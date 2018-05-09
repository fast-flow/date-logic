import {Component} from 'react'
import DateLogic from 'date-logic'
import extend from 'extend'
import cls from 'classnames'

class Basic extends Component {
	constructor(props){
		super(props)
        let self = this
        this.state = {
            date : '' ,
            number: '',
            monthData : []
        }
	}
	componentWillMount(){
		let self = this
        self.dateL = new DateLogic({
            format: 'YYYY年MM月DD日', // 默认输出日期格式
            date: '2008年02月16日', // 保持与默认格式一致
        })
	}
    render () {
    	let self = this
    	let systemData = {
		    today : self.dateL.today,
		    date : self.dateL.date,
		}

        let formatResult = self.dateL.toFormat({
                                in:'YYYY年MM月DD日',
                                date:'1999年02月16日',
                                output:'YYYY--公元年--MM--DD'
                            })
        let dateToStr = self.dateL.dateToStr(new Date('1200-12-12') , 'YYYY+MM_DD')
        let strToDate = self.dateL.strToDate( '1560/3/2' , 'YYYY/MM/DD' )
        console.group('formatDemo')
            console.log('formatResult',formatResult)
            console.log('dateToStr',dateToStr)
            console.log('strToDate',strToDate)
        console.groupEnd()

        return (
            <div className="formatDemo demo" >
                根据配置默认输出格式
                <pre>
例: self.dateL = new DateLogic({`
    format: 'YYYY年MM月DD日', 
    date: '2008年02月16日',
`})
                </pre>
                =>
            	<pre>
            		self.dateL.today : {self.dateL.today} <br/>
                    self.dateL.date : {self.dateL.date}
            	</pre>
                <hr/>

                <pre>
例: self.dateL.toFormat({`
    in:'YYYY年MM月DD日',
    date:'1999年02月16日',
    output:'YYYY--公元年--MM--DD'
`})
                </pre>
                =>
                <pre>{formatResult}</pre>
                <hr/>

                <pre>{`例: self.dateL.dateToStr(new Date('1200-12-12') , 'YYYY+MM_DD')`}</pre>
                =>
                <pre>{dateToStr}</pre>
                <hr/>

                <pre>{`例: String(self.dateL.strToDate( '1560/3/2' , 'YYYY/MM/DD' ))`}</pre>
                =>
                <pre>{String(strToDate)}</pre>
            </div>
        )
    }
}

/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
