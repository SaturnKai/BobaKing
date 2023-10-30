<script lang="ts">
	import Header from 'components/Header.svelte';
	import Footer from 'components/Footer.svelte';
	import { page } from '$app/stores';

	import 'styles/main.css';
</script>

<svelte:head>
	<meta name="author" content="Brandon G, Ohlin A" />
	<meta name="description" content="The best boba in Vegas." />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
		integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<link rel="icon" href="/assets/favicon/icon-32x32.png" sizes="32x32" />
	<link rel="icon" href="/assets/favicon/icon-192x192.png" sizes="192x192" />
</svelte:head>

<Header page={$page.url.pathname} />
<main>
	<slot />
</main>
<Footer page={$page.url.pathname} />

<style>
	main {
		min-height: 80vh;
		padding: 2rem;
	}
</style>
