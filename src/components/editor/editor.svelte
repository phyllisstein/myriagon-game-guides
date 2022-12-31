<script lang='ts'>
  import { registerRichText } from '@lexical/rich-text'
  import { createEditor, $getRoot as getRoot, $createParagraphNode as createParagraphNode, $createTextNode as createTextNode } from 'lexical'
  import { onMount } from 'svelte'

  let contentEditableElement: HTMLElement

  const editor = createEditor({
    namespace: 'myriagon',
    onError: console.error,
  })

  onMount(() => {
    editor.setRootElement(contentEditableElement)
    registerRichText(editor)

    editor.update(() => {
      const root = getRoot()
      const paragraph = createParagraphNode()
      const text = createTextNode('Hello, world!')

      paragraph.append(text)
      root.append(paragraph)
    })
  })
</script>

<div class='editor-container'>
  <div contenteditable class='editor-root' bind:this={contentEditableElement} />
</div>

<style lang='stylus'>
  .editor-container
    display flex
    align-items center
    justify-content center
    width 100vw
    height 100vh

  .editor-root
    position relative

    display block
    width 66%
    height 100%
    padding 10px
    padding 10%
    overflow auto

    font-size 16px
    tab-size 1

    border 1px solid #222
    outline 0
    cursor text

    resize none
</style>
