import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Header from '@/components/Header'

import AuthProvider from '@/providers/AuthProvider'

import Navigation from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>

			<StatusBar style='light' />
		</>
	)
}
