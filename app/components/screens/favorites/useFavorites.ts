import { useQuery } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/components/services/userService'


export const useFavorites = () => {
	const { user } = useAuth()

	const { isLoading, data: favoriteMovies } = useQuery(
		['favorite movies'],
		() => UserService.getFavorites(),
		{
			enabled: !!user
		}
	)

	return {
		isLoading,
		favoriteMovies
	}
}
