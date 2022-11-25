import { useQuery } from '@tanstack/react-query'

import { MovieService } from '@/components/services/movieService'

export const useGetAllMovies = () => {
	const { data: movies, isLoading } = useQuery(
		['get movies'],
		() => MovieService.getAll(),
		{
			select: data => data.slice(0, 10)
		}
	)

	return { movies, isLoading }
}
