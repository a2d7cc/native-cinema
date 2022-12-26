import { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

import { AdminNavigation, Layout } from '@/components/ui'

const Admin: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
		</Layout>
	)
}

export default Admin
