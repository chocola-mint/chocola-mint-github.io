<style>
    .list{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width: 100%;
    }
</style>

<div class="list">
    <WorkItem 
    src="https://placehold.co/200x200/png" 
    alt="Placeholder"
    title="Some game">Test</WorkItem>
    <WorkItem 
    src="https://placehold.co/600x600/png" 
    alt="Placeholder"
    title="Some game">Test</WorkItem>
    <WorkItem 
    src="https://placehold.co/200x200/png" 
    alt="Placeholder"
    title="Some game">Test</WorkItem>

</div>
<script>
	import WorkItem from "$lib/components/WorkItem.svelte";
    import Paper, { Content, Title } from "@smui/paper";

</script>
