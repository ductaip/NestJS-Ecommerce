import { Body, Controller, HttpCode, HttpStatus, Ip, Post } from '@nestjs/common'

import { AuthService } from 'src/routes/auth/auth.service'
import { LoginBodyDTO, RegisterBodyDTO, RegisterResDTO, SendOTPBodyDTO } from './auth.dto'
import { ZodSerializerDto } from 'nestjs-zod'
import { UserAgent } from 'src/shared/decorators/user-agent.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ZodSerializerDto(RegisterResDTO)
  async register(@Body() body: RegisterBodyDTO) {
    return await this.authService.register(body)
  }

  @Post('otp')
  async sendOTP(@Body() body: SendOTPBodyDTO) {
    return await this.authService.sendOTP(body)
  }

  @Post('login')
  async login(@Body() body: LoginBodyDTO, @UserAgent() userAgent: string, @Ip() ip: string) {
    console.log('userAgent', userAgent)
    return this.authService.login({
      ...body,
      userAgent,
      ip,
    })
  }

  // @Post('refresh-token')
  // @HttpCode(HttpStatus.OK)
  // async refreshToken(@Body() body: any) {
  //   return this.authService.refreshToken(body.refreshToken)
  // }

  // @Post('logout')
  // async logout(@Body() body: any) {
  //   return this.authService.logout(body.refreshToken)
  // }
}
