<script>
  import Hero from "./Hero.svelte";
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

  .card {
    color: rgb(51, 52, 53);
    margin: 0;
    max-width: 675px;
    z-index: 1;
    background-color: white;
    padding: 48px;
    border-radius: 16px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .lead,
  .body {
    z-index: 1;
    color: rgb(51, 52, 53);
    font-size: 2.5rem;
    max-width: 700px;
    margin-top: 0;
  }
  .lead {
    font-size: 3.25rem;
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
    .card {
      max-width: 535px;
      padding: 24px 48px;
    }
    .entry {
      margin: 0 24px;
      top: -15vh;
    }
    .page {
      grid-template-columns: 1fr;
    }
    .lead {
      font-size: 2.5rem;
    }
    .body {
      font-size: 1.75rem;
    }
  }
</style>

<main>
  <Hero />

  <div class="entry">
    <div class="card">
      <p class="lead">Elate er senior&shy;konsulenter</p>
      <p class="body">
        Vi brenner for å styrke den teknologiske utviklingen i Norge
      </p>
    </div>
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
