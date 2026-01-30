<script lang="ts">
	import FlavorSlider from "$lib/components/FlavorSlider.svelte";
	import FlavorTitle from "$lib/components/FlavorTitle.svelte";

    
</script>

<section class="flavor-section">
    <div class="h-full flex lg:flex-row flex-col items-center relative">
        <div class="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
            <FlavorTitle />
        </div>
        <div class="h-full">
            <FlavorSlider />
        </div>
    </div>
</section>

<style>
    
</style>
