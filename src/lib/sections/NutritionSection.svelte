<script lang="ts">
	import { nutrientLists } from "$lib/constants";
	import { useGsap } from "$lib/utils/useGsap";
	import { useMediaQuery } from "$lib/utils/useMediaQuery";
	import { onMount } from "svelte";
    import { SplitText } from "gsap/SplitText";
    import { gsap } from "gsap";

    const isMobile = useMediaQuery("(max-width: 768px)");
    let nutrientList: { label: string, amount: string }[] = $state([]);
    onMount(() => {
        nutrientList = $isMobile ? nutrientLists.slice(0, 3) : nutrientLists;
    });

    useGsap(() => {
        const titleSplit = SplitText.create(".nutrition-title", { type: "chars" });
        const paragraphSplit = SplitText.create(".nutrition-section .font-paragraph", { 
            type: "words,lines", 
            linesClass: "paragraph-line" 
        });

        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top center",
            }
        });

        contentTl.from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: "power2.out",
        }).from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01
        });

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 80%",
            }
        });
        
        titleTl.to(".nutrition-text-scroll", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
        });
    });
</script>

<div class="nutrition-section">
    <img src="/images/slider-dip.png" alt="" class="w-full object-cover">

    <img src="/images/big-img.png" alt="" class="big-img">

    <div class="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div class="relative inline-block md:translate-y-20">
            <div class="general-title relative flex flex-col justify-center items-center gap-24">
                <div class="overflow-hidden place-self-start">
                    <h1 class="nutrition-title">it still does</h1>
                </div>
                <div style="clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);" class="nutrition-text-scroll place-self-start">
                    <div class="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                        <h2 class="text-milk-yellow">Body Good</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex md:justify-center items-center translate-y-5">
            <div class="md:max-w-xs max-w-md">
                <p class="text-lg md:text-right text-balance font-paragraph">
                    Milk contains a wide array of nutrients, including vitamins, minerals, and protein and this is lactose free
                </p>
            </div>
        </div>

        <div class="nutrition-box">
            <div class="list-wrapper">
                {#each nutrientList as nutrient, index (index)}
                    <div class="relative flex-1 col-center">
                        <div class="">
                            <p class="md:text-lg font-paragraph">{nutrient.label}</p>
                            <p class="font-paragraph text-sm mt-2">up to</p>
                            <p class="text-2xl md:text-4xl tracking-tighter font-bold">{nutrient.amount}</p>
                        </div>
                        {#if index != nutrientList.length - 1}
                            <div class="spacer-border"></div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    
</style>
