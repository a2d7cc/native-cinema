import { Audio, ResizeMode, Video } from 'expo-av'
import { FC, useEffect, useRef } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@/components/ui'

import { useGetMediaSource } from '@/utils/useGetMediaSource'

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
	const videoRef = useRef<Video>(null)

	useEffect(() => {
		const enableAudio = async () => {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				playsInSilentModeIOS: true,
				staysActiveInBackground: false,
				shouldDuckAndroid: false
			})

			await videoRef.current?.stopAsync()
		}

		let ignore = enableAudio()
	}, [])

	return (
		<>
			<Button
				icon='play'
				className='mb-6'
				onPress={async () => {
					await videoRef.current?.presentFullscreenPlayer()
					await videoRef.current?.playAsync()
				}}
			>
				Watch movie
			</Button>
			<View>
				<Video
					ref={videoRef}
					source={useGetMediaSource(video)}
					style={{ height: 180 }}
					className='mb-5 w-full hidden'
					shouldPlay
					useNativeControls
					resizeMode={ResizeMode.CONTAIN}
				/>
			</View>
		</>
	)
}

export default VideoPlayer