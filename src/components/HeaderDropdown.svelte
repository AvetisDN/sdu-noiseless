<script>
    import cart from "../store/cart";

    const handleDelete = (id) => {
        if(confirm('Are you sure?')) {
            cart.deleteFromCart(id)
        }
    }
</script>

<div class="dropdown">
    <ul>
        {#each $cart as cartItem, index}
            <li>
                <span>
                    {index + 1}.
                    {cartItem.brand}
                    {cartItem.model}
                </span>
                <span>
                    {cartItem.quantity}
                    &times;
                    ${cartItem.price}
                    <button class="remove" on:click = { () => {handleDelete(cartItem.id)} }>
                        <i class="icofont-trash"></i>
                    </button>
                </span>
            </li>
        {/each}
    </ul>
    {#if cart.getTotalQuantity($cart)}
        <h6>
            Total: ${cart.getTotalPrice($cart)}
        </h6>
    {/if}
</div>

<style>
    .dropdown {
        position: absolute;
        top: 110%;
        right: 0;
        background-color: #25252d;
        z-index: 10001;
        box-shadow: 0 6px 14px rgba(0,0,0,.3);
        padding: 1rem;
        border-radius: .25rem;
    }
    .dropdown li {
        white-space: nowrap;
        margin: 0 0 .5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dropdown span:first-child {
        margin-right: 2rem;
    }
    .dropdown h6 {
        margin-top: 1rem;
        text-align: right;
    }
    .remove {
        margin-left: .5rem;
        border: none;
        background-color: #d2103a;
        color: #eff4f4;
    }
</style>