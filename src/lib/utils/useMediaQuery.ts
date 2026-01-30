// useMediaQuery.ts
import { readable } from "svelte/store";

export function useMediaQuery(query: string) {
  return readable(false, (set) => {
    const mediaQuery = window.matchMedia(query);

    // Initial value
    set(mediaQuery.matches);

    // Listener
    const handler = (event: MediaQueryListEvent) => set(event.matches);
    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handler);
  });
}
