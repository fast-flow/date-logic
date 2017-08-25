# Basic

## demo1

````demo
{
    title: 'basic',
    html: '<div id="example__basic" >loading...</div>',
    desc: '可以取到的属性值,所有提供的函数方法,基于这些计算',
    file: './basic.demo.js'
}
````

## getData

````css
.demo2 div {
    text-align: center;
    border-bottom: 1px dotted #aaa;
    line-height: 30px;
    width: 560px;
}
.demo2  b , .demo2  i {
    width: 80px;
    display: inline-block;
}
````

````demo
{
    title: 'getData',
    html: '<div id="example__getData" >loading...</div>',
    desc: '获取到日历渲染当前一个月的所有数据',
    file: './getData.demo.js'
}
````

## changeMonth

````css
.demo3 div {
    position: relative;
    text-align: center;
    width: 560px;
}
.demo3-tool-prev {
    position: absolute;
    left:10px;
}
.demo3-tool-next {
    position: absolute;
    right:10px;
}
.demo3-tool-text {
    width: 100px;
}
.demo3--lastMonth , .demo3--nextMonth {
    background-color: #eee;
}
.demo3--today {
    background-color: #87aed0;
}
.demo3  b , .demo3  i {
    width: 80px;
    display: inline-block;
}
````

````demo
{
    title: 'changeMonth',
    html: '<div id="example__changeMonth" >loading...</div>',
    desc: 'lastMonth nextMonth',
    file: './changeMonth.demo.js'
}
````
