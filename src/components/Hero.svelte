<script>
  import Intersecting from "../utils/Intersecting.svelte";
  import Burger from "./Burger.svelte";
  import Logo from "./Logo.svelte";
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
      <Logo />
    </div>
  </div>
</Intersecting>
