<script lang="ts">
	import Separator from 'components/Separator.svelte';
	import { page } from '$app/stores';

	const message: string = $page.status === 404 ? 'Not Found...' : 'An Unknown Error Occurred...';
</script>

<div class="main-content">
	<h1 class="title">{$page.status}</h1>
	<Separator />
	<p class="description">
		{message}
	</p>
</div>

<svelte:head>
	<title>Boba King | Error</title>
</svelte:head>

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
		margin: 40px 0 40px 0;
	}
</style>
