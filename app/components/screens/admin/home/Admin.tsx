import { FC, PropsWithChildren } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { AdminNavigation, Layout } from '@/components/ui'

import Statistics from './statistics/Statistics'

const Admin: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Statistics />
			</ScrollView>
		</Layout>
	)
}

export default Admin
