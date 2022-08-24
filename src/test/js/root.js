

new WebApp({
    el: $('#app')
})

new WebKeyboard({
    target: $('.input-1'),
    fixed: 5,
    max: function () {
        return 999999;
    },
    onChange: function () {

    }
})
new WebKeyboard({
    target: $('.input-2'),
    fixed: 5,
    type: 'verify',
    max: function () {
        return 9999999999;
    },
    onChange: function () {

    }
})

console.log(app)
$('.test-calendar').on('click', ()=> {
    let curTime = Date.now();
    app.calender.show({
        time: curTime,
        title: '时间设置',
        onChange: function (y,m,d,h,mun, zone) {

        }
    });
})
$('.test-toast').on('click', ()=> {
    app.toast('测试测试测试测试测试测试测试', 'success')
})