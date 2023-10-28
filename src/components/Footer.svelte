<script lang="ts">
    export let page: string;
    import facts from "$lib/facts";

    let fact = facts[Math.floor(Math.random() * facts.length)]
    let icon = "crown";
    $: {
        switch(page) {
            case "/menu": icon = "whiskey-glass"; break;
            case "/locations": icon = "location-dot"; break;
            case "/contact": icon = "comments"; break;
            default: icon = "crown"; break;
        }
    }

    function randomFact() {
        fact = facts[Math.floor(Math.random() * facts.length)]
    }

</script>

<div class="icon-splash">
    <i class="fa-solid fa-{icon}"></i>
</div>

<footer>
    <div></div>
    <button class="facts" on:click={()=>randomFact()}>
        <h1>Did you know?</h1>
        <span>{fact}</span>
    </button>
    <div class="socials">
        Instagram
    </div>
</footer>

<style>
    footer {
        background-color: #28252d;
        justify-content: space-between;
    }

    footer > * {
        width: calc(100vw / 3);
    }

    .icon-splash, footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1.5rem;
        width: 100%;
    }

    .icon-splash {
        color: #28252d;
        font-size: 3rem;
        justify-content: center;
        margin: 0rem 0 2rem 0;
    }

    .facts {
        all: unset;
        cursor: pointer;
        text-align: center;
    }

    .facts h1 {
        font-weight: 800;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .facts span {
        font-weight: 400;
        font-size: 1.125rem;
    }

</style>