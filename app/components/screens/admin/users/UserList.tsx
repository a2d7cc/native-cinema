import { FC } from 'react'
import { Text, View } from 'react-native'

import { AdminNavigation, Layout } from '@/components/ui'
import AdminNavItem from '@/components/ui/admin-navigation/AdminNavItem'

const UsersList: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList' />
		</Layout>
	)
}

export default UsersList
