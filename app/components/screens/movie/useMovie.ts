import { useQuery } from '@tanstack/react-query'

import { MovieService } from '@/components/services/movieService'

import { useTypedRoute } from '@/hooks/useTypedRoute'

export const useMovie = () => {
	const { params } = useTypedRoute<'Movie'>()

	const { isLoading, data: movie } = useQuery(
		['get genre by slug', params.slug],
		() => MovieService.getBySlug(params.slug)
	)

	return { isLoading, movie }
}
