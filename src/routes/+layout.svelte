<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';

    import { gsap } from "gsap";
    import { SplitText } from "gsap/all";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { onMount } from 'svelte';

    onMount(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger);
    });

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main>
    <NavBar />
    {@render children()}
</main>
