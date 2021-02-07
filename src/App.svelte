<script>
  import { onMount } from "svelte";
  import Intersecting from "./Intersecting.svelte";

  onMount(() => {
    const vid = document.getElementById("bg");
    vid.playbackRate = 0.5;
  });
</script>

<style>
  main {
    position: relative;
    display: grid;
    place-items: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  video {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .page {
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  }

  .first-page {
    place-items: end;
  }

  img {
    max-width: 80vh;
  }

  .lead {
    color: #fff;
    font-size: 7rem;
    margin: 20px;
    max-width: 700px;
    z-index: 1;
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transition: 500ms ease-in-out opacity;
  }

  .backdrop--show {
    opacity: 1;
  }
  .backdrop--hide {
    opacity: 0;
  }

  .body {
    z-index: 1;
    color: #fff;
    font-size: 4rem;
    margin: 20px;
    max-width: 700px;
  }

  .logo {
    position: fixed;
    top: 0;
    left: 0;
    transition: 250ms ease-in-out transform;
  }

  .logo-container {
    z-index: 2;
    width: 100%;
  }

  .logo--top {
    transform: translate(-200px, -160px) scale(0.5);
  }
  .logo--center {
    transform: translate(0, 0) scale(1);
  }
</style>

<video loop autoplay muted id="bg">
  <source src="./bg.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<main class="content">
  <section class="page first-page">
    <p style="color: white; font-size: 4rem">Hotlink - Hotlink</p>
  </section>

  <Intersecting let:intersecting top={-200} bottom={-200}>
    <div class="logo-container">
      <img
        src="./logo.png"
        alt="elate logo"
        class={`logo ${intersecting ? 'logo--top' : 'logo--center'}`} />
    </div>
    <aside
      class={`backdrop ${intersecting ? 'backdrop--show' : 'backdrop--hide'}`} />
    <section class="page">
      <p class="lead">Elate er seniorkonsulenter</p>
    </section>

    <section class="page">
      <p class="body">
        Uavhengig av teknologiske utfordringer du og ditt team står ovenfor kan
        vi hjelpe dere med å lage en plan - og gjøre den til virkelighet
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
  </Intersecting>

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
