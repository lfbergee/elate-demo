<script>
  import Lead from "../typography/Lead.svelte";
  import Body from "../typography/Body.svelte";
  export let title = "";
</script>

<style>
  div {
    color: rgb(51, 52, 53);
    margin: 0;
    z-index: 1;
    background-color: white;
    padding: 48px;
    border-radius: 16px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  @media screen and (max-width: 992px) {
    div {
      padding: 24px;
    }
  }
</style>

<div>
  <Lead>{title}</Lead>
  <Body>
    <slot />
  </Body>
</div>
