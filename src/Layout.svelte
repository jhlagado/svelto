<script>
	import {
    Icons, Icon, Nav, NavItem,
    PreloadingIndicator
  } from './components';

  const segment = 'docs';
  const page = {
    subscribe() {}
  }
</script>

<style>
  #app-wrapper {
    width: 100%;
    height: 100%;
  }

  main {
		position: relative;
		margin: 0 auto;
		padding: var(--nav-h) 0 0 0;
		overflow-x: hidden;
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
  <Icons/>
	<PreloadingIndicator/>
  <Nav {segment} {page} logo="assets/svelte-logo-horizontal.svg">
    <NavItem segment="tutorial">Tutorial</NavItem>
    <NavItem segment="docs">API</NavItem>
    <NavItem segment="examples">Examples</NavItem>
    <NavItem segment="repl">REPL</NavItem>
    <NavItem segment="blog">Blog</NavItem>
    <NavItem segment="faq">FAQ</NavItem>

    <NavItem external="https://sapper.svelte.dev">Sapper</NavItem>

    <NavItem external="chat" title="Discord Chat">
      <Icon name="message-square"/>
    </NavItem>

    <NavItem external="https://github.com/sveltejs/svelte" title="GitHub Repo">
      <Icon name="github"/>
    </NavItem>
  </Nav>
  <main>
    <slot></slot>
  </main>
</div>


