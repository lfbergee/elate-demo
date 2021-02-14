<style>
    address {
        position: relative;
        width: 500px;
        height: 275px;
        z-index: 1;
        font-size: 1.75rem;
        line-height: 2.5rem;
    }

    a {
        color: #fff;
    }

    div {
        background: var(--color-blue);
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        color: #fff;
        padding: 48px 24px;
    }

    address::after,
    address::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            -45deg,
            var(--color-blue),
            var(--color-pink)
        );
        z-index: -1;
        transition: 125ms ease-in-out transform;
    }

    address::after {
        filter: blur(20px);
    }

    address:hover::after {
        transform: scale(1.05);
    }

    @media screen and (max-width: 992px) {
        address {
            width: 250px;
            height: 250px;
            font-size: 1.25rem;
        }
    }
</style>

<address>
    <div>
        Karl Johans Gate 1
        <br />
        0154 OSLO
        <br />
        <a href="tel:+4741327773">+47 413 27 773</a>
        <br />
        <a href="mailto:hei@elate.no">hei@elate.no</a>
    </div>
</address>
