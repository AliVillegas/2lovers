<script>
	import CrayonLoader from '$lib/components/crayonLoader.svelte';
	import { goto } from '$app/navigation';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import HomeChristmasAnimation from '$lib/components/homeChristmasAnimation.svelte';

	let loading = true;
	let loadingTime = 3500;

	setTimeout(() => {
		loading = false;
	}, loadingTime);
</script>

{#if loading}
	<CrayonLoader />
{:else}
	<h1 class="mx-auto text-center text-[42px] mt-12">Un diciembre lleno de sorprexas</h1>
	<HomeChristmasAnimation />
	<PrimaryButton
		text="Ver sorprexas"
		onClick={() => goto('/sorprexas')}
		color="green"
		extraClass="bg-green-500"
	/>
{/if}
