<script lang="ts">
    import { gsap } from 'gsap';
    import { SplitText } from 'gsap/all';
	import { useGsap } from '$lib/utils/useGsap';

    useGsap(() => {
        const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
        const secondMsgSplit = SplitText.create(".second-message", { type: "words" });
        const paragraphSplit = SplitText.create(".message-content p", { 
            type: "words, lines",
            linesClass: "paragraph-line"
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
            }
        });

        gsap.to(secondMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        const revealTimeline = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 60%",
            }
        });
        revealTimeline.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        });

        const paragraphTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            }
        });
        paragraphTimeline.from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.02,
        });
    })
</script>

<section class="message-content">
    <div class="container mx-auto flex-center py-28 relative">
        <div class="size-full">
            <div class="msg-wrapper">
                <h1 class="first-message">Stir up your fearless past and</h1>
    
                <div class="msg-text-scroll" style="clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);">
                    <div class="bg-light-brown md:pb-5 pb-3 px-5">
                        <h2 class="text-red-brown">Fuel Up</h2>
                    </div>
                </div>
    
                <h1 class="second-message">
                    your future with every gulp of Perfect Protein
                </h1>
            </div>
            
            <div class="flex-center md:mt-20 mt-10">
                <div class="max-w-md px-10 flex-center overflow-hidden">
                    <p>
                        Rev up your rebel spirit and feed the adventure of life with SPYLT, where you're one chug away from epic nostalgia and fearless fun.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>