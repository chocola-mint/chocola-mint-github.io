<script lang="ts">
	import { afterNavigate, goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	// import { onMount } from "svelte";

    // console.log("onMount");
    // console.log($page.params.slug);
    onMount(() => {
        goto("/", {replaceState: true});
    // else goto($page.params.slug, {replaceState: false});

    });
    
</script>