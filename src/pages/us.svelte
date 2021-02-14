<script>
    import Nav from "../components/Nav.svelte";
    import Body from "../typography/Body.svelte";
    import DeveloperCard from "./us/DeveloperCard.svelte";
</script>

<style>
    section {
        margin-top: 90px;
        padding: 24px 48px;
        display: grid;
        place-items: center;
    }

    span {
        margin: 64px 0;
        display: block;
    }
    @media screen and (max-width: 992px) {
        section {
            padding: 24px 12px;
        }
    }
</style>

<Nav intersecting={false} />

<section>
    <Body>
        <span>
            Elate er konsulentene i Elate. Vi er seniorkonsulenter med ulike
            spesialiseringer som deler noen kjernerverdier.
        </span>
    </Body>
    <DeveloperCard
        name="Ola Normann"
        description="Kan forskjellen på string og String i JS"
        src="/developer.png"
        alt="developer" />
    <DeveloperCard
        name="Kari Nordmann"
        description="Vet hva alle decoratorene i SpringBoot gjør"
        src="/developer3.png"
        alt="developer"
        reversed />
    <DeveloperCard
        name="Medelsvensson"
        description="Helt rå på Gantt diagram"
        src="/developer2.png"
        alt="developer" />
</section>
