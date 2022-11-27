import { MovieService } from "@/components/services/movieService"
import { useQuery } from "@tanstack/react-query"

export const useTrending = () => {
	const {isLoading, data: movies} = useQuery(['get trending movies'], 
	() => MovieService.getMostPopularMovies())

	return {isLoading, movies}
}