<script>
	export let sorprexa = null;
	export let chosenSorprexa;
</script>

{#if sorprexa}
	<div class="max-w-10/12">
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
				<button
					class="mx-auto mb-12 block text-center text-[18px] border border-red max-w-[10/12] bg-red-400 text-white p-4"
					on:click={() => window.open(sorprexa?.url)}
				>
					Activar sorprexa
				</button>
			</div>
		{/if}
	</div>
{/if}
