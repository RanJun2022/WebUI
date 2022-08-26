

new WebApp({
    el: $('#app')
})
app.keyboard.create({
    target: $('.input-1'),
    fixed: 5,
    max: function () {
        return 999999;
    },
    onChange: function () {

    }
})
app.keyboard.create({
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
let ss = 0;
$('.test-calendar').on('click', ()=> {
    let curTime = Date.now();
    ss++;
    const options = {
        time: curTime,
        title: '时间设置',
        onChange: function (y,m,d,h,mun, zone) {

        },
    }
    if (ss%4 === 1) options.zoneOptions = undefined;
    if (ss%4 === 2) options.timeOptions = undefined;
    if (ss%4 === 3) {
        options.zoneOptions = undefined;
        options.timeOptions = undefined;
    }

    app.canlendar.show(options);

})
$('.test-toast').on('click', ()=> {
    app.toast.create('测试测试测试测试测试测试测试', 'success')
})