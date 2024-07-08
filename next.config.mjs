/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true
            }
        ]
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
