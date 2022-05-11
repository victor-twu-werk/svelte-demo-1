<script>
	import CarsList from './components/CarsList.svelte'
</script>

<main>
	<h1>The Shop</h1>
	<CarsList/>
</main>

<style>
	main {
		height: 100vh;
		text-align: center;
		/* background-color: #272727; */
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>