import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { useGetAllMovies } from './useGetAllMovies'
import Carousel from './carousel/Carousel'

const Home: FC<PropsWithChildren> = ({ children }) => {
	const { navigate } = useTypedNavigation()

	const { isLoading, movies } = useGetAllMovies()

	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
		</Layout>
	)
}

export default Home
