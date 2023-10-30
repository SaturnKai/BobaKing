<script lang="ts">
	import Location from 'components/Location.svelte';
	import Separator from 'components/Separator.svelte';
	import locations, { type Location as Location_t } from '$lib/locations';

	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	import type { Marker } from 'leaflet';

	let mapElement: HTMLDivElement;
	let selectedLocation: string;

	const markers: { [key: string]: Marker } = {};

	function marker_click(name: string) {
		selectedLocation = name;
	}

	function location_click(name: string) {
		selectedLocation = name;
		markers[name].openPopup();
	}

	onMount(async () => {
		const L = await import('leaflet');

		const map = L.map(mapElement).setView([36.17165547765068, -115.14054141877322], 10);
		L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
			attribution:
				'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
			maxZoom: 18
		}).addTo(map);

		locations.forEach((l: Location_t) => {
			const marker = L.marker([l.latitude, l.longitude])
				.addTo(map)
				.bindPopup(`<b>${l.name}</b><br><span>${l.place}</span>`)
				.on('click', () => marker_click(l.name));

			markers[l.name] = marker;
		});
	});
</script>

<svelte:head>
	<title>Boba King | Locations</title>
</svelte:head>

<div class="main-content">
	<h1 class="title">Locations</h1>
	<Separator />
	<p class="description">Explore our various locations near you.</p>

	<div class="map-container">
		<div class="map" bind:this={mapElement} />
	</div>

	<div class="locations">
		{#each locations as location, i}
			<Location
				index={i}
				selected={selectedLocation === location.name}
				{location}
				on:click={() => location_click(location.name)}
				on:keypress={() => location_click(location.name)}
			/>
		{/each}
	</div>
</div>

<style>
	.main-content {
		margin: 0 auto;
		max-width: 1100px;
		margin-bottom: 80px;
	}

	.title {
		font-size: 2rem;
		margin-top: 40px;
		margin-bottom: 40px;
		text-align: center;
	}

	.description {
		font-size: 1.2rem;
		font-weight: 600;
		text-align: center;
		color: #c3c3c3;
		margin-top: 40px;
	}

	.map-container {
		width: 100%;
		height: 500px;
		margin: 0 auto;
		position: relative;
		margin-top: 50px;
		border-radius: 5px;
	}

	.map {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 20px;
		transform: translate3d(0, 0, 0);
	}

	.locations {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		margin-top: 80px;
	}
</style>
