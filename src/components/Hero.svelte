<script>
  import Intersecting from "../utils/Intersecting.svelte";
  import Logo from "./Logo.svelte";
  import NET from "vanta/dist/vanta.net.min";
  import { onMount } from "svelte";
  import Nav from "./Nav.svelte";
  export let location;

  let net;
  let y;

  let startPoints = 0;
  let startMaxDistance = 0;
  const hasWindow = () => typeof window !== "undefined";

  onMount(() => {
    if (hasWindow) {
      startPoints = window.innerWidth > 992 ? 25 : 15;
      startMaxDistance = window.innerWidth > 992 ? 35 : 25;
    }
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

  $: {
    if (net && y < 300) {
      net.options.points = startPoints - Math.floor(y / 10);
      net.options.maxDistance = startMaxDistance - Math.floor(y / 20);
      net.options.spacing = 10 + Math.floor(y / 10);
    }
  }
</script>

<style>
  .logo-container {
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  #bg {
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
  <Nav {intersecting} {location} />
  <div id="bg">
    <div class="logo-container">
      <Logo />
    </div>
  </div>
</Intersecting>
