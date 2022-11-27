import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader, MovieCatalog, NotFound } from '@/components/ui'

import { useGenre } from './useGenre'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? 
			(
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description='Genre movies in excellet quality: legal, safe, without ads'
					isBackButton
				/>
			) : (<NotFound />)}
		</Layout>
	)
}

export default Genre
