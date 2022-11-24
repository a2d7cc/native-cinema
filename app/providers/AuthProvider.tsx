import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'
import { Text, View } from 'react-native'

import { IUser } from '@/shared/types/user.interface'

import { IContext, TypeUserState } from './auth-provider.interface'
import { getAccessToken, getUserFromStorage } from '@/components/services/auth/auth.helper'

export const AuthContext = createContext({} as IContext)
SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {

			try {
				const accessToken = await getAccessToken()
				if(accessToken) {
					const user = await getUserFromStorage()

					if(isMounted) {
						setUser(user)
					}
				}

			} catch (error) {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		checkAccessToken()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
