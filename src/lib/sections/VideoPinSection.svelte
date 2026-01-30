<script lang="ts">
	import { useGsap } from "$lib/utils/useGsap";
	import { useMediaQuery } from "$lib/utils/useMediaQuery";
    import { gsap } from "gsap";

    const isMobile = useMediaQuery("(max-width: 768px)");
    let is_mobile: boolean = $state(true);
    
    useGsap(() => {
        if (!$isMobile) {
            is_mobile = false;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "-15% top",
                    end: "200% top",
                    scrub: 1.5,
                    pin: true,
                }
            });
    
            tl.to(".vd-pin-section .video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
                duration: 1,
            });
        }
    });
</script>

<section class="vd-pin-section">
    <div style={is_mobile ? "clip-path: circle(100% at 50% 50%);" : "clip-path: circle(6% at 50% 50%);"} class="size-full video-box">
        <video src="/videos/pin-video.mp4" playsinline muted loop autoplay></video>

        <div class="abs-center md:scale-100 scale-200">
            <img src="/images/circle-text.svg" alt="" class="spin-circle">
            <div class="play-btn">
                <img src="/images/play.svg" alt="" class="size-[3vw] ml-[.5vw]">
            </div>
        </div>
    </div>
</section>

<style>
    
</style>
