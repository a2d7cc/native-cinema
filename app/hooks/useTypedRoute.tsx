import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export const uesTypedRoute = () => useRoute<RouteProp<TypeRootStackParamList>>()
