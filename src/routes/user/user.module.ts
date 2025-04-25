import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserRepo } from './user.repo'

@Module({
  providers: [UserService, UserRepo],
  controllers: [UserController],
})
export class UserModule {}
