import React, { useEffect } from 'react'
import { create } from 'react-test-renderer'

import { CartProvider, useCart } from '.'
import { EventItem } from '../../api/types'

const [exampleItem1, exampleItem2]: EventItem[] = [
  { id: '1', date: new Date(), image: '', location: 'l', name: 'Event1', price: 1 },
  { id: '2', date: new Date(), image: '', location: 'l', name: 'Event2', price: 3 },
]

describe('Cart Context', () => {
  it('it should append items', () => {
    const TestComponent = () => {
      const { addToCart, items } = useCart()

      useEffect(() => {
        addToCart(exampleItem1)
        addToCart(exampleItem2)
        addToCart(exampleItem1)
      }, [])

      return (
        <>
          <>{items.length}</>
          <>{items.at(0)?.qty}</>
          <>{items.at(1)?.qty}</>
        </>
      )
    }

    const comDef = (
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )

    const component = create(comDef)
    component.update(comDef)

    expect(component.toJSON()).toEqual(['2', '2', '1'])
  })

  it('it should update quantities', () => {
    const TestComponent = () => {
      const { addToCart, items, updateQty } = useCart()

      useEffect(() => {
        addToCart(exampleItem1)
        addToCart(exampleItem2)

        updateQty(exampleItem2.id, 12)
        updateQty(exampleItem1.id, 0)
      }, [])

      return (
        <>
          <>{items.length}</>
          <>{items.at(0)?.qty}</>
        </>
      )
    }

    const comDef = (
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )

    const component = create(comDef)
    component.update(comDef)

    expect(component.toJSON()).toEqual(['1', '12'])
  })
})
