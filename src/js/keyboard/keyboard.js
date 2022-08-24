/*
* options
* target Dom
* fixed 保留小数
* focusOffsetEl
* move: body
* max: 最大输入
* onChange 输入变化
* */

class KeyboardView {
    constructor(options) {
        let defaultOptions = {
            type: '',
            fixed: 8,
        };
        this.offsetLeft = 0;
        this.$cursor = $('<span class="input-cursor"></span>');
        this.options = Object.assign(defaultOptions, options);
        this.$el = $(`<div class="keyboard show">
                        <ul class="content">
                            <li class="item" data-key="1">1</li>
                            <li class="item" data-key="2">2</li>
                            <li class="item" data-key="3">3</li>
                            <li class="item" data-key="4">4</li>
                            <li class="item" data-key="5">5</li>
                            <li class="item" data-key="6">6</li>
                            <li class="item" data-key="7">7</li>
                            <li class="item" data-key="8">8</li>
                            <li class="item" data-key="9">9</li>
                            <li class="item${this.options.type === 'verify' ? ' disabled' : ''}" data-key=".">.</li>
                            <li class="item" data-key="0">0</li>
                            <li class="item back" data-key="delete">
                                <i class="icon-delete"></i>
                            </li>
                        </ul>
                    </div>`);
        let body = $(document.body);
        body.append(this.$el);
        let vm = this;
        this.$el.find('li:not(.disabled)').on('touchstart', function (e) {
            e.stopPropagation();
            let key = $(e.target).attr('data-key');
            let text = vm.$target.text();
            if (key === '.') {
                if (text === '' || text.indexOf('.') !== -1 || vm.curIndex === -1) {
                    return;
                }
                vm.insertNode(key);
            } else if (key === '0') {
                if (text === '0' || (vm.curIndex === -1 && text !== '')) {
                    return;
                }
                if (text.indexOf('.') !== -1) {
                    let p = text.split('.')[1];
                    if (p.length === vm.options.fixed) {
                        return;
                    }
                }
                vm.insertNode(key)
            } else if (key !== 'delete') {
                if (text === '0') {
                    vm.replaceNode(key);
                    return;
                }
                if (text.indexOf('.') !== -1) {
                    let p = text.split('.')[1];
                    if (p.length === vm.options.fixed) {
                        return;
                    }
                }
                vm.insertNode(key)
            } else {
                vm.removeNode();
            }
        });
        this.$el.find('li:not(.disabled)').on('touchend', function (e) {
            clearTimeout(vm.deleteTimer);
            vm.deleteTimer = null;
        });
        this.$el.find('li:not(.disabled)').on('touchcancel', function (e) {
            clearTimeout(vm.deleteTimer);
            vm.deleteTimer = null;
        });
        this.$el.on('click', function (e) {
            e.stopPropagation();
        });
        this.show();
    }

    replaceNode(key) {
        let isMax = this.options.max !== undefined;
        let max = 0;
        if (typeof this.options.max === "function") {
            max = this.options.max() + '';
        } else if (typeof this.options.max === "string" || typeof this.options.max === "number") {
            max = this.options.max;
        }
        if (isMax) {
            let r = parseFloat(key);
            if (r > parseFloat(max.toString())) {
                this.val(max);
                this.options.onChangeMax && this.options.onChangeMax();
                this.options.onChange && this.options.onChange();
                return false;
            }
        }

        let node = document.createTextNode(key);
        let nodes = this.$target[0].childNodes;
        if (nodes.length > 0) {
            let firstNode = nodes[0];
            if (firstNode && firstNode.nodeType !== 1) {
                this.$target[0].replaceChild(node, firstNode);
                this.cursorLeft = this.getNodeWidth(node);
                this.cursorPos();
            }
        }
        this.options.onChange && this.options.onChange();
        return true;
    }

    insertNode(key) {
        let isMax = this.options.max !== undefined;
        let max = 0;
        if (typeof this.options.max === "function") {
            max = this.options.max() + '';
        } else if (typeof this.options.max === "string" || typeof this.options.max === "number") {
            max = this.options.max;
        }
        if (isMax) {
            let text = this.$target.text();
            let r = text.substr(0, this.curIndex + 1) + key + text.substr(this.curIndex + 1);
            if (parseFloat(r) > parseFloat(max.toString())) {
                this.val(max);
                this.options.onChange && this.options.onChange();
                this.options.onChangeMax && this.options.onChangeMax();
                return false;
            }
        }

        let nodes = this.$target[0].childNodes;
        let node = document.createTextNode(key);
        if (this.curIndex + 1 < nodes.length) {
            this.$target[0].insertBefore(node, nodes[this.curIndex + 1]);
        } else {
            this.$target[0].appendChild(node);
        }
        this.cursorLeft += this.getNodeWidth(node);
        this.cursorPos();
        this.curIndex += 1;

        this.options.onChange && this.options.onChange();
        return true;
    }

