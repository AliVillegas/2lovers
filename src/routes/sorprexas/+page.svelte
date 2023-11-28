<script>
	import SorprexasList from '../../components/Sorprexas/sorprexasList.svelte';
	export let data;
	export let sorprexas = data?.sorprexas || [];
</script>

<div class="my-6">
	<div>
		<h1 class="mx-auto text-center text-[42px] mt-12">:3</h1>
	</div>
	<SorprexasList {sorprexas} />
</div>
