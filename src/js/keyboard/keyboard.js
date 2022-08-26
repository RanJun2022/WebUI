import {show, hide, focus} from "./keyboard-view";

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
    keyboardShadow() {
        if (!global.keyboardShadow) {
            global.keyboardShadow = $('<div class="keyboard-shadow"></div>');
        }
        return global.keyboardShadow;
    }
    focus(offsetX = undefined) {
        let vm = this;
        show({
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
                if (global.curKeyboard) {
                    app.$root.removeClass('web-input-top')
                }
                app.$root.addClass('web-input-top')
                global.curKeyboard = vm;
                this.keyboardShadow().remove();
                vm.$el.parent().append(this.keyboardShadow())
                this.keyboardShadow().on('click', ()=> {
                    hide();
                    this.keyboardShadow().off('click')
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
                this.keyboardShadow().remove();
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
                focus();
            }
        }
    }
}

// module.exports = {
//     create(params) {
//         return new WebKeyboard(params);
//     },
//     show: show,
//     hide: hide,
//     focus:focus
// }

export default {
    create(params) {
        return new WebKeyboard(params);
    },
    show: show,
    hide: hide,
    focus:focus
}