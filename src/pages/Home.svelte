<script>
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import ContactCard from "../components/ContactCard.svelte";
  import { links } from "svelte-routing";
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
    margin-top: 48px;
    flex-wrap: wrap;
  }

  .btn {
    font-size: 1.25rem;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
  }

  .btn:first-of-type {
    background-color: #144050;
  }

  .btn:last-of-type {
    background-color: #c74f73;
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
      <div class="button-group">
        <div use:links>
          <a class="btn" href="/salg">Trenger du konsulenter?</a>
          <a class="btn" href="/konsulent">Er du vår nye kollega?</a>
        </div>
      </div>
    </Card>
  </div>

  <section class="contact-section">
    <ContactCard />
  </section>
</main>
