<script>
	export let movie;
	export let checkbox = true;

	const updateMovieActiveState = async (newActiveState) => {
		await fetch(`/api/update-movie/${movie?.id}`, {
			method: 'POST',
			body: JSON.stringify({ active: newActiveState }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};
</script>

<div class="flex flex-col gap-0 mb-4 w-6/12 items-center justify-center mx-auto">
	<h2 class="font-bold text-lg mt-2">{movie?.title}</h2>
	<img src={movie?.url} alt={movie?.title} class="w-30 h-auto object-cover rounded-lg" />
	{#if checkbox}
		<input
			type="checkbox"
			class="mt-2"
			checked={movie?.active}
			label=""
			on:click={() => updateMovieActiveState(!movie.active)}
		/>
	{/if}
</div>
