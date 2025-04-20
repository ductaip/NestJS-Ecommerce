import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 3000)
  const server = app.getHttpAdapter().getInstance()
  const router = server.router

  const availableRoutes: [] = router.stack
    .map((layer) => {
      if (layer.route) {
        const path = layer.route?.path
        const method = String(layer.route?.stack[0].method).toUpperCase()
        return {
          path,
          method,
        }
      }
    })
    .filter((item) => item !== undefined)
  console.log(availableRoutes)
  process.exit(0)
}
bootstrap()
