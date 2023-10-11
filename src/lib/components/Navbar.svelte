
<style>
    .label{
        margin-left:0px;
        margin-right:0px;
    }
</style>
<div bind:this={anchorBeforeNav}/>
<TabBar tabs={Object.keys(pages)} let:tab bind:active style="
    position: sticky; top: 0; z-index: 4; background-color:rgb(116, 163, 151);">
    <Wrapper>
        <Tab
        {tab}
        href={pages[tab].route}
        style={`max-width:${100 / Object.keys(pages).length}vw`}
        data-sveltekit-preload-data
        >
            <Label><div class="label">{pages[tab].label}</div></Label>
        </Tab>
        <MediaQuery query='(min-width:480px)' let:matches>
            {#if matches}
                <Tooltip showDelay={0.5} hideDelay={0.5} persistent={false}>{pages[tab].tooltip}</Tooltip>
            {/if}
        </MediaQuery>
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
	import { onMount, afterUpdate } from "svelte";
    import MediaQuery from 'svelte-media-queries';
	import { afterNavigate, beforeNavigate, disableScrollHandling } from '$app/navigation';
    
    export let pages : NavOptions;
    const pageKeys = Object.keys(pages);
    const currentTabList = pageKeys.filter(x => pages[x].route === $page.params.slug);
    $: active = currentTabList.length <= 0 ? pageKeys[0] : currentTabList[0];
    let isFirstNavigate = true;
    onMount(() => {
        const pageKeys = Object.keys(pages);
        const slugs = window.location.href.match(/[^\/]+/g);
        if(slugs && slugs.length > 2)
        {
            const currentTabList = pageKeys.filter(x => pages[x].route === "/" + slugs![2]);
            active = currentTabList.length <= 0 ? pageKeys[0] : currentTabList[0];
        }

    });
    let anchorBeforeNav : HTMLDivElement;
    let scrollY : number;
    beforeNavigate(() => {
        scrollY = window.scrollY;
    });
    afterNavigate(() => {
        window.scrollTo(0, scrollY);
        // if(!isFirstNavigate){
        //     disableScrollHandling();
        //     anchorBeforeNav.scrollIntoView({behavior: "smooth"});
        // }
        // isFirstNavigate = false;
    });
</script>