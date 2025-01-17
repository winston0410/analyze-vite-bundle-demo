<script lang="ts">
import { dev } from '$app/environment';
import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';
import { onMount } from 'svelte';

let { children } = $props();

onMount(() => {
  if (dev) return;

  const faro = initializeFaro({
    url: 'https://faro-collector-prod-eu-west-0.grafana.net/collect/0a93f71ae60aa42d8e8554ade73f9ead',
    app: {
      name: 'hugosum.com',
      version: '1.0.0',
      environment: 'production',
    },

    instrumentations: [...getWebInstrumentations(), new TracingInstrumentation()],
  });
});

</script>

{@render children()}