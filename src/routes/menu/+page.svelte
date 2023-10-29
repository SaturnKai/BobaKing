<script lang="ts">
	import Separator from 'components/Separator.svelte';
	import PriceTable from 'components/PriceTable.svelte';
</script>

<svelte:head>
	<title>Boba King | Menu</title>
</svelte:head>

<div class="main-content">
	<h1 class="title">Menu</h1>
	<Separator />
	<p class="description">
		Your choice of teas, slushes, and toppings, for <span class="text-green">2,000+</span> combinations.
	</p>
	<PriceTable />
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

	.text-green {
		color: #2dc86f;
	}
</style>
