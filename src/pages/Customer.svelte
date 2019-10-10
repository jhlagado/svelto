<script>
  import Icon from '../components/Icon';
  import NavLink from '../components/NavLink';
  import Card from '../components/Card';

/* props */
  export let params;
  export let store;

  // const {store} = props;

  let customer = [];

  $: customer = $store.data.find(
    customer => customer._id === params.id
  );

</script>

<style>
</style>

<h1>Customer</h1>
<NavLink path="/">
  <Icon name="arrow-left"/> Back
</NavLink>
{#if customer}
<Card>
  <table>
    <tr><td>ID:&nbsp;{params.id}</td>
    <tr><td><label>First Name<input type="text" value="{customer.first_name}"></label></td></tr>
    <tr><td><label>Last Name<input type="text" value="{customer.last_name}"></label></td></tr>
    <tr><td><label>Email<input type="text" value="{customer.email}"></label></td></tr>
    <tr><td><label>Gender<input type="text" value="{customer.gender}"></label></td></tr>
    <tr><td><label>IP Address<input type="text" value="{customer.ip_address}"></label></td></tr>
  </table>
</Card>
{/if}
