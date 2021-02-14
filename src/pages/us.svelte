<script>
    import Nav from "../components/Nav.svelte";
    import Body from "../typography/Body.svelte";
    export let location;
</script>

<style>
    section {
        margin-top: 90px;
        padding: 24px 48px;
        display: grid;
        place-items: center;
    }

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

    article:last-of-type {
        grid-template-columns: 125px 1fr;
    }

    div {
        padding: 24px 48px;
    }

    img {
        width: 125px;
        object-fit: contain;
    }
    span {
        margin: 64px 0;
        display: block;
    }
    @media screen and (max-width: 992px) {
        section {
            padding: 24px 12px;
        }
        div {
            padding: 24px 12px;
        }
    }
</style>

<Nav {location} />

<section>
    <Body>
        <span>
            Elate er konsulentene i Elate. Vi er seniorkonsulenter med ulike
            spesialiseringer som deler noen kjernerverdier.
        </span>
    </Body>
    <article>
        <div>
            <Body>Ola Normann</Body>
            <p>Flink til javascript og sånn</p>
        </div>
        <img src="/developer.png" alt="developer" />
    </article>

    <article>
        <img src="/developer2.png" alt="developer" />
        <div>
            <Body>Kari Nordmann</Body>
            <p>Vet hva alle decoratorene i SpringBoot gjør</p>
        </div>
    </article>
</section>
