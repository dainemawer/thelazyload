import Cosmic from 'cosmicjs'
import { BUCKET_SLUG, READ_KEY } from '@lib/constants'

export const bucket = Cosmic().bucket({
    slug: BUCKET_SLUG,
    read_key: READ_KEY,
})

