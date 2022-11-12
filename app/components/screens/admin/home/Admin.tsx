import { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

const Admin: FC<PropsWithChildren> = ({ children }) => {
	return (
		<View>
			<Text>Admin</Text>
		</View>
	)
}

export default Admin
