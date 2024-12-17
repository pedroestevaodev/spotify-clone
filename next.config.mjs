/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bqlmlgltfxuhzompykig.supabase.co',
            },
        ],
    },
};

export default nextConfig;