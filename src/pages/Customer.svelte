<script>
  import Icon from '../components/Icon';
  import NavLink from '../components/NavLink';
  import Card from '../components/Card';
  import Form from '../components/Form';
  import Field from '../components/Field';

/* props */
  export let params;
  export let customers = [];

  const customer = customers.find(
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
  <Form>
    <Field>
      <label>First name</label>
      <input required type="text" id="first_name" value={customer.first_name} />
      <span slot="tooltip">Info about this field</span>
    </Field>
    <Field>
      <label>Last name</label>
      <input required type="text" id="last_name" value={customer.last_name} />
      <span slot="tooltip">Info about this field</span>
    </Field>
    <Field>
      <label>Email address</label>
      <input required type="email" id="email" value={customer.email} />
      <span slot="tooltip">Info about this field</span>
    </Field>
    <Field>
      <label>IP Address</label>
      <input required type="text" id="ip_address" value={customer.ip_address} />
      <span slot="tooltip">Info about this field</span>
    </Field>
    <div class="controls">
      <button class="btn white bg-prime" type="submit">Submit</button>
    </div>
  </Form>
</Card>
{/if}
