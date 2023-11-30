<script>
	import SorprexasList from '$lib/components/Sorprexas/sorprexasList.svelte';
	export let data;
	export let sorprexas = data?.sorprexas || [];
</script>

<div class="my-6">
	<div>
		<h1 class="mx-auto text-center text-[24px] my-12">Monitos navideños</h1>
	</div>
	<SorprexasList {sorprexas} />
</div>
