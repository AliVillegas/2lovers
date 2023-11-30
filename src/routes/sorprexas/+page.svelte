<script>
	import SorprexasList from '../../components/Sorprexas/sorprexasList.svelte';
	export let data;
	export let sorprexas = data?.sorprexas || [];
</script>

<div class="my-6">
	<div>
		<h1 class="mx-auto text-center text-[42px] my-12">Te quiero mucho monita</h1>
	</div>
	<SorprexasList {sorprexas} />
</div>
