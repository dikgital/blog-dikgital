'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GTM() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side after hydration
    setIsClient(true)
    
    // Only initialize on production domain
    const isProduction = !window.location.hostname.includes('vercel.app') && 
                        !window.location.hostname.includes('localhost') && 
                        !window.location.hostname.includes('127.0.0.1')
    
    if (!isProduction || !GTM_ID) return

    // Initialize dataLayer if not exists
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      })
    }
  }, [])

  // Don't render anything until client-side hydration is complete
  if (!isClient || !GTM_ID) return null

  // Check production domain (client-side only)
  const isProduction = typeof window !== 'undefined' &&
                      !window.location.hostname.includes('vercel.app') && 
                      !window.location.hostname.includes('localhost') && 
                      !window.location.hostname.includes('127.0.0.1')

  if (!isProduction) return null

  return (
    <>
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      
      {/* GTM noscript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}