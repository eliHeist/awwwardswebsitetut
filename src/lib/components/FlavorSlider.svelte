<script lang="ts">
	import { flavorlists } from '$lib/constants';
	import { useGsap } from '$lib/utils/useGsap';
	import { useMediaQuery } from '$lib/utils/useMediaQuery';
	import gsap from 'gsap';

	let sliderRef: HTMLDivElement;

	const isTablet = useMediaQuery('(max-width: 1024px)');

	useGsap(() => {
		const scrollAmount = sliderRef.scrollWidth - window.innerWidth;

		if (!$isTablet) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.flavor-section',
					start: '2% top',
					end: `+=${scrollAmount + 1500}px`,
					scrub: true,
					pin: true
				}
			});

			tl.to('.flavor-section', {
				x: `-${scrollAmount + 1500}px`,
				ease: 'power1.inOut'
			});
		}

		const titleTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.flavor-section',
				start: 'top top',
				end: 'bottom 80%',
				scrub: true
			}
		});

		titleTimeline
			.to('.first-text-split', {
				xPercent: -30,
				ease: 'power1.inOut'
			})
			.to(
				'.flavor-text-scroll',
				{
					xPercent: -22,
					ease: 'power1.inOut'
				},
				'<'
			)
			.to(
				'.second-text-split',
				{
					xPercent: -10,
					ease: 'power1.inOut'
				},
				'<'
			);
	});
</script>

<div class="slider-wrapper" bind:this={sliderRef}>
	<div class="flavors">
		{#each flavorlists as flavor (flavor.name)}
			<div
				class={`relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[90vw] lg:h-[70vh] lg:w-[50vw] ${flavor.rotation}`}
			>
				<img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} class="absolute bottom-0" />

				<img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} class="drinks" />

				<img src={`/images/${flavor.color}-elements.webp`} alt={flavor.name} class="elements" />

				<h1>{flavor.name}</h1>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
