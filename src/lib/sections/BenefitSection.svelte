<script lang="ts">
	import ClipPathTitle from '$lib/components/ClipPathTitle.svelte';
	import { useGsap } from '$lib/utils/useGsap';
	import gsap from 'gsap';
	import VideoPinSection from './VideoPinSection.svelte';

	useGsap(() => {
		const revealTl = gsap.timeline({
			delay: 1,
			scrollTrigger: {
				trigger: '.benefit-section',
				start: 'top 60%',
				end: 'top top',
				scrub: 1.5
			}
		});

		revealTl
			.to('.benefit-section .first-title', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				duration: 1,
				opacity: 1,
				ease: 'circ.out'
			})
			.to('.benefit-section .second-title', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				duration: 1,
				opacity: 1,
				ease: 'circ.out'
			})
			.to('.benefit-section .third-title', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				duration: 1,
				opacity: 1,
				ease: 'circ.out'
			})
			.to('.benefit-section .fourth-title', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				duration: 1,
				opacity: 1,
				ease: 'circ.out'
			});
	});
</script>

<section class="benefit-section">
	<div class="container mx-auto pt-20">
		<div class="col-center">
			<p>Unlock the Advantages: <br />Explore the Key Benefits of Choosing SPYLT</p>

			<div class="col-center mt-20">
				<ClipPathTitle
					title="Shelf stable"
					color="#faeade"
					bg="#c88e64"
					class="first-title"
					borderColor="#222123"
				/>
				<ClipPathTitle
					title="Protein + Caffeine"
					color="#222123"
					bg="#faeade"
					class="second-title"
					borderColor="#222123"
				/>
				<ClipPathTitle
					title="Infinitely Recycleable"
					color="#faeade"
					bg="#7f3b2d"
					class="third-title"
					borderColor="#222123"
				/>
				<ClipPathTitle
					title="Lactose free"
					color="#2e2d2f"
					bg="#fed775"
					class="fourth-title"
					borderColor="#222123"
				/>
			</div>

			<div class="mt-10 md:mt-0">
				<p>And much more ...</p>
			</div>
		</div>
	</div>

	<div class="overlay-box relative">
		<VideoPinSection />
	</div>
</section>

<style>
</style>
