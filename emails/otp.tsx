import { Body, Button, Container, Head, Heading, Html, Img, Link, Section, Text } from '@react-email/components'
import * as React from 'react'

interface OTPEmailProps {
  otpCode: string
  title: string
  userEmail: string
}

const logoUrl = 'https://i.pinimg.com/736x/24/5f/1c/245f1c842f83889bfa7a7dfb2d136dd5.jpg'
const facebookIcon =
  'https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook'
const instagramIcon =
  'https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram'
const twitterIcon =
  'https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter'
const youtubeIcon =
  'https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube'

export const OTPEmail = ({ otpCode, title, userEmail }: OTPEmailProps) => (
  <Html>
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Body style={main}>
      <Container style={container}>
        <Section style={content}>
          <Img src={logoUrl} width="80" height="80" alt="Logo" style={logo} />
          <Heading style={heading}>Mã xác thực OTP</Heading>
          <Text style={greeting}>Hello {userEmail},</Text>
          <Text style={paragraph}>
            Hãy nhập mã xác thực OTP sau vào website. Mã OTP có hiệu lực trong{' '}
            <span style={{ fontWeight: 600, color: '#1f1f1a' }}>5 phút</span>. Vui lòng không chia sẻ mã này với người
            khác.
          </Text>
          <Section style={codeContainer}>
            <Text style={code}>{otpCode}</Text>
          </Section>
        </Section>

        <Text style={supportText}>
          Cần hỗ trợ? Liên hệ tại{' '}
          <Link href="mailto:mycompany@gmail.com" style={supportLink}>
            mycompany@gmail.com
          </Link>{' '}
          hoặc truy cập{' '}
          <Link href="" style={supportLink}>
            Trung tâm hỗ trợ
          </Link>
        </Text>

        <Section style={footer}>
          <Section style={socialIcons}>
            <Button href="https://www.facebook.com/rimurucool" style={socialButton}>
              <Img src={facebookIcon} width="36" height="36" alt="Facebook" />
            </Button>
            <Button href="https://www.instagram.com/dwctaiph_/" style={socialButton}>
              <Img src={instagramIcon} width="36" height="36" alt="Instagram" />
            </Button>
            <Button href="" style={socialButton}>
              <Img src={twitterIcon} width="36" height="36" alt="Twitter" />
            </Button>
            <Button href="" style={socialButton}>
              <Img src={youtubeIcon} width="36" height="36" alt="Youtube" />
            </Button>
          </Section>
          <Text style={footerText}>Copyright © 2025 Company. All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

OTPEmail.PreviewProps = {
  otpCode: '144833',
  title: 'Mã OTP',
  userEmail: 'user@example.com',
} as OTPEmailProps

export default OTPEmail

const main = {
  margin: 0,
  fontFamily: "'Poppins', sans-serif",
  background: '#fff',
  fontSize: '14px',
}

const container = {
  maxWidth: '680px',
  margin: '0 auto',
  padding: '45px 30px 60px',
  background: 'linear-gradient(120deg, #6ab7f5 0%, #a78bfa 50%, #e0c3fc 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '800px 452px',
  backgroundPosition: 'top center',
  fontSize: '14px',
  color: '#434343',
}

const content = {
  margin: 0,
  marginTop: '70px',
  padding: '92px 30px 115px',
  background: 'linear-gradient(145deg, #ffffff 0%, #e6f0ff 100%)',
  borderRadius: '30px',
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(20,50,70,.15)',
}

const logo = {
  margin: '0 auto',
  display: 'block',
  borderRadius: '100%',
  border: '2px solid #e0e7ff',
}

const heading = {
  margin: 0,
  marginTop: '20px',
  fontSize: '24px',
  fontWeight: 500,
  color: '#1f1f1a',
}

const greeting = {
  margin: 0,
  marginTop: '17px',
  fontSize: '16px',
  fontWeight: 500,
}

const paragraph = {
  margin: 0,
  marginTop: '17px',
  fontWeight: 500,
  letterSpacing: '0.56px',
}

const codeContainer = {
  background: 'linear-gradient(90deg, #e0e7ff 0%, #c3dafe 100%)',
  borderRadius: '6px',
  margin: '60px auto 0',
  width: '300px',
  padding: '10px 0',
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,.05)',
}

const code = {
  margin: 0,
  fontSize: '40px',
  fontWeight: 600,
  letterSpacing: '25px',
  color: '#ba3d4f',
  textAlign: 'center',
}

const supportText = {
  maxWidth: '400px',
  margin: '20px auto',
  marginTop: '90px',
  textAlign: 'center',
  fontWeight: 500,
  color: '#8c8c8c',
}

const supportLink = {
  color: '#499fb6',
  textDecoration: 'none',
}

const footer = {
  width: '100%',
  maxWidth: '490px',
  margin: '20px auto 0',
  textAlign: 'center',
  borderTop: '1px solid #e6ebf1',
}

const socialIcons = {
  margin: 0,
  marginTop: '16px',
}

const socialButton = {
  display: 'inline-block',
  marginLeft: '8px',
  padding: 0,
  background: 'none',
  border: 'none',
}

const footerText = {
  margin: 0,
  marginTop: '16px',
  color: '#434343',
}
