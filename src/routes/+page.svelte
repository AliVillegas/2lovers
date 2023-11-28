<script>
	import { fade } from 'svelte/transition';
	import CrayonDiv from '../components/crayonDiv.svelte';
	import CrayonLoader from '../components/crayonLoader.svelte';
	import { goto } from '$app/navigation';

	let loading = true;
	export let data;
	export let messages = data?.messages || [];
	let fadeDuration = 5000;

	setTimeout(() => {
		loading = false;
	}, 2500);
</script>

{#if loading}
	<CrayonLoader />
{:else}
	<h1 class="mx-auto text-center text-[42px] mt-12">Un diciembre lleno de sorprexas</h1>
	<div class="mx-12 max-w-11/12">
		{#if messages.length > 0}
			<ul>
				{#each messages as message, index}
					<li in:fade={{ delay: index * 100, duration: fadeDuration }}>
						<CrayonDiv color={message?.color} extraClass=" mx-auto max-w-[800px]">
							<div>
								{message?.message}
							</div>
							<div class="text-[11px]">
								{message?.timestamp}
							</div>
						</CrayonDiv>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No messages found.</p>
		{/if}
	</div>

	<button
		class="mx-auto my-12 block text-center text-[18px] border border-red max-w-[10/12] bg-green-400 text-white p-4"
		on:click={() => goto('/sorprexas')}
	>
		Ver sorprexas
	</button>
{/if}
