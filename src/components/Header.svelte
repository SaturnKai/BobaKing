<script lang="ts">
	export let page: string = '';
</script>

<header class="header">
	<img class="logo" src="/logo.svg" alt="logo" />
	<nav class="nav">
		<a class="tab" class:selected={page === '/'} href="/">HOME</a>
		<a class="tab" class:selected={page === '/menu'} href="/menu">MENU</a>
		<a class="tab" class:selected={page === '/locations'} href="/locations">LOCATIONS</a>
		<a class="tab" class:selected={page === '/contact'} href="/contact">CONTACT</a>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		margin-inline: 180px;
	}

	.logo {
		width: 100px;
	}

	.tab {
		font-size: 1.2rem;
		font-weight: bold;
		color: #fff;
		text-decoration: none;
		margin-left: 20px;
	}

	.tab:hover {
		color: #a1a1a1;
	}

	.tab.selected {
		color: #eb703b;
	}
</style>
