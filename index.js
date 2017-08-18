import extend from 'extend';

class DateLogic {
	constructor(props){
		this.today = new Date()
		// 当前所在日期
		this.date = props.date || new Date()
		// 日历起始星期
		// this.defaultStartWeekDay = 1
		// 日历渲染头部 (起始星期为星期一)
		this.weekDayColumn = [1,2,3,4,5,6,7]
		this.onChange = props.onChange || function(){}
	}
	// 更新渲染日历头部列
	/**
	 * @param {number} firstWeekDay
	 */
	updateWeekDayCol = (firstWeekDay) => {
		firstWeekDay = firstWeekDay || 1
		let weekDayColumn = []
		for(let i=1 ; i <=7 ; i++){
			if(firstWeekDay > 7){
				firstWeekDay = firstWeekDay - 7
			}
			weekDayColumn.push(firstWeekDay)
			firstWeekDay++
		}
		this.weekDayColumn = extend(true,[],weekDayColumn)
	}
	// 根据时间获取这一个月的 monthData 数据
	/**
	 * @param {Date} date
	 */
	getThisMonthData = (date) => {
		date = date || this.date

		let year = date.getFullYear()
		let month = date.getMonth() + 1
		let day = date.getDate()
		/*  获取日期是周几 : getDay()
		 *	return {number} 0~6
		 *	0 -> 星期天 | 1 -> 星期一 | 2 -> 星期二 | 3 -> 星期三 | 4 -> 星期四 | 5 -> 星期五 | 6 -> 星期六
		 */
		let firstDayWeekDay = new Date(year+'-'+month+'-1').getDay() || 7
		let dayLength = new Date(year,month,'0').getDate()

		let thisMonthData = []
		let todayString = this.today.toString().replace(/\d{2}\:\d{2}\:\d{2}.+$/,'')
		for(let i=1 ; i<=dayLength ; i++){
			let tempData = { year: year, month: month, day: i , weekDay: firstDayWeekDay }
			let isTody = todayString == new Date(year+'-'+month+'-'+i).toString().replace(/\d{2}\:\d{2}\:\d{2}.+$/,'')
			if(isTody){
				tempData.today = true
			}
			firstDayWeekDay = firstDayWeekDay + 1 > 7 ? 1 : firstDayWeekDay + 1
			thisMonthData.push(tempData)
		}

		return thisMonthData
	}
	getMonthData = () => {
		// 获取当月日历渲染数据
		let thisMonthData = this.getThisMonthData().map(function(item){
			item.thisMonth = true
			return item
		})
		// 根据 当月1号星期几 计算 上月需要显示天数
		let lastMonthLength = this.weekDayColumn.indexOf(thisMonthData[0].weekDay)
		// 判断是否需要获取上个月数据
		let lastMonthData = []
		if(lastMonthLength > 0){
			let lastMonthDate = new Date(this.date)
				lastMonthDate.setMonth(this.date.getMonth() - 1)
			// 上月一整个月数据
			lastMonthData = this.getThisMonthData(lastMonthDate).map(function(item){
				item.lastMonth = true
				return item
			})
			// 截取上个月需要显示的数据
			lastMonthData = lastMonthData.slice(
				lastMonthData.length - lastMonthLength,
				lastMonthData.length
			)

		}
		// 根据 当月最后一天星期几 计算 下月需要显示天数
		let nextMonthLength = 6 - this.weekDayColumn.indexOf(thisMonthData[thisMonthData.length - 1].weekDay)
		// 判断是否需要获取下个月数据
		let nextMonthData = []
		if(nextMonthLength > 0){
			let nextMonthDate = new Date(this.date)
				nextMonthDate.setMonth(this.date.getMonth() + 1)
			// 下月一整个月数据
			nextMonthData = this.getThisMonthData(nextMonthDate).map(function(item){
				item.nextMonth = true
				return item
			})
			// 截取下个月需要显示的数据
			nextMonthData = nextMonthData.slice(0,nextMonthLength)
		}
		// 结合日历渲染数据
		let monthData = lastMonthData.concat(thisMonthData).concat(nextMonthData)
		return monthData
	}
	getData = () => {
		return this.getMonthData()
	}
	change = (date, startWeekDay) => {
		this.date = date ? new Date(date) : new Date()
		startWeekDay = Number(String(startWeekDay).replace(/[^\d]|[890]/g,''))
		if(startWeekDay > 7 || startWeekDay < 1){
			console.warn('startWeekDay must between 1~7')
		}else{
			this.updateWeekDayCol(startWeekDay)
		}
		let result = this.getMonthData()
		this.onChange(result)
		return result
	}
	lastMonth = () => {
		this.date.setMonth(this.date.getMonth() - 1)
		let result = this.getMonthData()
		this.onChange(result)
		// return result
	}
	nextMonth = () => {
		this.date.setMonth(this.date.getMonth() + 1)
		let result = this.getMonthData()
		this.onChange(result)
		// return result
	}
	lastYear = () => {
		this.date.setFullYear(this.date.getFullYear() - 1)
		let result = this.getMonthData()
		this.onChange(result)
		// return result
		}
	nextYear = () => {
		this.date.setFullYear(this.date.getFullYear() + 1)
		let result = this.getMonthData()
		this.onChange(result)
		// return result
	}
}

export default DateLogic
