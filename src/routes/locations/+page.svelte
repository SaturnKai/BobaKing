<script lang="ts">
	import Location from 'components/Location.svelte';
	import locations from '$lib/locations';
</script>

<div class="main-content">
	<h1 class="title">Locations</h1>
	<p class="description">Explore our various locations near you.</p>
	<div class="locations">
		{#each locations as location}
			<Location {location} />
		{/each}
	</div>
</div>

<style>
	.main-content {
		/* display: flex; */
		/* flex-direction: column; */
		/* align-items: center; */
		/* margin-inline: 20px; */
		margin: 0 auto;
		max-width: 1000px;
	}

	.title {
		margin-top: 40px;
		text-align: center;
	}

	.description {
		font-weight: 500;
		text-align: center;
		color: #c3c3c3;
		margin-top: 20px;
	}

	.locations {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		margin-top: 80px;
	}
</style>
