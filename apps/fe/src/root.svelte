<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { ThemeProvider } from '@overstacked/ui/svelte'
  import { basicDark, basicLight } from '@overstacked/ui';
  import Home from './routes/Home.svelte';
  import NotFound from './routes/NotFound.svelte';
</script>

<ThemeProvider initialTheme={basicLight}>
  <Router>
    <Route path="/"><Home /></Route>
    <Route><NotFound /></Route>
  </Router>
</ThemeProvider>

<style>
  :global(body) {
    background-color: var(--color-background);
    color: var(--color-onBackground);
    transition: background-color 0.3s, color 0.3s;
  }
</style>
