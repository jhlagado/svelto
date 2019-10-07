<script>
  import {onMount} from 'svelte';
  import router, { curRoute } from './router';
  import {createStore} from './stores';

  import RouterLink from './RouterLink.svelte';
  import Layout from './Layout.svelte';
  import Nested from './Nested.svelte';

  /* props */
  export let name;
  export let config;

  let store = createStore(config);

  onMount(async () => {
    curRoute.set(window.location.pathname);
    if (!history.state) {
      window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
    }
    store.loadCustomers();
	});

  function handlerBackNavigation(event){
    curRoute.set(event.state.path)
  }

  const matchRoute = (router, curRoute) => ({
    route: router[curRoute],
    params: {id: 0},
  });

  let route = router['/home'];
  let params = 1;

  //$: {route, params} = matchRoute(router, $curRoute);

</script>

<style>
.layout-inner {
  padding: 1rem;
}
</style>

<svelte:window on:popstate={handlerBackNavigation} />

<Layout>
  <div class="layout-inner">

    <RouterLink page={{path: '/home', name: 'Home'}} />
    <RouterLink page={{path: '/about', name: 'About'}} />

    <div id="pageContent">
      <!-- Page component updates here -->
      <svelte:component this={router[$curRoute]} params={params} store={store} />
    </div>

  </div>
</Layout>
