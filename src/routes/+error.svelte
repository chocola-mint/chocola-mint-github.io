<script>
    import { page } from '$app/stores';
	import { Subtitle, Title } from '@smui/paper';
	import Paper from '@smui/paper/src/Paper.svelte';
</script>

<Paper style="color:red;min-width:50vw;min-height:15vh">
    <Title style="font-weight: bold;">Error {$page.status}</Title>
    {#if $page.error}
    <Subtitle>{$page.error.message}</Subtitle>
    {:else}
    <Subtitle>Something went wrong...</Subtitle>
    {/if}
</Paper>