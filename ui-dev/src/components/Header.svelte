<script>
    import CartIcon from './CartIcon.svelte'
</script>

<header>
    <div class="logoContainer">
        <h2>Russ Hanneman's</h2>
        <span>TRES COMMAS CAR SHOP</span>
    </div>
    <CartIcon/>
</header>

<style>
    header {
        padding: 0 2rem 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--saffron)
    }
    .logoContainer {
        display: flex;
        flex-direction: column;
    }
    h2, .logoContainer > span {
        border-left: solid 3px var(--greenAqua);
        padding-left: .5rem;
    }
    h2 {
        margin-bottom: 0;
    }
    .logoContainer > span {
        font-style: italic;
    }
</style>
        
      
        
    

 
    
   


  