<script lang='ts'>
  export let id: string
</script>

<p {id}>
  <slot />
</p>

<style lang='stylus'>
  p
    margin 0 0 1.5rem 0
    padding 0

    color var(--color-text)
    font-size 1.5rem
    line-height 1.5
</style>
