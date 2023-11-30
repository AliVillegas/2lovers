<script>
	import { goto } from '$app/navigation';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import PresentAnimation from '../presentAnimation.svelte';
	import ReturnButton from '../returnButton.svelte';
	import SorprexaDetail from './sorprexaDetail.svelte';

	export let sorprexas = [];
	let playPresentAnimation = false;
	const resetAnimationAfter = 11000;
	let chosenSorprexa = null;

	const playAnimation = () => {
		playPresentAnimation = true;
		var audio = new Audio('/assets/itsTime2.mp3');
		audio.play();

		setTimeout(() => {
			playPresentAnimation = false;
		}, resetAnimationAfter);
	};
</script>

{#if playPresentAnimation}
	<PresentAnimation />
{:else if chosenSorprexa}
	<SorprexaDetail sorprexa={chosenSorprexa} bind:chosenSorprexa />
{:else}
	<div class="mb-5">
		<ReturnButton onClick={() => goto('/')} />
	</div>
	{#each sorprexas as sorprexa, index}
		{#if sorprexa?.date < new Date()}
			<PrimaryButton
				text={`Sorprexa ${index + 1}`}
				onClick={() => {
					playAnimation();
					chosenSorprexa = sorprexa;
				}}
				color="red"
				extraClass="bg-red-500 mb-8"
				withAnimation={false}
			/>
		{:else}
			<PrimaryButton
				text={`Sorprexa ${index + 1}`}
				onClick={() => (chosenSorprexa = sorprexa)}
				disabled
				color="gray"
				extraClass="bg-gray-500"
			/>
			<div class="text-center w-9/12 mx-auto mb-8">
				La sorprexa se desbloqueará el {sorprexa?.timestamp}
			</div>
		{/if}
	{/each}
{/if}
