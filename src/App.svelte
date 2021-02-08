<script>
  import Intersecting from "./Intersecting.svelte";
  import HALO from "vanta/dist/vanta.halo.min";
  import { onMount } from "svelte";

  onMount(() => {
    HALO({
      el: "#bg",
      color: 0x000000,
      waveHeight: 10,
      shininess: 20,
      waveSpeed: 0.1,
      size: 0.55,
      amplitudeFactor: 0.6,
      backgroundColor: 0x144050,
      mouseControls: false,
      touchControls: false
    });
  });
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
    place-items: center;
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

  .logo {
    transition: 250ms ease-in-out transform;
  }

  .logo-container {
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .burger {
    height: 2px;
    width: 40px;
    z-index: 1;
    position: fixed;
    top: 40px;
    right: 30px;
  }

  .burger::after,
  .burger::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    left: 0;
  }

  .burger::before {
    top: -10px;
  }

  .burger::after {
    top: 10px;
  }

  .burger--dark,
  .burger--dark::after,
  .burger--dark::before {
    background-color: rgb(51, 52, 53);
  }

  .burger--light,
  .burger--light::after,
  .burger--light::before {
    background-color: white;
  }

  #bg {
    width: 100%;
    height: 100vh;
  }

  .head-logo {
    position: fixed;
    z-index: 1;
    top: 5px;
    left: 10px;
    height: 90px;
    transition: 250ms ease-in-out opacity;
  }

  .head-logo--show {
    opacity: 1;
  }

  .head-logo--hide {
    opacity: 0;
  }
</style>

<main>
  <div id="bg">
    <div class="logo-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-70 -28 650 650"
        class="logo"
        height="200"
        width="200">
        <path
          vector-effect="non-scaling-stroke"
          d="M251 0L0 145v289l251 145 250-145V241l-83 48v97l-167
          96-167-96V193l167-97 83 49-167 96v97l84 48v-97l250-144L251 0"
          fill="#40a67b"
          stroke="#40a67b"
          stroke-width="2" />
      </svg>

    </div>
  </div>
  <section class="page">
    <p class="lead">Elate er seniorkonsulenter</p>
  </section>
  <Intersecting let:intersecting top={0}>
    <img
      src="./elate.svg"
      alt="elate logo"
      class={`head-logo ${intersecting ? 'head-logo--show' : 'head-logo--hide'}`} />
    <span class={`burger ${intersecting ? 'burger--dark' : 'burger--light'}`} />

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
  </Intersecting>

</main>
