/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { // configuramos de donde van a venir las imagenes
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com' //  de ahi van a venir las imagenes
            }
        ]
    }
};

export default nextConfig;
