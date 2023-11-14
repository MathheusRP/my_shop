/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.terabyteshop.com.br", 
      "cdn.pichau.com.br", 
      "dlcdnwebimgs.asus.com", 
      "images.tcdn.com.br",
      "shopinfo.vteximg.com.br",
      "www.mercanteexpress.com.br",
      "m.media-amazon.com",
      "static.cdnlive.com.br",
      "b2bleonorashop.vtexassets.com",
    ],
    // remotePatterns: [
    //     {
    //         protocol: 'https',
    //         hostname: '**',
    //         port: '',
    //         pathname: '**',
    //     },
    // ],
},

}



module.exports = nextConfig

