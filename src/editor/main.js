export default class Editor {
    constructor(target) {
        //挂载位置
        this.target = target;
        //编辑器dom
        this.editor;
        //记录选区
        this._currRange;
        this.create(target);
        // this.bindEvent();
        this.selectionChangeEvent = new Event('selectionchange');
    }
    create(target) {
        console.log(target)
        const editorArea = document.createElement("div");
        editorArea.setAttribute("class", "editorArea");
        editorArea.setAttribute("contenteditable", "true");
        target.appendChild(editorArea);
        this.editor = target.childNodes[0];
    }

    // 保存选区（记录光标位置）
    saveRange() {
        const selection = window.getSelection();
        let range;

        if (selection.getRangeAt && selection.rangeCount) {
            range = selection.getRangeAt(0);
        } else {
            range = window.createRange();
        }

        this._currRange = range;

        this.editor.dispatchEvent(selectionChangeEvent)
    }

    bindEvent() {
        this.saveRangeRealTime();
    }

    // 恢复选区
    restoreRange() {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(this._currRange);
    }

    execBold() {
        window.document.execCommand("Bold", false, null);
    }

    saveRangeRealTime() {
        this.editor.addEventListener('keyup', (e) => this.saveRange());
        this.editor.addEventListener('mousedown', (e) => this.saveRange());
        this.editor.addEventListener('mouseup', (e) => this.saveRange());
        this.editor.addEventListener('mouseleave', (e) => this.saveRange());
    }

}