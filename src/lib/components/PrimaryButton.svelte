<script>
	export let text;
	export let onClick;
	export let color = 'green';
	export let withAnimation = true;
	export let animationDuration = 400;
	export let disabled = false;
	export let extraClass = '';
	let clicked = false;

	async function handleButtonClick() {
		if (withAnimation) {
			clicked = true;
			await new Promise((r) => setTimeout(r, 300));
			clicked = false;
			setTimeout(() => {
				onClick();
			}, animationDuration);
		} else {
			onClick();
		}
	}
</script>

<button
	class:click-effect={clicked}
	class={`mx-auto block text-center text-[18px] border border-red bg-${color}-400 text-white p-4 w-[200px] ${extraClass} opacity-100`}
	on:click={handleButtonClick}
	{disabled}
>
	{text}
</button>
