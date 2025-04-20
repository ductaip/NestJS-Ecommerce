import { HTTPMethod } from 'src/shared/constants/role.constant'
import { PermissionSchema } from 'src/shared/models/shared-permission.model'
import { z } from 'zod'

export const GetPermissionsResSchema = z.object({
  data: z.array(PermissionSchema),
  totalItems: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})

export const GetPermissionsQuerySchema = z
  .object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(10),
  })
  .strict()

export const GetPermissionParamsSchema = z
  .object({
    permissionId: z.coerce.number(),
  })
  .strict()

export const GetPermissionDetailResSchema = PermissionSchema

export const CreatePermissionBodySchema = PermissionSchema.pick({
  name: true,
  path: true,
  method: true,
}).strict()

export const UpdatePermissionBodySchema = CreatePermissionBodySchema

export type PermissionType = z.infer<typeof PermissionSchema>
export type GetPermissionsResType = z.infer<typeof GetPermissionsResSchema>
export type GetPermissionsQueryType = z.infer<typeof GetPermissionsQuerySchema>
export type GetPermissionDetailResType = z.infer<typeof GetPermissionDetailResSchema>
export type CreatePermissionBodyType = z.infer<typeof CreatePermissionBodySchema>
export type GetPermissionParamsType = z.infer<typeof GetPermissionParamsSchema>
export type UpdatePermissionBodyType = z.infer<typeof UpdatePermissionBodySchema>
