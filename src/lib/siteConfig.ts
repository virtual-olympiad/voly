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
	description: 'Hosted platforms, APIs and tools for Science Olympiads.',
	keywords: `Virtual Olympiad,volympiad,VO,VOLY,VOJ,VODB,math,science,olympiad`
};

const nav = [
	{
		title: 'About',
		href: '/about'
	},
	{
		title: 'Arena',
		href: links.voa
	},
	{
		title: 'Judge',
		href: links.voj
	},
	{
		title: 'Database',
		href: links.vodb
	},
	/**
	{
		title: 'API',
		href: '/api'
	},
	*/
	{
		title: 'Team',
		href: '/team'
	},
	{
		title: 'Sponsor',
		href: '/sponsor'
	}
];

export { links, site, nav };
