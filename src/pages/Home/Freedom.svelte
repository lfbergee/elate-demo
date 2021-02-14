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
            <Lead>Vi tror på frihet</Lead>
            <Body>
                De beste konsulentene blir best når de får friheten til å velge
                sin faglige utvikling, sitt oppdrag og sin hverdag
            </Body>
        </div>
        <div class="img-wrapper">
            <span class="img-bg" />
            <img src="/skis.jpg" alt="skiers" />
        </div>
    </article>
</section>
