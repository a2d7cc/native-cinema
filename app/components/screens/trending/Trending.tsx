import { Layout, MovieCatalog } from "@/components/ui";
import {FC} from "react"
import { Text, View } from 'react-native'
import { useTrending } from "./useTrending";

const Trending: FC = () => {

	const {isLoading, movies} = useTrending()


	return (
		<Layout isHasPadding>
		 <MovieCatalog title='Trending' movies={movies} description='Trending movies in excellet quality: legal, safe, without ads' />
		</Layout>
	)
};

export default Trending;
