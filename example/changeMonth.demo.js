import DateLogic from '../index';
import extend from 'extend';
import { Component } from 'react';
import cls from 'classnames';


class Demo3 extends Component {
    constructor(props) {
        super(props)
        let self = this
        this.list = new DateLogic({
            date: new Date('2017-09-16'),
            startWeekDay:'3',
            onChange: function (data) {
                // data format equal monthData() reutrn
                console.log('onChange')
                self.setState({
                    monthData : extend(true,[],data)
                })
            }
        })
        this.state = {
            monthData: this.list.getData() || []
        }
    }
    render() {
        var self = this
        let columnTextMap = { '1' : 'Mon', '2' : 'Tue', '3' : 'Wed', '4' : 'Thu', '5' : 'Fri', '6' : 'Sat', '7' : 'Sun' }
        return (
            <div className="demo3">
                <div>
                    <i className="demo3-tool-prev"
                        onClick={function(){
                            self.list.lastMonth()
                        }}
                    >lastMonth</i>
                    <i className="demo3-tool-next"
                        onClick={function(){
                            self.list.nextMonth()
                        }}
                    >nextMonth</i>
                <b className="demo3-tool-text" >{self.list.date.getFullYear()+`年`+(self.list.date.getMonth()+1)+`月`}</b>
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
                                        'demo3--lastMonth' : item.lastMonth ,
                                        'demo3--nextMonth' : item.nextMonth ,
                                        'demo3--today' : item.today
                                    })}
                                >{item.day}</i>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

module.exports = Demo3
