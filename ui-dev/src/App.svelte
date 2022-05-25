<script>
	import { Router } from 'svelte-router-spa'
	import { routes } from './routes'
	import { ShowCart } from './stores';
	import Header from './components/Header.svelte';
	import CartItems from './components/CartItems.svelte'
</script>

<main>
	
	<Header/>
	
	<div class="content">
	
		<Router {routes}/>

		{#if $ShowCart}
			<CartItems/>
		{/if}
	
	</div>
	
</main>

<style>
	main {
		min-height: 100vh;
		background-color: rgb(255, 255, 250);
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

		


	

