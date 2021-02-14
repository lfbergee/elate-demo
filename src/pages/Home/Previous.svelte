<script>
    import Body from "../../typography/Body.svelte";
    import Lead from "../../typography/Lead.svelte";
</script>

<style>
    section {
        width: 100%;
        display: grid;
        place-items: center;
    }
    article {
        padding: 48px;
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 128px;
        margin-bottom: 168px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
    }

    img {
        width: 100%;
        max-width: 100px;
        object-fit: contain;
        margin: 16px 8px;
    }
    span {
        width: 100%;
        text-align: center;
        display: block;
    }

    @media screen and (max-width: 992px) {
        article {
            margin: 128px 0;
        }
    }
</style>

<section>
    <article>
        <Lead><span>Våre oppdrag</span></Lead>
        <div>
            <img src="/nrk.svg" alt="nrk" />
            <img src="/vipps.svg" alt="vipps" />
            <img src="/fremtind.svg" alt="fremtind" />
            <img src="/rikstv.png" alt="riks tv" />
            <img src="/gjensidige.png" alt="gjensidige" />
            <img src="/dnb.png" alt="dnb" />
            <img src="/nt.jpg" alt="norsk tipping" />
            <img src="/politiet.png" alt="politiet" />
        </div>
    </article>
</section>
