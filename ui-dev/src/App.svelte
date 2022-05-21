<script>
	import { ShowCart } from './stores';
	import CarsList from './components/CarsList.svelte'
	import Header from './components/Header.svelte';
	import CartItems from './components/CartItems.svelte'
</script>

<main>
	
	<Header/>
	
	<div class="content">
		{#if $ShowCart}
			<CartItems/>
		{/if}
		
		<CarsList/>
	
	</div>

</main>

<style>
	main {
		height: 100vh;
		text-align: center;
	}

	.content {
		position: relative;
		padding-top: 1.5rem;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

</style>