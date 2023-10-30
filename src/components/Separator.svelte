<script>
	export let text = "";
</script>
<div class="separator-container">

{#if text === ""}
	<div class="separator" />
{:else}
	<div class="separator" />
	<span>{text}</span>
	<div class="separator" />
{/if}
</div>

<style>
	.separator-container {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor:default;
	}

	.separator-container span {
		font-weight: 600;
		padding: 0 1rem 0 1rem;
		color: rgba(78, 78, 78);
	}

	.separator {
		width: 100%;
		border-top: 2px solid rgba(78, 78, 78, 0.4);
		border-radius: 8px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
