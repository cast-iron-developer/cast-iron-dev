<script>
	// imports
	export let navItems, activeUrl;
</script>

<div id="navigation" class="basis-2/5 max-sm:hidden">
	<ul class="flex flex-row flex-nowrap justify-around content-center align-center">
		{#each navItems as { title, href }}
			<li
				class={activeUrl === href
					? 'group active-tab flex-auto text-center only-md:text-xl lg:text-2xl'
					: 'group flex-auto text-center only-md:text-xl lg:text-2xl max-sm:w-full'}
			>
				<a
					class="hover:bg-quarternary-200 p-4 block md:text-w group-[.active-tab]:bg-quarternary-200"
					{href}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
