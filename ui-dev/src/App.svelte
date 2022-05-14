<script>
	import CarsList from './components/CarsList.svelte'

</script>

<main>
	<h1>The Shop</h1>
	<div class="content">

		<CarsList/>
	</div>
</main>

<style>
	main {
		height: 100vh;
		text-align: center;
	}

	.content {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 1rem;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	


</style>