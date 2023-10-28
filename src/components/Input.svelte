<script lang="ts">
    export let icon = "";
    export let type = "text";
    export let placeholder = "This is your alert to add a placeholder";
</script>

{#if type === "textarea"}
    <div class="wrapper">
        <textarea class="text-area" rows="5" placeholder={placeholder}></textarea>
        <i class="fa-solid fa-{icon}"></i>
    </div>
{:else}
<div class="input-wrapper">
    {#if icon}
        <i class="fa-solid fa-{icon}"></i>
    {/if}
    <input type={type} placeholder={placeholder}>
</div>
{/if}

<style>
    .input-wrapper, .text-area {
        all: unset;
        background-color: #1d191f;
		border: 2px solid rgba(62, 62, 62, 0.5);
		padding: 1rem 1.25rem;
		border-radius: 0.75rem;
    }

    .text-area {
        margin-top: 1rem;
        width: calc(100% - 44px);
        font-weight: 500;
        line-height: 2rem;
    }
    
    .wrapper .fa-solid {
        position: relative;
        float: right;
        top:-2.25rem;
        left: -1rem;
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0.75rem;
    }

    .input-wrapper input {
        all: unset;
        margin-left: 1rem;
        width: 100%;
        color: #ffffff;
        font-weight: 500;
        line-height: 0.75rem;
    }

    .input-wrapper input::placeholder, .text-area::placeholder {
        color: #505050;
    }

    .fa-solid {
        color: #707070;
    }
</style>