    val(text) {
        if (typeof text === "undefined") {
            return this.$target.text();
        } else {
            this.$cursor.remove();
            this.$target.empty();
            text = Number(text).toString();
            for (let i = 0; i < text.length; ++i) {
                let node = document.createTextNode(text[i]);
                this.$target[0].appendChild(node);
            }
            this.focus();
        }
    }

    removeNode() {
        let nodes = this.$target[0].childNodes;
        if (nodes.length > 0 && this.curIndex < nodes.length && this.curIndex >= 0) {
            let node = nodes[this.curIndex];
            if (node && node.nodeType !== 1) {
                this.cursorLeft -= this.getNodeWidth(node);
                this.cursorLeft = this.cursorLeft < 0 ? 0 : this.cursorLeft;
                this.$target[0].removeChild(node);
                this.curIndex = this.curIndex - 1;
                this.cursorPos();
                if (this.$target.text().indexOf('.') === -1 && parseFloat(this.$target.text()) === 0) {
                    this.val(0);
                    this.focus();
                }
                let isMax = this.options.max !== undefined;
                let max = 0;
                if (typeof this.options.max === "function") {
                    max = this.options.max() + '';
                } else if (typeof this.options.max === "string" || typeof this.options.max === "number") {
                    max = this.options.max;
                }
                if (isMax) {
                    let text = this.$target.text();
                    if (parseFloat(text) > parseFloat(max.toString())) {
                        this.val(max);
                        this.options.onChangeMax && this.options.onChangeMax();
                    }
                }
                this.options.onChange && this.options.onChange();

                if (!this.deleteTimer && this.curIndex >= 0) {
                    let vm = this;
                    this.deleteTimer = setTimeout(function () {
                        vm.deleteTimer = null;
                        vm.removeNode();
                    }, 150)
                }
                return true;
            }
        }
        return false;
    }

    getNodeWidth(node) {
        const range = document.createRange();
        // range.setStart(node, 0);
        // range.setEnd(node, 1);
        range.selectNode(node);
        return range.getBoundingClientRect().width;
    }

    show(options) {
        let defaultOptions = {
            type: '',
            fixed: 8,
        };
        if (options) {
            this.options = Object.assign(defaultOptions, options);
        }
        this.$cursor.remove();
        this.$target = this.options.target;
        this.cursorLeft = 0;
        this.curIndex = -1;
        if (this.options && this.$target[0].childNodes.length > 0) {
            let nodes = this.$target[0].childNodes;
            for (let i = 0; i < nodes.length; ++i) {
                let node = nodes[i];
                if (node.nodeType !== 1) {
                    const rangeWidth = this.getNodeWidth(node);
                    if (this.options.pointX !== undefined && this.cursorLeft + rangeWidth > this.options.pointX) {
                        break;
                    }
                    this.cursorLeft += rangeWidth;
                    this.curIndex = i
                }
            }
        }

        this.offsetLeft = (this.$target.outerWidth() - this.$target.width()) * 0.5;
        this.cursorPos();
        this.$target.append(this.$cursor);
        let vm = this;
        let el = this.$el.find('[data-key=\'.\']');
        if (this.options.type === 'verify') {
            el.addClass('disabled');
        } else {
            el.removeClass('disabled');
        }
        if (this.isShow) {
            this.options.onKeyboardShow && this.options.onKeyboardShow(this.$el.outerHeight());
            return;
        }
        this.isShow = true;
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
        this.$el.removeClass('hide');
        this.$el.removeClass('close');
        this.options.onKeyboardShow && this.options.onKeyboardShow(this.$el.outerHeight());
        setTimeout(function () {
            $(document.body).on('once', function () {
                vm.close();
            });
        }, 500)
    }

    focus() {
        if (!this.isShow) return;
        this.cursorLeft = 0;
        let nodes = this.$target[0].childNodes;
        for (let i = 0; i < nodes.length; ++i) {
            let node = nodes[i];
            if (node.nodeType !== 1) {
                this.cursorLeft += this.getNodeWidth(node);
                this.curIndex = i
            }
        }
        this.$target.append(this.$cursor);
        this.cursorPos();
    }

