<script>
	import { goto } from '$app/navigation';
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
			<button
				class="mx-auto block text-center text-[18px] border border-red max-w-10/12 bg-red-400 text-white p-4"
				on:click={() => (chosenSorprexa = sorprexa)}
			>
				Sorprexa {index + 1}
			</button>
		{:else}
			<button
				class="mx-auto block text-center text-[18px] border border-red w-10/12 bg-gray-400 text-white p-4"
				disabled
				on:click={() => (chosenSorprexa = sorprexa)}
			>
				Sorprexa {index + 1}
			</button>
			<div class="text-center w-10/12 mx-auto my-4">
				Se desbloquea el {sorprexa?.timestamp}
			</div>
		{/if}
	{/each}
{/if}
