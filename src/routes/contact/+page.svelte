<script lang="ts">
	import Separator from 'components/Separator.svelte';
	import Input from 'components/Input.svelte';
	import Button from 'components/Button.svelte';
</script>

<div class="main-content">
	<h1 class="title">Contact</h1>
	<Separator />
	<p class="description">We would love to hear from you! 💘</p>
	<div class="group">
		<Input icon="crown" placeholder="Name" />
		<Input icon="envelope" placeholder="Email Address" type="email" />
	</div>
	<Input icon="pencil" placeholder="Something thoughtful" type="textarea" />
	<div class="button-container">
		<Button color="#8951FF" shadow="#623AFF55" hover="#703fd9" icon="paper-plane">Send</Button>
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
</style>
