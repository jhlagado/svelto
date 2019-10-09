<script>
  import { curRoute } from '../utils/router.js';

  export let path = '/home';

  function redirectTo(event){
    // change current router path
    curRoute.set(path);

    // push the path into web browser history API
    window.history.pushState({path}, '', window.location.origin + path);
  }

</script>

<style>
</style>

<a href={path} on:click|preventDefault={redirectTo}>
  <slot></slot>
</a>
