import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { RolesService } from './roles.service'
import { AuthRepository } from './auth.repo'

@Module({
  providers: [AuthService, RolesService, AuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
