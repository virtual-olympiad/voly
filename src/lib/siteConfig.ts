const links = {
	github: 'https://github.com/virtual-olympiad',
    github_voa: 'https://github.com/virtual-olympiad/arena',
	voa: 'https://arena.volympiad.org',
	vodb: 'https://db.volympiad.org',
	voj: 'https://judge.volympiad.org',
	polarity: 'https://polarity.sh'
};

const site = {
	name: 'Virtual Olympiad',
	url: 'https://volympiad.org',
	ogImage: 'https://volympiad.org/vo.png',
	description: ' Hosted platforms, APIs and tools for Science Olympiads.',
	keywords: `Virtual Olympiad,volympiad,VO,VOLY,VOJ,VODB,math,science,olympiad`
};

const nav = [
	{
		title: 'About',
		href: '/about'
	},
	{
		title: 'VOLY',
		href: '/voly'
	},
	{
		title: 'Judge',
		href: '/voj'
	},
	{
		title: 'Database',
		href: '/vodb'
	},
	{
		title: 'API',
		href: '/api'
	},
	{
		title: 'Contribute',
		href: 'contribute'
	}
];

export { links, site, nav };
