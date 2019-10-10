<script>
  import { curRoute } from '../utils/router.js';

  export let path;

  function linkTo(event){
    curRoute.set(path);
    history.pushState({path}, '', location.origin + path);
  }

</script>

<style>
</style>

<a href={path} on:click|preventDefault={linkTo}>
  <slot></slot>
</a>
