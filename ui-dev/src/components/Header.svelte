<script>
    import { CartStore } from '../stores'
    import { toggleShowCart } from '../cartOperations'
    $:totalItems = $CartStore.reduce((acc, curr)=> acc + curr.qty, 0)
  
</script>

<header>
    <h1>Logo</h1>
    <span on:click={()=> toggleShowCart()}>Cart: {totalItems}</span>
</header>

<style>
    header {
        padding: 0 1rem 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: solid 1px;
    }
</style>