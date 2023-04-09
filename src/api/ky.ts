import ky from 'ky'

import { getContentType } from '@/utils/api.utils'

export const API_URL = process.env.API_URL

export const $kyBase = ky.create({
	prefixUrl: API_URL
})

export const $ky = $kyBase.extend({
	credentials: 'include',
	headers: getContentType()
})
