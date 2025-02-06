import { z } from 'zod'

import type { Role } from "../roles";

export const userSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.literal('User'),
])

export type UaaaserSubject = z.infer<typeof userSubject>

export type UserSubject = ['manage' | 'get' | 'update' | 'delete', 'User' | { id: string, role: Role }]