<script lang="ts">
	import Separator from 'components/Separator.svelte';
	import PriceTable from 'components/PriceTable.svelte';
	import menu from '$lib/menu';
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

	<div class="price-section">
		<PriceTable />
	</div>

	<Separator text="Drinks" />

	<div class="menu-section">
		<img src="/assets/img/milktea.webp" alt="Thai Milk Tea" />
		<div class="menu-listing">
			<div class="menu-head">
				<h1>{menu[0].name}</h1>
			</div>
			<div class="menu-items">
				{#each menu[0].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
		<div class="menu-listing" style="border-color: #393042;">
			<div class="menu-head">
				<h1>{menu[1].name}</h1>
			</div>
			<div class="menu-items">
				{#each menu[1].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
	</div>

	<div class="menu-section section-2">
		<img src="/assets/img/slush.webp" alt="Thai Milk Tea" />
		<div class="menu-listing">
			<div class="menu-head">
				<h1>{menu[2].name} <span class="text-orange">or</span> Milk Blend</h1>
				<!-- <h1>{menu[2].name}</h1> -->
				<!-- <h1 style="padding: 0 1rem 0 1rem;color:#393042;">/</h1> -->
				<!-- <h1 class="separated">Milk Blend</h1> -->
			</div>
			<div class="menu-items">
				{#each menu[2].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
	</div>

	<Separator text="Toppings" />
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

	.price-section {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 4rem;
	}

	.menu-section {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 2rem;
		height: 22.5rem;
	}

	.menu-head h1 {
		font-weight: 600;
		color: #ffb186;
	}

	.menu-head {
		display: flex;
		padding-bottom: 0.5rem;
	}

	.menu-listing {
		width: 100%;
		padding-left: 2rem;
		/* border-left: 0.25rem solid transparent; */
	}

	.menu-items {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.4rem;
		height: calc(100% - 2rem);
		color: #fff;
		font-weight: 600;
		padding: 0.5rem;
	}

	.menu-items > p {
		line-height: 1.5;
	}

	.text-orange {
		color: #ea98ff;
	}

	.section-2 {
		margin-bottom: 80px;
	}
</style>
