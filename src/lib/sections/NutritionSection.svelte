<script lang="ts">
	import { nutrientLists } from '$lib/constants';
	import { useGsap } from '$lib/utils/useGsap';
	import { useMediaQuery } from '$lib/utils/useMediaQuery';
	import { onMount } from 'svelte';
	import { SplitText } from 'gsap/SplitText';
	import gsap from 'gsap';

	const isMobile = useMediaQuery('(max-width: 768px)');
	let nutrientList: { label: string; amount: string }[] = $state([]);
	onMount(() => {
		nutrientList = $isMobile ? nutrientLists.slice(0, 3) : nutrientLists;
	});

	useGsap(() => {
		const titleSplit = SplitText.create('.nutrition-title', { type: 'chars' });
		const paragraphSplit = SplitText.create('.nutrition-section .font-paragraph', {
			type: 'words,lines',
			linesClass: 'paragraph-line'
		});

		const contentTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.nutrition-section',
				start: 'top center'
			}
		});

		contentTl
			.from(titleSplit.chars, {
				yPercent: 100,
				stagger: 0.02,
				ease: 'power2.out'
			})
			.from(paragraphSplit.words, {
				yPercent: 300,
				rotate: 3,
				ease: 'power1.inOut',
				duration: 1,
				stagger: 0.01
			});

		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.nutrition-section',
				start: 'top 80%'
			}
		});

		titleTl.to('.nutrition-text-scroll', {
			duration: 1,
			opacity: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'power1.inOut'
		});
	});
</script>

<div class="nutrition-section">
	<img src="/images/slider-dip.png" alt="" class="w-full object-cover" />

	<img src="/images/big-img.png" alt="" class="big-img" />

	<div class="mt-14 flex flex-col justify-between px-5 md:mt-0 md:flex-row md:px-10">
		<div class="relative inline-block md:translate-y-20">
			<div class="general-title relative flex flex-col items-center justify-center gap-24">
				<div class="place-self-start overflow-hidden">
					<h1 class="nutrition-title">it still does</h1>
				</div>
				<div
					style="clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);"
					class="nutrition-text-scroll place-self-start"
				>
					<div class="inline-block bg-yellow-brown px-3 pt-3 pb-5 md:px-5 md:pt-0">
						<h2 class="text-milk-yellow">Body Good</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="flex translate-y-5 items-center md:justify-center">
			<div class="max-w-md md:max-w-xs">
				<p class="font-paragraph text-lg text-balance md:text-right">
					Milk contains a wide array of nutrients, including vitamins, minerals, and protein and
					this is lactose free
				</p>
			</div>
		</div>

		<div class="nutrition-box">
			<div class="list-wrapper">
				{#each nutrientList as nutrient, index (index)}
					<div class="col-center relative flex-1">
						<div class="">
							<p class="font-paragraph md:text-lg">{nutrient.label}</p>
							<p class="mt-2 font-paragraph text-sm">up to</p>
							<p class="text-2xl font-bold tracking-tighter md:text-4xl">{nutrient.amount}</p>
						</div>
						{#if index != nutrientList.length - 1}
							<div class="spacer-border"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
</style>
