<script>
	import CrayonDiv from '$lib/components/crayonDiv.svelte';

	export let data;
	export let messages = data?.messages || [];
</script>

<div class="mx-12 max-w-11/12">
	{#if messages.length > 0}
		<ul>
			{#each messages as message, index}
				<li>
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
