<a href={href}  target="_blank" rel="noopener noreferrer" style={style}>
<slot/>
</a> 
<script lang="ts">
    export let href : string;
    export let style : string = "";
</script>