import { EDITOR_DEFAULT_WIDTH, EDITOR_DEFAULT_HEIGHT } from './constant';
import styles from './editor.css';

class Editor {
    constructor(selectors, options) {

        if (!selectors) {
            throw new Error(`新建编辑器实例必须提供节点选择器!`)
        }

        const rootDom = document.querySelector(selectors);

        if (!rootDom) {
            throw new Error(`无效的节点选择器'${selectors}'!`);
        }

        this.root = rootDom;

        this.options = options ? options : {};

        this.initEditor();
    }

    initEditor() {

        const editorContainer = document.createElement("div");

        editorContainer.setAttribute("contenteditable", "true");

        editorContainer.setAttribute("style", `width: ${EDITOR_DEFAULT_WIDTH}px;height: ${EDITOR_DEFAULT_HEIGHT}px;`);

        editorContainer.setAttribute("class", styles["retro-editor-instance"]);

        this.root.appendChild(editorContainer);

    }
}
export default Editor;