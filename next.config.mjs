/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ojmghjuescqksdoleofu.supabase.co',
            },
        ],
    },
};

export default nextConfig;