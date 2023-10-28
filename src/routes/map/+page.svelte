<script>
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	let mapElement;

	onMount(async () => {
		const L = await import('leaflet');

		const map = L.map(mapElement).setView([36.262439045205134, -115.18191196690339], 12);
		L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
			tileSize: 512,
			zoomOffset: -1,
			minZoom: 1,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			crossOrigin: true
		}).addTo(map);

		L.marker([36.26239495652529, -115.18190887337805]).addTo(map).bindPopup('Ann').openPopup();
	});
</script>

<div class="container">
	<div id="map" bind:this={mapElement} />
</div>

<style>
	.container {
		width: 800px;
		height: 500px;
		margin: 0 auto;
		position: relative;
	}

	#map {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
