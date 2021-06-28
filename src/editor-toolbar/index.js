import { ButtonList } from './constant';
import ToolBarStyle from './toolBar.css';
class ToolBar {
    constructor(selectors, options) {
        if (!selectors) {
            throw new Error(`新建工具栏实例必须提供节点选择器!`)
        }

        if (!window.retroEditor) {
            throw new Error(`新建工具栏需要先实例化Retro Editor!`)
        }

        const toolBarDom = document.querySelector(selectors);

        if (!toolBarDom) {
            throw new Error(`无效的节点选择器'${selectors}'!`);
        }

        this.root = toolBarDom;

        this.options = options ? options : {};

        this.initToolBar();
    }

    initToolBar() {
        const toolBarContainer = document.createElement("div");
        toolBarContainer.setAttribute("class", "retro-editor-toolbar");

        ButtonList.forEach(item => {
            const span = document.createElement("span");
            span.innerText = item.des;
            span.setAttribute("data-exec", item.exec);
            span.setAttribute("class", "toolbar-item");
        })
    }
}