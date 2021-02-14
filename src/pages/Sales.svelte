<script>
    import ContactCard from "../components/ContactCard.svelte";
    import Nav from "../components/Nav.svelte";
    import Body from "../typography/Body.svelte";
    import { onMount } from "svelte";
    export let location;

    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>

<style>
    section {
        margin-top: 90px;
        padding: 24px 48px;
    }
    div {
        width: 100%;
        display: grid;
        place-items: center;
    }

    @media screen and (max-width: 992px) {
        section {
            padding: 24px 12px;
        }
    }
</style>

<Nav intersecting={false} {location} />
<section>
    <Body>
        Elate er et konsulentselskap i Oslo, bestående av seniorkonsulenter
        innenfor frontend- og backend-utvikling, QA, og prosjektledelse. Vi er
        en gruppe hardtarbeidende teknologientusiaster, som tror på å bygge
        langvarige relasjoner med våre kunder.
    </Body>
    <div>
        <ContactCard />
    </div>
</section>
