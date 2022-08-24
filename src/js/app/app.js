class WebApp {
    constructor(options) {
        this.$root = options.el;
        this.$body = $(document.body);
        window.app = this;
    }
}