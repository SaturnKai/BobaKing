<script lang="ts">
	import Header from 'components/Header.svelte';
	import Footer from 'components/Footer.svelte';
	import { page } from '$app/stores';

	import 'styles/main.css';
</script>

<Header page={$page.url.pathname} />
<main>
	<slot />
</main>
<Footer page={$page.url.pathname} />
<style>
	main {
		min-height: 80vh;
	}
</style>