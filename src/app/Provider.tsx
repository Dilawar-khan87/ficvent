'use client'

import StoreProvider from './StoreProvider'

export default function Provider({ children }: { children: React.ReactNode }) {
  return <StoreProvider count={0}>{children}</StoreProvider>
}
