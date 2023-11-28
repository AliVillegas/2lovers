<script>
	export let sorprexa = null;
	export let chosenSorprexa;
</script>

{#if sorprexa}
	<div class="max-w-10/12 text-center">
		<button
			class="mx-auto mb-12 block text-center text-[18px] border border-red max-w-[10/12] bg-green-400 text-white p-4"
			on:click={() => (chosenSorprexa = null)}
		>
			Regresar
		</button>
		<div class="max-w-10/12">
			<div class="mx-auto text-center text-[24px] my-5">
				{sorprexa?.title}
			</div>
			<div class="text-[18px] mx-6">
				{sorprexa?.description}
			</div>
		</div>
		{#if sorprexa?.url}
			<div class="my-8">
				<button
					class="mx-auto mb-12 block text-center text-[18px] border border-red max-w-[10/12] bg-red-400 text-white p-4"
					on:click={() => window.open(sorprexa?.url, '_blank')}
				>
					Ver sorprexa
				</button>
			</div>
		{/if}
	</div>
{/if}
