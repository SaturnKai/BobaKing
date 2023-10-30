<script lang="ts">
	import type { Location } from '$lib/locations';

	export let location: Location;
	export let selected = false;
	export let index = 0;
</script>

<div class="location" class:selected style="--timing: {index}ms;" on:click>
	<h2 class="name" class:selected>{location.name}</h2>
	<p class="place">{location.place}</p>
	<div class="order-types">
		{#each location.order_types as t}
			<p class="hours">
				<i class="icon fa-solid fa-check" />
				{t.name} - <b>{t.open} - {t.close}</b>
			</p>
		{/each}
	</div>
</div>

<style>
	.location {
		font-size: 0.8rem;
		border: 2px solid rgba(62, 62, 62, 0.5);
		padding: 15px 20px;
		border-radius: 20px;
		width: 500px;

		opacity: 0;

		animation: location-FadeIn 0.2s ease forwards;
		animation-delay: var(--timing);
		cursor: pointer;
	}

	.location:hover {
		border: 2px solid rgba(100, 100, 100, 0.5);
	}

	@keyframes location-FadeIn {
		from {
			transform: translateY(-10px);
			opacity: 0;
		}

		to {
			transform: translateY(0px);
			opacity: 1;
		}
	}

	.location.selected {
		border: 2px solid rgba(141, 171, 255, 0.5);
	}

	.place {
		font-weight: 500;
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.name {
		color: #ffae50;
	}

	.name.selected {
		text-decoration: underline;
		color: #8dabff;
	}

	.hours {
		margin-bottom: 10px;
	}

	.icon {
		color: #24b655;
		margin-right: 10px;
	}
</style>
