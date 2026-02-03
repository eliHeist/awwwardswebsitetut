<script lang="ts">
	import { cards } from '$lib/constants';
	import { useGsap } from '$lib/utils/useGsap';
	import gsap from 'gsap';

	const vdRef: HTMLVideoElement[] = $state([]);

	const handlePlay = (index: number) => {
		const video = vdRef[index];
		if (video) {
			video.play();
		}
	};

	const handlePause = (index: number) => {
		const video = vdRef[index];
		if (video) {
			video.pause();
		}
	};

	useGsap(() => {
		gsap.set('.testimonials-section', {
			marginTop: '-140vh'
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.testimonials-section',
				start: 'top bottom',
				end: '200% top',
				scrub: true
			}
		});
		tl.to('.testimonials-section .first-title', {
			xPercent: 70
		})
			.to(
				'.testimonials-section .second-title',
				{
					xPercent: -70
				},
				'<'
			)
			.to(
				'.testimonials-section .third-title',
				{
					xPercent: -50
				},
				'<'
			);

		const pinTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.testimonials-section',
				start: '10% top',
				end: '200% top',
				scrub: 1.5,
				pin: true
			}
		});
		pinTl.from('.testimonials-section .vd-card', {
			yPercent: 150,
			stagger: 0.2,
			ease: 'power1.inOut'
		});
	});
</script>

<div class="testimonials-section">
	<div class="absolute flex size-full flex-col items-center pt-[5vw]">
		<h1 class="first-title text-black">What's</h1>
		<h1 class="second-title text-light-brown">Everyone</h1>
		<h1 class="third-title text-black">Talking</h1>
	</div>
	<div class="pin-box">
		{#each cards as card, index (index)}
			<div
				class={`vd-card ${card.translation} ${card.rotation}`}
				role="img"
				onmouseenter={() => handlePlay(index)}
				onmouseleave={() => handlePause(index)}
			>
				<video
					src={card.src}
					bind:this={vdRef[index]}
					playsinline
					muted
					loop
					class="size-full object-cover"
				></video>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
