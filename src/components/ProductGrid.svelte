<script>
    import products from "../store/products";
    import ProductCard from "./ProductCard.svelte";
</script>

<div class="grid">
    {#each $products as product}
        <ProductCard product={product}/>
        {:else}
        <h3 class="empty">
            Nothing found
        </h3>
    {/each}
</div>

<style>
    .grid {
        display: flex;
        flex-direction: column;
        column-gap: 1rem;
        row-gap: 1.5rem;
        padding: 1rem;
        margin-top: 1rem;
    }
    .empty {
        padding: 2rem;
        text-align: center;
    }
</style>