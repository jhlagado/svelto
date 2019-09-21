<script>
  import { getContext } from 'svelte';

  export let title = null;
  export let segment = null;
  export let external = null;

  const current = getContext('nav');
</script>

{#if external}
  <li>
    <a href={external} {title}>
      <slot />
    </a>
  </li>
{:else}
  <li class:active={$current === segment}>
    <a rel="prefetch" href={segment} {title}>
      <slot />
    </a>
  </li>
{/if}
