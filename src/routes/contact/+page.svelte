<script lang="ts">
	import Separator from 'components/Separator.svelte';
	import Input from 'components/Input.svelte';
	import Button from 'components/Button.svelte';

	let submitted = false;

	let name: string, email: string, content: string;

	function submit() {
		if (name.length && email.length && content.length) submitted = true;
	}
</script>

<div class="main-content">
	<h1 class="title">Contact</h1>
	<Separator />

	{#if submitted}
		<p class="description">
			Thank you for your message! While you wait for our response, enjoy this cat dancing.
		</p>
		<div class="image-container">
			<img class="image" src="/assets/img/cat-dancing.gif" alt="cat dancing." />
		</div>
	{:else}
		<p class="description">We would <span class="text-pink">love</span> to hear from you! 💜</p>
		<div class="group">
			<Input bind:value={name} icon="crown" placeholder="Name" />
			<Input bind:value={email} icon="envelope" placeholder="Email Address" type="email" />
		</div>
		<Input bind:value={content} icon="pencil" placeholder="Something thoughtful" type="textarea" />
		<div class="button-container">
			<Button
				on:click={submit}
				color="#8951FF"
				shadow="#623AFF55"
				hover="#703fd9"
				icon="paper-plane">Send</Button
			>
		</div>
	{/if}
</div>

<svelte:head>
	<title>Boba King | Contact</title>
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

	.group {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 1rem;
		grid-row-gap: 0px;
	}

	.button-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: end;
	}

	.text-pink {
		color: #ff5a96;
	}

	.image-container {
		display: flex;
	}

	.image {
		border-radius: 20px;
		width: 350px;
		margin: 0 auto;
		margin-top: 60px;
		transition: filter 100ms ease;
	}

	.image:hover {
		filter: brightness(80%);
	}
</style>
