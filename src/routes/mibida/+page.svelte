<script>
	import PrimaryButton from '../../lib/components/PrimaryButton.svelte';

	let playPresentAnimation = false;
	const playSound = () => {
		playPresentAnimation = true;
		var audio = new Audio('/assets/losupe.mp3');
		audio.play();

		setTimeout(() => {
			playPresentAnimation = false;
		}, resetAnimationAfter);
	};
</script>

{#if playPresentAnimation}
	<div class="mt-12 max-w-[85%] mx-auto">
		<img src="/assets/mibida.png" alt="404" class=" h-auto mx-auto" />
	</div>
{:else}
	<PrimaryButton
		text="Mibida"
		onClick={() => {
			playSound();
		}}
		color="red"
		extraClass="bg-red-500 mb-8 mt-24"
	/>
{/if}
