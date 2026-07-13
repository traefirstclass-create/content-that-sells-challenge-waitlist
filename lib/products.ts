export type Product = {
  id: string
  name: string
  description: string
  priceCents: number
  compareAtCents?: number
  physical: boolean
}

export const ADMISSION_PLANS = {
  general: 'general-admission',
  vip: 'vip-admission',
} as const

export type PlanKey = keyof typeof ADMISSION_PLANS

export const PRODUCTS: Record<string, Product> = {
  'general-admission': {
    id: 'general-admission',
    name: 'General Admission — Content That Sells™ Challenge',
    description: 'Five live challenge sessions, daily replays, and community access.',
    priceCents: 9700,
    physical: false,
  },
  'vip-admission': {
    id: 'vip-admission',
    name: 'VIP Experience — Content That Sells™ Challenge',
    description:
      'Everything in General Admission, plus VIP coaching hours, personalized consulting, and priority support.',
    priceCents: 19700,
    compareAtCents: 29700,
    physical: false,
  },
  workbook: {
    id: 'workbook',
    name: 'The CAPTURE Framework™ Guided Workbook',
    description: 'Digital + print-ready companion workbook for the challenge.',
    priceCents: 4700,
    compareAtCents: 7900,
    physical: false,
  },
  'paperback-manual': {
    id: 'paperback-manual',
    name: 'The Implementation Manual (Paperback)',
    description:
      'Printed paperback edition of the Implementation Manual, mailed to you as soon as you complete the challenge.',
    priceCents: 1200,
    physical: true,
  },
  merch: {
    id: 'merch',
    name: 'Content That Sells™ Merchandise Bundle',
    description: 'T-shirt, hoodie, hat, coffee mug, and notebook.',
    priceCents: 12900,
    compareAtCents: 16600,
    physical: true,
  },
}

export function getProduct(id: string): Product | undefined {
  return PRODUCTS[id]
}
