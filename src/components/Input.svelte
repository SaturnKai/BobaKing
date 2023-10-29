<script lang="ts">
	export let icon = '';
	export let type = 'text';
	export let placeholder = 'This is your alert to add a placeholder';

	export let value: string;

	const onInput = (e: Event) => {
		value = e.target!.value;
	};
</script>

{#if type === 'textarea'}
	<div class="wrapper">
		<textarea bind:value class="text-area" rows="8" {placeholder} on:input={onInput} />
		<i class="fa-solid fa-{icon}" />
	</div>
{:else}
	<div class="input-wrapper">
		{#if icon}
			<i class="fa-solid fa-{icon}" />
		{/if}
		<input bind:value class="input" {placeholder} on:input={onInput} />
	</div>
{/if}

<style>
	.input-wrapper,
	.text-area {
		all: unset;
		background-color: #1d191f;
		border: 2px solid rgba(62, 62, 62, 0.5);
		padding: 1rem 1.25rem;
		border-radius: 0.75rem;

		transition: border-color 150ms ease;
	}

	.input-wrapper:focus-within {
		border-color: rgba(62, 62, 62, 1);
	}

	.wrapper:focus-within .fa-solid {
		color: #fcbb15;
	}

	.input-wrapper:focus-within .fa-solid {
		color: #fcbb15;
	}

	.text-area {
		margin-top: 1rem;
		width: calc(100% - 44px);
		font-weight: 500;
		line-height: 2rem;
	}

	.text-area:focus {
		border-color: rgba(62, 62, 62, 1);
	}

	.wrapper .fa-solid {
		position: relative;
		float: right;
		top: -2.25rem;
		left: -1rem;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0.75rem;
	}

	.input-wrapper input {
		all: unset;
		margin-left: 1rem;
		width: 100%;
		color: #ffffff;
		font-weight: 500;
		line-height: 0.75rem;
	}

	.input-wrapper input::placeholder,
	.text-area::placeholder {
		color: #505050;
	}

	.fa-solid {
		color: #707070;
		transition: color 150ms ease;
	}

	.input {
		border: 2px solid rgba(62, 62, 62, 1);
	}
</style>
