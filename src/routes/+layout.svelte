<style>
    .bg{
        /* Set rules to fill background */
        min-height: 100%;
        min-width: 1024px;
            
        /* Set up proportionate scaling */
        width: 100%;
        height: auto;
            
        /* Set up positioning */
        position: fixed;
        top: 0;
        left: 0;
        background-color:rgb(151, 175, 175);
    }
    .main{
        display:flex;
        flex-direction: column;
        align-items:center;
    }
    header{
        display:flex;
        flex-direction: column;
        align-items:center;
        position: relative;
        line-height:1em;
        background-size: cover;
        background-blend-mode: lighten;
        background-position: center;
        background-color:rgba(240, 248, 255, 0.664);
        filter:drop-shadow(0px, 10px, 5px, rgba(213, 249, 255, 1));
    }
    .pfp{
        height:20vh;
        width:20vh;
        border-radius: 50%;
        filter:drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
        display:inline-block;
        background-color:white;
    }
    .socials{
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction: row;
        width: 100vw;
        height:6vh;
        gap:2em;
    }
    @media screen and (max-width: 600px){
        .socials{
            gap:2em;
        }
    }
    .content{
        max-width: 50em;
        width: 80vw;
        position: relative;
        top: 5vh;
        margin-left: 1em;
        margin-right: 1em;
    }
    footer {
        margin-top:5em;
        min-height: 20vh;
        width: 100%;
        
        background-color:darkslategray;
        color:rgb(136, 175, 175);
        position: relative;
    }
    
</style>


<div class="root">
    <div class="bg"></div>
    <header style="background-image:url({banner})">
        <div style="height:7.5vh"/>
        <img src={pfp} class="pfp" alt="Profile">
        <br>
        <h1>ChocolaMint</h1>
        <h2>{TL.role}</h2>
        <div class="socials">
            <SocialIcon 
            icon={iconItch} 
            name="Itch"
            href="https://chocola-mint.itch.io" 
            tooltip={TL.socials.itch.tooltip}/>
            <SocialIcon 
            icon={iconTwitter} 
            name="Twitter"
            href="https://twitter.com/mintchocolamint" 
            tooltip={TL.socials.twitter.tooltip}/>
            <SocialIcon 
            icon={iconYoutube} 
            name="YouTube" 
            href="https://www.youtube.com/@mintchocolamint" 
            tooltip={TL.socials.youtube.tooltip}/>
            <SocialIcon 
            icon={iconGithub} 
            name="GitHub" 
            href="https://github.com/chocola-mint" 
            tooltip={TL.socials.github.tooltip}/>
            <SocialIcon 
            icon={iconPixiv} 
            name="Pixiv" 
            href="https://www.pixiv.net/users/35917669" 
            tooltip={TL.socials.pixiv.tooltip}/>            
        </div>
        <br>
    </header>
    <div class="main">
        <Navbar pages={{
            // Format: <tab key>: { label: <tab label>, route: <slug> }
            about: { label: `${TL.pages.aboutMe.label}`, route: "/", tooltip: `${TL.pages.aboutMe.tooltip}` },
            works: { label: `${TL.pages.works.label}`, route: "/works", tooltip: `${TL.pages.works.tooltip}` },
            talks: { label: `${TL.pages.talks.label}`, route: "/talks", tooltip: `${TL.pages.talks.tooltip}` },
            contact: { label: `${TL.pages.contact.label}`, route: "/contact", tooltip: `${TL.pages.contact.tooltip }` },
        }}/>
        <div class="content">
            <slot></slot>
        </div>
        <br>
    </div>
    <footer>
        <div style="position:relative;top:2em;text-align:center;">
            ChocolaMint・2023
            <br>
            <OpenInNewTab href="https://github.com/chocola-mint/chocola-mint.github.io" style="color:rgb(116, 155, 155)">Source Code</OpenInNewTab>
        </div>
    </footer>
</div>


<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import SocialIcon from '$lib/components/SocialIcon.svelte';
    import iconItch from '$lib/assets/itch-io.svg';
    import iconTwitter from '$lib/assets/twitter.svg';
    import iconYoutube from '$lib/assets/youtube.svg';
    import iconGithub from '$lib/assets/github.svg';
    import iconPixiv from '$lib/assets/pixiv.png';
    import pfp from '$lib/assets/pfp.png';
    import banner from '$lib/assets/banner.png';
    import { GetTL } from './TL';
	import { locale } from '$lib/stores/localization';
	import OpenInNewTab from '$lib/components/OpenInNewTab.svelte';
    let TL = GetTL($locale);
</script>