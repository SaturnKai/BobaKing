<script lang="ts">
	import type { Location } from '$lib/locations';

	export let location: Location;
</script>

<div class="location">
	<h2 class="name">{location.name}</h2>
	<p class="place">{location.place}</p>
	<p class="hours">In store - 6:00AM - 10:00PM</p>
</div>

<style>
	.location {
		font-size: 0.8rem;
		border: 2px solid rgba(62, 62, 62, 0.5);
		padding: 15px 20px;
		border-radius: 20px;

		width: 400px;
	}

	.place {
		font-weight: 500;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.name {
		color: #ffae50;
		text-decoration: underline;
	}

	.hours {
		margin-bottom: 10px;
	}
</style>
