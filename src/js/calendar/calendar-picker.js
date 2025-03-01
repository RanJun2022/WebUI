import {searchZone, TimeZones} from "./timezone";
import jstz from './jstz'
import Picker from "../picker/picker";

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
// const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_EN = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar {
    constructor(options) {
        this.$el = options.el;
        this.picker = options.picker;

        this._visibleMonth = options.month;
        this._visibleYear = options.year;

        this.$el.append('<ul class="date-header"></ul>');
        let day;
        for (let i = 0, _len = DAYS.length; i < _len; i++) {
            day = DAYS[i];
            this.$el.find('.date-header').append($("<li>" + (day.substr(0, 2)) + "</li>"));
        }

        this.$days = $('<ul class="days"></ul>');
        this.$el.append(this.$days);

        this.defaultMonth = options.month;
        this.defaultYear = options.year;
        this.defaultDay = options.day;
    }
    changeYearMonth(year, month) {
        this._visibleMonth = month;
        this._visibleYear = year;
    }
    draw() {
        let firstDayOfMonth, i, lastDayOfMonth, cl, preLastDay, _i, _j, _ref;
        this.$days.empty();
        firstDayOfMonth = this.firstDayOfMonth(this.visibleMonth(), this.visibleYear());
        lastDayOfMonth = this.daysInMonth(this.visibleMonth(), this.visibleYear());

        let p = this.previousYearMonth();
        preLastDay = this.daysInMonth(p.m, p.y)-firstDayOfMonth+1;
        cl = firstDayOfMonth - 1;
        if (firstDayOfMonth <= 1) {
            cl += 7;
            preLastDay -= 6;
        }
        for (i = _i = 1, _ref = cl; _i <= _ref; i = _i += 1) {
            this.$days.append($("<li class='date-day date-empty'><span>"+(preLastDay+i)+"</span></li>"));
        }

        for (i = _j = 1; _j <= lastDayOfMonth; i = _j += 1) {
            this.$days.append($("<li class='date-day date-valid " + (this.dayClass(i, firstDayOfMonth, lastDayOfMonth))+ "'><span>" + i + "</span></li>"));
        }

        let dcount = 42 - this.$days.children().length;

        for (i = 1; i <= dcount; ++i) {
            this.$days.append($("<li class='date-day date-empty'><span>" + i + "</span></li>"));
        }

        let vm = this;
        this.$days.find('.date-valid').click(function (e) {
            let el = $(e.target);
            let day = parseInt(el.text().toString());
            if (!vm.picker.isValidYMD(vm.visibleYear(), vm.visibleMonth(), day)) {
                return;
            }
            if (el.hasClass('date-selected')) {
                return;
            }
            vm.$days.find('.date-selected').removeClass('date-selected');
            el.addClass('date-selected');
            vm.defaultYear = vm.visibleYear();
            vm.defaultMonth = vm.visibleMonth();
            vm.defaultDay = day;
            vm.picker.selectDate(vm.defaultYear, vm.defaultMonth, vm.defaultDay);
        });
    }
    previousYearMonth() {
        if (this._visibleMonth === 1) {
            return {y:this._visibleYear-1, m:12};
        } else {
            return {y:this._visibleYear, m:this._visibleMonth-1};
        }
    }
    dayClass(day) {
        let classes = '';
        if (this.defaultYear === this._visibleYear
            && this.defaultMonth === this._visibleMonth
            && this.defaultDay === day) {
            classes = 'date-selected';
        }
        return classes;
    }
    firstDayOfMonth(month, year) {
        return new Date(year, month - 1, 1).getDay() + 1;
    }

    daysInMonth(month, year) {
        month || (month = this.visibleMonth());
        year || (year = this.visibleYear());
        return new Date(year, month, 0).getDate();
    }
    visibleMonth() {
        return this._visibleMonth;
    }

    visibleYear() {
        return this._visibleYear;
    }
    clearSelected() {
        this.defaultDay = null;
        this.defaultYear = null;
        this.defaultMonth = null;
        this.$days.find('.date-selected').removeClass('date-selected');
    }
}
class CalendarPicker {
    constructor(options) {
        const defaultOptions = {
            cancelBtn: '取消',
            okBtn: '确定',
            title: '时间设置',
            timeOptions: {
                title: '时间',
                removeBtn: '移除',
                setBtn: '设置'
            },
            zoneOptions: {
                title: '时区',
                cancelBtn: '取消',
                okBtn: '确定',
            },
            allowMoreThan: true,
        }
        this.options = Object.assign(defaultOptions, options);
        const className = !this.options.timeOptions && !this.options.zoneOptions? ' calendar-no':(this.options.timeOptions && this.options.zoneOptions? '':' calendar-one');

        this.$el = $(`<div class="calendar${className}">
                        <div class="content show">
                            <div class="inner">
                                <div class="nav-top">
                                    <span class="cancel">${this.options.cancelBtn}</span>
                                    <span class="title">${options.title}</span>
                                    <span class="sub-ok">${this.options.okBtn}</span>
                                </div>
                                <div class="c-ymd">
                                    <div class="c-ymd-1">
                                        <span class="s-ymd"></span>
                                        <i class="icon-wrong s-clear"></i> 
                                    </div>
                                </div>
                                <div class="c-s">
                                    <div class="c-l">
                                        <span class="s-month"></span>
                                        <span class="s-year"></span>
                                    </div>
                                    <span class="c-r">
                                        <i class="select-month-l icon-arrow-left"></i>
                                        <i class="select-month-r icon-arrow-right"></i>
                                    </span>
                                </div>
                                
                                <div class="range">
                                    
                                </div>
                                <div class="footer">
                                    ${this.options.timeOptions && `<div class="c-t s-time">
                                        <div class="c-k">
                                            <i class="icon-clock"></i>
                                            <span>${this.options.timeOptions.title}</span>
                                        </div>
                                        <div class="c-r">
                                            <span>
                                                <span class="s-hour-minutes">请设置</span>
                                            </span>
                                            <i class="icon-arrow-right"></i>
                                        </div>
                                    </div>` || ''}
                                    ${this.options.zoneOptions && `<div class="c-t c-l s-zone">
                                        <div class="c-k">
                                            <i class="icon-zone"></i>
                                            时区（<span class="s-zone-v"></span>）
                                        </div>
                                    </div>` || ''}
                                </div>
                            </div>
                            ${this.options.timeOptions && `<div class="picker-time">
                                <div class="back"><i class="icon-arrow-left back-btn"></i></div>
                                <div class="picker-inner">
                            
                                </div>
                                <div class="p-footer">
                                    <div class="p-btn p-remove">${this.options.timeOptions.removeBtn}</div>
                                    <div class="p-btn p-set">${this.options.timeOptions.setBtn}</div>
                                </div>
                            </div>` || ''}
                            ${this.options.zoneOptions && `<div class="picker-zone">
                                <div class="top">
                                    <div class="back">${this.options.zoneOptions.cancelBtn}</div>
                                    <div class="title">${this.options.zoneOptions.title}</div>
                                    <div class="btn-ok">${this.options.zoneOptions.okBtn}</div>
                                </div>
                                <div class="search">
                                    <div class="search-zone">
                                        <input placeholder="搜索">
                                        <i class="icon-wrong clear hide"></i>
                                    </div>
                                </div>
                                <ul>
                                        
                                </ul>
                            </div>` || ''}
                        </div>
                    </div>`);


        this.$enMonth = this.$el.find('.s-month');
        this.$year = this.$el.find('.s-year');
        this.$ymd = this.$el.find('.s-ymd');
        this.$timeValue = this.$el.find('.s-hour-minutes');
        this.$zoneValue = this.$el.find('.s-zone-v');
        this.$home = this.$el.find('.inner');
        this.$subOk = this.$home.find('.sub-ok');
        this.$timePicker = this.$el.find('.picker-time');
        this.$zone = this.$el.find('.picker-zone');
        this.$search = this.$zone.find('input');
        this.$searchClear = this.$zone.find('.clear');

        //默认当前时区
        //当前时区
        let timezone = jstz.determine();
        let localZone;
        let index = TimeZones.findIndex(row => {
            return row.en === timezone.name();
        });
        if (index !== -1) {
            localZone = TimeZones[index];
        } else {
            localZone = TimeZones[0];
        }

        let defaultTime = this.options.time;
        if (this.options.zone) {
            let index = TimeZones.findIndex(row => {
                return row.id === this.options.zone;
            });
            if (index !== -1) {
                this.curZone = TimeZones[index];
            } else {
                this.curZone = TimeZones[0];
            }
            defaultTime -= (this.curZone.interval - localZone.interval)*60*1000;
        } else {
            this.curZone = localZone;
        }

        this.selectZone = this.curZone;

        this.updateZone();


        if (defaultTime) {
            let time = new Date(defaultTime);
            this.year = time.getFullYear();
            this.month = time.getMonth()+1;
            this.day = time.getDate();
            this.hour = time.getHours();
            this.minutes = time.getMinutes();
        } else {
            let time = new Date();
            this.year = time.getFullYear();
            this.month = time.getMonth()+1;
            this.day = time.getDate();
        }

        this.updateYMD();
        this.changeHourMinutes();

        let vm = this;
        this.fromCalender = new Calendar({
            year: this.year,
            month: this.month,
            day: this.day,
            el: this.$el.find('.range'),
            picker: this
        });

        this.changeMonthYear();

        this.$overlayEl = $('<div class="pop-overlay show"></div>');

        $(document.body).append(this.$overlayEl);
        $(document.body).append(this.$el);

        this.draw();

        this.$el.find('.select-month-l').click(function () {
            vm.previousMonth();
        });
        this.$el.find('.select-month-r').click(function () {
            vm.nextMonth();
        });

        this.$el.find('.s-time').on('click', function() {
            vm.$el.removeClass('hide-zone');
            vm.$el.removeClass('hide-time');
            vm.$el.addClass('show-time');
            vm.initPicker();
        });
        this.$el.find('.back-btn').on('click', function() {
            vm.$el.removeClass('show-time');
            vm.$el.addClass('hide-time');
        });
        this.$el.find('.s-zone').on('click', function() {
            vm.$el.removeClass('hide-time');
            vm.$el.removeClass('hide-zone');
            vm.$el.addClass('show-zone');
            vm.initZone();
        });
        this.$el.find('.s-clear').on('click', function () {
            vm.$el.find('.s-clear').addClass('hide');
            vm.$ymd.text('请选择时间');
            vm.fromCalender.clearSelected();
            vm.year = null;
            vm.month = null;
            vm.day = null;
        });
        this.$zone.find('.back').on('click', function () {
            vm.$el.removeClass('show-zone');
            vm.$el.addClass('hide-zone');
        });
        this.$zone.find('.btn-ok').on('click', function () {
            vm.curZone = vm.selectZone;
            vm.updateZone();
            vm.$el.removeClass('show-zone');
            vm.$el.addClass('hide-zone');
        });
        this.$search.on('input', function (e) {
            let v = e.target.value;
            if (v) {
                vm.$searchClear.removeClass('hide');
            } else {
                vm.$searchClear.addClass('hide');
            }
            vm.searchZone(v);
        });
        this.$searchClear.on('click', function () {
            vm.$search.val('');
            vm.$searchClear.addClass('hide');
            vm.searchZone();
        });
        this.$timePicker.find('.p-remove').on('click', function () {
            if (vm.hour !== undefined) {
                vm.picker.setValue([vm.cx(vm.hour), vm.cx(vm.minutes)]);
            } else {
                vm.picker.setValue(['00','00']);
            }
        });
        this.$timePicker.find('.p-set').on('click', function () {
            let v = vm.picker.value;
            let h = parseInt(v[0]);
            let m = parseInt(v[1]);
            if (vm.isValidByHM(h, m)) {
                vm.hour = h;
                vm.minutes = m;
                vm.changeHourMinutes();
                vm.$el.removeClass('show-time');
                vm.$el.addClass('hide-time');
            }

        });


        this.$home.find('.cancel').on('click', function () {
            vm.close();
        });
        this.$subOk.on('click', function () {
            if (!vm.isValid()) {
                return;
            }
            vm.options.onChange && vm.options.onChange(vm.year, vm.month, vm.day, vm.hour, vm.minutes, vm.curZone);
            vm.close();
        });

        this.$el.on('click', function (e) {
            e.stopPropagation();
        });

        setTimeout(()=>{
            this.$el.find('.content').removeClass('show');
        }, 250);
    }
    searchZone(word) {
        if (word) {
            this.$zone.find('ul').children().each((index, el)=>{
                el = $(el);
                let item = TimeZones[parseInt(el.attr('data-id'))];
                if (searchZone(item, word)) {
                    el.removeClass('hide');
                } else {
                    el.addClass('hide');
                }
            })
        } else {
            this.$zone.find('ul').children().each((index, el)=>{
                el = $(el);
                el.removeClass('hide');
            })
        }
    }
    checkSubAbled() {
        if (this.year && this.month && this.day && this.hour !== undefined && this.minutes != undefined) {
            this.$subOk.removeClass('disabled');
        } else {
            this.$subOk.addClass('disabled');
        }
    }
    initZone() {
        this.selectZone = this.curZone;
        if (this.$zone.find('ul').children().length === 0) {
            for (let i=0; i<TimeZones.length; ++i) {
                let item = TimeZones[i];
                let el = $(`<li data-id="${item.id}"><div class="item"><span>${item.zh}</span></div></li>`);
                this.$zone.find('ul').append(el);
                el.on('click', ()=>{
                    if (!el.hasClass('active')) {
                        this.selectZone = item;
                        this.$zone.find('.active').removeClass('active')
                        el.addClass('active');
                    }
                })
            }
        }
        this.$zone.find('.active').removeClass('active');
        this.$zone.find('[data-id=\''+this.selectZone.id+'\']').addClass('active');
    }
    initPicker() {
        if (!this.picker) {
            let hours = [];
            for (let i=0; i<24; ++i) {
                hours.push(this.cx(i, 2));
            }
            let minutes = ['00', '15', '30', '45'];
            this.picker = Picker.create({
                containerEl: this.$timePicker.find('.picker-inner'),
                toolbar: false,
                rotateEffect: true,
                cols: [
                    {
                        values: hours,
                        cssClass: 'picker-ca',
                    },
                    {
                        values: minutes,
                        cssClass: 'picker-ca',
                    },
                ],
            })
        }
        if (this.hour !== undefined) {
            this.picker.setValue([this.cx(this.hour), this.cx(this.minutes)]);
        }
    }
    isValidYMD(year, month, day) {
        let p = new Date();
        p.setHours(0,0,0,0);
        let curTime = p.getTime();
        p.setFullYear(year, month-1, day);
        if (!this.options.allowMoreThan && p.getTime() < curTime) {
            app.toast.create('不能小于当前日期');
            return false;
        }
        return true;
    }

