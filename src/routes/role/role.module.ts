import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { RoleRepo } from './role.repo'

@Module({
  providers: [RoleService, RoleRepo],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
