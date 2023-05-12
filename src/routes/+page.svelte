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
		px-6
		pt-10
		md:bg-[url('/images/desktop/image-hero.jpg')]
		md:bg-top
		md:pt-16
	"
>
	<!-- Translucent overlay -->
	<div
		class="
			absolute
			bottom-0
			left-0
			right-0
			top-0
			z-0
		bg-black/40
		"
	/>
	<!-- Container flex -->
	<div
		class="
			relative
			mx-auto
			flex
			max-w-6xl
			flex-col
			items-start
			gap-40
			md:gap-32
		"
	>
		<!-- Navigation -->
		<div
			class="
				flex
				w-full
				justify-between
			"
		>
			<img
				src="/images/logo.svg"
				alt=""
				class="
					w-36
					grow-0
					md:w-48
				"
			/>
			<div
				class="
					hidden
					md:block

				"
			>
				<nav
					class="
						flex
						h-full
						w-96
						flex-row
						items-center
						justify-between
						leading-relaxed
						text-white
					"
				>
					<a href="/">About</a>
					<a href="/">Careers</a>
					<a href="/">Events</a>
					<a href="/">Products</a>
					<a href="/">Support</a>
				</nav>
			</div>
		</div>
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
				md:text-7xl
			"
		>
			Immersive experiences that deliver
		</h1>
	</div>
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
				text-center
				md:col-start-2
				md:col-end-4
				md:row-start-1
				md:pl-8
				md:pt-8
				md:text-left
				lg:pl-24
				lg:pt-24
			"
		>
			<h2 class="section-title">The leader in interactive VR</h2>
			<p
				class="
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

<!-- Our creations -->

<!-- See all -->

<!-- Deep earth -->
<!-- Night arcade -->
<!-- Soccer team VR -->
<!-- The grid -->
<!-- From up above VR -->
<!-- Pocket borealis -->
<!-- The curiosity -->
<!-- Make it fisheye -->

<!-- About -->
<!-- Careers -->
<!-- Events -->
<!-- Products -->
<!-- Support -->

<!-- © 2021 Loopstudios. All rights reserved. -->
