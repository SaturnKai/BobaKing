<script lang="ts">
	import Separator from 'components/Separator.svelte';
	import PriceTable from 'components/PriceTable.svelte';
	import Button from 'components/Button.svelte';
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

	<div class="price-section centered-container">
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
			</div>
			<div class="menu-items">
				{#each menu[2].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
	</div>

	<Separator text="Toppings" />

	<div class="centered-container toppings" style="height: 13rem; margin-top: 4rem;">
		<div class="menu-listing">
			<div class="menu-head">
				<h1>Tapioca Pearls <span class="price">$0.50</span></h1>
			</div>
			<img class="menu-image" src="/assets/img/boba.webp" alt="Tapioca pearls" />
		</div>
		<div class="menu-listing" style="width:50%;">
			<div class="menu-head">
				<h1>{menu[3].name} <span class="price">$0.75</span></h1>
			</div>
			<div class="menu-items">
				{#each menu[3].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
		<div class="menu-listing">
			<div class="menu-head">
				<h1>{menu[4].name} <span class="price">$0.75</span></h1>
			</div>
			<div class="menu-items">
				{#each menu[4].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
		<div class="menu-listing">
			<div class="menu-head">
				<h1>{menu[5].name} <span class="price">$0.50</span></h1>
			</div>
			<div class="menu-items">
				{#each menu[5].flavors as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>
	</div>

	<div class="centered-container" style="padding-top:4rem;">
		<a href="/download/menu.pdf" target="_blank">
			<Button color="#5177FF" shadow="#5177FF55" hover="#405ec9">View as PDF</Button>
		</a>
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

	.text-green {
		color: #2dc86f;
	}

	.centered-container {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.price-section {
		padding: 4rem;
	}

	.menu-section {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 2rem;
		height: 22.5rem;
	}

	.toppings > .menu-listing > .menu-head h1 {
		font-size: 1.125rem;
		color: #ea98ff;
	}

	.toppings > .menu-listing > .menu-head {
		justify-content: center;
	}

	.toppings > .menu-listing {
		text-align: center;
		width: 25%;
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
		height: 100%;
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

	.menu-image {
		height: 8rem;
		margin-top: 1rem;
	}

	.text-orange {
		color: #ea98ff;
	}

	.section-2 {
		margin-bottom: 80px;
	}

	.price {
		font-family: 'Source Code Pro', monospace;
		font-weight: 500;
		font-size: 0.8rem;
		color: #757575;
		text-align: center;
		margin-left: 0.5rem;
	}
</style>
