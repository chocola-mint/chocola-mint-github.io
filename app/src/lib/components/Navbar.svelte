
<style>
    .label{
        margin-left:0px;
        margin-right:0px;
    }
</style>
<TabBar tabs={Object.keys(pages)} let:tab bind:active>
    <Wrapper>
        <Tab
        {tab}
        href={pages[tab].route}
        style={`max-width:${100 / Object.keys(pages).length}vw`}
        >
        <Label><div class="label">{pages[tab].label}</div></Label>
        </Tab>
        <Tooltip showDelay={0.5} hideDelay={0.5} persistent={false}>{pages[tab].tooltip}</Tooltip>
    </Wrapper>
</TabBar>
<script lang="ts" context="module">
    export interface RouteInfo {
        label: string;
        route: string;
        tooltip: string;
    };
    
    /**
     * Format: [tab key]: { label: [tab label], route: [slug] }
     */
    export type NavOptions = { [index: string]: RouteInfo };
</script>
<script lang="ts">
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import { page } from '$app/stores';
    import Tooltip, {Wrapper} from '@smui/tooltip';
	import { onMount } from "svelte";
    
    export let pages : NavOptions;
    const pageKeys = Object.keys(pages);
    const currentTabList = pageKeys.filter(x => pages[x].route === $page.params.slug);
    $: active = currentTabList.length <= 0 ? pageKeys[0] : currentTabList[0];

    onMount(() => {
    
        const pageKeys = Object.keys(pages);
        const slugs = window.location.href.match(/[^\/]+/g);
        if(slugs && slugs.length > 2)
        {
            const currentTabList = pageKeys.filter(x => pages[x].route === "/" + slugs![2]);
            active = currentTabList.length <= 0 ? pageKeys[0] : currentTabList[0];
        }

    });
</script>