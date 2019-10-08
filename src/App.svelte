<script>
  import {onMount} from 'svelte';
  import router, { curRoute, matchRoute } from './router';
  import {connect} from './stores';

  import RouterLink from './RouterLink.svelte';
  import Layout from './Layout.svelte';
  import Nested from './Nested.svelte';

  import Home from './Home.svelte';

  /* props */
  export let config;

  let connection = connect(config);
  let store = connection.loadCustomers();

  onMount(async () => {
    curRoute.set(window.location.pathname);
    if (!history.state) {
      window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
    }
	});

  function handlerBackNavigation(event){
    curRoute.set(event.state.path)
  }

  const matcher = matchRoute(router);

  let component = Home;
  let params = {};

  $: {
    const matched = matcher($curRoute);
    if (matched !== null) {
      component = matched.component;
      params = matched.params;
    }
}

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
      <svelte:component this={component} params={params} store={store} />
    </div>

  </div>
</Layout>
