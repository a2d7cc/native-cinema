import { GenreService } from '@/components/services/genreService'
import { useQuery } from '@tanstack/react-query'


export const useAdminGenres = () =>
	useQuery(['List of genre'], () => GenreService.getAll(), {
		select: data =>
			data.map(genre => ({
				label: genre.name,
				value: genre._id
			}))
	})
