<script>
  import Lead from "../typography/Lead.svelte";
  import Body from "../typography/Body.svelte";
  export let title = "";
</script>

<style>
  div {
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

  @media screen and (max-width: 992px) {
    div {
      max-width: 535px;
      padding: 24px 48px;
    }
  }
</style>

<div>
  <Lead>{title}</Lead>
  <Body>
    <slot />
  </Body>
</div>
