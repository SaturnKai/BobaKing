<script lang="ts">
	import Header from 'components/Header.svelte';
	import Footer from 'components/Footer.svelte';

	import 'styles/main.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
