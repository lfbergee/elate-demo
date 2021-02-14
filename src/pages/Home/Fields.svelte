<script>
    import Body from "../../typography/Body.svelte";

    import Lead from "../../typography/Lead.svelte";
</script>

<style>
    img {
        max-width: 400px;
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
        background-color: var(--color-blue);
    }
    article {
        padding: 48px;
        display: flex;
        flex-direction: row-reverse;

        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 128px;
        margin-bottom: 168px;
    }
    .content {
        margin-left: 48px;
    }

    span {
        color: #fff;
    }

    @media screen and (max-width: 992px) {
        article {
            flex-direction: column-reverse;
            margin: 64px 0;
        }
        .content {
            margin-top: 48px;
            margin-right: 0;
        }
    }
</style>

<section>
    <article>
        <div class="content">
            <Lead><span>Vi er spesialister</span></Lead>
            <Body>
                <span>
                    Vi er spesialister på kompliserte utfordringer, det kan være
                    helt nye prosjekter eller produkter med lang historie.
                    Konsulentene våre er innen fagfeltene prosjektledelse,
                    produkteiere, frontend- og backend-utvikling.
                </span>
            </Body>
        </div>
        <div class="img-wrapper">
            <span class="img-bg" />
            <img src="/dog.jpg" alt="dog" />
        </div>
    </article>
</section>
