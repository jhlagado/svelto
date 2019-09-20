<script>
  export let answer;

  import logo from '../assets/logo-h.svg';
  console.log({logo});
</script>

<style>

header {
  align-items: center;
  background: var(--bgcolor);
  background-color:white;
  border-collapse: collapse;
  box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
  box-sizing: border-box;
  color: var(--text);
  display:flex;
  font-family:var(--font);
  height:var(--nav-h);
  justify-content:space-between;
  margin:0 auto;
  padding:0 var(--side-nav);
  position:fixed;
  transform:translate(0,calc(-100% - 1rem));
  transition:transform 0.2s;
  width:100vw;
  user-select:none;
  z-index:100;
}

header.visible{
  transform:none
}

nav {
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:var(--nav-h);
  padding:0 var(--side-nav) 0 var(--side-nav);
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:transparent;
  transform:none;
  transition:none;
  box-shadow:none;
}

ul.primary {
  align-items: center;
  display: flex;
  list-style:none;
  font-family:var(--font);
  margin:0;
  line-height:1;
}

ul{
  position:relative;
  padding:0 3rem 0 0;
  background-size:1em 1em
}

ul::after{
  position:absolute;
  content:'';
  width:100%;
  height:100%;
  left:0;
  top:0
}

ul.open{
  padding:0 0 1em 0;
  background:white;
  border-left:1px solid #eee;
  border-right:1px solid #eee;
  border-bottom:1px solid #eee;
  border-radius:0 0 var(--border-r) var(--border-r);
  align-self:start
}

ul li{
  display:block;
  display:none
}

ul li.active{
  display:block
}

ul.open li{
  display:block;text-align:right
}

ul.open::after{
  display:none
}

ul li a{
  padding:0 .8rem;
  border:none;
  color:inherit
}

ul.open li a{
  padding:1.5rem 3.7rem 1.5rem 4rem;
  display:block
}

ul.open li:first-child a{
  padding-top:2.3rem
}

.primary svg{
  width: 1.5rem;
  height: 1.5rem;
}

.home{
  position:relative;
  top:-.1rem;
  width:18rem;
  height:4.2rem;
  -webkit-tap-highlight-color:transparent;
  background: 0 50% no-repeat;
  background-size:auto 60%;
  text-indent:-9999px
}

ul li.active a{
  color:var(--prime)
}

a {
  color:inherit;
  border-bottom:none;
  transition:none
}

ul li:not(.active) a:hover{
  color:var(--flash)
}

ul::after {
  display:none
}

ul li {
  display:inline !important
}

</style>

<header class="visible">
  <nav>
    <a rel="prefetch"
      href="." class="home" title="Homepage"
      style="background-image:url({logo});">Home</a>
    <ul class="primary">
      <li class="active"><a rel="prefetch" href="tutorial">Tutorial</a></li>
      <li><a rel="prefetch" href="docs">API</a></li>
      <li><a rel="prefetch" href="examples">Examples</a></li>
      <li><a rel="prefetch" href="repl">REPL</a></li>
      <li><a rel="prefetch" href="blog">Blog</a></li>
      <li><a rel="prefetch" href="faq">FAQ</a></li>
      <li>
        <a href="chat">
          <svg class="icon" width="20" height="20">
            <use xlink:href="#message-square"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://github.com/sveltejs/svelte">
          <svg class="icon" width="20" height="20">
            <use xlink:href="#github"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</header>
