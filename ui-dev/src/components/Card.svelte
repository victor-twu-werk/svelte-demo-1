<script>
    export let car
    export let addItem

</script>

<div class='card'>
    <h2>{car.year} {car.make}</h2>
    <span>{car.model}</span>
    <img class='carThumb' src={car.img} alt=''/>
    <button on:click={()=> addItem(car.id)}>Add To Cart</button>
 
</div>

<style>
      .carThumb {
        width: 20rem;
    }
</style>