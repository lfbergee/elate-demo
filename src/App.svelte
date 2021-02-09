<script>
  import Hero from "./Hero.svelte";
  import Card from "./components/Card.svelte";
</script>

<style>
  main {
    position: relative;
    display: grid;
    place-items: center;
    background: white;
  }

  .page {
    height: 100vh;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 48px;
  }

  .body {
    z-index: 1;
    color: rgb(51, 52, 53);
    font-size: 2.5rem;
    max-width: 700px;
    margin-top: 0;
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
  @media screen and (max-width: 992px) {
    .entry {
      margin: 0 24px;
      top: -15vh;
    }
    .page {
      grid-template-columns: 1fr;
    }
    .body {
      font-size: 1.75rem;
    }
  }
</style>

<main>
  <Hero />

  <div class="entry">
    <Card title="Elate er senior&shy;konsulenter">
      Vi brenner for å styrke den teknologiske utviklingen i Norge
    </Card>

  </div>

  <section class="page">
    <p class="body">
      Uavhengig av teknologiske utfordringer du og ditt team står ovenfor kan vi
      hjelpe dere med å lage en plan - og gjøre den til virkelighet
    </p>
  </section>

  <section class="page">
    <p class="body">
      Er du dyktig på fagfeltet ditt, liker å bidra til å gjøre hele teamet
      bedre?
      <br />
      <br />
      Da er du kanskje vår neste kollega!
    </p>
  </section>

  <section class="page">
    <p class="body">
      Karl Johans Gate 1
      <br />
      0154 OSLO
      <br />
      <a href="tel:+4741327773">+47 413 27 773</a>
      <br />
      <a href="mailto:hei@elate.no">hei@elate.no</a>
    </p>
  </section>

</main>
