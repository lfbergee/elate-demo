<script>
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import ContactCard from "../components/ContactCard.svelte";
  import { links } from "svelte-routing";
  import { onMount } from "svelte";
  import Freedom from "./Home/Freedom.svelte";
  import Fields from "./Home/Fields.svelte";
  import Previous from "./Home/Previous.svelte";

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<style>
  main {
    position: relative;
    display: grid;
    place-items: center;
    background: white;
  }

  .entry {
    position: relative;
    top: -148px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 68px;
    max-width: 1200px;
    margin: 0 48px;
  }

  .contact-section {
    background: rgb(29, 29, 29);
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .button-group {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 24px;
  }

  .btn {
    font-size: 1.25rem;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-top: 24px;
    padding: 12px 24px;
    display: block;
    width: 100%;
    max-width: 250px;
    text-align: center;
  }

  .btn:first-of-type {
    background-color: var(--color-blue);
  }

  .btn:last-of-type {
    background-color: var(--color-pink);
  }

  @media screen and (max-width: 992px) {
    .entry {
      margin: 0 12px;
      top: -15vh;
    }
  }
</style>

<main>
  <Hero />
  <div class="entry">
    <Card title="Elate er senior&shy;konsulenter">
      Vi brenner for å styrke den teknologiske utviklingen i Norge
      <div use:links class="button-group">
        <a class="btn" href="/salg">Trenger du konsulenter?</a>
        <a class="btn" href="/konsulent">Er du vår nye kollega?</a>
      </div>
    </Card>
  </div>
  <Freedom />
  <Fields />
  <Previous />
  <section class="contact-section">
    <ContactCard />
  </section>
</main>
