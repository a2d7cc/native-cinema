import { SERVER_URL } from '@/config/api.config'
import { ImageSourcePropType } from 'react-native'

export const useGetMediaSource = (path: string) => ({
	uri: SERVER_URL + path
})
