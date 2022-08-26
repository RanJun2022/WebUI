import keyboard from "./keyboard/keyboard";
import calender from "./calendar/calendar";
import picker from "./picker/picker";
import toast from "./toast/toast";
import $ from './dom7/dom7'
window.$ = $;
window.global = {};
class WebApp {
    constructor(options) {
        this.$root = options.el;
        this.$body = $(document.body);
        window.app = this;
        this.keyboard = keyboard;
        this.canlendar = calender;
        this.picker = picker;
        this.toast = toast;
    }
}

export default WebApp;