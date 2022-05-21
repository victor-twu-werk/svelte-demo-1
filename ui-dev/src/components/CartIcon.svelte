<script>
    import Icon from '@iconify/svelte'
    import { CartStore } from '../stores'
    import { toggleShowCart } from '../cartOperations'
    $:totalItems = $CartStore.reduce((acc, curr)=> acc + curr.qty, 0)
</script>

<div class="cart" on:click={()=> toggleShowCart()}> 
    <Icon  icon="mdi:cart" style="font-size: 3rem"/>
    <span class="numItems">
        {totalItems}
    </span>
</div>

<style>
    .cart {
        position: relative;
    }
    
    .numItems {
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
</style>

