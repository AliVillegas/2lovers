<script>
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import { goto } from '$app/navigation';
	import MovieCard from '$lib/components/Movies/MovieCard.svelte';
	import RouletteSvg from '$lib/components/Movies/RouletteSVG.svelte';

	export let data;
	let animationFinished = false;
	const movie = data?.movie || [];

	setTimeout(() => {
		animationFinished = true;
	}, 2000);
</script>

{#if !animationFinished}
	<RouletteSvg />
{:else}
	<div class="my-8">
		<PrimaryButton
			text="Regresar"
			color="gray"
			onClick={() => goto('/movie-picker')}
			extraClass="bg-gray-400 text-left"
		/>
		<div class="my-4 mt-8 text-center text-2xl">Película ganadora:</div>
		<MovieCard {movie} checkbox={false} />
	</div>
{/if}
