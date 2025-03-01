import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { z } from 'zod'

const cartSchema = z.object({
  id: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      quantity: z.number(),
      productId: z.string(),
      variantId: z.string(),
    })
  ),
})

type Cart = z.infer<typeof cartSchema>

type CartStore = {
  cart: Cart
  setCart: (cart: Cart) => void
}

const cartStore = create<CartStore>((set) => ({
  cart: {
    id: '',
    items: [],
  },
  setCart: (cart) => set({ cart }),
}))

cartStore.subscribe(
  (store) => localStorage.setItem('cart', JSON.stringify(store.cart))
)