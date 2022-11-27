import { MaterialCommunityIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { withSpring } from 'react-native-reanimated'

import BlurButton from '../../../blur-button/BlurButton'

import { useFavorite } from './useFavorite'
import { useFavoriteAnimation } from './useFavoriteAnimation'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ movieId, isSmall }) => {
	const { isSmashed, toggleFavorite } = useFavorite(movieId)
	const { outlineStyle, fillStyle, liked } = useFavoriteAnimation(isSmashed)

	return (
		<BlurButton
			isSmall={isSmall}
			className={cn({
				//	'w-8 h-8 rounded-lg': isSmall
			})}
			onPress={() => {
				liked.value = withSpring(liked.value == 1 ? 0 : 1)
				toggleFavorite()
			}}
		>
			<Animated.View
				className='items-center justify-center'
				style={[StyleSheet.absoluteFill, outlineStyle]}
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={isSmall ? 19 : 22}
					color={'white'}
				/>
			</Animated.View>

			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={isSmall ? 19 : 22}
					color={'#DC3F41'}
				/>
			</Animated.View>
		</BlurButton>
	)
}

export default FavoriteButton
