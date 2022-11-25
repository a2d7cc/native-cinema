import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { GenreList, Rating } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

import { useGetMediaSource } from '@/utils/useGetMediaSource'

const CarouselItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='w-48'>
			<Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
				<View className='absolute z-1 right-2 top-2'>
					{/* Favorite Button */}
				</View>

				<Image
					style={{
						height: 200,
						resizeMode: 'cover',
						borderWidth: 1,
						borderColor: 'white'
					}}
					className='w-full rounded-xl mb-2.5'
					source={useGetMediaSource(movie.poster)}
				/>
			</Pressable>
			<View className='items-center'>
				<Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
					<Rating rating={movie.rating} />
					<Text
						className='text-white text-3xl font-semibold opacity-95 mb-2.5'
						numberOfLines={1}
					>
						{movie.title}
					</Text>
				</Pressable>

				<GenreList genres={movie.genres} />
			</View>
		</View>
	)
}

export default CarouselItem
