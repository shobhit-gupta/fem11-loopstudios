<script>
	import Navigation from '$lib/UI/Navigation.svelte';

	const portfolio = [
		{
			title: 'Deep\nEarth',
			image: 'deep-earth'
		},
		{
			title: 'Night\nArcade',
			image: 'night-arcade'
		},
		{
			title: 'Soccer\nTeam VR',
			image: 'soccer-team'
		},
		{
			title: 'The\ngrid',
			image: 'grid'
		},
		{
			title: 'From Up\nAbove VR',
			image: 'from-above'
		},
		{
			title: 'Pocket\nBorealis',
			image: 'pocket-borealis'
		},
		{
			title: 'The\nCuriosity',
			image: 'curiosity'
		},
		{
			title: 'Make it\nFisheye',
			image: 'fisheye'
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap"
		rel="stylesheet"
	/>
	<title>Loopstudios</title>
</svelte:head>

<header
	class="
		relative
		h-[650px]
		bg-[url('/images/mobile/image-hero.jpg')]
		bg-cover
		bg-center
		bg-no-repeat
		md:bg-[url('/images/desktop/image-hero.jpg')]
		md:bg-top
	"
>
	<!-- Translucent overlay -->
	<div
		class="
			overlay
			bg-black/40
		"
	/>
	<!-- Container flex -->
	<section
		class="
			relative
			flex
			flex-col
			items-start
			gap-40
			md:gap-32
		"
	>
		<!-- Navigation -->
		<Navigation withHamburgerMenu />

		<!-- Page Heading -->
		<h1
			class="
				page-title
				max-w-[650px]
				border-2
				border-white
				p-6
				text-white
				md:p-10
			"
		>
			Immersive experiences that deliver
		</h1>
	</section>
</header>

<section>
	<div
		class="
			grid
			grid-cols-1
			items-center
			gap-12
			md:grid-cols-[7fr_2fr_5fr]
			md:grid-rows-1
			md:items-end
			md:gap-0
		"
	>
		<img
			src="/images/mobile/image-interactive.jpg"
			alt=""
			class="
				w-full
				bg-black
				md:col-start-1
				md:col-end-3
				md:row-start-1
			"
		/>
		<div
			class="
				bg-white
				px-6
				md:col-start-2
				md:col-end-4
				md:row-start-1
				md:pl-8
				md:pt-8
				lg:pl-24
				lg:pt-24
			"
		>
			<h2 class="section-title">The leader in interactive VR</h2>
			<p
				class="
					text-center-md-left
					mt-4
					text-darkGray
					md:mt-6
				"
			>
				Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
				some of the best companies around the globe. Our award-winning creations have transformed
				businesses through digital experiences that bind to their brand.
			</p>
		</div>
	</div>
</section>

<section
	class="
		grid
		grid-cols-1
		gap-6
		md:grid-cols-4
		md:gap-[30px]
	"
>
	<h2
		class="
			section-title
			mb-6
			md:col-span-3
		"
	>
		Our Creations
	</h2>

	{#each portfolio as { title, image }}
		<article class="relative order-2 md:order-3">
			<picture>
				<source media="(min-width: 768px)" srcset="/images/desktop/image-{image}.jpg" />
				<img src="/images/mobile/image-{image}.jpg" alt="" class="w-full" />
			</picture>
			<!-- Translucent overlay -->
			<div
				class="
					overlay
					bg-gradient-to-b
					from-black/0
					to-black/60
				"
			/>
			<h3
				class="
					project-title
					absolute
					inset-x-0
					bottom-0
					whitespace-pre
					px-5
					py-5
					text-white
					md:py-8
					lg:pl-10
				"
			>
				{title}
			</h3>
		</article>
	{/each}

	<button
		class="
			order-3
			mt-2.5
			max-w-fit
			justify-self-center
			border
			border-veryDarkGray
			px-10
			py-3
			text-sm
			uppercase
			tracking-[5px]
			hover:bg-black
			hover:text-white
			active:bg-black
			active:text-white
			md:order-2
			md:mb-11
			md:mt-1
			md:justify-self-end
		"
	>
		See All
	</button>
</section>

<footer
	class="
		bg-black
		py-14
		md:py-11
	"
>
	<div
		class="
			flex
			flex-col
			items-center
			justify-between
			gap-12
			text-white
			md:flex-row
		"
	>
		<!-- Navigation -->
		<Navigation />
		<div
			class="
				flex
				flex-col
				items-center
				gap-4
				md:items-end
				md:gap-6
			"
		>
			<div
				class="
					flex
					space-x-4
				"
			>
				<a href="/" class="hoverline"><img src="/images/icon-facebook.svg" alt="" /></a>
				<a href="/" class="hoverline"><img src="/images/icon-twitter.svg" alt="" /></a>
				<a href="/" class="hoverline"><img src="/images/icon-pinterest.svg" alt="" /></a>
				<a href="/" class="hoverline"><img src="/images/icon-instagram.svg" alt="" /></a>
			</div>
			<p class="text-darkGray">© 2021 Loopstudios. All rights reserved.</p>
		</div>
	</div>
</footer>
