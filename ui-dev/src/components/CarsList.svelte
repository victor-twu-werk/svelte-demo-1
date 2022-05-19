<script>
    import { CarStore } from '../stores';
    import Card from './Card.svelte'
 
</script>
   
  
{#each $CarStore as car}
    <Card car={car} />
{/each}
 

  
 
<style>

</style>
       


           
        
    



  





