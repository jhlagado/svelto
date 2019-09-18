<svelte:head>
    <link rel="shortcut icon" href="../assets/favicon.ico">
  	<title>Svelte app!</title>
</svelte:head>

<script>
  import Nested from './Nested.svelte';
  import { greet } from './util.js';

  greet();
</script>

<Nested answer={42}/>