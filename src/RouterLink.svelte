<script>
  import { curRoute } from './router.js';

  export let page = {
    path: '/home',
    name: 'Home'
  };

  function redirectTo(event){
    // change current router path
    curRoute.set(page.path);

    // push the path into web browser history API
    window.history.pushState({path: page.path}, '', window.location.origin + page.path);
  }

</script>

<style>
</style>

<a href={page.path} on:click|preventDefault={redirectTo}>{page.name}</a>
