<script>
  import RouterLink from './RouterLink.svelte';

  /* props */
  export let params;
  export let store;

  let customers = [];

  $: customers = $store.data;

</script>

<style>
</style>

<table>
{#each customers as customer }
<tr>
  <td><RouterLink page={{path: `/customer/${customer._id}`, name: `${customer.first_name} ${customer.last_name}`}} /></td>
  <td>{customer.email}</td>
  <td>{customer.gender}</td>
  <td>{customer.ip_address}</td>
</tr>
{/each}
</table>
