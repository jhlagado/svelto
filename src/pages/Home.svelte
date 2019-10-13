<script>
  import NavLink from '../components/NavLink.svelte';

  /* props */
  export let params;
  export let customers = [];
  
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
    <td>{customer.ip_address}</td>
  </tr>
{/each}
</table>
