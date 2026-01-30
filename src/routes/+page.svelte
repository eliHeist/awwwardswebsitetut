<script lang="ts">
	import BenefitSection from "$lib/sections/BenefitSection.svelte";
import FlavorSection from "$lib/sections/FlavorSection.svelte";
	import FooterSection from "$lib/sections/FooterSection.svelte";
	import HeroSection from "$lib/sections/HeroSection.svelte";
	import MessageSection from "$lib/sections/MessageSection.svelte";
	import NutritionSection from "$lib/sections/NutritionSection.svelte";
	import TestimonialSection from "$lib/sections/TestimonialSection.svelte";
</script>

<HeroSection />
<MessageSection />
<FlavorSection />
<NutritionSection />
<div>
    <BenefitSection />
    <TestimonialSection />
</div>
<FooterSection />
