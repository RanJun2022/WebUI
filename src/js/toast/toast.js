const toast = function (text, type='reminder') {
    let icon = '';
    if (type === 'error') {
        icon = '<i class="icon-exclamation"></i>'
    } else if (type === 'success') {
        icon = '<i class="mode-icon icon-correct"></i>'
    } else if (type === 'fail') {
        icon = '<i class="mode-icon icon-wrong"></i>'
    }
    let body = $(document.body);
    let el = '';
    if (type === 'success' || type === 'fail') {
        el = $(`<div class="web-toast mode-2"><div class="web-toast-content">${icon}<span>${text}</span></div></div>`);
    } else {
        el = $(`<div class="web-toast"><div class="web-toast-content">${icon}${text}</div></div>`);
    }
    body.append(el);
    setTimeout(function () {
        el.addClass('show');
        setTimeout(function () {
            el.removeClass('show');
            setTimeout(function () {
                el.remove();
            }, 300)
        }, 600)
    }, 50)
};
export default {
    create(options) {
        return toast(options)
    }
}