'use client'

import { useEffect, useState } from 'react'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function GTM() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (typeof window !== 'undefined' && GTM_ID) {
      // Debug info
      console.log('🔧 GTM Component Debug:', {
        hostname: window.location.hostname,
        GTM_ID: GTM_ID,
        userAgent: navigator.userAgent.substring(0, 50) + '...'
      })

      // Force initialize dataLayer
      ;(window as any).dataLayer = (window as any).dataLayer || []
      
      // Push initial GTM event
      ;(window as any).dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      })

      console.log('✅ DataLayer initialized:', (window as any).dataLayer)

      // Inject GTM script manually
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      
      script.onload = () => {
        console.log('✅ GTM script loaded successfully')
        console.log('📊 Final dataLayer:', (window as any).dataLayer)
      }
      
      script.onerror = (error) => {
        console.error('❌ GTM script failed to load:', error)
      }

      document.head.appendChild(script)
      console.log('🚀 GTM script injected for ID:', GTM_ID)
    } else {
      console.warn('⚠️ GTM not loaded:', {
        hasWindow: typeof window !== 'undefined',
        GTM_ID: GTM_ID
      })
    }
  }, [])

  if (!mounted || !GTM_ID) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}