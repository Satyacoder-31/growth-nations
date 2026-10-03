import { useEffect, useState } from 'react'

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
      : false
  )

  useEffect(() => {
    const m = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handler = () => setIsMobile(m.matches)
    m.addEventListener('change', handler)
    return () => m.removeEventListener('change', handler)
  }, [breakpoint])

  return isMobile
}
