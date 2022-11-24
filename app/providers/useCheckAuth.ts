import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'

import { errorCatch } from '@/components/services/api/error.api'
import { getNewTokens } from '@/components/services/api/helper.auth'
import { getAccessToken } from '@/components/services/auth/auth.helper'
import { AuthService } from '@/components/services/auth/auth.service'

import { useAuth } from '@/hooks/useAuth'

import { EnumSecureStore } from '@/shared/types/auth.interface'

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken()
			if (accessToken) {
				try {
					await getNewTokens()
				} catch (e) {
					if (errorCatch(e) === 'jwt expired') {
						await AuthService.logout()
						setUser(null)
					}
				}
			}
		}

		checkAccessToken()
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
			if (!refreshToken && user) {
				await AuthService.logout()
				setUser(null)
			}
		}

		checkRefreshToken()
	}, [routeName])
}
