# 文档

方便预览,添加样式

````css

.demo pre { max-height:400px; overflow-y:auto; }
.demo div { text-align: center; border-bottom: 1px dotted #aaa; line-height: 30px; width: 420px;}
.demo b, .demo i { width: 60px; display: inline-block; }
.demo b, .demo i:hover { background-color: #ccc; cursor:pointer; }
/* 今天显示蓝色 */
.demo--today { background-color: #87aed0; }
/* 上个月 下个月 显示灰色 */
.demo--lastMonth, .demo--nextMonth { background-color: #eee; }
/* 选中日期 显示 红色 */
.demo--on { background-color: #ce7272; }

.demo-tool { position: relative; }
.demo-tool i { min-width: 100px; text-decoration: underline; }
.demo-tool-prev, .demo-tool-next { position: absolute; }
.demo-tool-prev:hover, .demo-tool-next:hover { cursor: pointer; color: purple; }
.demo-tool-prev { left:10px; }
.demo-tool-next { right:10px; }
````

## basic

````code
{
    title: '基础使用',
    desc: '`dateLogic.today` `dateLogic.date` `dateLogic.startWeekDay` `dateLogic.weekDayColumn` `change({date: String})`',
    html: '<div id="basic-demo" ></div>',
    js: './basic.demo.js',
    source: './Basic.js',
    open: false,
}
````


## changeDays

````code
{
    title: '',
    desc: '`changeDays(Number)`',
    html: '<div id="change-days-demo" ></div>',
    js: './changeDays.demo.js',
    source: './ChangeDays.js',
    open: false,
}
````


## changeMonth or changeYear

````code
{
    title: '',
    desc: '`lastMonth()` `nextMonth()` `lastYear()` `nextYear()`',
    html: '<div id="monthYear-demo" ></div>',
    js: './monthYear.demo.js',
    source: './MonthYear.js',
    open: false,
}
````

## format

- 日期字符串 转 日期字符串 `toFormat({in:inFormatString, date:dateString, output:outputFormatString)`		
- 日期对象 转 日期字符串 `dateToStr(dateObject, formatString)`		
- 日期字符串 转 日期对象 `strToDate(dateString, formatString)`

````code
{
    title: '',
    desc: '可打开控制台查看打印数据',
    html: '<div id="format-demo" ></div>',
    js: './format.demo.js',
    source: './Format.js',
    open: false,
}
````