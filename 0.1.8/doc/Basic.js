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
            date: '2018-05-10' ,
            startWeekDay:'7',
            onChange: function (data) {
                // data format equal monthData() reutrn
                self.setState({
                    date : data.date ,
                    monthData : extend(true,[],data.render)
                })
            }
        })
	}
    render () {
    	let self = this
    	let columnTextMap = { '1' : 'Mon', '2' : 'Tue', '3' : 'Wed', '4' : 'Thu', '5' : 'Fri', '6' : 'Sat', '7' : 'Sun' }

    	let systemData = {
		    today : self.dateL.today,
		    date : self.dateL.date,
		    startWeekDay : self.dateL.startWeekDay,
		    weekDayColumn : self.dateL.weekDayColumn,
		}
        return (
            <div className="basicDemo demo" >
            	<div></div>
            	<pre>
            		{JSON.stringify(systemData, null, 4)}
            	</pre>
            	self.state.monthData = 
            	<pre>
            		{JSON.stringify(self.state.monthData, null, 4)}
            	</pre>
            	<div>
                    {
                        self.dateL.weekDayColumn.map(function(item,index){
                            return (
                                <b key={index} >{columnTextMap[item]}</b>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        self.state.monthData.map(function(item,index){
                            return (
                                <i  key={index}
                                    className={cls({
                                        'demo--lastMonth' : item.lastMonth ,
                                        'demo--nextMonth' : item.nextMonth ,
                                        'demo--today' : item.today ,
                                        'demo--on' : item.date == self.state.date
                                    })}
                                    onClick={function(){
                                        self.dateL.change({
                                            date : item.date
                                        })
                                    }}
                                >{item.day}</i>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
