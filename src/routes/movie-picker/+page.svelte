<script>
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import { goto } from '$app/navigation';
	import MovieCard from '$lib/components/Movies/MovieCard.svelte';

	export let data;
	const movies = data?.movies || [];
</script>

<div class="my-8">
	<PrimaryButton
		text="Girar ruleta"
		color="green"
		onClick={() => goto('/random-movie')}
		extraClass="bg-green-400"
	/>
	<div class="my-4 mt-8 text-center text-2xl">Elegir películas para ruleta</div>
	<div class="my-4">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>
