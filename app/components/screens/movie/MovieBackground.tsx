import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'

import { IMovie } from '@/shared/types/movie.interface'

import { useGetMediaSource } from '@/utils/useGetMediaSource'

interface IMovieBackground {
	movie: IMovie
}

const MovieBackground: FC<IMovieBackground> = ({ movie }) => {
	const { top } = useSafeAreaInsets()

	return (
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
				source={useGetMediaSource(movie.poster)}
			/>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject }}
				start={[0, 0.3]}
				end={[0, 0.8]}
				colors={['transparent', 'rgba(0, 0, 0, 0.2)', '#090909']}
			/>
		</Animated.View>
	)
}

export default MovieBackground
