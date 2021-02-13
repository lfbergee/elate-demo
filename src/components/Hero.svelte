<script>
  import Intersecting from "../utils/Intersecting.svelte";
  import Logo from "./Logo.svelte";
  import NET from "vanta/dist/vanta.net.min";
  import { onMount } from "svelte";
  import Nav from "./Nav.svelte";

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
  @media screen and (max-width: 992px) {
    #bg {
      height: 75vh;
    }
  }
</style>

<svelte:window bind:scrollY={y} />
<Intersecting let:intersecting bottom={-300}>
  <Nav {intersecting} />
  <div id="bg">
    <div class="logo-container">
      <Logo />
    </div>
  </div>
</Intersecting>
