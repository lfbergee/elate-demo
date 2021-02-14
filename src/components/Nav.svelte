<script>
    import { link } from "svelte-routing";
    import Burger from "./Burger.svelte";
    export let intersecting;
</script>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        height: 91px;
        transition: 125ms ease-in-out background-color;
    }

    .nav--show {
        background-color: var(--color-blue);
    }

    .head-logo {
        height: 90px;
        transition: 250ms ease-in-out opacity;
    }

    .head-logo--show {
        opacity: 1;
    }

    .head-logo--hide {
        opacity: 0;
    }

    @media screen and (max-width: 992px) {
        nav {
            padding: 0;
        }
    }
</style>

<nav class={`${intersecting ? '' : 'nav--show'}`}>
    <a href="/" use:link>
        <img
            src="./elate.svg"
            alt="elate logo"
            class={`head-logo ${!intersecting ? 'head-logo--show' : 'head-logo--hide'}`} />
    </a>
    <Burger />
</nav>
