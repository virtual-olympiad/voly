<script lang="ts">
	import MobileLink from "./mobileLink.svelte";
	import * as Sheet from "$lib/components/ui/sheet/index";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { Button } from "$lib/components/ui/button/index";
    import { HamburgerMenu } from "svelte-radix";
    
    import * as config from "$lib/siteConfig";

	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
		>
			<HamburgerMenu class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
            <img src="/vo.png" alt="Virtual Olympiad Logo" class="mr-4 h-4 w-4" />
			<span class="font-bold">Virtual Olympiad</span>
		</MobileLink>
		<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
			<div class="flex flex-col space-y-3">
				{#each config.nav as navItem, index (navItem + index.toString())}
					{#if navItem.href}
						<MobileLink href={navItem.href} bind:open class="text-foreground">
							{navItem.title}
						</MobileLink>
					{/if}
				{/each}
			</div>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>