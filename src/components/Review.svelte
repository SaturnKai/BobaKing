<script lang="ts">
	export let name: string;
	export let content: string;
	export let date: string;

	export let id: string;
</script>

<div class="review" class:r1={id === 'r1'} class:r2={id === 'r2'}>
	<div class="header">
		<h2 class="name">{name}</h2>
		<p class="date">{date}</p>
	</div>
	<div class="stars">
		<i class="icon fa-solid fa-star" />
		<i class="icon fa-solid fa-star" />
		<i class="icon fa-solid fa-star" />
		<i class="icon fa-solid fa-star" />
		<i class="icon fa-solid fa-star" />
	</div>
	<p class="content">{content}</p>
</div>

<style>
	.review {
		background: rgba(27, 27, 27, 0.18);
		width: 400px;
		box-shadow: 4px 4px 22px 15px rgba(0, 0, 0, 0.25);
		border-radius: 25px;
		padding: 20px 30px;
		transition: transform 200ms ease, background 100ms ease;

		user-select: none;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.name {
		font-size: 1rem;
	}

	.date {
		color: #474747;
	}

	.content {
		color: #c3c3c3;
		line-height: 1.8;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.stars {
		margin-top: 10px;
	}

	.icon {
		color: #fd8e27;
	}

	.r1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-100%, -50%) rotate(-16deg);
	}

	.r1:hover {
		background: rgba(73, 73, 73, 0.18);
		transform: translate(-100%, -60%) rotate(-16deg);
	}

	.r2 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(10%, -50%) rotate(10deg);
	}

	.r2:hover {
		background: rgba(73, 73, 73, 0.18);
		transform: translate(10%, -60%) rotate(10deg);
	}
</style>
