<script lang="ts">
	import { flavorlists } from "$lib/constants";
	import { useGsap } from "$lib/utils/useGsap";
    import { gsap } from "gsap";

    let sliderRef: HTMLDivElement;

    useGsap(()=> {
        const scrollAmount = sliderRef.scrollWidth - window.innerWidth;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmount + 1500}px`,
                scrub: true,
                pin: true,
            }
        });

        tl.to(".flavor-section", {
            x: `-${scrollAmount + 1500}px`,
            ease: "power1.inOut",
        });
    });
</script>

<div class="slider-wrapper" bind:this={sliderRef}>
    <div class="flavors">
        {#each flavorlists as flavor (flavor.name)}
            <div class={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                <img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} class="absolute bottom-0">

                <img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} class="drinks">

                <img src={`/images/${flavor.color}-elements.webp`} alt={flavor.name} class="elements">

                <h1>{flavor.name}</h1>
            </div>
        {/each}
    </div>
</div>

<style>
    
</style>
