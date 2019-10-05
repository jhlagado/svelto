<script>
  import {onMount} from 'svelte';
  import {createStore} from './stores';

  import Layout from './Layout.svelte';
  import Nested from './Nested.svelte';

  /* props */
  export let name;
  export let config;

  let customers = [];

  const store = createStore(config);

  onMount(async () => {
    store.loadCustomers();
	});

  $: customers = $store.data;

</script>

<style>
.layout-inner {
  padding: 1rem;
}
</style>

<Layout>
  <div class="layout-inner">
    Hello {name}!
    <table>
    {#each customers as customer }
    <tr>
      <td><a href="{customer._id}">{customer.first_name}</a></td>
      <td><a href="{customer._id}">{customer.last_name}</a></td>
      <td>{customer.email}</td>
      <td>{customer.gender}</td>
      <td>{customer.ip_address}</td>
    </tr>
    {/each}
    </table>
  </div>
</Layout>
