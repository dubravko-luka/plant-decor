// const NEXT_PUBLIC_SERVER_API = 'https://api.sdecor.space';
// const NEXT_PUBLIC_SERVER_API_ENDPOINT = '/api';

module.exports = {
  rewrites: [
    {
      source: '/lien-he',
      destination: '/contact',
    },
    {
      source: '/tu-van',
      destination: '/advise',
    },
    {
      source: '/tu-van/:slug',
      destination: '/advise/:slug',
    },
    {
      source: '/tu-van/view/:id',
      destination: '/advise/view/:id',
    },
    {
      source: '/du-an',
      destination: '/project',
    },
    {
      source: '/du-an/:slug',
      destination: '/project/:slug',
    },
    {
      source: '/du-an/view/:id',
      destination: '/project/view/:id',
    },
    {
      source: '/vuon-trong-nha',
      destination: '/introduce',
    },
    // {
    //   source: '/s-decor/gioi-thieu',
    //   destination: '/s-decor/about',
    // },
    // {
    //   source: '/s-decor/chinh-sach-thanh-toan',
    //   destination: '/s-decor/payment-policy',
    // },
    // {
    //   source: '/s-decor/chinh-sach-van-chuyen',
    //   destination: '/s-decor/shipping-policy',
    // },
    // {
    //   source: '/s-decor/chinh-sach-bao-hanh',
    //   destination: '/s-decor/warranty-policy',
    // },
    // {
    //   source: '/video-du-an-thuc-te',
    //   destination: '/video-project',
    // },
    // {
    //   source: `${process.env.NEXT_PUBLIC_SERVER_API_ENDPOINT || NEXT_PUBLIC_SERVER_API_ENDPOINT}/:path*`,
    //   destination: `${process.env.NEXT_PUBLIC_SERVER_API || NEXT_PUBLIC_SERVER_API}${process.env.NEXT_PUBLIC_SERVER_API_ENDPOINT || NEXT_PUBLIC_SERVER_API_ENDPOINT}/:path*`,
    // },
  ],
};
