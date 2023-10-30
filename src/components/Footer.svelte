<script lang="ts">
	export let page: string;
	import facts from '$lib/facts';

	let fact = facts[Math.floor(Math.random() * facts.length)];
	let icon = 'crown';
	$: {
		switch (page) {
			case '/menu':
				icon = 'whiskey-glass';
				break;
			case '/locations':
				icon = 'location-dot';
				break;
			case '/contact':
				icon = 'comments';
				break;
			default:
				icon = 'crown';
				break;
		}
	}

	function randomFact() {
		fact = facts.filter((f) => f != fact)[Math.floor(Math.random() * (facts.length - 1))];
	}
</script>

<div class="icon-splash">
	<i class="fa-solid fa-{icon}" />
</div>

<footer class="footer">
	<div class="container" style="justify-content:flex-start">
		<a
			class="link"
			href="https://github.com/SaturnKai/BobaKing"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i class="icon icon-2 fa-brands fa-github" />
		</a>
	</div>
	<div class="container" style="width: 100%">
		<button class="facts" on:click={() => randomFact()}>
			<h1>Did you know?</h1>
			<p class="fact">{fact}</p>
		</button>
	</div>
	<div class="container" style="justify-content:flex-end">
		<a
			class="link"
			href="https://www.instagram.com/bobakingvegas"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i class="icon fa-brands fa-instagram" />
		</a>
	</div>
</footer>

<style>
	.footer {
		background-color: #28252d;
		border-top: 2px solid rgba(122, 122, 122, 0.5);
	}

	.footer > .container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer > * {
		width: 50%;
	}

	.icon-splash,
	.footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1.5rem;
		width: 100%;
	}

	.icon-splash {
		color: #28252d;
		font-size: 3rem;
		justify-content: center;
		margin: 0rem 0 2rem 0;
	}

	.icon-splash .fa-solid {
		transition: 0.25s ease;
	}

	.icon-splash .fa-solid:hover {
		transform: translateY(-0.25rem);
		color: #393042;
	}

	.facts {
		all: unset;
		cursor: pointer;
		margin: 0 auto;
		text-align: center;
	}

	.facts h1 {
		font-weight: 800;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.fact {
		font-weight: 600;
		color: #c3c3c3;
	}

	.icon {
		color: #c3c3c3;
		font-size: 2rem;
		padding-right: 20px;
		transition: 0.25s ease;
	}

	.link {
		text-decoration: none;
		color: inherit;
	}

	.icon:hover {
		color: #ac78dd;
	}

	.icon-2:hover {
		color: #fff;
	}
</style>
