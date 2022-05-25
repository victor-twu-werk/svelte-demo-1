<script>
    import { CarStore } from '../stores';
    import Card from './Card.svelte'
 
</script>
   
 <!-- example of diff way having an array  -->

<!-- {#each [{name:"Diana", id:1}, {name:"Clark", id:2}, {name:"Bruce", id:3}].map(el=> el.name) as name}
    <h2>{name}</h2>
{/each} -->

{#each $CarStore as car}
    <Card car={car} />
{/each}
 
  
 
<style>

</style>
       


           
        
    



  





