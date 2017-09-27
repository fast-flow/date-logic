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
## change

## toFormat

## dateToStr

## strToDate


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

## changeM_Y

````css
.demo3 div {
    position: relative;
    text-align: center;
    width: 560px;
    line-height: 30px;
    border-bottom: 1px dotted #aaa;
}
.demo3-tool-prev ,
.demo3-tool-next { position: absolute; }
.demo3-tool-prev:hover ,
.demo3-tool-next:hover { cursor: pointer; color: purple; }
.demo3-tool-prev { left:10px; }
.demo3-tool-next { right:10px; }
.demo3-tool-text { width: 100px; }
.demo3--today { background-color: #87aed0; }
.demo3--lastMonth ,
.demo3--nextMonth { background-color: #eee; }
.demo3 b ,
.demo3 i { width: 80px; display: inline-block; }
````

````demo
{
    title: 'changeM_Y',
    html: '<div id="example__changeM_Y" >loading...</div>',
    desc: 'lastMonth nextMonth lastYear nextYear',
    file: './changeM_Y.demo.js'
}
````

## changeDays

````css
.demo4 div {
    position: relative;
    text-align: center;
    width: 560px;
    line-height: 30px;
    border-bottom: 1px dotted #aaa;
}
.demo4 input {
    height: 30px;
    box-sizing: border-box;
    line-height: 28px;
}
.demo4 button {
    width: 30px; height: 30px;
    box-sizing: border-box;
    line-height: 28px;
    margin-left: 5px;
    font-size: 18px;
    vertical-align: middle;
    cursor: pointer;
}
.demo4--today { background-color: #87aed0; }
.demo4--lastMonth ,
.demo4--nextMonth { background-color: #eee; }
.demo4 b ,
.demo4 i { width: 80px; display: inline-block; }
````

````demo
{
    title: 'changeDays',
    html: '<div id="example__changeDays" >loading...</div>',
    desc: 'changeDays',
    file: './changeDays.demo.js'
}
````
