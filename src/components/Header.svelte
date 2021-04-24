<script>
    import cart from "../store/cart";
    import HeaderDropdown from "./HeaderDropdown.svelte";

    let showDropdown = false

    const toggleShowDropdown = () => {
        showDropdown = !showDropdown
    }
</script>

<header>
    <a href="#" class="logo">
        <img src="./images/logo/logo.png" alt="Noiseless">
        <span>
            noiseless
        </span>
    </a>
    <div class="informer">
        <button class="cart" on:click={toggleShowDropdown}>
            <i class="icofont-shopping-cart"></i>
            <span>{cart.getTotalQuantity($cart)}</span>
        </button>
        {#if showDropdown}
            <div class="dropdown-underlay" on:click={toggleShowDropdown}></div>
            <HeaderDropdown/>
        {/if}
    </div>
</header>

<style>
    header {
        padding: 1rem;
        background-color: #373744;
        box-shadow: 0 4px 14px rgba(0, 0, 0, .5);
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 999;
    }

    .logo {
        display: flex;
        align-items: center;
        color: #eff4f4;
        text-decoration: none;
    }

    .logo img {
        max-width: 3rem;
        margin-right: .5rem;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, .4));
    }

    .logo span {
        display: block;
        background-image: linear-gradient(135deg, #ffb287, #fe478c);
        font-size: 2.25rem;
        font-weight: 600;
        line-height: 1em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Teko', sans-serif;
        transform: translateY(1px);
    }

    .informer {
        display: flex;
        align-items: center;
        position: relative;
    }

    .cart {
        background-color: rgba(0, 0, 0, .2);
        color: #ffb287;
        border: none;
        width: 3rem;
        height: 3rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-left: .5rem;
    }

    .cart span {
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: .8rem;
        background-color: #e31a65;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eff4f4;
        font-weight: 500;
    }
    .dropdown-underlay {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10000;
    }
</style>