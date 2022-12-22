import { IMovie } from "@/shared/types/movie.interface";
import { FC } from "react";
import { Text, View } from 'react-native'

interface IMovieHeader {
	movie: IMovie
}

const MovieInfo: FC<IMovieHeader> = ({movie}) => {
	return (
		<View>
		 <Text>MovieInfo</Text>
		</View>
	)
};

export default MovieInfo;