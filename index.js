import extend from 'extend';
import fecha from 'fecha';

class DateLogic {
	constructor(props){
		/* 是否让用户配置 待定*/
		this.format = props.format || 'YYYY-MM-DD'

		this.today = this.dateToStr(new Date(),this.format)
		// 当前所在日期
		this.date = props.date ? this.toFormat({date:props.date}) : this.today
		// 日历起始星期
		this.startWeekDay = props.startWeekDay || 1
		// 日历渲染头部 (起始星期为星期一)
		this.weekDayColumn = props.startWeekDay ? this.updateWeekDayCol(props.startWeekDay) : [1,2,3,4,5,6,7]
		this.onChange = props.onChange || function(){ console.warn('/node_module/date-logic/index.js 未配置onChange') }
		// init run
		this.onChange({
			today : this.today ,
			date : this.date ,
			weekDayColumn : this.weekDayColumn ,
			render : this.getData()
		})
	}
	/* translate {String} to {String}
		@param {Object} settings
		@param {String} settings.in
		@param {String} settings.date
		@param {String} settings.output
	*/
	toFormat = (settings) => {
		let self = this
		settings = settings || {}
		settings.in  = settings.in  || self.format
		settings.date = settings.date || self.date
		settings.output = settings.output || self.format

		let dateObj = fecha.parse(settings.date,settings.in)
		return fecha.format(dateObj , settings.output);
	}
	/* trans 合并 */ 
	// translate {Date} to {String}
	dateToStr = (dateObj,formatStr) => {
		let self = this
		return fecha.format(dateObj , formatStr)
	}
	// translate {String} to {Date}
	strToDate = (dateStr,formatStr) => {
		let self = this
		// console.log('strToDate : ', defaultDateStr ,dateStr , self.format )
		return fecha.parse(dateStr,formatStr) || fecha.parse(self.date,self.format)
	}
	/** 更新渲染日历头部列
	 * @param {number} firstWeekDay
	 */
	updateWeekDayCol = (firstWeekDay) => {
		let self = this
		// 判断有效数字 非法则不更新
		firstWeekDay = Number(String(firstWeekDay).replace(/[^\d]|[890]/g,''))
		if(firstWeekDay > 7 || firstWeekDay < 1 || !firstWeekDay){
			console.warn('weekDay must between 1~7')
			return this.weekDayColumn
		}

		let weekDayColumn = []
		for(let i=1 ; i <=7 ; i++){
			if(firstWeekDay > 7){
				firstWeekDay = firstWeekDay - 7
			}
			weekDayColumn.push(firstWeekDay)
			firstWeekDay++
		}
		self.startWeekDay = String(firstWeekDay)
		self.weekDayColumn = extend(true,[],weekDayColumn)
		return weekDayColumn
	}
	/** 根据时间获取这一个月的 monthData 数据
	 * @param {String} dateStr
	 */
	getThisMonthData = (dateStr) => {
		let self = this

		dateStr = dateStr || self.date
		let dateObj = self.strToDate(dateStr,self.format)
		let dateArray = self.dateToStr(dateObj , 'YYYY-MM-DD').split('-')
		let year = dateArray[0]
		let month = dateArray[1]
		let day = dateArray[2]
		/*  获取日期是周几 : getDay()
		 *	return {number} 0~6
		 *	0 -> 星期天 | 1 -> 星期一 | 2 -> 星期二 | 3 -> 星期三 | 4 -> 星期四 | 5 -> 星期五 | 6 -> 星期六
		 */
		let firstDayWeekDay = new Date(year+'-'+month+'-1').getDay() || 7 // 获取1号是星期几
		let dayLength = new Date(year,month,'0').getDate() // 获取这个月的天数

		let thisMonthData = [] // 这个月的渲染数据
		// let todayString = this.today.toString().replace(/\d{2}\:\d{2}\:\d{2}.+$/,'')
		for(let i=1 ; i<=dayLength ; i++){
			let tempDate = self.toFormat({
				in:'YYYY-MM-D',
				date:String(year+'-'+month+'-'+i) ,
				output:'YYYY-MM-DD',
			})
			let tempData = { 
				year: year, 
				month: month, 
				day: i , 
				weekDay: firstDayWeekDay , 
				date: tempDate
			}
			// 判断是否添加isToday属性
			let isToday = self.today == tempDate
			if(isToday){
				tempData.today = true
			}
			// 更新星期
			firstDayWeekDay = firstDayWeekDay + 1 > 7 ? 1 : firstDayWeekDay + 1
			thisMonthData.push(tempData)
		}

		return thisMonthData
	}
	getMonthData = () => {
		let self = this
		// 获取当月日历渲染数据
		let thisMonthData = self.getThisMonthData().map(function(item){
			item.thisMonth = true
			return item
		})

		// 根据 当月1号星期几 计算 上月需要显示天数
		let lastMonthLength = self.weekDayColumn.indexOf(thisMonthData[0].weekDay)
		// 判断是否需要获取上个月数据
		let lastMonthData = []
		if(lastMonthLength > 0){
			let dateObj =  self.strToDate(self.date,self.format)
			let lastMonthDateObj = dateObj
				lastMonthDateObj.setMonth( dateObj.getMonth() - 1)
			let lastMonthDateStr = self.dateToStr(lastMonthDateObj,self.format)
			// 上月一整个月数据
			lastMonthData = self.getThisMonthData(lastMonthDateStr).map(function(item){
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
		let nextMonthLength = 6 - self.weekDayColumn.indexOf(thisMonthData[thisMonthData.length - 1].weekDay)
		// 判断是否需要获取下个月数据
		let nextMonthData = []
		if(nextMonthLength > 0){
			let dateObj = self.strToDate(self.date,self.format)
			let nextMonthDateObj = dateObj
				nextMonthDateObj.setMonth( dateObj.getMonth() + 1)
			let nextMonthDateStr = self.dateToStr(nextMonthDateObj,self.format)
			// 下月一整个月数据
			nextMonthData = self.getThisMonthData(nextMonthDateStr).map(function(item){
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
	/* TODO: getData()方法是否弃用 待定 */
	getData = () => {
		return this.getMonthData()
	}
	/*
		{string} settings.date
		{string} settings.startWeekDay
	*/
	change = (settings) => {
		let self = this
		settings = settings || {}
		// settings.date = self.toFormat(settings.date)
		self.date = self.toFormat({date :settings.date})
		settings.startWeekDay = settings.startWeekDay || ''

		if(settings.startWeekDay){
			self.updateWeekDayCol(settings.startWeekDay)
		}

		let result = self.getMonthData()
		self.onChange({
			today : self.toFormat({date :self.today}) ,
			date : self.toFormat({date :self.date}) ,
			weekDayColumn : self.weekDayColumn ,
			render : result
		})
	}
	lastMonth = () => {
		let self = this
		let dateObj = self.strToDate(self.date,self.format)
		dateObj.setMonth(dateObj.getMonth() - 1)
		self.date = self.dateToStr(dateObj,self.format)

		let result = self.getMonthData()
		let date = self.toFormat({date :self.date})
		self.onChange({
			today : self.toFormat({date :self.today}) ,
			date : date ,
			weekDayColumn : self.weekDayColumn ,
			render : result
		})
		return date
	}
	nextMonth = () => {
		let self = this
		let dateObj = self.strToDate(self.date,self.format)
		dateObj.setMonth(dateObj.getMonth() + 1)
		self.date = self.dateToStr(dateObj,self.format)

		let result = self.getMonthData()
		let date = self.toFormat({date :self.date})
		self.onChange({
			today : self.toFormat({date :self.today}) ,
			date : date ,
			weekDayColumn : self.weekDayColumn ,
			render : result
		})
		return date
	}
	lastYear = () => {
		let self = this
		let dateObj = self.strToDate(self.date,self.format)
		dateObj.setFullYear(dateObj.getFullYear() - 1)
		self.date = self.dateToStr(dateObj,self.format)

		let result = self.getMonthData()
		let date = self.toFormat({date :self.date})
		self.onChange({
			today : self.toFormat({date :self.today}) ,
			date : date ,
			weekDayColumn : self.weekDayColumn ,
			render : result
		})
		return date
	}
	nextYear = () => {
		let self = this
		let dateObj = self.strToDate(self.date,self.format)
		dateObj.setFullYear(dateObj.getFullYear() + 1)
		self.date = self.dateToStr(dateObj,self.format)

		let result = self.getMonthData()
		let date = self.toFormat({date :self.date})
		self.onChange({
			today : self.toFormat({date :self.today}) ,
			date : date ,
			weekDayColumn : self.weekDayColumn ,
			render : result
		})
		return date
	}
	/*
		{number} days
	*/
	changeDays = (days) => {
		let self = this
		let dateObj = self.strToDate(self.date,self.format)

		days = Number(days)
		if(!days){
			console.warn('days 不是有效天数')
			return false
		}

		let oldMonth = dateObj.getMonth()
		dateObj.setDate(dateObj.getDate() + days)
		let newMonth = dateObj.getMonth()
		self.date = self.dateToStr(dateObj,self.format)

		// 月份更换触发配置onchange
		if(oldMonth !== newMonth){
			let result = self.getMonthData()
			let date = self.toFormat({date :self.date})
			self.onChange({
				today : self.toFormat({date :self.today}) ,
				date : date ,
				weekDayColumn : self.weekDayColumn ,
				render : result
			})
			return date
		}
	}
}
// module.exports = DateLogic
export default DateLogic
