<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';

    import { gsap } from "gsap";
    import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
	import { onMount } from 'svelte';

    onMount(() => {
        gsap.registerPlugin(ScrollSmoother);

        ScrollSmoother.create({
            smooth: 2,
            effects: true,
        });
    });

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main>
    <NavBar />
    <div id="smooth-wrapper">
        <div id="smooth-content">
            {@render children()}
        </div>
    </div>
</main>
