<script>
    import { cars } from '../data/data'
</script>

{#each cars as car}
<div>
    <h2>{car.make} {car.model}</h2>

    <img class='carThumb' src={car.img} alt='Car Pic'/>
</div>
{/each}

<style>

    .carThumb {
        width: 20rem;
    }
</style>
