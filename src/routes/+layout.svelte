<svelte:head>
  <title>Structur</title>
</svelte:head>

<script>
  /* eslint-disable import/order -- Custom order based on cascade, not linter rules */
  import '$styles/vendor/preflight.styl'
  import '$styles/vendor/adobe-clean.styl'
  import '$styles/vendor/adobe-clean-serif.styl'
  import '$styles/global/body.styl'
</script>

<main>
  <slot />
</main>
