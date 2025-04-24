import { z } from 'zod'
import { PermissionSchema } from './shared-permission.model'

export const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const RolePermissionsSchema = RoleSchema.extend({
  permissions: z.array(PermissionSchema),
})

export type RoleType = z.infer<typeof RoleSchema>
export type RolePermissionsType = z.infer<typeof RolePermissionsSchema>
