import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TransformInterceptor } from './shared/interceptor/transform.interceptor'
import { NestExpressApplication } from '@nestjs/platform-express'
import { UPLOAD_DIR } from './shared/constants/other.constant'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // app.useGlobalInterceptors(new TransformInterceptor())
  app.enableCors()
  // app.useStaticAssets(UPLOAD_DIR, {
  //   prefix: '/media/static',
  // })
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
