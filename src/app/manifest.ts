import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dikgital',
    short_name: 'Dikgital',
    description: 'Insights dan tips seputar Technical SEO dan Python untuk SEO dari Diki Atmodjo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2d2d2d',
    theme_color: '#2d2d2d',
    icons: [
      {
        src: '/favicon/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}