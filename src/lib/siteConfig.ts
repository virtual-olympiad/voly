const links = {
	github: 'https://github.com/virtual-olympiad',
    github_voly: 'https://github.com/virtual-olympiad/voly',
	voly: 'https://voly.mathetal.org',
	vodb: 'https://vodb.mathetal.org',
	voj: 'https://voj.mathetal.org',
	polarity: 'https://polarity.sh'
};

const site = {
	name: 'Virtual Olympiad',
	url: 'https://vo.mathetal.org',
	ogImage: 'https://vo.mathetal.org/vo.png',
	description: ' Hosted platforms, APIs and tools for Science Olympiads.',
	keywords: `Virtual Olympiad,VO,VOLY,VOJ,VODB,math,science,olympiad`
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
