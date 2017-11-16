import DateLogic from '../index';
import extend from 'extend';
import { Component } from 'react';
import cls from 'classnames';


class Demo2 extends Component {
    constructor(props) {
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
        self.list = new DateLogic({
            date: '2017-09-16' ,
            startWeekDay:'3',
            onChange: function (data) {
                // data format equal monthData() reutrn
                self.setState({
                    date : data.date ,
                    monthData : extend(true,[],data.render)
                })
            }
        })
    }
    render() {
        var self = this
        let columnTextMap = { '1' : 'Mon', '2' : 'Tue', '3' : 'Wed', '4' : 'Thu', '5' : 'Fri', '6' : 'Sat', '7' : 'Sun' }

        return (
            <div className="demo2">
                <div>
                    <span className="demo2-text" >
                        { self.list.date }
                    </span>
                </div>
                <div>
                    {
                        self.list.weekDayColumn.map(function(item,index){
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
                                        'demo2--lastMonth' : item.lastMonth ,
                                        'demo2--nextMonth' : item.nextMonth ,
                                        'demo2--today' : item.today ,
                                        'demo2--on' : item.date == self.state.date
                                    })}
                                    onClick={function(){
                                        self.list.change({
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
module.exports = Demo2