<script>
	import CrayonLoader from '../components/crayonLoader.svelte';
	import { goto } from '$app/navigation';
	import PrimaryButton from '../components/PrimaryButton.svelte';
	import HomeChristmasAnimation from '../components/homeChristmasAnimation.svelte';

	let loading = true;
	let loadingTime = 350;

	setTimeout(() => {
		loading = false;
	}, loadingTime);
</script>

{#if loading}
	<CrayonLoader />
{:else}
	<h1 class="mx-auto text-center text-[42px] mt-12">Un diciembre lleno de sorprexas</h1>
	<HomeChristmasAnimation />
	<PrimaryButton text="Ver sorprexas" onClick={() => goto('/sorprexas')} />
{/if}
