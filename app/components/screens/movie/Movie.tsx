import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'

import { useMovie } from './useMovie'
import MovieHeader from './MovieHeader'

/* 
[] - Header
[] - Info
[] - Background
[] - Animation
[] - Actor carousel
[] - Video Player
[] - Related movies
[] - useCountOpened
*/

const Movie: FC = () => {
	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
		</Layout>
	)
}

export default Movie
