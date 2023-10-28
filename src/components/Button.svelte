<script lang="ts">
	export let color: string;
	export let shadow: string;
	export let hover: string;
	export let icon = '';
</script>

<button class="button" style="--color: {color}; --shadow: {shadow}; --hover: {hover}" on:click>
	<slot />
	{#if icon.length}
		<i class="fa-solid fa-{icon}" />
	{/if}
</button>

<style>
	.button {
		cursor:pointer;
		font-size: 1rem;
		font-weight: bold;
		color: #fff;
		text-decoration: none;
		background: var(--color);
		border-radius: 1rem;
		padding: 12px 20px;
		box-shadow: 4px 0px 30px 5px var(--shadow);
		transition: background 80ms ease;
		outline: none;
		border: none;
	}

	.fa-solid {
		margin-left: 0.4rem;
	}

	.button:hover {
		background: var(--hover);
	}
</style>
