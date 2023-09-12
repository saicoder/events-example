import { GluestackUIProvider, Text, Box, config } from '@gluestack-ui/themed'
import { Router } from './src/route'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CartProvider } from './src/context/cart'

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config.theme}>
        <CartProvider>
          <Router />
        </CartProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}
