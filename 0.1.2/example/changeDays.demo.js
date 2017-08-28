import DateLogic from '../index';
import extend from 'extend';
import { Component } from 'react';
import cls from 'classnames';


class Demo4 extends Component {
    constructor(props) {
        super(props)
        let self = this
        this.list = new DateLogic({
            date: new Date('2017-09-16') ,
            startWeekDay:'3',
            onChange: function (data) {
                // data format equal monthData() reutrn
                self.setState({
                    monthData : extend(true,[],data)
                })
            }
        })
        this.state = {
            date : this.list.date  ,
            number: '',
            monthData : this.list.getData() || []
        }

    }
    render() {
        var self = this
        let columnTextMap = { '1' : 'Mon', '2' : 'Tue', '3' : 'Wed', '4' : 'Thu', '5' : 'Fri', '6' : 'Sat', '7' : 'Sun' }

        return (
            <div className="demo4">
                <h7>
                    changeDays :
                    <input  onChange={function(e){
                                e.target.value = Number( e.target.value.replace(/[^\d]+/g,'').toString() )
                                self.setState({
                                    number : e.target.value
                                })
                            }}
                    />
                <button onClick={function(e){
                                if(!self.state.number){ return false }
                                self.list.changeDays(self.state.number)
                                self.setState({
                                    date : self.list.date ,
                                })
                            }}
                    >+</button>
                <button onClick={function(e){
                                if(!self.state.number){ return false }
                                self.list.changeDays( Number('-'+self.state.number) )
                                self.setState({
                                    date : self.list.date ,
                                })
                            }}
                    >-</button>
            </h7>
                <div>
                    <span className="demo4-tool-text" >
                        { self.list.date.getFullYear()+`年`+(self.list.date.getMonth()+1)+`月`+self.list.date.getDate()+`日` }
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
                                        'demo4--lastMonth' : item.lastMonth ,
                                        'demo4--nextMonth' : item.nextMonth ,
                                        'demo4--today' : item.today
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

module.exports = Demo4
