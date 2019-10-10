<script>
  import { connect } from './stores';

  import Layout from './components/Layout.svelte';
  import Router from './components/Router.svelte';

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Customer from './pages/Customer.svelte';

  /* props */
  export let config;

  let connection = connect(config);
  let store = connection.loadCustomers();
  const props = {store};

  const routes = [
    { path: '/', component: Home, default: true },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/customer/:id', component: Customer },
  ];

</script>

<style>
  .layout-inner {
    padding: 1rem;
  }
</style>

<Layout>
  <div class="layout-inner">
    <Router {routes} {props} />
  </div>
</Layout>
