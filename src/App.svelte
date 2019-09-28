<script>
  import { onMount } from 'svelte';

  import Layout from './Layout.svelte';
  import Nested from './Nested.svelte';

  export let name;
  export let config;

  let customers = [];

  onMount(async () => {
    const serviceUrl = config.SERVICE_URL;
    console.log({serviceUrl});
		const res = await fetch(`https://4000-b33c1f76-0cd1-4f22-9dce-87f4755573e1.ws-ap0.gitpod.io`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({ query: `{
          customers {
            _id
            first_name
            last_name
            email
            gender
            ip_address
          }
        }` // body data type must match "Content-Type" header
      }),
    });
		const data = await res.json();
    customers = data.data.customers;
	});
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
