<script>
  import Intersecting from "../utils/Intersecting.svelte";
  import Burger from "./Burger.svelte";
  import NET from "vanta/dist/vanta.net.min";
  import { onMount } from "svelte";

  let net;
  let y;

  $: {
    if (net && y < 300) {
      net.options.points = 20 - Math.floor(y / 10);
      net.options.maxDistance = 30 - Math.floor(y / 20);
      net.options.spacing = 10 + Math.floor(y / 10);
    }
  }

  onMount(() => {
    net = NET({
      el: "#bg",
      backgroundColor: 0x144050,
      color: 0xc74f73,
      touchControls: false,
      gyroControls: true,
      points: 10.0,
      spacing: 12.0,
      maxDistance: 10,
      scale: 1,
      scaleMobile: 1.0,
      showDots: false,
    });
  });
</script>

<style>
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

  #bg {
    width: 100%;
    height: 80vh;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 90px;
    transition: 125ms ease-in-out background-color;
  }

  .nav--show {
    background-color: #144050;
  }

  .head-logo {
    height: 90px;
    transition: 250ms ease-in-out opacity;
  }

  .head-logo--show {
    opacity: 1;
  }

  .head-logo--hide {
    opacity: 0;
  }

  @media screen and (max-width: 992px) {
    nav {
      padding: 0;
    }
    #bg {
      height: 75vh;
    }
  }
</style>

<svelte:window bind:scrollY={y} />
<Intersecting let:intersecting bottom={-300}>
  <nav class={`${intersecting ? '' : 'nav--show'}`}>
    <img
      src="./elate.svg"
      alt="elate logo"
      class={`head-logo ${!intersecting ? 'head-logo--show' : 'head-logo--hide'}`} />
    <Burger />
  </nav>
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
          fill="#fff"
          stroke="#fff"
          stroke-width="2" />
      </svg>
    </div>
  </div>
</Intersecting>
