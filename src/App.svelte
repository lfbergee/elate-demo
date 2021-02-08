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
  }

  .lead {
    color: rgb(51, 52, 53);
    font-size: 5rem;
    margin: 20px;
    max-width: 700px;
    z-index: 1;
  }

  .body {
    z-index: 1;
    color: rgb(51, 52, 53);
    font-size: 3rem;
    margin: 20px;
    max-width: 700px;
  }
  @media screen and (max-width: 992px) {
    .page {
      grid-template-columns: 1fr;
    }
    .lead {
      font-size: 3rem;
    }
    .body {
      font-size: 2rem;
    }
  }
</style>

<main>
  <Hero />
  <section class="page">
    <p class="lead">Elate er senior&shy;konsulenter</p>
    <p class="lead">Elate er senior&shy;konsulenter</p>

  </section>

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
