<script>

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

<h1>This is About page </h1>
