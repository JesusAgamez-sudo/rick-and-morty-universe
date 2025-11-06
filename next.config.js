/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: 'standalone', // ← IMPORTANTE para Netlify
  trailingSlash: true,  // ← Ayuda con las rutas
  images: {
    unoptimized: true,  // ← Para evitar problemas con optimización de imágenes
  },
}

module.exports = nextConfig