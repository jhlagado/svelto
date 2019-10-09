<script>
  /* props */
  export let params;
  export let store;

  let customer = [];

  $: customer = $store.data.find(
    customer => customer._id === params.id
  );

</script>

<style>
</style>

<h1>Customer</h1>
{#if customer}
<table>
  <tr><td>ID</td><td>{params.id}</td>
  <tr><td>First Name</td><td>{customer.first_name}</td></tr>
  <tr><td>Last Name</td><td>{customer.last_name}</td></tr>
  <tr><td>Email</td><td>{customer.email}</td></tr>
  <tr><td>Gender</td><td>{customer.gender}</td></tr>
  <tr><td>IP Address</td><td>{customer.ip_address}</td></tr>
</table>
{/if}
