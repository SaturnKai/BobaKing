<script lang="ts">
    export let icon: string;
</script>

{#if icon}
<div class="icon-splash">
    {icon}
</div>
{/if}

<footer>
    <div></div>
    <div class="facts">
        <h1>Did you know?</h1>
        <span>Boba is super dope and cool</span>
    </div>
    <div class="socials">
        Instagram
    </div>
</footer>

<style>
    footer {
        padding: 1.5rem;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: #28252d;
    }

    .facts {
        
    }
</style>