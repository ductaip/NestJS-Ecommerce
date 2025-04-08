import { UnauthorizedException } from '@nestjs/common'

export const UnauthorizedAccessException = new UnauthorizedException('Error.UnauthorizedAccess')
