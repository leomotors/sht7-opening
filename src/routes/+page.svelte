<script lang="ts">
  import '../app.scss';
  import { onMount } from 'svelte';

  let count: string | number = 'loading';

  onMount(() => {
    const interval = setInterval(async () => {
      const c = await fetch('/')
        .then((r) => r.json())
        .then((r) => r.count);

      if (+c >= 10000) {
        window.open('https://codepen.io/masudrana2779/full/zYaggOr', '_blank');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<main class="flex flex-col gap-8 justify-center items-center h-screen">
  <h1 class="text-5xl">{count} clicks</h1>
  <button
    class="p-8 text-6xl border border-yellow-300 bg-yellow-200 rounded-xl duration-250 ease-in-out hover:border-yellow-500 hover:scale-110 transition-all active:scale-95"
    on:click={() => {
      if (typeof count === 'number') {
        count++;
      }
      fetch('/', {
        method: 'PUT',
      });
    }}
  >
    ปุ่มโง่ ๆ
  </button>
</main>
