import { useQuery } from '@tanstack/react-query'

import { MovieService } from '@/components/services/movieService'

export const useTrending = (limit?: number) => {
	const { isLoading, data: movies } = useQuery(
		['get trending movies'],
		() => MovieService.getMostPopularMovies(),
		{
			select: data => (limit ? data.slice(0, limit) : data)
		}
	)

	return { isLoading, movies }
}
