<script>
    import Nav from "../components/Nav.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>

<style>
    .clip-it {
        clip-path: url(#svgTextPath);
        width: 100%;
        height: 100%;
    }
    section {
        display: grid;
        place-items: center;
        margin-top: 90px;
        height: calc(100% - 90px);
    }
</style>

<Nav intersecting={false} />

<section>
    <img src="/img.webp" class="clip-it" alt="" />
    <svg height="0" width="0">
        <defs>
            <clipPath id="svgTextPath">
                <polygon
                    points="164.13,99.98 99.23,137.45 99.23,212.39 164.13,249.85 229.03,212.39 229.03,162.43 207.39,174.92 
        207.39,199.9 164.13,224.88 120.87,199.9 120.87,149.94 164.13,124.96 185.76,137.45 142.5,162.43 142.5,187.41 164.13,199.9 
        164.13,174.92 229.03,137.45 		" />
            </clipPath>
        </defs>
    </svg>
</section>
