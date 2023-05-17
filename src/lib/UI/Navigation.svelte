<script lang="ts">
	export let withHamburgerMenu = false;
</script>

{#if withHamburgerMenu}
	<input type="checkbox" class="hamburger-checkbox hidden" id="hamburger-checkbox" />
	<label
		for="hamburger-checkbox"
		class="
      absolute
      right-6
      top-11
      z-50
      h-11
      w-11
      bg-[url('/images/icon-hamburger.svg')]
      bg-top
      bg-no-repeat
      md:hidden
    "
	/>
{/if}

<div class="nav-wrapper">
	<img src="/images/logo.svg" alt="" class="logo" />
	<nav>
		<slot>
			<a href="/" class="hoverline">About</a>
			<a href="/" class="hoverline">Careers</a>
			<a href="/" class="hoverline">Events</a>
			<a href="/" class="hoverline">Products</a>
			<a href="/" class="hoverline">Support</a>
		</slot>
	</nav>
</div>
