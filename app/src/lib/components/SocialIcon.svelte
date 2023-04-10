<style>
    div {
        height:100%;
    }
    a {
        height:100%;
        transform: scale(1);
        transition: 0.5;
    }
    a :hover{
        transform: scale(1.2);
        transition:0.25s;
    }
    @keyframes iconClick {
        50% {transform:scale(1.5)}
        100% {transform:scale(1)}
    }
    a > img {
        height:100%;
    }
</style>
<div>
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Wrapper>
            <img src={icon} alt={name}>
            <Tooltip hideDelay={0.25} showDelay={0.5} persistent={false}>{tooltip}</Tooltip>
        </Wrapper>
    </a>
</div>
<script lang="ts">
    export let icon : string;
    export let href : string;
    export let name : string;
    export let tooltip : string;
    import Tooltip, { Wrapper } from '@smui/tooltip';
</script>