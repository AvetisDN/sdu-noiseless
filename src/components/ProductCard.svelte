<script>
    import ProductDetails from "./ProductDetails.svelte";
    import cart from "../store/cart";

    export let product

    let showDetails = false

    const toggleShowDetails = () => {
        showDetails = !showDetails
    }
    const handleAddToCart = (product) => {
        cart.addToCart(product)
    }
</script>

<div class="card">
    <div class="img" on:click={toggleShowDetails}>
        <img src={product.img} alt="">
    </div>
    <div class="info">
        <div class="info-text" on:click={toggleShowDetails}>
            <h5>
                {product.brand}
                <br>
                {product.model}
            </h5>
            <h6>
                ${product.price}
            </h6>
        </div>
        <div class="info-btn">
            {#if !cart.isInCart(product.id, $cart)}
                <button on:click={ () => {handleAddToCart(product)} }>
                    Add to cart
                    <i class="icofont-shopping-cart"></i>
                </button>
            {:else}
                <button disabled>
                    In cart
                    <i class="icofont-shopping-cart"></i>
                </button>
            {/if}
        </div>
    </div>
    <ProductDetails product={product} show={showDetails} toggleShowDetails={toggleShowDetails}
                    handleAddToCart={handleAddToCart}/>
</div>

<style>
    .card {
        padding: 1rem;
        background-color: #373744;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .35);
    }

    .img {
        height: 300px;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img img {
        height: 100%;
        filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4));
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info h5 {
        margin-bottom: .5rem;
    }

    .info h6 {
        color: #fd9c67;
    }

    .info-btn button {
        background-color: #ff2e7e;
        background-image: linear-gradient(135deg, #fd9c67, #ff2e7e);
        color: #ffffff;
        font-weight: 500;
        padding: 1rem;
        border: 0;
        white-space: nowrap;
        display: block;
    }

    .info-btn button:disabled {
        opacity: .7;
        pointer-events: none;
    }
</style>