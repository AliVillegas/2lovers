<script>
	import CrayonDiv from '$lib/components/crayonDiv.svelte';
	import PrimaryButton from '../../lib/components/PrimaryButton.svelte';

	export let data;
	let begin = false;
	let messages = data?.messages || [];
	let colors = ['red', 'blue', 'yellow', 'purple', 'pink'];
	let currentVisible = 0;
	let audio = null;

	const playAudio = () => {
		if (audio && !audio.paused) {
			audio.pause();
			audio.currentTime = 0;
		}

		audio = new Audio('/assets/monita15dic.wav');
		audio.play();
	};
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const calculateInterval = (messageLength) => {
		const baseInterval = 120; // Base interval of 1 second
		const additionalTimePerCharacter = 30; // Additional 50 milliseconds per character
		return baseInterval + messageLength * additionalTimePerCharacter;
	};

	const displayNextMessage = () => {
		if (currentVisible < messages.length) {
			const nextMessageIndex = currentVisible + 1;
			let interval = 2000; // Default interval if there's no next message

			if (nextMessageIndex < messages.length) {
				interval = calculateInterval(messages[nextMessageIndex].length);
			}

			setTimeout(() => {
				currentVisible += 1;
				displayNextMessage(); // Call recursively for the next message
			}, interval);
		}
	};

	// Start displaying messages
	displayNextMessage();
</script>

{#if !begin}
	<div class="my-12">
		<PrimaryButton
			text="Empezar"
			onClick={() => {
				begin = true;
				playAudio();
			}}
			color="red"
			extraClass="bg-red-500 my-24"
		/>
	</div>
{:else}
	<div class="mx-12 max-w-11/12">
		{#if messages.length > 0}
			<ul>
				{#each messages as message, index (message)}
					{#if index < currentVisible}
						<li class="message-enter">
							<CrayonDiv color={getRandomColor()} extraClass="mx-auto max-w-[800px]">
								<div>
									{message}
								</div>
							</CrayonDiv>
						</li>
					{/if}
				{/each}
			</ul>
		{:else}
			<p>No messages found.</p>
		{/if}
	</div>
{/if}

<style>
	.message-enter {
		animation: fadeIn 0.5s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
