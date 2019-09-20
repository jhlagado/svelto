<script>
  import IconDefs from './IconDefs.svelte';
  import Header from './Header.svelte';
  import Nested from './Nested.svelte';

  export let name;
</script>

<style>
  #app-wrapper {
    width: 100%;
    height: 100%;
  }
</style>

<svelte:head>
  <link rel="shortcut icon" href="../assets/favicon.ico" />
  <title>Svelte app!</title>
</svelte:head>

<div id="app-wrapper">
  <!--[if IE]>
  <div class='old-browser'>You are running an un-supported version of Internet Explorer. Please upgrade</div>
  <![endif]-->
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <IconDefs />
  <Header />
  <main>
    Hello {name}! <Nested answer={42} />
  </main>
</div>
