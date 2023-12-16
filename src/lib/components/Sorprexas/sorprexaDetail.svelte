<script>
	import PrimaryButton from '../PrimaryButton.svelte';
	import ChimneySanta from '../chimneySanta.svelte';
	import HomeChristmasAnimation from '../homeChristmasAnimation.svelte';
	import ReindeerSphereAnimation from '../reindeerSphereAnimation.svelte';
	import ReindeerWalkAnimation from '../reindeerWalkAnimation.svelte';
	import SnowGlobeAnimation from '../snowGlobeAnimation.svelte';
	import SpheresAnimation from '../spheresAnimation.svelte';
	import SwingingAnimation from '../swingingAnimation.svelte';
	import TreeAnimation from '../treeAnimation.svelte';
	import TreeSmallAnimation from '../treeSmallAnimation.svelte';

	const components = [
		() => ReindeerSphereAnimation,
		() => TreeAnimation,
		() => HomeChristmasAnimation,
		() => SpheresAnimation,
		() => ReindeerWalkAnimation,
		() => ChimneySanta,
		() => TreeSmallAnimation,
		() => SnowGlobeAnimation,
		() => SwingingAnimation
	];

	export let sorprexa = null;
	export let chosenSorprexa = null;

	let currentIndex = sorprexa?.animationId < components.length ? sorprexa?.animationId : 0;
	// let currentIndex = 4;

	$: CurrentComponent = components[currentIndex]() || components[0]();
</script>

{#if sorprexa}
	<div class="max-w-10/12 mb-24">
		<button class="" on:click={() => (chosenSorprexa = null)}>
			<div class="flex space-x-2 ml-12">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 flex"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
				<div class="flex">Regresar</div>
			</div>
		</button>
		<div class="my-1 mx-auto">
			<svelte:component this={CurrentComponent} />
		</div>
		<div class="max-w-10/12">
			<div class="mx-auto text-center text-[24px] my-5">
				{sorprexa?.title}
			</div>
			<div class="text-[18px] text-center mx-6">
				{sorprexa?.description}
			</div>
		</div>
		{#if sorprexa?.url}
			<div class="my-8">
				<PrimaryButton
					text="Activar sorprexa"
					color="yellow"
					onClick={() => window.open(sorprexa?.url, '_self')}
					extraClass="bg-amber-400"
				/>
			</div>
		{/if}
	</div>
{/if}
