<script>
    import Page from "../../components/Page.svelte";
    import Lead from "../../typography/Lead.svelte";
</script>

<style>
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
</style>

<Page src="" alt="">
    <Lead><span>Noen av våre oppdrag</span></Lead>
    <div>
        <img src="/nrk.svg" alt="nrk" />
        <img src="/vipps.svg" alt="vipps" />
        <img src="/fremtind.svg" alt="fremtind" />
        <img src="/rikstv.png" alt="riks tv" />
        <img src="/gjensidige.png" alt="gjensidige" />
        <img src="/dnb.png" alt="dnb" />
        <img src="/nt.jpg" alt="norsk tipping" />
        <img src="/politiet.png" alt="politiet" />
        <img src="/ruter.png" alt="ruter" />
        <img src="/norwegian.webp" alt="norwegian" />
        <img src="/skatt.jpg" alt="skatteetaten" />
    </div>
</Page>
