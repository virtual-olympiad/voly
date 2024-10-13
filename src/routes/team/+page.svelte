<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
    import * as Collapsible from '$lib/components/ui/collapsible/index';
	import { Separator } from '$lib/components/ui/separator';
	import { GithubLogo } from 'svelte-radix';
	import {
		Activity,
		Star,
		ChevronDown,
		Plus,
		Circle,
		Heart,
		Gauge,
		Slash,
		Hash,
		ChevronRight,

		ChevronsUpDown

	} from 'lucide-svelte';
	import * as config from '$lib/siteConfig';

	import katex from 'katex';
	import { Content } from '$lib/components/ui/drawer';

    import MemberCard from './MemberCard.svelte';

    const executives: Member[] = [
        {
            display_name: "Charles Ran",
            username: "polarity",
            role: "executive",
            title: "Founder and Lead Developer",
            description: "Charles is an undergraduate student at the University of British Columbia.",
            avatar: "/mango.v3@4x.png",
            href: "https://polarity.sh",
            sponsor_href: "https://github.com/sponsors/polarr"
        }
    ];

    const developers: Member[] = [
        {
            display_name: "Charles Ran",
            username: "polarity",
            role: "executive",
            title: "Executive Developer and System Administrator",
            //description: "Founder of Virtual Olympiad",
            avatar: "/mango.v3@4x.png",
            href: "https://polarity.sh",
            sponsor_href: "https://github.com/sponsors/polarr"
        }
    ];

    const dbhelper: Member[] = [
        {
            display_name: "Charles Ran",
            username: "polarity",
            role: "executive",
            title: "Database Administrator",
            //description: "Founder of Virtual Olympiad",
            avatar: "/mango.v3@4x.png",
            href: "https://polarity.sh",
            sponsor_href: "https://github.com/sponsors/polarr",
            inactive: true
        }
    ];
</script>

<section
	class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 text-center md:py-12 md:pb-8 lg:py-24 lg:pb-20"
>
	<h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
		Meet The Team
	</h1>
	<p class="max-w-[750px] text-balance text-lg text-muted-foreground sm:text-xl">
		By the community, for the community.
	</p>
	<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
		<Button href="#">Contribute</Button>
	</div>
</section>

<section class="max-w-screen-xl flex flex-col space-y-4 text-2xl sm:text-4xl">
    <h1 class="font-bold leading-tight tracking-tighter text-center">
        Administrative Team
    </h1>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 px-4">
        {#each executives as member}
            <MemberCard {member}/>
        {/each}
    </section>

    <h1 class="font-bold leading-tight tracking-tighter text-center">
        Developer Team
    </h1>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 px-4">
        {#each developers as member}
            <MemberCard {member}/>
        {/each}
    </section>

    <h1 class="font-bold leading-tight tracking-tighter text-center">
        Database Team
    </h1>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 px-4">
        {#each dbhelper as member}
            <MemberCard {member}/>
        {/each}
    </section>
</section>