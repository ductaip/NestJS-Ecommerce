import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import envConfig from 'src/shared/config'
import fs from 'fs'
import path from 'path'

import * as React from 'react'
import { OTPEmail } from 'emails/otp'

// const otpTemplate = fs.readFileSync(path.resolve('src/shared/email-templates/otp.html'), {
//   encoding: 'utf-8',
// })

@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }

  sendOTP(payload: { email: string; code: string }) {
    const subject = 'Your OTP code'
    const atIndex = payload.email.indexOf('@')
    return this.resend.emails.send({
      from: 'Ecommerce Nestjs<no-reply@ductaiphan.io.vn>',
      to: [payload.email],
      subject,
      react: <OTPEmail otpCode={payload.code} title={subject} userEmail={payload.email.slice(0, atIndex)} />,
    })
  }
}
