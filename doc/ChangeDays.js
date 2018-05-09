import DateLogic from 'date-logic';
import extend from 'extend';
import { Component } from 'react';
import cls from 'classnames';


class ChangeDays extends Component {
    constructor(props) {
        super(props)
        let self = this
        this.state = {
            date : '' ,
            number: 2 ,
            monthData : []
        }

    }
    componentWillMount(){
        let self = this
        self.dateL = new DateLogic({
            date: '2018-05-18' ,
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
            <div className="changeDaysDemo demo">
                <div>
                    changeDays :
                    <input  
                        value={self.state.number}
                        onChange={function(e){
                            // 简单限制只能输入数字
                            e.target.value = Number( e.target.value.replace(/[^\d]+/g,'').toString() )
                            self.setState({
                                number : e.target.value
                            })
                        }}
                    />
                    天
                    <br/>
                    <button onClick={function(e){
                                    if(!self.state.number){ return false }
                                    self.dateL.changeDays(self.state.number)
                                    self.setState({
                                        date : self.dateL.date ,
                                    })
                                }}
                        >{'+'+self.state.number+'天'}</button>
                    <button onClick={function(e){
                                    if(!self.state.number){ return false }
                                    self.dateL.changeDays( Number('-'+self.state.number) )
                                    self.setState({
                                        date : self.dateL.date ,
                                    })
                                }}
                        >{'-'+self.state.number+'天'}</button>
                </div>
                <div>
                    <span className="changeDays-tool-text" >
                        {
                            self.dateL.toFormat({
                                in:'YYYY-MM-DD',
                                date:self.dateL.date,
                                output:'YYYY年MM月DD日'
                            })
                        }
                    </span>
                </div>
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
                                >{item.day}</i>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


/*ONFACE-DEL*/ChangeDays = require("react-hot-loader").hot(module)(ChangeDays)
module.exports = ChangeDays
