<script>
    import Page from "../../components/Page.svelte";
    import Body from "../../typography/Body.svelte";
    import Lead from "../../typography/Lead.svelte";
</script>

<style>
    span {
        color: #fff;
        background-color: var(--color-blue);
        width: 100%;
    }
</style>

<span>
    <Page src="/dog.jpg" alt="dog" reversed={true}>
        <Lead><span>Vi er ydmyke spesialister</span></Lead>
        <Body>
            <span>
                Vi er ikke så glade i å skryte av oss selv. Det sagt, så er vi
                spesialister på kompliserte utfordringer, det kan være helt nye
                prosjekter eller produkter med lang historie. Konsulentene våre
                er innen fagfeltene prosjektledelse, produkteiere, frontend- og
                backend-utvikling.
            </span>
        </Body>
    </Page>
</span>
