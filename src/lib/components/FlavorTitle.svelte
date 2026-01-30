<script lang="ts">
	import { useGsap } from "$lib/utils/useGsap";
    import { gsap } from "gsap";
    import { SplitText } from "gsap/all";
    
    useGsap(() => {
        const firstTextSplit = SplitText.create(".first-text-split h1", { type: "chars" });
        const secondTextSplit = SplitText.create(".second-text-split h1", { type: "chars" });

        gsap.from(firstTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 30%",
            }
        });

        gsap.to(".flavor-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 10%",
            }
        });

        gsap.from(secondTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 1%",
            }
        });
    });
</script>

<div class="general-title col-center h-full 2xl:gap-32 xl:gap-2 gap-16">
    <div class="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We Have 6</h1>
    </div>
    <div style="clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);" class="flavor-text-scroll">
        <div class="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
            <h2 class="text-milk">freaking</h2>
        </div>
    </div>
    <div class="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
    </div>
</div>

<style>
    
</style>
