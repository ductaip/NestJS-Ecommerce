import { createZodDto } from 'nestjs-zod'
import { RegisterBodySchema, RegisterResSchema } from './auth.model'

export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}

export class RegisterResDTO extends createZodDto(RegisterResSchema) {}
