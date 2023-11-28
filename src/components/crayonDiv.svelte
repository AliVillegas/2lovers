<script>
	export let color = 'blue';
	export let extraClass = '';

	const COLORS_MAP = {
		red: 'crayonTextureRed.jpeg',
		blue: 'crayonTextureBlue.jpeg',
		yellow: 'crayonTextureYellow.jpeg',
		purple: 'crayonTexturePurple.jpeg',
		pink: 'crayonTexturePink.jpeg'
	};

	// Function to get the texture based on the color
	function getTexture(color) {
		return COLORS_MAP[color] || COLORS_MAP['blue']; // Fallback to red if color not found
	}

	$: texture = getTexture(color);
</script>

<div class={`crayon-border my-4 ${extraClass}`} style="border-image: url('/assets/{texture}') 10 stretch;">
	<slot />
</div>

<style>
	.crayon-border {
		border: 4px solid transparent;
		padding: 10px;
	}
</style>
