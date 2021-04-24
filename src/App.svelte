<script>
    import Header from "./components/Header.svelte";
    import ProductGrid from "./components/ProductGrid.svelte";
</script>

<main>
    <Header/>
    <ProductGrid/>
</main>

<style global>
    main {
        min-height: 100vh;
        background-color: #373744;
        color: #eff4f4;
    }
</style>