<script>
	let firstName = 'Victor'
	let lastName = 'Twu'
	let yellow = false
	
	//reactive value
	
	$: color = yellow ? 'yellow' : '#ff3e00'
	$: name = firstName + ' ' + lastName
	
	const changeName = () => {
		if (lastName === 'Twu') {
			lastName = '607'
		} else{
			lastName = 'Twu'
		}
	}

	const changeColor = () => {
		yellow = !yellow
	}
</script>

<main>
	<h1 style='color: {color}'>Hello {name}!</h1>
	<button on:click={changeName}>toggle name last name</button>
	<button on:click={changeColor}>toggle color</button>
</main>

<style>
	main {
		height: 100vh;
		text-align: center;
		background-color: #272727;
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