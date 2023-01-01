<script lang='ts'>
  import { EntryBodyImage, EntryBodyParagraph } from '$components/entry-body'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<section>
  {#each data?.entry?.body?.components as component}
    {#if component.__typename === 'EntryBodyParagraph'}
      <EntryBodyParagraph id={component.placement.id}>
        {component.format.plaintext}
      </EntryBodyParagraph>
    {:else if component.__typename === 'EntryBodyImage'}
      <EntryBodyImage alt={component.image?.caption?.plaintext} id={component.placement.id} src={component.image.url} />
    {/if}
  {/each}
</section>

<style lang='stylus'>
  section
    display flex
    flex-direction column
    align-items center
    justify-content flex-start
    width 100vw
    height 100vh
</style>
