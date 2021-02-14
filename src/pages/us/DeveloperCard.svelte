<script>
    import Body from "../../typography/Body.svelte";

    export let name;
    export let description;
    export let src;
    export let alt;
    export let reversed = false;
</script>

<style>
    article {
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
        display: grid;
        grid-template-columns: 1fr 125px;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 24px;
        max-width: 600px;
        width: 100%;
    }

    .reversed {
        grid-template-columns: 125px 1fr;
    }

    div {
        padding: 24px 48px;
    }

    img {
        width: 125px;
        object-fit: contain;
    }
    @media screen and (max-width: 992px) {
        div {
            padding: 24px 12px;
        }
    }
</style>

<article class={reversed ? 'reversed' : ''}>
    {#if reversed}<img {src} {alt} />{/if}
    <div>
        <Body>{name}</Body>
        <p>{description}</p>
    </div>
    {#if !reversed}<img {src} {alt} />{/if}
</article>
