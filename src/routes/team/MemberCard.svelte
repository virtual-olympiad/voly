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

    export let member: Member; 

    let { display_name, username, role, title, description, avatar, href, sponsor_href, inactive } = member;

    const roleTitle = (role: memberRole) => {
        if (role == "executive"){
            return null;
        }

        switch(role){
            case 'developer':
                return "Developer";
            case 'db-maintainer':
                return "Database Maintainer";
            case 'db-volunteer':
                return "Database Volunteer";
        }
    };
</script>

<Card.Root class={"flex flex-col flex-shrink justify-between" + (inactive ? " bg-muted":"")}>
    <Card.Header>
        <div class={"flex items-center gap-4" + (inactive ? " text-muted-foreground":"")}>
            <Avatar.Root class={"flex h-9 w-9" + (inactive ? " opacity-50":"")}>
                <Avatar.Image src={avatar} alt="Avatar" />
                <Avatar.Fallback>{(display_name?.[0] ?? username[0]).toUpperCase()}</Avatar.Fallback>
            </Avatar.Root>
            <div>
                <Card.Title>
                    {#if display_name}
                        {display_name} <span class="text-muted-foreground text-sm">(@{username})</span>
                    {:else}
                        {username}
                    {/if}
                </Card.Title>
                <Card.Description>
                    {(inactive ? "Former ":"") + (roleTitle(role) ?? title)}
                </Card.Description>
            </div>
        </div>
    </Card.Header>
    <Card.Content>
        <p class="text-sm">
            {description ?? ""}
        </p>
    </Card.Content>
    <Card.Footer class="flex">
        {#if sponsor_href}
            {#if inactive}
                <Button variant="outline" target="_blank" rel="noreferrer" disabled>
                    <Heart class="mr-2 h-4 w-4" />
                    Sponsor
                </Button>
            {:else}
                <Button variant="outline" target="_blank" rel="noreferrer" href={sponsor_href}>
                    <Heart class="mr-2 h-4 w-4" />
                    Sponsor
                </Button>
            {/if}
        {/if}
        {#if inactive}
            <Button class="ml-auto" disabled>Learn More</Button>
        {:else}
            <Button href={href} class="ml-auto">Learn More</Button>
        {/if}
    </Card.Footer>
</Card.Root>