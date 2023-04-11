<style>
    .item {
        cursor: pointer;
        width: calc(90% / 3);
        aspect-ratio : 1 / 1;
        margin:1%;
        background-size: cover;
        background-position: center;
        filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2))   
    }
    @media screen and (max-width: 1000px){
        .item{
        width: 45%;
        }
    }
    @media screen and (max-width: 600px){
        .item{
        width: 100%;
        margin:5%;
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
            <br><br>
            <Button variant="raised" href={projectPage} target="_blank" rel="noopener noreferrer">
                <Label>Project Page</Label>
            </Button>
    </Content>
</Dialog>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item" use:Ripple={{ surface: true }} tabindex="0" role="button" 
aria-pressed="false"
style="background-image: url({src})"
on:click={() => (open = true)}
on:keydown={e => {
    if(e.key === "Enter" || e.key === "Space") open = true;
}}>
</div>
<script lang="ts">
    import Ripple from "@smui/ripple";
    import Dialog, { Title, Content }  from "@smui/dialog";
    import IconButton from '@smui/icon-button';
    import Button, { Label } from "@smui/button";
    export let src : string;
    export let title : string;
    export let projectPage : string;
    let open = false;
    const dialogTitleId = "title";
    const dialogContentId = "content";
</script>