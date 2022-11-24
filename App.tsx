import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Header from '@/components/Header'
import Toast from '@/components/ui/Toast'

import AuthProvider from '@/providers/AuthProvider'

import Navigation from '@/navigation/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</AuthProvider>

				<StatusBar style='light' />
				<Toast />
			</QueryClientProvider>
		</>
	)
}
