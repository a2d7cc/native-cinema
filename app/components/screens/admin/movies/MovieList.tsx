import { FC } from 'react'

import {
	AdminNavigation,
	AdminTable,
	AdminTableHeader,
	Layout
} from '@/components/ui'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { control, isLoading, data, deleteAsync, createAsync } = useMovies()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Movies' />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Title', 'Main genre', 'Rating']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default MovieList