    isValidByHM(hour, minutes) {
        let p = new Date();
        let curTime = p.getTime();
        p.setFullYear(this.year, this.month-1, this.day);
        p.setHours(hour, minutes, 0, 0);
        if (!this.options.allowMoreThan && p.getTime() < curTime) {
            app.toast.create('不能小于当前时间');
            return false;
        }
        return true;
    }
    isValid() {
        let p = new Date();
        p.setSeconds(0, 0);
        let curTime = p.getTime();
        p.setFullYear(this.year, this.month-1, this.day);
        p.setHours(this.hour, this.minutes, 0, 0);
        if (!this.options.allowMoreThan && p.getTime() < curTime) {
            app.toast.create('不能小于当前时间');
            return false;
        }
        return true;
    }
    selectDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.updateYMD();
        this.$el.find('.s-clear').removeClass('hide');
        this.checkSubAbled();
    }
    cx(n, c=2) {
        if ((n = n + "").length < c) {
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    }
    updateZone() {
        this.$zoneValue.text(this.curZone.zh);
    }
    changeHourMinutes() {
        this.checkSubAbled();
        if (this.hour !== undefined) {
            this.$timeValue.text(this.cx(this.hour)+':'+this.cx(this.minutes));
        } else {
            this.$timeValue.text('请设置');
        }
    }
    updateYMD() {
        this.$ymd.text(this.year+'/'+this.cx(this.month)+'/'+this.cx(this.day));
    }
    changeMonthYear() {
        this.fromCalender.changeYearMonth(this.year, this.month);
        this.fromCalender.draw();
        this.$enMonth.text(MONTH_EN[this.month-1]);
        this.$year.text(this.year);
    }
    previousMonth() {
        if (this.month === 1) {
            this.month = 12;
            this.year -= 1;
        } else {
            this.month -= 1;
        }
        this.changeMonthYear();
    };
    nextMonth() {
        if (this.month === 12) {
            this.month = 1;
            this.year += 1;
        } else {
            this.month += 1;
        }
        this.changeMonthYear();
    };
    close() {
        window.calenderPicker = null;
        this.$el.find('.content').addClass('hide');
        let vm = this;
        setTimeout(function () {
            vm.$el.remove();
            vm.$overlayEl.remove();
        }, 250);
    }
    draw() {
        this.fromCalender.draw();
    }
}

export {
    Calendar,
    CalendarPicker
}