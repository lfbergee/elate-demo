<script>
    export let src;
    export let alt;
    export let reversed;
</script>

<style>
    img {
        max-width: 400px;
        width: 100%;
        border-radius: 16px;
    }

    .img-wrapper {
        position: relative;
        z-index: 1;
        height: 100%;
    }

    .img-bg {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        max-width: 400px;
        width: 100%;
        background-color: var(--color-pink);
        transform: rotate(-6deg);
        border-radius: 16px;
        z-index: -1;
    }

    section {
        width: 100%;
        display: grid;
        place-items: center;
    }
    article {
        padding: 48px;
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 128px;
        margin-bottom: 168px;
    }
    .content {
        margin-right: 48px;
    }
    
    .reversed {
        flex-direction: row-reverse;
    }
    
    .reversed.content {
        margin-right: 0;
        margin-left: 48px;
    }

    @media screen and (max-width: 992px) {
        .reversed {
            flex-direction: column-reverse;
        }
        article {
            flex-direction: column-reverse;
            margin: 64px 0;
        }
        .content {
            margin-top: 48px;
            margin-right: 0;
            margin-left: 0;
        }
        .img-bg,
        img {
            max-width: 300px;
        }
    }
</style>

<section>
    <article class={reversed ? 'reversed' : ''}>
        <div class="content">
            <slot />
        </div>
        {#if src !== ''}
            <div class="img-wrapper">
                <span class="img-bg" />
                <img {src} {alt} />
            </div>
        {/if}
    </article>
</section>
