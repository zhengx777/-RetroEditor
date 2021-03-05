<script>
    import Editor from "./editor/main.js";
    import { onMount } from "svelte";
    onMount(() => {
        const editorContainer = document.getElementById("editorContainer");
        window.editor = new Editor(editorContainer);
    });
    function execBold() {
        window.editor.execBold();
    }
</script>

<main>
    <div id="toolBar">
        <span class="toolButton" on:click={execBold}>
            <div class="menu-item">加粗</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">斜体</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">一级标题</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">二级标题</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">超链接</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">图片</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">撤销</div>
        </span>
        <span class="toolButton">
            <div class="menu-item">重做</div>
        </span>
    </div>
    <div id="editorContainer" />
</main>

<style>
    main {
        width: 800px;
        margin: auto;
    }
    .toolButton {
        display: inline-block;
        padding: 2px 5px;
        cursor: pointer;
    }
</style>
