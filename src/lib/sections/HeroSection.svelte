<script lang="ts">
	import gsap from 'gsap';
	import SplitText from 'gsap/dist/SplitText';
	import { useGsap } from '$lib/utils/useGsap';

	useGsap(() => {
		const titleSplit = SplitText.create('.hero-title', { type: 'chars' });

		const tl = gsap.timeline({ delay: 1 });

		tl.to('.hero-content', {
			opacity: 1,
			y: 0,
			ease: 'back.inOut'
		})
			.to(
				'.hero-text-scroll',
				{
					duration: 1,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					ease: 'circ.out'
				},
				'-=0.5'
			)
			.from(
				titleSplit.chars,
				{
					yPercent: 200,
					stagger: 0.02,
					ease: 'power2.out'
				},
				'-=0.5'
			);

		const heroTL = gsap.timeline({
			scrollTrigger: {
				trigger: '.hero-container',
				start: '10% top',
				end: 'bottom top',
				scrub: true
				// pin: true,
				// markers: true
			}
		});
		heroTL.to('.hero-container', {
			rotate: 7,
			scale: 0.9,
			yPercent: 30,
			ease: 'power1.inOut'
		});
	});
</script>

<section class="bg-main-bg">
	<div class="hero-container">
		<img
			src="/images/static-img.png"
			alt="hero-img"
			class="object-auto absolute bottom-0 left-1/2 -translate-x-1/2 scale-100 md:scale-150"
		/>
		<div class="hero-content opacity-0">
			<div class="overflow-hidden">
				<h1 class="hero-title">Freaking Delicious</h1>
			</div>
			<div class="hero-text-scroll" style="clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);">
				<div class="hero-subtitle">
					<h1>Protein + Caffein</h1>
				</div>
			</div>
			<h2>
				Live life to the fullest with SPYLT: Shatter boredom and embrace your inner kid with every
				deliciously smooth chug.
			</h2>

			<div class="hero-button">Chug a SPYLT</div>
		</div>
	</div>
</section>
