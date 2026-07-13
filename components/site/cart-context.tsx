'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { PRODUCTS } from '@/lib/products'

type CartContextValue = {
  items: string[]
  toggleItem: (id: string) => void
  hasItem: (id: string) => boolean
  totalCents: number
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([])

  const toggleItem = useCallback((id: string) => {
    setItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }, [])

  const hasItem = useCallback((id: string) => items.includes(id), [items])

  const clear = useCallback(() => setItems([]), [])

  const totalCents = useMemo(
    () => items.reduce((sum, id) => sum + (PRODUCTS[id]?.priceCents ?? 0), 0),
    [items],
  )

  const value = useMemo(
    () => ({ items, toggleItem, hasItem, totalCents, clear }),
    [items, toggleItem, hasItem, totalCents, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
