<style>
    .list{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width: 100%;
        /* gap:1%; */
        position:relative;
        
    }
</style>

<div class="list">
    <WorkItem 
    src="https://img.itch.zone/aW1nLzExMTc0Nzk2LnBuZw==/315x250%23c/MdUvSy.png"
    title="Touhou Ice Hockey Festival (2023 Feb)"
    projectPage="https://chocola-mint.itch.io/touhou-ice-hockey-festival">
    Submission to Touhou Fan Game Jam 10.
    <br><br>
    When air hockey meets shooters. Given the short timeframe (4 days), it was quite a complete project. 
    Notably, it got 1st in Visuals and Music, and 3rd in Story and Concept. I was the writer, designer, and programmer.
    <br><br>
    See also: <OpenInNewTab href="https://www.youtube.com/watch?v=tkOyJ3bXNLQ">Promotion Video</OpenInNewTab>
    </WorkItem>
    <WorkItem 
    src={thumbnailSortingBattle} 
    title="Sorting Battle (2022 Fall)"
    projectPage="https://chocola-mint.itch.io/sorting-battle">
    Final project for an introductory Machine Learning course.
    <br><br>
    This project is special in that it uses Unity's low-level Barracuda API to run an ONNX model trained using an external Python environment.
    The Python environment is built in a way that meets the same specs as the Unity application. To this end, unit testing is used extensively.
    <br><br>
    See also: 
    <ul>
        <li>
            <OpenInNewTab href="https://chocola-mint.github.io/blog/gamedev/sorting-battle-doc/">The Making of Sorting Battle</OpenInNewTab>
        </li>
        <li>
            <OpenInNewTab href="https://github.com/chocola-mint/Sorting-Battle">Source Code (GitHub)</OpenInNewTab>
        </li>
    </ul> 
    </WorkItem>
    <WorkItem 
    src="https://img.itch.zone/aW1hZ2UvMTU5MjM3NC85MzE3NDg1LnBuZw==/original/EP4FIC.png" 
    title="Touhou Tiny Trouble (2022 Jun)"
    projectPage="https://chocola-mint.itch.io/touhou-tiny-trouble">
    Submission to Touhou Pride Game Jam 4.
    <br><br>
    Unlike most of the games I've been involved with, this one's concept came mostly from the artist instead.
    I handled the engine-side design and programming.
    <br><br>
    See also: <OpenInNewTab href="https://chocola-mint.github.io/blog/gamedev/tiny-trouble-postmortem/">The Making of Touhou Tiny Trouble</OpenInNewTab>
    </WorkItem>
    <WorkItem 
    src="https://img.itch.zone/aW1hZ2UvMTM4NzI0OC84MDgyOTQwLnBuZw==/original/Uv53Jz.png" 
    title="Flight to Paradise (2022 Feb)"
    projectPage="https://chocola-mint.itch.io/flight-to-paradise">
    Submission to Mini Jam 99: Birds.
    <br><br>
    A short game for Mini Jam 99, where blue birds try to fly their way to freedom through a labyrinth of gigantic sawblades. For this project, I worked alone.
    <br><br>
    See also: <OpenInNewTab href="https://chocola-mint.github.io/blog/gamedev/flight-to-paradise-doc/">The Making of Flight to Paradise</OpenInNewTab>
    </WorkItem>
    <WorkItem 
    src="https://img.itch.zone/aW1nLzc5MzU3NzkucG5n/315x250%23c/yEQqln.png" 
    title="Lucid Dive (2021 Fall)"
    projectPage="https://chocola-mint.itch.io/lucid-dive">
    The final project for a Game Programming course. I headed the design and programming of this project.
    <br><br>
    The game was submitted to a local competition called the Innovation Game Design competition, 
    and came in 2nd for best graphics and 1st for best sound design.
    <br><br>
    See also: <OpenInNewTab href="https://chocola-mint.github.io/blog/gamedev/lucid-dive-postmortem/">Postmortem</OpenInNewTab>
    </WorkItem>

</div>
<script>
	import OpenInNewTab from "$lib/components/OpenInNewTab.svelte";
	import WorkItem from "$lib/components/WorkItem.svelte";
    import Paper, { Content, Title } from "@smui/paper";
    import thumbnailSortingBattle from "$lib/assets/sorting-battle.png";

</script>
