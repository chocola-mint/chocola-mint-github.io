<style>
    .pseudobutton {
        cursor: pointer;
        width: 25vw;
        height: 25vw;
    }
    img {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 600px){
        .pseudobutton{
        width: 80vw;
        height: 80vw;
        }
    }
</style>
<Dialog
  bind:open
  sheet
  aria-labelledby={dialogTitleId}
  aria-describedby={dialogContentId}
>
    <Title id={dialogTitleId}>{title}</Title>
    <Content id={dialogContentId}>
            <IconButton action="close" class="material-icons">close</IconButton>
        <slot/>
    </Content>
</Dialog>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="pseudobutton" use:Ripple={{ surface: true }} tabindex="0" role="button" 
    aria-pressed="false"
    on:click={() => (open = true)}>
        <img src={src} alt={alt} />
    </div>
<script lang="ts">
    import Ripple from "@smui/ripple";
    import Dialog, { Title, Content }  from "@smui/dialog";
    import IconButton from '@smui/icon-button';
    import Tooltip, { Wrapper } from '@smui/tooltip';
    export let src : string;
    export let alt : string;
    export let title : string;
    let open = false;
    const dialogTitleId = "title";
    const dialogContentId = "content";
</script>