    cursorPos() {
        if (this.cursorPosTimer) {
            clearTimeout(this.cursorPosTimer);
            this.cursorPosTimer = null;
        }
        let vm = this;
        this.$cursor.css('left', this.offsetLeft + this.cursorLeft + 'px');
        this.$cursor.removeClass('active');
        this.cursorPosTimer = setTimeout(function () {
            vm.$cursor.addClass('active');
            vm.cursorPosTimer = null;
        }, 500);
    }

    close(cbk = true) {
        if (this.closeTimer) {
            return;
        }
        if (this.cursorPosTimer) {
            clearTimeout(this.cursorPosTimer);
            this.cursorPosTimer = null;
        }
        this.isShow = false;
        $(document.body).off('click');
        let vm = this;
        this.$el.addClass('close');
        this.$cursor.remove();
        cbk && vm.options.onKeyboardHide && vm.options.onKeyboardHide();
        vm.options.onKeyboardHide = null;
        this.closeTimer = setTimeout(function () {
            vm.$el.addClass('hide');
            vm.closeTimer = null;
        }, 1500);
    }
}

WebApp.prototype.keyboard = {
    show(options) {
        if (window.keyboardView) {
            window.keyboardView.show(options);
            return;
        }
        window.keyboardView = new KeyboardView(options);
    },
    hide(isCallback) {
        if (window.keyboardView) {
            window.keyboardView.close(isCallback);
        }
    },
    focus() {
        if (window.keyboardView) {
            window.keyboardView.focus();
        }
    }
};

WebApp.prototype.$keyboardShadow = function () {
    if (!this.$keyShadow) {
        this.$keyShadow = $('<div class="keyboard-shadow"></div>');
    }
    return this.$keyShadow;
}
class WebKeyboard {
    constructor(options) {
        this.options = options;
        this.$el = options.target;
        let vm = this;
        this.isReadyOnly = false;
        this.$el.on('click', function (e) {
            if (vm.isReadyOnly) {
                return;
            }
            e.stopPropagation();
            if (options.onClick && options.onClick()) {
                return;
            }
            vm.focus(e.offsetX);
        })
    }

    focus(offsetX = undefined) {
        let vm = this;
        WebApp.prototype.keyboard.show({
            pointX: offsetX,
            target: vm.$el,
            fixed: vm.options.fixed,
            max: vm.options.max,
            onChangeMax: vm.options.onChangeMax,
            type: vm.options.type,
            onChange: function () {
                vm.options.onChange && vm.options.onChange(vm)
            },
            onKeyboardShow(height) {
                if (app.$curKeyboard) {
                    app.$root.removeClass('web-input-top')
                }
                app.$root.addClass('web-input-top')
                app.$curKeyboard = vm;
                app.$keyboardShadow().remove();
                vm.$el.parent().append(app.$keyboardShadow())
                app.$keyShadow.on('click', ()=> {
                    app.keyboard.hide();
                    app.$keyShadow.off('click')
                })
                const moveEl = vm.options.moveEl || app.$root
                if (moveEl) {
                    const focusOffsetEl = vm.options.focusOffsetEl || vm.options.target;
                    let offset = focusOffsetEl.offset().top + focusOffsetEl.outerHeight() + 10;
                    offset = $(document.body).height() - offset + moveEl.offset().top;
                    if (height > offset) {
                        offset = offset - height;
                        moveEl.css({
                            transform: 'translateY(' + offset + 'px)',
                            transition: 'all 0.5s ease'
                        })
                    }
                }
            },
            onKeyboardHide() {
                app.$keyboardShadow().remove();
                app.$root.removeClass('web-input-top')
                const moveEl = vm.options.moveEl || app.$root
                if (moveEl) {
                    moveEl.css({
                        transform: 'translateY(0)',
                        transition: 'all 0.5s ease'
                    })
                }
                vm.options.onHide && vm.options.onHide();
            }
        });
    }

    updateFixed(fixed) {
        this.options.fixed = fixed;
    }

    readyOnly(allow = true) {
        this.isReadyOnly = allow;
    }

    val(text) {
        if (typeof text === "undefined") {
            let v = this.$el.text();
            return v || 0;
        } else {
            let isFocus = this.$el.find('.input-cursor').length > 0;
            this.$el.empty();
            if (text !== '') {
                text = Number(text).toString();
                for (let i = 0; i < text.length; ++i) {
                    let node = document.createTextNode(text[i]);
                    this.$el[0].appendChild(node);
                }
            }
            if (isFocus) {
                WebApp.prototype.keyboard.focus();
            }
        }
    }
}