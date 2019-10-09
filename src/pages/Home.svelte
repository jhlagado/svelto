<script>
  import RouterLink from '../components/RouterLink.svelte';

  /* props */
  export let params;
  export let store;

  let customers = [];

  $: customers = $store.data;

</script>

<style>
</style>

<h1>Customers</h1>

<table>
{#each customers as customer }
  <tr>
    <td>
      <RouterLink path="/customer/{customer._id}">
        {customer.first_name} {customer.last_name}
      </RouterLink>
    </td>
    <td>{customer.email}</td>
    <td>{customer.gender}</td>
    <td>{customer.ip_address}</td>
  </tr>
{/each}
</table>
