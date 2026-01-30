// useGsap.ts
import { onMount, onDestroy } from "svelte";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * A Svelte-friendly GSAP helper that runs your setup on mount,
 * auto-refreshes ScrollTrigger, and cleans up on destroy.
 */
export function useGsap(setup: () => (() => void) | void) {
    let cleanup: (() => void) | void;

    onMount(() => {
        cleanup = setup();
        ScrollTrigger.refresh();
    });

    onDestroy(() => {
        cleanup?.();
    });
}
