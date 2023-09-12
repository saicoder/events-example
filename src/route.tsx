import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from './components/screen/home-screen'
import { EventScreen } from './components/screen/event-screen'
import { CartScreen } from './components/screen/cart-screen'

export type ParamList = {
  Home: undefined
  Cart: undefined
  Event: {
    id?: string
  }
}

const Stack = createNativeStackNavigator<ParamList>()

export const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)
