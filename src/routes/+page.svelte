<script lang="ts">
	import Button from 'components/Button.svelte';
	import Separator from 'components/Separator.svelte';
	import Review from 'components/Review.svelte';
</script>

<svelte:head>
	<title>Boba King | Home</title>
</svelte:head>

<div class="main-content">
	<div class="introduction">
		<div class="left">
			<h1 class="title">Best Boba in <span class="text-yellow">Vegas</span></h1>
			<p class="description">
				With over <span class="text-green">6 locations</span>, we server the highest quality boba
				tea in the valley.
			</p>
			<a class="menu-button" href="/menu">
				<Button color="#ff5151" shadow="#ff3a3a55" hover="#e44747">View Menu</Button>
			</a>
		</div>
		<div class="right">
			<img class="image" src="drink.png" alt="boba drink." draggable="false" />
		</div>
	</div>
	<Separator />
	<h2 class="title-2">What Is Boba?</h2>
	<p class="description text-center">
		Bubble tea can't be complete without a boba topping. However, much too often when you go to a
		store, you can become overwhelmed by the varieties of bobas. We have the popular bobas on the
		market explained, so you don't get panicked when you order a bubble tea drink next time.
	</p>
	<img class="image-2" src="reel.webp" alt="reel of boba drinks." />
	<h3 class="title-3 text-center">Reviews <span class="text-brown">&</span> Ratings</h3>
	<div class="reviews">
		<Review
			name="Dr. C"
			content="This place is really great! Fast service, and well done menu. Now let me ask you this, is it worth it?"
			date="Jan 11"
			id="r1"
		/>
		<Review
			name="Jeremy A."
			content="Boba is king. Boba is life. I go to this place every single day. I live here. Anyways, check it out!"
			date="May 25"
			id="r2"
		/>
	</div>
	<div class="end" />
</div>

<style>
	.introduction {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin-top: 20px; */
		/* margin-inline: 180px; */
	}

	.image {
		width: 450px;
	}

	.image-2 {
		width: 1400px;
		margin: 0 auto;
		border-radius: 20px;
		margin-top: 40px;
	}

	.left {
		max-width: 500px;
	}

	.title {
		font-size: 2.5rem;
		color: #fff;
	}

	.description {
		font-size: 1.2rem;
		font-weight: 500;
		color: #c3c3c3;
		margin-top: 20px;
		margin-bottom: 25px;
		line-height: 1.8;
	}

	.menu-button {
		margin-top: 0px;
	}

	.main-content {
		margin: 0 auto;
		/* margin-top: 10px; */
		max-width: 1300px;
		margin-bottom: 80px;
	}

	.title-2 {
		font-size: 1.8rem;
		text-align: center;
		margin-top: 100px;
	}

	.title-3 {
		font-size: 1.4rem;
		margin-top: 100px;
	}

	.reviews {
		position: relative;
		margin-top: 240px;
		margin-bottom: 240px;
	}

	.end {
		width: 100px;
		height: 80px;
		margin-bottom: 200px;
	}

	.text-center {
		text-align: center;
	}

	.text-yellow {
		color: #fcbb15;
	}

	.text-green {
		color: #2dc86f;
	}

	.text-brown {
		color: #ffb186;
	}
</style>
