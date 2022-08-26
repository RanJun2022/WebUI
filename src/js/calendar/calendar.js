import {CalendarPicker} from "./calendar-picker";

export default {
    show(options) {
        if (window.calenderPicker) {
            window.calenderPicker.close();
        }
        window.calenderPicker = new CalendarPicker(options);
    },
    hide() {
        if (window.calenderPicker) {
            window.calenderPicker.close();
        }
    }
}