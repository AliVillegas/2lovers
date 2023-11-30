<script>
	import { goto } from '$app/navigation';
	import PrimaryButton from '../PrimaryButton.svelte';
	import SorprexaDetail from './sorprexaDetail.svelte';

	export let sorprexas = [];
	console.log(sorprexas);
	let chosenSorprexa = null;
</script>

{#if chosenSorprexa}
	<SorprexaDetail sorprexa={chosenSorprexa} bind:chosenSorprexa />
{:else}
	{#each sorprexas as sorprexa, index}
		{#if sorprexa?.date < new Date()}
			<PrimaryButton
				text={`Sorprexa ${index + 1}`}
				onClick={() => (chosenSorprexa = sorprexa)}
				color="red"
			/>
		{:else}
			<PrimaryButton
				text={`Sorprexa ${index + 1}`}
				onClick={() => (chosenSorprexa = sorprexa)}
				disabled
				color="gray"
				extraClass="bg-gray-500"
			/>
			<div class="text-center w-10/12 mx-auto mb-8">
				Esta sorprexa se desbloquea el {sorprexa?.timestamp}
			</div>
		{/if}
	{/each}
{/if}
