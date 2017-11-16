import DateLogic from '../index';
import extend from 'extend';
import { Component } from 'react';
import cls from 'classnames';


class Demo3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monthData: []
        }
    }
    componentWillMount(){
        let self = this
        self.list = new DateLogic({
            date: '2017-09-16',
            startWeekDay:'3',
            onChange: function (data) {
                // console.log('onChange : ',data)
                self.setState({
                    monthData : extend(true,[],data.render)
                })
            }
        })
    }
    render() {
        var self = this
        let columnTextMap = { '1' : 'Mon', '2' : 'Tue', '3' : 'Wed', '4' : 'Thu', '5' : 'Fri', '6' : 'Sat', '7' : 'Sun' }
        return (
            <div className="demo3">
                <div>
                    <i className="demo3-tool-prev"
                        onClick={function(){
                            self.list.lastYear()
                        }}
                    >lastYear</i>
                    <i className="demo3-tool-next"
                        onClick={function(){
                            self.list.nextYear()
                        }}
                    >nextYear</i>
                    <b className="demo3-tool-text" >
                        {self.list.toFormat({
                            in:'YYYY-MM-DD',
                            date:self.list.date,
                            output:'YYYY年'
                        })}
                    </b>
                </div>
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
                    <b className="demo3-tool-text" >
                        {self.list.toFormat({
                            in:'YYYY-MM-DD',
                            date:self.list.date,
                            output:'MM月'
                        })}
                    </b>
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
