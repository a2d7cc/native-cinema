import { FC, useRef } from 'react'
import { Animated, Text, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'

import MovieBackground from './MovieBackground'
import MovieHeader from './MovieHeader'
import MovieContent from './movie-content/MovieContent'
import MovieInfo from './movie-content/MovieInfo'
import { useMovie } from './useMovie'
import { useUpdateCountOpened } from './useUpdateCountOpened'

/* 
[x] - Header
[x] - Info
[x] - Background
[x] - MovieContent
[x] - Actor carousel
[x] - Related movies
[x] - Animation
[] - Video Player
[] - useCountOpened
*/

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current

	const { movie, isLoading } = useMovie()
	useUpdateCountOpened()


	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} y={y} />
			<MovieBackground movie={movie} y={y} />
			<MovieContent movie={movie} y={y} />
		</Layout>
	)
}

export default Movie
