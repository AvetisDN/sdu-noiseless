<script>
    import cart from "../store/cart";
    export let product
    export let show
    export let toggleShowDetails
    export let handleAddToCart
</script>

<div class="details {show ? 'show' : ''}">
    <button class="close" on:click={toggleShowDetails}>
        <i class="icofont-ui-close"></i>
    </button>
    <div class="info">
        <div class="img">
            <img src={product.img} alt="">
        </div>
        <div class="info-text">
            <h4>
                {product.brand}
                {product.model}
            </h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur est magnam molestiae nam possimus qui sed sequi similique ut!
            </p>
        </div>
    </div>
    <div class="info-price">
        <h5>
            ${product.price}
        </h5>
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
</div>

<style>
    .details {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        background-color: #373744;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        opacity: 0;
        transform: scaleY(0) scaleX(.5);
        transition: .3s ease;
    }
    .details.show {
        opacity: 1;
        transform: scaleY(1) scaleX(1);
    }
    .close {
        position: absolute;
        top: .5rem;
        right: .5rem;
        color: #eff4f4;
        background-color: rgba(0,0,0,.3);
        padding: 1rem;
        border: none;
    }
    .info {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .info-text {
        max-height: calc(100vh - 300px - 8rem);
        margin-bottom: 1rem;
        overflow: auto;
    }
    .info-text p {
        margin-bottom: 1rem;
        transition: .5s ease;
        transition-delay: .9s;
        opacity: 0;
        transform: translateY(-50px);
    }
    .show .info-text p {
        opacity: 1;
        transform: translateY(0);
    }
    .img {
        height: 300px;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s ease;
        opacity: 0;
        transition-delay: .3s;
    }
    .show .img {
        opacity: 1;
    }
    .img img {
        height: 100%;
        filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4));
    }
    .info h4 {
        margin: 1rem 0;
        transition: .5s ease;
        transition-delay: .6s;
        opacity: 0;
        transform: translateY(-50px);
    }
    .show .info h4 {
        opacity: 1;
        transform: translateY(0);
    }
    .info-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: .4s;
        transition-delay: .5s;
        transform: translateY(150px);
    }
    .show .info-price {
        transform: translateY(0);
    }
    .info-price h5 {
        color: #fd9c67;
    }
    .info-btn {
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