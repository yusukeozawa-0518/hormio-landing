'use client'

import { useEffect, useState } from 'react'

const FALLBACK_URL =
  'https://expo.dev/accounts/yusukeizawa/projects/hispital-steps3/builds/d051502f-6ff7-4893-9108-c9353c11c22a'

export default function OpenPageClient({ lineUserId }: { lineUserId?: string }) {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const deepLink = lineUserId
      ? `hormio://app?lineUserId=${encodeURIComponent(lineUserId)}`
      : 'hormio://app'

    window.location.href = deepLink

    const timer = setTimeout(() => {
      setShowFallback(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [lineUserId])

  if (!showFallback) {
    return (
      <main style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
        <p>アプリを起動しています...</p>
      </main>
    )
  }

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <p>アプリが自動的に起動しませんでした。</p>
      <a href={FALLBACK_URL}>アプリをダウンロード / インストール</a>
    </main>
  )
}
