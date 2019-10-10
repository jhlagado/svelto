<script>
  import NavLink from '../components/NavLink.svelte';

  /* props */
  export let params;
  export let store;

  // const {store} = props;

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
      <NavLink path="/customer/{customer._id}">
        {customer.first_name} {customer.last_name}
      </NavLink>
    </td>
    <td>{customer.email}</td>
    <td>{customer.gender}</td>
    <td>{customer.ip_address}</td>
  </tr>
{/each}
</table>
