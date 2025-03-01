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