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
  h1 {
    color: purple;
  }
</style>

<h1>This is About page {params.id} {customer.first_name} </h1>
