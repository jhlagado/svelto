<script>
  import count from '../utils/loader-util';
  import { PreloadingIndicator } from './';
</script>

{#if $count > 0}
<PreloadingIndicator/>
{/if}