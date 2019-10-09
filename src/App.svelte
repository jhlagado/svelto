<script>
  import { onMount } from 'svelte';
  import { curRoute, router } from './utils/router';
  import { connect } from './stores';

  import RouterLink from './components/RouterLink.svelte';
  import Layout from './components/Layout.svelte';
  import Nested from './components/Nested.svelte';

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Customer from './pages/Customer.svelte';

  /* props */
  export let config;

  let connection = connect(config);
  let store = connection.loadCustomers();

  onMount(async () => {
    curRoute.set(window.location.pathname);
    if (!history.state) {
      window.history.replaceState(
        {
          path: window.location.pathname,
        },
        '',
        window.location.href,
      );
    }
  });

  function handlerBackNavigation(event) {
    curRoute.set(event.state.path);
  }

  let component = Home;
  let params = {};

  const routes = [
    { path: '/', component: Home, default: true },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/customer/:id', component: Customer },
  ];

  const matchRoute = router(routes);

  $: {
    const matched = matchRoute($curRoute);
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

    <RouterLink path="/home">Home</RouterLink>
    <RouterLink path="/about">About</RouterLink>

    <svelte:component this={component} {params} {store} />

  </div>
</Layout>
