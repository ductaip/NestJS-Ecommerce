/* eslint-disable @typescript-eslint/no-namespace */
import { ProductTranslationType } from './shared/models/shared-product-translation.model'
import { VariantsType } from './shared/models/shared-product.model'

declare global {
  namespace PrismaJson {
    type Variants = VariantsType
    type ProductTranslations = Pick<ProductTranslationType, 'id' | 'name' | 'description' | 'languageId'>[]
    type Receiver = {
      name: string
      phone: string
      address: string
    }
  }
}
