import pickerColumn from './picker-column.js';
class Picker {
    constructor(params) {
        this.params = params;
        this.params.rotateEffect = true;
        this.$containerEl = params.containerEl;
        this.cols = params.cols;

        this.$el = $(this.renderInline());
        this.$containerEl.append(this.$el);
        this.onOpen();
    }
    renderInline() {
        const picker = this;
        const { rotateEffect, cssClass, toolbar } = picker.params;
        console.log(picker)
        const inlineHtml = `
            <div class="picker picker-inline ${rotateEffect ? 'picker-3d' : ''} ${cssClass || ''}">
                ${toolbar && picker.renderToolbar() || ''}
                <div class="picker-columns">
                    ${picker.cols.map((col) => picker.renderColumn(col)).join('')}
                    <div class="picker-center-highlight"></div>
                </div>
            </div>`;

        return inlineHtml;
    }
    renderToolbar() {
        const picker = this;
        if (picker.params.renderToolbar) return picker.params.renderToolbar.call(picker, picker);
        return (
            `<div class="toolbar toolbar-top no-shadow">
                <div class="toolbar-inner">
                    <div class="left"></div>
                    <div class="right">
                        <a class="link sheet-close popover-close">{picker.params.toolbarCloseText}</a>
                    </div>
                </div>
            </div>`
        );
    }
    renderColumn(col, onlyItems) {
        const colClasses = `picker-column ${col.textAlign ? `picker-column-${col.textAlign}` : ''} ${
            col.cssClass || ''
        }`;
        let columnHtml;
        let columnItemsHtml;

        if (col.divider) {
            // prettier-ignore
            columnHtml = `<div class="${colClasses} picker-column-divider">${col.content}</div>`;
        } else {
            columnItemsHtml = col.values.map((value, index) => `
                <div class="picker-item" data-picker-value="${value}">
                    <span>${col.displayValues ? col.displayValues[index] : value}</span>
                </div>
            `).join('');

            columnHtml = `
                <div class="${colClasses}">
                    <div class="picker-items">${columnItemsHtml}</div>
                </div>`;
        }

        return onlyItems ? columnItemsHtml.trim() : columnHtml.trim();
    }

    initColumn(colEl, updateItems) {
        const picker = this;
        pickerColumn.call(picker, colEl, updateItems);
    }

    updateValue(forceValues) {
        const picker = this;
        const newValue = forceValues || [];
        const newDisplayValue = [];
        let column;
        if (picker.cols.length === 0) {
            const noDividerColumns = picker.params.cols.filter((c) => !c.divider);
            for (let i = 0; i < noDividerColumns.length; i += 1) {
                column = noDividerColumns[i];
                if (
                    column.displayValues !== undefined &&
                    column.values !== undefined &&
                    column.values.indexOf(newValue[i]) !== -1
                ) {
                    newDisplayValue.push(column.displayValues[column.values.indexOf(newValue[i])]);
                } else {
                    newDisplayValue.push(newValue[i]);
                }
            }
        } else {
            for (let i = 0; i < picker.cols.length; i += 1) {
                if (!picker.cols[i].divider) {
                    newValue.push(picker.cols[i].value);
                    newDisplayValue.push(picker.cols[i].displayValue);
                }
            }
        }

        if (newValue.indexOf(undefined) >= 0) {
            return;
        }

        picker.value = newValue;
        picker.displayValue = newDisplayValue;
        if (picker.inputEl) {
            picker.$inputEl.val(picker.formatValue());
        }
        picker.params.change && picker.params.change(newDisplayValue);
    }
    formatValue() {
        const picker = this;
        const { value, displayValue } = picker;
        if (picker.params.formatValue) {
            return picker.params.formatValue.call(picker, value, displayValue);
        }
        return value.join(' ');
    }
    setValue(values) {
        const picker = this;
        let valueIndex = 0;
        if (picker.cols.length === 0) {
            picker.value = values;
            picker.updateValue(values);
            return;
        }
        for (let i = 0; i < picker.cols.length; i += 1) {
            if (picker.cols[i] && !picker.cols[i].divider) {
                picker.cols[i].setValue(values[valueIndex]);
                valueIndex += 1;
            }
        }
    }
    destroyColumn(colEl) {
        const picker = this;
        const $colEl = $(colEl);
        const index = $colEl.index();
        if (picker.cols[index] && picker.cols[index].destroy) {
            picker.cols[index].destroy();
        }
    }
    onOpen() {
        const picker = this;
        const { initialized, $el, app, $inputEl, inline, value, params } = picker;
        picker.opened = true;
        picker.closing = false;
        picker.opening = true;

        // Init cols
        $el.find('.picker-column').each(colEl => {
            let updateItems = true;
            if ((!initialized && params.value) || (initialized && value)) {
                updateItems = false;
            }
            picker.initColumn(colEl, updateItems);
        });

        // Set value
        if (!initialized) {
            if (value) picker.setValue(value);
            else if (params.value) {
                picker.setValue(params.value);
            }
        } else if (value) {
            picker.setValue(value);
        }

        picker.initialized = true;
    }
}

export default {
    create(options) {
        return new Picker(options);
    }
};