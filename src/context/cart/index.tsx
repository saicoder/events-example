import React, { useContext, useState } from 'react'
import { EventItem } from '../../api/types'

export interface CartItem {
  qty: number
  item: EventItem
}

export interface CartContext {
  items: CartItem[]
  addToCart: (_: EventItem) => void
  updateQty: (id: string, qty: number) => void
}

export const CartContext = React.createContext<CartContext>({
  items: [],
  addToCart: () => {
    throw new Error('Unimplemented')
  },
  updateQty: () => {
    throw new Error('Unimplemented')
  },
})

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (event: EventItem) =>
    setItems((items) => {
      // Add New Non Existing Item
      if (items.every((t) => t.item.id !== event.id)) return [...items, { qty: 1, item: event }]

      // Item Exists, Increment QTY
      return items.map((t) => (t.item.id !== event.id ? t : { ...t, qty: t.qty + 1 }))
    })

  const updateQty = (id: string, qty: number) =>
    setItems((items) => {
      // Update QTY
      const newItems = items.map((t) => (t.item.id !== id ? t : { ...t, qty }))

      // Filter empty items
      return newItems.filter((t) => t.qty > 0)
    })

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
