import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { BlurView } from 'expo-blur'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { IBlurButton } from './blur-button.interface'

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	style,
	isSmall = false,
	icon,
	iconSize = 21,
	color = '#fff',
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={cn(
					cn(
						'items-center justify-center overflow-hidden rounded-2xl',
						isSmall ? 'w-8 h-8 rounded-lg' : 'w-12 h-12 rounded-2xl'
					)
					// className
				)}
				style={style}
			>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurButton
