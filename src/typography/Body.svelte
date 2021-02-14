<style>
  p {
    z-index: 1;
    color: rgb(51, 52, 53);
    font-size: 2rem;
    max-width: 700px;
    margin-top: 0;
  }
  @media screen and (max-width: 992px) {
    p {
      font-size: 1.25rem;
    }
  }
</style>

<p>
  <slot />
</p>
