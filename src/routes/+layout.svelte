<script lang="ts">
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import type { PageData } from './$types';
	import './styles.scss';

	export let data: PageData;
</script>

<div class="app font-montserrat">
	<Navigation navItems={data.navigationItems} />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	main {
		@include breakpoints(mobile) {
			display: none;
		}
		height: calc(100vh - 64px);
	}
</style>
