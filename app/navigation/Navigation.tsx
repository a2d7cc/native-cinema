import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import PrivateNavigation from './PrivateNavigation'
import { TypeRootStackParamList } from './navigation.types'
import { userRoutes } from './user.routes'

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<PrivateNavigation />
		</NavigationContainer>
	)
}

export default Navigation
