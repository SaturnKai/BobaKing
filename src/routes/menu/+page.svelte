<script lang="ts">
	import Separator from 'components/Separator.svelte';
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
	<div class="menu-section">
		<img src="/assets/img/milktea.webp" alt="Thai Milk Tea">
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
		<div class="menu-listing">
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

	.menu-section {
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		padding:2rem;
		height: 20rem;
	}

	.menu-head h1 {
		font-weight: 600;
		color: #FFB186;
	}

	.menu-listing {
		width: 100%;
		padding-left:2rem;
	}

	.menu-items {
		display:flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.25rem;
		height: 100%;
		color: #fff;
		font-weight: 600;
		padding: 0.5rem
	}
</style>
