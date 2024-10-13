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
</script>

<section
	class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 text-center md:py-12 md:pb-8 lg:py-24 lg:pb-20"
>
	<img src="/vo.png" alt="Virtual Olympiad Logo" class="h-12 w-12" />
	<h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
		Virtual Olympiad
	</h1>
	<p class="max-w-[750px] text-balance text-lg text-muted-foreground sm:text-xl">
		Hosted platforms, APIs and tools for Science Olympiads.
	</p>
	<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
		<Button href="/about">About VO</Button>
		<Button variant="outline" target="_blank" rel="noreferrer" href={config.links.github}>
			<GithubLogo class="mr-2 h-4 w-4" />
			GitHub
		</Button>
	</div>
</section>

<section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
	<Card.Root class="flex w-[350px] flex-col justify-between">
		<Card.Header>
			<Card.Title>Compete, Practice, Together.</Card.Title>
			<Card.Description>
				Create extensively customizable multiplayer mocks on the Virtual Olympiad Arena (VOA). Play in Free-for-all or Team
				formats with lobbies up to 16 people.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<Card.Root>
				<Card.Content class="p-3">
					<div class="grid gap-4">
						<div class="flex items-center gap-4">
							<Avatar.Root class="hidden h-9 w-9 sm:flex">
								<Avatar.Image src="/mango.v3@4x.png" alt="Avatar" />
								<Avatar.Fallback>M</Avatar.Fallback>
							</Avatar.Root>
							<div class="grid gap-1">
								<p class="text-sm font-medium leading-none">Mango</p>
								<p class="text-sm text-muted-foreground">@polarity</p>
							</div>
							<Badge variant="outline" class="hidden sm:block">Host</Badge>
							<div class="ml-auto font-medium">136/150</div>
						</div>
						<Separator />
						<div class="flex items-center gap-4">
							<Avatar.Root class="hidden h-9 w-9 sm:flex">
								<Avatar.Image src="/" alt="Avatar" />
								<Avatar.Fallback>O</Avatar.Fallback>
							</Avatar.Root>
							<div class="grid gap-1">
								<p class="text-sm font-medium leading-none">Orz Person</p>
								<p class="text-sm text-muted-foreground">@orz</p>
							</div>
							<div class="ml-auto font-medium">150/150</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<p class="my-2 text-sm font-semibold">Customize</p>
			<Card.Description>
				Fine-tune the parameters of your problemset with ease. Whether's it's allocated time,
				problem difficulty, point distribution, contest sources, customize to your heart's content.
			</Card.Description>
			<p class="my-2 text-sm font-semibold">Modes <Badge variant="secondary">New</Badge></p>
			<Card.Description
				>From your Standard timed exam to Relay teamwork to head-to-head face-offs in Showdown, VOLY
				now has it all.</Card.Description
			>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button variant="outline" target="_blank" rel="noreferrer" href={config.links.github_voa}>
				<GithubLogo class="mr-2 h-4 w-4" />
				GitHub
			</Button>
			<Button href={config.links.voa}>Play Arena</Button>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="flex w-[350px] flex-col justify-between">
		<Card.Header>
			<Card.Title>Problems, All The Problems.</Card.Title>
			<Card.Description
				>Access our massive schemaful collection of indexed contest problems, fully categorized with
				tags, difficulty, sources, etc. AMC, IPhO, Classics; you name it, Virtual Olympiad Database (VODB) probably has it.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<Card.Root>
				<Card.Header>
					<Breadcrumb.Root>
						<Breadcrumb.List>
							<Breadcrumb.Item>
								<Breadcrumb.Link>IMO</Breadcrumb.Link>
							</Breadcrumb.Item>
							<Breadcrumb.Separator />
							<Breadcrumb.Item>
								<Breadcrumb.Link>2022</Breadcrumb.Link>
							</Breadcrumb.Item>
						</Breadcrumb.List>
					</Breadcrumb.Root>
					<div class="grid grid-cols-[1fr_110px] items-center gap-4 space-y-0">
						<div>
							<Card.Title>IMO 2022 Problem 3</Card.Title>
						</div>
						<div
							class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground"
						>
							<Button variant="secondary" class="px-3 shadow-none">
								<Heart class="mr-2 h-4 w-4" />
								Like
							</Button>
							<Separator orientation="vertical" class="h-[20px]" />
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<Button builders={[builder]} variant="secondary" class="px-2 shadow-none">
										<ChevronDown class="h-4 w-4 text-secondary-foreground" />
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-[200px]" align="end">
									<DropdownMenu.Label>Add to Collection</DropdownMenu.Label>
									<DropdownMenu.Separator />
									<DropdownMenu.CheckboxItem checked>My TODO</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Fun Problems</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Classics</DropdownMenu.CheckboxItem>
									<DropdownMenu.Separator />
									<DropdownMenu.Item>
										<Plus class="mr-2 h-4 w-4" /> Create Collection
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</div>
				</Card.Header>
				<Card.Content class="relative block">
					<div class="mb-2 text-sm">
						Let {@html katex.renderToString(String.raw`x`)} be a positive integer and let {@html katex.renderToString(
							String.raw`S`
						)} be a finite set of odd prime numbers. Prove that there is at most one way (up to rotation
						and reflection) to place the elements of {@html katex.renderToString(String.raw`S`)} around
						the circle such that the product of any two neighbors is of the form {@html katex.renderToString(
							String.raw`x^2 + x + k`
						)} for some positive integer {@html katex.renderToString(String.raw`k`)}.
					</div>
					<div class="flex space-x-4 text-sm text-muted-foreground">
						<div class="flex items-center">
							<Circle class="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
							NT
						</div>
						<div class="flex items-center">
							<Gauge class="mr-1 h-3 w-3" />
							<Tooltip.Root>
								<Tooltip.Trigger>9</Tooltip.Trigger>
								<Tooltip.Content>
									<p>Difficulty: 9/10</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</div>
						<div class="!ml-auto flex items-center">
							<Heart class="mr-1 h-3 w-3" />
							<Tooltip.Root>
								<Tooltip.Trigger>128</Tooltip.Trigger>
								<Tooltip.Content>
									<p>128 Likes</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button target="_blank" rel="noreferrer" href={config.links.vodb + '/contribute'} variant="outline">Contribute</Button>
			<Button target="_blank" rel="noreferrer" href={config.links.vodb}>Access Database</Button>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="flex w-[350px] flex-col justify-between">
		<Card.Header>
			<Card.Title>Train Like Never Before.</Card.Title>
			<Card.Description
				>Track your problem-solving journey and progress efficiently with the Virtual Olympiad
				Judge (VOJ).
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<Card.Root
				data-x-chunk-name="dashboard-01-chunk-3"
				data-x-chunk-description="A card showing the total active users and the percentage difference from last hour."
			>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Problems Solved</Card.Title>
					<Activity class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">20 this week</div>
					<p class="text-xs text-muted-foreground">+4 from last week</p>
					<Separator class="my-2" />
					<ul class="grid gap-3 text-sm">
						<div class="font-semibold">Recent Submissions</div>
						<Tooltip.Root>
							<Tooltip.Trigger
								><Button variant="ghost" class="flex w-full items-center justify-start px-2">
									<Hash class="mr-2 h-4 w-4 text-secondary-foreground" />

									<div class="flex flex-col items-start">
										<span class="font-mono font-semibold">AIME 2020 I P12</span>
										<span class="text-xs font-normal leading-snug text-muted-foreground">
											3 mins ago
										</span>
									</div>
									<span class="ml-auto"
										><Badge
											class="bg-green-700 hover:bg-green-600 dark:hover:bg-green-800"
											variant="destructive">AC</Badge
										></span
									>
								</Button></Tooltip.Trigger
							>
							<Tooltip.Content>
								<p>ID: 90524</p>
							</Tooltip.Content>
						</Tooltip.Root>

						<Tooltip.Root>
							<Tooltip.Trigger
								><Button variant="ghost" class="flex w-full items-center justify-start px-2">
									<Hash class="mr-2 h-4 w-4 text-secondary-foreground" />

									<div class="flex flex-col items-start">
										<span class="font-mono font-semibold">AIME 2020 I P12</span>
										<span class="text-xs font-normal leading-snug text-muted-foreground">
											2 hours ago
										</span>
									</div>

									<span class="ml-auto"><Badge variant="destructive">WA</Badge></span>
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>ID: 90513</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</ul>
				</Card.Content>
			</Card.Root>
			<p class="mt-4 text-sm font-semibold">Tools <Badge variant="secondary">New</Badge></p>
			<Card.Description
				>Time and lap your solves, use our Shortlist Tracker with pre-configurated collections and
				more. VOJ is packed with useful features.</Card.Description
			>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button variant="outline">
				<GithubLogo class="mr-2 h-4 w-4" />
				GitHub
			</Button>
			<Button target="_blank" rel="noreferrer" href={config.links.voj}>Enter Judge</Button>
		</Card.Footer>
	</Card.Root>
	<!--
	<Card.Root class="flex w-[350px] flex-col justify-between">
		<Card.Header>
			<Card.Title>Above And Beyond.</Card.Title>
			<Card.Description
				>Everyone is free to build non-commercial applications powered by Virtual Olympiad's API.
				Whether it's integrating with VOJ or fetching from VODB, not even the sky's the limit.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<Collapsible.Root class="space-y-2">
				<div class="flex items-center justify-between space-x-4 px-4">
					<h4 class="text-sm font-semibold">Sample Use Cases</h4>
					<Collapsible.Trigger asChild let:builder>
						<Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
							<ChevronsUpDown class="h-4 w-4" />
							<span class="sr-only">Toggle</span>
						</Button>
					</Collapsible.Trigger>
				</div>
				<div class="rounded-md border px-4 py-3 font-mono text-sm">
                    npm i @voly/database
                    <Separator class="my-2"/>
                    {`import { mathDB } from '@voly/database';`} <br><br>
                    
                    {`await mathDB.source('IMO').filter({ subject: 'algebra' });`}
                </div>
				<Collapsible.Content class="space-y-2">
					<div class="rounded-md border px-4 py-3 font-mono text-sm">curl https://api.volympiad.org/judge/v1/submissions?user=1&maxRecords=5</div>
				</Collapsible.Content>
			</Collapsible.Root>
		</Card.Content>
		<Card.Footer class="flex justify-end">
			<Button>View API</Button>
		</Card.Footer>
	</Card.Root>
	-->
</section>
