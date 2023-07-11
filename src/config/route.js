module.exports = {
	rewrites: [
		{
			source: '/lien-he',
			destination: '/contact',
		},
		{
			source: '/san-pham',
			destination: '/product',
		},
		{
			source: '/san-pham/:slug',
			destination: '/product/:slug',
		},
		{
			source: '/tu-van-thiet-ke',
			destination: '/design-consultancy',
		},
		{
			source: '/tu-van-thiet-ke/:slug',
			destination: '/design-consultancy/:slug',
		},
	],
};
