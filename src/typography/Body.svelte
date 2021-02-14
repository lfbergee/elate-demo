<style>
  p {
    z-index: 1;
    color: rgb(51, 52, 53);
    font-size: 1.75rem;
    line-height: 2.25rem;
    max-width: 700px;
    margin-top: 0;
  }
  @media screen and (max-width: 992px) {
    p {
      font-size: 1.375rem;
      line-height: 1.75rem;
    }
  }
</style>

<p>
  <slot />
</p>
