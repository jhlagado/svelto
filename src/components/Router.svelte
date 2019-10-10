<script>
  import { onMount } from 'svelte';
  import { curRoute, router } from '../utils/router';

  // props
  export let routes;
  export let props;

  let component = null;
  let params = {};

  onMount(async () => {
    curRoute.set(location.pathname);
    if (!history.state) {
      history.replaceState(
        {
          path: location.pathname,
        },
        '',
        location.href,
      );
    }
  });

  function handlerBackNavigation(event) {
    curRoute.set(event.state.path);
  }

  const matchRoute = router(routes);

  $: {
    const matched = matchRoute($curRoute);
    if (matched !== null) {
      component = matched.component;
      params = matched.params;
    }
  }
</script>

<svelte:window on:popstate={handlerBackNavigation} />

<div class="router-outlet">
  <svelte:component this={component} {params} {...props} />
</div>
