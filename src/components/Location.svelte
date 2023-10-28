<script lang="ts">
	import type { Location } from '$lib/locations';

	export let location: Location;
</script>

<div class="location">
	<h2 class="name">{location.name}</h2>
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
	}

	.place {
		font-weight: 500;
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.name {
		color: #ffae50;
		text-decoration: underline;
	}

	.hours {
		margin-bottom: 10px;
	}

	.icon {
		color: #24b655;
		margin-right: 10px;
	}
</style>
