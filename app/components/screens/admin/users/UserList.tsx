import { FC } from 'react'
import { Text, View } from 'react-native'

import { AdminNavigation, AdminTable, Layout } from '@/components/ui'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'

import { useUsers } from './useUsers'

const UsersList: FC = () => {
	const { control, isLoading, data, deleteAsync } = useUsers()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList' />
			<AdminHeader control={control} />
			<AdminTable
					tableItems={data}
					isLoading={isLoading}
					headerItems={['Email', 'Date register']}
					removeHandler={deleteAsync}
				/>
		</Layout>
	)
}

export default UsersList
