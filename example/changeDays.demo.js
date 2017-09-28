import DateLogic from '../index';
import extend from 'extend';
import { Component } from 'react';
import cls from 'classnames';


class Demo4 extends Component {
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
                        {self.list.toFormat({
                            in:'YYYY-MM-DD',
                            date:self.list.date,
                            output:'YYYY年MM月DD日'
                        })}
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
