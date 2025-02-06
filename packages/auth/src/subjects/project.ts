import { z } from 'zod'

import { projectSchema } from '../models/project'

// export const projectSubject = z.tuple([
//   z.union([
//     z.literal('manage'),
//     z.literal('get'),
//     z.literal('create'),
//     z.literal('update'),
//     z.literal('delete'),
//   ]),
//   z.union([z.literal('Project'), projectSchema])
// ])

//  export type aaaProjectSubject = z.infer<typeof projectSubject>

export type ProjectSubject = ['manage' | 'get' | 'create' | 'update' | 'delete', 'Project' | { id: string, ownerId: string }]