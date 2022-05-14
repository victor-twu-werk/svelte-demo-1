<script>
    export let car
    export let addItem

</script>

<div class='card'>
    <div class="titleContainer">

        <h2 class='title'>{car.year} {car.make}</h2>
        <h3 class='subTitle'>{car.model}</h3>
    </div>
    <img class='carThumb' src={car.img} alt=''/>
    <button on:click={()=> addItem(car.id)}>Add To Cart</button>
 
</div>

<style>
    .card {
        width: 18rem;
      
        border-radius: .3rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .card, .titleContainer {
        display: flex;
        flex-direction: column;
    }
    .title {
        margin-bottom: 0;
    }    
    .subTitle {

    }
      .carThumb {
        width: 100%;
    }
</style>