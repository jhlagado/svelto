<script>
    const onSubmit = async (event) => {
        console.log(event.target.first_name.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
    }
</script>

<style>
</style>

<form class="form" on:submit|preventDefault={onSubmit}>
  <slot></slot>
</form>